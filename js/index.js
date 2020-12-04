const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
logo.src = ("img/logo.png");

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])
ctaImg.src = ("img/header-img.png");

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])
middleImg.src = ("img/mid-page-accent.jpg");

// ### Task 2a: MVP

// #### Create selectors to point your data into elements
// * [x] Create selectors by using any of the DOM element's methods

//NAV

const nav = document.querySelectorAll('nav a');
nav[0].innerText = "Services";

const navOne = document.querySelectorAll('nav a');
nav[1].innerText = "Product";

const navTwo = document.querySelectorAll('nav a');
nav[2].innerText = "Vision";

const navThree = document.querySelectorAll('nav a');
nav[3].innerText = "Features";

const navFour = document.querySelectorAll('nav a');
nav[4].innerText = "About";

const navFive = document.querySelectorAll('nav a');
nav[5].innerText = "Contact";

//Title
let title = document.querySelector(".cta h1");
title.innerText = "Dom Is Awesome";



//Button 
const button = document.querySelector("button");
button.innerText = "Get Started";


//Text Content
const info = document.querySelectorAll('.text-content h4');
info[0].textContent = siteContent['main-content']['features-h4'];
info[1].innerText = siteContent['main-content']['about-h4'];
info[2].innerText = siteContent['main-content']['services-h4'];
info[3].innerText = siteContent['main-content']['product-h4'];
info[4].innerText = siteContent['main-content']['vision-h4'];


//Info Text

const infoText = document.querySelectorAll('.text-content p');
infoText[0].textContent = siteContent['main-content']['features-content'];
infoText[1].innerText = siteContent['main-content']['about-content'];
infoText[2].innerText = siteContent['main-content']['services-content'];
infoText[3].innerText = siteContent['main-content']['product-content'];
infoText[4].innerText = siteContent['main-content']['vision-content'];


//Contact 
let contactTop = document.querySelector(".contact h4");
contactTop.innerText = "Contact";



let contactText = document.querySelectorAll('.contact p');contactText[0].innerText = siteContent['contact']['address'];
contactText[1].innerText = siteContent['contact']['phone'];
contactText[2].innerText = siteContent['contact']['email'];

//Footer
let foot = document.querySelector("footer p");
foot.innerText = "Copyright Great Idea! 2018";




// * [ ] Note that IDs have been used on all images. Use the IDs to update src path content




// #### Update the HTML with the JSON data

// * [ ] Remember, NO direct updating of the HTML source is allowed.
// * [ ] Using your selectors, update the content to match the example file.
// * [ ] Remember to update the src attributes on images

// #### Add new content

// * [ ] Change the color of the navigation text to be green.
// * [ ] Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.
// * [ ] Check your work by looking at the [original html](original.html) in the browser