function loadCategories(){
   fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
   .then((res)=>res.json())
   .then((data)=>displayCategories(data.categories))
}
function displayCategories(categories){
    const categoryContainer = document.getElementById('category-container');
    for(const cat of categories){
        console.log(cat)
        const categoryDiv = document.createElement('div')
        categoryDiv.innerHTML = `
        <button class="btn px-4 py-1 rounded-md text-base  font-medium">${cat.category}</button>
        `
        categoryContainer.append(categoryDiv)
    }
}


loadCategories()