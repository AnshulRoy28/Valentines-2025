function createCake() {
    const cake = document.createElement("div");
    cake.innerHTML = "🎂";
    cake.classList.add("cake-emoji");
    document.getElementById("cake-container").appendChild(cake);

    // Random position
    cake.style.left = Math.random() * 100 + "vw";
    cake.style.animationDuration = Math.random() * 3 + 2 + "s"; // Speed variation

    setTimeout(() => {
        cake.remove();
    }, 5000); // Remove after falling
}

// Generate cakes at intervals
setInterval(createCake, 300);

// CSS for falling cakes
const style = document.createElement("style");
style.innerHTML = `
    .cake-emoji {
        position: absolute;
        top: -50px;
        font-size: 30px;
        animation: fall linear infinite;
    }
    @keyframes fall {
        to {
            transform: translateY(100vh);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

