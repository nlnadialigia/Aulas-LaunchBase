// ORGANIZAÇÃO, PADRINIZAÇÃO E ESCRITA

const classA = [
  {
    name: "Mayk",
    grade: 9.8,
  },
  {
    name: "Diego",
    grade: 10,
  },
  {
    name: "Fulano",
    grade: 2,
  },
  {
    name: "Mai um student",
    grade: 10,
  },
];

const classB = [
  {
    name: "Cleiton",
    grade: 10,
  },
  {
    name: "Robson",
    grade: 10,
  },
  {
    name: "Ciclano",
    grade: 0,
  },
  {
    name: "Novo student",
    grade: 5,
  },
];

function calculateAverege(students) {
  let sum = 0;
  
  for (let i = 0; i < students.length; i++) {
    sum = sum + students[i].grade;
  }

  const avarege = sum / students.length;
  
  return avarege;
}

function sendMessage(avarege, turma) {
  if (avarege > 5) {
    console.log(`${turma} avarege: ${avarege}. Congrats!`);
  } else {
    console.log(`${turma} avarege: ${avarege}. Is not good.`);
  }
}

function markAsFlunked(student) {
  student.flunked = false;
  
  if (student.grade < 5) {
    student.flunked = true;
  }
}

function sendFlunkedMessage(student) {
  
    if (student.flunked) {
    console.log(`${student.name} flunked!`);
  }
}

function studentsReprovado(students) {
  
    for (let student of students) {
    markAsFlunked(student);
    sendFlunkedMessage(student);
  }
}

const avarege1 = calculateAverege(classA);
const avarege2 = calculateAverege(classB);

sendMessage(avarege1, "class A");
sendMessage(avarege2, "class B");

studentsReprovado(classA);
studentsReprovado(classB);
