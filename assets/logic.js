
var counter = 0;
var timeLeft = 180;

// keeps track of score
var scoreTotal = 0;
// on click function to start game
$(".start").on("click", function () {
  $(".start").text("Restart");
  //basic counter function (thx steven!)
  function counterFunction() {
    counter++
    console.log(counter);
    // change timer text to appropoate time 
    $(".timer").text("Time left: " + (timeLeft - counter));
    // timer runs out
    if (timeLeft === 0) {
      clearInterval(timerBegin);
      // I cant figure out why this wont update the score div???!!!
      $(".score").html("<p>").text("GameOver! Try again!");

  clearInterval(timerBegin);
    }
  }

  // for some reason need this for timer to count down properly (thx, steven)
  var timerBegin = setInterval(counterFunction, 1000);
  // checking to make sure timer ends 
  setTimeout(function () {
    console.log("I ran!");
    clearInterval(timerBegin);
  }, 10000);

});





// submit quiz and check score
$("#submit").on("click", function checkAnswers() {
  // event.preventDefault();
  alert("quiz submitted");

  var q1 = $("input[type='radio'][name='q1']:checked").val();
  var q2 = $("input[type='radio'][name='q2']:checked").val();
  var q3 = $("input[type='radio'][name='q3']:checked").val();
  var q4 = $("input[type='radio'][name='q4']:checked").val();
  var q5 = $("input[type='radio'][name='q5']:checked").val();

  switch (q1) {
    case "1":

      scoreTotal++;
      break;
    case "2":
    case "3":
    scoreTotal;
      break;
    default:
      console.log("error");
  }

  switch (q2) {
    case "2":
      scoreTotal++;
      break;
    case "1":
    case "3":
    scoreTotal;
      break;
    default:
      console.log("error");
  }
  switch (q3) {
    case "3":
      scoreTotal++;
      break;
    case "1":
    case "2":
    scoreTotal;
      break;
    default:
      console.log("error");
  }
  switch (q4) {
    case "2":
      scoreTotal++;
      break;
    case "1":
    case "3":
    scoreTotal;
      break;
    default:
      console.log("error");
  }
  switch (q5) {
    case "1":
      scoreTotal++;
      break;
    case "2":
    case "3":
    scoreTotal;
      break;
    default:
      console.log("error");
  }
 $(".score").text("Score: " + scoreTotal);
});











