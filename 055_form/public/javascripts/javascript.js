document.addEventListener("DOMContentLoaded", function(){

// recent work buttom
	var recentButton = document.querySelectorAll('.menu .nav-item');

	for (var i = 0; i < recentButton.length; i++) {
		recentButton[i].addEventListener('click', function(){
			// console.log('recentButton');
			for (var i = 0; i < recentButton.length; i++) {
				recentButton[i].classList.remove('active');
			}
			this.classList.add('active');
		});
	}

 
    $('.carousel').slick({
        autoplay: false,
        autoplaySpeed: 4000,
        speed: 300,
        prevArrow:'<i class="fas fa-angle-left"></i>',
        nextArrow:'<i class="fas fa-angle-right"></i>',
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
    });
    

		
});