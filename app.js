const readline = require('readline');
const request = require('request-promise');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function arraysum(question) { 

	var data = { 
		Question: question 
	} 

	var options = { 
		method: 'POST', 

		// http:flaskserverurl:port/route 
		uri: 'https://a23e-34-23-218-116.ngrok.io/nodejs-interaction', 
		body: data, 
 
		json: true,
		strictSSL: false
	}; 

	var sendrequest = await request(options) 

		.then(function (parsedBody) {
			let result = parsedBody;
			console.log(`AI: ${result}`);
		}) 
		.catch(function (err) { 
			console.log(err); 
		}); 
} 

function askQuestion() {
    rl.question('', (input) => {
        if (input.toLowerCase() === 'exit') {
            rl.close();
            return;
        }

        var res = arraysum(input);
        askQuestion();
    });
}
console.log('Chat sucessfully started with LLM. Type your queries and please wait for LLM to respond.')
askQuestion();
