

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

    //is this the initial load? (Used when drawing all previous items)
    // var initial = true;

    // TODO set html to the values from the database
    database.ref().on("value", function(snap) {
    //
      console.log(snap.val());
    //
    //   if (initial) {
    //     addRow(all)
    //   } else {
    //     addRow()
    //   }
    //
    });

    // This is triggered for each item in the database on load.
    database.ref().on("child_added", function(snap) {
    // addRow by name, role, start, rate
    addRow(snap.val().name,snap.val().role, snap.val().start, snap.val().rate);
    });

    //TODO This works.
    // database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
    //   console.log("orderByChild");
    //   console.log(snapshot.val());
    // });

    //Returns the difference of two dates in months, uses MomentJS
    function findMonthsWorked(inputDate) {
      return moment().diff(moment(inputDate), 'months')
    }

    //Returns the total value paid to the employee
    function findTotalPaid(rate, months) {
      return rate * months;
    }

    // function to create the new row
    function addRow(name, role, start, rate) {
      var monthsworked = findMonthsWorked(start);

      var newRow = $("<tr>").append( $("<td>").text(name) )
                            .append( $("<td>").text(role) )
                            .append( $("<td>").text(start) )
                            .append( $("<td>").text(monthsworked) )
                            .append( $("<td>").text(rate) )
                            .append( $("<td>").text(findTotalPaid(rate, monthsworked)) );
      $("tbody").append(newRow);




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

  database.ref().push({
    "name": name,
    "role" : role,
    "start": start,
    "rate": rate
  })

	// addRow(name, role, start, rate);
	// console.log("clicked");

});
