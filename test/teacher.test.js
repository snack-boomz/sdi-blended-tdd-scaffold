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
  })
  // describe('', () => {

  // })
})