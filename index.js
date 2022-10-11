const axios = require('axios');
//const cheerio = require('cheerio');
//const { response } = require('express');
const express = require('express');
const PORT = 8000;

const app = express();

const url_one = 'https://www.cashcrusaders.co.za/';


//Axios makes API call to URL. We get the response(HTML) and print it on the terminal. 
//*chaining in Async JS
axios(url_one)
	.then(response => {
		const html_frm_url = response.data
		console.log(html_frm_url);
	});

//*There is a callback
app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));