function getCourses(name) {
  var request = new XMLHttpRequest();
  var url = "https://api.uwaterloo.ca/v2/courses/";
  var key = ".json?key=e5d74b1e38eeb82421a273caa1cb877e";

  request.open('GET',url + name + key, true);

  request.onload = function() {

    var dat = JSON.parse(this.response);

    if(request.status == 200) {

      console.log(dat)
        Array.from(dat.data).forEach(function (course){
          console.log(course.subject + " " + course.catalog_number);
        });
    } else {
      console.log('error');
    }
  }
  request.send();
}
