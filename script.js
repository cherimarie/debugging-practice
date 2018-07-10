// Global variable to hold list of courses.
var courseList = [];
// REVIEW: Would this be safer if variable was scoped to window.onload or addACourse functions?

// Assign handlers to page events.
window.onload = function(){
  document.querySelector("form#add-course").addEventListener("submit", addACourse)

  document.querySelector("button#clear").addEventListener("click", clearData)

  document.querySelector("button#calculate").addEventListener("click", calculateAverage)
}

// Form handler creates a new course object and pushes it into courseList array,
// clears content in form fields, prints courseList objects to the page.
function addACourse(event){
  event.preventDefault();
  var grade = parseFloat(this.elements["grade"].value);
  /*
    TODO: validate that "grade" value is a number between 1.0 and 4.0, stop processing if it is not.

    Checking 'grade typeof "number"' will always return true because we called parseFloat.
    We must instead check that it's value is not NaN.

    REVIEW: could we make it doubly safe by adding an HTML validation as well?

  */


  // Create the new course with values from the form, push it into array of courses.
  var newCourse = {
    name: this.elements["name"].value,
    grade: grade
  }

  courseList.push(newCourse)

  clearFormFields()
  outputList()
}

// Calculate the average of "grade" attribute for all objects in courseList array
// and print it in friendly message to page text.
function calculateAverage(){
  // Average GPA of courses equals the sum of all grades,
  // divided by the number of course objects in courseList
  var sum = 0
  for(var i=0;i<courseList.length;i++){
    sum += courseList[i].grade
  }
  var avg = sum / courseList.length
  document.getElementById("result").innerHTML = "Your overall GPA is " + avg;
}

// Removes GPA calculation from page text.
function clearGPA(){
  document.getElementById("result").innerHTML = null;
}

// Clears content in form fields.
function clearFormFields(){
  // let fields = document.querySelectorAll("input[type=text]");
  // for(let i = 0; i < fields.length; i++){
	//   fields[i].value = "";
    document.getElementById("add-course").reset();
  // TODO: implement this function.
}

// Clear out list of courses and all content shown on the page
function clearData(){
  courseList = []
  clearFormFields()
  outputList()
}

// Prints courseList objects to the page in a readable way.
function outputList(){
  var list = document.getElementById("course-list");
   list.innerHTML = "";
  for(let i=0; i<courseList.length;i++){
  let item = document.createElement('li');
  item.innerHTML = courseList[i].name + " " + courseList[i].grade;
  list.appendChild(item);
  }
}
