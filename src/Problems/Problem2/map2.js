const persons = [
  {
    name: "Joe",

    animals: [
      {
        species: "dog",
        name: "Bolt",
        age: 23,
      },
      {
        species: "cat",
        name: "Billy",
        age: 24,
      },
    ],
  },
  {
    name: "Bob",
    animals: [
      {
        species: "dog",
        name: "Snoopy",
        age: 20,
      },
    ],
  },

  {
    name: "Slobby",
    animals: [
      {
        species: "cat",
        name: "Snoopy",
        age: 15,
      },
      {
        species: "turtle",
        name: "cappy",
        age: 15,
      },
      {
        species: "dog",
        name: "cappy",
        age: 10,
      },
    ],
  },
];

//Q1. Display only person names//
persons.forEach((person) => {
  console.log(person.name);
});
const names = persons.map((person) => person.name);
console.log(names);

//Q2. Display only person animals list.//
persons.forEach((person) => {
  console.log(`${person.name}'s animals:`);
  person.animals.forEach((animal) => {
    console.log(
      `  - ${animal.species}: ${animal.name}, ${animal.age} years old`
    );
  });
});

//Q3. Display the total count of animals in person array.//
const totalAnimals = persons.reduce((count, person) => {
  return count + person.animals.length;
}, 0);
console.log(`Total number of animals in the array: ${totalAnimals}`);

//Q4. Display all names of owner who has species as dog//
const dogOwners = persons.filter((person) => {
  return person.animals.some((animal) => {
    return animal.species === "dog";
  });
});
const dogOwnerNames = dogOwners.map((owner) => {
  return owner.name;
});
console.log(`Owners who have dogs: ${dogOwnerNames}`);

//Q5. Display all names of owner who has species as dog and turtle//
const dogAndTurtleOwners = persons.filter((person) => {
  const species = person.animals.map((animal) => animal.species);
  return species.includes("dog") && species.includes("turtle");
});
const dogAndTurtleOwnerNames = dogAndTurtleOwners.map((owner) => owner.name);
console.log(dogAndTurtleOwnerNames);

///Q6. Does all owner has dog as species Justify.//

const allOwnersHaveDogs = persons.every((person) => {
  return person.animals.some((animal) => animal.species === "dog");
});
console.log(allOwnersHaveDogs);

//Q7. Does some owner has turtle please specify name of turtle.//
const turtles = persons
  .filter((person) =>
    person.animals.some((animal) => animal.species === "turtle")
  )
  .map((person) =>
    person.animals.filter((animal) => animal.species === "turtle")
  )
  .flat()
  .map((turtle) => turtle.name);
console.log(turtles);

//Q8 Display name of Owner along with his total count of animals.//
for (let i = 0; i < persons.length; i++) {
  const owner = persons[i];
  const animalCount = owner.animals.length;
  console.log(`${owner.name} has ${animalCount} animals.`);
}

//Q9 Display list of all animals.//
const allAnimals = persons.flatMap((person) => person.animals);
allAnimals.forEach((animal) => {
  console.log(
    `Name: ${animal.name}, Species: ${animal.species}, Age: ${animal.age}`
  );
});

///Q10.Display list of only dogs///
const dogs = persons.flatMap((person) =>
  person.animals.filter((animal) => animal.species === "dog")
);
console.log(dogs);

//Q11 Display the count of all dogs in Array persons.//

let dogCount = 0;
for (const person of persons) {
  for (const animal of person.animals) {
    if (animal.species === "dog") {
      dogCount++;
    }
  }
}
console.log("Number of dogs: " + dogCount);

/////Q12 Display names of owner who has all species such as dog cat and turtle. give me the output in console///

const ownersWithAllSpecies = persons
  .filter((person) => {
    const animalSpecies = person.animals.map((animal) => animal.species);
    return (
      animalSpecies.includes("dog") &&
      animalSpecies.includes("cat") &&
      animalSpecies.includes("turtle")
    );
  })
  .map((person) => person.name);
console.log(ownersWithAllSpecies);

/////Q13 Display the record for species as dog and name as 'Snoopy'////
const result = persons.filter((person) => {
  return person.animals.some((animal) => {
    return animal.species === "dog" && animal.name === "Snoopy";
  });
});
console.log(result);

///Q14. Sort all records based on name of owner in ascending and descending///
persons.sort((a, b) => a.name.localeCompare(b.name));
console.log(persons);
persons.sort((a, b) => b.name.localeCompare(a.name));
console.log(persons);

////Q15 Display list of all dogs whose name starts with 'S'//
const dogsStartingWithS = [];
persons.forEach((person) => {
  person.animals
    .filter((animal) => animal.species === "dog" && animal.name.startsWith("S"))
    .forEach((dog) => dogsStartingWithS.push(dog));
});
console.log(dogsStartingWithS);

//Q16 Display list average ages of animal species. //
const speciesAges = {};
persons.forEach((person) => {
  person.animals.forEach((animal) => {
    if (speciesAges[animal.species]) {
      speciesAges[animal.species].sum += animal.age;
      speciesAges[animal.species].count++;
    } else {
      speciesAges[animal.species] = {
        sum: animal.age,
        count: 1,
      };
    }
  });
});
for (const species in speciesAges) {
  const avgAge = speciesAges[species].sum / speciesAges[species].count;
  console.log(`Average age for ${species}: ${avgAge}`);
}

///Q17 Display average age of dogs//////
const dogss = persons.flatMap((person) =>
  person.animals.filter((animal) => animal.species === "dog")
);
const averageAge = dogss.reduce((sum, dog) => sum + dog.age, 0) / dogss.length;
console.log(`The average age of dogs is ${averageAge}`);

//Q18 Display sum of all ages of animals.//
let sum = 0;
persons.forEach((person) => {
  person.animals.forEach((animal) => {
    sum += animal.age;
  });
});
console.log(sum);

////Q19 Display sum of all ages of animals whose species is turtle.///
const sum1 = persons.reduce((acc, person) => {
  return (
    acc +
    person.animals
      .filter((animal) => animal.species === "turtle")
      .reduce((acc, turtle) => acc + turtle.age, 0)
  );
}, 0);
console.log(sum1);

//Q20 Find list of animals and then sort on animal names//
const allAnimalss = persons.flatMap((person) => person.animals);
const sortedAnimals = allAnimalss.sort((a, b) => a.name.localeCompare(b.name));
console.log(sortedAnimals);
