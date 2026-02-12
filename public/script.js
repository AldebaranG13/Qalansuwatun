// Navigation Bar / Navbar Template Injector
const navbarTemplate = `
  <nav class="navbar">
    <div class="navbar-container">
      <img src="images/qalansuwatun_logo.png" href="index.html" class="navbar-logo">
      <ul class="navbar-menu">
        <li><a href="index.html"><span class="material-symbols-outlined">home</span> Home</a></li>
        <li><a href="#"><span class="material-symbols-outlined">code</span> Code</a></li>
        <li><a href="#"><span class="material-symbols-outlined">video_library</span> Resources</a></li>
        <li><a href="#"><span class="material-symbols-outlined">login</span> Login</a></li>
      </ul>
    </div>
  </nav>
`;

const navPlaceholders = document.querySelectorAll('.nav-placeholder');
navPlaceholders.forEach(placeholder => {
  placeholder.innerHTML = navbarTemplate;
});

// Dynamic Background Rotation on Scroll
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const angle = scrollPosition * 0.1; // Rotation speed when scrolling
  document.documentElement.style.setProperty('--scroll-angle', `${angle}deg`);
});

window.addEventListener('scroll', () => {
    const section = document.querySelector('.slidein-intro');
    const h1 = document.querySelector('.main-title');
    const h2 = document.querySelector('.sub-title');
    const h3 = document.querySelector('.footer-note');

    if (!section) return;

    const rect = section.getBoundingClientRect();
    
    // PROGRESS CALCULATION:
    // This tells how much of the section has scrolled past the top
    // 0 = section top is at window top, 1 = section bottom is at window top
    let progress = -rect.top / (section.offsetHeight - window.innerHeight);
    
    // Clamp progress between 0 and 1
    progress = Math.max(0, Math.min(1, progress));

    // MOVEMENT: Text starts far away (1500px) and hits 0 when progress is 1
    const h1Offset = -500 * (1 - progress);
    const h2Offset = 500 * (1 - progress);
    const h3Offset = -400 * (1 - progress);

    if (h1) {
        h1.style.transform = `translateX(${h1Offset}px)`;
        h1.style.opacity = progress;
    }
    if (h2) {
        h2.style.transform = `translateX(${h2Offset}px)`;
        h2.style.opacity = progress;
    }
    if (h3) {
        h3.style.transform = `translateX(${h3Offset}px)`;
        h3.style.opacity = progress;
    }
});

// Hero Random Image and Text Injection
const heroElements = [
  {image: 'https://static.wixstatic.com/media/900868_9b713e80f389424d99252b13a35b2679~mv2.png',
    text: `Collaborative Robotics Project: 'Arduino Train System' Developed by Fitrah Islamic World Academy, AldebaranG13's school. Uses C++ and ultrasonic sensors.`
  },
  {image: 'images/coding_motion_blur_622026.png',
    text: `Process of developing the Qalansuwatun website using Github Codespaces on AldebaranG13's Chromebook.`
  }
]
const randomProject = heroElements[Math.floor(Math.random() * heroElements.length)];
document.getElementById('hero-img').src = randomProject.image;
document.getElementById('hero-img-text').textContent = randomProject.text;