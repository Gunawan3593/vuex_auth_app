if(process.env.NODE_ENV === 'production') {
    module.exports = {
        mongoURI: "mongodb+srv://admin:<password>@cluster0.xpngn.mongodb.net/<dbname>?retryWrites=true&w=majority",
        secret: 'yoursecret'
    }
} else {
    module.exports = {
        mongoURI: "mongodb://localhost:27017/app3",
        secret: 'yoursecret'
    }
}