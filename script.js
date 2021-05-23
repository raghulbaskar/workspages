'use strict'

// Reveal sections
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.4,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});


//ball animation
// const ball= document.querySelector('.ballanim');

// const ballController = function (entries, observer) {
  
//   entries.forEach(entry=>{
//   console.log(entry);
//   if (!entry.isIntersecting) return;

//   if (entry.intersectionRatio > 0.4) {
//     // this is from right to Left animation
//     realballanim.style=transform: translateX(2px);

//   }
//   else{
//     // this is from Left to Right animation
//     entry.target.classList.toggle('ballanimLR');
    
//   }
// });
  
 
// };


// const ballObserver = new IntersectionObserver(ballController, {
//   root: null,
//   threshold: [0.1,0.2,0.4,0.6,0.8],
// });

// ballObserver.observe(ball);


// ######### baLL animation by scroLL


// var lastScrollTop = 0;

// // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
// ball.addEventListener("scroll", function(e){ // or window.addEventListener("scroll"....
//    var st = window.pageYOffset || document.documentElement.scrollTop;
//      console.log("scroLL event is on");                                        // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
//    if (st > lastScrollTop){
//       // downscroll code
//       // this is from right to Left animation
//     e.target.classList.toggle('ballanimRL');
//     console.log("scroLL event is down"); 
//    } else {
//       // upscroll code
//       // this is from Left to Right animation
//        e.target.classList.toggle('ballanimLR');
//        console.log("scroLL event is up"); 
//    }
//    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
// }, false);