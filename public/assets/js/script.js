$(document).ready(function() {
  
  $(".devour-form").on("submit", function(event) {
    event.preventDefault();
    
    const burger_id = $(this).children(".burger_id").val();
    $.ajax({
      method: "PUT",
      url: "/api/burgers/" + burger_id,
      data: "devoured=1"
    }).then(function(data) {
     
      location.reload();
    });
  
  });
});

$(document).ready(function() {
  
  $(".delete-form").on("submit", function(event) {
    event.preventDefault();
    
    const burger_id = $(this).children(".burger_id")[0].attributes[3].value;
  
    $.ajax({
      method: "DELETE",
      url: "/api/burgers/" + burger_id,
    }).then(function(data) {
     
      location.reload();
    });
  
  });
});
