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


// -------------------------------------------------------------//


//gear-Backgroundcolor change//




//let gear1 = document.getElementById('gear1');
//let gear2 = document.getElementById('gear2');
//let body = document.body;

//gear1.addEventListener('mouseover', function() {
 //   body.style.backgroundColor = '#8f9e92';
//});

//gear1.addEventListener('mouseout', function() {
  //  body.style.backgroundColor = ''; // This will reset the background color to its original state
//});

//gear2.addEventListener('mouseover', function() {
  //  body.style.backgroundColor = '#c8b1b1';
//});

//gear2.addEventListener('mouseout', function() {
   // body.style.backgroundColor = ''; // This will reset the background color to its original state
//});


// Get the gear image element
//..const gearImage = document.querySelector(".Gear_Img");

// Add a listener for the "transitionend" event to detect when the rotation animation ends
//gearImage.addEventListener("transitionend", function() {
    // Redirect to the portfolio link after the animation is complete
    //window.location.href = "https:.com/rakshashetty5/docs/combinepdf_9_";
//});
//


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

document.querySelector('.intro-image-me').addEventListener('mouseenter', function() {
    
    document.querySelector('.background-flash-me').style.opacity = 1;
     
      // Select all the elements you want to change and set their opacity to 0
     document.querySelectorAll('.intro-image-AR, .intro-image-archi, .intro-image-AI , .intro-image-AW, .intro-image-text, .intro-image-cook, .intro-image-web, .intro-image-game').forEach(function(el) {
        el.style.opacity = 0;
    });
});

document.querySelector('.intro-image-me').addEventListener('mouseleave', function() {
    
    document.querySelector('.background-flash-me').style.opacity = 0;

    // Select all the elements and reset their opacity to the original value
    document.querySelectorAll('.intro-image-AR, .intro-image-archi, .intro-image-AI,.intro-image-AW, .intro-image-text, .intro-image-cook, .intro-image-web, .intro-image-game' ).forEach(function(el) {
        el.style.opacity = '';
    });
});





document.querySelector('.intro-image-AR').addEventListener('mouseenter', function() {
    
    document.querySelector('.background-flash-AR').style.opacity = 1;

     document.querySelectorAll('.intro-image-me, .intro-image-archi, .intro-image-AI , .intro-image-AW, .intro-image-text, .intro-image-cook, .intro-image-web, .intro-image-game').forEach(function(el) {
        el.style.opacity = 0;
    });
});

document.querySelector('.intro-image-AR').addEventListener('mouseleave', function() {
    
    document.querySelector('.background-flash-AR').style.opacity = 0;

    document.querySelectorAll('.intro-image-me, .intro-image-archi, .intro-image-AI,.intro-image-AW, .intro-image-text, .intro-image-cook, .intro-image-web, .intro-image-game' ).forEach(function(el) {
        el.style.opacity = '';
    });
});




document.querySelector('.intro-image-archi').addEventListener('mouseenter', function() {
    
    document.querySelector('.background-flash-archi').style.opacity = 1;

    document.querySelectorAll('.intro-image-me, .intro-image-AR, .intro-image-AI , .intro-image-AW, .intro-image-text, .intro-image-cook, .intro-image-web, .intro-image-game').forEach(function(el) {
        el.style.opacity = 0;
    });
});

document.querySelector('.intro-image-archi').addEventListener('mouseleave', function() {
    
    document.querySelector('.background-flash-archi').style.opacity = 0;

    document.querySelectorAll('.intro-image-AR, .intro-image-me, .intro-image-AI,.intro-image-AW, .intro-image-text, .intro-image-cook, .intro-image-web, .intro-image-game' ).forEach(function(el) {
        el.style.opacity = '';
    });
});



document.querySelector('.intro-image-AI').addEventListener('mouseenter', function() {
    
    document.querySelector('.background-flash-AI').style.opacity = 1;

    document.querySelectorAll('.intro-image-me, .intro-image-archi, .intro-image-AR , .intro-image-AW, .intro-image-text, .intro-image-cook, .intro-image-web, .intro-image-game').forEach(function(el) {
        el.style.opacity = 0;
    });
});

