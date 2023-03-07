let box = document.querySelector(".box");
let item = document.querySelectorAll(".item");
let title1 = document.querySelector(".title");
let text = document.querySelectorAll(".text");
let copyDiv = document.querySelectorAll(".copy__div");
let generate = document.querySelector(".generate");
let loading = document.querySelector(".loading");
let swith = document.querySelector(".switch");
let radius = document.querySelector(".radius");

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
for (let i = 0; i < item.length; i++) {
    const element = item[i];
    element.style.background = getRandomColor();
    element.addEventListener('click', () => {
        const bgColor = getComputedStyle(element).backgroundColor;
        document.body.style.background = bgColor;
        element.innerHTML = bgColor;
        element.classList.toggle("active");
    });
    element.addEventListener('dblclick', (event) => {
        const copyText = element.textContent;
        navigator.clipboard.writeText(copyText);
        element.classList.toggle('show');
    });
    generate.addEventListener('click', () => {
        element.style.background = getRandomColor();
        element.textContent = "";
        element.classList.remove('show');
    })
}
const colors = [];
item.forEach(div => {
    colors.push(div.style.backgroundColor);
    const selectedColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = selectedColor;
});