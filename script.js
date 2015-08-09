function __prototypeExtend(c, 
	p, 
	t){
	t = function (){};
	t.prototype = p.prototype;
	c.prototype = new t();
	c.prototype.constructor = c;
}

function __bindOnce(obj, 
	name){
	if (!obj.hasOwnProperty('__bindTable'))
		obj.__bindTable = {};
	
	if (!obj.__bindTable.hasOwnProperty(name))
		obj.__bindTable[name] = obj[name].bind(obj);
	return obj.__bindTable[name];
}

;

;

;

;

;

;

;

;

;

Number.prototype.postfix = function (){                                            // number.postfix.jsxi:5
	if (Math.round(this) != this)                                                  // number.postfix.jsxi:6
		return arguments[1];                                                       // number.postfix.jsxi:7
	return arguments[this == Number.POSITIVE_INFINITY || this % 10 > 4 && this % 10 <= 9 || this % 10 == 0 || this % 100 > 10 && this % 100 < 20 ? 2 : this % 10 > 1 ? 1 : 0];
};
Number.prototype.toLongString = function (g, r){                                   // number.to_long_string.jsxi:6
	var e = [ '', 'а', 'ов' ],                                                     // number.to_long_string.jsxi:7
		f = [                                                                      // number.to_long_string.jsxi:7
			{ s: 'тысяч', g: 2, e: [ 'а', 'и', '' ] },                             // number.to_long_string.jsxi:7
			'миллион',                                                             // number.to_long_string.jsxi:9
			'миллиард',                                                            // number.to_long_string.jsxi:9
			'триллион',                                                            // number.to_long_string.jsxi:9
			'квадриллион',                                                         // number.to_long_string.jsxi:9
			'квинтиллион',                                                         // number.to_long_string.jsxi:9
			'секстиллион',                                                         // number.to_long_string.jsxi:9
			'септиллион',                                                          // number.to_long_string.jsxi:9
			'октиллион',                                                           // number.to_long_string.jsxi:9
			'нониллион',                                                           // number.to_long_string.jsxi:9
			'дециллион',                                                           // number.to_long_string.jsxi:9
			'андециллион',                                                         // number.to_long_string.jsxi:9
			'дуодециллион',                                                        // number.to_long_string.jsxi:9
			'тредециллион',                                                        // number.to_long_string.jsxi:9
			'кваттордециллион',                                                    // number.to_long_string.jsxi:9
			'квиндециллион',                                                       // number.to_long_string.jsxi:9
			'сексдециллион',                                                       // number.to_long_string.jsxi:9
			'септемдециллион',                                                     // number.to_long_string.jsxi:9
			'октодециллион',                                                       // number.to_long_string.jsxi:9
			'новемдециллион',                                                      // number.to_long_string.jsxi:9
			'вигинтиллион',                                                        // number.to_long_string.jsxi:9
			'анвигинтиллион',                                                      // number.to_long_string.jsxi:9
			'дуовигинтиллион',                                                     // number.to_long_string.jsxi:9
			'тревигинтиллион',                                                     // number.to_long_string.jsxi:9
			'кватторвигинтиллион',                                                 // number.to_long_string.jsxi:9
			'квинвигинтиллион',                                                    // number.to_long_string.jsxi:9
			'сексвигинтиллион',                                                    // number.to_long_string.jsxi:9
			'септемвигинтиллион',                                                  // number.to_long_string.jsxi:9
			'октовигинтиллион',                                                    // number.to_long_string.jsxi:9
			'новемвигинтиллион',                                                   // number.to_long_string.jsxi:9
			'тригинтиллион',                                                       // number.to_long_string.jsxi:9
			'антригинтиллион'
		];
	
	for (var i = f.length; i >= 0; i --){                                          // number.to_long_string.jsxi:11
		var n = Math.pow(1000, i + 1), c = f[i];
		
		if (n <= this){                                                            // number.to_long_string.jsxi:13
			if (!c)                                                                // number.to_long_string.jsxi:14
				return '<ОЧЕНЬ БОЛЬШОЕ ЧИСЛО>';                                    // number.to_long_string.jsxi:14
			
			var big = Math.round(this / n);
			return (big.toLongString(c.g) + ' ' + (c.s || c) + big.postfix((c.e || e)[0], (c.e || e)[1], (c.e || e)[2]) + ' ' + (this % n).toLongString(g, true)).trim();
		}
	}
	
	g = g || 0;                                                                    // number.to_long_string.jsxi:20
	
	var n = this | 0;
	
	var d2 = [                                                                     // number.to_long_string.jsxi:22
			'',                                                                    // number.to_long_string.jsxi:22
			'сто',                                                                 // number.to_long_string.jsxi:22
			'двести',                                                              // number.to_long_string.jsxi:22
			'триста',                                                              // number.to_long_string.jsxi:22
			'четыреста',                                                           // number.to_long_string.jsxi:22
			'пятьсот',                                                             // number.to_long_string.jsxi:22
			'шестьсот',                                                            // number.to_long_string.jsxi:22
			'семьсот',                                                             // number.to_long_string.jsxi:22
			'восемьсот',                                                           // number.to_long_string.jsxi:22
			'девятьсот'
		], 
		d1 = [                                                                     // number.to_long_string.jsxi:23
			'',                                                                    // number.to_long_string.jsxi:23
			'десять',                                                              // number.to_long_string.jsxi:23
			'двадцать',                                                            // number.to_long_string.jsxi:23
			'тридцать',                                                            // number.to_long_string.jsxi:23
			'сорок',                                                               // number.to_long_string.jsxi:23
			'пятьдесят',                                                           // number.to_long_string.jsxi:23
			'шестьдесят',                                                          // number.to_long_string.jsxi:23
			'семьдесят',                                                           // number.to_long_string.jsxi:23
			'восемьдесят',                                                         // number.to_long_string.jsxi:23
			'девяносто'
		], 
		dd = [                                                                     // number.to_long_string.jsxi:24
			'один',                                                                // number.to_long_string.jsxi:24
			'две',                                                                 // number.to_long_string.jsxi:24
			'три',                                                                 // number.to_long_string.jsxi:24
			'четыр',                                                               // number.to_long_string.jsxi:24
			'пят',                                                                 // number.to_long_string.jsxi:24
			'шест',                                                                // number.to_long_string.jsxi:24
			'сем',                                                                 // number.to_long_string.jsxi:24
			'восем',                                                               // number.to_long_string.jsxi:24
			'девят'
		];
	
	d0 = [                                                                         // number.to_long_string.jsxi:25
		'ноль',                                                                    // number.to_long_string.jsxi:25
		[ 'один', 'одно', 'одна' ][g],                                             // number.to_long_string.jsxi:25
		[ 'два', 'два', 'две' ][g],                                                // number.to_long_string.jsxi:25
		'три',                                                                     // number.to_long_string.jsxi:25
		'четыре',                                                                  // number.to_long_string.jsxi:25
		'пять',                                                                    // number.to_long_string.jsxi:25
		'шесть',                                                                   // number.to_long_string.jsxi:25
		'семь',                                                                    // number.to_long_string.jsxi:25
		'восемь',                                                                  // number.to_long_string.jsxi:25
		'девять'
	];
	
	if (n % 100 > 10 && n % 100 < 20)                                              // number.to_long_string.jsxi:26
		return (d2[n / 100 | 0] + ' ' + dd[n % 100 - 11] + 'надцать').trim();      // number.to_long_string.jsxi:26
	return [
		d2[n / 100 | 0],                                                           // number.to_long_string.jsxi:27
		d1[n % 100 / 10 | 0],                                                      // number.to_long_string.jsxi:27
		n == 0 && !r || n % 10 != 0 ? d0[n % 10] : ''
	].filter(function (a){                                                         // number.to_long_string.jsxi:27
		return a.length;                                                           // number.to_long_string.jsxi:27
	}).join(' ');                                                                  // number.to_long_string.jsxi:27
};

function o(n){                                                                     // output.jsxi:3
	if (typeof n !== 'number'){                                                    // output.jsxi:4
		return n;                                                                  // output.jsxi:5
	}
	
	var temp = n.toFixed(1);
	
	if (temp[temp.length - 1] === '0'){                                            // output.jsxi:9
		return + temp;                                                             // output.jsxi:10
	} else {
		return temp.slice(0, - 2) + ',' + temp[temp.length - 1];                   // output.jsxi:12
	}
}

function d(n){                                                                     // output.jsxi:16
	var d = new Date(n).toISOString();
	return d.substr(8, 2) + '.' + d.substr(5, 2) + '.' + d.substr(2, 2) + ' ' + d.substr(11, 5);
}

function t(n){                                                                     // output.jsxi:26
	if (n > 1e12){                                                                 // output.jsxi:27
		var d = new Date(n).toISOString();
		return d.substr(11, 5);                                                    // output.jsxi:29
	} else {
		var t = Math.round(n / 60e3);
		
		var h = Math.floor(t / 60);
		
		var m = t % 60;
		return (h < 10 ? '0' + h : h) + ':' + (m < 10 ? '0' + m : m);              // output.jsxi:34
	}
}

