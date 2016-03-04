/*$(document).ready(function() {
  alert('Oh, hi there, world');
   console.log( "ready!" );
});*/

$(document).ready(function() {
	$("#important-events h1").css({
       backgroundColor: "yellow",
       color: "red" });

    $("#important-events li:first-child img").hide();
	$("#important-events > p").css("color","grey");
	$("#important-events li:first-child").css('background-color', 'steelblue');
	$("#unimportant-events").fadeIn('slow').delay(1000).hide(0);
	$("#important-events span").css({
       backgroundColor: "red",
       color: "white",
       padding:"1em" });
	$("#important-events li:first-child img").fadeIn(5000);
 });



