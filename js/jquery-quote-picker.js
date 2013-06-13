$(document).ready(function() {

	$.get('quotes.xml', function(q) {

		// Get the total number of quotes
		var totalQuotes =$(q).find("quote").length;

		// Pick one at pseudo random
		var numRand = Math.floor(Math.random() * totalQuotes + 1);

		// Parse the quote
		$(q).find('quote:nth-child(' + numRand + ')').each(function() {

			var $quote = $(this);
			var title = $quote.attr("title");
			var text = $quote.find('text').text();
			var source = $quote.find('source').text();
			var url = $quote.attr('url');

			var html = '<blockquote><p>' + text + '</p><small>' + title + ' <cite><a href="' + url + '">' + source + '</a></cite></small></blockquote>';

			$('.jquery-quote-picker').append($(html));

		});

	});

});