var Mediator = (function (){                                                       // mediator.jsxi:1
	function _splitAndCall(type, fn, arg){                                         // mediator.jsxi:2
		if (Array.isArray(type)){                                                  // mediator.jsxi:3
			for (var i = 0; i < type.length; i ++){                                // mediator.jsxi:4
				fn.call(this, type[i], arg);                                       // mediator.jsxi:5
			}
		} else if (type.indexOf(' ') !== - 1){                                     // mediator.jsxi:7
			type = type.split(' ');                                                // mediator.jsxi:8
			
			for (var i = 0; i < type.length; i ++){                                // mediator.jsxi:9
				fn.call(this, type[i], arg);                                       // mediator.jsxi:10
			}
		} else {
			fn.call(this, type, arg);                                              // mediator.jsxi:13
		}
	}
	
	function _call(type, entry, array){                                            // mediator.jsxi:17
		try {
			return entry.callback.apply(null, array);                              // mediator.jsxi:19
		} catch (e){                                                               // mediator.jsxi:20
			console.warn(e.stack);                                                 // mediator.jsxi:21
			
			if (typeof Mediator.errorHandler === 'function'){                      // mediator.jsxi:23
				try {
					Mediator.errorHandler(e);                                      // mediator.jsxi:25
				} catch (e){} 
			}
		} 
	}
	
	function _on(type, entry){                                                     // mediator.jsxi:31
		console.assert(type && typeof type === 'string' && typeof entry.callback === 'function', 
			'Wrong arg');                                                          // mediator.jsxi:32
		
		var added = false;
		
		this.dispatch('register:' + type,                                          // mediator.jsxi:35
			function (){                                                           // mediator.jsxi:35
				var l = arguments.length, array = new Array(l + 1);
				
				for (var i = 0; i < l; i ++){                                      // mediator.jsxi:37
					array[i] = arguments[i];                                       // mediator.jsxi:38
				}
				
				array[l] = type;                                                   // mediator.jsxi:40
				_call.call(this, type, entry, array);                              // mediator.jsxi:43
				
				if (!entry.one){                                                   // mediator.jsxi:45
					return;
				}
				
				if (added){                                                        // mediator.jsxi:49
					this.off(type, entry.callback);                                // mediator.jsxi:50
				} else {
					this.dispatch('unregister:' + type);                           // mediator.jsxi:52
					entry = null;                                                  // mediator.jsxi:53
				}
			});
		
		if (entry === null){                                                       // mediator.jsxi:57
			return;
		} else {
			added = true;                                                          // mediator.jsxi:60
		}
		
		if (this.listeners.hasOwnProperty(type)){                                  // mediator.jsxi:63
			var array = this.listeners[type];
			
			for (var i = 0; i < array.length; i ++){                               // mediator.jsxi:66
				if (array[i] === null){                                            // mediator.jsxi:67
					array[i] = entry;                                              // mediator.jsxi:68
					return;
				}
			}
			
			this.listeners[type].push(entry);                                      // mediator.jsxi:73
		} else {
			this.listeners[type] = [ entry ];                                      // mediator.jsxi:75
		}
	}
	
	function _offCallback(callback){                                               // mediator.jsxi:79
		for (var type in this.listeners){                                          // mediator.jsxi:80
			var array = this.listeners[type];
			
			for (var i = 0; i < array.length; i ++){                               // mediator.jsxi:83
				if (array[i] !== null && array[i].callback === callback){          // mediator.jsxi:84
					this.dispatch('unregister:' + type);                           // mediator.jsxi:85
					array[i] = null;                                               // mediator.jsxi:86
				}
			}
		}
	}
	
	function _offType(type, callback){                                             // mediator.jsxi:92
		console.assert(typeof callback === 'function', 'Wrong arg');               // mediator.jsxi:93
		
		if (this.listeners.hasOwnProperty(type)){                                  // mediator.jsxi:95
			var array = this.listeners[type];
			
			for (var i = 0; i < array.length; i ++){                               // mediator.jsxi:98
				if (array[i] !== null && array[i].callback === callback){          // mediator.jsxi:99
					this.dispatch('unregister:' + type);                           // mediator.jsxi:100
					array[i] = null;                                               // mediator.jsxi:101
				}
			}
		}
	}
	
	function _dispatch(type, args){                                                // mediator.jsxi:107
		if (this.listeners.hasOwnProperty(type)){                                  // mediator.jsxi:108
			var array = this.listeners[type];
			
			for (var i = 0; i < array.length; i ++){                               // mediator.jsxi:111
				var entry = array[i];
				
				if (entry !== null){                                               // mediator.jsxi:114
					if (entry.one){                                                // mediator.jsxi:115
						this.dispatch('unregister:' + type);                       // mediator.jsxi:116
						array[i] = null;                                           // mediator.jsxi:117
					}
					
					_call.call(this, type, entry, args);                           // mediator.jsxi:121
				}
			}
		}
	}
	
	var Mediator = function (){                                                    // mediator.jsxi:127
		this.listeners = {};                                                       // mediator.jsxi:128
	};
	
	Mediator.prototype.on = function (type, callback){                             // mediator.jsxi:131
		if (typeof type === 'object' && !Array.isArray(type)){                     // mediator.jsxi:132
			for (var k in type){                                                   // mediator.jsxi:133
				this.on(k, type[k]);                                               // mediator.jsxi:134
			}
		} else {
			_splitAndCall.call(this, type, _on, { callback: callback });           // mediator.jsxi:137
		}
		return this;                                                               // mediator.jsxi:139
	};
	Mediator.prototype.one = function (type, callback){                            // mediator.jsxi:142
		if (typeof type === 'object' && !Array.isArray(type)){                     // mediator.jsxi:143
			for (var k in type){                                                   // mediator.jsxi:144
				this.one(k, type[k]);                                              // mediator.jsxi:145
			}
		} else {
			_splitAndCall.call(this, type, _on, { callback: callback, one: true });
		}
		return this;                                                               // mediator.jsxi:150
	};
	Mediator.prototype.off = function (type, callback){                            // mediator.jsxi:153
		if (typeof type === 'function'){                                           // mediator.jsxi:154
			_offCallback.call(this, type);                                         // mediator.jsxi:155
		} else {
			_splitAndCall.call(this, type, _offType, callback);                    // mediator.jsxi:157
		}
		return this;                                                               // mediator.jsxi:159
	};
	Mediator.prototype.dispatch = function (type){                                 // mediator.jsxi:162
		var args = new Array(arguments.length);
		
		for (var i = 1; i < args.length; i ++){                                    // mediator.jsxi:164
			args[i - 1] = arguments[i];                                            // mediator.jsxi:165
		}
		
		args[args.length - 1] = type;                                              // mediator.jsxi:167
		_dispatch.call(this, type, args);                                          // mediator.jsxi:169
		
		for (var index = type.lastIndexOf(':'); index !== - 1; index = type.lastIndexOf(':', index - 1))
			_dispatch.call(this, type.substr(0, index), args);                     // mediator.jsxi:171
		return this;                                                               // mediator.jsxi:173
	};
	Mediator.prototype.extend = function (obj){                                    // mediator.jsxi:176
		if (obj.on === undefined){                                                 // mediator.jsxi:177
			obj.on = this.on.bind(this);                                           // mediator.jsxi:178
		}
		
		if (obj.one === undefined){                                                // mediator.jsxi:181
			obj.one = this.one.bind(this);                                         // mediator.jsxi:182
		}
		
		if (obj.off === undefined){                                                // mediator.jsxi:185
			obj.off = this.off.bind(this);                                         // mediator.jsxi:186
		}
		return obj;                                                                // mediator.jsxi:189
	};
	Mediator.prototype.debug = function (arg){                                     // mediator.jsxi:192
		var result = {};
		
		for (var key in this.listeners){                                           // mediator.jsxi:194
			var filtered = this.listeners[key].filter(function (a){                // mediator.jsxi:195
				return a;                                                          // mediator.jsxi:196
			});
			
			if (typeof arg === 'string' && key !== arg && !key.startsWith(arg + ':')){
				continue;
			}
			
			result[key] = {                                                        // mediator.jsxi:203
				'Listeners': filtered.length,                                      // mediator.jsxi:203
				'First listener at': filtered.length > 0 ? filtered[0].callback.location() : '–', 
				'Allocated': this.listeners[key].length
			};
		}
		
		console.table(result);                                                     // mediator.jsxi:210
		return this;                                                               // mediator.jsxi:211
	};
	Mediator.test = function (){                                                   // mediator.jsxi:214
		var m = new Mediator(), c;
		
		m.on('register',                                                           // mediator.jsxi:217
			function (){                                                           // mediator.jsxi:217
				console.log('REGISTERED', arguments);                              // mediator.jsxi:218
			});
		m.on('unregister',                                                         // mediator.jsxi:220
			function (){                                                           // mediator.jsxi:220
				console.log('UNREGISTERED', arguments);                            // mediator.jsxi:221
			});
		m.on('a',                                                                  // mediator.jsxi:223
			c = function (){                                                       // mediator.jsxi:223
				console.log('A', arguments);                                       // mediator.jsxi:224
			});
		m.on('b',                                                                  // mediator.jsxi:226
			function (){                                                           // mediator.jsxi:226
				console.log('B', arguments);                                       // mediator.jsxi:227
			});
		m.on('a:b',                                                                // mediator.jsxi:229
			function (){                                                           // mediator.jsxi:229
				console.log('A:B', arguments);                                     // mediator.jsxi:230
			});
		m.one('a:b:c',                                                             // mediator.jsxi:232
			function (){                                                           // mediator.jsxi:232
				console.log('A:B:C', arguments);                                   // mediator.jsxi:233
			});
		console.info('a:b, 15');                                                   // mediator.jsxi:235
		m.dispatch('a:b', 15);                                                     // mediator.jsxi:236
		console.info('a:b:c, 16');                                                 // mediator.jsxi:237
		m.dispatch('a:b:c', 16);                                                   // mediator.jsxi:238
		console.info('a:b:c, 17');                                                 // mediator.jsxi:239
		m.dispatch('a:b:c', 17);                                                   // mediator.jsxi:240
		console.info('b, 18');                                                     // mediator.jsxi:241
		m.dispatch('b', 18);                                                       // mediator.jsxi:242
		console.info('a:b, 19');                                                   // mediator.jsxi:243
		m.dispatch('a:b', 19);                                                     // mediator.jsxi:244
		console.info('off');                                                       // mediator.jsxi:245
		m.off(c);                                                                  // mediator.jsxi:246
		console.info('a:b, 20');                                                   // mediator.jsxi:247
		m.dispatch('a:b', 20);                                                     // mediator.jsxi:248
		return m;                                                                  // mediator.jsxi:249
	};
	return Mediator;                                                               // mediator.jsxi:252
})();

