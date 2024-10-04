const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then (res => res.json())
    .then (data => displayCategories(data.categories))
    .catch(error => console.log(error));

};

const displayCategories = (data) => {
    const categoryContainer = document.getElementById('categories');
    data.forEach(item => {
        const btn = document.createElement('button');
        btn.classList = 'btn';
        btn.innerText = item.category;
        categoryContainer.append(btn);
    })
};

loadCategories()