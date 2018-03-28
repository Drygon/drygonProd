$('body').scrollspy({ target: '#navside'});
$('ul.nav li a').bind('click',
function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop:$(this.hash).offset().top
    });
});