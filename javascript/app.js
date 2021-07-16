//==========================================================================

// GLOBAL VARIABLES
const alertBanner = document.querySelector("#alert");
const traffic = document.querySelector('ul');
//I only need ul because the target e will target what I'm clicking
const settings = document.querySelector('select#timezone');
const optional_responses = document.querySelector('option#timezone_options');

//==========================================================================


//ALERT FUNCTIONALITY
alertBanner.innerHTML = 
`
<div class="alert-banner">
<p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
to complete</p>
<p class="alert-banner-close">x</p>
</div>
`

alertBanner.addEventListener('click', e => {
	//
	const element = e.target;
	if (element.classList.contains("alert-banner-close")) {
	alert.style.display = "none"
	}
});

// =====================================================

//TRAFFIC NAVIGATION FUNCTIONALITY
const traffic_nav_hourly = document.querySelector('#traffic-nav-hourly');
const traffic_nav_daily = document.querySelector('#traffic-nav-daily');
const traffic_nav_weekly = document.querySelector('#traffic-nav-weekly');
const traffic_nav_monthly = document.querySelector('#traffic-nav-monthly');

function navHighlight() {
	//it continues downward

//CHART 1 (HOURLY)
const hourlyData = new Chart(chart1, {
			type: 'line',  
			data: {
			labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
			datasets: [{
			label: "Traffic",
			type: "line",
		fillColor: "#826AEE",
			borderColor: "#8e5ea2",
			data: [550,1250,1000,2000, 1500, 1750, 1250, 1750, 2250, 1500, 2500],
			backgroundColor: "#826AEE",
			backgroundColorHover: "#3e95cd",
			fill: false,
			}]
			},
			options: {
			legend: { display: false },
			elements: {
        	line: {
            tension: .45
		}
			},											
		}
	});

//CHART 2(DAILY)

const dailyData = new Chart(chart2, {
		type: 'line',  
		data: {
		labels: ['S', 'M', 'sT', 'W', 'T', 'F', 'S'],
		datasets: [{
		label: "Traffic",
		type: "bar",
		data: [75,125,175,125, 225, 200, 100],
		backgroundColor: "#765af2",
		backgroundColorHover: "#3e95cd",
		}]
		},
		options: {
		legend: { display: false },
		elements: {
        line: {
        tension: .45
		}
		},											
		}
	});

//CHART 4(WEEKLY)

const weeklyData = new Chart(chart4, {
			type: 'line',  
		data: {
			labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
		datasets: [{
			label: "Traffic",
			type: "line",
			fillColor: "#826AEE",
			borderColor: "#8e5ea2",
			data: [550,1250,1000,2000, 1500, 1750, 1250, 1750, 2250, 1500, 2500],
			backgroundColor: "#826AEE",
			backgroundColorHover: "#3e95cd",
			fill: false,
			}]
			},
			options: {
			legend: { display: false },
			elements: {
        	line: {
            tension: .45
			}
		},											
		}
	});

//==========================================================================
//CHART 5(MONTHLY)

const monthlyData = new Chart(chart5, {
		type: 'line',  
		data: {
		labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
		datasets: [{
		label: "Traffic",
		type: "line",
		fillColor: "#826AEE",
		borderColor: "#8e5ea2",
		data: [2500,1001,1750,1500, 1500, 1500, 1500, 2250, 2250, 1500, 2250],
	backgroundColor: "#826AEE",
		backgroundColorHover: "#3e95cd",
		fill: false,
		}]
		},
		options: {
		legend: { display: false },
		elements: {
        line: {
        tension: .45
		}
		},											
		}
	});

//	UPDATE FUNCTION
	// function update(chartData) {
	// 	chart.data.labels.push(label);
	// 	chart.data.datasets.forEach((dataset) => {
	// 		dataset.data.push(data);
	// 	});
	// 	chart.update();
	// }

	// function addData(chart, label, data) {
	// 	chart.data.labels.push(label);
	// 	chart.data.datasets.forEach((dataset) => {
	// 		dataset.data.push(data);
	// 	});
	// 	chart.update();
	// }
	
	// function removeData(chart) {
	// 	chart.data.labels.pop();
	// 	chart.data.datasets.forEach((dataset) => {
	// 		dataset.data.pop();
	// 	});
	// 	chart.update();
	// }




//DO i NEED A REFERENCE POINT?????
	// const updatePoint = document.querySelector();
//DO I NEED A LISTER TO LISTEN FOR THE TYPE OF BUTTON PRESSED????

		function update(chartData) {
			if (chartData.contains(hourlyData)) {
				update(hourlyData);
			} if (chartData.contains(dailyData)) {
				update(dailyData);
			} if (chartData.contains(weeklyData)) {
				update(weeklyData);
			} if (chartData.contains(monthlyData)) {
				update(monthlyData);
			}
		}
	

		//make it it display
		
		if (e.target.classList.contains('hourly')) {
		  e.target.classList.add('active');
		  update(hourlyData);
		  navHighlight(traffic-nav-hourly);
		}
		if (e.target.classList.contains('daily')) {
		  e.target.classList.add('active');
		  update(dailyData);
		  navHighlight(traffic-nav-daily);

		}
		if (e.target.classList.contains('weekly')) {
		   e.target.classList.add('active');
		   update(weeklyData);
		   navHighlight(traffic-nav-weekly);

		}
		if (e.target.classList.contains('monthly')) {
		   e.target.classList.add('active');
		   update(monthlyData);
		   navHighlight(traffic-nav-monthly);

		}
	  });


	  navHighlight
