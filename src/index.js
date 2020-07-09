const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
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
    "copyright" : "Copyright Great Idea! 2018",
  },
  "img": {
    "header-img": "https://tk-assets.lambdaschool.com/d312ae1d-879c-4c0b-8e0a-d03661aed7d8_header-img.png",
    "mid-page-img": "https://tk-assets.lambdaschool.com/933e5c8a-f143-4a89-b81b-4a609c325f1a_mid-page-accent.jpg",
    "logo-img": "https://tk-assets.lambdaschool.com/d7b66b1d-1f0f-489e-b408-f8e25140c82c_logo.png",
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["img"]["logo-img"])


const links = document.getElementsByTagName("a");
for(let i = 0; i < links.length; i++)
{
  links[i].textContent = siteContent['nav'][`nav-item-${i}`];
}

const image = document.getElementById("cta-img");
image.setAttribute("src", siteContent['img']['header-img']);

const slogan = document.querySelector("h1");
slogan.textContent = siteContent['cta']['h1'];

const btnContent = document.querySelector("button");
btnContent.textContent = siteContent['cta']['button'];

const h4Titles = document.getElementsByTagName("h4");
h4Titles[0].textContent = siteContent["main-content"]["features-h4"];
h4Titles[1].textContent = siteContent["main-content"]["about-h4"];
h4Titles[2].textContent = siteContent["main-content"]["services-h4"];
h4Titles[3].textContent = siteContent["main-content"]["product-h4"];
h4Titles[4].textContent = siteContent["main-content"]["vision-h4"];
h4Titles[5].textContent = siteContent["contact"]["contact-h4"];

const parContent = document.getElementsByTagName("p");
parContent[0].textContent = siteContent["main-content"]["features-content"];
parContent[1].textContent = siteContent["main-content"]["about-content"];
parContent[2].textContent = siteContent["main-content"]["services-content"];
parContent[3].textContent = siteContent["main-content"]["product-content"];
parContent[4].textContent = siteContent["main-content"]["vision-content"];
parContent[5].textContent = siteContent["contact"]["address"];
parContent[6].textContent = siteContent["contact"]["phone"];
parContent[7].textContent = siteContent["contact"]["email"];


