$(document).ready(function(){
    requestApi();
})

////// request api
var requestApi = () =>{
    $.ajax({
        dataType: 'json',
        url : getUrl(),
        success: (data) => getRecipe(data),
        error : () => getError(),
    });
}

////// get url

var getUrl = () =>{
    url = "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
    return url;
}

//// get Error
var getError = () => console.log("Error");

////// get recipe
var getRecipe = (myData) =>{
    myData.recipes.forEach(element =>{
        getIngredient(element.ingredients);
    });
}

////// get Ingredients
var getIngredient = (ing) =>{
    ing.forEach(item =>{
        computeHTML(item);
    })
}

///// compute to HTML

var computeHTML = (display) =>{
    var compute = "";
    compute +=`
    <tr>
       <td><img src= "${display.iconUrl}" width= "100"></td>
       <td>${display.name}</td>
       <td>${display.quantity}</td>
       <td>${display.unit[0]}</td>
    </tr>
    `;
    printOut(compute);
}

printOut = (out) =>{
    $('#ingredient').append(out);
}