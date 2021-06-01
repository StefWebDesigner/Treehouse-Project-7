
// I got to use the css toggle switch 
// https://ghinda.net/css-toggle-switch/

//THINGS TO CONSIDER:
// Key value pair >>>>this is what I need to look up
// I could I use the changing property setting to save settings?????
// REDOFOME THE DATABASE AND ADD CLASSES TO IT


//ALERT FUNCTIONALITY

const alertBanner = document.getElementById("alert");
// create the html for the banner
alertBanner.innerHTML = 
`
<div class="alert-banner">
<p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
to complete</p>
<p class="alert-banner-close">x</p>
</div>
`

alertBanner.addEventListener('click', e => {
	const element = e.target;
	if (element.classList.contains("alert-banner-close")) {
	alert.style.display = "none"
	}
		
	});


//DASHBOARD fUNCTION
const main_header = document.querySelector('div.main_header');
const search_it = document.querySelector('input#search_it');

//APPLIED THE JAVASCRIPT CLASSES TO SYMPLYFY ARRAY PROCESS
class Total_Members {
	constructor(name, email, birthDate) {
		this.name = name;
		this.email = email;
		this.birthDate = birthDate;
	}
}

//TOTAL MEMBERS VARIABLES
const victoria = new Total_Members("Victoria Chambers", "victoria.chambers80@example.com", "10/15/15");
const dale = new Total_Members("Dale Byrd", "dale.byrd52@example.com", "10/15/15");
const dawn = new Total_Members("Dawn Wood", "dawn.wood16@example.com", "10/15/15");
const dan = new Total_Members("Dan Oliver", "dan.oliver82@example.com", "10/15/15");

//DASHBOARD LISTENER
/* <a class="profile-email" href="#">victoria.chambers80@example.com</a> */
//Could the href help?????


search_it.addEventListener('keyup', (event) => {
//TEST
	console.log('main header listerer working...yea haww');
//STORE THE EVENT INTO A VARIABLE & PUSH IT INTO A COLLECTION
	let search_results = event.target;
    const search_string = [];
    for (let i = 0; i < search_string.length; i += 1) {
        search_string.push(search_results.charAt(i));
    }
//MATCH THE SEARCH STRING TO THE TOTAL MEMBER VARIABLES
//THE MATCHING ISN'T WORKING & FLAGGING A PROBLEM WITH LINE 44
if (search_string.length = Total_Members.length) {
	if (search_string.length = victoria.this.Total_Members) {
	console.log('It refers to Victoria');
	}
	else if (search_string.length = dale) {
		console.log('It refers to Dale');	
	}
	else if (search_string.length = dawn) {
		console.log('It refers to Dawn');
	}
	else if (search_string.length = dan) {
		console.log('It refers to Dan');
	}
	 else {
		console.log('No go');
	}
}

});


//TRAFFIC NAV COLOR
const traffic_nav = document.querySelector('ul.traffic-nav');
// TRAFFIC HIGHLIGHTING
traffic_nav.addEventListener('click', (event) => {
	let traffic_nav_indicator = event.target;

//WHEN I CLICK INBETTEEN EACH MENU OPTION, IT COMPLETLEY CHANGES TO SOMETHING ELSE
//iF i CLICK THE ITEM, IT MAKE A DOT INSTEAD OF APPLY THE STYLING
// for (let i; traffic_nav.length; i++) {
	if (traffic_nav_indicator.className = "traffic-nav-hourly") {
		console.log('The hourly thing is responding');
		traffic_nav_indicator.className = 'selected-traffic-nav';
	} if (traffic_nav_indicator.className = "traffic-nav-daily") {
		console.log('The daily thing is responding');
		traffic_nav_indicator.className = 'selected-traffic-nav';
	} if (traffic_nav_indicator.className = "traffic-nav-weekly") {
		console.log('The weekly thing is responding');
		traffic_nav_indicator.className = 'selected-traffic-nav';
	} if (traffic_nav_indicator.className = "traffic-nav-monthly") {
		console.log('The montlh thing is responding');
		traffic_nav_indicator.className = 'selected-traffic-nav';
	}

// }

});

