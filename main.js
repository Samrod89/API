import Request from './classes/Request.js';
import UI from './classes/UI.js';



const form = document.querySelector('#form-questions');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    Request.getQuestions()
        .then(response => response.json())
        .then(data => UI.printQuestions(data.results))

});

Request.getCategories()  
    .then(response => response.json())
    .then(data => UI.printCategories(data.trivia_categories))



const form2 = document.querySelector('#respuesta-del-usuario')

form2.addEventListener('submit', (event) => {
    event.preventDefault();
      UI.GetAnswers()
})
