var  selection_zone = document.getElementById("selection_zone");
var text = document.getElementById("text")
var text_result = document.getElementById("text_result")
//codage
//decodage

text.addEventListener("input",()=>{make_result()})
selection_zone.addEventListener("change",()=>{make_result()})


function make_result(){
    if(selection_zone.value=="codage"){
        text_result.value=atob(text.value)  
    }
    else{
        text_result.value=btoa(text.value)  
    }
}