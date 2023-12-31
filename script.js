gsap.from("h4", {
    y: -800,
    stagger: 0.1,
    duration: 1,
    delay: 0.5,
})
gsap.from(".content .left h1, .content .left p  ", {
    y: -800,
    delay: 0.7,
    duration: 1.2,

})
gsap.from(".content .left button  ", {
    y: -800,
    delay: 0.3,
    duration: 0.9,
    stagger: 0.7,
    transform: "scale(-0.5,1)",


})
gsap.from(".nav button  ", {
    backgoundColor: "orange",
    duration: 1,
    delay: 0.1,
    transform: "scale(-0.5,1)"



})

let posX = 0,
    posY = 0;

let mouseX = 0,
    mouseY = 0;

gsap.to(".cursor-example", {
    duration: 0.0085,
    repeat: -1,
    onRepeat: function () {
        posX += (mouseX - posX) / 8;
        posY += (mouseY - posY) / 8;

        gsap.set(".cursor-example", {
            css: {
                left: posX - 1,
                top: posY - 2
            }
        });
    }
});

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

