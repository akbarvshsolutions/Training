const family = [
  { name: "Jack", age: 26 },
  { name: "Jill", age: 22 },
  { name: "James", age: 5 },
  { name: "Jenny", age: 2 },
];

/////Q1. Write a function which will display all the name with age > 26///
function findAge(family) {
  const filteredFamily = family.filter((person) => person.age > 26);
  const names = filteredFamily.map((person) => person.name);
  return names;
}
const olderNames = findAge(family);
console.log(olderNames);

////Q2. Write a  function which will display all the records starting with name 'J' or any character passed as parameter.///
function findSpecificStartChar(family, startChar) {
  const filteredFamily = family.filter((person) =>
    person.name.startsWith(startChar)
  );
  return filteredFamily;
}
const specificNames = findSpecificStartChar(family, "J");
console.log(specificNames);

///Q3. Write a  function which will display all the records ending  with name  'nny' or any character passed as parameter.///
function findSpecificEndChar(family, endChar) {
  const filteredFamily = family.filter((person) =>
    person.name.endsWith(endChar)
  );
  return filteredFamily;
}
const specificNamess = findSpecificEndChar(family, "nny");
console.log(specificNamess);

////Q4. Write a  function which will display all the records with only name.///
function findAllNames(family) {
  const names = family.map((person) => person.name);
  return names;
}
const allNames = findAllNames(family);
console.log(allNames);

////Q5. Write a  function which will display all the records in sorting according to names.////

function sortByName(arr, order) {
  if (order === "ASC") {
    return arr.sort((a, b) => a.name.localeCompare(b.name));
  } else if (order === "DESC") {
    return arr.sort((a, b) => b.name.localeCompare(a.name));
  } else {
    return arr;
  }
}
console.log(sortByName(family, "ASC"));
console.log(sortByName(family, "DESC"));
