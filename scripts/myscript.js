/* SKILLBAR jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
}); */

/* Navigatie */
(function($) {

  $( "#openNav" ).click(function() {
 	$("#myNav").toggleClass("open-nav");
  });

  $( ".toggledropdown" ).click(function() {
 	$(".submenu").toggleClass("open-submenu");
  });

  $( ".overlay-nav" ).click(function() {
 	$("#myNav").toggleClass("open-nav");
 	$(".menu-icon").toggleClass("icon-active");
  });


  $("#openNav").click(function(){
		$(".menu-icon").toggleClass("icon-active");
  });

})( jQuery );
/* End Navigatie */

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/* back to top button */
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});
/* End back to top button */

/* toon meer/minder button */
/* .on() used in case there is ajax loaded content. */
$("body").on("click", "#show_more", function() {
  $("#box").toggle(); /*shows or hides #box*/

  /*$(this) refers to the targeted element: #toggleMessage*/
  var text = $(this).text();

  if (text=="TOON MINDER") { /*if text inside #toggleMessage is Show...*/
    $(this).text("TOON MEER"); /*Change button text to Hide*/
  }
  else {
    $(this).text("TOON MINDER"); /*Change button text to Show*/
  }
});
/* End toon meer/minder button */

/* to "over mij" button */
$(document).ready(function(){
   $(".scroll-down").click(function(e){
      $('html, body').animate({
       scrollTop: $($(this).attr('href')).offset().top
      }, 1000);
   });
});
/* End to "over mij" button */

/* image carrousel */
 var myIndex = 0;
 carousel();

 function carousel() {
   var i;
   var x = document.getElementsByClassName("mySlides");
   for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
   }
   myIndex++;
   if (myIndex > x.length) {myIndex = 1}
   x[myIndex-1].style.display = "block";
   setTimeout(carousel, 3000); // Change image every 3 seconds
 }
 /* End image carrousel */
