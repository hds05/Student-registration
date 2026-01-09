const h1 = document.createElement('h1');
h1.className= 'wave';
h1.textContent = 'Welcome to the Student Registration Portal';

const p = document.createElement('p');
p.textContent = 'This system allows users to easily register student details by filling out a simple form. It collects essential information such as name, student ID, email, and contact number, securely stores the data using local storage, and helps manage student records efficiently in one place.';



// Created headTitle div for h1 and p
const headTitle = document.createElement("div");
headTitle.classList.add('heading');
headTitle.appendChild(h1);
headTitle.appendChild(p);

// Created main div for form
const main = document.createElement('div')
main.classList.add('main-div')

// container div to contain main and headTitle together
const containerBox = document.createElement('div')
containerBox.classList.add('container')
containerBox.appendChild(headTitle)
containerBox.appendChild(main)
document.body.appendChild(containerBox)

// Creating the form
const form = document.createElement('form');
// form.method = 'post';
// form.action = '/Registere';

// Creating input fields and labels
// Name Field
const labelName = document.createElement('label');
labelName.textContent = 'Name:-';
labelName.classList.add('label')

const nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.placeholder = 'Enter Your Name';
nameInput.classList.add('input');
nameInput.value='';
nameInput.required = true;

// ID Field
const idLabel = document.createElement('label');
idLabel.classList.add('label');
idLabel.textContent = 'Student ID:-';

const idInput = document.createElement('input');
idInput.type = 'number';
idInput.placeholder = 'Enter Your Student ID';
idInput.classList.add('input');
idInput.required = true;

// Email field
const emailLabel = document.createElement('label');
emailLabel.classList.add('label');
emailLabel.textContent = 'Enter your Email Add. :-';

const emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.placeholder = 'Enter Email';
emailInput.classList.add('input');
emailInput.required = true;

// Contact Field
const contactLabel = document.createElement('label');
contactLabel.classList.add('label');
contactLabel.textContent = 'Enter your contact number:-';

const contactInput = document.createElement('input');
contactInput.type = 'tel';
contactInput.maxLength = 10;
contactInput.placeholder = 'Enter Contact Number';
contactInput.classList.add('input');
contactInput.required = true;

// Appending elements to the form
form.appendChild(labelName);
form.appendChild(nameInput);
form.appendChild(idLabel);
form.appendChild(idInput);
form.appendChild(emailLabel);
form.appendChild(emailInput);
form.appendChild(contactLabel);
form.appendChild(contactInput);

// Creating the shadow div
const shadowDiv = document.createElement('div');
shadowDiv.classList.add('shadow-div');
form.appendChild(shadowDiv);

// Creating the button
const buttonDiv = document.createElement('div');
buttonDiv.classList.add('button-div');
form.appendChild(buttonDiv);
const button = document.createElement('button');
button.type = 'submit';
button.textContent = 'Register';
button.classList.add('button');
buttonDiv.appendChild(button);

// Appending the form to the body
main.appendChild(form);

// After form submit
// form.addEventListener('submit', (a)=>{
//     a.preventDefault();

//     const studentData = {
//         Name : nameInput.value,
//         id: idInput.value,
//         email: emailInput.value,
//         contact: contactInput.value
//     }

//     localStorage.setItem('studentData', JSON.stringify(studentData))
//     console.log(localStorage.getItem("studentData"))

// })
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const studentData = {
        Name: nameInput.value,
        id: idInput.value,
        email: emailInput.value,
        contact: contactInput.value
    };

    // Get existing students array or empty array
    const students = JSON.parse(localStorage.getItem('students')) || [];

    // Add new student
    students.push(studentData);

    // Save updated array
    localStorage.setItem('students', JSON.stringify(students));

    // Check in console
    console.log(localStorage.getItem('students'));

    // Optional: reset form
    form.reset();

    // Update table or display
    // displayStudents();
});