/* Class "Dialog" declaration */
function Dialog(title, elements, callback, closeCallback){                         // dialog.jsxi:1
	var __that = this;
	
	this.__Dialog__closeOnEnter = true;
	this.el = document.createElement('div');                                       // dialog.jsxi:10
	this.el.className = 'dialog_wrapper';                                          // dialog.jsxi:11
	this.el.innerHTML = '\t\t\t<div class=\"dialog_vertical_align\"><div class=\"dialog_inner\">\n<div class=\"dialog_header\"><h5>' + title + '</h5></div>\n<div class=\"dialog_content\"></div>\n<div class=\"dialog_buttons\">\n\t<button data-id=\"dialog-ok\">ОК</button>\n</div></div></div>';
	this.$el = $(this.el).click(function (e){                                      // dialog.jsxi:19
		if (e.target.className === 'dialog_vertical_align' && (__that.__Dialog__closeCallback == null || __that.__Dialog__closeCallback !== false && __that.__Dialog__closeCallback(e) !== false)){
			__that.close();
		}
	}).appendTo('body');                                                           // dialog.jsxi:24
	this.header = this.el.querySelector('.dialog_header');                         // dialog.jsxi:26
	this.content = this.el.querySelector('.dialog_content');                       // dialog.jsxi:27
	this.buttons = this.el.querySelector('.dialog_buttons');                       // dialog.jsxi:28
	this.setContent(elements);
	this.__Dialog__callback = callback && callback.bind(this);                     // dialog.jsxi:32
	this.__Dialog__closeCallback = closeCallback && closeCallback.bind(this);      // dialog.jsxi:33
	this.__Dialog__okButton = this.buttons.querySelector('[data-id="dialog-ok"]');
	
	if (this.__Dialog__callback === false){
		this.__Dialog__okButton.style.display = 'none';                            // dialog.jsxi:37
	}
	
	$(this.__Dialog__okButton).click(function (e){                                 // dialog.jsxi:40
		if (!__that.__Dialog__callback || __that.__Dialog__callback(e) !== false){
			__that.close();
		}
	});
	Navigation.sub();                                                              // dialog.jsxi:46
	Navigation.on('subback',                                                       // dialog.jsxi:47
		__bindOnce(this, 
			'close'));
}
Dialog.prototype.setContent = function (elements){                                 // dialog.jsxi:50
	if (!Array.isArray(elements)){                                                 // dialog.jsxi:51
		elements = [ elements ];                                                   // dialog.jsxi:52
	}
	
	var html = '';
	
	for (var __0 = 0; __0 < elements.length; __0 ++){                              // dialog.jsxi:56
		var element = elements[__0];
		
		if (element == null || element === '')                                     // dialog.jsxi:57
			continue;
		
		html += typeof element === 'string' && element[0] !== '<' && element[element.length - 1] !== '>' ? '<p>' + element + '</p>' : element;
	}
	
	this.content.innerHTML = html;                                                 // dialog.jsxi:61
	return this;                                                                   // dialog.jsxi:62
};
Dialog.prototype.closeOnEnter = function (v){                                      // dialog.jsxi:65
	this.__Dialog__closeOnEnter = v;                                               // dialog.jsxi:66
	return this;                                                                   // dialog.jsxi:67
};
Dialog.prototype.onEnd = function (callback){                                      // dialog.jsxi:70
	this.__Dialog__endCallback = callback.bind(this);                              // dialog.jsxi:71
	return this;                                                                   // dialog.jsxi:72
};
Dialog.prototype.setButton = function (a, c){                                      // dialog.jsxi:75
	$(this.__Dialog__okButton).toggle(a != null).text(a);                          // dialog.jsxi:76
	
	if (c != null){                                                                // dialog.jsxi:77
		this.__Dialog__callback = c;                                               // dialog.jsxi:77
	}
	return this;                                                                   // dialog.jsxi:78
};
Dialog.prototype.addButton = function (text, fn){                                  // dialog.jsxi:81
	var __that = this;
	
	fn = fn && fn.bind(this);                                                      // dialog.jsxi:82
	$(document.createElement('button')).text(text).appendTo(this.buttons).click(function (e){
		if (!fn || fn(e) !== false){                                               // dialog.jsxi:84
			__that.close();
		}
	});
	return this;                                                                   // dialog.jsxi:88
};
Dialog.prototype.find = function (a){                                              // dialog.jsxi:91
	return this.$el.find(a);                                                       // dialog.jsxi:92
};
Dialog.prototype.close = function (){                                              // dialog.jsxi:95
	if (this.__Dialog__endCallback)
		this.__Dialog__endCallback();
	
	Navigation.off('subback',                                                      // dialog.jsxi:97
		__bindOnce(this, 
			'close'));
	this.$el.remove();                                                             // dialog.jsxi:98
};

