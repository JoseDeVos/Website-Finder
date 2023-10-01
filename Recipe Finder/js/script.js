document.addEventListener("DOMContentLoaded", () => {
    const ingredientInput = document.getElementById("ingredientInput");
    const searchButton = document.getElementById("searchButton");
    const recipeResults = document.getElementById("recipeResults");




    searchButton.addEventListener("click", () => {
        const ingredients = ingredientInput.value.trim().toLowerCase();

        // Simulated recipe data (replace with API calls)
        const recipes = [
            { name: "Spaghetti Carbonara", ingredients: "pasta, eggs, cheese, bacon" },
            { name: "Chicken Stir-Fry", ingredients: "chicken, vegetables, soy sauce" },
            { name: "Chicken Stir-Fry", ingredients: "chicken, vegetables, soy sauce" },
            { name: "Chicken Stir-Fry", ingredients: "chicken, vegetables, soy sauce" },
            { name: "Chicken Stir-Fry", ingredients: "chicken, vegetables, soy sauce" },
            { name: "Chicken Stir-Fry", ingredients: "chicken, vegetables, soy sauce" },
            { name: "Chicken Stir-Fry", ingredients: "chicken, vegetables, soy sauce" },
            { name: "Chicken Stir-Fry", ingredients: "chicken, vegetables, soy sauce" },
            { name: "Chicken Stir-Fry", ingredients: "chicken, vegetables, soy sauce" },
            { name: "Chicken Stir-Fry", ingredients: "chicken, vegetables, soy sauce" },
            { name: "Chicken Stir-Fry", ingredients: "chicken, vegetables, soy sauce" },
            { name: "Chicken Stir-Fry", ingredients: "chicken, vegetables, soy sauce" },
            { name: "Chicken Stir-Fry", ingredients: "chicken, vegetables, soy potato" },
            { name: "Chicken Stir-Fry", ingredients: "chicken, vegetables, soy sauce" },
            { name: "Chicken Stir-Fry", ingredients: "chicken, vegetables, soy sauce" },
            { name: "Chicken Stir-Fry", ingredients: "chicken, vegetables, soy sauce" },
            { name: "Chicken Stir-Fry", ingredients: "chicken, table, soy sauce" },
            { name: "Chicken Stir-Fry", ingredients: "chicken, vegetables, soy sauce" },
            { name: "Chicken Stir-Fry", ingredients: "chicken, vegetables, soy sauce" },
            { name: "Chicken Stir-Fry", ingredients: "chicken, vegetables, soy sauce" },
            { name: "Chicken Stir-Fry", ingredients: "chicken, vegetables, soy sauce" },
            { name: "Chicken Stir-Fry", ingredients: "chicken, vegetables, soy sauce" },
            { name: "Chicken Stir-Fry", ingredients: "chicken, vegetables, soy sauce" },
            { name: "Chicken Stir-Fry", ingredients: "chicken, vegetables, soy sauce" },
            { name: "Chicken Stir-Fry", ingredients: "chicken, vegetables, soy sauce" },
            { name: "Chicken Stir-Fry", ingredients: "chicken, vegetables, soy sauce" },
            { name: "Chicken Stir-Fry", ingredients: "chicken, vegetables, soy sauce" },
            { name: "Chicken Stir-Fry", ingredients: "chicken, vegetables, soy sauce" },
            { name: "Chicken Stir-Fry", ingredients: "beans, vegetables, soy sauce" },
            { name: "Chicken Stir-Fry", ingredients: "chicken, vegetables, soy sauce" },
            { name: "Chicken Stir-Fry", ingredients: "chicken, vegetables, soy sauce" },
            { name: "Chicken Stir-Fry", ingredients: "chicken, vegetables, soy sauce" },
            { name: "Chicken Stir-Fry", ingredients: "chicken, vegetables, soy sauce" },
            { name: "Chicken Stir-Fry", ingredients: "chicken, vegetables, soy sauce" },
            { name: "Chicken Stir-Fry", ingredients: "chicken, vegetables, soy sauce" },
            { name: "Chicken Stir-Fry", ingredients: "chicken, vegetables, soy sauce" },
            // Add more recipes here
        ];

        const filteredRecipes = recipes.filter(recipe =>
            recipe.ingredients.includes(ingredients)
        );

        displayRecipes(filteredRecipes);
    });

    function displayRecipes(recipes) {
        if (recipes.length === 0) {
            recipeResults.innerHTML = "<p>No recipes found.</p>";
        } else {
            const recipeList = recipes.map(recipe =>
                `<div class="recipe">
                    <h2>${recipe.name}</h2>
                    <p>Ingredients: ${recipe.ingredients}</p>
                </div>`
            ).join("");
            recipeResults.innerHTML = recipeList;
        }
    }
});

const serverResponse = "Your message was sent successfully.";

const successMessageDiv = document.getElementById("success-message");
successMessageDiv.textContent = serverResponse;

successMessageDiv.style.color = "green";
successMessageDiv.style.fontWeight = "bold";