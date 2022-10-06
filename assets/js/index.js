// global variables
const timeSlots = $('#timeSlots').children();

// object to save user information to the local storage
let workSchedule = JSON.parse(localStorage.getItem('workSchedule'));
if (workSchedule === null) {
	workSchedule = {
		9: '',
		10: '',
		11: '',
		12: '',
		13: '',
		14: '',
		15: '',
		16: '',
		17: '',
	};
	localStorage.setItem('workSchedule', JSON.stringify(workSchedule));
}

// displays the user's notes when the app starts
const displayUserNotes = function () {
	for (const time in workSchedule) {
		$('#' + time).text(workSchedule[time]);
	}
};

// Loop that sets the colors of the schedule
const updateHour = function () {
	// let currentHour = moment().format('H');
	let currentHour = 16;
	if (currentHour >= 9 || currentHour <= 17) {
		for (let i = 9; i <= 17; i++) {
			let timeId = '#' + i;
			console.log(timeId);
			if (currentHour > i) {
				$(timeId).addClass('past');
			} else if (currentHour == i) {
				$(timeId).addClass('present');
			} else {
				$(timeId).addClass('future');
			}
		}
	}
};

// sets the main time of the page
const displayTime = function () {
	$('#currentDay').text(moment().format('dddd, MMMM Do YYYY'));
};

// click event handlers for save buttons
$('i').on('click', (event) => {
	let savedNote = $(event.target);
	let iconId = savedNote.parent().siblings().eq(1).attr('id');
	let scheduleTask = savedNote.parent().siblings().eq(1).val();
	console.log(iconId);
	workSchedule[iconId] = scheduleTask;
	localStorage.setItem('workSchedule', JSON.stringify(workSchedule));
});

updateFeature();
displayUserNotes();
updateHour();
displayTime();
