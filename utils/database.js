const { MongoClient } = require('mongodb')

let _db

exports.mongoConnect = async (callback) => {
   try {
      const client = await MongoClient         
         .connect(process.env.DB, { useNewUrlParser: true })
      _db = client.db('exercise-tracker')
      callback()
   } catch(err) { 
      console.log(err) 
      throw err
   }
}

exports.getDb = () => { 
   if (_db) { return _db } 
   throw 'No database found'
}

