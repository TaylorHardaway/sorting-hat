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

const getHouse = (e) => {
 
  const name = document.querySelector("#Enter-Student-Name").value;// .value is getting the value of the text box(the name in this case).
  if(name === '') // a blank string
  {
    alert("Name must be entered before sort is clicked!");
    return;
  }
 
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
                    <a class="btn btn-light" href="#"  role="button" id="sort">Sort!</a>
                    </div>`;

 
                  printToDom("#student-entry-form", domString);

                  document.querySelector("#sort").addEventListener("click", getHouse); //submit is for buttons that submit info


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
  document.querySelector("#students").addEventListener("click", expelButton);

};
 

const expelButton = (e) => {
  const targetType = e.target.type;
  const targetId = e.target.id;

  if (targetType === "button") {
    students.splice(targetId, 1);
  } 
  studentsForm(students);// refreshes the dom with the new array

  // console.log(students);
};

const ButtonEvents = () => {
  document.querySelector("#start").addEventListener("click", handleStartButtonClick);
};

const init = () => {
  ButtonEvents();
};

init();
