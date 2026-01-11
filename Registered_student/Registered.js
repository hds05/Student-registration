

document.addEventListener('DOMContentLoaded', () => {
    const storedData = localStorage.getItem('students');
    
    if (!storedData || storedData==="[]") {
        let emptyDiv = document.createElement('div')
        emptyDiv.style.display = 'flex';
        emptyDiv.style.justifyContent = 'center'
        emptyDiv.style.alignItems = 'center'
        emptyDiv.style.minHeight = '90vh'
        document.body.appendChild(emptyDiv)
        emptyDiv.innerHTML = '<p class="noData">Oops...No data found 🥲😞</p>';
        return;
        
    }
    const container = document.createElement('div');
    const content = document.createElement('div')

    container.style.backgroundColor = 'black';
    container.appendChild(content)
    
    const students = JSON.parse(storedData);
    const heading = document.createElement('div')
    heading.classList.add('registerHeading')
    const title = document.createElement('span');
    title.classList.add('title')
    title.textContent = 'Registered Students';
    heading.appendChild(title)
    document.body.appendChild(heading);
    
    let registerTable = document.createElement('div')
    registerTable.classList.add('registered-Table')
    const table = document.createElement('table');
    
    // Table Header
    const headerRow = document.createElement('tr');
    ['Name', 'ID', 'Email', 'Contact', 'Action'].forEach(text => {
        const th = document.createElement('th');
        th.textContent = text;
        th.classList.add('tableData')
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);
        
    // Table Rows
    students.forEach((student, index) => {
        const row = document.createElement('tr');
        
        const nameTd = document.createElement('td');
        nameTd.classList.add('tableData')
        nameTd.textContent = student.name;
        
        const idTd = document.createElement('td');
        idTd.classList.add('tableData')
        idTd.textContent = student.id;
        
        const emailTd = document.createElement('td');
        emailTd.classList.add('tableData')
        emailTd.textContent = student.email;
        
        const contactTd = document.createElement('td');
        contactTd.classList.add('tableData')
        contactTd.textContent = student.contact;
        
        const actionTd = document.createElement('td')
        actionTd.classList.add('tableData')

        const editBtn = document.createElement('button')
        editBtn.innerText = '✏️'
        editBtn.classList.add('editBtn')
        editBtn.addEventListener('click', function(){
            editStudent(index);
        })

        const deleteBtn = document.createElement('button')
        deleteBtn.innerText = '🗑️'
        deleteBtn.classList.add('deleteBtn')
        deleteBtn.addEventListener('click', function(){
            deleteStudent(index);
        })

        actionTd.appendChild(editBtn);
        actionTd.appendChild(deleteBtn);

        [nameTd, idTd, emailTd, contactTd, actionTd].forEach(td => {
            td.style.padding = '8px';
            row.appendChild(td);
        });

        table.appendChild(row);
    });
    registerTable.appendChild(table);
    table.style.height = '100%'
    // registerTable.style.overflowY = 'scroll'
    document.body.appendChild(container);
    
    content.appendChild(registerTable)
});

function editStudent(index) {
    const students = JSON.parse(localStorage.getItem('students'));
    const student = students[index];

    const newName = prompt('Edit Name:', student.name);
    const newEmail = prompt('Edit Email:', student.email);
    const newContact = prompt('Edit Contact:', student.contact);

    if (!newName || !newEmail || !newContact) return;

    student.name = newName;
    student.email = newEmail;
    student.contact = newContact;

    students[index] = student;
    localStorage.setItem('students', JSON.stringify(students));

    location.reload();
}


function deleteStudent(index) {
    const students = JSON.parse(localStorage.getItem('students'));

    if (!confirm('Are you sure you want to delete this record?😬')) return;

    students.splice(index, 1);
    localStorage.setItem('students', JSON.stringify(students));

    location.reload(); // simplest way to refresh table
}


// const arr= [5,4,3,2,1]
// Array.prototype.mySort = function(callback){
    
// }