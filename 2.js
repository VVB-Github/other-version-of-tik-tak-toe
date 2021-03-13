var headOne = document.querySelector('#one')
var headTwo = document.querySelector('#two')
var headThree = document.querySelector('#three')
var headFour = document.querySelector('#four')
var headFive = document.querySelector('#five')
var headSix = document.querySelector('#six')
var headSeven = document.querySelector('#seven')
var headEight = document.querySelector('#eight')
var headNine = document.querySelector('#nine')
var bottom = document.querySelector('#bottom')

bottom.addEventListener('click', function(){
    headOne.textContent = '';
    headTwo.textContent = '';
    headThree.textContent = '';
    headFour.textContent = '';
    headFive.textContent = '';
    headSix.textContent = '';
    headSeven.textContent = '';
    headEight.textContent = '';
    headNine.textContent = '';
})

headOne.addEventListener('click', function(){
    if (headOne.textContent ===''){
        headOne.textContent ='X';
    }else if (headOne.textContent === 'X'){
        headOne.textContent = 'O';
    }else{
        headOne.textContent = ''
    }
    // headOne.style.color = 'blue';
})
headTwo.addEventListener('click', function(){
    if (headTwo.textContent ===''){
        headTwo.textContent ='X';
    }else if (headTwo.textContent === 'X'){
        headTwo.textContent = 'O';
    }else{
        headTwo.textContent = ''
    }
    // headTwo.style.color = 'blue';
})
headThree.addEventListener('click', function(){
    if (headThree.textContent ===''){
        headThree.textContent ='X';
    }else if (headThree.textContent === 'X'){
        headThree.textContent = 'O';
    }else{
        headThree.textContent = ''
    }
    // headThree.style.color = 'blue';
})
headFour.addEventListener('click', function(){
    if (headFour.textContent ===''){
        headFour.textContent ='X';
    }else if (headFour.textContent === 'X'){
        headFour.textContent = 'O';
    }else{
        headFour.textContent = ''
    }
    // headFour.style.color = 'blue';
})
headFive.addEventListener('click', function(){
    if (headFive.textContent ===''){
        headFive.textContent ='X';
    }else if (headFive.textContent === 'X'){
        headFive.textContent = 'O';
    }else{
        headFive.textContent = ''
    }
    // headFive.style.color = 'blue';
})
headSix.addEventListener('click', function(){
    if (headSix.textContent ===''){
        headSix.textContent ='X';
    }else if (headSix.textContent === 'X'){
        headSix.textContent = 'O';
    }else{
        headSix.textContent = ''
    }
    // headSix.style.color = 'blue';
})
headSeven.addEventListener('click', function(){
    if (headSeven.textContent ===''){
        headSeven.textContent ='X';
    }else if (headSeven.textContent === 'X'){
        headSeven.textContent = 'O';
    }else{
        headSeven.textContent = ''
    }
    // headSeven.style.color = 'blue';
})
headEight.addEventListener('click', function(){
    if (headEight.textContent ===''){
        headEight.textContent ='X';
    }else if (headEight.textContent === 'X'){
        headEight.textContent = 'O';
    }else{
        headEight.textContent = ''
    }
    // headEight.style.color = 'blue';
})
headNine.addEventListener('click', function(){
    if (headNine.textContent ===''){
        headNine.textContent ='X';
    }else if (headNine.textContent === 'X'){
        headNine.textContent = 'O';
    }else{
        headNine.textContent = ''
    }
    // headNine.style.color = 'blue';
})
