const cote = require('cote');

const requester = new cote.Requester({ name: 'currency conversion requester' });


var readline = require('readline-sync');


const request = { type: 'convert', 
from: readline.question("Enter From Currency"+'\n'), 
to: readline.question("Enter To Currency"+'\n'), 

amount: readline.question("Enter Amount"+'\n') };

requester.send(request, (res) => {
    console.log(request.amount+" "+ request.from+" to "+request.to+" is "+res+" "+request.to);
});
