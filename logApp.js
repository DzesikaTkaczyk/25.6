
var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.set('views','./views');

app.get('/auth/google', function(req, res){
	res.render('log', {
		url: "https://img1.picmix.com/output/pic/normal/5/3/9/4/8394935_b19e2.jpg"
    });
});

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});