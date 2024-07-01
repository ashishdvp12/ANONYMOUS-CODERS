
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('nav h4');
    const slidingLine = document.getElementById('sliding-line');

    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const width = this.offsetWidth;
            const left = this.offsetLeft;
            slidingLine.style.width = `${width}px`;
            slidingLine.style.left = `${left}px`;
            slidingLine.style.transition = 'all 0.3s';
        });

        item.addEventListener('mouseleave', function() {
            slidingLine.style.width = 0;
            slidingLine.style.left = `${this.offsetLeft}px`;
            slidingLine.style.transition = 'all 0.3s';
        });
    });

    // Optional: Reset line on mouse leave from nav area
    document.querySelector('nav').addEventListener('mouseleave', function() {
        slidingLine.style.width = 0;
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const changeableImage = document.getElementById('changeable-image');
    const images = [
    
        "https://images.unsplash.com/photo-1543253687-c931c8e01820?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvY2ElMjBjb2xhJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
        "https://media.gettyimages.com/id/458606359/photo/soda-cans-on-an-isolated-white-background.jpg?s=612x612&w=0&k=20&c=zyi5AMymaOvBwNkpVOjIstFcu8IktSvVsxc-O5hlX1Y="
        // Add more image URLs here


    ];
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        changeableImage.src = images[currentIndex];
    }, 3000); // Change image every 3000 milliseconds (3 seconds)
});
document.addEventListener('DOMContentLoaded', function() {
    const div2 = document.querySelector('.div2');
    const pTag = div2.querySelector('p');
    let textIndex = 0;
    let gradientIndex = 0;

    const texts = ["We use only the unique, refreshing fizz of  to quench your thirst for any occasion", "Indulge in timeless taste with Coca cola- a perfect blend of flavors enjoyed for generations", "eat the heat with Campa - the sweet, tangy, refreshing fusion that keeps you cool."];
    const gradients = [
        "linear-gradient(to right, #39e5c6, #35deed, )",
        "linear-gradient(to right, #00BEB2, #44d7d9)",
        "linear-gradient(to right,#6fdc34, #8DC26F)"
    ];

    setInterval(() => {
        // Change text
        pTag.textContent = texts[textIndex];
        textIndex = (textIndex + 1) % texts.length;

        // Change gradient
        div2.style.background = gradients[gradientIndex];
        gradientIndex = (gradientIndex + 1) % gradients.length;
    }, 2000); // Change every 3000 milliseconds (3 seconds)
});
gsap.from(".div2 p", { duration: 3,
     y: -100,
      opacity: 0, 
      repaet:1,
     ease: "bounce.out" ,
     repeat:-1,});
     gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function() {
    gsap.utils.toArray('.img2').forEach(img => {
        gsap.from(img, {
            scrollTrigger: {
                trigger: img,
                start: "top bottom", // Start the animation when the top of the img2 hits the bottom of the viewport
                end: "bottom top", // End the animation when the bottom of the img2 hits the top of the viewport
                toggleActions: "play none none reverse", // Play the animation on scroll down and reverse on scroll up
                markers: true, // Optional: Shows markers for debugging purposes
            },
            y: 50, // Start position (moving up 50px)
            opacity: 0, // Start with an opacity of 0
            duration: 1, // Duration of the animation
            ease: "power1.out", // Type of easing
        });
    });
});
// Ensure the DOM is fully loaded before running animations
document.addEventListener('DOMContentLoaded', function() {
    // GSAP stagger animation on h3 elements within .tagline
    gsap.from(".tagline h3", {
        duration: 3, // Duration of each animation
        opacity: 0, // Start from transparent
        y: 20, // Start 20 pixels down from their final position
        stagger: 0.5, // Delay of 0.2 seconds between each h3 animation
       repeat: -1, // Repeat the animation forever
        ease: "power1.out", // Easing function for the animation
    });
});

