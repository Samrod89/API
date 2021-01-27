export default class UI {
    static correctAnswers = []
    static printCategories(categories) {
        const container = document.getElementById('categories');
        categories.forEach(category => {
            container.innerHTML += `<option value="${category.id}">${category.name}</option>`;
        });
    }
    static printQuestions(questions) {
        const container = document.getElementById('questions-container');
        container.innerHTML = '';
        if(questions[0].type === "multiple") {
            questions.forEach((question) => {
                container.innerHTML += `<div class="col-md-4 mt-4">
                                            <div class="card h-100 bg-dark shadow-card">
                                                <div class="card-body">
                                                <h3>${question.question}</h3>
                                                    
                                                        <div name="respuestas" class="form-check">
                                                        <input required="required" class="form-check-input" name="${question.question}" type="radio" value="${question.incorrect_answers[0]}" id="${question.incorrect_answers[0]}">
                                                        <label class="form-check-label" for="${question.incorrect_answers[0]}">
                                                        ${question.incorrect_answers[0]}
                                                        </label>
                                                        </div>
                                                        <div class="form-check">
                                                        <input required="required" class="form-check-input" name="${question.question}" type="radio" value="${question.correct_answer}" id="${question.correct_answer}">
                                                        <label class="form-check-label" for="${question.correct_answer}">
                                                        ${question.correct_answer}
                                                        </label>
                                                        </div>
                                                        <div class="form-check">
                                                        <input required="required" class="form-check-input" name="${question.question}" type="radio" value="${question.incorrect_answers[2]}" id="${question.incorrect_answers[2]}">
                                                        <label class="form-check-label" for="${question.incorrect_answers[2]}">
                                                        ${question.incorrect_answers[2]}
                                                        </label>
                                                        </div>
                                                        <div class="form-check">
                                                        <input required="required" class="form-check-input" name="${question.question}" type="radio" value="${question.incorrect_answers[1]}" id="${question.incorrect_answers[1]}">
                                                        <label class="form-check-label" for="${question.incorrect_answers[1]}">
                                                        ${question.incorrect_answers[1]}
                                                        </label>
                                                        </div>
                                                    
                                                
                                                </div>   
                                                </div>
                                            </div>
                                        </div>`;
            })
        }
        else {
            questions.forEach((question) => {
                container.innerHTML += `<div class="col-md-4 mt-4">
                                            <div class="card h-100 bg-dark shadow-card"> 
                                                <div class="card-body" >
                                                    <h3>${question.question}</h3>
                                                            <div class="form-check">
                                                                <input required="required" class="form-check-input" type="radio" value='${question.incorrect_answers[0]}' name="${question.question}" id="${question.incorrect_answers[0]}+${question.question}">
                                                                <label class="form-check-label" for="${question.incorrect_answers[0]}+${question.question}">
                                                                        ${question.incorrect_answers[0]}
                                                                </label>
                                                            </div>
                                                            <div class="form-check">
                                                                <input required="required" class="form-check-input"  type="radio"  value='${question.correct_answer}' name="${question.question}" id="${question.correct_answer}+${question.question}">
                                                                <label class="form-check-label" for="${question.correct_answer}+${question.question}">
                                                                        ${question.correct_answer}
                                                                </label>
                                                            </div>   
                                                </div>
                                            </div>
                                        </div>`;
            })
         };
         questions.forEach(element => {
             this.correctAnswers.push(element.correct_answer)
         })
        
    }


    static GetAnswers() {
        // primero obtener las respuestas correctas 
       let correctAnswers = this.correctAnswers;
       const print = document.getElementById('print');
        let LaRespuesta = document.querySelectorAll(".form-check-input:checked");
        let count = 0;
        LaRespuesta.forEach(element => {
            correctAnswers.forEach(ver => {
                if(element.value == ver){
                    count += 100/LaRespuesta.length;
                }
            })

        })

        print.innerHTML = `<div class ='text-color'>
                            <p>Tu puntaje es de: ${count}%</p>
                           </div>`;
        count = 0;
    }
}
