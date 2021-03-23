//UC1
{
    const IS_ABSENT = 0
    let empCheck = Math.floor(Math.random()*10)%2
    if (empCheck == IS_ABSENT){
        console.log("UC1 - Emp Is Absent");
    }else{
        console.log("UC1 - Emp Is Present");
    }
}


//UC2
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HR = 4;
const FULL_TIME_HR = 8;
const WAGE_PR_HR = 20;

let empHR = 0;
let empCheck = Math.floor(Math.random()*10)%3;
switch(empCheck){
    case IS_PART_TIME:
        empHR = PART_TIME_HR;
        break;
    case IS_FULL_TIME:
        empHR = FULL_TIME_HR;
        break;
    default:
        empHR = 0;
}

let empWage = empHR * WAGE_PR_HR;
console.log("UC2 - Emp Wage: "+ empWage);




