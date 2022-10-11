const axios = require('axios');
//const cheerio = require('cheerio');
//const { response } = require('express');
const express = require('express');
const PORT = 8000;

const app = express();

const url_one = 'https://www.google.com/search?q=champions+league&oq=champions+league&aqs=chrome..69i57j69i61.5515j0j1&sourceid=chrome&ie=UTF-8#cobssid=s&sie=lg;/g/11mvmxlddg;2;/m/0c1q0;mt;fp;1;;;';


function getCallback(req, res){
	res.send('Your default "GET Request" gets this response right here!!')
}

function listen_atPortCallback(whateverPORT){
	console.log(`My Port is listening at: ${whateverPORT}`);
}

app.get('/', getCallback);

//Axios makes API call to URL. We get the response(HTML) and print it on the terminal. 
//*chaining in Async JS
/*
axios(url_one)
	.then(response => {
		const html_frm_url = response.data
		//console.log(html_frm_url);
	});
*/
//*With callback func
//app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));

//without callback func
app.listen(PORT, listen_atPortCallback(PORT));