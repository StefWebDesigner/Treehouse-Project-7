
// I got to use the css toggle switch 
// https://ghinda.net/css-toggle-switch/

//THINGS TO CONSIDER:
// Key value pair >>>>this is what I need to look up
// I could I use the changing property setting to save settings?????
// REDOFOME THE DATABASE AND ADD CLASSES TO IT

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
	if (traffic_nav_indicator.className = "traffic-nav-link-1") {
		console.log('The hourly thing is responding');
		traffic_nav_indicator.className += 'selected-traffic-nav';
	} if (traffic_nav_indicator.className = "traffic-nav-link-2") {
		console.log('The daily thing is responding');
		traffic_nav_indicator.className += 'selected-traffic-nav';
	} if (traffic_nav_indicator.className = "traffic-nav-link-active-3") {
		console.log('The weekly thing is responding');
		traffic_nav_indicator.className += 'selected-traffic-nav';
	} if (traffic_nav_indicator.className = "traffic-nav-link-4") {
		console.log('The montlh thing is responding');
		traffic_nav_indicator.className += 'selected-traffic-nav';
	}

});

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

// SAVE SETTINGS FUNCTION
// const settings = document.querySelector('fieldset.switch-toggle');
const settings = document.querySelector('select#timezone');
const optional_responses = document.querySelector('option#timezone_options');

//Listening Event
settings.addEventListener('click', (event) => {
		console.log('Im in the function');
//LISTEN FOR INPUT
		selected_input_time = event.target;
		// let input_memory = [];
		// input_memory.push(selected_input_time);
		if (selected_input_time === optional_responses) {
			console.log("I'm in the timezone if statement");
			 if (optional_responses.className = "est-zone") {
				console.log('green light on Eastern');
				alert('Time zone has been updated to Eastern zone');
			} else if (optional_responses.className = "pac-zone") {
				console.log('green light on Pacific');
				alert('Time zone has been updated to Pacific zone');
			} else if (optional_responses.className = "gm-zone") {
				console.log('green light on GM');
				alert('Time zone has been updated to GM Central zone');
			} else if (optional_responses.className = "java-zone") {
				console.log('green light on java');
				alert('Time zone has been updated to Javascript Time zone zone');
			} else if (optional_responses.className = "code-zone") {
				console.log('green light on code');
				alert('Time zone has been updated to Coding Time zone zone');
			} else if (optional_responses.className = "jedi-zone") {
				console.log('green light on Jedi');
				alert('Young padawan, time is only the force within you - Jedi Force Time zone zone');
			} else {
				alert('Unable the update time zone');
			}

		}

	});
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
