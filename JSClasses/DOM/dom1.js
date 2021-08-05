const question1 = document.getElementById('question-1');
question1.style.color = "blue";

const question2 = document.querySelector('.question-2');
question2.style.color = "red";

const question3 = document.querySelectorAll('.question-3');
question3.forEach(element => element.style.color = 'orange');

const question4 = document.getElementById('question-4');
question4.parentNode.style.backgroundColor = "purple";

const question5 = document.getElementById('question-5');
question5.style.display = "none";

const question6 = document.getElementById('subheading');
question6.classList.add("big-text");

const question7 = document.getElementById('subheading2');
question7.classList.remove("big-text");

const question8 = document.getElementById('yourname');
question8.innerText = ("Taylor Maruca");

const question9 = document.getElementById('yourname2');
const innerText = question9.innerText;
question9.innerText = `${innerText} Taylor`;

const names = ["Taylor", "Chris", "Jim"];
const q10 = document.querySelectorAll('.task');
for (let i = 0; i < q10.length; i++) {
    q10[i].innerText = names[i];
}
