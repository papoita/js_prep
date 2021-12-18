// const chooseRecipe = function(bakeryA, recipes) {
//     for (let ingredient of BakeryA){
//         if(recipes[0].ingredients.includes(ingredient)

    
//     console.log(recipes[0].ingredients);
  
//   for (let ingredient of bakeryA) {
//     // console.log(item);
//     // console.log(recipes.ingredients);
//     if (recipes.ingredients.includes(ingredient)) {
//       console.log(recipes.name);
//     }
//   }

  //   for (let item of bakeryB){
  //     if(recipes.ingredients === item){
  //       console.log( recipes.name);
  //   }
  // }



const ingredientCheck = function (recipes, bakeryA){
    for (let recipe of recipes){
        if(bakeryA.includes(recipe.ingredients[0]) || bakeryA.includes(recipe.ingredients[1])){
            return recipe.name;
        }
        
    }
}
    



let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base']
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese']
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef']
  }
];
console.log(ingredientCheck(recipes, bakeryA));

//console.log(chooseRecipe(bakeryA, recipes));

// bakeryA = ['potatoes', 'bay leaf', 'raisins'];
// bakeryB = ['red bean', 'dijon mustard', 'apples'];
// recipes = [
//     {
//         name: 'Potato Ganache',
//         ingredients: ['potatoes', 'chocolate']
//     },
//     {
//         name: 'Sweet Fish',
//         ingredients: ['anchovies', 'honey']
//     },
//     {
//         name: "Nima's Famous Dijon Raisins",
//         ingredients: ['dijon mustard', 'raisins']
//     }
// ];

//console.log(chooseRecipe(bakeryA, bakeryB, recipes));