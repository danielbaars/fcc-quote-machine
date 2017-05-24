function getWaltQuote() {

	$.getJSON('walt.json', function(data) {

		var item = data[Math.floor(Math.random()*data.length)]; 

		var html = '<p class="hero__quote">' + item.quote + '</p>';

		html += '<p class="hero__category">Walt Disney on <strong>' + item.category + '</strong></p>';

		$(".hero__info").html(html);

		var quoteLength = item.quote.length;

		if (quoteLength > 280) {
			$(".hero__quote").addClass("hero__quote--xxl");
		} else if (quoteLength > 190) {
			$(".hero__quote").addClass("hero__quote--xl");			
		} else if (quoteLength > 140) {
			$(".hero__quote").addClass("hero__quote--large");
		} else if (quoteLength > 90) {
			$(".hero__quote").addClass("hero__quote--medium");			
		} else {
			$(".hero__quote").addClass("hero__quote--small");
		}		

		var url = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(item.quote);

		$('.twitter-share-button').attr('href', url);

	});

}

$(document).ready(function() {


	getWaltQuote();

	$(".hero__button").on("click", function(){

		getWaltQuote();
		
	});


});
