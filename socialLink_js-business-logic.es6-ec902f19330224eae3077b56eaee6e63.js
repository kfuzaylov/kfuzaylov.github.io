Moff.modules.create('SocialLink', function () {
	function f() {
		d.$find('' + a.instagram + a.openInLightbox).length && Moff.leftovers.push('//www.instagram.com/embed.js');
		d.$find('' + a.twitter + a.openInLightbox).length && Moff.leftovers.push('//platform.twitter.com/widgets.js')
	}

	function g() {
		$(d.scope).on('click', '' + a.facebook + a.openInLightbox, function (b) {
			var k = encodeURIComponent($(b.currentTarget).attr('href'));
			c.openInlinePopup({
				maxWidth: 500, callbacks: {
					afterOpen: function () {
						var b =
								window.getComputedStyle(this.contentContainer[0]), a = parseInt(b.paddingTop, 10),
							d = parseInt(b.paddingBottom, 10), c = parseInt(b.paddingLeft, 10),
							e = parseInt(b.paddingRight, 10), f = parseInt(b.marginTop, 10),
							g = parseInt(b.marginBottom, 10), h = parseInt(b.marginLeft, 10);
						b = parseInt(b.marginRight, 10);
						c = Math.min(window.innerWidth, 500) - c - e - h - b;
						a = window.innerHeight - a - d - f - g;
						this.content.html('<iframe \n\t\t\t\t\t\t\tsrc="https://www.facebook.com/plugins/page.php?' + ['href=' + k, 'tabs=timeline', 'width=' + c, 'height=' + a, 'small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false'].join('&') +
							'"\n\t\t\t\t\t\t\twidth="' + c + '"\n\t\t\t\t\t\t\theight="' + a + '"\n\t\t\t\t\t\t\tstyle="border: none; overflow: hidden; display: block;"\n\t\t\t\t\t\t\tscrolling="no"\n\t\t\t\t\t\t\tframeborder="0"\n\t\t\t\t\t\t\tallowTransparency="true"\n\t\t\t\t\t\t\tallow="encrypted-media\n\t\t\t\t\t\t\tstyle=""></iframe>')
					}
				}
			});
			b.preventDefault()
		})
	}

	function h() {
		$(d.scope).on('click', '' + a.youtube + a.openInLightbox, function (b) {
			var a = $(b.currentTarget).attr('href').match(l);
			a && (a = a[2], c.openInlinePopup({
				maxWidth: 800, content: function () {
					return '<div class="aspect-ratio-block __xs-16x9">\n\t\t\t\t\t\t<iframe src="//youtube.com/embed/' +
						a + '"\n\t\t\t\t\t\t\t\tstyle="position: absolute; height: 100%; width: 100%;"\n\t\t\t\t\t\t\t\tframeborder="0"\n\t\t\t\t\t\t\t\tallowfullscreen\n\t\t\t\t\t\t\t\tallowtransparency></iframe>\n\t\t\t\t\t</div>'
				}
			}), b.preventDefault())
		})
	}

	function m() {
		$(d.scope).on('click', '' + a.instagram + a.openInLightbox, function (b) {
			var a = $(b.currentTarget).attr('href');
			c.openInlinePopup({
				maxWidth: 500, waiting: function (b) {
					var c = this;
					n(a, function (a) {
						c.content.html(a.replace(/min-width:.+?;/i, ''));
						b();
						setTimeout(function () {
							window.instgrm.Embeds.process();
							c.content.find('.instagram-media').css('min-width', '')
						}, 0)
					})
				}
			});
			b.preventDefault()
		})
	}

	function p() {
		$(d.scope).on('click', '' + a.twitter + a.openInLightbox, function (b) {
			var a = $(b.currentTarget).attr('href');
			c.openInlinePopup({
				maxWidth: 500, content: function () {
					return '<a class="twitter-timeline" href="' + a + '"></a>'
				}, callbacks: {
					afterOpen: function () {
						window.twttr.widgets.load()
					}
				}
			});
			b.preventDefault()
		})
	}

	function n(b, a) {
		e[b] ? a(e[b]) : $.get('https://api.instagram.com/oembed/?url=' + b + '&omitscript=true', function (c) {
			e[b] =
				c.html;
			a(c.html)
		})
	}

	var d = this, a = {
		openInLightbox: '.js-social-link-open-in-lightbox',
		facebook: '.js-social-link-facebook',
		instagram: '.js-social-link-instagram',
		twitter: '.js-social-link-twitter',
		youtube: '.js-social-link-youtube'
	}, l = /(\.be\/|v=|embed\/)([^&?]+)/i, e = {}, c = void 0;
	this.init = function () {
		c = Moff.modules.get('Popup');
		f();
		g();
		h();
		Moff.event.on('afterLeftovers', function () {
			m();
			p()
		})
	}
});
Moff.modules.initClass('SocialLink', {scopeSelector: 'body'});
