$(document).ready(function(){
  $("#languageSelect").submit(function(event) {
    event.preventDefault();
    var qOne = parseInt($("#qOne").val());
    var qTwo = parseInt($("#qTwo").val());
    var  qThree = parseInt($("#qThree").val());
    var  qFour = parseInt($("#qFour").val());
    var  qFive = parseInt($("#qFive").val());
    // function total (qOne, qTwo, qThree, qFour, qFive) {
    //   return qOne + qTwo + qThree + qFour + qFive
    // }
    function result() {
      if  (qOne + qTwo + qThree + qFour + qFive >= 5 && qOne + qTwo + qThree + qFour + qFive <= 6) {
        return ("You should learn C#")
      } else if (qOne + qTwo + qThree + qFour + qFive >=7 && qOne + qTwo + qThree + qFour + qFive <= 10)  {
        return ("You should learn Python")
      } else if  (qOne + qTwo + qThree + qFour + qFive >= 11) {
        return ("You should learn Ruby")
      } else {
        return ("Please complete above opions")
      }
    }
    console.log(result)
    $("#output").text(result);

  })
});
