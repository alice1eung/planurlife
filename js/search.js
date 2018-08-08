function getCourses(name) {
  let request = new XMLHttpRequest();
  let key = ".json?key=e5d74b1e38eeb82421a273caa1cb877e";
  let url = "https://api.uwaterloo.ca/v2/courses/";

  request.open("GET", url + name + key, true);

  request.onload = function() {
    var dump = JSON.parse(this.response);
    var courses = [];

    if (dump.meta.status == 200) {
      console.log(dump);
      for (var i = 0; i < dump.data.length; ++i) {
        let course = dump.data[i].subject + " " + dump.data[i].catalog_number;
        console.log(course);
      }
      //console.log(dump.data[0].subject);
    } else {
      console.log("Error");
    }
  }

  request.send();
}

getCourses("CS");
