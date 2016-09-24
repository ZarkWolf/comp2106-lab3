// link the connect package
var connect = require('connect');

// link to the url module to parse url parameters
var url = require('url');

// instantiate a new connect object
var app = connect();

var calculate = function(req, res, next)
{
	// get the values of method, x, and y from querystring
	var qs = url.parse(req.url, true).query;
	var method = qs.method;
	var x = qs.x;
	var y = qs.y;

	var validMethods = ['add', 'subtract', 'multiply', 'divide'];

	if (!validMethods.includes(method))
	{
		res.end('Error: ' + '"' + method + '"' + ' is not a valid method.');
	}
	else
	{
		if (method === 'add')
		{
			var result = parseFloat(x) + parseFloat(y);
			res.end(x + ' + ' + y + ' = ' + result);
		}
		else if (method === 'subtract')
		{
			var result = parseFloat(x) - parseFloat(y);
			res.end(x + ' - ' + y + ' = ' + result);
		}
		else if (method === 'multiply')
		{
			var result = parseFloat(x) * parseFloat(y);
			res.end(x + ' * ' + y + ' = ' + result);
		}
		else (method === 'divide')
		{
			var result = parseFloat(x) / parseFloat(y);
			res.end(x + ' / ' + y + ' = ' + result);
		}
	}
}

// run the calulate method
app.use(calculate);

// start the web server on port 3000
app.listen(3000);

// display the message that the server is running
console.log('lab3Server running on port 3000');