/* Class "Data" declaration */
var Data = (function (){                                                           // data.jsxi:1
	var Data = function (){}, 
		ARCHIVE_PREFIX = 'archive_',                                               // data.jsxi:2
		mediator = new Mediator(),                                                 // data.jsxi:4
		data,                                                                      // data.jsxi:6
		currentShift,                                                              // data.jsxi:6
		statsTimeout;                                                              // data_archive.jsxi:21
	
	Data.archive = null;                                                           // data_archive.jsxi:2
	Data.stats = null;                                                             // data_archive.jsxi:3
	
	function init(){                                                               // data.jsxi:13
		try {
			data = JSON.parse(localStorage.data || null);                          // data.jsxi:14
		} catch (e){} 
		
		if (!data || typeof data !== 'object')                                     // data.jsxi:15
			data = {};                                                             // data.jsxi:15
		
		currentShift = data.currentShift;                                          // data.jsxi:17
		mediator.dispatch('currentShift:load', currentShift);                      // data.jsxi:18
	}
	
	function save(){                                                               // data.jsxi:21
		data.currentShift = currentShift;                                          // data.jsxi:22
		localStorage.data = JSON.stringify(data);                                  // data.jsxi:23
	}
	
	Data.startNewShift = function (){                                              // data.jsxi:26
		currentShift = {                                                           // data.jsxi:27
			timestamp: Date.now(),                                                 // data.jsxi:27
			finished: null,                                                        // data.jsxi:29
			ready: false,                                                          // data.jsxi:31
			details: { distance: null, consumption: null, fuelPrice: null },       // data.jsxi:32
			jobs: []
		};
		save();                                                                    // data.jsxi:41
		mediator.dispatch('currentShift:new', currentShift);                       // data.jsxi:42
	};
	Data.finishShift = function (){                                                // data.jsxi:45
		if (!currentShift.ready)                                                   // data.jsxi:46
			return false;
		
		var shift = currentShift;
		
		shift.finished = Date.now();                                               // data.jsxi:49
		addToArchive(currentShift);                                                // data.jsxi:50
		currentShift = null;                                                       // data.jsxi:52
		save();                                                                    // data.jsxi:53
		mediator.dispatch('currentShift:finish', currentShift);                    // data.jsxi:54
		return shift;                                                              // data.jsxi:56
	};
	Data.getShiftSummary = function (shift){                                       // data.jsxi:59
		var sum = {                                                                // data.jsxi:60
			jobs: 0,                                                               // data.jsxi:60
			jobsHand: 0,                                                           // data.jsxi:62
			jobsOrder: 0,                                                          // data.jsxi:63
			fuelPrice: + (shift.details.distance * shift.details.consumption / 100.0 * shift.details.fuelPrice).toFixed(1), 
			tip: 0.0,                                                              // data.jsxi:67
			lost: 0.0,                                                             // data.jsxi:68
			hand: 0.0,                                                             // data.jsxi:69
			order: 0.0,                                                            // data.jsxi:70
			income: 0.0,                                                           // data.jsxi:72
			result: 0.0,                                                           // data.jsxi:73
			amortization: 0.0
		};
		
		{
			var __2 = shift.jobs;
			
			for (var __1 = 0; __1 < __2.length; __1 ++){
				var j = __2[__1];
				
				sum.jobs ++;                                                       // data.jsxi:78
				sum.tip += j.tip;                                                  // data.jsxi:79
				
				if (j.percent === 1.0){                                            // data.jsxi:81
					sum.jobsHand ++;                                               // data.jsxi:82
					sum.hand += j.sum;                                             // data.jsxi:83
				} else {
					sum.jobsOrder ++;                                              // data.jsxi:85
					sum.order += j.sum * j.percent;                                // data.jsxi:86
					sum.lost = j.sum * (1.0 - j.percent);                          // data.jsxi:87
				}
			}
			
			__2 = undefined;
		}
		
		sum.income = sum.tip + sum.hand + sum.order;                               // data.jsxi:91
		sum.result = sum.income - sum.fuelPrice;                                   // data.jsxi:92
		sum.amortization = sum.result - sum.fuelPrice;                             // data.jsxi:93
		return sum;                                                                // data.jsxi:95
	};
	Data.getCurrentShift = function (){                                            // data.jsxi:98
		return currentShift;                                                       // data.jsxi:99
	};
	Data.addNewJob = function (job){                                               // data.jsxi:102
		if (currentShift == null){                                                 // data.jsxi:103
			return false;
		}
		
		if (Number.isNaN(job.sum = parseFloat(job.sum)) || job.sum < 0.0 || Number.isNaN(job.tip = parseFloat(job.tip)) || Number.isNaN(job.percent = parseFloat(job.percent)) || job.percent < 0.0){
			return false;
		}
		
		job.timestamp = Date.now();                                                // data.jsxi:113
		currentShift.jobs.push(job);                                               // data.jsxi:115
		save();                                                                    // data.jsxi:116
		mediator.dispatch('currentShift.jobs:new', currentShift);                  // data.jsxi:117
	};
	Data.getJobIncome = function (job){                                            // data.jsxi:120
		return job.sum * job.percent + job.tip;                                    // data.jsxi:121
	};
	Data.updateDetails = function (details){                                       // data.jsxi:124
		if (currentShift == null){                                                 // data.jsxi:125
			return false;
		}
		
		if (details.distance != null && (Number.isNaN(details.distance = parseFloat(details.distance)) || details.distance < 0.0) || details.consumption != null && (Number.isNaN(details.consumption = parseFloat(details.consumption)) || details.consumption < 0.0) || details.fuelPrice != null && (Number.isNaN(details.fuelPrice = parseFloat(details.fuelPrice)) || details.fuelPrice < 0.0)){
			return false;
		}
		
		currentShift.details.distance = details.distance;                          // data.jsxi:135
		currentShift.details.consumption = details.consumption;                    // data.jsxi:136
		currentShift.details.fuelPrice = details.fuelPrice;                        // data.jsxi:137
		currentShift.ready = currentShift.details.distance != null && currentShift.details.consumption != null && currentShift.details.fuelPrice != null;
		save();                                                                    // data.jsxi:143
		mediator.dispatch('currentShift.details:update', currentShift);            // data.jsxi:144
	};
	Data.getArchive = function (){                                                 // data_archive.jsxi:5
		return Data.archive;
	};
	Data.getStats = function (){                                                   // data_archive.jsxi:9
		return Data.stats;
	};
	Data.getArchiveById = function (id){                                           // data_archive.jsxi:13
		for (var __3 = 0; __3 < Data.archive.length; __3 ++){
			var a = Data.archive[__3];
			
			if (a.id === id)                                                       // data_archive.jsxi:15
				return a;                                                          // data_archive.jsxi:15
		}
		return null;
	};
	
	function updateStats(entry){                                                   // data_archive.jsxi:22
		if (!Data.stats){
			Data.stats = {
				jobs: 0,                                                           // data_archive.jsxi:25
				jobsHand: 0,                                                       // data_archive.jsxi:26
				jobsOrder: 0,                                                      // data_archive.jsxi:27
				distance: 0.0,                                                     // data_archive.jsxi:28
				fuel: 0.0,                                                         // data_archive.jsxi:29
				time: 0,                                                           // data_archive.jsxi:30
				result: 0.0,                                                       // data_archive.jsxi:32
				fuelPrice: 0.0,                                                    // data_archive.jsxi:33
				tip: 0.0,                                                          // data_archive.jsxi:34
				hand: 0.0,                                                         // data_archive.jsxi:35
				order: 0.0,                                                        // data_archive.jsxi:36
				income: 0.0,                                                       // data_archive.jsxi:37
				lost: 0.0
			};
		}
		
		Data.stats.jobs += entry.summary.jobs;                                     // data_archive.jsxi:42
		Data.stats.jobsHand += entry.summary.jobsHand;                             // data_archive.jsxi:43
		Data.stats.jobsOrder += entry.summary.jobsOrder;                           // data_archive.jsxi:44
		Data.stats.distance += entry.data.details.distance;                        // data_archive.jsxi:45
		Data.stats.fuel += entry.data.details.distance * entry.data.details.consumption / 100;
		Data.stats.time += entry.data.finished - entry.data.timestamp;             // data_archive.jsxi:47
		Data.stats.result += entry.summary.result;                                 // data_archive.jsxi:49
		Data.stats.fuelPrice += entry.summary.fuelPrice;                           // data_archive.jsxi:50
		Data.stats.tip += entry.summary.tip;                                       // data_archive.jsxi:51
		Data.stats.hand += entry.summary.hand;                                     // data_archive.jsxi:52
		Data.stats.order += entry.summary.order;                                   // data_archive.jsxi:53
		Data.stats.income += entry.summary.income;                                 // data_archive.jsxi:54
		Data.stats.lost += entry.summary.lost;                                     // data_archive.jsxi:55
		clearTimeout(statsTimeout);                                                // data_archive.jsxi:57
		statsTimeout = setTimeout(function (arg){                                  // data_archive.jsxi:58
			mediator.dispatch('stats', Data.stats);                                // data_archive.jsxi:59
		}, 
		10);
	}
	
	function addToArchive(shift){                                                  // data_archive.jsxi:63
		var id = ARCHIVE_PREFIX + Date.now();
		
		var json = JSON.stringify(shift);
		
		localStorage[id] = json;                                                   // data_archive.jsxi:67
		
		if (Data.archive != null){
			var summary = Data.getShiftSummary(shift);
			
			var entry = { id: id, json: json, data: shift, summary: summary };     // data_archive.jsxi:70
			
			Data.archive.push(entry);                                              // data_archive.jsxi:71
			updateStats(entry);                                                    // data_archive.jsxi:72
			mediator.dispatch('archive:add', Data.archive);                        // data_archive.jsxi:73
		}
		return summary;                                                            // data_archive.jsxi:76
	}
	
	Data.loadArchive = function (){                                                // data_archive.jsxi:79
		var initMode = Data.archive == null;
		
		if (initMode){                                                             // data_archive.jsxi:81
			Data.archive = [];
		}
		
		var loaded = {}, jsoned = 0;
		
		for (var __4 = 0; __4 < Data.archive.length; __4 ++){
			var a = Data.archive[__4];
			
			loaded[a.id] = true;                                                   // data_archive.jsxi:89
		}
		
		for (var n in localStorage)                                                // data_archive.jsxi:92
			if (localStorage.hasOwnProperty(n)){                                   // data_archive.jsxi:92
				if (n.indexOf(ARCHIVE_PREFIX) !== 0 || loaded.hasOwnProperty(n)){
					continue;
				}
				
				Data.archive.push({ id: n, json: localStorage[n] });               // data_archive.jsxi:97
				jsoned ++;                                                         // data_archive.jsxi:98
			}
		
		if (jsoned > 0){                                                           // data_archive.jsxi:101
			Data.parseJsoned();
		} else if (initMode){                                                      // data_archive.jsxi:103
			mediator.dispatch('archive.loading:finish',                            // data_archive.jsxi:104
				Data.archive.length,                                               // data_archive.jsxi:104
				Data.archive.length);                                              // data_archive.jsxi:104
			mediator.dispatch('archive:load', Data.archive);                       // data_archive.jsxi:105
		}
	};
	Data.parseJsoned = function (){                                                // data_archive.jsxi:109
		mediator.dispatch('archive.loading:start', 0, 
			Data.archive.length);                                                  // data_archive.jsxi:110
		
		var i = 0;
		
		step();                                                                    // data_archive.jsxi:112
		
		function step(){                                                           // data_archive.jsxi:114
			var o = Data.archive[i];
			
			if (o == null){                                                        // data_archive.jsxi:116
				mediator.dispatch('archive.loading:finish',                        // data_archive.jsxi:117
					Data.archive.length,                                           // data_archive.jsxi:117
					Data.archive.length);                                          // data_archive.jsxi:117
				mediator.dispatch('archive:load', Data.archive);                   // data_archive.jsxi:118
				return;
			}
			
			o.data = Data.parseJsonedEntry(o.json);                                // data_archive.jsxi:122
			o.summary = Data.getShiftSummary(o.data);                              // data_archive.jsxi:123
			updateStats(o);                                                        // data_archive.jsxi:124
			mediator.dispatch('archive.loading:step', ++ i, Data.archive.length);
			setTimeout(step);                                                      // data_archive.jsxi:126
		}
	};
	Data.parseJsonedEntry = function (json){                                       // data_archive.jsxi:130
		return JSON.parse(json);                                                   // data_archive.jsxi:131
	};
	Data.guessTip = function (sum){                                                // data_input.jsxi:6
		if (Number.isNaN(+ sum))                                                   // data_input.jsxi:7
			return 0;
		return (100 - + sum % 100) % 100;                                          // data_input.jsxi:8
	};
	(function (){                                                                  // data.jsxi:8
		mediator.extend(Data);                                                     // data.jsxi:9
		$(init);                                                                   // data.jsxi:10
	})();
	return Data;
})();

