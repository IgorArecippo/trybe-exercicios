function createDaysOfTheWeek() {
    let weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    let weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      let days = weekDays[index];
      let dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

//1
let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth () {
    let getDaysList = document.getElementById('days');

    for (let days of dezDaysList) {
        let day = days;
        let dayItem = document.createElement('li');

        if (day === 24 || day === 31) {
            dayItem.className = 'day holiday';
            dayItem.innerHTML = day;
            getDaysList.appendChild(dayItem);
        } else if (day === 4 || day === 11 || day === 18) {
            dayItem.className =  'day friday';
            dayItem.innerHTML = day;
            getDaysList.appendChild(dayItem);
        } else if (day === 25) {
            dayItem.className = 'day holiday friday';
            dayItem.innerHTML = day;
            getDaysList.appendChild(dayItem);
        } else {
            dayItem.innerHTML = day;
            dayItem.className = 'day';
            getDaysList.appendChild(dayItem);
        }
    };
};
createDaysOfTheMonth();

//2
function createHolidayButton(buttonName) {
    let buttonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonID = 'btn-holiday';

    newButton.innerHTML = buttonName;
    newButton.id = newButtonID;

    buttonContainer.appendChild(newButton);
}

createHolidayButton('Feriados');

//3
function displayHolidays(){
    let getHolidayButton = document.querySelector ('#btn-holiday');
    let getHolidays = document.querySelectorAll('.holiday');
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'black';

    getHolidayButton.addEventListener('click', function(){
        for (let feriado of getHolidays) {
            if (feriado.style.backgroundColor === setNewColor){
                feriado.style.backgroundColor = backgroundColor; 
            } else {
                feriado.style.backgroundColor = setNewColor;
        }
      } 
    });
}
displayHolidays();

//4
function createfridayButton(buttonName){
    let buttonContainer = document.getElementsByClassName('buttons-container')[0];
    let newButton = document.createElement('button');
    let newButtonID = 'btn-friday';

    newButton.innerHTML = buttonName;
    newButton.id = newButtonID
    buttonContainer.appendChild(newButton);
}
createfridayButton('Sexta-feira');