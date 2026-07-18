async function loadStudents(){

    const response = await fetch("http://localhost:3000/students");

    const students = await response.json();

    const tbody = document.querySelector("#studentsTable tbody");

    tbody.innerHTML = "";

    students.forEach(student => {

        tbody.innerHTML += `
            <tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.email}</td>
                <td>${student.course}</td>
                <td>${student.phone}</td>
            </tr>
        `;

    });

}