// З масива людей(people) Вам потрібно знайти людину за іменем(name)
function findByName(people, name) {
  for (let i = 0; i < people.length; i++) {
    const person = people[i];
    if (person.name === name) {
      return person;
    }
  }
}

module.exports = findByName;