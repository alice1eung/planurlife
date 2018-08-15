const calendarYear = document.querySelector('select[name="calendarYear"]');
const term = document.querySelector('select[name="term"]');
const requiredList = document.querySelector("#requiredCoursesList");

function yearAndTermSubmit() {
  console.log(calendarYear.value + " " + term.value);
  var year = calendarYear.value;

  var courses;
  var requirementData = getRequirementData(year);

  // Empties the list first
  while(requiredList.firstChild) {
    requiredList.removeChild(requiredList.firstChild);
  }

  // Populates the list
  for (let i in requirementData.RequiredCourses) {
    let courseEntry = document.createElement('li');

    for (let j in requirementData.RequiredCourses[i]) {
      courseEntry.appendChild(document.createTextNode(requirementData.RequiredCourses[i][j]))
    }

    requiredList.appendChild(courseEntry);
  }
}

function getRequirementData(year) {
  // returns just one constant object for now
  var reqs2015 = {
    "RequiredCourses": [["MATH 237", "MATH247"], ["MATH 239", "MATH 249"], ["CS 240"], ["CS 241"], ["CS 245"], ["CS 246"], ["CS 251"], ["CS 341"], ["CS 350"]]
  };

  return reqs2015;
}
