var mongoose = require("mongoose");
var dbHost = "mongodb+srv://admin:admin@cluster0.u3lw6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(dbHost, { useNewUrlParser: true });
mongoose.connection;
mongoose.set("debug", true);
var bookSchema = mongoose.Schema({
  name: String,
  isbn: { type: String, index: true },
  author: String,
  pages: Number,
});
var Book = mongoose.model("Book", bookSchema);
module.exports = Book;
