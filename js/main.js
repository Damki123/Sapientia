new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
    css3: true,
    sectionsColor : ['#d2d2', '#000','#d2d2', '#000'],
    verticalyCentered: true,
    fixedElements: '#header, .footer',
    anchors:['firstPage', 'secondPage', 'thirdPage','fourthPage']
});



//anime.js animations

//var hamburger = document.querySelector('.hamburger');
//var hamLine = document.querySelectorAll('.hamburger hr');
//
//hamburger.addEventListener('mouseover', function(){
//    anime({
//        targets: hamLine,
//        scaleX: 1.2,
//        direction: 'alternate',
//        delay: anime.stagger(70, {easing: 'linear'})
//    })
//})