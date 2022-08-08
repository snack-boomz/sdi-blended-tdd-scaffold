const IndividualClass = require('../src').IndividualClass;
const Teacher = require('../src').Teacher;
const Student = require('../src').Student;
const Grade = require('../src').Grade;
const School = require('../src').School;


const teacher1 = new Teacher('Jane Doe', 'Biology', 'UCLA', 6);
const teacher2 = new Teacher('John Smith', 'Biology', 'UCLA', 6);
const student1 = new Student('Jane Doe', 12, 6, [65,87,100], 2020, ['wrestling', 'lifting', 'studying']);
const student2 = new Student('Jane Doe', 12, 6, [65,87,100], 2020, ['wrestling', 'lifting', 'studying']);
const student3 = new Student('Jane Doe', 12, 6, [65,87,100], 2020, ['wrestling', 'lifting', 'studying']);
const individualClass1 = new IndividualClass('Math', 6, teacher1, [student1, student2, student3]);
const individualClass2 = new IndividualClass('English', 6, teacher1, [student1, student2, student3]);
const individualClass3 = new IndividualClass('Biology', 6, teacher2, [student1, student2, student3]);
const individualClass4 = new IndividualClass('Social Studies', 6, teacher2, [student1, student2, student3]);
const grade1 = new Grade([individualClass1, individualClass2], 2020);
const grade2 = new Grade([individualClass3, individualClass4], 2020);
const school = new School('UNC', 'Chapel Hill', [13,14,15,16], 100, 10, [teacher1, teacher2], 'Mr. Bean', [grade1, grade2], 'Ramses');


describe('School', () => {
    describe('instantiates a new School', () => {
      test('takes arguments of name, location, an array of numbers called gradeLevels, numberOfStudents, numberOfTeachers, an array of Teachers (Teacher objects) called teachers, principal, an array of Grades (Grade objects), and mascot', () => {
        expect(school.name).toEqual('UNC');
        expect(school.location).toBe('Chapel Hill');
        expect(school.gradeLevels).toStrictEqual([13,14,15,16]);
        expect(school.numberOfStudents).toBe(100);
        expect(school.numberOfTeachers).toBe(10);
        expect(school.teachers).toStrictEqual([teacher1, teacher2]);
        expect(school.principal).toBe('Mr. Bean');
        expect(school.grades).toStrictEqual([grade1, grade2]);
        expect(school.mascot).toBe('Ramses');
      })
    });
    
    describe('updateName', () => {
      test('updates name of school w given argument', () => {
        let newName = 'Michigan';
        school.updateName(newName);
        expect(school.name).toBe(newName);
      })
    });
    describe('updateLocation', () => {
      test('updates location of school w given argument', () => {
        let newLocation = 'Michigan';
        school.updateLocation(newLocation);
        expect(school.location).toBe(newLocation);
      })
    });
    describe('updateGradeLevels', () => {
      test('replaces current array of grade levels with new array of grade level', () => {
        let newGradeLevels = [1,2,3,4];
        school.updateGradeLevels(newGradeLevels);
        expect(school.gradeLevels).toStrictEqual(newGradeLevels);
      })
    });
    describe('removeStudents', () => {
      test('removes a given number of students from numberOfStudents', () => {
        let removeNumberOfStudents = 1;
        school.removeStudents(removeNumberOfStudents);
        expect(school.numberOfStudents).toStrictEqual(99);
      })
    });
    describe('addStudents', () => {
        test('adds a given number of students from numberOfStudents', () => {
          let addNumberOfStudents = 1;
          school.addStudents(addNumberOfStudents);
          expect(school.numberOfStudents).toStrictEqual(100);
        })
      });
    describe('removeTeacher', () => {
      test('removes a given teacher from the teachers array and decrements the numberOfTeachers property', () => {
        school.removeTeachers(teacher1);
        expect(school.teachers).toStrictEqual([teacher2]);
        expect(school.numberOfTeachers).toBe(9);
      })
    });
     describe('addTeacher', () => {
       test('removes a given teacher from the teachers array and decrements the numberOfTeachers property', () => {
         school.addTeachers(teacher1);
         expect(school.teachers).toStrictEqual([teacher2, teacher1]);
         expect(school.numberOfTeachers).toBe(10);
       })
     });
     describe('updatePrincipal', () => {
       test('updates principal value from input arg', () => {
         school.updatePrincipal('Yurr');
         expect(school.principal).toBe('Yurr');
       })
     });
     describe('changeMascots', () => {
       test('updates mascot value from input arg', () => {
         school.changeMascot('Doggy');
         expect(school.mascot).toBe('Doggy');
       })
     });
     describe('downsize', () => {
       test('removes an IndividualClass from a given Teacher. remaining students distributed evenly', () => {
         school.downsize("teacher");
         expect(school.downsize).toBe("nothing");
       })
     });
    
});

