let dragItem = document.querySelector(".thesis_project_img");
console.log(dragItem);
let active = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

document.addEventListener("mousedown", dragStart, false);
document.addEventListener("mouseup", dragEnd, false);
document.addEventListener("mousemove", drag, false);

function dragStart(event) {
    if (event.target === dragItem) {
        active = true;

        initialX = event.clientX - xOffset;
        initialY = event.clientY - yOffset;
    }
}

function dragEnd(event) {
    initialX = currentX;
    initialY = currentY;

    active = false;
}

function drag(event) {
    if (active) {
        event.preventDefault();

        currentX = event.clientX - initialX;
        currentY = event.clientY - initialY;

        xOffset = currentX;
        yOffset = currentY;

        setTranslate(currentX, currentY, dragItem);
    }
}



//.......ANGRY BIRD..........//
const angryImage = document.querySelector('.Angry_Sphere');
let isClicked = false;

angryImage.addEventListener('mouseover', () => {
    if (!isClicked) {
        const maxX = window.innerWidth - angryImage.clientWidth;
        const maxY = window.innerHeight - angryImage.clientHeight;
        
        // Calculate new positions for X and Y
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY / 8); // Moves upward
        
        angryImage.style.transform = `translate(${randomX}px, ${randomY}px)`;
    }
});

angryImage.addEventListener('click', () => {
    if (!isClicked) {
        isClicked = true;
        angryImage.src = 'images/Angry_1.png'; // Change to the new image

        // Create and append more images
        const newImages = ['images/Angry_2.png', 'images/Angry_3.png'];
        newImages.forEach((imageUrl) => {
            const newImage = document.createElement('img');
            newImage.src = imageUrl;
            newImage.classList.add('Angry_Sphere');
            document.querySelector('.AR_img').appendChild(newImage);
        });

        // Make the image fall downward
        setTimeout(() => {
            angryImage.style.transform = `translate(0px, ${window.innerHeight}px)`;
        }, 1000); // Adjust the delay as needed
    }
});


// SHOW THE IMAGE ON HOVER IN INTRO//

// Function to handle mouse enter event
function handleMouseEnter(selector, backgroundSelector) {
    document.querySelector(backgroundSelector).style.opacity = 1;
    document.querySelectorAll(selector).forEach(function(el) {
        el.style.opacity = 0;
    });
}

// Function to handle mouse leave event
function handleMouseLeave(selector, backgroundSelector) {
    document.querySelector(backgroundSelector).style.opacity = 0;
    document.querySelectorAll(selector).forEach(function(el) {
        el.style.opacity = '';
    });
}
const delayTime = 3000;
setTimeout(() => {
// Define an array of intro image class suffixes
const introImageClasses = ['me', 'AR', 'archi', 'AI', 'AW', 'cook', 'web', 'game','text'];

// Attach event listeners
introImageClasses.forEach(function(classSuffix) {
    const introSelector = `.intro-image-${classSuffix}`;
    const backgroundSelector = `.background-flash-${classSuffix}`;
    const otherSelectors = introImageClasses
                            .filter(suffix => suffix !== classSuffix)
                            .map(suffix => `.intro-image-${suffix}`)
                            .join(', ');

    document.querySelector(introSelector).addEventListener('mouseenter', function() {
        handleMouseEnter(otherSelectors, backgroundSelector);
    });

    document.querySelector(introSelector).addEventListener('mouseleave', function() {
        handleMouseLeave(otherSelectors, backgroundSelector);
    });
});
}, delayTime);



//.......ART WORK CAROUSEL..........//

document.addEventListener("scroll", function() {
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    var translateXValue = (1 - scrollPercentage) * 100; // Adjusting starting point and direction
    document.querySelector('.artwork-slider').style.transform = 'translateX(' + translateXValue + '%)';
});



//.......SCROLL TO PARTICULAR SECTION..........//


// Function to add click event listener to an element
function addClickListener(selector, targetId) {
    document.querySelector(selector).addEventListener('click', function() {
        document.querySelector(targetId).scrollIntoView({ 
            behavior: 'smooth' 
        });
    });
}

// Array of objects mapping intro image classes to section IDs
const mappings = [
    
    { classSuffix: 'AR', sectionId: '#ARSection' },
    { classSuffix: 'AI', sectionId: '#AISection' },
    { classSuffix: 'AW', sectionId: '#ArtSection' }
];

// Attach event listeners
mappings.forEach(function(mapping) {
    addClickListener(`.intro-image-${mapping.classSuffix}`, mapping.sectionId);
});


//.....IMAGE SLIDER.............//

var slideIndex = 0;
showSlides(slideIndex);

function moveSlide(n) {
  slideIndex += n;
  showSlides(slideIndex);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  if (n >= slides.length) {slideIndex = 0}
  if (n < 0) {slideIndex = slides.length - 1}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex].style.display = "block";  
}

//.....LIGHTBOX.............//

let currentSlide = 0;
let images = document.querySelectorAll('.artwork-card img');
let lightbox = document.getElementById('lightbox');
let lightboxImg = document.getElementById('lightbox-img');
let lightboxDescription = document.getElementById('lightbox-description');

// Open the lightbox and set the description
images.forEach((img, index) => {
    img.addEventListener('click', () => {
        lightbox.style.display = "block";
        lightboxImg.src = img.src;
        lightboxDescription.textContent = img.parentElement.getAttribute('data-description');
        currentSlide = index;
    });
});

// Close the lightbox
document.querySelector('.close').addEventListener('click', () => {
    lightbox.style.display = "none";
});

// Change slide
function changeSlide(step) {
    currentSlide += step;
    if (currentSlide >= images.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = images.length - 1;
    }
    lightboxImg.src = images[currentSlide].src;
    lightboxDescription.textContent = images[currentSlide].parentElement.getAttribute('data-description');
}
