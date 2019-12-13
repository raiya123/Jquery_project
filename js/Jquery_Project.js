function getUrl() {
    var url ="https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
    return url;
}
$(document).ready(() =>{
    requestApi();
    $('#recipe').on('change',function(){
        var recipes = $('#recipe').val();
        getRecipe(recipes);
    });
});

////// get Api ////
function requestApi(){
    $.ajax({
        dataType: 'json',
        url:getUrl(),
        success: (data) => chhosenRechipe(data.recipes),
        error: () => console.log("Cannot get data"),
    })
}
var alldata = [];
function chhosenRechipe(rechipe){
    alldata = rechipe;
    rechipe.forEach(element =>{
        Option +=`
            <option value = "${element.id}">${element.name}</option>
        `;
    });
    $('#recipe').append(Option);
}
//// get recipe ////
function getRecipe(rechipeId){
    alldata.forEach(element =>{
        if(element.id == rechipeId){
           getEachRecipe(element.name,element.iconUrl);
           getIngredient(element.ingredients);
           getinstruction(element.instructions);
        }

    });   
}

/// get Recipe ////
var getEachRecipe = (name,img) =>{
    ////// Name //////
    var result = "";
    result +=`
    <h3>${name}</h3> 
    `;
    $('#card').html(result);
    /////// Image //////
    var results = "";
    results +=`
    <img src="${img}" width="100"> 
    `;
    $('#cards').html(results);
}

 //// get Ingredient ///
function getIngredient(ingredient){
    var result = "";
    ingredient.forEach(el =>{
      result +=`
        <tr>
          <td><img src="${el.iconUrl}" width="100" /></td>
          <td>${el.quantity}</td>
          <td>${el.unit[0].toLowerCase()}</td>
          <td>${el.name}</td>
        </tr>
      `;
    })
    $('#table').html(result);
}

///// get Instruction ///
function  getinstruction(instruction){
    var instruct = "";
      instruct +=`
          ${instruction}
      `;
      $('#step').html(instruct);
}



