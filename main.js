 //debugger;

const students = [];

const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

const printToDom = (students, textToPrint) => {
  const selectedDiv = document.querySelector(students);
  selectedDiv.innerHTML = textToPrint;
};

const handleStartButtonClick = (e) => {
  hogwartsForm();
};
const handleHouseButtonClick = (e) => {
  studentsForm(students);
};
const getHouse = (e) => {
  e.preventDefault();

  const name = document.querySelector("#Enter-Student-Name").value;
  const house = houses[Math.floor(Math.random() * houses.length)];
  const id = 1;

  const obj = {
    name,
    house,
    id,
  };
  students.push(obj);
  studentsForm(students);
  document.querySelector("form").reset();
};

const hogwartsForm = () => {
  let domString = "";
  domString = ` <div class="form-group">
                    <label for="Label-First-Year-Name">Enter First Year's Name</label>
                    <input type="text" class="form-control" id="Enter-Student-Name">
                    <button type="submit" class="btn btn-light">Your House</button>
                  </div>`;

  printToDom("#student-entry-form", domString);
};
const studentsForm = (students) => {
  let domString = "";
  let i = 0;
  while (i < students.length) {
    domString += `<div class="card my-2" style="width: 25rem;" id=${i}>
                    <div class="card-body">
                      <p class="card-text">${students[i].name}</p>
                      <p class="card-text">${students[i].house}</p>
                      <button type="button" class="btn btn-danger" id="${i}">Expel</button>
                      </div>
                  </div>`;
    i++;
  }

  printToDom("#students", domString);
};

const expelButton = (e) => {
  const targetType = e.target.type;
  const targetId = e.target.id;
  console.log(students);
  if (targetType === "button") {
    students.splice(targetId);
  } 
  studentsForm(students);// refreshes the dom with the new array

  console.log(students);
};

const ButtonEvents = () => {
  document
    .querySelector("#start")
    .addEventListener("click", handleStartButtonClick);
  document.querySelector("#students").addEventListener("click", expelButton);
  document.querySelector("form").addEventListener("submit", getHouse); //submit is for buttons that submit info
};

const init = () => {
  ButtonEvents();
};

init();
