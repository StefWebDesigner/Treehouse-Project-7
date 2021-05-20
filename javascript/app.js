
// I got to use the css toggle switch 
// https://ghinda.net/css-toggle-switch/

//TRAFFIC NAV COLOR
const traffic_nav = document.querySelector('ul.traffic-nav');

// TRAFFIC HIGHLIGHTING
traffic_nav.addEventListener('click', (event) => {
	let traffic_nav_indicator = event.target;


//WHEN I CLICK INBETTEEN EACH MENU OPTION, COMPLETLEY CHANGES TO SOMETHIGN ELSE
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



//SAVE SETTINGS FUNCTION
//GLOBAL VALUES
// const settings = document.querySelector('#timezone select');
const settings = document.querySelector('fieldset.switch-toggle');

//Listening Event
settings.addEventListener('click', (event) => {
		console.log('Im in the function');
//LISTEN FOR INPUT
		// const input_settings = document.querySelector('input.input-settings');
		selected_input_time = event.target;
		let input_memory = [];
		input_memory.push(selected_input_time);
		// TEST
console.log(input_memory.length);
//STORING THE INPUT INTO ARRAY
		// for (let i = 0; input_memory.length; i++) {
// TEST
		// console.log('Jumping hoops in loops again!!!');	
		// 	selected_input_time = event.target;
		// 	input_memory[i] = selected_input_time.push();
// TEST
console.log(selected_input_time);	
		// }
// REMOVE THE LAST ITEM AND KEEP THE NEW ONE

//HAVE A MESSAGE THAT INDICATES THAT ____ TIME ZONE BEEN SAVED
		//IF STATEMENT OF IF THE EVENT TARGET CHOSE ___ TIME XONE
		alert('You has saved your time zone settings!')
	//why not add a visual clock too!!!!!!!!
});

	// function time_zone(input) {


// }