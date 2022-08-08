class Grade {
    constructor(individualClasses, graduationYear){
        this.individualClasses = individualClasses,
        this.graduationYear = graduationYear
    }
    getStudentCount() {
        let totalStudents = 0;
        for (let i = 0; i < this.individualClasses.length; i++) {
            for (let j = 0; j < this.individualClasses[i].students.length; j++) { // this.individualClasses[i].students
                totalStudents++
            }
        }
        return totalStudents;  
    }
    calculatedGradeAverage() {
        let totalScore = 0;
        for (let i = 0; i < this.individualClasses.length; i++) {
            for (let j = 0; j < this.individualClasses[i].students.length; j++) { 
                totalScore += this.individualClasses[i].students[j].calculateTestAverages(); // .calculateTestAverages();
            }
        }
        return totalScore / this.getStudentCount();
    }
    addIndividualClass(newClass) {
        this.individualClasses.push(newClass);
    }
}



module.exports = Grade;