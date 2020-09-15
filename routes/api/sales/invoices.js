const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const SalesOrder = require('../../../model/SalesOrder');
const SalesInvoice = require('../../../model/SalesInvoice');
const SalesInvoiceItem = require('../../../model/SalesInvoiceItem');
const ObjectId = mongoose.Types.ObjectId;

async function getCode() {
    let response = {};
    try {
        let date = new Date();
        let code = 'SI';
        let month = ("0" + (date.getMonth() + 1)).slice(-2).toString();
        let year = date.getFullYear().toString().substr(-2).toString();
        let data = await SalesInvoice.aggregate([
            {$project: {no: 1, autonumber: 1, month: {$month: '$transdate'}, year: {$year: '$transdate'}, maxVal: { $max: '$autonumber' }}},
            {$match: {month: date.getMonth() + 1, year: date.getFullYear()}},
            {$sort: {autonumber : -1}},
            { $limit : 1 }
        ]);
        let monthyear = month+year;
        let newcode = code + '-' + monthyear + '-0001';
        if(data.length > 0) {
            data = Object.assign({}, data);
            let lastno = data[0].no;
            let auto = lastno.substring(lastno.length-4);
            let str =  '' + (parseInt(auto) + 1);
            let lstr = '0000';
            newcode = code + '-' + monthyear + '-' +(lstr+str).substring(str.length);
        }
        response = {
                    success: true,
                    code: newcode,
                    msg: "Code generate successfully."
                };
    }catch(err) {
        response = {
            msg: `There was an error.${err}`
        };
    }

    return response;
}

/**
 * @route POST api/sales/invoices/generate
 * @desc Generate invoice
 * @access Public
 */
router.post('/generate', async (req, res) => {
    let {
        transdate,
        customer,
        order,
        user,
        notes,
        items
    } = req.body

    let getNewNo = await getCode();
    let no = '';
    if(getNewNo.success){
        no = getNewNo.code;
    }
    
    // Check for empty value
    if (no == ''){
        return res.status(400).json({
            msg: "No. is ungenerated."
        });
    }

    if (customer == '') {
        return res.status(400).json({
            msg: "Customer is required."
        });
    }

    if (order == '') {
        return res.status(400).json({
            msg: "Order is required."
        });
    }

    if (user == '') {
        return res.status(400).json({
            msg: "Login is required."
        });
    }

    if(items.length == 0) {
        return res.status(400).json({
            msg: "Receipt Items are required."
        });
    }

    // The data is valid and now we can delete the data
    let response = {};
    let data = new SalesInvoice({
        no,
        order,
        transdate,
        customer,
        user,
        notes
    });

    try {
        let header = await data.save();
        items.forEach(item => {
            SalesInvoiceItem.create({
                invoice : header._id,
                product : item.product,
                order_item : item.order_item,
                order_qty : item.order_qty,
                deliv_qty : item.deliv_qty,
                qty: item.qty,
                price: item.price
            });
        });
        let update =  await SalesOrder.findOneAndUpdate({ _id : order },{
            status : 4
        },{ new : true });
        response = {
            data: data,
            success: true,
            msg: "Hurry! Sales Invoice is now registered."
        };
    }catch(err) {
        response = {
            msg: `There was an error.${err}`
        };
    }

    return res.json(response);
});

/**
 * @route GET api/sales/invoices/data
 * @desc Get data
 * @access Public
 */
router.get('/data', async (req, res) => {
    let response = {}
    try {
        let data = await SalesInvoice.find().populate(['user','customer','order']).sort({ autonumber : -1 });
        if (data) {
            response = {
                data: data,
                success: true,
                msg: 'Data load successfully.'
            };
        }
    }catch(err){
        response = {
            success: false,
            msg: `There was an error ${err}.`
        };
    }

    return res.json(response);
});

/**
 * @route GET api/sales/invoices/:id
 * @desc Get data by id
 * @access Public
 */
