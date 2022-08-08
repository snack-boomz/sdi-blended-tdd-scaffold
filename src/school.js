class School {
    constructor(name, location, gradeLevels, numberOfStudents, numberOfTeachers, teachers, principal, grades, mascot){
        this.name = name;
        this.location = location;
        this.gradeLevels = gradeLevels;
        this.numberOfStudents = numberOfStudents;
        this.numberOfTeachers = numberOfTeachers;
        this.teachers = teachers;
        this.principal = principal;
        this.grades = grades;
        this.mascot = mascot;
    }
    updateName(newName) {
        this.name = newName;
    }
    updateLocation(newLocation) {
        this.location = newLocation;
    }
    updateGradeLevels(newGradeLevels) {
        this.gradeLevels = newGradeLevels;
    }
    removeStudents(num) {
        this.numberOfStudents -= num;
    }
    addStudents(num) {
        this.numberOfStudents += num;
    }
    removeTeachers(teacher) {
        for(let i = 0; i < this.teachers.length; i++) {
            if(this.teachers[i] === teacher) {
                this.teachers.splice(i, 1);
            }
        }
        this.numberOfTeachers --;
    }      
    addTeachers(teacher) {
        this.teachers.push(teacher);
            this.numberOfTeachers ++;
    }  
    updatePrincipal(newPrincipal) {
        this.principal = newPrincipal;
    }
    changeMascot(mascot) {
        this.mascot = mascot;
    }

    //remove an IndividualClass from a given teacher. the students in that class should be evenly distributed
    downsize(teacher) {
        let newArr =[];
        
        for(let i = 0; i < this.grades.length; i++) {
           for (let j = 0; j < this.grades[i].length; j++) {
            
          }
        
          

          
            if(this.grades[0].teacher === teacher) {
                newArr.push(this.grades[0].students)
                
                this.grades.splice(i, 1);
            }

    }
}







module.exports = School;