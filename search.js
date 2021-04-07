const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

function getData(url, cb) {
    fetch(url)
      .then(response => response.json())
      .then(result => cb(result['categories']));
}

function searching(){
    var search = document.getElementById('search').value;
    while (foods.childElementCount > 0){
        foods.removeChild(foods.lastElementChild)
    }
    foods = document.getElementById('foods');
    getData(url, (data) => {
        const filterResult = data.filter((food) => {
            search = search.toLowerCase();
            if (food.strCategory.toLowerCase().includes(search)){
                return food.strCategory.toLowerCase()
            }
        })
        
        filterResult.map((x) => {
            let li = createNode("li");
            let img = createNode("img");
            let span = createNode("span");
            let title = createNode("span");
    
            img.className = "filter_pict";
            span.className = "filter_text";
            title.className = "filter_foodTitle";
    

            img.src = x.strCategoryThumb;
            title.innerHTML = `${x.strCategory}`; 
            span.innerHTML = `${x.strCategory}, ${x.strCategoryDescription}`;
            
            append(li, img);
            append(li, title);
            append(li, span);
            append(foods, li);
        })
    
        console.log(filterResult)})
}

