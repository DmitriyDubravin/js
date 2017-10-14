
(function() {
	// <tag class="text-gradient" data-text-gradient="#000000-#ffffff">text</tag>
	var arr2hex, hex2arr;

	hex2arr = function(s) {
		return [parseInt(s.substr(0, 2), 16), parseInt(s.substr(2, 2), 16), parseInt(s.substr(4, 2), 16)];
	};

	arr2hex = function(a) {
		var a0 = a[0].toString(16);
		var a1 = a[1].toString(16);
		var a2 = a[2].toString(16);
		a0 = a0.length < 2 ? '0' + a0 : a0;
		a1 = a1.length < 2 ? '0' + a1 : a1;
		a2 = a2.length < 2 ? '0' + a2 : a2;
		return a0 + a1 + a2;
		// return a[0].toString(16) + a[1].toString(16) + a[2].toString(16);
	};

	$.fn.textGradient = function() {
		$.each(this, function() {
			var color, configString, from, i, j, letter, letters, m, to, _i, _ref, _results;
			letters = $(this).text().split('');
			from = [0, 0, 0];
			to = [255, 255, 255];
			configString = $(this).data('text-gradient');
			if (m = configString.match(new RegExp('^#([0-9a-fA-F]{6})-#([0-9a-fA-F]{6})$'))) {
				from = hex2arr(m[1]);
				to = hex2arr(m[2]);
			}
			$(this).empty();
			_results = [];
			for (i = _i = 0, _ref = letters.length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
				letter = letters[i];
				color = (function() {
					var _j, _results1;
					_results1 = [];
					for (j = _j = 0; _j <= 2; j = ++_j) {
						_results1.push(from[j] + Math.round((to[j] - from[j]) * (i / letters.length)));
					}
					return _results1;
				})();
				_results.push($(this).append("<span style=\"color: #" + (arr2hex(color)) + "\">" + letter + "</span>"));
			}
			return _results;
		});
		return this;
	};

	$(".text-gradient").textGradient();

}).call(this);
