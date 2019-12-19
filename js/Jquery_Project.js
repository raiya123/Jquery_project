function getUrl() {
    var url ="https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
    return url;
}
$(document).ready(() =>{
    requestApi();
    $('#recipe').on('change',function(){
        $('#hide').show();
        $('#line').show();
        var recipes = $('#recipe').val();
        getRecipe(recipes);
    });
    $('#hide').hide();
    $('#line').hide();

    //////get increment and decrement
    $('#add').on('click',function(){
        var increment = $('#member').val();
        getIncrement(increment);
    }) 

    $('#minus').on('click',function(){
        var dicrement = $('#member').val();
        getDicrement(dicrement);
    }) 

})

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
///// get quanlity //
var quanlity = [];
var oldGuest = 0;
//// get recipe ////
function getRecipe(rechipeId){
    $('#text-num').html('Number of persons');
    alldata.forEach(element =>{
        if(element.id == rechipeId){
           getEachRecipe(element.name,element.iconUrl);
           getIngredient(element.ingredients);
           getinstruction(element.instructions);
           getNumberGest(element.nbGuests);
           quanlity = element; 
           oldGuest = element.nbGuests;
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
    $('#name').html(result);
    /////// Image //////
    var results = "";
    results +=`
    <img src="${img}" width="170" height="140"> 
    `;
    
    $('#img').html(results);
    //// get Guest ///
}
 //// get Ingredient ///
function getIngredient(ingredient){
    var result = "";
    $('#nameIngredient').html('Ingredients');
    ingredient.forEach(el =>{
      result +=`
        <tr>
          <td><img src="${el.iconUrl}" width="40" height="35"  /></td>
          <td>${el.quantity}</td>
          <td>${el.unit[0].toLowerCase()}</td>
          <td>${el.name}</td>
        </tr>
      `;
    })
    $('#ingredient').html(result);
}
///// get Instruction ///
function  getinstruction(instruction){
    $('#introduction').html('Instructions');
    var step = instruction.split("<step>");
    var instruct = "";
    //// loop to get data by step
    for(let i=1; i<step.length; i++){
        instruct +=`
        <p class="text-info"><strong>Step${i}</strong></p>
        ${step[i]}
        `;
    }
    $('#step').html(instruct);
}
///////// Get Guest //////////
function getNumberGest(guests){
    var geusts = "";
    geusts +=`
        <input type="number" disabled class="text-center btn" id="member" value="${guests}">
    `;
    $('#guest').html(geusts);
}

///// get increment
function getIncrement(increments){
    var add = parseInt(increments) + 1;
    if(add <= 15){
        $('#member').val(add);
        getValue($('#member').val());
    }


}
///// get increment
function getDicrement(dicrement){
    var minus = parseInt(dicrement) - 1;
    if(minus > 0){
        $('#member').val(minus);
        getValue( $('#member').val());
    }
}

///// Get value of new member 
function getValue(persons){
    var quanlitys;
    var newQuanlity;
    var result = "";
    quanlity.ingredients.forEach(item =>{
        quanlitys = item.quantity/oldGuest;
        newQuanlity = quanlitys*persons;
        result +=`
            <tr>
            <td><img src="${item.iconUrl}" width="40" height="35"  /></td>
            <td>${newQuanlity}</td>
            <td>${item.unit[0].toLowerCase()}</td>
            <td>${item.name}</td>
          </tr>
        `;
    })
    $('#ingredient').html(result);

}



////////// SlideShow ////
$(document).ready(function(){
    $('#demo').carousel({
        interval:false
    })
})

