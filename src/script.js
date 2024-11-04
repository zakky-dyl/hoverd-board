const container = document.getElementById("container");
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement("div");
    square.classList.add(
        "bg-[#1d1d1d]",
        "shadow-[0_0_2px_#000]",
        "h-4",
        "w-4",
        "m-0.5",
        "transition",
        "duration-2000",
        "ease-linear",
        "hover:duration-0"
    );

    square.addEventListener("mouseover", () => setColor(square));

    square.addEventListener("mouseout", () => removeCalor(square));

    container.appendChild(square);
}

    function setColor(element) {
        const color = getRandomcolor();
        element.style.background = color;
        element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color} `;
    }

    function removeCalor(element) {
        element.style.background = "#1d1d1d";
        element.style.boxShadow = "0 0 2px #000";
    }

    function getRandomcolor() {
        return colors[Math.floor(Math.random() * colors.length)];
    }