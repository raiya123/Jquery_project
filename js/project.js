


$(document).ready(function(){
    $('#recipe').on('change', () =>{
        var fruit = $('#recipe').val();
        choose(fruit);
       
    
    })
})

var choose = (fruit) =>{
    switch(parseInt(fruit)){
        case 1:
            getApple();
            break;
        case 2:
            getBanana();
            break;
        case 3:
            getCoconut();
            break;
    }
}

/// Apple


// Banana
var getBanana = () =>{
    var url = "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
    $.ajax({
        dataType: 'json',
        url : url,
        success: function(datas) {
            var result ="";
            datas.recipes.forEach(element => {
                if(element.id == 1) {
                    result +=`
                        <img src="${element.iconUrl}" width="100">
                        
                  
                `;
                }
                
            });
            $('#card').html(result);

            var results ="";
            datas.recipes.forEach(element => {
                if(element.id == 1) {
                    results +=`
                        ${element.name}
                        
                  
                `;
                }
                
            });
            $('#text').html(results);


          

            var resultes ="";
            datas.recipes.forEach(elements => {
                elements.ingredients.forEach(el =>{
                    if(elements.id == 1) {
                        resultes +=`
                          <tr>
                            <td><img src="${el.iconUrl}" width="50"></td>
                            <td>${el.quantity}</td>
                            <td>${el.unit[0]}</td>
                            <td>${el.name}</td>
                          </tr>
                            
                      
                    `;
                    }
                })
            
                
            });
            $('#tables').html(resultes);
        }
    })
}
// //// Coconut
// var getCoconut = () =>{
//     var coconut = "I Love Coconut";
//     printOut(coconut);
// }

// /// Print out to HTML
// var printOut = (out) => {
//   $('#ingredient').html(out);
// }



// var requestApi = () =>{
//     $.ajax({
//         dataType: 'json',
//         url : getUrl(),
//         success: (data) => getRecipe(data),
//         error : () => getError(),
//     });
// }

// ////// get url

// var getUrl = () =>{
//     url = "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
//     return url;
// }

// //// get Error
// var getError = () => console.log("Error");

// ////// get recipe
// var getRecipe = (myData) =>{
//     myData.recipes.forEach(element =>{
//         getIngredient(element.ingredients);
//     });
// }

// ////// get Ingredients
// var getIngredient = (ing) =>{
//     ing.forEach(item =>{
//         computeHTML(item);
//     })
// }
// ///// compute to HTML

// var computeHTML = (display) =>{
//     var compute = "";
//     compute +=`
//     <tr>
//        <td><img src= "${display.iconUrl}" width= "100"></td>
//        <td>${display.name}</td>
//        <td>${display.quantity}</td>
//        <td>${display.unit[0]}</td>
//     </tr>
//     `;
//     printOut(compute);
// }

// printOut = (out) =>{
//     $('#ingredient').append(out);
// }




