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

//5
function modifyFriday(fridayArray){
    let getFridayButton = document.querySelector('#btn-friday');
    let fridays = document.getElementsByClassName('friday');
    let newFriday = 'SEXTA-CHEIRA';

    getFridayButton.addEventListener('click', function(){
        for (index in fridays){
            if (fridays[index].innerHTML !== newFriday){
                fridays[index].innerHTML = newFriday
            } else {
                fridays[index].innerHTML = fridayArray[index];
            }
        }
    })
}
let decemberFridays = [4, 11, 18, 25];
modifyFriday(decemberFridays);

//6
function lupaOver(){
    let days = document.getElementById('days');
    days.addEventListener('mouseover', function(event){
        event.target.style.fontSize = '30px';
        event.targer.style.fontWeight = '600';
    });
}

function lupaOut(){
    let days = document.getElementById('days');
    days.addEventListener('mouseout', function(event){
        event.target.style.fontSize = '20px';
        event.targer.style.fontWeight = '200';
    });
}
lupaOut();
lupaOver();

//7
function newTask(tarefa){
    let taskContainer = document.getElementsByClassName('my-tasks')[0];
    let taskName = document.createElement('span');

    taskName.innerHTML = tarefa;
    taskContainer.appendChild(taskName);
}
newTask('estudar');

//8
function newTaskDiv(color){
    let newTaskContainer = document.querySelector('.my-tasks');
    let newTaskName = document.createElement('div');

    newTaskName.className = 'task';
    newTaskName.style.backgroundColor = color;
    newTaskContainer.appendChild(newTaskName);
}
newTaskDiv('lightgreen');

//9
function selectTask(){
    let selectedTask = document.getElementsByClassName('task selected');
    let myTasks = document.querySelector('.task');

    myTasks.addEventListener('click', function(event){
        if(selectedTask.length === 0){
            event.target.className = 'task selected';
        }else{
            event.target.className ='task';
        }
    });
}
selectTask();

//10
function setDayColor(){
    let selectedTask = document.getElementsByClassName('task selected');
    let days = document.getElementById('days');
    let taskDiv = document.querySelector('.task');
    let taskColor = taskDiv.style.backgroundColor;

    days.addEventListener('click', function(event){
        let eventTargetColor = event.target.style.color;
        if (selectedTask.length > 0 && eventTargetColor !== taskColor){
            let color = selectedTask[0].style.backgroundColor;
            event.target.style.color = color;
        } else if (eventTargetColor === taskColor){
            event.target.style.color = 'rgb(119,119,119)';
        }
    });
}
setDayColor();