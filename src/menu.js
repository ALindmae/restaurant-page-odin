let menuCategories = [
    {
        "title": "Main Course",
        "dishes": [
            {
                description: "Carbon-Smoked Nebula Steak",
                ingredients: "Prime starbeast flank, compressed nebula dust, charred comet salt"
            },
            {
                description: "Quantum-Shifting Mushroom Risotto",
                ingredients: "Phase-hopping porcini, time-reduced stock, uncertainty saffron"
            },
            {
                description: "Reverse-Grilled Octopus",
                ingredients: "Backwards-cooked tentacles, anti-fire glaze, memory seaweed"
            },
            {
                description: "Black Mirror Ramen",
                ingredients: "Ink-black broth, reflective noodles, staring egg yolk"
            }
        ]
    },
    {
        "title": "Desserts",
        "dishes": [
            {
                description: "Chrono-Bent Cheesecake Slice",
                ingredients: "Timeline-folded cream cheese, paradox crust, hourglass sugar"
            },
            {
                description: "Synthetic Forest Berries with Cloud Cream",
                ingredients: "Lab-grown emberberries, edible fog, aerated frost milk"
            },
            {
                description: "Molten Midnight Tart",
                ingredients: "Light-absorbing chocolate, void caramel, starflake powder"
            },
            {
                description: "Dream-Infused Cotton Candy",
                ingredients: "Distilled REM vapors, soft spun sugar, lucid fruit essence"
            }
        ]
    },
];


function createDishElement(dish) {

    const container = document.createElement('div');
    container.classList.add('menu__item');

    const description = document.createElement('p');
    description.classList.add('menu__item-description');
    description.textContent = dish.description;
    
    const ingredients = document.createElement('p');
    ingredients.classList.add('menu__item-ingredients');
    ingredients.textContent = dish.ingredients;

    container.append(description, ingredients);

    return container;
}

function createMenuSection(category) {

    const section = document.createElement('section');
    section.classList.add('category-section');

    const title = document.createElement('h2');
    title.classList.add('menu__subtitle');
    title.textContent = category.title;

    let dishes = [];

    for (let dish of category.dishes) {
        dishes.push(createDishElement(dish));
    }

    section.append(title, ...dishes)
    
    return section;
}


export function renderMenuPage() {
    const content = document.querySelector('#content');

    const container = document.createElement('div');
    container.classList.add('menu');

    const title = document.createElement('h1');
    title.classList.add('menu__title');
    title.textContent = "Menu";

    let menuSections = [];

    menuCategories.forEach(category => {
        menuSections.push(createMenuSection(category));
    });

    container.append(title, ...menuSections);

    content.append(container);
};