let containerDiv = document.querySelector('.grid');
let num = 16
function createPix() {
    for (i = 0; i < num * num; i++) {
        const newDiv = document.createElement('div');
        containerDiv.appendChild(newDiv);
    }
}
function pixulate() {
    const pixs = document.querySelectorAll(".grid div");
    pixs.forEach((pix) => {
        pix.style.backgroundColor = "hsl(240, 100%, 90%)";
        let i = 0
        pix.addEventListener('mouseover', () => {
            if (i < 90) {
                i += 10;
            }
            pix.setAttribute("style", `background-color: hsl(240, 100%, ${90 - i}%)`)
        });
    })
}
createPix()
pixulate()
const btn = document.createElement('button');
document.querySelector('body').insertBefore(btn, document.querySelector('body').firstChild);
btn.textContent = "Click to reset";
btn.addEventListener('click', () => {
    num = prompt("Please input a grid size:  ", "");
    let gridRe = document.querySelector('.grid');
    gridRe.setAttribute('style', `grid-template-rows: repeat(` + num + `, 1fr); grid-template-columns: repeat(` + num + `, 1fr);`);
    while (gridRe.firstChild){
        gridRe.removeChild(gridRe.firstChild);
    }
    createPix()
    pixulate()
})