document.querySelector('.intro-image-AI').addEventListener('mouseleave', function() {
    
    document.querySelector('.background-flash-AI').style.opacity = 0;

    document.querySelectorAll('.intro-image-AR, .intro-image-archi, .intro-image-me,.intro-image-AW, .intro-image-text, .intro-image-cook, .intro-image-web, .intro-image-game' ).forEach(function(el) {
        el.style.opacity = '';
    });
});




document.querySelector('.intro-image-AW').addEventListener('mouseenter', function() {
    
    document.querySelector('.background-flash-AW').style.opacity = 1;

    document.querySelectorAll('.intro-image-me, .intro-image-archi, .intro-image-AI , .intro-image-AR, .intro-image-text, .intro-image-cook, .intro-image-web, .intro-image-game').forEach(function(el) {
        el.style.opacity = 0;
    });
});

document.querySelector('.intro-image-AW').addEventListener('mouseleave', function() {
    
    document.querySelector('.background-flash-AW').style.opacity = 0;

    document.querySelectorAll('.intro-image-AR, .intro-image-archi, .intro-image-AI,.intro-image-me, .intro-image-text, .intro-image-cook, .intro-image-web, .intro-image-game' ).forEach(function(el) {
        el.style.opacity = '';
    });
});



document.querySelector('.intro-image-cook').addEventListener('mouseenter', function() {
    
    document.querySelector('.background-flash-cook').style.opacity = 1;

    document.querySelectorAll('.intro-image-me, .intro-image-archi, .intro-image-AI , .intro-image-AW, .intro-image-text, .intro-image-AR, .intro-image-web, .intro-image-game').forEach(function(el) {
        el.style.opacity = 0;
    });
});

document.querySelector('.intro-image-cook').addEventListener('mouseleave', function() {
    
    document.querySelector('.background-flash-cook').style.opacity = 0;

    document.querySelectorAll('.intro-image-AR, .intro-image-archi, .intro-image-AI,.intro-image-AW, .intro-image-text, .intro-image-me, .intro-image-web, .intro-image-game' ).forEach(function(el) {
        el.style.opacity = '';
    });
});



document.querySelector('.intro-image-web').addEventListener('mouseenter', function() {
    
    document.querySelector('.background-flash-web').style.opacity = 1;

    document.querySelectorAll('.intro-image-me, .intro-image-archi, .intro-image-AI , .intro-image-AW, .intro-image-text, .intro-image-cook, .intro-image-AR, .intro-image-game').forEach(function(el) {
        el.style.opacity = 0;
    });
});

document.querySelector('.intro-image-web').addEventListener('mouseleave', function() {
    
    document.querySelector('.background-flash-web').style.opacity = 0;

    document.querySelectorAll('.intro-image-AR, .intro-image-archi, .intro-image-AI,.intro-image-AW, .intro-image-text, .intro-image-cook, .intro-image-me, .intro-image-game' ).forEach(function(el) {
        el.style.opacity = '';
    });
});




//.......ART WORK CAROUSEL..........//

document.addEventListener("scroll", function() {
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    var translateXValue = (1 - scrollPercentage) * 100; // Adjusting starting point and direction
    document.querySelector('.artwork-slider').style.transform = 'translateX(' + translateXValue + '%)';
});



//.......SCROLL TO PARTICULAR SECTION..........//


document.querySelector('.intro-image-archi').addEventListener('click', function() {
    document.querySelector('#ArchiSection').scrollIntoView({ 
        behavior: 'smooth' 
    });
});


document.querySelector('.intro-image-AR').addEventListener('click', function() {
    document.querySelector('#ARSection').scrollIntoView({ 
        behavior: 'smooth' 
    });
});

document.querySelector('.intro-image-AI').addEventListener('click', function() {
    document.querySelector('#AISection').scrollIntoView({ 
        behavior: 'smooth' 
    });
});


document.querySelector('.intro-image-AW').addEventListener('click', function() {
    document.querySelector('#ArtSection').scrollIntoView({ 
        behavior: 'smooth' 
    });
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
