const Student = require('../src').Student;

describe('Student', () => {
    describe('insantiates a new Student', () => {
      test('takes the following arguments: name, age, gradeLevel, testScores, graduationYear, activities', () => {
        const student = new Student('Jane Doe', 12, 6, [65,87,100], 2020, ['wrestling', 'lifting', 'studying']);
        expect(student.name).toBe('Jane Doe');
        expect(student.age).toBe(12);
        expect(student.gradeLevel).toBe(6);
        expect(student.testScores).toStrictEqual([65,87,100]);
        expect(student.graduationYear).toBe(2020);
        expect(student.activities).toStrictEqual(['wrestling', 'lifting', 'studying']);
      })
    })

  describe('updateStudentName', () => {
    test('updates the name of the student', () => {
    const student = new Student('Jane Doe', 12, 6, [65,87,100], 2020, ['wrestling', 'lifting', 'studying']);
    student.updateStudentName('name')
    expect(student.name).toBe('name')
  })
  });

  describe('increments students age by 1 each time it is called', ()=> {
      test('incrementAge', () => {
        const student = new Student('Jane Doe', 12, 6, [65,87,100], 2020, ['wrestling', 'lifting', 'studying']);
        let oldAge = student.age;
        student.incrementAge();
        expect(oldAge + 1).toBe(student.age);
  })
})

  describe(`incrementGradeLevel`, () => {
    test(`Increments the student's grade level by 1 each time it is called`, () => {
      const student = new Student('Jane Doe', 12, 6, [65,87,100], 2020, ['wrestling', 'lifting', 'studying']);
      let oldGradeLevel = student.gradeLevel;
      student.incrementGradeLevel();
      expect(oldGradeLevel + 1).toBe(student.gradeLevel);
    });
  });

    describe(`addTestScore`, () => {
        test(`Adds a test score to the student's testScores array`, () => {
            const student = new Student('Jane Doe', 12, 6, [65,87,100], 2020, ['wrestling', 'lifting', 'studying']);;
            let num = 70
            student.addTestScore(num);
            expect(student.testScores.pop()).toBe(num) // testScores.pop()
        })
    })


    describe('calculates the average score of a students testScores array', ()=> {
        test('calculateTestAverages', () => {
            const student = new Student('Jane Doe', 12, 6, [60,80,100], 2020, ['wrestling', 'lifting', 'studying']);
            student.calculateTestAverages();
            expect(student.calculateTestAverages()).toBe(80)
    })
    })

  describe(`changeGraduationYear`, () => {
    test(`Change the student's graduation year when called with an argument`, () => {
      const student = new Student('Jane Doe', 12, 6, [65,87,100], 2020, ['wrestling', 'lifting', 'studying']);
      student.changeGraduationYear(2017);
      expect(student.graduationYear).toBe(2017);
    });
  });
  describe('addActivity', () => {
   test(`adds an activity to the student's activities`, () => {
    const student = new Student('Jane Doe', 12, 6, [65,87,100], 2020, ['wrestling', 'lifting', 'studying']);
    student.addActivity('running');
    expect(student.activities.pop()).toBe('running');
   });
  });

  describe('removeActivity', () => {
   test(`removes an activity to the student's activities`, () => {
    const student = new Student('Jane Doe', 12, 6, [65,87,100], 2020, ['wrestling', 'lifting', 'studying']);
    student.removeActivity('wrestling');
    expect(student.activities).toStrictEqual(['lifting', 'studying'])
   })
  })

});
