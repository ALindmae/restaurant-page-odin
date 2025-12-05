import ambienceImg from "./ambience-restaurant.jpg";

export function renderHomepage () {

    const content = document.querySelector('#content');

    // --- HERO SECTION ---
    const heroSection = document.createElement('section');
    heroSection.classList.add('hero');

    const heroText = document.createElement('h1');
    heroText.classList.add('hero__text');
    heroText.textContent = "Culinary Cult Trip";

    const heroBtn = document.createElement('button');
    heroBtn.classList.add('button', 'hero__button');
    heroBtn.textContent = "Make reservation";

    heroSection.appendChild(heroText);
    heroSection.appendChild(heroBtn);

    content.appendChild(heroSection);


    // --- ABOUT US SECTION ---
    const aboutSection = document.createElement('section');
    aboutSection.classList.add('about-us');

    const aboutTitle = document.createElement('h2');
    aboutTitle.classList.add('about-us__title');
    aboutTitle.textContent = "Our Story";

    const aboutDescription = document.createElement('p');
    aboutDescription.classList.add('about-us__description');
    aboutDescription.textContent =
        "Born from the meeting of ancestral flavors and modern sophistication, our kitchen " +
        "is a celebration of culinary heritage. Rooted in Middle Eastern warmth and elevated " +
        "with contemporary craft, we create dishes that honor tradition while embracing " +
        "innovation. Every plate tells a story — rich, fragrant, and unforgettable.";

    aboutSection.appendChild(aboutTitle);
    aboutSection.appendChild(aboutDescription);

    content.appendChild(aboutSection);


    // --- AMBIENCE SECTION ---
    const ambienceSection = document.createElement('section');
    ambienceSection.classList.add('ambience');

    const ambiencePhoto = document.createElement('img');
    ambiencePhoto.classList.add('ambience__photo');
    ambiencePhoto.src = ambienceImg; 
    ambiencePhoto.alt = "Restaurant ambience";

    const ambienceTextContainer = document.createElement('div');
    ambienceTextContainer.classList.add('ambience__text-container');

    const ambienceTitle = document.createElement('p');
    ambienceTitle.classList.add('ambience__title');
    ambienceTitle.textContent = "An Atmosphere of Subtle Opulence";

    const ambienceDescription = document.createElement('p');
    ambienceDescription.classList.add('ambience__description');
    ambienceDescription.textContent =
        "Step into a space where soft golden light meets the earthiness of handcrafted textures. " +
        "Inspired by the elegance of Middle Eastern courtyards, our dining room blends warm luxury " +
        "with intimate calm. Aromas drift gently through the air, music hums in quiet rhythm — " +
        "creating a sanctuary for slow dining, deep conversation, and elevated taste.";

    ambienceTextContainer.appendChild(ambienceTitle);
    ambienceTextContainer.appendChild(ambienceDescription);

    ambienceSection.appendChild(ambiencePhoto);
    ambienceSection.appendChild(ambienceTextContainer);

    content.appendChild(ambienceSection);
};