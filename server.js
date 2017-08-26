var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express(); //create web server
app.use(morgan('combined'));//output logs



var articles = {
    'article-one' :{
    title: 'Article One | Vishal S M B',
    heading: 'Article One',
    date: 'Aug 25,2017',
    content: `<p> A think of beauty is a joy forever</p>
        <p> Art is long and life is short</p>
`
    },
    'article-two':{
         title: 'Article Two | Vishal S M B',
    heading: 'Article Two',
    date: 'Aug 28,2017',
    content: `<p> A think of beauty is a joy forever</p>
        <p> Art is long and life is short</p>
`
    },
    'article-three':{
         title: 'Article Three | Vishal S M B',
    heading: 'Article Three',
    date: 'Aug 30,2017',
    content: `<p> A think of beauty is a joy forever</p>
        <p> Art is long and life is short</p>
`
    },
};

function createTemplate(data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
    var htmlTemplate = `
    <html>
    
    <head>
        <title>${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="/ui/style.css">
    </head>
    <body>
        <div class="container">
            <div>
                <a href="/">Home</a>
            </div>
            <hr/>
            <h3>
                ${heading}
            </h3>
            <div>
                ${date}
            </div>
            <div>
            ${content}
            </div>
        </div>
    </body>
    </html>
    `;
    return htmlTemplate;
}

app.get('/', function (req, res) {  //handles specific urls
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {  //handles specific urls
    var articleName=req.params.articleName; 
   res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
