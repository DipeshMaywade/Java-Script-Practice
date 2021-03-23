const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HR = 4;
const FULL_TIME_HR = 8;
const WAGE_PR_HR = 20;

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

let empCheck = Math.floor(Math.random()*10)%3;
let empHR = getHR(empCheck);
let empWage = empHR * WAGE_PR_HR;
console.log("Working HR: "+ empHR+ ", UC2 - Emp Wage: "+ empWage);
