$(document).ready(function()  {
  var age = parseInt(prompt("How old are?!"));

  if (age === 18) {
    alert("Getting and early start on your journey to becoming a developer! Congrats!");
    $('#ofage').show();
  }
  else if (age > 18) {
    $('#ofage').show();
  }
  else {
    alert("I applaud your aspirations but you're not quite old enough for our program!");
    $('#underage').show();
    $('#samplepicture').show();
  }
  if (interest === "2" && type === "2" && company === "2") {
  $(".typeOne, .typeThree").hide();
  $(".typeFour, .typeFive").hide();
  $(".typeTwo").show();
}
});
