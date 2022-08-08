class IndividualClass {
  constructor(subject, gradeLevel, teacher, students) {
      this.subject = subject,
      this.gradeLevel = gradeLevel,
      this.teacher = teacher,
      this.students = students
  }
  updateSubject(subject) {
    this.subject = subject;
  }
  changeTeacher(teacher) {
    this.teacher = teacher;
  }
  addStudent(student) {
    this.students.push(student);
  }
  removeStudent(student) {
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i] === student) {
        this.students.splice(i, 1);
      }
    }
  }
}

module.exports = IndividualClass;