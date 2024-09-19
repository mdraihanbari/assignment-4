



//problem 1

function calculateTax(income, expenses) {
    
    if(income < 0 || expenses < 0){
        return "Invalid Input"
    }

    let profit = income - expenses;
    let tax = profit*0.2;
    return tax
}


let result = calculateTax(5000, 2000);
console.log(result)


//problem 2 


function sendNotification(email) {
    
    if(typeof email !== "string" || !email.includes("@")){
        return "Invalid Email"
    }

    let parts = email.split("@");
    let part1 = parts[0];
    let part2 = parts[1];
    let output = part1 + " sent you an email from " + part2 ;
    return output
}

let result2 = sendNotification("sadia8icloud.com");
console.log(result2)



//problem 3 


function checkDigitsInName(name) {
    
    if(typeof naem !== "string"){
        return  "Invalid Input"
    }

    for(let char of name){
        if((char >= "0" && char <= "9")){
            return true
        } 
    }
     return false
}

let result3 = checkDigitsInName(["Raj"]);
console.log(result3)


//problems 4 

function calculateFinalScore(obj) {
    
    if(typeof obj !== 'object'){
        return "Invalid Input"
    }

    let totalScore = 0;
    if(obj.testScore <= 50){
        totalScore += obj.testScore;
    }
    if(obj.schoolGrade <= 30){
        totalScore += obj.schoolGrade ;
    }
    if(obj.isFFamily){
        totalScore += 20;
    }
    return totalScore >= 80
}

let result4 = calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false});
console.log(result4)


//problem 5 

function  waitingTime(waitingTimes, serialNumber) {
    
    if(typeof waitingTimes !== "Array" && typeof serialNumber !== "number"){
        return "Invalid Input"
    }

    let totalTime = 0;
    for(let i = 0 ; i < waitingTimes.length ; i++){
        const elementTime = waitingTimes[i];
        totalTime += elementTime;
        
    }
    const avgTimes = totalTime / waitingTimes.length;

    const serial = serialNumber - waitingTimes.length - 1;
    const serialTime = serial * Math.round(avgTimes);
    return serialTime;
}


const result5 = waitingTime([ 3, 5, 7, 11, 6 ], 10);
console.log(result5)

