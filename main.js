// event listener for submit 
var form = document.getElementById('addForm');  
var itemList = document.getElementById('items');  

// Form submit event 
form.addEventListener('submit', addForm);   


function addForm(e){
    e.preventDefault();     


      // Get input value 
      var fname = document.getElementById('fname').value; 
      var lname = document.getElementById('lname').value; 
      // Create new li element 
      var p = document.createElement('p'); 
      // Add class 
      p.className = 'list-group-item';  
      // Add text node with input value 
      p.appendChild(document.createTextNode(fname));  
      p.appendChild(document.createTextNode(lname));   

      // Append li to list
    itemList.appendChild(p);
    
    var inputfname= document.getElementById("fname");
    localStorage.setItem("fname", inputfname.value); 
    // console.log(localStorage.getItem("fname", inputfname.value)); 

    var inputlname= document.getElementById("lname");
    localStorage.setItem("lname", inputlname.value); 
    // console.log(localStorage.getItem("lname", inputlname.value));   

    let myObj = {
        inputfname: fname, 
        inputlname: lname
    };

    let myobj_serialized = JSON.stringify(myObj); 
    localStorage.setItem("myObj", myobj_serialized); 
    let myObj_deserialized = JSON.parse(localStorage.getItem("myObj"));  
    console.log(myObj_deserialized);  
}
