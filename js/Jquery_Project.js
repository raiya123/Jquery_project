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
        ////// counter ////
        $('#add').on('click',function(){
            var sum = $('#member').val();
            increse(sum);
        })
        $('#minus').on('click',function(){
            var sum = $('#member').val();
            dicrese(sum);
        })
    });
    $('#hide').hide();
    $('#line').hide();
})
////// Get counter ////
var increse = (member) => {
    var add = parseInt(member) + 1;
   if(add <= 15){
       $('#member').val(add);
       compute(add);
   }
}
var dicrese = (member) => {
    var no = parseInt(member) - 1;
    if(no >=0){
       $('#member').val(no);
       compute(no);
    }
}
function compute(num){
   var computes = num * 5;
   if(number == 0){
       progressBar(result);
   }else{
       progressBar(result + 25);
   }
   $('#result').html(computes);
}

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
    $('#text-num').html('Number of persons');
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
    $('#name').html(result);
    /////// Image //////
    var results = "";
    results +=`
    <img src="${img}" width="170" height="140"> 
    `;
    $('#img').html(results);
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




