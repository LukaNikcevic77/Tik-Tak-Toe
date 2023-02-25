const board = document.getElementsByClassName('board');
const fields = document.getElementsByClassName('field');

console.log(fields[1].getAttribute("data-x"));

for( let i = 0; i < 9; i++){

    fields[i].addEventListener('click', (e) => {
        console.log(e.target.getAttribute('data-x'));
    })
}