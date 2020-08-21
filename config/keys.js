if(process.env.NODE_ENV === 'production') {
    module.exports = {
        mongoURI: "mongodb://admin:admin123@cluster0.xpngn.mongodb.net/app4",
        secret: 'yoursecret'
    }
} else {
    module.exports = {
        mongoURI: "mongodb://localhost:27017/app3",
        secret: 'yoursecret'
    }
}