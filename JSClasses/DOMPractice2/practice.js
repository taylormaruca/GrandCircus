const q5 = document.getElementById("alert-button");
function clickHandler() {
  alert("Hello! This is an alert.");
}
q5.addEventListener("click", clickHandler);
// q5.addEventListener('click', () => {
//     alert('Hello! This is an alert.');
// })

const q6 = document.getElementById("add-tv-show-button");
q6.addEventListener("click", () => {
  const li = document.createElement("li");
  li.innerText = "Criminal Minds";

  const ul = document.getElementById("tv-shows");
  ul.append(li);
});

const q7 = document.getElementById("question-7-remove-button");
function removeButton() {
  document.getElementById("comment-7").remove();
}
q7.addEventListener("click", removeButton);

const q8 = document.getElementById("question-8-remove-button");
function removeElement(event) {
  event.target.parentNode.remove();
}
q8.addEventListener("click", removeElement);

const q9 = document.querySelector(".highlight");
function highlight(event) {
  event.target.style.backgroundColor = "yellow";
  event.target.style.color = "white";
}

function unhighlight(event) {
  event.target.style.backgroundColor = "white";
  event.target.style.color = "black";
}

const all = document.querySelectorAll(".highlight");

all.forEach((p) => {
  p.addEventListener("mouseover", highlight);
  p.addEventListener("mouseleave", unhighlight);
});

const q12 = document.getElementById('say-hello');
q12.addEventListener('click', () => {
    const input = document.getElementById('question-12-name');
    const p = document.getElementById('message');

    console.log(input.value);
    p.innerText = `Hello ${input.value}`;
})

const q13 = document.getElementById('add-user');
q13.addEventListener('click', () => {
    const input = document.getElementById('question-13-name');
    const ul = document.getElementById('users');

    const li = document.createElement('li');

    li.innerText = input.value;

    ul.append(li);
});

const show = document.getElementById('show-button');
const hide = document.getElementById('hide-button');
const secret = document.getElementById('secret-text');

show.addEventListener('click', () => {
    secret.style.display = 'block';
});

hide.addEventListener('click', () => {
    secret.style.display = 'none';
});


const q15 = document.getElementById('add-calc-button');

q15.addEventListener('click', () => {
    const x = document.getElementById('question-15-x')
    const y = document.getElementById('question-15-y');

    const p = document.getElementById('question-15-answer');

    p.innerText = parseInt(x.value) + parseInt(y.value);
});

const q16 = document.getElementById('calc-button');

q16.addEventListener('click', () => {
    const x = +document.getElementById('question-16-x').value;
    const y = +document.getElementById('question-16-y').value;
    const operator = document.getElementById('operator');
    const p = document.getElementById('question-16-answer');

    if(operator.value === '+') {
        p.innerText = x + y;
    }
    if(operator.value === '-') {
        p.innerText = x - y;
    }
    if(operator.value ==='*') {
        p.innerText = x * y;
    }
    if(operator.value === '/') {
        p.innerText = x / y;
    }
});