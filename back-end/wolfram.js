const fetch = require('node-fetch');
var url = 'http://api.wolframalpha.com/v2/query?appid=PKE4G3-QA4JAW6Y5U&input=population%20of%20france'

var getInfo = async () => {

  var result = await fetch(url)
  .then(function(response) {
      return response.text();
  })
  .then(function(data){
      console.log(data);
      return data;
  })
}

getInfo();
