var request = require('request');

var params = {
    'user-id': 'gedda',
    'api-key': 'T4Uy3NSdwErd5EVEkmbi3lqQSd0pUg330V2ASBiiSodgHaZs',
    'ip': '130.102.13.11'
};

request.post(
    'https://neutrinoapi.net/ip-info',
    {form: params},
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
          var result = JSON.parse(body);
          console.log(result['country']);
          console.log(result['country-code']);
          console.log(result['region']);
          console.log(result['city']);
      }
    }
);