// if (traffic_nav_indicator.className = "traffic-nav-link-1") {
// 	console.log('The hourly thing is responding');
// 	traffic_nav_indicator.className = 'selected-traffic-nav';
// } if (traffic_nav_indicator.className = "traffic-nav-link-2") {
// 	console.log('The daily thing is responding');
// 	traffic_nav_indicator.className = 'selected-traffic-nav';
// } if (traffic_nav_indicator.className = "traffic-nav-link-active-3") {
// 	console.log('The weekly thing is responding');
// 	traffic_nav_indicator.className = 'selected-traffic-nav';
// } if (traffic_nav_indicator.className = "traffic-nav-link-4") {
// 	console.log('The montlh thing is responding');
// 	traffic_nav_indicator.className = 'selected-traffic-nav';
// }

// });



//EMAIL NOTIFICATION SETTINGS FUNCTION
const email_settings = document.querySelector('label#email_group');

email_settings.addEventListener('click', (event) => {
		let email_notify = event.target;
		const email_input = document.querySelector('input#email-checkbox');
//TRIED TO MAKE IT SAY SOMETHIGN DIFFERENT IF IT WAS ON OR OFF
		// const email_input_on = document.querySelector('input#email-checkbox') + document.querySelector('span.email-active-on');
		// const email_input_off = document.querySelector('input#email-checkbox') + document.querySelector('span.email-active-off');
		// const active_on = document.querySelector('span.email-active-on');
		// const active_off = document.querySelector('span.email-active-off');
		if (email_notify = email_input) {
			alert('You email notifications have been turned on on');
		}
		// else if (email_notify === email_input_off) {
		// 	alert('You email notifications have been turned on off');
		// }
	
});

//Profile Notifcations SETTINGS FUNCTION
const profile_settings = document.querySelector('label#profile_group');

profile_settings.addEventListener('click', (event) => {
		let profile_notify = event.target;
		const profile_input = document.querySelector('input#profile-checkbox');
//TRIED TO MAKE IT SAY SOMETHIGN DIFFERENT IF IT WAS ON OR OFF
		// const email_input_on = document.querySelector('input#email-checkbox') + document.querySelector('span.email-active-on');
		// const email_input_off = document.querySelector('input#email-checkbox') + document.querySelector('span.email-active-off');
		// const active_on = document.querySelector('span.email-active-on');
		// const active_off = document.querySelector('span.email-active-off');
		if (profile_notify === profile_input) {
			alert('You email notifications have been turned on on');
		}
		// else if (email_notify === email_input_off) {
		// 	alert('You email notifications have been turned on off');
		// }
});

// MESSAGING FUNCTIONALITY
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener('click', () => {
	// ensure user and message fields are filled out
	if (user.value === "" && message.value === "") {
	alert("Please fill out user and message fields before sending");
	} else if (user.value === "" ) {
	alert("Please fill out user field before sending");
	} else if (message.value === "" ) {
	alert("Please fill out message field before sending");
	} else {
	alert(`Message successfully sent to: ${user.value}`);
	}
});


// SAVE SETTINGS FUNCTION
// const settings = document.querySelector('fieldset.switch-toggle');
const settings = document.querySelector('select#timezone');
// const optional_responses = document.querySelector('option#timezone_options');
const optional_responses = document.querySelector('option#timezone_options');

