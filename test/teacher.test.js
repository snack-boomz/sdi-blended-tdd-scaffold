const Teacher = require('../src').Teacher;

describe('Teacher', () => {
  describe('insantiates a new Teacher', () => {
    test('takes the following arguments: name, subjectTaught, universityAttended, yearsAsTeacher', () => {
      const teacher = new Teacher('Jane Doe', 'Biology', 'UCLA', 6);
      expect(teacher.name).toBe('Jane Doe');
      expect(teacher.subjectTaught).toBe('Biology');
      expect(teacher.universityAttended).toBe('UCLA');
      expect(teacher.yearsAsTeacher).toBe(6);
    })
  });
  describe('updateTeacherName', () => {
    test('updates the name of the teacher', () => {
      const teacher = new Teacher('Jane Doe', 'Biology', 'UCLA', 6);
      teacher.updateTeacherName('name')
      expect(teacher.name).toBe('name') // teacher.updateTeacherName()
    })
  });
  describe('changeSubjectTaught', () => {
    test('updates the subject taught by the teacher', () => {
      const teacher = new Teacher('Jane Doe', 'Biology', 'UCLA', 6);
      teacher.changeSubjectTaught('Math');
      expect(teacher.subjectTaught).toBe('Math'); // teacher.changeSubjectTaught()
    })
  });
  describe('updateYearsAsTeacher', () => {
    test('increments the yearsAsTeacher property by one each time it is called', ()=> {
      const teacher = new Teacher('Jane Doe', 'Biology', 'UCLA', 6);
      let oldYears = teacher.yearsAsTeacher;
      teacher.updateYearsAsTeacher();
      expect(oldYears + 1).toBe(teacher.yearsAsTeacher);
    })
  })
})
