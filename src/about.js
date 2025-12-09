import mainImg from "./hero-image.jpg";
import ambienceImg from "./ambience-restaurant.jpg";

export function renderAboutPage() {
    const content = document.querySelector('#content');

    // --- ABOUT US SECTION ---
    const aboutUs = document.createElement('section');
    aboutUs.classList.add('about-us');

    const aboutUsTitle = document.createElement('h1');
    aboutUsTitle.classList.add('title', 'about-us__title');
    aboutUsTitle.textContent = "A Legacy Steeped in Spice & Starlight";

    const aboutUsBody = document.createElement('p');
    aboutUsBody.classList.add('body', 'about-us__body');
    aboutUsBody.textContent = 
    "Our story began in 1927, when a travelling spice merchant named Samir Al-Rashid opened a modest supper tent along the old trade road. Travelers claimed that the aromas rising from his copper pots could be sensed from miles away — a blend so alluring that caravans would alter their routes just to dine beneath his canvas lanterns. Over the decades, the tent became a house, then a salon, then the refined establishment you see today. Each generation added its own chapter: the marbled halls designed after the moonlit palaces of Muscat, the evolving menu shaped by desert botanicals and distant coastal markets, and the cocktail bar inspired by the perfumers of the Levant. Though much has changed, we still follow Samir’s philosophy — to serve food that carries memory, invention, and a hint of mystery in every bite.";

    const location = document.createElement('p');
    location.classList.add('about-us__location');
    location.textContent = "Brass & bass 127-40, SA. Nestled at the border of the Old Quarter and the Sapphire District"

    const contactBtn = document.createElement('button');
    contactBtn.classList.add('btn', 'btn-primary');
    contactBtn.textContent = "Book a Table";

    aboutUs.append(aboutUsTitle, aboutUsBody, location, contactBtn);

    // --- ABOUT RESTAURANT SECTION ---
    const aboutRestaurant = document.createElement('section');
    aboutRestaurant.classList.add('about-restaurant');

    const restaurantImg = document.createElement('img');
    restaurantImg.src = mainImg;
    restaurantImg.classList.add('about-restaurant__image');

    const textBox = document.createElement('div');
    textBox.classList.add('about-restaurant__text-box');

    const textBoxDescription = document.createElement('p');
    textBoxDescription.classList.add('about-restaurant__description');
    textBoxDescription.textContent = "Our culinary approach blends royal Arabian techniques with contemporary artistry. Every plate is composed like a whispered poem — spices layered as if remembering old caravans, textures shaped to echo shifting dunes. The cocktail bar follows a similar philosophy: crystalline infusions, slow-dripped botanicals, and rare fruits said to bloom only under certain lunar phases";

    textBox.append(textBoxDescription);
    
    aboutRestaurant.append(restaurantImg, textBox);

    content.append(aboutUs, aboutRestaurant);
}