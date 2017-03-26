$ ("#submit2").click(function() {
    
    var image = $("#image").val();

if (image === "1") {
        alert("All right. Answer the next question.");
        $("#color").show();
         }
else if (image === "2") {
        alert("All right. Answer the next question."); 
        $("#color").show();
     } 
    else {
    alert("Remember to enter either 1 or 2. 1 is the one on the left, 2 is on the right. Try again!");

    }
    
});

$ ("#submit3").click(function() {
    
    var color = $("#color").val();

if (color === "red") {
        alert("All right. Now on to the last question...");
        $("#color").show();
} 
else if (color === "blue") {
        alert("All right. Now on to the last question..."); 
        $("#color").show();
}
    else {
    alert("Remember to enter either red or blue. No capital letters! Try again!");

}});

$("#submit4").click(function() {
    var chocolate = $("#chocolate").val();
    var image = $("#image").val();
    var color = $("#color").val();

if (image === "1" && color === "red" && chocolate === "white") {
    alert("Great job! You completed the survey! You are a ... PEACH!!")
}
else if (image === "1" && color === "red" && chocolate === "dark") {
    alert("Great job! You completed the survey! You are a ... APPLE!!")
}

else if (image === "1" && color === "blue" && chocolate === "white") {
    alert("Great job! You completed the survey! You are a ... BANANA!!")
}
else if (image === "1" && color === "blue" && chocolate === "dark") {
    alert("Great job! You completed the survey! You are a ... GRAPE!!")
}

else if (image === "2" && color === "red" && chocolate === "white") {
    alert("Great job! You completed the survey! You are a ... MANGO!!")
}

else if (image === "2" && color === "red" && chocolate === "dark") {
    alert("Great job! You completed the survey! You are a ... STRAWBERRIES!!")
}

else if (image === "2" && color === "blue" && chocolate === "white") {
    alert("Great job! You completed the survey! You are a ... ORANGE!!")
}

else if (image === "2" && color === "blue" && chocolate === "dark") {
    alert("Great job! You completed the survey! You are a ... KIWI!!")
}
});