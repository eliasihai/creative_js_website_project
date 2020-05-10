const hikeExp = document.querySelector('.hike-exp');
const slide = document.querySelector('.slide')

// window.addEventListener('scroll', scrollReveal);

// function scrollReveal(){
//     const hikePos = hikeExp.getBoundingClientRect().top;
//     const windowHeight = window.innerHeight /1.5;
//     console.log(`hikePos ${hikePos}`)
//     console.log(`windowHeight ${windowHeight}`)
//     if (hikePos < windowHeight){
//         hikeExp.style.color = "red"
//     }else{
//         hikeExp.style.color = "white"
//     }
// }

let options = {
    threshhold = 0.5
}

let observer = new IntersectionObserver(slideAnimation,options);

function slideAnimation(entries){
entries.forEach(entry => {
    console.log(entry)
});
}
observer.observe(slide);