;

;

/* Class "Navigation" declaration */
var Navigation = (function (){                                                     // navigation.jsxi:1
	var Navigation = function (){};
	
	Navigation.mediator = new Mediator();                                          // navigation.jsxi:2
	Navigation.currentPage = undefined;                                            // navigation.jsxi:3
	Navigation.subMode = undefined;                                                // navigation.jsxi:3
	Navigation.sub = function (){                                                  // navigation.jsxi:5
		location.hash = Navigation.currentPage + '/sub';                           // navigation.jsxi:6
		setTimeout(function (arg){                                                 // navigation.jsxi:7
			return Navigation.subMode = true;
		});
	};
	
	function handler(){                                                            // navigation.jsxi:10
		var page = location.hash.indexOf('#view') === 0 ? 'view' : 'edit';         // navigation.jsxi:11
		
		if (page !== Navigation.currentPage){                                      // navigation.jsxi:12
			Navigation.mediator.dispatch('navigate:' + page, page);                // navigation.jsxi:13
			Navigation.currentPage = page;                                         // navigation.jsxi:14
		} else if (Navigation.subMode){
			Navigation.mediator.dispatch('subback');                               // navigation.jsxi:16
		}
		
		Navigation.subMode = false;
	}
	
	(function (){                                                                  // navigation.jsxi:22
		window.onhashchange = handler;                                             // navigation.jsxi:23
		Navigation.mediator.extend(Navigation);                                    // navigation.jsxi:24
		$(handler);                                                                // navigation.jsxi:25
	})();
	return Navigation;
})();

/* Class "SectionAbstract" declaration */
function SectionAbstract(nodeId){                                                  // app.jsxi:1
	if (this.constructor === SectionAbstract)
		throw new Error('Trying to instantiate abstract class SectionAbstract');
	
	this.__SectionAbstract_id = nodeId;                                            // app.jsxi:6
	this.__node = document.getElementById(nodeId);                                 // app.jsxi:7
	this.__$node = $(this.__node);                                                 // app.jsxi:8
	this.hide();
}
SectionAbstract.prototype.show = function (){                                      // app.jsxi:12
	this.__node.style.display = null;                                              // app.jsxi:13
};
SectionAbstract.prototype.hide = function (){                                      // app.jsxi:16
	this.__node.style.display = 'none';                                            // app.jsxi:17
};
SectionAbstract.prototype.__click = function (action, callback){                   // app.jsxi:20
	document.getElementById(this.__SectionAbstract_id + '_' + action).onclick = callback;
};
SectionAbstract.prototype.__mode = function (mode){                                // app.jsxi:24
	if (mode === this.__currentMode)                                               // app.jsxi:25
		return;
	
	this.__currentMode = mode;                                                     // app.jsxi:27
	
	{
		var __6 = this.__node.children;
		
		for (var __5 = 0; __5 < __6.length; __5 ++){
			var c = __6[__5];
			
			c.style.display = c[c instanceof SectionAbstract ? '__SectionAbstract_id' : 'id'] === this.__SectionAbstract_id + '_' + mode ? null : 'none';
		}
		
		__6 = undefined;
	}
};

/* Class "SectionEdit" declaration */
function SectionEdit(){                                                            // app.jsxi:34
	SectionAbstract.call(this, 
		'section_edit');
	this.__click('start',                                                          // app.jsxi:37
		__bindOnce(this, 
			'startNewShift'));
	this.__click('add_job',                                                        // app.jsxi:38
		__bindOnce(this, 
			'addNewJob'));
	this.__click('details',                                                        // app.jsxi:39
		__bindOnce(this, 
			'updateDetails'));
	this.__click('finish',                                                         // app.jsxi:40
		__bindOnce(this, 
			'finishShift'));
	Data.on('currentShift',                                                        // app.jsxi:42
		__bindOnce(this, 
			'updateCurrentShift'));
	Data.on('currentShift currentShift.jobs',                                      // app.jsxi:43
		__bindOnce(this, 
			'updateCurrentShiftJobs'));
	Data.on('currentShift currentShift.details',                                   // app.jsxi:44
		__bindOnce(this, 
			'updateCurrentShiftDetails'));
}
__prototypeExtend(SectionEdit, 
	SectionAbstract);
