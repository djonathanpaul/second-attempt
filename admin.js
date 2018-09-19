const cote = require('cote');

const requester = new cote.Requester({ name: 'arbitration admin requester', key: 'arbitration'});
var readline = require('readline-sync');
const request = { type: 'updateRate', 
currencies: readline.question("Enter the currencies to be converted as from_to"+'\n'),
rate: readline.question("Enter the new conversion rate"+'\n') };

requester.send(request, (res) => {
    console.log(res);
});