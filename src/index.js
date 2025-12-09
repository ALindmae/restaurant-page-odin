import "./styles.css";
import { renderHomepage } from "./homepage.js";
import { renderMenuPage } from "./menu.js";
import { renderAboutPage } from "./about.js";
import { renderContactPage } from "./contact.js";

renderHomepage();

const content = document.querySelector('#content');
const navigation = document.querySelector('.navigation');

navigation.addEventListener('click', e => {
    const button = e.closest('[data-page]');
    if (!button) return;
    
    const page = button.dataset.page;

    switch (page) {
        case "home":
            content.textContent = "";
            renderHomepage()
            break;

        case "menu":
            content.textContent = "";
            renderMenuPage();
            break;

        case "about":
            content.textContent = "";
            renderAboutPage();
            break;

        case "contact":
            content.textContent = "";
            renderContactPage();
            break;
    }
})

