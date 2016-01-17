$('[src2]').each(function() {
	// TIEMPO DE ESPERA PARA CAMBIAR DE IMAGEN
	// ACTUALMENTE 5 SEGUNDOS
	var DELAY = 5 * 1000;

	var img = $(this);
	var orig = img.attr('src');
	var preloaded = {};
	preloaded[orig] = true;

	var cur = 1;
	setInterval(function() {
		if (img.parent().css('visibility') === 'hidden') {
			return;
		}

		cur++;
		var src = img.attr('src'+cur);
		if (!src) {
			cur = 1;
			src = orig;
		}
		
		// Preload it
		if (!preloaded[src]) {
			preloaded[src] = new Image();
			preloaded[src].src = src;
		}

		
		img.addClass('fading');
		setTimeout(function() {
			img.attr('src', src).removeClass('fading');
		}, 400);
	}, DELAY);
});