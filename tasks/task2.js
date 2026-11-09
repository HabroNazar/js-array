const students = [
  { name: "John", age: 20, score: 85 },
  { name: "Jane", age: 22, score: 92 },
  { name: "Jim", age: 19, score: 75 },
  { name: "Jill", age: 21, score: 65 },
  { name: "Jack", age: 23, score: 95 },
];

// Ваше завдання: реалізувати наступні функції

// 1. getTopScoringStudents
// Приймає масив студентів та повертає масив імен студентів, які мають оцінку більше 80
function getTopScoringStudents(students) {
    const names = [];
  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    if (student.score > 80) {
      names.push(student.name);
    }
  }
  return names;
}

// 2. getAverageAge
// Приймає масив студентів та повертає середній вік студентів
function getAverageAge(students) {
  let sum = 0;
  for (let i = 0; i < students.length; i++) {
    sum = sum + students[i].age;
  }
  const average = sum / students.length;
  return average;
}

// 3. addStudent
// Приймає масив студентів та новий об'єкт студента і додає його до масиву
function addStudent(students, student) {
  students.push(student);
  return students;
}

// 4. removeStudentByName
// Приймає масив студентів та ім'я студента, якого потрібно видалити, і повертає новий масив без цього студента
function removeStudentByName(students, name) {
  const result = [];
  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    if (student.name !== name) {
      result.push(student);
    }
  }

  return result;
}

module.exports = { getTopScoringStudents, getAverageAge, addStudent, removeStudentByName };