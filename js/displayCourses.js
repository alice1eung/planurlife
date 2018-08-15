function get_action(form) {
    var year= document.getElementsByName("calender year")[0].value;
    var term = document.getElementsByName("term")[0].value;
    var ul = document.getElementById("required courses");

    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
    var courses2018 = ["CS 135", "CS 136"]
    var courses2015 = ["MATH 135", "MATH 136"]
    if (year == "2018") {
      for (i = 0; i < 2; i++) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(courses2018[i]));
        ul.appendChild(li);
      }

    } else if (year == "2015") {
      for (i = 0; i < 2; i++) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(courses2015[i]));
        ul.appendChild(li);
      }
    }

}
