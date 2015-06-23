var getPhoneNumber = prompt("Please enter your phone number with dashes");
var getBirth = prompt("Enter your birdate, in the format of:" + '\n' + "MM/DD/YY");
var getAddress = prompt("Please enter your postal code. It must be in the following format:" + '\n' + " XXXXX OR XXXXX-XXXX");
var getAbv = prompt("Please state your title. It must only contain two letters, and be in all caps, like so:" + '\n' + "MR");
var getMarriage = prompt("Are you married? Please answer 'yes' or 'no'.");
var marriageSmallCaps = getMarriage.toLowerCase();



if((getBirth.charAt(2) === '/' && getBirth.charAt(5) === '/') && (parseInt(getBirth.charAt(0)) && parseInt(getBirth.charAt(1)) && parseInt(getBirth.charAt(3)) && parseInt(getBirth.charAt(4)) && parseInt(getBirth.charAt(6)) && parseInt(getBirth.charAt(7)) ) && (getBirth.length === 8) ){
	alert(true);
		} else {
			alert(false);
		}

if ( (getAddress.length === 5 && parseInt(getAddress.charAt(0)) && parseInt(getAddress.charAt(1)) && parseInt(getAddress.charAt(2)) && parseInt(getAddress.charAt(3)) && parseInt(getAddress.charAt(4)) ) || (getAddress.length === 10 && getAddress.charAt(5) === '-' && parseInt(getAddress.charAt(0)) && parseInt(getAddress.charAt(1)) && parseInt(getAddress.charAt(2)) && parseInt(getAddress.charAt(3)) && parseInt(getAddress.charAt(4)) && parseInt(getAddress.charAt(6)) && parseInt(getAddress.charAt(7)) && parseInt(getAddress.charAt(8)) && parseInt(getAddress.charAt(9))) ) {
	alert(true);
			} else {
				alert(false);
			}


if ( (getAbv.length === 2) && (isNaN(getAbv.charAt(0)) ) &&  (isNaN(getAbv.charAt(1)) ) && (getAbv === getAbv.toUpperCase() ) ) {
	alert(true);
			} else {
				alert(false);
			}


if ((marriageSmallCaps === 'yes') || (marriageSmallCaps === 'no')) {

	alert(true);
		} else {
			alert(false);
		}


