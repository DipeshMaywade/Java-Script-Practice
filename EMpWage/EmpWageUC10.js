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
let dailyWageArray = new Array();
let dailyWageMap = new Map();
let empDailyHrsMap = new Map();

while(totalEmpHr < MAX_WROKING_HR && days < NUM_OF_DAYS){
    days++
    let empCheck = Math.floor(Math.random()*10)%3;
    let empHR = getHR(empCheck);
    totalEmpHr = totalEmpHr + empHR; 
    dailyWageArray.push(
        {
            dayNum: days,
            dailyHr: empHR,
            dailyWage: empHR*WAGE_PR_HR,
            toString(){
                return '\nDay: ' +this.dayNum+' => WorkingHr: '+this.dailyHr+' And Wage Earn: '+this.dailyWage
            }
        }
    );
}

let empWage = totalEmpHr * WAGE_PR_HR;
console.log("Total Days: "+days+" Working HR: "+ totalEmpHr+ ", UC2 - Emp Wage: "+ empWage);
console.log("Array of daily wage: "+dailyWageArray);
