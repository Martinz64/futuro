
$('.modal-trigger').leanModal();
fetch( location.protocol + '/frases_suerte.txt', {
	headers: new Headers({
		'Content-Type': 'text/plain'
	}),
	method: 'get'
}).then(function(rsp) {
	return rsp.text();
}).then(function(rs){
	//var rnumber = Math.floor(Math.random() * rs.split(".").length);
	//rs = rs.replace("↵","");
	window.predictions = rs.split(".");
}).catch(function(err) {
	console.log("error",err);
});

window.setInterval(function(){
	if(window.location.hash !== "#predict"){
		$(".resultados").html("");
		
	}
	if(window.location.hash !== "#misgalletas"){
		$("#minumerodegalletas").html("" + localStorage.points);
		
	}
	$("#galletas-count").html("" + localStorage.points);
$(".counternumb").html("" + localStorage.points);
},100);

    $(".prbutton").click(function(){
  	if(parseInt(localStorage.points) < -1){
		$('#noSharesModal').openModal();
  	} else {
  		window.location.hash="predict";
  	}
    });
    
  /*$('#modal1').openModal();*/
  
  function share(){
  	localStorage.points = parseInt(localStorage.points) + 5;
  }
  $("a").click(function(){
  	$('.button-collapse').sideNav('hide');
  });
  function predict(){
  	if(0 < localStorage.points){
	  	var random = Math.floor(Math.random() * (predictions.length - 1)) + 0;
	  	//var predictions = ["Tendras un accidente","Te tocará el GORDO","Te torceras un pie","Tendras buena suerte"];
	  	localStorage.points = parseInt(localStorage.points) - 1;
	  	var prediction = predictions[random];
		$(".resultados").html(prediction);
  	} else {
  		$('#noSharesModal').openModal();
  	}
  }