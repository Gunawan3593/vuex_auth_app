if(process.env.NODE_ENV === 'production') {
    module.exports = {
        mongoURI: "mongodb://admin:admin123@cluster0-shard-00-00.xpngn.mongodb.net:27017,cluster0-shard-00-01.xpngn.mongodb.net:27017,cluster0-shard-00-02.xpngn.mongodb.net:27017/app4?ssl=true&replicaSet=atlas-fy49oc-shard-0&authSource=admin&retryWrites=true&w=majority",
        secret: 'yoursecret'
    }
} else {
    module.exports = {
        mongoURI: "mongodb://localhost:27017/app3",
        secret: 'yoursecret'
    }
}