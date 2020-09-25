$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("devoured");

    var newDevouredState = {
      devoured: newDevoured
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed devoured to ", newDevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function (event) {
    event.preventDefault(); // ← Makes origioonal delete btn stop working
    var burger_id = $(this).data("id");
    console.log("Burger Id#: ", burger_id);
    $.ajax({
      type: "DELETE",
      url: "/api/burgers/" + burger_id,
    }).then(function (data) {
      location.reload();
    });
  });
 
});
