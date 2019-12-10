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
  $("form#questions").submit(function(event) {
    var aspect = $("#aspect").val();
    var naturally = $("#naturally").val();
    var rather = $("#rather").val();
    var location = $("#location").val();
    var time = $("#time").val();


    if (aspect === "1" && naturally === "1" && rather === "3" && location === "1" && time === "1") {
      $("#typeTwo, #typeThree").hide();
      $("#typeFour, #typeFive").hide();
      $("#typeOne").show();
    }
      else if (aspect === "2" && naturally === "2" && rather === "1" && location === "2" && time === "1") {
        $("#typeOne, #typeThree").hide();
        $("#typeFour, #typeFive").hide();
        $("#typeTwo").show();
      }
      else if (aspect === "3" && naturally === "1" && rather === "1" && location === "1" && time === "1") {
        $("#typeOne, #typeTwo").hide();
        $("#typeFour, #typeFive").hide();
        $("#typeThree").show();
      }
      else if (aspect === "2" && naturally === "2" && rather === "2" && location === "2" && time === "2") {
        $("#typeOne, #typeTwo").hide();
        $("#typeThree, #typeFive").hide();
        $("#typeFour").show();
      }
      else if (aspect === "1" && naturally === "1" && rather === "2" && location === "1" && time === "2") {
        $("#typeOne, #typeTwo").hide();
        $("#typeFour, #typeThree").hide();
        $("#typeFive").show();
      }
      event.preventDefault();

});
});
