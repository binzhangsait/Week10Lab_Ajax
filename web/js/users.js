$(document).ready(function() {
    $(".editform").submit(function(event) {
        $.get($(this).attr("action"), $(this).serialize(), function(responseJson) {
            $("#username").val(responseJson.username);
            $("#firstname").val(responseJson.firstname);
            // more
        });
        console.log("Boink!");
        event.preventDefault();  // stop the form submission
    });
});
console.log("JS Loaded.");
