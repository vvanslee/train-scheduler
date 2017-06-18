
var config = {
	apiKey: "AIzaSyCdYKeMfARf5TKwlOAoZczbSEho0rJ9qI4",
	authDomain: "train-scheduler-cd7fb.firebaseapp.com",
	databaseURL: "https://train-scheduler-cd7fb.firebaseio.com",
	projectId: "train-scheduler-cd7fb",
	storageBucket: "train-scheduler-cd7fb.appspot.com",
	messagingSenderId: "210940462057"
};
firebase.initializeApp(config);

var database = firebase.database();

$(document).on("click", "#addTrainBtn", function() {

	var trainName = $("#inputName").val();
	var trainDest = $("#inputDestination").val();
	var firstTime = $("#inputFirstTime").val();
	var frequency = parseInt( $("#inputFrequency").val() );

	if (trainName === "" || trainDest === "" || firstTime === "" || frequency === "") {
		alert("Please fill out all fields");
	} else {

		database.ref().push({
			name: trainName,
			destination: trainDest,
			first: firstTime,
			freq: frequency
		});

		$("#inputName").val("");
		$("#inputDestination").val("");
		$("#inputFirstTime").val("");
		$("#inputFrequency").val("");
	}
});

database.ref().on("child_added", function(childSnapshot){

	var arrival = "n/a";
	var minAway = "n/a";
	console.log(arrival);
	console.log(minAway);

	var newRow = $("<div class='row' id='trainSched'>");
	$("#schedContainer").append(newRow);

	var newDiv1 = $("<div class='col-xs-3'>");
	var newDiv2 = $("<div class='col-xs-3'>");
	var newDiv3 = $("<div class='col-xs-2'>");
	var newDiv4 = $("<div class='col-xs-2'>");
	var newDiv5 = $("<div class='col-xs-2'>");

	newDiv1.append(childSnapshot.val().name);
	newDiv2.append(childSnapshot.val().destination);
	newDiv3.append(childSnapshot.val().freq);
	newDiv4.append(arrival);
	newDiv5.append(minAway);

	$("#trainSched").append(newDiv1);
	$("#trainSched").append(newDiv2);
	$("#trainSched").append(newDiv3);
	$("#trainSched").append(newDiv4);
	$("#trainSched").append(newDiv5);

}, function(errorObject) {
	console.log("Errors Handled: " + errorObject.code);
}); 