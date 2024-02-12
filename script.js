const subhanallahDisplay = document.getElementById('subhanahhahDisplay');
const subhanallahIncrement = document.getElementById('subhanahhahIncrement');
const subhanallahDecrement = document.getElementById('subhanahhahDecrement');

const alhamdulillahDisplay = document.getElementById('alhamdulillahDisplay');
const alhamdulillahIncrement = document.getElementById('alhamdulillahIncrement');
const alhamdulillahDecrement = document.getElementById('alhamdulillahDecrement');

const allahhuakbarDisplay = document.getElementById('allahhuakbarDisplay');
const allahhuakbarIncrement = document.getElementById('allahhuakbarIncrement');
const allahhuakbarDecrement = document.getElementById('allahhuakbarDecrement');

const resetBtn = document.getElementById('reset-btn');

// initial value
let subhanallahInitialValue = 0;
let alhamdulillahInitialValue = 0;
let allahhuakbarInitialValue = 0;

// function added subhanallah section
subhanallahIncrement.addEventListener('click',function(){    
    if(subhanallahInitialValue === 33){
        return alert('You complete The subhanallah')
    }
    subhanallahInitialValue += 1;
    subhanallahDisplay.innerText = subhanallahInitialValue;
})
subhanallahDecrement.addEventListener('click',function(){
    if(subhanallahInitialValue === 0){
        return alert("Don't Go Under 0")
    }
    subhanallahInitialValue -= 1;
    subhanallahDisplay.innerText = subhanallahInitialValue;
})
// function added alhamdulillah section
alhamdulillahIncrement.addEventListener('click', function () {
    if (alhamdulillahInitialValue === 33) {
        return alert('You complete The alhamdulillah')
    }
    alhamdulillahInitialValue += 1;
    alhamdulillahDisplay.innerText = alhamdulillahInitialValue;
})
alhamdulillahDecrement.addEventListener('click', function () {
    if (alhamdulillahInitialValue === 0) {
        return alert("Don't Go Under 0")
    }
    alhamdulillahInitialValue -= 1;
    alhamdulillahDisplay.innerText = alhamdulillahInitialValue;
});
// function added allahhuakbar section
allahhuakbarIncrement.addEventListener('click', function(){
    if(allahhuakbarInitialValue >= 34){
        return alert('You Complete allahhuakbar Section')
    }
    allahhuakbarInitialValue += 1;
    allahhuakbarDisplay.innerText = allahhuakbarInitialValue;
});
allahhuakbarDecrement.addEventListener('click',function(){
    if(allahhuakbarInitialValue <= 0){
        return alert("Don't Go Under 0")
    }
    allahhuakbarInitialValue -= 1;
    allahhuakbarDisplay.innerText = allahhuakbarInitialValue;
});
// reset button
resetBtn.addEventListener('click',function(){
    subhanallahDisplay.innerText = 0;
    alhamdulillahDisplay.innerText = 0;
    allahhuakbarDisplay.innerText = 0;
    subhanallahInitialValue = 0;
    alhamdulillahInitialValue = 0;
    allahhuakbarInitialValue = 0;
})