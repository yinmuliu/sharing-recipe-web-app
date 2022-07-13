// ============== UPLOAD AND DISPLAY IMAGE ================ //
const recipeImgTarget = document.querySelector('.recipe_img_target')
const imgInput = document.querySelector('#img')

const updateRecipeImg = () => {
    let newRecipeImg = window.URL.createObjectURL(imgInput.files[0]);
    recipeImgTarget.src = newRecipeImg;
}

if (imgInput !== null) {
    imgInput.addEventListener('change', updateRecipeImg)
}

// ============== INGREDIENTS & METHODS INPUT ================ //
const addIngredientsSign = document.querySelector('.multi-ingredients')
const addMethodsSign = document.querySelector('.multi-methods')
const ingredientsDiv = document.querySelector('.ingredients')
const methodsDiv = document.querySelector('.methods')

// When onclick, another textarea input is added.
const addIngredientsInput = () => {
    // create a new input textarea
    const newInput = document.createElement('input')
    // add class/attributes to the input
    Object.assign(newInput, {
        type: 'textarea',
        name: 'ingredients',
        id: 'ingredients',
        // value: "<%= recipe.ingredients %>" for EDIT Page
        // CONNECTING TO BACKEND - Loop?
    })
    // append it to the div
    ingredientsDiv.insertBefore(newInput, addIngredientsSign)
}

const addMethodsInput = () => {
    const newInput = document.createElement('input')
    Object.assign(newInput, {
        type: 'textarea',
        name: 'methods',
        id: 'methods',
        // value: "<%= recipe.methods %>"
        // CONNECTING TO BACKEND - Loop?
    })
    methodsDiv.insertBefore(newInput, addMethodsSign)
}


addIngredientsSign.addEventListener('click', addIngredientsInput)
addMethodsSign.addEventListener('click', addMethodsInput)





