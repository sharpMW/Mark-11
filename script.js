const dateOfBirth = document.querySelector('#dobhere');
const luckyNumber = document.querySelector('#luckynumhere');
const checkButton = document.querySelector('#check');
const outputBox = document.querySelector('#output');

checkButton.addEventListener('click', checkBirthDateLucky)

function calculateSum (dob){ 
    dob = dob.replaceAll("-","");
    let sum = 0
    for (var i = 0; i<dob.length; i++){ 
        sum += Number(dob.charAt(i));
    }
    return sum;
}

function checkBirthDateLucky(){ 
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    const luckyNum = luckyNumber.value;
    console.log(sum);
    console.log(luckyNum);
    compareValues(sum,luckyNum)
}

function compareValues(sum,luckyNum){ 
    if(sum%luckyNum === 0){
        outputBox.innerText="Your Birthday is lucky";
    } else{ 
        outputBox.innerText="Your Birthday is not lucky";
    }
}