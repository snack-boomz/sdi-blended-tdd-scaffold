## TDD in Practice!

For this activity, you and a pair will fulfill the following requirements by test-driving your code!

## FIRST STEP:
Fork & clone this repository

### Remember:
This means you only write code to make failing tests pass. You write a test - then write the code!

This is an Object Oriented project, so use JavaScript Classes to implement the following functionality.


## Repo Directions
- run `npm install` to install dependencies
- run `npm test` to run the tests
- The first test is set up for you! This is to help you get started. You can run `npm test` to see the first passing test/corresponding code.


## Project Specs

You should be following the rules of TDD throughout this project. Before working on a new class or feature, make sure you write a test that will provide coverage for the code you want to write.

### Create a `Teacher` class
    - This class has `name` (string), `subjectTaught` (string), `universityAttended` (string), `yearsAsTeacher` (num) properties
    - This class has methods:
        - `updateTeacherName()` which updates the teacher's name to the input argument
        - `changeSubjectTaught()` which changes the teacher's `subjectTaught` to the input string
        - `updateYearsAsTeacher()` which increments the `yearsAsTeacher` property by 1 each time it is called


### Create a `Student` class
    - This class has a `name` (string), `age` (num), `gradeLevel` (num), `testScores` (array of nums 1-100), `graduationYear` (num), `activities` (array of strings)
    - This class has methods:
        - `updateStudentName()` which updates the student's `name` to the given argument
        - `incrementAge()` which increments the student's `age` by 1 each time it is called
        - `incrementGradeLevel()` which increments the student's `gradeLevel` each time it is called
        - `addTestScore()` which adds a given test score to the `testScores` array
        - `calculateTestAverages()` which calculates the average score of a student's `testScores` array
        - `changeGraduationYear()` which updates a student's `graduationYear` to the input number
        - `addActivity()` which adds an activity to the student's `activities`
        - `removeActivity()` which removes a given activity from the student's `activities`


### Create an `IndividualClass` class
    - This class has `subject` (string), `gradeLevel` (num), `teacher` (One instance of Teacher can only teach one class), and `student` (array of `Student`s) properties
    - This class has method:
        - `updateSubject()` which changes the `subject` value to the input string
        - `changeTeacher()` which changes the `teacher` value to the input Teacher
        - `addStudent()` which adds a `Student` to the `students` array
        - `removeStudent()` which removes a `Student` from the `students` array


### Create a `Grade` class
    - This class has `individualClasses` (array of `IndividualClass` instances) and `graduationYear` (num) properties
    - This class has methods:
      - `getStudentCount()` which returns the total number of students in all the classes of the `Grade`
      - `calculateGradeAverage()` which returns the average of all test scores for all `Student`s in the `Grade`
      - `addIndividualClass()` which adds an `IndividualClass` to the `individualClasses` array

### Create a `School` class
  - This class has `name` (sring), `location` (string), `gradeLevels` (array of numbers, kingergarten being 0), `numberOfStudents` (number), `numberOfTeachers` (number), `teachers` (array of `Teacher`s), `principal` (string), `grades` (array of `Grade`'s), and `mascot` properties
  - This class has methods:
    - `updateName()` that updates the `name` of the school with a given argument
    - `updateLocation()` that updates the `location` with a given argument
    - `updateGradeLevels()` which takes in an array of `gradeLevels` which replaces the schools' existing `gradeLevels` property
    - `removeStudents()` which removes a given # of students from the `numberOfStudents`
    - `addStudents()` which adds a given # of students to the `numberOfStudents`
    - `removeTeacher()` which removes a given teacher from the `teachers` array and decrements the `numberOfTeachers` property
    - `addTeacher()` which adds a given teacher to the `teachers` array and incremenets the `numberOfTeachers` property
    - `updatePrincipal()` which updates the `principal` value to the function't input string
    - `changeMascot()` which updates the `mascot` to the input value
    - `downsize()` which removes an `IndividualClass` from a given `Teacher`. The students in the downsized class should be distributed evenly amongst the remaining classes in the grade.

## Stretch Goals
* Use `Jest` mocks to mock the constructor method of the ES6 classes you wrote
* Create a `District` class that maintains multiple schools and can calculate school and district-wide averages, close down schools if enrollment numbers aren't high enough, and has a `superintendent`.
* Implement some concept of time so each `District` and its `School`s can experience annual growth changes. If numbers for any school, grade, or class get low enough, students and teachers should be shuffled around to be evenly distributed amongst the other classes/schools. No teacher should have more than a 25:1 ratio of students to teachers.