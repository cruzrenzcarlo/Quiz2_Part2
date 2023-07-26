const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 3000;

const uri = "mongodb+srv://tempuser:123@cluster0.f9d6o.gcp.mongodb.net/Exams23002";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const recordSchema = new mongoose.Schema({
  name: { type: String, required: true},
  sid: { type: Number, required: true}
})

const examSchema = mongoose.model('examrecords', recordSchema);
app.get('/', (req, res) => {
  const record1 = new examSchema({
  name: "Renz Cruz",
  sid: 300361745
  });
  examSchema.insertMany([record1]);
  res.send({
    entry: record1,
  });
}); 

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});