SectionEdit.prototype.addNewJob = function (){                                     // app.jsxi:47
	var percents = [ 0.9, 0.8 ];
	
	var tryToGuessTip = true;
	
	var d = new Dialog('Новый клиент',                                             // app.jsxi:51
		[
			'\t\t\t\t\t\t\t\t  \n<p>Процент:\n<select id=\"new_job_percent\">\n\t<option value=\"1.0\">С руки</option>\n\t' + percents.map(function (arg){
				return '<option value="' + arg + '">' + 100 * arg + '%</option>';
			}) + '\n</select></p>\n\n<p>Сумма (₽):\n<input id=\"new_job_sum\" type=\"number\" min=\"0\" step=\"5\" value=\"400\"></input></p>\n\n<p id=\"new_job_tip_section\">Чаевые (₽):\n<input id=\"new_job_tip\" type=\"number\" min=\"0\" step=\"5\" value=\"50\"></input></p>\n'
		], 
		function (arg){                                                            // app.jsxi:63
			var sum = d.find('#new_job_sum').val();
			
			var tip = d.find('#new_job_tip').val();
			
			var percent = d.find('#new_job_percent').val();
			return Data.addNewJob({                                                // app.jsxi:68
				sum: sum,                                                          // app.jsxi:68
				tip: + percent === 1.0 ? 0.0 : tip,                                // app.jsxi:69
				percent: percent
			});
		});
	
	d.find('#new_job_sum').val(localStorage.prevSum || 400).on('change',           // app.jsxi:73
		function (arg){                                                            // app.jsxi:73
			var val = parseFloat(this.value);
			
			if (!this.value || Number.isNaN(val) || val < 0)                       // app.jsxi:75
				return;
			
			localStorage.prevSum = + val;                                          // app.jsxi:77
			
			if (tryToGuessTip){                                                    // app.jsxi:78
				d.find('#new_job_tip').val(Data.guessTip(val));                    // app.jsxi:79
			}
		}).on('keydown',                                                           // app.jsxi:81
		function (arg){                                                            // app.jsxi:81
			if (arg.keyCode === 13){                                               // app.jsxi:82
				d.find('#new_job_tip')[0].select();                                // app.jsxi:83
			}
		})[0].select();                                                            // app.jsxi:85
	d.find('#new_job_tip').val(Data.guessTip(localStorage.prevSum || 400)).on('change', 
		function (arg){                                                            // app.jsxi:87
			tryToGuessTip = false;                                                 // app.jsxi:88
			localStorage.prevTip = this.value;                                     // app.jsxi:89
		}).on('keydown',                                                           // app.jsxi:90
		function (arg){                                                            // app.jsxi:90
			if (arg.keyCode === 13){                                               // app.jsxi:91
				d.find('#new_job_percent')[0].focus();                             // app.jsxi:92
			}
		});
	d.find('#new_job_percent').val(localStorage.prevPercent || percents[0]).on('change', 
		function (arg){                                                            // app.jsxi:96
			if (+ this.value < 1.0){                                               // app.jsxi:97
				localStorage.prevPercent = this.value;                             // app.jsxi:98
			}
			
			d.find('#new_job_tip_section').toggle(+ this.value < 1.0);             // app.jsxi:101
		});
};
SectionEdit.prototype.startNewShift = function (){                                 // app.jsxi:105
	Data.startNewShift();                                                          // app.jsxi:106
	this.show();
};
SectionEdit.prototype.updateDetails = function (){                                 // app.jsxi:110
	var currentShift = Data.getCurrentShift();
	
	if (currentShift == null)                                                      // app.jsxi:112
		return;
	
	var d = new Dialog('Детали смены',                                             // app.jsxi:114
		[
			'Общий пробег (км):',                                                  // app.jsxi:115
			'<input id="details_distance" type="number" min="0" step="1"></input>', 
			'Расход топлива (л/100 км):',                                          // app.jsxi:118
			'<input id="details_consumption" type="number" min="0" step="0.1"></input>', 
			'Цена топлива (₽/л):',                                                 // app.jsxi:121
			'<input id="details_fuelPrice" type="number" min="0" step="0.1"></input>'
		], 
		function (arg){                                                            // app.jsxi:123
			var distance = d.find('#details_distance').val() || null;
			
			var consumption = d.find('#details_consumption').val() || null;
			
			var fuelPrice = d.find('#details_fuelPrice').val() || null;
			return Data.updateDetails({                                            // app.jsxi:128
				distance: distance,                                                // app.jsxi:128
				consumption: consumption,                                          // app.jsxi:129
				fuelPrice: fuelPrice
			});
		});
	
	d.find('#details_distance').val(o(currentShift.details.distance || '')).on('keydown', 
		function (arg){                                                            // app.jsxi:133
			if (arg.keyCode === 13){                                               // app.jsxi:134
				d.find('#details_consumption')[0].select();                        // app.jsxi:135
			}
		})[0].select();                                                            // app.jsxi:137
	d.find('#details_consumption').val(o(currentShift.details.consumption || localStorage.lastConsumption || '')).on('change', 
		function (arg){                                                            // app.jsxi:139
			localStorage.lastConsumption = this.value;                             // app.jsxi:140
		}).on('keydown',                                                           // app.jsxi:141
		function (arg){                                                            // app.jsxi:141
			if (arg.keyCode === 13){                                               // app.jsxi:142
				d.find('#details_fuelPrice')[0].select();                          // app.jsxi:143
			}
		});
	d.find('#details_fuelPrice').val(o(currentShift.details.fuelPrice || localStorage.lastFuelPrice || '')).on('change', 
		function (arg){                                                            // app.jsxi:147
			localStorage.lastFuelPrice = this.value;                               // app.jsxi:148
		}).on('keydown',                                                           // app.jsxi:149
		function (arg){                                                            // app.jsxi:149
			var __;
			
			if (arg.keyCode === 13){                                               // app.jsxi:150
				(__ = d.find('[data-id="dialog-ok"]')[0],                          // app.jsxi:151
					__[__ instanceof SectionAbstract ? '__click' : 'click']).call(__);
			}
		});
};
SectionEdit.prototype.finishShift = function (){                                   // app.jsxi:156
	var currentShift = Data.getCurrentShift();
	
	if (currentShift == null)                                                      // app.jsxi:158
		return;
	
	function step1(){                                                              // app.jsxi:160
		var d = new Dialog('Завершить смену',                                      // app.jsxi:161
			[ 'Вы уверены?' ], 
			function (arg){                                                        // app.jsxi:163
				if (currentShift.jobs.length === 0){                               // app.jsxi:164
					step2();                                                       // app.jsxi:165
				} else {
					step3();                                                       // app.jsxi:167
				}
			}).setButton('Да');                                                    // app.jsxi:169
		
		d.find('[data-id="dialog-ok"]').addClass('finish');                        // app.jsxi:170
	}
	
	function step2(){                                                              // app.jsxi:173
		step3();                                                                   // app.jsxi:175
	}
	
	function step3(){                                                              // app.jsxi:178
		var shift = Data.finishShift();
		
		if (!shift)                                                                // app.jsxi:180
			return;
		
		var summary = Data.getShiftSummary(shift);
		
		new Dialog('Конец смены',                                                  // app.jsxi:184
			[
				'<div class="div_sum_entry div_sum_entry_money" data-value="' + o(summary.order) + '">Заказы:</div>', 
				'<div class="div_sum_entry div_sum_entry_money" data-value="' + o(summary.tip) + '">Чаевые:</div>', 
				'<div class="div_sum_entry div_sum_entry_money" data-value="' + o(summary.hand) + '">С руки:</div>', 
				'<div class="div_sum_entry div_sum_entry_money" data-value="' + o(- summary.fuelPrice) + '">Топливо:</div>', 
				'<hr>',                                                            // app.jsxi:189
				'<div class="div_sum_entry div_sum_entry_money" data-value="' + o(summary.result) + '">Итого:</div>'
			]);
	}
	
	step1();                                                                       // app.jsxi:194
};
SectionEdit.prototype.updateCurrentShift = function (currentShift){                // app.jsxi:197
	if (currentShift == null){                                                     // app.jsxi:198
		this.__mode('init');
		return;
	}
	
	this.__mode('work');
	this.__$node.find('#section_edit_current_shift').text('Работа начата в ' + t(currentShift.timestamp));
};
SectionEdit.prototype.updateCurrentShiftJobs = function (currentShift){            // app.jsxi:207
	if (currentShift == null)                                                      // app.jsxi:208
		return;
	
	var l = currentShift.jobs.length;
	
	var i = currentShift.jobs.reduce(function (a, b){                              // app.jsxi:211
		return a + Data.getJobIncome(b);                                           // app.jsxi:211
	}, 
	0);
	
	this.__$node.find('#section_edit_jobs_number').toggle(l > 0).text('Выполнен' + l.postfix('', 'о', 'о') + ' ' + l.toLongString() + ' заказ' + l.postfix('', 'а', 'ов') + ',' + (' заработан' + i.postfix('', 'о', 'о') + ' ' + o(i) + ' рубл' + i.postfix('ь', 'я', 'ей')));
	this.__$node.find('#section_edit_jobs_list_empty').toggle(l === 0);            // app.jsxi:216
	this.__$node.find('#section_edit_jobs_list').html(currentShift.jobs.map(function (arg){
		return '<div class=\"section_edit_job_entry\"><p>' + ('Сумма: ' + o(arg.sum) + ' ₽, ' + (arg.tip > 0 ? 'чаевые: ' + o(arg.tip) + ' ₽, ' : '') + (arg.percent === 1 ? 'с руки' : o(arg.percent * 100) + '%')) + '</p><p class=\"p_small\">' + t(arg.timestamp) + '</p></div>';
	}).join(''));                                                                  // app.jsxi:222
};
SectionEdit.prototype.updateCurrentShiftDetails = function (currentShift){         // app.jsxi:226
	if (currentShift == null)                                                      // app.jsxi:227
		return;
	
	this.__$node.find('#section_edit_finish').toggle(currentShift.ready);          // app.jsxi:229
	this.__$node.find('#section_edit_details, #section_edit_finish').toggleClass('halfwidth', currentShift.ready);
};

/* Class "SectionView" declaration */
function SectionView(){                                                            // app.jsxi:234
	var __that = this;
	
	SectionAbstract.call(this, 
		'section_view');
	this.__mode('loading');
	Data.on('archive.loading:start',                                               // app.jsxi:239
		function (arg){                                                            // app.jsxi:239
			return __that.__mode('loading');
		});
	Data.on('archive.loading:finish',                                              // app.jsxi:240
		function (arg){                                                            // app.jsxi:240
			return __that.__mode(Data.getArchive().length === 0 ? 'empty' : 'view');
		});
	Data.on('archive.loading',                                                     // app.jsxi:241
		__bindOnce(this, 
			'__SectionView_onLoading'));
	Data.on('archive',                                                             // app.jsxi:243
		__bindOnce(this, 
			'__SectionView_updateTable'));
	Data.on('stats',                                                               // app.jsxi:244
		__bindOnce(this, 
			'__SectionView_updateStats'));
	this.__click('shifts_list',                                                    // app.jsxi:246
		__bindOnce(this, 
			'__SectionView_shiftListClick'));
	this.__$node.find('#section_view_stats, #section_view_charts').hide();         // app.jsxi:248
	this.__$node.find('#section_view_view_mode').change(function (arg){            // app.jsxi:249
		__that.__$node.find('#section_view_shifts_list, #section_view_stats, #section_view_charts').hide();
		__that.__$node.find('#section_view_' + this.value).show();                 // app.jsxi:251
		
		if (this.value === 'charts'){                                              // app.jsxi:253
			__that.__SectionView_updateCharts();
		}
	});
}
__prototypeExtend(SectionView, 
	SectionAbstract);
