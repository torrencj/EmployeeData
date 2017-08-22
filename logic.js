

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


    function addRow(name, role, start, rate) {
      var monthsworked = 12;
      var total = "total!";

      var newRow = $("<tr>").append( $("<td>").text(name) )
                            .append( $("<td>").text(role) )
                            .append( $("<td>").text(start) )
                            .append( $("<td>").text(monthsworked) )
                            .append( $("<td>").text(rate) )
                            .append( $("<td>").text(total) );
      $("tbody").append(newRow);
    };

$("#submit-button").on("click", function(){
	
})
