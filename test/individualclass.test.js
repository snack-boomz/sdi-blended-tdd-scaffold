const IndividualClass = require('../src').IndividualClass;
const Teacher = require('../src').Teacher;
const Student = require('../src').Student;



describe('IndividualClass', () => {
    describe('instantiates a new IndividualClass', () => {
      test('takes arguments of subject, grade level, teacher, and student', () => {
        const teacher = new Teacher('Jane Doe', 'Biology', 'UCLA', 6);
        const student1 = new Student('Jane Doe', 12, 6, [65,87,100], 2020, ['wrestling', 'lifting', 'studying']);
        const student2 = new Student('Jane Doe', 12, 6, [65,87,100], 2020, ['wrestling', 'lifting', 'studying']);
        const individualClass = new IndividualClass('Math', 6, teacher, [student1, student2]);
        expect(individualClass.subject).toBe('Math');
        expect(individualClass.gradeLevel).toBe(6);
        expect(individualClass.teacher).toBe(teacher);
        expect(individualClass.students).toStrictEqual([student1, student2]);
      })
    });

    describe('updateSubject', () => {
        test('changes the subject to the input subject', () => {
          const teacher = new Teacher('Jane Doe', 'Biology', 'UCLA', 6);
          const student1 = new Student('Jane Doe', 12, 6, [65,87,100], 2020, ['wrestling', 'lifting', 'studying']);
          const student2 = new Student('Jane Doe', 12, 6, [65,87,100], 2020, ['wrestling', 'lifting', 'studying']);
          const individualClass = new IndividualClass('Math', 6, teacher, [student1, student2]);
          individualClass.updateSubject('Science');
        expect(individualClass.subject).toBe('Science');
        })
    });
    describe('changeTeacher', () => {
        test('changes teacher value to the input teacher', () => {
          const teacher = new Teacher('Jane Doe', 'Biology', 'UCLA', 6);
          const student1 = new Student('Jane Doe', 12, 6, [65,87,100], 2020, ['wrestling', 'lifting', 'studying']);
          const student2 = new Student('Jane Doe', 12, 6, [65,87,100], 2020, ['wrestling', 'lifting', 'studying']);
          const individualClass = new IndividualClass('Math', 6, teacher, [student1, student2]);
          individualClass.changeTeacher('name');
          expect(individualClass.teacher).toBe('name')
        })
    });
    describe('addStudent', () => {
        test('adds a student to the student array', () => {
            const teacher = new Teacher('Jody Smith', 'Biology', 'UCLA', 6);
            const student1 = new Student('Jane Doe', 12, 6, [65,87,100], 2020, ['wrestling', 'lifting', 'studying']);
            const student2 = new Student('John Smith', 12, 6, [65,87,100], 2020, ['wrestling', 'lifting', 'studying']);
            const individualClass = new IndividualClass('Math', 6, teacher, [student1]);
            individualClass.addStudent(student2);
            expect(individualClass.students).toStrictEqual([student1, student2]);
        })
    });
    describe('removeStudent', () => {
        test('removes a student', () => {
          const teacher = new Teacher('Jane Doe', 'Biology', 'UCLA', 6);
          const student1 = new Student('Jane Doe', 12, 6, [65,87,100], 2020, ['wrestling', 'lifting', 'studying']);
          const student2 = new Student('Jane Doe', 12, 6, [65,87,100], 2020, ['wrestling', 'lifting', 'studying']);
          const individualClass = new IndividualClass('Math', 6, teacher, [student1, student2]);
          individualClass.removeStudent(student2);
          expect(individualClass.students).toStrictEqual([student1]);
        })
    });
});

