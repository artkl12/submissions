const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://artaklauze:${password}@cluster0.jsrkl.mongodb.net/phonebookApp?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.set("strictQuery", false);

mongoose.connect(url);

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model("Person", personSchema);

const nameValue = process.argv[3];
const numberValue = process.argv[4];

const person = new Person({
  name: nameValue,
  number: numberValue,
});

// person.save().then(result => {  
//   console.log(`added ${nameValue} number ${numberValue} to phonebook`)
//   mongoose.connection.close()
// })

Person.find({}).then(result => {
  console.log('phonebook:')
  result.forEach(person => {    
    console.log(person.name + " " + person.number)
  })
  mongoose.connection.close()
})

// Note.find({ important: false }).then((result) => {
//   result.forEach((note) => {
//     console.log(note);
//   });
//   mongoose.connection.close();
// });
