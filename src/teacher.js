class Teacher {
  constructor(name, subjectTaught, universityAttended, yearsAsTeacher) {
      this.name = name,
      this.subjectTaught = subjectTaught,
      this.universityAttended = universityAttended,
      this.yearsAsTeacher = yearsAsTeacher
  }
  updateTeacherName(name) {
    this.name = name;
  }
  changeSubjectTaught(subjectTaught) {
    this.subjectTaught = subjectTaught;
  }
  updateYearsAsTeacher(){
    return this.yearsAsTeacher++;
  }
}

module.exports = Teacher;