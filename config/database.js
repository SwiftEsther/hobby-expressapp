if (process.env.NODE_ENV === 'production') {
    module.exports={
        database: "mongodb://swiftesther:1Jehovah.@ds121301.mlab.com:21301/ds_hobby_app",
    }
}   else{
    module.exports={
        database: "mongodb://localhost/dshobby_app",
    }
}