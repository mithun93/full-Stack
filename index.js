// var express = require("express"),
//     fs = require('fs'),
// 	mongoose = require('mongoose')
//     bodyParser = require('body-parser'),
//     favicon = require('serve-favicon'),
//     moviesSchema = require('./models/moviesSchema'),
//     port = process.env.PORT || 3000;
	
// const mongoURI = 'mongodb+srv://mithun:mithun123@cluster0-nugvx.mongodb.net/movie_db?retryWrites=true';
// mongoose.connect(mongoURI, { useNewUrlParser: true }).then(
//   () => { console.log("connection established");/** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
//   err => { /** handle initial connection error */ console.log("connection error");});
 
// var db = mongoose.connection;
// var bookings = [];
// var app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.set("view options", {
//     layout: false
// });

// app.use(express.static(__dirname + '/public'));
// app.use(favicon(__dirname + '/public/images/favicon.ico'));

// app.get('/', function (req, res) {
//     res.render('public/index.html');
// });

// app.get('/movies', function (req, res) {
//     moviesSchema.find({}, function(err, movies){
//         if(err) {
//             console.log("Error fetching movies"); 
//         } else {
//             res.render('all_movies', {
//                 movies: movies
//             })
//             console.log(movies);
//         }
//     }
//     )
// });
 
// app.get('/bookings', function (req, res) {
//     bookingSchema.find({}, function(err, booking){
//         if(err) {
//             console.log("Error booking"); 
//         } else {
//             res.render('all_movies', {
//                 booking: booking
//             })
//             console.log(booking);
//         }
//     })
// });
 
// app.listen(port);


var express = require("express"),
    fs = require('fs'),
	mongoose = require('mongoose')
    bodyParser = require('body-parser'),
    favicon = require('serve-favicon'),
    port = process.env.PORT || 3000;
	
const mongoURI = 'mongodb+srv://mithun:mithun123@cluster0-nugvx.mongodb.net/movie_db?retryWrites=true';
mongoose.connect(mongoURI, { useNewUrlParser: true }).then(
  () => { console.log("connection established");/** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
  err => { /** handle initial connection error */ console.log("connection error");});
 
var db = mongoose.connection;
var bookings = [];
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view options", {
    layout: false
});

app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/images/favicon.ico'));

app.get('/', function (req, res) {
    res.render('public/index.html');
}); 

app.get('/movies', function (req, res) {
    const collection = db.collection('moviesSchema');
    collection.find({}).toArray().then(response => res.status(200).json(response)).catch(error => console.error(error));
});
 
app.get('/bookings', function (req, res) {
    const collection = db.collection('bookingSchema');
    collection.find({}).toArray().then(response => res.status(200).json(response)).catch(error => console.error(error));
});
 
app.listen(port);