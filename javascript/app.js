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


// Global traffic values *** this has a issue if included anywhere
const traffic_nav_hourly = document.querySelector('#traffic-nav-hourly');
const traffic_nav_daily = document.querySelector('#traffic-nav-daily');
const traffic_nav_weekly = document.querySelector('#traffic-nav-weekly');
const traffic_nav_monthly = document.querySelector('#traffic-nav-monthly');

// function navHighlight(trafficData) {

//CHART 1 (HOURLY) *** This has an issue if not connected with the update function
const hourlyData = {
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
		// hourlyData.render();

	};

//CHART 2(DAILY)
const dailyData = {
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
	// dailyData.render();

};

//CHART 4(WEEKLY)
//VARIABLES FOR EACH CHART >>> TO BE CALLED ON
const weeklyData = {
			type: 'line',  
		data: {
			labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
		datasets: [{
			label: "Traffic",
			type: "line",
			fillColor: "#826AEE",
			borderColor: "#8e5ea2",
			data: [550, 1250, 1000,2000, 1500, 1750, 1250, 1750, 2250, 1500, 2500],
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
	// weeklyData.render();

};

//==========================================================================
//CHART 5(MONTHLY)
//VARIABLES FOR EACH CHART >>> TO BE CALLED ON
const monthlyData = {
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
	};


// Just reference to the root DOM points
// const traffic_nav_hourly = document.querySelector('#traffic-nav-hourly');
// const traffic_nav_daily = document.querySelector('#traffic-nav-daily');
// const traffic_nav_weekly = document.querySelector('#traffic-nav-weekly');
// const traffic_nav_monthly = document.querySelector('#traffic-nav-monthly');

//FUNCTION TO HAVE THE CHART DATA READY FOR THE FINAL TRAFFIC CALL
//*** I need to add some referenceh to somethign */
	function update(chartData) {
			console.log('update function working');
		
			if (chartData.contains(hourlyData)) {
				hourlyData = new Chart(document.querySelector('traffic_nav_hourly', hourlyData)).innerHTML;
				// hourlyData = new Chart(document.querySelector('canvas#chart1', hourlyData)).innerHTML;
				console.log('update function: hourlyData processed');
				return update(hourlyData).document.querySelector('canvas#chart1').innerHTML;
			} if (chartData.contains(dailyData)) {
				dailyData = new Chart(document.querySelector('canvas#chart1', dailyData)).innerHTML;
				console.log('update function: dailyData processed');
				return update(dailyData).document.querySelector('canvas#chart1').innerHTML;
			} if (chartData.contains(weeklyData)) {
				weeklyData = new Chart(document.querySelector('canvas#chart1', weeklyData)).innerHTML;
				console.log('update function: weeklyData processed');
				return update(weeklyData).document.querySelector('canvas#chart1').innerHTML;
			} if (chartData.contains(monthlyData)) {
				monthlyData = new Chart(document.querySelector('canvas#chart1', monthlyData)).innerHTML;
				console.log('update function: monthlyData processed');
				return update(monthlyData).document.querySelector('canvas#chart1').innerHTML;
			}
//temporarly delted: end update tags			
}

// It needs several things::: 1) to find the stupd root point, 2) which update chart, 3) which to highligh
//maybe it requires two perameters

traffic.addEventListener('click', (e) => {
	console.log('traffic listening');

	//----------------- find out how to break the add event------------

	if (e.target.classList.contains('hourly')) {
			console.log('if condition working?');
		  e.target.classList.add('active');
		  console.log('Traffic nav: hourlyData active now');
		  return update(hourlyData);
		}
		if (e.target.classList.contains('daily')) {
		  e.target.classList.add('active');
		  console.log('Traffic nav: dailyData active now');
		  return update(dailyData);
		}
		if (e.target.classList.contains('weekly')) {
		   e.target.classList.add('active');
		   console.log('Traffic nav: weeklyData active now');
		   return update(weeklyData);

		}
		if (e.target.classList.contains('monthly')) {
		   e.target.classList.add('active');
		   console.log('Traffic nav: monthlyData active now');
		   return update(monthlyData);

		} 
		// false {
			//I want to reload it....how though!!!!!!!!!!!!
		// 	// break();

		
	  
	});



// This the experimental part


//FUNCTION TO HAVE THE CHART DATA READY FOR THE FINAL TRAFFIC CALL
// function update(chartData) {
// 	console.log('update function working');

// 	if (chartData.contains(hourlyData)) {
// 		hourlyData = new Chart(document.querySelector('canvas#chart1', hourlyData)).innerHTML;
// 		hourlyData.render();
// 		console.log('update function: hourlyData processed');
// 		return update(hourlyData).document.querySelector('canvas#chart1').innerHTML;
// 	} if (chartData.contains(dailyData)) {
// 		dailyData = new Chart(document.querySelector('canvas#chart1', dailyData)).innerHTML;
// 		dailyData.render();
// 		console.log('update function: dailyData processed');
// 		return update(dailyData).document.querySelector('canvas#chart1').innerHTML;
// 	} if (chartData.contains(weeklyData)) {
// 		weeklyData = new Chart(document.querySelector('canvas#chart1', weeklyData)).innerHTML;
// 		weeklyData.render();
// 		console.log('update function: weeklyData processed');
// 		return update(weeklyData).document.querySelector('canvas#chart1').innerHTML;
// 	} if (chartData.contains(monthlyData)) {
// 		monthlyData = new Chart(document.querySelector('canvas#chart1', monthlyData)).innerHTML;
// 		monthlyData.render();
// 		console.log('update function: monthlyData processed');
// 		return update(monthlyData).document.querySelector('canvas#chart1').innerHTML;
// 	}
//temporarly delted: end update tags			
// }


// traffic.addEventListener('click', (e) => {

// function navHighlight(trafficData) {


//+++++++++++++++the traffic nav if condition is working +++++++++++++++
//+++++++++++++++ the highlighting is fucking working too++++++++++
//test
// console.log('traffic listening');

//----------------- find out how to break the add event------------

// if (e.target.classList.contains('hourly')) {
// 	console.log('if condition working?');
//   e.target.classList.add('active');
//   //CALLING THE SPECIFIC DATA CHART
//   update(hourlyData);
//   //CALLING THE FUNCTION
//   navHighlight(traffic-nav-hourly);
//   console.log('Traffic nav: hourlyData active now');

// }
// if (e.target.classList.contains('daily')) {
//   e.target.classList.add('active');
//   update(dailyData);
//   navHighlight(traffic-nav-daily);
//   console.log('Traffic nav: dailyData active now');

// }
// if (e.target.classList.contains('weekly')) {
//    e.target.classList.add('active');
//    update(weeklyData);
//    navHighlight(traffic-nav-weekly);
//    console.log('Traffic nav: weeklyData active now');

// }
// if (e.target.classList.contains('monthly')) {
//    e.target.classList.add('active');
//    update(monthlyData);
//    navHighlight(traffic-nav-monthly);
//    console.log('Traffic nav: monthlyData active now');
// } 
// // false {
// 	//I want to reload it....how though!!!!!!!!!!!!
// // 	// break();

// }

// });






// // ===================
//************************HOLD OFF ON THIS**********************************

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
//************************HOLD OFF ON THIS**********************************

//EXPERIMENT
//EMAIL FUNCTIONALITY

// const email_preference_toggle = () => {
// 	console.log('Are you working email preferences????');

// 	const email_input = document.querySelector('input#email-checkbox');

// 	if (email_input.tagName.contains('email-span-on')) {
// 		alert('You email notifications have been turned on on');
// 	} if (email_input.tagName.contains('email-span-off')) {
// 		alert('You email notifications have been turned on off');
// 	} else {
// 		alert('Unable to change email preferences. Please Try again.');
// 	}

// };
 

// email_input.addEventListener('click', email_preference_toggle);
// console.log('Listerner activated');

//==========================================================================
//************************HOLD OFF ON THIS**********************************
// //EXPERIMENT
// //EMAIL FUNCTIONALITYY

// // const email_settings = document.querySelector('label#email_group');

// const profile_preference_toggle = event => {
// 	console.log('Are you working profile preferences????');

// 	const profile_input = document.querySelector('input#email-checkbox');
// 	// const email_span_on = document.querySelector('#email-span-on');
// 	// const email_span_off = document.querySelector('#email-span-off');

// 	if (profile_input.tagName.contains('profile-span-on')) {
// 		alert('You email notifications have been turned on on');
// 	} if (profile_input.tagName.contains('profile-span-on')) {
// 		alert('You email notifications have been turned on off');
// 	} else {
// 		alert('Unable to change email preferences. Please Try again.');
// 	}

// };


// profile_input.addEventListener('click', profile_preference_toggle);
// console.log('Listerner activated');

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
//************************HOLD OFF ON THIS**********************************

// // MESSAGING FUNCTIONALITY
// const user = document.getElementById("userField");
// const message = document.getElementById("messageField");
// const send = document.getElementById("send");

// send.addEventListener('click', () => {
// 	// ensure user and message fields are filled out
// 	if (user.value === "" && message.value === "") {
// 	alert("Please fill out user and message fields before sending");
// 	} else if (user.value === "" ) {
// 	alert("Please fill out user field before sending");
// 	} else if (message.value === "" ) {
// 	alert("Please fill out message field before sending");
// 	} else {
// 	alert(`Message successfully sent to: ${user.value}`);
// 	}
// });

//==========================================================================

//************************HOLD OFF ON THIS**********************************
//LOCAL STORAGE FUNCTIONALITY >> start of with the email/profile

// AN EXAMPLE OF HOW TO PULL OF THIS STUFF >> NEED THE BUTTON WORKING FIRST THOUGH
//GO TO APPLICATIONS AND STORAGE TO SEE WHAT IS STORED!!!

// const storageInput = document.querySelector('.storage');
// const storage_button = document.querySelector('#save');
// // const storedInput = localStorage.getItem('to the button or something >>> work on this');

// if(storageInput) {
// 	text.textContent = storedInput;
// }

// storageInput.addEventListener('input', letter => {
// 	text.textContent = letter.target.value;
// });

// const savetoLocalStorage = () => {
// 	localStorage.setItem('textinput', text, text.textContent);

// }

// button.addEventListener('click', savetoLocalStorage);

//==========================================================================


//************************HOLD OFF ON THIS**********************************
// TIME BANNER NOTIFCATIONS FUNCTION
// const settings = document.querySelector('select#timezone');
// const optional_responses = document.querySelector('option#timezone_options');

// //Listening Event
// settings.addEventListener('click', (event) => {
// 		console.log('Im in the time function function');
// //LISTEN FOR INPUT
// 		selected_input_time = event.target;
// 		// let input_sSelected_input_time);
// 		if (selected_input_time === optional_responses) {
// 			console.log("I'm in the timezone if statement");
// 			 if (optional_responses.value = "est-zone") {
// 				console.log('green light on Eastern');
// 				alert('Time zone has been updated to Eastern zone');
// 			} else if (optional_responses.value = "pac-zone") {
// 				console.log('green light on Pacific');
// 				alert('Time zone has been updated to Pacific zone');
// 			} else if (optional_responses.value = "gm-zone") {
// 				console.log('green light on GM');
// 				alert('Time zone has been updated to GM Central zone');
// 			} else if (optional_responses.value = "java-zone") {
// 				console.log('green light on java');
// 				alert('Time zone has been updated to Javascript Time zone zone');
// 			} else if (optional_responses.value = "code-zone") {
// 				console.log('green light on code');
// 				alert('Time zone has been updated to Coding Time zone zone');
// 			} else if (optional_responses.value = "jedi-zone") {
// 				console.log('green light on Jedi');
// 				alert('Young padawan, time is only the force within you - Jedi Force Time zone zone');
// 			} else {
// 				alert('Unable the update time zone');
// 			}

// 		}

// });

	// SAVE SETTINGS FUNCTIONALITY
