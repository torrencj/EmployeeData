

// Initialize Firebase
    var config = {
      apiKey: "AIzaSyAKei4rwl2i5hyaPNjMeKT0kqyS2nyOYBE",
      authDomain: "learning-6f29b.firebaseapp.com",
      databaseURL: "https://learning-6f29b.firebaseio.com",
      projectId: "learning-6f29b",
      storageBucket: "learning-6f29b.appspot.com",
      messagingSenderId: "161028966778"
    };
    firebase.initializeApp(config);

    //creating a variable to reference the database
    var database = firebase.database();

    // initial values from the database



    //database.ref().on("value", function(snapshot) {


    // function to create the new row
    function addRow(name, role, start, rate) {
      var monthsworked = 12;
      var total = "total!";

      var newRow = $("<tr>").append( $("<td>").text(name) )
                            .append( $("<td>").text(role) )
                            .append( $("<td>").text(start) )
                            // .append( $("<td>").text(monthsWorked) )
                            .append( $("<td>").text(rate) )
                            .append( $("<td>").text(total) );
      $("tbody").append(newRow);

      // if (true) {
      //   database.ref().set({
      //     "name": name,
      //     "role" : role,
      //     "start": start,
      //     "rate": rate
      //   })
      // } else {
        database.ref().push({
          "name": name,
          "role" : role,
          "start": start,
          "rate": rate
        })
      

    };

	//});
 // submit button to push the data up to the employees table
$("#submit-button").on("click", function(event){
	 event.preventDefault();

	var name = $("#name").val().trim();
	var role = $("#role").val().trim();
	var start = $("#startDate").val().trim();
	var rate = $("#monthlyRate").val();
  // console.log(name);
  // console.log(role);
  // console.log(start);
  // console.log(rate);


	addRow(name, role, start, rate);
	console.log("clicked");

});
