

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

	$(".spock h1").text("My jQuery Workout");
	$(".spock h2").text("board with this");
	$(".spock p").css("width", "300px");
	$(".spock li:first-child button").text("CLICK ME")
	$("h1").siblings().children(".text").hide(0);
	$("#funButton").parent(".button").hide(0);
 });