router.get('/data/:id', async (req, res) => {
    let id = req.params.id;
    let response = {}
    if (!mongoose.Types.ObjectId.isValid(id)){
        response = {
            success: false,
            msg: 'Data not found.'
        };
    }else{
        try {
            let data = await SalesInvoice.findOne({  _id : id }).populate(['user','customer']);
            if (data) {
                response = {
                    data: data,
                    success: true,
                    msg: 'Data load successfully.'
                };
            }
        }catch(err){
            response = {
                success: false,
                msg: `There was an error ${err}.`
            };
        }
    }
    return res.json(response);
});

/**
 * @route GET api/sales/invoices/returnable/:id
 * @desc Get data
 * @access Public
 */
router.get('/returnable/:id', async (req, res) => {
    let id = req.params.id;
    let response = {}
    if (!mongoose.Types.ObjectId.isValid(id)){
        response = {
            success: false,
            msg: 'Data not found.'
        };
    }else{
        try {
            let data = await SalesInvoiceItem.aggregate(
                [
                    {
                        $group:
                        {
                            _id: "$invoice",
                            qtyReturnable: { $sum: { $subtract : ["$qty","$return_qty"]}}
                        }
                    },
                    {
                        $lookup:
                        {
                            from: "salesinvoices",
                            localField: "_id",
                            foreignField: "_id",
                            as: "headers"
                        }
                    },
                    {
                       $replaceRoot: { newRoot: { $mergeObjects: [ { $arrayElemAt: [ "$headers", 0 ] }, "$$ROOT" ] } }
                    },
                    { $project: { headers: 0 } },
                    { $match : {qtyReturnable : { $gt:0 }, customer: ObjectId(id), status: 1}}
                ]
            );
            if (data) {
                response = {
                    data: data,
                    success: true,
                    msg: 'Data load successfully.'
                };
            }
        }catch(err){
            response = {
                success: false,
                msg: `There was an error ${err}.`
            };
        }
    }
    return res.json(response);
});

/**
 * @route GET api/sales/invoices/item
 * @desc Get data
 * @access Public
 */
router.post('/item', async (req, res) => {
    let {
        invoice
    } = req.body
    let response = {}
    try {
        let data = await SalesInvoiceItem.find({ invoice : invoice }).populate('product');
        if (data) {
            response = {
                data: data,
                success: true,
                msg: 'Data load successfully.'
            };
        }
    }catch(err){
        response = {
            success: false,
            msg: `There was an error ${err}.`
        };
    }

    return res.json(response);
});

/**
 * @route POST api/sales/invoices/void
 * @desc Cancel order data
 * @access Publics
 */
router.post('/void', async (req, res) => {
    let {
        id
    } = req.body
    // The data is valid and now we can close the invoice data
    let response = {};
    try {
        let data =  await SalesInvoice.findOneAndUpdate({ _id : id },{
            status: 2
        },{ new : true });

        let updateorder =  await SalesOrder.findOneAndUpdate({ _id : data.order },{
            status: 2
        },{ new : true });
        if (data) {
            response = {
                success: true,
                msg: "Hurry! Order void successfully."
            };
        }
    }catch(err) {
        response = {
            msg: `There was an error.${err}`
        };
    }

    return res.json(response);
});

/**
 * @route POST api/sales/invoices/close
 * @desc Close invoice data
 * @access Publics
 */
router.post('/close', async (req, res) => {
    let {
        id
    } = req.body
    // The data is valid and now we can close the invoice data
    let response = {};
    try {
        let data =  await SalesInvoice.findOneAndUpdate({ _id : id },{
            status: 1
        },{ new : true });

        if (data) {
            response = {
                success: true,
                msg: "Hurry! Invoice closed successfully."
            };
        }
    }catch(err) {
        response = {
            msg: `There was an error.${err}`
        };
    }

    return res.json(response);
});

/**
 * @route POST api/sales/invoices/open
 * @desc open close order data
 * @access Publics
 */
