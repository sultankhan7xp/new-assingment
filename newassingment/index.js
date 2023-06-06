// Student data array
var students = [
    { name: "Sultan khan", maths: 80, english: 90, science: 85 },
    { name: "koi bhi khan", maths: 75, english: 85, science: 95 },
    // ... Add more students here ...
  ];
  
  // Generate results for 100 students (you can modify this loop to add your own students)
  for (var i = 1; i <= 100; i++) {
    var student = {
      name: "Student " + i,
      maths: Math.floor(Math.random() * 101),
      english: Math.floor(Math.random() * 101),
      science: Math.floor(Math.random() * 101)
    };
    students.push(student);
  }
  
  // Calculate total marks and percentage for each student
  for (var i = 0; i < students.length; i++) {
    var student = students[i];
    student.totalMarks = student.maths + student.english + student.science;
    student.percentage = (student.totalMarks / 300) * 100;
  }
  
  // Sort students by percentage in descending order
  students.sort(function(a, b) {
    return b.percentage - a.percentage;
  });
  
  // Display all students in the table
  var table = document.getElementById("resultTable");
  for (var i = 0; i < students.length; i++) {
    var student = students[i];
    var row = table.insertRow(-1);
    row.insertCell(0).textContent = student.name;
    row.insertCell(1).textContent = student.maths;
    row.insertCell(2).textContent = student.english;
    row.insertCell(3).textContent = student.science;
    row.insertCell(4).textContent = student.totalMarks;
    row.insertCell(5).textContent = student.percentage.toFixed(2) + "%";
    
    if (i < 3) {
      row.classList.add("position-holder");
    }
  }
  