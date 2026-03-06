// Typed.js Initialization
document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector(".auto-type")) {
        new Typed(".auto-type", {
            strings: ["Cyber-Security Analyst", "Full-Stack Developer", "Network Engineer"],
            typeSpeed: 60,
            backSpeed: 70,
            loop: true
        });
    }
});

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu on clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

// Intersection Observer for Scroll Animations
const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        } else {
            entry.target.classList.remove("active");
        }
    });
}, revealOptions);

document.querySelectorAll('.reveal').forEach(element => {
    revealOnScroll.observe(element);
});

// Intersection Observer for Animating Progress Bars
const skillSection = document.getElementById('skills');

if (skillSection) {
    const animatedProgressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.progress').forEach(bar => {
                    bar.style.width = bar.dataset.width;
                });
            } else {
                entry.target.querySelectorAll('.progress').forEach(bar => {
                    bar.style.width = '0';
                });
            }
        });
    }, { threshold: 0.3 });

    animatedProgressObserver.observe(skillSection);
}

// QR Modal Logic
function openQRModal(imageSrc) {
    const modal = document.getElementById('qr-modal');
    const qrImage = document.getElementById('qr-image');
    if (modal && qrImage) {
        qrImage.src = imageSrc;
        modal.classList.add('show');
    }
}

function closeQRModal() {
    const modal = document.getElementById('qr-modal');
    if (modal) {
        modal.classList.remove('show');
    }
}
