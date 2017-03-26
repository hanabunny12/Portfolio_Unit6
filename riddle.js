// JavaScript File

$("#answer").hide();
$("#go").hide();

$ ("#submit").click(function() {
    $("#riddle").append("You will always find me in the past. I can be created in the present, but the future can never taint me. What am I?");
    $("#answer").show();
    $("#go").show();
});



$ ("#go").click(function() {
    
    var answer = $("#answer").val();

if (answer === "history") {
        alert("Great job! You solved the riddle! Now you can go on to the survey.");
        $("#link").html("<li><a class=\"nav\" href=\"./survey.html\">Survey</a></li>");
        // $(<li><a class="nav" href="./survey.html">Survey</a></li>).show();
         }
else if (answer === "History") {
        alert("Great job! You solved the riddle! Now you can go on to the survey."); 
         $("#link").html("<li><a class=\"nav\" href=\"./survey.html\">Survey</a></li>");
        // $(<li><a class="nav" href="./survey.html">Survey</a></li>).show();

     } 
    
else {
    alert("Sorry, that's incorrect! Try again!");
}
    
});

