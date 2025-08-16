var stars = [];
var lgstars = [];

function createStars(numStars, className, blinkStars) {
    let starArray = [];

    for (let i = 0; i < numStars; i++) {
        let star = document.createElement("div"); 
        star.classList.add(className);

        star.style.left = Math.random() * window.innerWidth + "px";
        star.style.top = Math.random() * window.innerHeight + "px";

        document.body.append(star);
        starArray.push(star);
    }

    // Blink stars
    setInterval(() => {
        starArray.forEach(star => {
            star.style.opacity = Math.random();
            // star.style.display = Math.random() > 0.5 ? "block" : "none";
        });
    }, blinkStars);

    return starArray;
}

stars = createStars(1000, "shape-a", 1000);
lgstars = createStars(20, "shape-b", 1500);