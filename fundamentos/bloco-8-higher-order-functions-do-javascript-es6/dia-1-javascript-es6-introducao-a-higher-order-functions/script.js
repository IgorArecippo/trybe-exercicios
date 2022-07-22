//1
const employeeGenerator = (fullName) => {
    const email = fullName.toLowerCase().split(' ').join('_');
    return {fullName, email: `${email}@trybe.com`};
};

const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'),
      id2: callback('Luiza Drummond'),
      id3: callback('Carla Paiva'),
    }
    return employees;
};

// console.log(employeeGenerator('Igor Arecippo'));
// console.log(newEmployees(employeeGenerator));

//2
const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
};

console.log(lotteryResult(2, numberChecker));

//3
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (rightAnswer, studentAnswer) => {
    if (studentAnswer === rightAnswer){
        return 1;
    }
    if (studentAnswer === 'N.A') {
        return 0;
    }

    return -0.5;
}

const countPoints = (rightAnswers, studentAnswers, action) => {
    let counter = 0;
    for (let index in rightAnswers) {
        const actionReturn = action(rightAnswers[index], studentAnswers[index]);
        counter += actionReturn;
    }
    return `Resultado final: ${counter} pontos.`
};

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS,     compareAnswers));