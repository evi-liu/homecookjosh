const CHINESE_RECIPES = [
    {
        title: "Char Siu (Chinese BBQ Pork)",
        image: "https://images.unsplash.com/photo-1582476693846-a77c96a69112",
        url: "./recipes/char-siu.html",
        time: "2 hours",
        rating: 4.9,
        reviews: 486,
        type: "Chinese"
    },
    {
        title: "Hand-Pulled Noodles",
        image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43",
        url: "./recipes/hand-pulled-noodles.html",
        time: "2 hours",
        rating: 4.8,
        reviews: 356,
        type: "Chinese"
    },
    {
        title: "Scallion Pancakes",
        image: "https://images.unsplash.com/photo-1590929713992-005e2eeea04a",
        url: "./recipes/scallion-pancakes.html",
        time: "45 minutes",
        rating: 4.9,
        reviews: 428,
        type: "Chinese"
    },
    {
        title: "Mapo Tofu",
        image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d",
        url: "./recipes/mapo-tofu.html",
        time: "30 minutes",
        rating: 4.8,
        reviews: 392,
        type: "Chinese"
    },
    {
        title: "Dan Dan Noodles",
        image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d",
        url: "./recipes/dan-dan-noodles.html",
        time: "40 minutes",
        rating: 4.9,
        reviews: 445,
        type: "Chinese"
    },
    {
        title: "Braised Pork Belly (Hong Shao Rou)",
        image: "https://images.unsplash.com/photo-1582476693846-a77c96a69112",
        url: "./recipes/braised-pork-belly.html",
        time: "2 hours",
        rating: 4.9,
        reviews: 378,
        type: "Chinese"
    },
    {
        title: "Sichuan Dry Fried Green Beans",
        image: "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7",
        url: "./recipes/sichuan-dry-fried-green-beans.html",
        time: "30 minutes",
        rating: 4.8,
        reviews: 334,
        type: "Chinese"
    },
    {
        title: "Congee (Rice Porridge)",
        image: "https://images.unsplash.com/photo-1626509653291-c51a8ee8c4a9",
        url: "./recipes/congee.html",
        time: "30 minutes",
        rating: 4.7,
        reviews: 312,
        type: "Chinese"
    }
];

function displayRecipes(recipes) {
    const recipeGrid = document.querySelector('.recipe-grid');
    recipeGrid.innerHTML = '';

    recipes.forEach(recipe => {
        const recipeCard = `
            <a href="${recipe.url}" target="_blank" class="recipe-card">
                <div class="recipe-image">
                    <img src="${recipe.image}" alt="${recipe.title}">
                </div>
                <div class="recipe-info">
                    <h3>${recipe.title}</h3>
                    <p class="recipe-type">${recipe.type}</p>
                    <p class="recipe-time">${recipe.time}</p>
                    <div class="recipe-rating">★ ${recipe.rating} <span class="review-count">(${recipe.reviews})</span></div>
                </div>
            </a>
        `;
        recipeGrid.innerHTML += recipeCard;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.category-item');
    
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

    // Load Chinese recipes initially
    displayRecipes(CHINESE_RECIPES);
}); 