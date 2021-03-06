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
            //declare
            let title = createNode("span");

            // img.setAttribute("width", "350");
            img.className = "pict";
            span.className = "text";
            title.className = "foodTitle";

            
            img.src = categories.strCategoryThumb;
            title.innerHTML = `${categories.strCategory}`; 
            span.innerHTML = `${categories.strCategoryDescription}`;

            append(li, img);
            append(li, title);
            append(li, span);
            append(foods, li);

            console.log(foods);
        })
    })
    .catch((error) => console.log(error));