SectionView.prototype.__SectionView_onLoading = function (pos, max){               // app.jsxi:259
	this.__node.querySelector('#section_view_loading_progressbar').style.width = 100 * pos / max + '%';
};
SectionView.prototype.__SectionView_updateTable = function (archive){              // app.jsxi:263
	var l = archive.length;
	
	this.__mode(l === 0 ? 'empty' : 'view');
	this.__$node.find('#section_view_shifts_number').toggle(l > 0).text('Завершен' + l.postfix('а', 'о', 'о') + ' ' + l.toLongString(2) + ' смен' + l.postfix('а', 'ы', ''));
	
	var m = this.__$node.find('#section_view_view_mode').toggle(l > 1);            // app.jsxi:269
	
	if (l < 2 && m.val() !== 'shifts_list'){                                       // app.jsxi:270
		m.val('shifts_list');                                                      // app.jsxi:271
		this.__$node.find('#section_view_stats, #section_view_charts').hide();     // app.jsxi:272
		this.__$node.find('#section_view_shifts_list').show();                     // app.jsxi:273
	}
	
	this.__node.querySelector('#section_view_shifts_list').innerHTML = archive.map(function (arg){
		var l = arg.data.jobs.length, e = arg.summary.result;
		return '<div data-id="' + arg[arg instanceof SectionAbstract ? 'id' : 'id'] + '" class="section_view_shift_entry"><p>' + (o(l) + ' заказ' + l.postfix('', 'а', 'ов') + ', ' + o(e) + ' рубл' + e.postfix('ь', 'я', 'ей')) + '</p><p class="p_small">' + d(arg.data.timestamp) + '</p></div>';
	}).join('');                                                                   // app.jsxi:284
};
SectionView.prototype.__SectionView_updateStats = function (stats){                // app.jsxi:287
	function t(n){                                                                 // app.jsxi:288
		var t = Math.round(n / 60e3);
		
		var m = t % 60;
		
		var s = m + ' минут' + m.postfix('а', 'ы', '');
		
		var h = Math.floor(t / 60 % 24);
		
		if (h === 0)                                                               // app.jsxi:294
			return s;                                                              // app.jsxi:294
		
		s = h + ' час' + h.postfix('', 'а', 'ов') + ' ' + s;                       // app.jsxi:295
		
		var d = Math.floor(t / 60 / 60);
		
		if (d === 0)                                                               // app.jsxi:298
			return s;                                                              // app.jsxi:298
		
		s = d + ' д' + d.postfix('ень', 'ня', 'ней') + ' ' + s;                    // app.jsxi:299
		return s;                                                                  // app.jsxi:301
	}
	
	this.__node.querySelector('#section_view_stats').innerHTML = '               \n' + ('<div class="div_sum_entry" data-value="' + o(stats.jobs) + '">Заказов выполнено:</div>' + ('<div class="div_sum_entry" data-value="' + o(stats.jobsHand) + ' (' + o(100 * stats.jobsHand / stats.jobs) + '%)">Из них с руки:</div>') + ('<div class="div_sum_entry" data-value="' + o(stats.distance) + ' км">Пройдено:</div>') + ('<div class="div_sum_entry" data-value="' + o(stats.fuel) + ' л">Топлива потрачено:</div>') + ('<div class="div_sum_entry" data-value="' + t(stats.time) + '">Общее время:</div>')) + '\n<h6>Финансы</h6>\n' + ('<div class="div_sum_entry div_sum_entry_money" data-value="' + o(stats.order) + '">На заказах:</div>' + ('<div class="div_sum_entry div_sum_entry_money" data-value="' + o(- stats.lost) + '">Не считая отданных сервисам:</div>') + ('<div class="div_sum_entry div_sum_entry_money" data-value="' + o(stats.hand) + '">С руки:</div>') + ('<div class="div_sum_entry div_sum_entry_money" data-value="' + o(stats.tip) + '">Чаевые:</div>') + ('<div class="div_sum_entry div_sum_entry_money" data-value="' + o(stats.income) + '">Итого доход:</div>') + ('<div class="div_sum_entry div_sum_entry_money" data-value="' + o(- stats.fuelPrice) + '">На топливо ушло:</div>') + ('<div class="div_sum_entry div_sum_entry_money" data-value="' + o(stats.result) + '">В результате:</div>')) + '\n<h6>Усреднённое</h6>\n' + ('<div class="div_sum_entry div_sum_entry_money" data-value="' + o(stats.tip / stats.jobsOrder) + '">Размер чаевых:</div>' + ('<div class="div_sum_entry" data-value="' + o(stats.distance / stats.time * 3600e3) + ' км/ч">Скорость:</div>') + ('<div class="div_sum_entry" data-value="' + o(stats.fuel / stats.distance * 100) + ' л/100 км">Расход топлива:</div>')) + '\n';
};
SectionView.prototype.__SectionView_updateCharts = function (){                    // app.jsxi:332
	var archive = Data.getArchive();
	
	if (!archive)                                                                  // app.jsxi:334
		return;
	
	$('.line-legend').remove();                                                    // app.jsxi:336
	Chart.defaults.global = {                                                      // app.jsxi:338
		showScale: true,                                                           // app.jsxi:338
		scaleOverride: false,                                                      // app.jsxi:340
		scaleSteps: null,                                                          // app.jsxi:341
		scaleStepWidth: null,                                                      // app.jsxi:343
		scaleStartValue: null,                                                     // app.jsxi:344
		scaleLineColor: 'rgba(0,0,0,.1)',                                          // app.jsxi:346
		scaleLineWidth: 1,                                                         // app.jsxi:347
		scaleShowLabels: true,                                                     // app.jsxi:348
		scaleLabel: '<%=value%>',                                                  // app.jsxi:350
		scaleIntegersOnly: true,                                                   // app.jsxi:351
		scaleBeginAtZero: false,                                                   // app.jsxi:352
		scaleFontFamily: 'Roboto, sans-serif',                                     // app.jsxi:354
		scaleFontSize: 12,                                                         // app.jsxi:355
		scaleFontStyle: 'normal',                                                  // app.jsxi:356
		scaleFontColor: '#666',                                                    // app.jsxi:357
		responsive: true,                                                          // app.jsxi:359
		maintainAspectRatio: true,                                                 // app.jsxi:360
		showTooltips: true,                                                        // app.jsxi:362
		customTooltips: false,                                                     // app.jsxi:363
		tooltipEvents: [ 'mousemove', 'touchstart', 'touchmove' ],                 // app.jsxi:364
		tooltipFillColor: 'rgba(0,0,0,0.8)',                                       // app.jsxi:365
		tooltipFontFamily: 'Roboto, sans-serif',                                   // app.jsxi:366
		tooltipFontSize: 14,                                                       // app.jsxi:367
		tooltipFontStyle: 'normal',                                                // app.jsxi:368
		tooltipFontColor: '#fff',                                                  // app.jsxi:369
		tooltipTitleFontFamily: 'Roboto, sans-serif',                              // app.jsxi:370
		tooltipTitleFontSize: 14,                                                  // app.jsxi:371
		tooltipTitleFontStyle: 'bold',                                             // app.jsxi:372
		tooltipTitleFontColor: '#fff',                                             // app.jsxi:373
		tooltipYPadding: 6,                                                        // app.jsxi:374
		tooltipXPadding: 6,                                                        // app.jsxi:375
		tooltipCaretSize: 8,                                                       // app.jsxi:376
		tooltipCornerRadius: 2,                                                    // app.jsxi:377
		tooltipXOffset: 10,                                                        // app.jsxi:378
		tooltipTemplate: '<%if (label){%><%=label%>: <%}%><%= value %>',           // app.jsxi:379
		multiTooltipTemplate: '<%= value %>'
	};
	
	var ctx = document.getElementById('section_view_chart_result').getContext("2d");
	
	var chart = new Chart(ctx).Line({                                              // app.jsxi:384
		labels: archive.map(function (arg){                                        // app.jsxi:384
			return d(arg.data.timestamp);                                          // app.jsxi:385
		}), 
		datasets: [                                                                // app.jsxi:386
			{                                                                      // app.jsxi:386
				label: 'Всего',                                                    // app.jsxi:386
				fillColor: "rgba(60,220,60,0.2)",                                  // app.jsxi:389
				strokeColor: "rgba(60,220,60,1)",                                  // app.jsxi:390
				pointColor: "rgba(60,220,60,1)",                                   // app.jsxi:391
				pointStrokeColor: "#fff",                                          // app.jsxi:392
				pointHighlightFill: "#fff",                                        // app.jsxi:393
				pointHighlightStroke: "rgba(220,220,220,1)",                       // app.jsxi:394
				data: archive.map(function (arg){                                  // app.jsxi:395
					return + arg.summary.result.toFixed(2);                        // app.jsxi:395
				})
			}, 
			{
				label: 'С руки',                                                   // app.jsxi:397
				fillColor: "rgba(220,220,60,0.2)",                                 // app.jsxi:398
				strokeColor: "rgba(220,220,60,1)",                                 // app.jsxi:399
				pointColor: "rgba(220,220,60,1)",                                  // app.jsxi:400
				pointStrokeColor: "#fff",                                          // app.jsxi:401
				pointHighlightFill: "#fff",                                        // app.jsxi:402
				pointHighlightStroke: "rgba(220,220,220,1)",                       // app.jsxi:403
				data: archive.map(function (arg){                                  // app.jsxi:404
					return + arg.summary.hand.toFixed(2);                          // app.jsxi:404
				})
			}, 
			{
				label: 'Чаевые',                                                   // app.jsxi:406
				fillColor: "rgba(220,220,220,0.2)",                                // app.jsxi:407
				strokeColor: "rgba(220,220,220,1)",                                // app.jsxi:408
				pointColor: "rgba(220,220,220,1)",                                 // app.jsxi:409
				pointStrokeColor: "#fff",                                          // app.jsxi:410
				pointHighlightFill: "#fff",                                        // app.jsxi:411
				pointHighlightStroke: "rgba(220,220,220,1)",                       // app.jsxi:412
				data: archive.map(function (arg){                                  // app.jsxi:413
					return + arg.summary.tip.toFixed(2);                           // app.jsxi:413
				})
			}, 
			{
				label: 'Топливо',                                                  // app.jsxi:415
				fillColor: "rgba(220,60,60,0.2)",                                  // app.jsxi:416
				strokeColor: "rgba(220,60,60,1)",                                  // app.jsxi:417
				pointColor: "rgba(220,60,60,1)",                                   // app.jsxi:418
				pointStrokeColor: "#fff",                                          // app.jsxi:419
				pointHighlightFill: "#fff",                                        // app.jsxi:420
				pointHighlightStroke: "rgba(220,220,220,1)",                       // app.jsxi:421
				data: archive.map(function (arg){                                  // app.jsxi:422
					return + arg.summary.fuelPrice.toFixed(2);                     // app.jsxi:422
				})
			}
		]
	}, 
	{
		scaleShowXLabels: false,                                                   // app.jsxi:426
		scaleBeginAtZero: true,                                                    // app.jsxi:427
		bezierCurveTension: 0.2
	});
	
	$(chart.generateLegend()).insertAfter(document.getElementById('section_view_chart_result'));
};
SectionView.prototype.__SectionView_shiftListClick = function (arg){               // app.jsxi:434
	var entry = $(arg.target).closest('.section_view_shift_entry');
	
	if (!entry[0])                                                                 // app.jsxi:436
		return;
	
	var shift = Data.getArchiveById(entry.data('id'));
	
	if (!shift)                                                                    // app.jsxi:439
		return;
	
	new Dialog('Смена',                                                            // app.jsxi:441
		[
			'<div class="div_sum_entry" data-value="' + d(shift.data.timestamp) + '">Начало:</div>', 
			'<div class="div_sum_entry" data-value="' + d(shift.data.finished) + '">Завершение:</div>', 
			'<div class="div_sum_entry" data-value="' + t(shift.data.finished - shift.data.timestamp) + '">Длительность:</div>', 
			'<div class="div_sum_entry" data-value="' + o(shift.data.jobs.length) + '">Выполнено заказов:</div>', 
			'<hr>',                                                                // app.jsxi:447
			'<div class="div_sum_entry div_sum_entry_money" data-value="' + o(shift.summary.order) + '">Заказы:</div>', 
			'<div class="div_sum_entry div_sum_entry_money" data-value="' + o(shift.summary.tip) + '">Чаевые:</div>', 
			'<div class="div_sum_entry div_sum_entry_money" data-value="' + o(shift.summary.hand) + '">С руки:</div>', 
			'<div class="div_sum_entry div_sum_entry_money" data-value="' + o(- shift.summary.fuelPrice) + '">Топливо:</div>', 
			'<hr>',                                                                // app.jsxi:453
			'<div class="div_sum_entry div_sum_entry_money" data-value="' + o(shift.summary.result) + '">Итого:</div>'
		]);
};
SectionView.prototype.show = function (){                                          // app.jsxi:458
	SectionAbstract.prototype.show.call(this);                                     // app.jsxi:1
	Data.loadArchive();                                                            // app.jsxi:460
};

