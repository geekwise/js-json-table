


var json_data;
var li;

function get_json_data(event){
    
$.getJSON( "http://www.geekwise.org/data.json")
  .done(function( json ) {
    console.log(json)
    
    
    json_data = $.map(json, function(value, index) {
                return [value];
    });

    
    
    
    
  })
  .fail(function( jqxhr, textStatus, error ) {
    var err = textStatus + ", " + error;
    console.log( "Request Failed: " + err );
});
    
    
    
};



function write_json(event){
    
    var length_of_json = json_data.length;

    for(var i=0; i < length_of_json; i++){
        
        li = document.createElement('li');
        li.textContent = json_data[i].name;
        document.body.appendChild(li);
    }
    
    
    
    
//    
//    for(var i=0;i<current_data_length;i++){
//            
//                    li = document.createElement('li');
//        
//        
//        li.textContent = json_data[i][i];
//        
//        
//        document.body.appendChild(li);
//        
//        
//        console.log(current_data[i]);
//            
//        }

        
        

        
    };





document.addEventListener('DOMContentLoaded',function(event){
    
    
    console.log($);

    get_json_data();
    write_json();
    
    
    

    
})