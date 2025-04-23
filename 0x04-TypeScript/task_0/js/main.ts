// main.ts

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  age: 28,
  location: 'San Francisco'
};

const student2: Student = {
  firstName: 'James',
  lastName: 'Bond',
  age: 35,
  location: 'London'
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const tableBody = document.createElement('tbody');

studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;
  row.appendChild(firstNameCell);

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;
  row.appendChild(locationCell);

  tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);