// ===================

// 	traffic_menu.addEventListener('click', () => {

// console.log('Im all ears');

// 	// const traffic_option_selected = e.target;
// 	let traffic_chosen = document.querySelectorAll('.traffic-nav-options');

// 		for (i = 0; i < traffic_chosen.length; i++) {
// 			traffic_chosen[i].classList.remove('active');
// 			console.log('Im looping around');
// 		}
// 		traffic_menu.classList.add('active');
// 		})

// 		console.log('I made it to the end');
// };

// //hav this in if statements
// navHighlight(traffic_nav_hourly);
// navHighlight(traffic_nav_daily);
// navHighlight(traffic_nav_weekly);
// navHighlight(traffic_nav_monthly);

//==========================================================================

//EXPERIMENT
//EMAIL FUNCTIONALITY

const email_preference_toggle = event => {
	console.log('Are you working email preferences????');

	const email_input = document.querySelector('input#email-checkbox');

	if (email_input.tagName.contains('email-span-on')) {
		alert('You email notifications have been turned on on');
	} if (email_input.tagName.contains('email-span-off')) {
		alert('You email notifications have been turned on off');
	} else {
		alert('Unable to change email preferences. Please Try again.');
	}

};
 

search.addEventListener('click', email_preference_toggle);
console.log('Listerner activated');

//==========================================================================

//EXPERIMENT
//EMAIL FUNCTIONALITYY

// const email_settings = document.querySelector('label#email_group');

const profile_preference_toggle = event => {
	console.log('Are you working profile preferences????');

	const profile_input = document.querySelector('input#email-checkbox');
	// const email_span_on = document.querySelector('#email-span-on');
	// const email_span_off = document.querySelector('#email-span-off');

	if (profile_input.tagName.contains('profile-span-on')) {
		alert('You email notifications have been turned on on');
	} if (profile_input.tagName.contains('profile-span-on')) {
		alert('You email notifications have been turned on off');
	} else {
		alert('Unable to change email preferences. Please Try again.');
	}

};


search.addEventListener('click', profile_preference_toggle);
console.log('Listerner activated');

//==========================================================================


//OLD EMAIL NOTIFICATION

//EMAIL NOTIFICATION SETTINGS FUNCTION
// const email_settings = document.querySelector('label#email_group');

// email_settings.addEventListener('click', (event) => {
// 		let email_notify = event.target;
// 		const email_input = document.querySelector('input#email-checkbox');
// //TRIED TO MAKE IT SAY SOMETHIGN DIFFERENT IF IT WAS ON OR OFF
// 		// const email_input_on = document.querySelector('input#email-checkbox') + document.querySelector('span.email-active-on');
// 		// const email_input_off = document.querySelector('input#email-checkbox') + document.querySelector('span.email-active-off');
// 		// const active_on = document.querySelector('span.email-active-on');
// 		// const active_off = document.querySelector('span.email-active-off');
// 		if (email_notify = email_input) {
// 			alert('You email notifications have been turned on on');
// 		}
// 		// else if (email_notify === email_input_off) {
// 		// 	alert('You email notifications have been turned on off');
// 		// }
	
// });

// //Profile Notifcations SETTINGS FUNCTION
// const profile_settings = document.querySelector('label#profile_group');

// profile_settings.addEventListener('click', (event) => {
// 		let profile_notify = event.target;
// 		const profile_input = document.querySelector('input#profile-checkbox');
// //TRIED TO MAKE IT SAY SOMETHIGN DIFFERENT IF IT WAS ON OR OFF
// 		// const email_input_on = document.querySelector('input#email-checkbox') + document.querySelector('span.email-active-on');
// 		// const email_input_off = document.querySelector('input#email-checkbox') + document.querySelector('span.email-active-off');
// 		// const active_on = document.querySelector('span.email-active-on');
// 		// const active_off = document.querySelector('span.email-active-off');
// 		if (profile_notify === profile_input) {
// 			alert('You email notifications have been turned on on');
// 		}
// 		// else if (email_notify === email_input_off) {
// 		// 	alert('You email notifications have been turned on off');
// 		// }
// });

//==========================================================================

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

//==========================================================================

//LOCAL STORAGE FUNCTIONALITY >> start of with the email/profile

// AN EXAMPLE OF HOW TO PULL OF THIS STUFF >> NEED THE BUTTON WORKING FIRST THOUGH
//GO TO APPLICATIONS AND STORAGE TO SEE WHAT IS STORED!!!

const storageInput = document.querySelector('.storage');
const storage_button = document.querySelector('#save');
// const storedInput = localStorage.getItem('to the button or something >>> work on this');

if(storageInput) {
	text.textContent = storedInput;
}

storageInput.addEventListener('input', letter => {
	text.textContent = letter.target.value;


});

const savetoLocalStorage = () => {
	localStorage.setItem('textinput', text, text.textContent);

}

button.addEventListener('click', savetoLocalStorage);

//==========================================================================



// TIME BANNER NOTIFCATIONS FUNCTION
// const settings = document.querySelector('select#timezone');
// const optional_responses = document.querySelector('option#timezone_options');

//Listening Event
settings.addEventListener('click', (event) => {
		console.log('Im in the time function function');
//LISTEN FOR INPUT
		selected_input_time = event.target;
		// let input_sSelected_input_time);
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

	// SAVE SETTINGS FUNCTIONALITY


// ================================================================

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
