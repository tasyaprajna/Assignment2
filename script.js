var foods = document.getElementById('foods');
const allFoods = "https://www.themealdb.com/api/json/v1/1/categories.php";

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}


fetch(allFoods)
    .then((res) => res.json())
    .then((json) => {
        console.log(json)
        json['categories'].map((categories) => {
            let li = createNode("li");
            let img = createNode("img");
            let span = createNode("span");

            img.setAttribute("width", "200");

            img.src = categories.strCategoryThumb;
            span.innerHTML = `${categories.strCategory}, ${categories.strCategoryDescription}`;
            append(li, img);
            append(li, span);
            append(foods, li);
        })
    })
    .catch((error) => console.log(error));