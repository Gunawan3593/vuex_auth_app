if(process.env.NODE_ENV === 'production') {
    module.exports = {
        mongoURI: "mongodb+srv://admin:admin123@mongocluster.8tjth.gcp.mongodb.net/app4?retryWrites=true&w=majority",
        secret: 'yoursecret'
    }
} else {
    module.exports = {
        mongoURI: "mongodb://localhost:27017/app3",
        secret: 'yoursecret'
    }
}