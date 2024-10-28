const slides = [
    {
        image: 'url(./images/S1.jpg)',  // Relative path to local image
        text: 'Transform your workspace with Furni—where innovative design meets smart technology for a healthier, more productive you.'
    },
    {
        image: 'url(./images/S2.jpg)',
        text: ' Experience the future of work with Furni—intelligent furniture that adapts to your needs.'
    },
    {
        image: 'url(./images/S3.jpg)',
        text: 'Work smarter, not harder—discover how Furni can transform your workspace into a hub of creativity and well-being.'
    },
    {
        image: 'url(./images/S4.jpg)',
        text: "Furni is not just about furniture; it's about creating smarter, healthier work environments that adapt to the needs of today's workforce."
    },
    {
        image: 'url(./images/S5.jpg)',
        text: 'We aim to inspire creativity while emphasizing the importance of comfort and health in the workplace.'
    }
];
// Array of background images and corresponding texts


// Initial state
let currentSlide = 0;
const sliderContainer = document.querySelector('.slider-container');
const sliderText = document.getElementById('slider-text');
const sliderButtons = document.querySelectorAll('.slider-button');

// Function to change the slide
function changeSlide(slideIndex) {
    currentSlide = slideIndex - 1;
    updateSlide();
}

// Function to update the background image, text, and active button
function updateSlide() {
    // Update background image and text
    sliderContainer.style.backgroundImage = slides[currentSlide].image;
    sliderText.innerText = slides[currentSlide].text;

    // Update active button styling
    sliderButtons.forEach((button, index) => {
        if (index === currentSlide) {
            button.classList.add('active');
            
        } else {
            button.classList.remove('active');
        }
    });
}

// Function for auto-slide every 10 seconds
function autoSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
}

// Start the auto-slide function
setInterval(autoSlide, 7000);

// Set the initial slide on page load
updateSlide();
// Accordion functionality
function toggleAccordion(index) {
    const content = document.getElementById(`content${index}`);
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
}

// Array of image paths for the slider
const images = [
    './images/P1.jpg',
    './images/P2.jpg',
    './images/P3.jpg',
    './images/P4.jpg',
    './images/P5.jpg'
];
// Array of image paths for the slider


let currentImage = 0;
const sliderImage = document.getElementById('slider-image');

// Function to change the image based on button click
function changeImage(index) {
    currentImage = index - 1; // Update current image index
    updateSliderImage();
    updateActiveButton(); // Update the active button
}

// Function to update the image in the slider
function updateSliderImage() {
    sliderImage.src = images[currentImage];
}

// Function to update the active button
function updateActiveButton() {
    const buttons = document.querySelectorAll('.slider-button');
    buttons.forEach((button, index) => {
        button.classList.toggle('active', index === currentImage);
    });
}

// Automatic image slide every 10 seconds
setInterval(function() {
    currentImage = (currentImage + 1) % images.length;
    updateSliderImage();
    updateActiveButton(); // Update the active button
}, 7000);

// Initialize the active button on page load
document.addEventListener("DOMContentLoaded", () => {
    updateActiveButton(); // Set initial active button

    // Open the first accordion by default
    const firstContent = document.getElementById('content1');
    const firstArrow = document.getElementById('arrow1');
    if (firstContent && firstArrow) {
        firstContent.classList.add('show');
        firstArrow.classList.add('rotate');
    }
});

// Accordion functionality with arrow rotation
function toggleAccordion(index) {
    const content = document.getElementById(`content${index}`);
    const arrow = document.getElementById(`arrow${index}`);

    // Toggle display of the content and add 'show' class for animation
    if (content.classList.contains('show')) {
        content.classList.remove('show');
        arrow.classList.remove('rotate'); // Remove rotation if closed
    } else {
        content.classList.add('show');
        arrow.classList.add('rotate'); // Add rotation if opened
    }
}
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.menu-toggle') && !e.target.closest('.nav-links')) {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    }
});
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Close the menu on mobile after clicking a link
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

const imageses = [
    './images/b1.jpg',
    './images/b2.jpg',
    './images/b1.jpg',
    './images/b2.jpg',
    './images/b1.jpg',
   
];

let currentImagee = 0;
const sliderImagee = document.getElementById('slider-imagee');

function changeImage(index) {
    currentImagee = index - 1;
    updateSliderImages();
    updateActiveDots();
}

function updateSliderImages() {
    sliderImagee.style.opacity = 0;
    setTimeout(() => {
        sliderImagee.src = imageses[currentImagee];
        sliderImagee.style.opacity = 1;
    }, 500);
}

function updateActiveDots() {
    const dots = document.querySelectorAll('.slider-dott');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentImagee);
    });
}

setInterval(function() {
    currentImagee = (currentImagee + 1) % imageses.length;
    updateSliderImages();
    updateActiveDots();
}, 7000);





//////////////////////////
const imagesess = [
    './images/C1.jpg',
    './images/C2.jpg',
    './images/C3.jpg',
    './images/C4.jpg',
    './images/C5.jpg',
    './images/C6.jpg',
   
];

let currentImageee = 0;
const sliderImageee = document.getElementById('slider-imagees');

function changeImage(index) {
    currentImageee = index - 1;
    updateSliderImagee();
    updateActiveDott();
}

function updateSliderImagee() {
    sliderImageee.style.opacity = 0;
    setTimeout(() => {
        sliderImageee.src = imagesess[currentImageee];
        sliderImageee.style.opacity = 1;
    }, 500);
}

function updateActiveDott() {
    const dots = document.querySelectorAll('.slider-dotts');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentImageee);
    });
}

setInterval(function() {
    currentImageee = (currentImageee + 1) % imagesess.length;
    updateSliderImagee();
    updateActiveDott();
}, 7000);

const customProjectSection = document.querySelector('.custom-project');
        const customProjectContent = customProjectSection.querySelector('.content');

        // Function to handle the scroll effect
        function handleScroll() {
            // Get the distance from the top of the section to the top of the viewport
            const sectionRect = customProjectSection.getBoundingClientRect();
            const sectionHeight = customProjectSection.offsetHeight;

            // Calculate the scroll percentage within the section (0 at top, 1 at bottom)
            const scrollPercent = Math.min(Math.max(sectionRect.top / sectionHeight, -1), 1);

            // Move the content based on the scroll percentage (adjust movement as needed)
            customProjectContent.style.transform = `translateY(${scrollPercent * -50}%)`;
        }

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
