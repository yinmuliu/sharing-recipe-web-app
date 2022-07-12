// ============== INGREDIENTS & METHODS INPUT ================ //
// Select elements
const addIngredientsButton = document.querySelector('.multi-ingredients')
const addMethodsButton = document.querySelector('.multi-methods')

// When onclick, another textarea input is added.
// const addIngredientsInput = () => {
    
// }

// addIngredientsButton.addEventListener('click', addIngredientsInput)

// ============== UPLOAD AND DISPLAY IMAGE ================ //
const recipeImgTarget = document.querySelector('.recipe_img_target')
const imgInput = document.querySelector('#img')

const updateRecipeImg = () => {
    let newRecipeImg = window.URL.createObjectURL(imgInput.files[0]);
    console.log(newRecipeImg);
    recipeImgTarget.src = newRecipeImg;
}

if (imgInput !== null) {
    imgInput.addEventListener('change', updateRecipeImg)
}


