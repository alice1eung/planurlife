const searchBox = document.querySelector(".courseSearchBox");
const courseDisplay = document.querySelector(".courseDisplay");


function requestCourse(name) {
  let request = new XMLHttpRequest();
  let key = ".json?key=e5d74b1e38eeb82421a273caa1cb877e";
  let url = "https://api.uwaterloo.ca/v2/courses/";

  var courses = [];

  request.open("GET", url + name + key, true);

  request.onload = function() {
    var dump = JSON.parse(this.response);

    if (dump.meta.status == 200) {
      for (var i = 0; i < dump.data.length; ++i) {
        courses[i] = dump.data[i].subject + " " + dump.data[i].catalog_number;
      }
    } else {

    }
  }

  request.onloadend = function() {
    if (courses.length != 0) {
      courseDisplay.innerHTML = courses.join(", ");
    } else {
      courseDisplay.innerHTML = "Search Above";
    }
  }

  request.send();
}

function getCourses() {
  if (searchBox.value != "" && !searchBox.value.includes(" ")) {
    requestCourse(searchBox.value);
  }
}

searchBox.addEventListener("keyup", getCourses, false);
