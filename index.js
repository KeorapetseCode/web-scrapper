const axios = require('axios');
const cheerio = require('cheerio');
//const { response } = require('express');
const express = require('express');
const PORT = 8000;

const app = express();

const url_one = 'https://www.cashcrusaders.co.za/';

//Axios makes API call to URL. We get the response(HTML) and print it on the terminal. 
//*chaining in Async JS
axios(url_one)
	.then(response => {
		const html_frm_url = response.data;
		//console.log(html_frm_url);

		const $ = cheerio.load(html_frm_url);
		$('.col-1-3', html_frm_url).each(function(){
			const compText = $(this).text();
			const hrefVar = $(this).find('a').attr('href');
			
			console.log("URL Retrieved Is " + hrefVar);
			console.log("Text Retrieved is " + compText);
		});
	});


app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));
