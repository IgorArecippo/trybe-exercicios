function handleSubmit(event) {
    event.preventDefault();
}

function clearFields(){
    const formElements = document.querySelectorAll('input');
    const textArea = document.querySelector('textarea');
    for (indice in formElements) {
        const userInput = formElements[indice]
        userInput.value = '';
        userInput.checked = false;
    }
    textArea.value = '';
}

window.onload = function () {
    const clearBtn = document.querySelector('#clear-btn');
    clearBtn.addEventListener('click', clearFields);
    const submitBtn = document.querySelector('#submit-btn');
    submitBtn.addEventListener('click', handleSubmit);
  };



