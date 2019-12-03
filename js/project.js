$(document).ready(function(){
    var url ="https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
    $.ajax({
        dataType : "json",
        url : url,
        success: function(data){
            var result = "";
            data.recipes.forEach(item=>{      
                item.ingredients.forEach(element=>{
                    result +=`
                    <tbody>
                        <tr>
                            <td>${element.name}</td>
                            <td>${element.quantity}</td>
                            <td>${element.unit}</td>
                            <td>
                              <img src="${element.iconUrl}" class="img-fluid" />
                            </td>
                        </tr>
                    </tbody>
                    `;
                })
            })
            $('table').append(result); 
        }           
    })
})