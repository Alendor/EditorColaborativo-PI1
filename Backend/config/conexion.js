
// let mongoose = require('mongoose');

// mongoose.connect('mongodb://username:password@port.mlab.com:15446/databasename', { useMongoClient: true }); //mongodb://localhost:27017/crud

// module.exports = mongoose;

//dbMongo:process.env.MONGODB || 'mongodb://admin_Jansel:jansel@ds249249.mlab.com:49249/db_jansel_arrendamientos',

module.exports={
    dbMongo:process.env.MONGODB || 'mongodb://admin:admin123@ds261429.mlab.com:61429/partituras'
    
}