router.post('/open', async (req, res) => {
    let {
        id
    } = req.body
    // The data is valid and now we can open  closed invoice data
    let response = {};
    try {
        let data =  await SalesInvoice.findOneAndUpdate({ _id : id },{
            status: 0
        },{ new : true });

        if (data) {
            response = {
                success: true,
                msg: "Hurry! Invoice open successfully."
            };
        }
    }catch(err) {
        response = {
            msg: `There was an error.${err}`
        };
    }

    return res.json(response);
});

/**
 * @route GET api/sales/invoices/salesbymonth
 * @desc Get data sales by month
 * @access Public
 */
router.get('/salesbymonth/:month/:year', async (req, res) => {
    let month = parseInt(req.params.month);
    let year = parseInt(req.params.year);
    let response = {};
    try {
        let data = await SalesInvoiceItem.aggregate(
            [
                {
                    $lookup:
                    {
                        from: "salesinvoices",
                        localField: "invoice",
                        foreignField: "_id",
                        as: "headers"
                    }
                },
                {
                    $replaceRoot: { newRoot: { $mergeObjects: [ { $arrayElemAt: [ "$headers", 0 ] }, "$$ROOT" ] } }
                },
                { $project: { headers: 0 } },
                { $project: {transdate:1, qty:1, price:1, status:1, year: {$year: '$transdate'}, month: {$month: "$transdate"}}},
                { $match : {year: year, month: month, status: 1 }},
                {
                    $group:
                    {
                        _id: month,
                        total: { $sum: { $multiply : ["$qty","$price"]}}
                    }
                }
            ]
        );
        let total = 0;
        data.forEach(row => {
            total += row.total;
        });
        response = {
            total: total,
            success: true,
            msg: 'Data load successfully.'
        };
    }catch(err){
        response = {
            success: false,
            msg: `There was an error ${err}.`
        };
    }
    return res.json(response);
});


/**
 * @route GET api/sales/invoices/topsellproduct
 * @desc Get data top sell product by month
 * @access Public
 */
router.get('/topsellproduct/:month/:year', async (req, res) => {
    let month = parseInt(req.params.month);
    let year = parseInt(req.params.year);
    let response = {};
    try {
        let data = await SalesInvoiceItem.aggregate(
            [
                {
                    $lookup:
                    {
                        from: "salesinvoices",
                        localField: "invoice",
                        foreignField: "_id",
                        as: "headers"
                    }
                },
                {
                    $replaceRoot: { newRoot: { $mergeObjects: [ { $arrayElemAt: [ "$headers", 0 ] }, "$$ROOT" ] } }
                },
                { $project: { headers: 0 } },
                { $project: {transdate:1, qty:1, price:1, status:1, product:1, year: {$year: '$transdate'}, month: {$month: "$transdate"}}},
                { $match : {year: year, month: month, status: 1 }},
                {
                    $group:
                    {
                        _id: '$product',
                        total: { $sum: { $multiply : ["$qty","$price"]}}

                    }
                },
                { $sort : { total : -1 }},
                { $limit : 1 },
                {
                    $lookup:
                    {
                        from: "products",
                        localField: "_id",
                        foreignField: "_id",
                        as: "products"
                    }
                },
                {
                    $replaceRoot: { newRoot: { $mergeObjects: [ { $arrayElemAt: [ "$products", 0 ] }, "$$ROOT" ] } }
                },
                { $project: { products: 0 } },
            ]
        );
        let product = {
            name : '-',
            total : 0
        };
        data.forEach(row => {
            product.name = row.name,
            product.total = row.total
        });
        response = {
            product: product,
            success: true,
            msg: 'Data load successfully.'
        };
    }catch(err){
        response = {
            success: false,
            msg: `There was an error ${err}.`
        };
    }
    return res.json(response);
});

/**
 * @route GET api/sales/invoices/salesbytime
 * @desc Get data sales by time
 * @access Public
 */
