let birds = document.querySelectorAll(".birds"),
    clouds = document.querySelectorAll(".cloud"),
    sun = document.querySelector(".s")

window.addEventListener("scroll", () => {
    let windowY = window.scrollY
    let windowX = window.scrollX
    for (let i = 0; i < birds.length; i++) {
        let bird = birds[i];
        let speed = bird.getAttribute('speed');
        bird.style.transform = `translateX(${windowY * speed}px)`;
    }
    for (let i = 0; i < clouds.length; i++) {
        const cloud = clouds[i];
        let speed = cloud.getAttribute('speed')
        cloud.style.transform = `translateX(${windowY * speed}px)`
    }
    sun.style.transform = `rotate(${windowY * 0.2}deg)`;
})