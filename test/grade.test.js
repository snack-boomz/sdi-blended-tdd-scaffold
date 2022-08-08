const IndividualClass = require('../src').IndividualClass;
const Teacher = require('../src').Teacher;
const Student = require('../src').Student;
const Grade = require('../src').Grade;



describe('Grade', () => {
    describe('instantiates a new Grade', () => {
      test('takes arguments of array of individualClasses and graduationYear', () => {
        const teacher = new Teacher('Jane Doe', 'Biology', 'UCLA', 6);
        const student1 = new Student('Jane Doe', 12, 6, [65,87,100], 2020, ['wrestling', 'lifting', 'studying']);
        const student2 = new Student('Jane Doe', 12, 6, [65,87,100], 2020, ['wrestling', 'lifting', 'studying']);
        const individualClass = new IndividualClass('Math', 6, teacher, [student1, student2]);
        const grade1 = new Grade([individualClass], 2020);
        expect(grade1.individualClasses).toStrictEqual([individualClass]);
        expect(grade1.graduationYear).toBe(2020);
      })
    });
    describe('getStudentCount', () => {
        test('returns the number of students in the grade', () => {
            const teacher = new Teacher('Jane Doe', 'Biology', 'UCLA', 6);
            const student1 = new Student('Jane Doe', 12, 6, [65,87,100], 2020, ['wrestling', 'lifting', 'studying']);
            const student2 = new Student('Jane Doe', 12, 6, [65,87,100], 2020, ['wrestling', 'lifting', 'studying']);
            const individualClass = new IndividualClass('Math', 6, teacher, [student1, student2]);
            const grade1 = new Grade([individualClass], 2020);
            expect(grade1.getStudentCount()).toBe(2);
        })
    });
    describe('calculatedGradeAverage', () => {
        test('returns the average of all the student grades', () => {
            const teacher = new Teacher('Jane Doe', 'Biology', 'UCLA', 6);
            const student1 = new Student('Jane Doe', 12, 6, [60,80,100], 2020, ['wrestling', 'lifting', 'studying']);
            const student2 = new Student('Jane Doe', 12, 6, [60,80,100], 2020, ['wrestling', 'lifting', 'studying']);
            const individualClass = new IndividualClass('Math', 6, teacher, [student1, student2]);
            const grade1 = new Grade([individualClass], 2020);
            expect(grade1.calculatedGradeAverage()).toBe(80);
        });
    })
    describe('addIndividualClass', () => {
        test('adds an individual class to the individual classes array', () => {
            const teacher = new Teacher('Jane Doe', 'Biology', 'UCLA', 6);
            const student1 = new Student('Jane Doe', 12, 6, [60,80,100], 2020, ['wrestling', 'lifting', 'studying']);
            const student2 = new Student('Jane Doe', 12, 6, [60,80,100], 2020, ['wrestling', 'lifting', 'studying']);
            const individualClass = new IndividualClass('Math', 6, teacher, [student1, student2]);
            const grade1 = new Grade([individualClass], 2020);
            const newClass = new IndividualClass('Science', 6, teacher, [student1, student2]);
            grade1.addIndividualClass(newClass);
            expect(grade1.individualClasses.pop()).toBe(newClass);
        })
    })
});

