
$(document).on("click", "#addTrainBtn", function() {

	var trainName = $("#inputName").val();
	var destination = $("#inputDestination").val();
	var firstTime = $("#inputFirstTime").val();
	var frequency = $("#inputFrequency").val();

	console.log(trainName);
	console.log(destination);
	console.log(firstTime);
	console.log(frequency);

	if (trainName === "" || destination === "" || firstTime === "" || frequency === "") {
		alert("Please fill out all fields");
	} else {

		// var arrival = ...;
		// var minAway = ...;
		// console.log(arrival);
		// console.log(minAway);

		var newRow = $("<div class='row' id='trainSched'>");
		$("#schedContainer").append(newRow);

		var newDiv1 = $("<div class='col-xs-3'>");
		var newDiv2 = $("<div class='col-xs-3'>");
		var newDiv3 = $("<div class='col-xs-2'>");
		// var newDiv4 = $("<div class='col-xs-2'>");
		// var newDiv5 = $("<div class='col-xs-2'>");

		newDiv1.append(trainName);
		newDiv2.append(destination);
		newDiv3.append(frequency);
		// newDiv4.append(arrival);
		// newDiv5.append(minAway);

		$("#trainSched").append(newDiv1);
		$("#trainSched").append(newDiv2);
		$("#trainSched").append(newDiv3);
		// $("#trainSched").append(newDiv4);
		// $("#trainSched").append(newDiv5);

		$("#inputName").val("");
		$("#inputDestination").val("");
		$("#inputFirstTime").val("");
		$("#inputFrequency").val("");
	}

});