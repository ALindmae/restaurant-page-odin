import heroImgSrc from './hero-image.jpg';

export function renderContactPage() {
    const content = document.querySelector('#content');
    content.textContent = "";

    // --- HERO SECTION ---
    const hero = document.createElement('div');
    hero.classList.add('contact-hero');
    const heroImg = document.createElement('img');
    heroImg.src = heroImgSrc;
    heroImg.classList.add('contact-hero__image')
    const heroText = document.createElement('p');
    heroText.classList.add('contact-hero__text')
    heroText.textContent = "Contact";
    hero.append(heroImg, heroText);

    // --- CONTACT SECTION ---
    const details = document.createElement('div');
    details.classList.add('contact-details');

    // --- Address ---
    const address = document.createElement('div');
    address.classList.add('contact-details__address');

    const addressTitle = document.createElement('h2');
    addressTitle.classList.add('contact-details__address-title');
    addressTitle.textContent = "Address:";

    const addressInfo = document.createElement('p');
    addressInfo.classList.add('contact-details__address-info');
    addressInfo.textContent = "Brass & bass 127-40, SA. Nestled at the border of the Old Quarter and the Sapphire District";

    address.append(addressTitle, addressInfo);

    // --- Contact---
    const contact = document.createElement('div');
    contact.classList.add('contact-details__contact');

    const contactTitle = document.createElement('h2');
    contactTitle.classList.add('contact-details__contact-title');
    contactTitle.textContent = "Contact:";

    const number = document.createElement('p');
    number.classList.add('contact-details__contact-info');
    number.textContent = "3394034-12";

    const email = document.createElement('p');
    email.classList.add('contact-details__contact-info');
    email.textContent = "universe@greenplate.com";

    contact.append(contactTitle, number, email);

    details.append(address, contact);
    

    content.append(details);
}


