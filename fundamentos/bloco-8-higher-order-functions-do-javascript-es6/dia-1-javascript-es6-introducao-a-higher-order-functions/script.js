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