//Listening Event
settings.addEventListener('click', (event) => {
		console.log('Im in the time function function');
//LISTEN FOR INPUT
		selected_input_time = event.target;
		// let input_memory = [];
		// input_memory.push(selected_input_time);
		if (selected_input_time === optional_responses) {
			console.log("I'm in the timezone if statement");
			 if (optional_responses.value = "est-zone") {
				console.log('green light on Eastern');
				alert('Time zone has been updated to Eastern zone');
			} else if (optional_responses.value = "pac-zone") {
				console.log('green light on Pacific');
				alert('Time zone has been updated to Pacific zone');
			} else if (optional_responses.value = "gm-zone") {
				console.log('green light on GM');
				alert('Time zone has been updated to GM Central zone');
			} else if (optional_responses.value = "java-zone") {
				console.log('green light on java');
				alert('Time zone has been updated to Javascript Time zone zone');
			} else if (optional_responses.value = "code-zone") {
				console.log('green light on code');
				alert('Time zone has been updated to Coding Time zone zone');
			} else if (optional_responses.value = "jedi-zone") {
				console.log('green light on Jedi');
				alert('Young padawan, time is only the force within you - Jedi Force Time zone zone');
			} else {
				alert('Unable the update time zone');
			}

		}

	});




	// if (selected_input_time === optional_responses) {
	// 	console.log("I'm in the timezone if statement");
	// 	 if (optional_responses.className = "est-zone") {
	// 		console.log('green light on Eastern');
	// 		alert('Time zone has been updated to Eastern zone');
	// 	} else if (optional_responses.className = "pac-zone") {
	// 		console.log('green light on Pacific');
	// 		alert('Time zone has been updated to Pacific zone');
	// 	} else if (optional_responses.className = "gm-zone") {
	// 		console.log('green light on GM');
	// 		alert('Time zone has been updated to GM Central zone');
	// 	} else if (optional_responses.className = "java-zone") {
	// 		console.log('green light on java');
	// 		alert('Time zone has been updated to Javascript Time zone zone');
	// 	} else if (optional_responses.className = "code-zone") {
	// 		console.log('green light on code');
	// 		alert('Time zone has been updated to Coding Time zone zone');
	// 	} else if (optional_responses.className = "jedi-zone") {
	// 		console.log('green light on Jedi');
	// 		alert('Young padawan, time is only the force within you - Jedi Force Time zone zone');
	// 	} else {
	// 		alert('Unable the update time zone');
	// 	}

	// }
//=======================================
//         ARCHIVES WORKING
//=======================================

// CREATE A DATABASE WITH ARRAYS
// const total_members = [
// 	{name:"Victoria Chambers", 
// 	email:"victoria.chambers80@example.com", 
// 	birthDate:"10/15/15"}, 
// 	{name:"Dale Byrd", 
// 	email:"dale.byrd52@example.com", 
// 	birthDate:"10/15/15"},
// 	{name:"Dawn Wood", 
// 	email:"dawn.wood16@example.com", 
// 	birthDate:"10/15/15"},
// 	{name:"Dan Oliver", 
// 	email:"dan.oliver82@example.com", 
// 	birthDate:"10/15/15"},
// ];



		// if (selected_input_time === optional_responses) {
		// 	console.log("I'm in the timezone if statement");
		// 	if (selected_input_time === option.className = "est-zone") {
		// 		console.log('green light on Eastern');
		// 		alert('Time zone has been updated to Eastern zone');
		// 	} if (optional_responses.className = "pac-zone") {
		// 		console.log('green light on Pacific');
		// 		alert('Time zone has been updated to Pacific zone');
		// 	} if (selected_input_time === option.className = "gm-zone") {
		// 		console.log('green light on GM');
		// 		alert('Time zone has been updated to GM Central zone');
		// 	} if (selected_input_time === option.className = "java-zone") {
		// 		console.log('green light on java');
		// 		alert('Time zone has been updated to Javascript Time zone zone');
		// 	} if (selected_input_time === option.className = "code-zone") {
		// 		console.log('green light on code');
		// 		alert('Time zone has been updated to Coding Time zone zone');
		// 	} if (selected_input_time === option.className = "jedi-zone") {
		// 		console.log('green light on Jedi');
		// 		alert('Yong padawan, time is only the force within you - Jedi Force Time zone zone');
		// 	} else {
		// 		alert('Unable the update time zone');
		// 	}

		// }

// console.log(input_memory.length);
// TEST
// console.log(selected_input_time);	
// REMOVE THE LAST ITEM AND KEEP THE NEW ONE

//HAVE A MESSAGE THAT INDICATES THAT ____ TIME ZONE BEEN SAVED
		//IF STATEMENT OF IF THE EVENT TARGET CHOSE ___ TIME XONE
		// alert('You has saved your time zone settings!')
	//why not add a visual clock too!!!!!!!!
// });
