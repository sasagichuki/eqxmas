$(document).ready(function(){
 	function setHeight() {
	    windowHeight = $(window).height();
	    $('#slide-1, #slide-2').css('height', windowHeight);
	  };
	  setHeight();
	  
	  $(window).resize(function() {
	    setHeight();
	  });
	 
	 $(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html,body').animate({
			  scrollTop: target.offset().top
			}, 1000);
			return false;
		  }
		}
	  });
	});
	
 	
});//end doc.ready

 