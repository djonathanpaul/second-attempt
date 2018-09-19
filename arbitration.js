const cote = require('cote');

const responder = new cote.Responder({ name: 'arbitration responder' , key: 'arbitration'});

const publisher = new cote.Publisher({ name: 'arbitration publisher' });

const rates = {};

responder.on('updateRate', (req, cb) => {
    rates[req.currencies] = req.rate;
    cb('Currency Updated');
    
    publisher.publish('updateRate', req);
});


