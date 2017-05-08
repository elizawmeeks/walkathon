$( "#submit" ).click(function() {
    console.log( "You clicked submit!" );
    console.log("event", event);
    console.log("name.value", $("#name")[0].value);
    console.log("email.value", $("#email")[0].value);
    console.log("donation.value", $("#donation")[0].value);
    console.log("lump.checked", $("#lump")[0].checked);
    console.log("lap.checked", $("#lap")[0].checked);
    switch (true) {
    	case $("#lump")[0].checked:
    		Donor.formatDonor($("#name")[0].value, $("#email")[0].value, $("#donation")[0].value, "lump");
    		break;

    	case $("#lap")[0].checked:
    		Donor.formatDonor($("#name")[0].value, $("#email")[0].value, $("#donation")[0].value, "lap");
    		break;
    }
});