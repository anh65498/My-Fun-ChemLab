var url = 'https://pg-app-hh3vkhgay7334zu3vh9917fdyhrsyw.scalabl.cloud/1/classes/Chemical_Reactions'

var getEcho = async () => {
	
  var result = await fetch(url, {
    method:'GET',
    headers: {
      "X-Parse-Application-Id": "DJONj9M6G3IBwGy3QvgjtOKD8ECR5DTQEKAQRKcz",
      "X-Parse-Rest-Api-Key": "BoxBHlH6rOD2Q2b3wJHBcLBxzATXN8QREEKpRTLc"
    }
  })
  .then(function(response) {
      return response.text();
  })
  .then(function(data){
			var obj = null;
      var data_obj = JSON.parse(data);
      var count = Object.keys(data_obj.results).length;
      for (var i = 0; i < count; i++) {
        if (data_obj.results[i].Reactants == "H2O")
          {
            obj = data_obj.results[i];
            break;
          }
      }
      console.log([obj.EchoAR_Link, obj.EchoAR_Link2, obj.EchoAR_Link3]);

      return [obj.EchoAR_Link, obj.EchoAR_Link2, obj.EchoAR_Link3];
  })
}

getEcho();