const   express                 = require("express"),
        app                     = express(),
        cors                    = require('cors'),
        path                    = require('path'),
        methodOverride          = require("method-override"),
        bodyParser              = require("body-parser") 
var     apiRoutes 		        = require("./routes/api")


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(methodOverride("_method"));
app.use('/api',apiRoutes);

// app.get('/', (req, res) => {
//     res.send("This the backend working!")
// });

app.use(express.static(path.join(__dirname, 'dist')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});



var port = process.env.PORT || 3000

app.listen(port, function() {
  console.log('Filler server listening on %d', port);
});
