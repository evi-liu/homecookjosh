const CHINESE_RECIPES = [
    {
        title: "Hand-Pulled Noodles",
        image: "./images/hand-pulled-noodles.jpg",
        url: "./recipes/hand-pulled-noodles.html",
        time: "15 minutes",
        type: "Chinese"
    },
    {
        title: "Scallion Pancakes",
        image: "./images/scallion-pancakes.jpg",
        url: "./recipes/scallion-pancakes.html",
        time: "45 minutes",
        type: "Chinese"
    },
    {
        title: "Taiwanese Pork Rib Soup",
        image: "./images/pork-rib-soup.jpg",
        url: "./recipes/pork-rib-soup.html",
        time: "50 minutes",
        type: "Chinese"
    },
    {
        title: "Char Siu (Chinese BBQ Pork)",
        image: "./images/char-siu.jpg",
        url: "./recipes/char-siu.html",
        time: "2 hours | Overnight",
        type: "Chinese"
    }
];

function displayRecipes(recipes) {
    const recipeGrid = document.querySelector('.recipe-grid');
    recipeGrid.innerHTML = '';

    recipes.forEach(recipe => {
        const recipeCard = `
            <a href="${recipe.url}" class="recipe-card">
                <img src="${recipe.image}" alt="${recipe.title}">
                <div class="recipe-info">
                    <div class="recipe-type">${recipe.title}</div>
                    <div class="recipe-time">${recipe.time}</div>
                    <!-- <div class="recipe-rating">★ ${recipe.rating} <span class="review-count">(${recipe.reviews})</span></div> -->
                </div>
            </a>
        `;
        recipeGrid.innerHTML += recipeCard;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.category-item');
    
    // Load Chinese recipes by default
    displayRecipes(CHINESE_RECIPES);

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const cuisine = button.querySelector('span:last-child').textContent;
            
            if (cuisine === 'Chinese') {
                displayRecipes(CHINESE_RECIPES);
            } else {
                const recipeGrid = document.querySelector('.recipe-grid');
                recipeGrid.innerHTML = '<div class="message">Coming soon!</div>';
            }
        });
    });
}); 