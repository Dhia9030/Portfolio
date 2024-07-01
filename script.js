var typed1 = new Typed(".auto-type1", {
    strings: ["Welcome to My Portfolio"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: false,
    showCursor: false
  });

var typed2 = new Typed(".auto-type2", {
    strings: ["Web Developer", " Competitive Programmer", "ML Enthusiast"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
  });







  const p1 = [
    './assets/p1-1.png',
    './assets/p1-2.png',
    './assets/p1-3.png',
];

const firstImage = document.querySelector('.project1-img');

function shuffle(tab){
    let counter = 0;
    setInterval(()=>{
        firstImage.classList.add('fade')
        setTimeout(()=>{
            firstImage.src = tab[counter%tab.length]
            counter++;
            firstImage.classList.remove('fade')
        },500)
        
    },3000)

}
shuffle(p1);


document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.project');
    hiddenElements.forEach(el => observer.observe(el));
});