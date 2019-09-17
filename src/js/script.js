// Collapse Navbar
var navbarCollapse = function() {
	if ($("#navbarUtama").offset().top > 300) {
	  $("#navbarUtama").addClass("navbar-shrink");
	} else {
	  $("#navbarUtama").removeClass("navbar-shrink");
	}
};
// Collapse now if page is not at top
navbarCollapse();
// Collapse the navbar when page is scrolled
$(window).scroll(navbarCollapse);

// Activate scrollspy to add active class to navbar items on scroll
$('body').scrollspy({
target: '#navbarUtama',
offset: 70
});

$('.scroll').on('click', function(e) {
	let href = $(this).attr('href');
	let elemenHref = $(href);
	console.log(elemenHref);
	console.log($('body').scrollTop('600'));
	$('html, body').animate({
		scrollTop: elemenHref.offset().top - 55
	});

	e.preventDefault();
});

//about
$(window).on('load', function() {
	let pKiri = document.querySelector('.pKiri');
	let pKanan = document.querySelector('.pKanan');

	let teks = pKiri.textContent;
	let i = 0;
	$('p').each(function(indexKe) {
		console.log(teks[i]);
		i++;
	});
	$('.pKiri').addClass('pMuncul');
});

$(window).scroll(function() {
	let posisi = $(this).scrollTop();

	//jumbotron
	$('.jumbotron img').css({
		'transform' : 'translate(0,'+posisi/4+'%)'
	});

	$('.jumbotron h1, .jumbotron p').css({
		'transform' : 'translate(0,'+posisi/2+'%)',
		'transition' : '.1s'
	});

	//portfolio
	if (posisi > $('.portfolio').offset().top - 300) {
		$('.portfolio .img-thumbnail').each(function(indexKe) {
			setTimeout(function() {
				$('.portfolio .img-thumbnail').eq(indexKe).addClass('muncul');
			}, 300 * (indexKe+1));
		});
	}
});