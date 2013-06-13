$(document).ready(function() {
	$.get('quotes.xml', function(d) {
		$(d).find('quote').each(function() {

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