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

//uc11A using object and Arrow Function
let totalWages = dailyWageArray.reduce((totalWage,dailyHrAndWage) => totalWage = totalWage+dailyHrAndWage.dailyWage, 0); 
console.log("Total Wage: "+ totalWages );
let totalHr = dailyWageArray.reduce((totalHR, dailyHrAndWage) => totalHR = totalHR+dailyHrAndWage.dailyHr,0);
console.log("Total Hours: "+totalHr);

//uc11B Full Day Work
let fullTimeStrArray = dailyWageArray.filter(dailyHrAndWage => dailyHrAndWage.dailyHr == 8)
                                     .map(dailyHrAndWage => dailyHrAndWage.toString());
console.log(fullTimeStrArray);

//uc11c PartTime Work 
let partTimeStrArray = dailyWageArray.filter(dailyHrAndWage => dailyHrAndWage.dailyHr == 4)
                                     .map(dailyHrAndWage => dailyHrAndWage.toString());
console.log(partTimeStrArray);

//uc11c NonWorking days 
let nonTimeStrArray = dailyWageArray.filter(dailyHrAndWage => dailyHrAndWage.dailyHr == 0)
                                     .map(dailyHrAndWage => dailyHrAndWage.toString());
console.log(nonTimeStrArray);