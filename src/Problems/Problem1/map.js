const users = [
  {
    id: 2,
    name: "Jonathon Haley",
    username: "Monte.Weber2",
    email: "Daphne43@yahoo.com",
    phone: "1-563-675-1857 x11708",
    website: "carmela.net",
    password: "hashed_password",
    ages: 34,
  },
  {
    id: 3,
    name: "Dean John",
    username: "dd.1",
    email: "deno@google.com",
    phone: "1-123-543-1857 123212",
    website: "dd.net",
    password: "Dean_hashed_password",
    ages: 23,
  },
];

/////Q1. Write a function to add a new record at the end of array users using spread operator,////////

function addLast(users, temp) {
  return [...users, temp];
}
const newUser = {
  id: 4,
  name: "Akbar",
  username: "akbar",
  email: "akbar@example.com",
  phone: "1-800-123-4567",
  website: "akbar.com",
  password: "password_password",
  ages: 29,
};
const updatedUsers = addLast(users, newUser);
console.log(updatedUsers);

//////Q2. Write a  function to add a new record at the begining of array users using spread operator./////
function addFirst(users, temp) {
  return [temp, ...users];
}
const newUser1 = {
  id: 1,
  name: "vsh solutions",
  username: "vshsolutions",
  email: "vshsolutions@example.com",
  phone: "1-800-123-4567",
  website: "vshsolutions.com",
  password: "password",
  ages: 25,
};
const updatedUsers1 = addFirst(users, newUser1);
console.log(updatedUsers1);

/////Q3. Write a  function to display all records only 3 fields id,name,username.//////
function display(users) {
  const list = users.map((ele, i) => {
    return { id: ele.id, username: ele.username, name: ele.name };
  });
  return list;
}
console.log(display(users));

/////Q4. Write a  function which will display all records  with name ==='demon'///
function findNameEquals(users) {
  return users.filter((user) => user.name.toLowerCase() === "demon");
}
console.log(findNameEquals(users));

///Q5. Write a  function which will display all the records starting with name 'B' or any character passed as parameter.///
function findSpecificStartChar(users, startChar) {
  return users.filter((user) =>
    user.name.toLowerCase().startsWith(startChar.toLowerCase())
  );
}
console.log(findSpecificStartChar(users, "B"));

/////Q6. Write a  function which will display sum of all ages.////
function findSumAges(users) {
  return users.reduce((sum, user) => sum + user.ages, 0);
}
console.log(findSumAges(users));

///////Q7. Write a  function which will display all the records with only name & ages.////
function findAll(users) {
  return users.map((user) => ({ name: user.name, ages: user.ages }));
}
console.log(findAll(users));

//////Q8. Write a function to display sum of all ages of records having name starting with 'J'/////
function sumAgesWithJ(users) {
  return users
    .filter((user) => user.name.startsWith("J"))
    .reduce((acc, user) => acc + user.ages, 0);
}
console.log(sumAgesWithJ(users));

////////Q9. Write a function which will display all the records in sorting according to names./////

function sorting(data, order) {
  if (order === "ASC") {
    return data.sort((a, b) => a.name.localeCompare(b.name));
  } else if (order === "DESC") {
    return data.sort((a, b) => b.name.localeCompare(a.name));
  } else {
    return "Invalid order";
  }
}
const sortedUsers = sorting(users, "ASC");
console.log(sortedUsers);
const sortedUserss = sorting(users, "DESC");
console.log(sortedUserss);

//////Q10 Delete an object with specific array index.///////
function deleteRecord(users, index) {
  users.splice(index, 1);
  return users;
}
console.log(deleteRecord(users, 1));

//////Q11. Insert an object at specific array index.////
function InsertRecord(users, temp, index) {
  users.splice(index, 0, temp);
  return users;
}
const temp = {
  id: 4,
  name: "Akbar",
  username: "akbar",
  email: "akbar@example.com",
  phone: "1-800-123-4567",
  website: "akbar.com",
  password: "password_password",
  ages: 29,
}

console.log(InsertRecord(users, temp, 1));
