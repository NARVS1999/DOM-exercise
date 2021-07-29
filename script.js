const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const paragraph = document.createElement("p");
paragraph.classList.add("paragraph");
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = "red";

container.appendChild(paragraph);

const h3 = document.createElement("h3");
h3.classList.toggle("h3");
h3.textContent = "I'm a blue h3";
h3.style.color = "blue";

container.appendChild(h3);

const newDiv = document.createElement("div");
newDiv.classList.toggle("newDiv");
newDiv.style.cssText = "border: 3px solid black; border-radius: 5px; background: pink";

const h1 = document.createElement("h1");
h1.classList.toggle("h1");
h1.textContent = "I'm in a div";

newDiv.appendChild(h1);

const param = document.createElement("p");
param.classList.toggle("param");
param.textContent = "ME TOO!";

newDiv.appendChild(param);

container.appendChild(newDiv);

