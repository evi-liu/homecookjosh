const CHINESE_RECIPES = [
    {
        title: "Char Siu (Chinese BBQ Pork)",
        image: "./images/char-siu.jpg",
        url: "./recipes/char-siu.html",
        time: "2 hours | Overnight",
        type: "Chinese"
    },
    {
        title: "Hand-Pulled Noodles",
        image: "./images/hand-pulled-noodles.jpg",
        url: "./recipes/hand-pulled-noodles.html",
        time: "15 minutes",
        type: "Chinese"
    },
    {
        title: "Scallion Pancakes",
        image: "https://images.unsplash.com/photo-1590929713992-005e2eeea04a",
        url: "./recipes/scallion-pancakes.html",
        time: "45 minutes",
        type: "Chinese"
    },
    {
        title: "Mapo Tofu",
        image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d",
        url: "./recipes/mapo-tofu.html",
        time: "30 minutes",
        type: "Chinese"
    },
    {
        title: "Dan Dan Noodles",
        image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d",
        url: "./recipes/dan-dan-noodles.html",
        time: "40 minutes",
        type: "Chinese"
    },
    {
        title: "Braised Pork Belly (Hong Shao Rou)",
        image: "./images/char-siu.jpg",
        url: "./recipes/braised-pork-belly.html",
        time: "2 hours",
        type: "Chinese"
    },
    {
        title: "Sichuan Dry Fried Green Beans",
        image: "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7",
        url: "./recipes/sichuan-dry-fried-green-beans.html",
        time: "30 minutes",
        type: "Chinese"
    },
    {
        title: "Congee (Rice Porridge)",
        image: "https://images.unsplash.com/photo-1626509653291-c51a8ee8c4a9",
        url: "./recipes/congee.html",
        time: "30 minutes",
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