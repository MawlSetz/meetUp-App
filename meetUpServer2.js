var net = require('net');
var port = 3000
//var command = process.argv[0];
var fs = require('fs');
var clients = [];





var GroupHang =(date, time, topic) {
	this.date = date;
	this.topic = topic;
	this.headCount = headCount;
}

var Rsvp = (names, email){
	this.name = name,
	this.email = email,
}






// var groupHang = {
// 	date: "04/19/15 6PM",
// 	topic: "Utilizing APIs",
// 	headcount: rsvpYes,
// }

// var jsonGroupHang= JSON.stringify(groupHang);

// var names = []; 
// var rsvpYes = [];
// var address = []; 


var server = net.createServer(function(socket) {
  console.log('client connected');
  client.push(socket);
  var hang = fucntion(){
	fs.readFile('groupHang.json', data, function (err) {
  	if (err) {
  		return console.log(err);
  	} else {
  		data = JSON.parse(data)
  		welcome = ("Welcome to devMeetUp. Next groupHang is scheduled for " + date ". We will be examine " + topic + ". Type 'rsvp' to sign up.");
  		socket.write(welcome);
  	}
  })
  	
   socket.on('data',function(data) {
     data = data.toString().trim();

  	 if( data === "rsvp"){
  		socket.write("Please enter your name:");
  		rsvpInfo++;
  	else if (rsvpInfo === 1){
  		if(data === ""){
  			socket.write("Please enter your name to proceed.")
  		} else{
  			name = data;
  			socket.write("Please enter your email address:");
  			rsvp++;
  		}
  	else if(rsvpInfo ===2){
  		if(data === ""){
  			socket.write("Please enter you address to confirm your spot.")
  		}
  		else{
  			var email = data;
  			var rsvpYes = new Rsvp(names, email);
  			fs.readFile('rsvpYes.json'), function(err, data){
  				if (err){
  					console.log(err);

  				} else {
  					data = JSON.parse(data);
  					var rsvpList = [];
  					for(var i=0; i < data.length; i++){
  						rsvpList.push(data[i]);
  				}
  				rsvpList.push(rsvpYes);
  				fs.writeFile('rsvpList.json', JSON.stringify(rsvpList), fuction(err){
  					if(err){
  						console.log(err);
  					} else{
  						socket.write('Thank your for your interest in devMeetUp, your rsvp has been confirmed.');
  						console.log('successful rsvp');
  					}
  				});
  			}
  		}
  	}	
  	}	


});


 
  socket.on('end', function() {
    console.log('client disconnected');
  });
});

server.listen(port, function() { 
  console.log('listening on port ' + port );
});