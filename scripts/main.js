console.log("hello world main.js")
document.body.onload = addElement;

function addElement () { 
    // create a new div element 
    let newDiv = document.createElement("div"); 
    newDiv.classList.add("mission");
    newDiv.setAttribute("id", "mission-statement");
    // and give it some content 
    var newContent = document.createTextNode("this is a new DIV created dynamically via javaScript:  Mission statement goes here"); 
    // add the text node to the newly created div
    newDiv.appendChild(newContent);  
  
    // add the newly created element and its content into the DOM 
    let elementAnchor = document.querySelector("#test")
    document.body.insertBefore(newDiv, elementAnchor); 
  }

