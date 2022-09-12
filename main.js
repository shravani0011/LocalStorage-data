// event listener for submit 
var form = document.getElementById('addForm'); 

// Form submit event 
form.addEventListener('submit', addForm);   


function addForm(e){
    e.preventDefault();   
    
    var inputfname= document.getElementById("fname");
    localStorage.setItem("fname", inputfname.value); 
    console.log(localStorage.getItem("fname", inputfname.value)); 

    var inputlname= document.getElementById("lname");
    localStorage.setItem("lname", inputlname.value); 
    console.log(localStorage.getItem("lname", inputlname.value));
}