router.get('/salesbytime/:date', async (req, res) => {
    let date = req.params.date;
    let response = {};
    try {
        let data = await SalesInvoiceItem.aggregate(
            [
                {
                    $lookup:
                    {
                        from: "salesinvoices",
                        localField: "invoice",
                        foreignField: "_id",
                        as: "headers"
                    }
                },
                {
                    $replaceRoot: { newRoot: { $mergeObjects: [ { $arrayElemAt: [ "$headers", 0 ] }, "$$ROOT" ] } }
                },
                { $project: { headers: 0 } },
                { $project: {transdate:1, date: {$dateToString: { format: "%Y-%m-%d", date: "$date"}}, qty:1, price:1, status:1, year: {$year: '$transdate'}, month: {$month: "$transdate"}}},
                { $match : { date: date, status: 1 }},
                {
                    $group:
                    {
                        _id: {$dateToString: { format: "%H00", date: "$transdate",timezone: "+08:00"}},
                        total: { $sum: { $multiply : ["$qty","$price"]}}
                    }
                }
            ]
        );
        response = {
            data: data,
            success: true,
            msg: 'Data load successfully.'
        };
    }catch(err){
        response = {
            success: false,
            msg: `There was an error ${err}.`
        };
    }
    return res.json(response);
});

function getMonday(date) {
    var day = date.getDay() || 7;  
    if( day !== 1 ) 
        date.setHours(-24 * (day - 1)); 
    return date;
}

/**
 * @route GET api/sales/invoices/salesotw
 * @desc Get data daily sales
 * @access Public
 */
router.get('/salesotw/:date', async (req, res) => {
    let date = new Date(req.params.date);
    let response = {};
    try {
        let monday = getMonday(date);
        let sunday = new Date();
        sunday.setDate(monday.getDate()+6);
        monday = monday.toISOString().slice(0,10);
        sunday = sunday.toISOString().slice(0,10);
        let data = await SalesInvoiceItem.aggregate(
            [
                {
                    $lookup:
                    {
                        from: "salesinvoices",
                        localField: "invoice",
                        foreignField: "_id",
                        as: "headers"
                    }
                },
                {
                    $replaceRoot: { newRoot: { $mergeObjects: [ { $arrayElemAt: [ "$headers", 0 ] }, "$$ROOT" ] } }
                },
                { $project: { headers: 0 } },
                { $project: {transdate:1, date: {$dateToString: { format: "%Y-%m-%d", date: "$transdate"}}, qty:1, price:1, status:1, year: {$year: '$transdate'}, month: {$month: "$transdate"}}},
                { $match : { date: { $gte : monday, $lte : sunday }, status: 1 }},
                {
                    $group:
                    {
                        _id: { $isoDayOfWeek : "$transdate" },
                        total: { $sum: { $multiply : ["$qty","$price"]}}
                    }
                }
            ]
        );
        response = {
            data: data,
            success: true,
            msg: 'Data load successfully.'
        };
    }catch(err){
        response = {
            success: false,
            msg: `There was an error ${err}.`
        };
    }
    return res.json(response);
});

/**
 * @route GET api/sales/invoices/lastupdatesales
 * @desc Get data last update sales
 * @access Public
 */
router.get('/lastupdatesales', async (req, res) => {
    let response = {};
    try {
        let data = await SalesInvoice.aggregate(
            [
                { $project: { transdate:1, status:1, strDate: {$dateToString: { format: "%Y-%m-%d %H:%M:%S", date: "$transdate"}}, }},
                { $match : { status: 1 }},
                { $sort : { strDate : -1 }},
                { $limit : 1 }
            ]
        );
        let date = new Date();
        data.forEach(row => {
            date = row.transdate;
        })
        response = {
            date: date,
            success: true,
            msg: 'Data load successfully.'
        };
    }catch(err){
        response = {
            success: false,
            msg: `There was an error ${err}.`
        };
    }
    return res.json(response);
});

module.exports = router;