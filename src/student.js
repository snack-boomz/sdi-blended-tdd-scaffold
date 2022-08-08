class Student {
    constructor(name, age, gradeLevel, testScores, graduationYear, activities) {
        this.name = name,
        this.age = age,
        this.gradeLevel = gradeLevel,
        this.testScores = testScores,
        this.graduationYear = graduationYear,
        this.activities = activities
    }

    updateStudentName(name){
        this.name = name;
    }
    incrementAge(){
        return this.age++
    }
    incrementGradeLevel() {
        this.gradeLevel += 1;
    }
    addTestScore(num){
        this.testScores.push(num);
    }
    calculateTestAverages(){
       function getSum(total, num){
        return total + num;
       }
       let totalScore = this.testScores.reduce(getSum, 0);
       let avgScore = totalScore / this.testScores.length;
       return avgScore;
    }
    changeGraduationYear(year){
      this.graduationYear = year;
    }
    addActivity(activity){
        this.activities.push(activity);
    }
    removeActivity(removeElement){
    for(let i = 0; i < this.activities.length; i++)
        if (removeElement === this.activities[i]) {
            this.activities.splice(i, 1)
        }
    }
}


module.exports = Student;