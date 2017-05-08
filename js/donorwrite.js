var Donor = (function (oldDonor){
	var donorArray = [];

	oldDonor.writeToDom = function (array){
		var write = document.getElementById("stickItHere");
		var tableString = "";
		for (var i = 0; i<array.length; i++){
			tableString +=
			`<tr>
			    <td>${array[i].name}</td>
			    <td>${array[i].email}</td>
			    <td>$${array[i].pledge}</td>
			    <td>${array[i].type}</td>
			</tr>`
		}
		write.innerHTML = tableString;
	}

// <tr>
//     <td>Alvin</td>
//     <td>alvin@chipmunks.com</td>
//     <td>$0.87</td>
//     <td>Per Lap</td>
//   </tr>
//   <tr>
//     <td>Alan</td>
//     <td>alan@rickman.com</td>
//     <td>$30.00</td>
//     <td>Lump</td>
//   </tr>
//   <tr>
//     <td>Jonathan</td>
//     <td>jonathan@lost-for-a-reference.com</td>
//     <td>$7.00</td>
//     <td>Per Lap</td>
//   </tr>


	return oldDonor;
})(Donor || {});