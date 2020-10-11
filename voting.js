var vote = {
	one: 0,
	two: 0,
	three: 0,
	four: 0,
	five: 0,
	six: 0,
	seven: 0,
	eight: 0,
	nine: 0,
	ten: 0,
}

$(document).ready(function(){

	$("#one").click(
		function(){
			vote.one++;
			$("#p1vote").html(`(${vote.one})`);
		}
	);

	$("#two").click(
		function(){
			vote.two++;
			$("#p2vote").html(`(${vote.two})`);
		}
	);

	$("#three").click(
		function(){
			vote.three++;
			$("#p3vote").html(`(${vote.three})`);
		}
	);

	$("#four").click(
		function(){
			vote.four++;
			$("#p4vote").html(`(${vote.four})`);
		}
	);

	$("#five").click(
		function(){
			vote.five++;
			$("#p5vote").html(`(${vote.five})`);
		}
	);

	$("#six").click(
		function(){
			vote.six++;
			$("#p6vote").html(`(${vote.six})`);
		}
	);

	$("#seven").click(
		function(){
			vote.seven++;
			$("#p7vote").html(`(${vote.seven})`);
		}
	);

	$("#eight").click(
		function(){
			vote.eight++;
			$("#p8vote").html(`(${vote.eight})`);
		}
	);

	$("#nine").click(
		function(){
			vote.nine++;
			$("#p9vote").html(`(${vote.nine})`);
		}
	);

	$("#ten").click(
		function(){
			vote.ten++;
			$("#p10vote").html(`(${vote.ten})`);
		}
	);
});