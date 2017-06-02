/*Розширити програму-анкету для опитування
 У вас має бути форма. В ній випадаючий список з питаннями і кнопка "Вибрати".
 Також має бути друга форма, де є текстове поле (textarea) для вводу відповіді і кнопка - "Відповісти".
 Під формами має бути список (ul), де будуть відображатись відповіді в такому форматі - {Питання} - {Відповідь}.
 Після того, як ви відповіли на питання, воно пропадає з випадаючого списку і додається до списку відповідей.
 Бажано це все гарно оформити.
 */

var formQuestion = document.querySelector("#formQuestion");
var formInputText = document.querySelector("#formInputText");
var list = document.querySelector("#list");
var que = document.querySelectorAll(".question");
var option = document.forms[0][0];
var question;


formQuestion.addEventListener("submit", function (e) {
    e.preventDefault();

    for(var i = 0; i < que.length; i++ ){
        if (que[i].selected == true)
            question = que[i].textContent;
    }

    formInputText.addEventListener("submit", function (e) {
        e.preventDefault();
        var answer = formInputText.answer.value;

        if ( !answer == "" ){
            var li = document.createElement("li");
            li.textContent = question + " - " + answer;
            list.insertBefore(li,list.childNodes[0]);
            formInputText.answer.value = "";

            for(var i = 0; i < option.length; i++ ){
               if (document.forms[0][0][i].textContent == question){
                  document.forms[0][0].removeChild(document.forms[0][0][i]);
                }
            }
        }
    });
});

