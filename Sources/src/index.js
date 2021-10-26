console.log("hello")

// Individual Task Cards
function markedAsComplete() {

  let markedCompleteBtn = document.getElementById('mark-complete-btn')

  markedCompleteBtn.addEventListener('click', function() {
    alert("success");
  })

}

markedAsComplete()
  
  let element = document.getElementsByName('main');
let btn = document.getElementById('btn-transition')


function myFunction() {
  alert ("Hello World!");
}

document.getElementsByClassName('complete').addEventListener('click', myfunction());

// function smoothScroll() {
  btn.addEventListener('click', function() {
    // transition to the 'main' content
    alert("got it")
    // element.scrollIntoView(alignToTop)
  })
// }

function validateForm() {
    let x = document.forms["myForm"]["task"].value;
    if (x == "") {
      alert("Don't forget to add a task.");
      return false;
    }
    else {
        alert("hooray")
        return true;
    }
  }
//   //Create the element using the createElement method.
// let myDiv = document.createElement("div");

// //Set its unique ID.
// myDiv.id = 'div_id';

// //Add your content to the DIV
// myDiv.innerHTML = x;

// //Finally, append the element to the HTML body
// document.body.appendChild(myDiv);

