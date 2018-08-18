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

  
  // Advanced Challenge
  // In JavaScript, there is a method that creates a new attribute node for any DOM element. Discover that method and use it to create a custom attribute named congressional-district and its value should be your congressional district number. Then attach that attribute to the <article> container you made for your representative component.
  
  let art = document.getElementById("article--5thDistrict");    // Get the <article> element in the document
  let att = document.createAttribute("congressional-district"); // Create a "customized" attribute of "congressional-district"
  att.value = "5";                                              // Set the value of the attribute
  art.setAttributeNode(att);                                    // Add the attribute to <article>
  console.log(att);




  
  // Jisie walkthrough
let para = document.createElement("p");
let node = document.createTextNode("The Most Productive Member of Congress!");
para.appendChild(node);

let element = document.getElementById("article--5thDistrict");
let child = document.getElementById("district");
element.insertBefore(para, child);
console.log("I worked");

// Jisie walkthrough
// var node = document.createElement("LI");                 // Create a <li> node
// var textnode = document.createTextNode("Water");         // Create a text node
// node.appendChild(textnode);                              // Append the text to <li>
// document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList"

// const articleRef = document.querySelector("#article--5thDistrict");
// let paragraphElement = document.createElement("p");
// let paragraphTextNode =  document.createTextNode("Made ip Stuff");
// paragraphElement.appendChild(paragraphTextNode);
// console.log(paragraphElement);
// articleRef.appendChild(paragraphElement);