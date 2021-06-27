const text = document.querySelector('.text')
const input = document.getElementById('input')
const bg = document.querySelector('.background')


function onChange () {
    text.textContent = input.value + '%';
    // bg.style.filter = 'blur(2px)'
    // if (input.value > '30px') {
        // input.value === '30px'
    // } else {
        bg.style.filter = `blur(${input.value}px)`
    // }
    // console.log(input.value);
}

input.addEventListener('input', onChange)
// function onChange () {
    // bg.style.filter = `
        // blur(${blur.value}%)
    // `
    // console.log(input.value);
    // bg = `${document.style.background}`
// }

// function setPerc () {
//     let percValue = text.value;
//     console.log(percValue);
// }

// console.log('asdfas');

// setRange = function () {
//     let inputValue;
//     input.addEventListener('change', () => {
//         text.textContent = input.inputValue;
//         console.log('changed!');
//     })
// }


// input.addEventListener('change', () => {
//     console.log('changed!');
// })