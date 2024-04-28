let name = 'nusrat';
console.log(name);

let counterValue = 0;
function updateCounterDisplay(){
    document.getElementById('counter').textContent = counterValue ;
}
function increaseCounter(){
    counterValue++ ;
    updateCounterDisplay();
}
function decreaseCounter(){
    counterValue-- ;
    updateCounterDisplay() ;
}
function resetCounter(){
    counterValue = 0 ;
    updateCounterDisplay();
}

// function updateCounter(numberDifference) {
//   counterValue += numberDifference;
//   updateCounterDisplay();
// }
