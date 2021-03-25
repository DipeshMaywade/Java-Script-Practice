const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HR = 4;
const FULL_TIME_HR = 8;
const WAGE_PR_HR = 20;
const NUM_OF_DAYS = 20;
const MAX_WROKING_HR = 160;

function getHR(empCheck){
    switch(empCheck){
       case IS_PART_TIME:
            return PART_TIME_HR;
        case IS_FULL_TIME:
         return FULL_TIME_HR;
        default:
            return 0;
    }
}

let totalEmpHr = 0;
let days = 0;
let dailyWageArray = [];
while(totalEmpHr < MAX_WROKING_HR && days < NUM_OF_DAYS){
    let empCheck = Math.floor(Math.random()*10)%3;
    let empHR = getHR(empCheck);
    totalEmpHr = totalEmpHr + empHR; 
    dailyWageArray.push(empHR*WAGE_PR_HR);
    days++
}
let empWage = totalEmpHr * WAGE_PR_HR;
console.log("Total Days: "+days+" Working HR: "+ totalEmpHr+ ", UC2 - Emp Wage: "+ empWage);
console.log("Array of daily wage: "+dailyWageArray);


//For Each for Array 
let totalEmpWage = 0;
function sum(dailyWage){
    totalEmpWage = totalEmpWage+dailyWage;
} 
dailyWageArray.forEach(sum);
console.log("ForEach Method: "+totalEmpWage);

//Reduse Method for Array
function totalWage(totalWage,dailyWage){
    return totalWage+dailyWage;
}
console.log("Reduse Method: "+dailyWageArray.reduce(totalWage,0));


//day along with dayCount
let daycount = 0;
function mapWithDay(dailyWage){
    daycount++;
    return daycount+ " = "+dailyWage;
}
let newArrayWithDay = dailyWageArray.map(mapWithDay);
console.log(newArrayWithDay);

//Filter Only FullTime Earned Days
function fullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullTimeWageAr = newArrayWithDay.filter(fullTimeWage);
console.log(fullTimeWageAr);

//find first occurance of 160
function findFullDayWage(dailyWage){
    return dailyWage.includes("160");
}
console.log(newArrayWithDay.find(findFullDayWage));

//every method
 function isAllFullTime(dailyWage){
     return dailyWage.includes("160");
 }
 console.log(fullTimeWageAr.every(isAllFullTime));

 //some method 
function isSomeParttime(dailyWage){
    return dailyWage.includes("80");
}
console.log(fullTimeWageAr.some(isSomeParttime));

//present Days count 
function totalDaysWorked(numOfDays , dailyWage){
    if (dailyWage>0){
       return numOfDays+1
    }
    return numOfDays;
}
console.log(dailyWageArray.reduce(totalDaysWorked,0));

