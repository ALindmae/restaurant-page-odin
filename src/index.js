import "./styles.css";
import { renderHomepage } from "./homepage.js";
import { renderMenuPage } from "./menu.js";
import { renderAboutPage } from "./about.js";
import { renderContactPage } from "./contact.js";

renderHomepage();

const navigation = document.querySelector('.navigation');

navigation.addEventListener('click', e => {
    switch (e.target.textContent) {
        case "Home":
            renderHomepage()
            break;
        case "Menu":
            renderMenuPage();
            break;
        case "About":
            renderAboutPage();
            break;
        case "Contact":
            renderContactPage();
            break;
    }
})

