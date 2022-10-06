// Follow along during the lecture in this file!

/*
function task(id) {
  console.log(`Task ${id}`);
}

function longTask(id) {
  console.log(`Task ${id} started!`);
  // for (let i = 0; i < 5e9; i++) {
    // wait as we do some work!
  // }

  setTimeout(() => {
    console.log(`Task ${id} finished!`);
  }, 5000);
  
}

task(1);
longTask(2);
task(3);
task(4);
*/


function callbackAfterGotJhed(jhed) {
  console.log(jhed);
  getCourses(jhed, callbackAfterGotCourses);
}

function callbackAfterGotCourses(courses) {
  console.log(courses);
}

function getJhed(student) {
  const promise = new Promise((resolve, reject) => {
    let success, jhed;
    // async work
    
    console.log(`Reading ${student} info!`);

    setTimeout(() => {
      jhed = "jdoe23";
      success = true;

      if (success) {
        console.log(`Received ${student} info!`);
        resolve(jhed);
      } else {
        reject(new Error(`Unable to read ${student} info!`));
      }

    }, 5000);

    
  });

  return promise;

}

function getCourses(jhed) {
   return new Promise((resolve, reject) => {

    let success, courses;

    console.log(`Reading ${jhed} courses!`);

    setTimeout(() => {
      courses = ["course-1", "course-2"];
      success = true;
      
      if (success) {
        console.log(`Received ${jhed} courses!`);
        resolve(courses);
      } else {
        reject(new Error(`Unable to get ${jhed}'s courses!`));
      }

    }, 5000);

    
  });
}

function getGrades(jhed, courses) {

  return new Promise((resolve) => {
    let grades;
    console.log(`Reading ${jhed} grades!`);
    
    setTimeout(() => {
      grades = courses.map(c => ({
        course: c,
        grade: "A"
      }));
      
      console.log(`Received ${jhed} courses!`);
      resolve(grades);
    }, 5000);

  });

  
  
  
}

async function work() {
  try {
    const jhed = await getJhed("John Doe");
    const courses = await getCourses(jhed);
    const grades = await getGrades(jhed, courses);
    console.log(grades);
  } catch (err) {
    console.log(err);
  }
}

console.log("Listening to events!");
/* getJhed("John Doe")
  .then((jhed) => getCourses(jhed))
  .then((jhed, courses) => getGrades(jhed, courses))
  .then((grades) => console.log(grades))
  .catch((error) => {console.log(error)}); */

work();

console.log("Still listening to events!");
