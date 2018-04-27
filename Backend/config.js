module.exports={
    port:process.env.PORT || 4300,
    dbMongo:process.env.MONGODB || 'mongodb://admin:admin123@ds261429.mlab.com:61429/partituras',
    prefixRoutes:'/v1'
}