/* Class "App" declaration */
var App = (function (){                                                            // app.jsxi:464
	var App = function (){}, 
		sEdit, sView;
	
	App.NAME = 'Такси-Помощник';                                                   // app.jsxi:465
	App.VERSION = "0.2.39";                                                        // app.jsxi:466
	
	function navigate(page){                                                       // app.jsxi:470
		switch (page){                                                             // app.jsxi:471
			case 'edit':                                                           // app.jsxi:472
				sEdit.show();                                                      // app.jsxi:473
				sView.hide();                                                      // app.jsxi:474
				
				break;
			case 'view':                                                           // app.jsxi:477
				sEdit.hide();                                                      // app.jsxi:478
				sView.show();                                                      // app.jsxi:479
				
				break;
		}
	}
	
	(function (){                                                                  // app.jsxi:484
		sEdit = new SectionEdit();                                                 // app.jsxi:485
		sView = new SectionView();                                                 // app.jsxi:486
		Navigation.on('navigate', navigate);                                       // app.jsxi:488
		$(function (arg){                                                          // app.jsxi:490
			document.body.style.display = null;                                    // app.jsxi:491
			setTimeout(function (arg){                                             // app.jsxi:493
				scrollTo(0, 1);                                                    // app.jsxi:494
			}, 
			50);
		});
	})();
	return App;
})();

/* Class "Menu" declaration */
function Menu(){                                                                   // app.jsxi:500
	var __that = this;
	
	this.__Menu_node = document.getElementById('ui_menu');                         // app.jsxi:504
	this.__Menu_$node = $(this.__Menu_node);                                       // app.jsxi:505
	this.__Menu_$node.on('click',                                                  // app.jsxi:507
		function (arg){                                                            // app.jsxi:507
			if (arg.target.id === 'ui_menu'){                                      // app.jsxi:508
				__that.hide();
			}
		});
	this.__Menu_$node.find('button').on('click',                                   // app.jsxi:513
		function (arg){                                                            // app.jsxi:513
			switch (arg.target.id){                                                // app.jsxi:514
				case 'ui_menu_item_about':                                         // app.jsxi:515
					__that.__Menu_clickAbout();
					
					break;
			}
			
			__that.hide();
		});
}
Menu.prototype.__Menu_clickAbout = function (){                                    // app.jsxi:524
	new Dialog(App.NAME,                                                           // app.jsxi:525
		[
			'<div class="div_sum_entry" data-value="' + App.VERSION + '">Версия:</div>'
		]);
};
Menu.prototype.show = function (){                                                 // app.jsxi:530
	if (this.__Menu_showed)
		return;
	
	this.__Menu_$node.addClass('ui_menu_active');                                  // app.jsxi:532
	this.__Menu_showed = true;
	Navigation.sub();                                                              // app.jsxi:535
	Navigation.on('subback',                                                       // app.jsxi:536
		__bindOnce(this, 
			'hide'));
};
Menu.prototype.hide = function (){                                                 // app.jsxi:539
	if (!this.__Menu_showed)
		return;
	
	this.__Menu_$node.removeClass('ui_menu_active');                               // app.jsxi:541
	this.__Menu_showed = false;
	Navigation.off('subback',                                                      // app.jsxi:544
		__bindOnce(this, 
			'hide'));
};
Menu.prototype.toggle = function (){                                               // app.jsxi:547
	if (this.__Menu_showed)
		this.hide();
	else
		this.show();
};

/* Class "Tabs" declaration */
var Tabs = (function (){                                                           // app.jsxi:552
	var Tabs = function (){}, 
		$node, menu;
	
	function update(page){                                                         // app.jsxi:555
		$node.find('.ui_tabbar_tab_active').removeClass('ui_tabbar_tab_active');   // app.jsxi:556
		$node.find('[data-href="#' + page + '"]').addClass('ui_tabbar_tab_active');
	}
	
	(function (){                                                                  // app.jsxi:560
		$node = $(document.getElementById('ui_tabbar'));                           // app.jsxi:561
		$node.find('a').on('click',                                                // app.jsxi:562
			function (arg){                                                        // app.jsxi:562
				location.replace(this.getAttribute('data-href'));                  // app.jsxi:563
				return false;
			});
		menu = new Menu();                                                         // app.jsxi:567
		$node.find('#ui_tabbar_btn_menu').on('click',                              // app.jsxi:568
			function (arg){                                                        // app.jsxi:568
				menu.toggle();                                                     // app.jsxi:569
			});
		Navigation.on('navigate', update);                                         // app.jsxi:572
	})();
	return Tabs;
})();

/* Class "Adaptive" declaration */
var Adaptive = (function (){                                                       // adaptive.jsxi:7
	var Adaptive = function (){};
	
	function canv(c){                                                              // adaptive.jsxi:8
		c.style.width = (c.width = window.innerWidth - 40) + 'px';                 // adaptive.jsxi:9
		c.style.height = (c.height = 240) + 'px';                                  // adaptive.jsxi:10
	}
	
	function update(){                                                             // adaptive.jsxi:13
		document.getElementById('section_edit_jobs_list').style.height = window.innerHeight - 640 + 385 + 'px';
		document.getElementById('section_view_shifts_list').style.height = window.innerHeight - 640 + 515 + 'px';
		canv(document.getElementById('section_view_chart_result'));                // adaptive.jsxi:17
	}
	
	(function (){                                                                  // adaptive.jsxi:20
		window.onresize = update;                                                  // adaptive.jsxi:21
		$(update);                                                                 // adaptive.jsxi:22
	})();
	return Adaptive;
})();

