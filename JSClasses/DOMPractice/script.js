const q1 = document.getElementById('question1');
const p = document.createElement('p');
p.innerText = "This is purple";
p.style.color = 'purple'
q1.append(p);

const q2 = document.getElementById('question2');
const p2 = document.createElement('p');
p2.innerText = "This is blue";
p2.style.color = 'blue'
q2.append(p2);

const q3 = document.getElementById('question3');
const div = document.createElement('div');
const p3 = document.createElement('p');
p3.innerText = "Hello World";
div.style.backgroundColor = 'orange';
p3.style.color = 'white';
q3.append(div);
div.append(p3);

const q4 = document.getElementById('question4');
const div1 = document.createElement('div');
const div2 = document.createElement('div');
const p4 = document.createElement('p');
div1.classList.add('orange');
div2.classList.add('blue');
p4.innerText = "Hello World";
p4.style.color = 'white';
q4.append(div1);
div1.append(div2);
div2.append(p4);