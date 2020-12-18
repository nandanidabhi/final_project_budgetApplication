const config={
    production :{
        SECRET: process.env.SECRET,
        DATABASE: process.env.MONGODB_URI
    },
    default : {
        SECRET: 'mysecretkey',
        DATABASE: 'mongodb+srv://ndabhi:Twins123@cluster0.5lplb.mongodb.net/final_project?retryWrites=true&w=majority'
    }
}


exports.get = function get(env){
    return config[env] || config.default
}