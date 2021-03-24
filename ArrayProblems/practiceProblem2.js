let array1 = new Array();
for ( i=0; i<=100; i++ ){
    let temp = i;
    let reverse=0
	while(temp > 0){
		let lastDigit = temp%10;
		reverse=(reverse*10)+lastDigit;
        temp = temp/10;
    }	 
    if (temp == reverse){
		array1.push(reverse);
    }
}
console.log(array1);

