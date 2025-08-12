// const userInp = document.getElementById('inp');
// const submit = document.getElementById('btn');
// let step = "";

// let value ;
// submit.addEventListener('click' , (e)=>{
//     e.preventDefault();
//     value = parseInt(userInp.value);
//     // console.log(e.target);
//     checker(value)
    
// })

// function checker(val){
//     // console.log(val)
//     if(val === 0){
//         alert('PLease Enter Greater than 0')
//     }else if(isNaN(val)){
//         alert("PLease Enter Some valid Number")
//     }else{
//         calculateRoot(val);
//     }
// }

// function calculateRoot(val){
//     // step 1 finding the pairs
//     let numString = String(val);
//     if(numString.length % 2 !== 0){
//         numString = "0"+numString;
//     }
//     let pair = [];
//     for (let i = 0; i < numString.length; i+=2) {
//         pair.push(parseInt(numString.substr(i , 2)))
//     }
    
//     step += `<div class = "step"><b>Step 1:</b> Pairs of Digits = ${pair.join(" | ")}</div>` ;


//     // step 2 finding the quotient
//     let quotient = 0;
//     let remainder = 0;
//     let decimal = "";
//     let firstpair = pair[0];

//     let x = 0;

//     while(((x+1)*(x+1)) <= firstpair){
//         x++;
//     }
//     quotient = x;
//     console.log(quotient); // output --> 1
//     remainder = (firstpair - (quotient*quotient));

//     // console.log(remainder);
    

//     // finding the second quetiont or new quotient 
//     let newDividend = 0;
    
   
//     for (let i = 1; i < pair.length; i++) {
//         newDividend = remainder*100 + pair[i]; 
//     }
//     console.log(newDividend); // output --> 25
//     let doubleQuotient  = quotient*2;
//     console.log(doubleQuotient); // Output --> 2



//     let y = 0;
//     while((doubleQuotient*10 + (y+1))*(y+1) <= newDividend){
//         y++;
//     }

//     console.log(y);
    
//     remainder = newDividend - (doubleQuotient*10 + y)*y;
//     quotient = quotient*10 + y;
//     step += `<div class='step'><b>Step 2:</b> Bring down ${pair[1]}, new dividend = ${newDividend}, choose ${y}, remainder = ${remainder}</div>`;



//     // step 3 for handling a decimal number
//     if (remainder !== 0) {
//         step += `<div class='step'><b>Step ${pair.length + 1}:</b> Start decimal calculation.</div>`;
//         quotient = quotient + "."; // mark decimal point
//         let decimalDigits = "";
//         let doubledQuotient = parseInt(quotient.toString().replace(".", "")) * 2;
//         let places = 5; // number of decimal places

//         for (let i = 0; i < places; i++) {
//           let newDividend = remainder * 100; // bring down "00"
//           let y = 0;
//           while ((doubledQuotient * 10 + (y + 1)) * (y + 1) <= newDividend) y++;

//           remainder = newDividend - (doubledQuotient * 10 + y) * y;
//           decimalDigits += y;
//           doubledQuotient = doubledQuotient * 10 + y;

//           step += `<div class='step'><b>Decimal step ${i + 1}:</b> New dividend = ${newDividend}, choose ${y}, remainder = ${remainder}</div>`;

//           if (remainder === 0) break;
//         }

//         quotient = quotient + decimalDigits;
//       }


    
//       document.getElementById('result').innerHTML = quotient;
     
//     //   document.querySelector('.container').appendChild(step)
//     // console.log(step);
//     document.querySelector('.steps').innerHTML = step;
    
    
// }

const userInp = document.getElementById('inp');
const submit = document.getElementById('btn');
let step = "";

let value;
submit.addEventListener('click', (e) => {
    e.preventDefault();
    value = parseInt(userInp.value);
    checker(value);
});

function checker(val) {
    if (val === 0) {
        alert('Please enter a number greater than 0');
    } else if (isNaN(val)) {
        alert("Please enter a valid number");
    } else {
        step = ""; // reset steps
        calculateRoot(val);
    }
}

function calculateRoot(val) {
    // Step 1: Group digits in pairs
    let numString = String(val);
    if (numString.length % 2 !== 0) {
        numString = "0" + numString;
    }
    let pair = [];
    for (let i = 0; i < numString.length; i += 2) {
        pair.push(parseInt(numString.substr(i, 2)));
    }

    step += `<div class='step'><b>Step 1:</b> Pairs of digits = ${pair.join(" | ")}</div>`;

    // Variables for calculation
    let quotient = 0;
    let remainder = 0;

    // Step 2: First digit of quotient
    let firstpair = pair[0];
    let x = 0;
    while ((x + 1) * (x + 1) <= firstpair) {
        x++;
    }
    quotient = x;
    remainder = firstpair - (quotient * quotient);
    step += `<div class='step'><b>Step 2:</b> Largest number whose square ≤ ${firstpair} is ${x}, remainder = ${remainder}</div>`;

    // Step 3: Loop through remaining integer pairs
    for (let i = 1; i < pair.length; i++) {
        let newDividend = remainder * 100 + pair[i];
        let doubleQuotient = quotient * 2;
        let y = 0;
        while ((doubleQuotient * 10 + (y + 1)) * (y + 1) <= newDividend) {
            y++;
        }
        remainder = newDividend - (doubleQuotient * 10 + y) * y;
        quotient = quotient * 10 + y;
        step += `<div class='step'><b>Step ${i + 2}:</b> Bring down ${pair[i]}, new dividend = ${newDividend}, choose ${y}, remainder = ${remainder}</div>`;
    }

    // Step 4: Handle decimal calculation if remainder not zero
    if (remainder !== 0) {
        step += `<div class='step'><b>Step ${pair.length + 1}:</b> Start decimal calculation.</div>`;
        quotient = quotient + "."; // mark decimal point
        let decimalDigits = "";
        let doubledQuotient = parseInt(quotient.toString().replace(".", "")) * 2;
        let places = 5; // decimal places

        for (let i = 0; i < places; i++) {
            let newDividend = remainder * 100; // bring down "00"
            let y = 0;
            while ((doubledQuotient * 10 + (y + 1)) * (y + 1) <= newDividend) {
                y++;
            }
            remainder = newDividend - (doubledQuotient * 10 + y) * y;
            decimalDigits += y;
            doubledQuotient = doubledQuotient * 10 + y;

            step += `<div class='step'><b>Decimal step ${i + 1}:</b> New dividend = ${newDividend}, choose ${y}, remainder = ${remainder}</div>`;

            if (remainder === 0) break;
        }
        quotient = quotient + decimalDigits;
    }

    // Final output
    document.getElementById('result').innerHTML = quotient;
    document.querySelector('.steps').innerHTML = step;
}
