const bubbles = document.querySelector(".bubbles");

for (let i = 0; i < 28; i++) {
  const bubble = document.createElement("span");
  const size = Math.random() * 26 + 8;

  bubble.className = "bubble";
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${Math.random() * 100}%`;
  bubble.style.animationDuration = `${Math.random() * 12 + 10}s`;
  bubble.style.animationDelay = `${Math.random() * 10}s`;
  bubble.style.setProperty("--drift", `${Math.random() * 120 - 60}px`);
  bubble.style.setProperty("--sway-1", `${Math.random() * 34 - 17}px`);
  bubble.style.setProperty("--sway-2", `${Math.random() * 44 - 22}px`);
  bubble.style.setProperty("--sway-3", `${Math.random() * 34 - 17}px`);

  bubbles.appendChild(bubble);
}
