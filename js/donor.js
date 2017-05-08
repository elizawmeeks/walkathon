var Donor = (function (oldDonor){
	var donorArray = [];

	oldDonor.addDonor = function (object){
		donorArray.push(object);
		console.log("donorArray", donorArray);
		Donor.writeToDom(donorArray);
	}

	oldDonor.formatDonor = function (dName, dEmail, dDonation, dType){
		var userObject = {name: dName, email: dEmail, pledge: dDonation, type: dType}
		console.log("userObject", userObject);
		oldDonor.addDonor(userObject);
	}

	return oldDonor;
})(Donor || {});