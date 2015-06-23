var getPhoneNumber = prompt("Please enter your phone number with dashes");
var getBirth = prompt("Enter your birdate, in the format of:" + '\n' + "MM/DD/YY")
var getAddress = prompt("Please enter your postal code. It must be in the following format:" + '\n' + " XXXXX OR XXXXX-XXXX");
var getAbv = prompt("Please state your title. It must only contain two letters, and be in all caps, like so:" + '\n' + "MR")
var getMarriage = prompt("Are you married? Please answer 'yes' or 'no'.")
var marriageSmallCaps = getMarriage.toLowerCase();

if(getPhoneNumber.charAt(3) === '-' && getPhoneNumber.charAt(7) === '-') {
console.log("hello")
	} else {
		console.log("bye")
		}


if(getBirth.charAt(2) === '/' && getBirth.charAt(5) === '/') {
console.log("hello")
	} else {
		console.log("bye")
		}


    

if ( ((getAddress.length === 3) || (getAddress.length === 5)) && (parseInt(getAddress)) ) {
 		console.log("hello address");
 } else {
 	console.log("bye address");
 }


if ( (getAbv.length === 2) && (isNaN(getAbv.charAt(0)) ) &&  (isNaN(getAbv.charAt(1)) ) && (getAbv === getAbv.toUpperCase() ) ) {
	console.log("hello")
}  else {
 	console.log("bye");
 }

if ((marriageSmallCaps === 'yes') || (marriageSmallCaps === 'no')) {

	console.log("hello")
	} else {
		console.log("bye")
		}


