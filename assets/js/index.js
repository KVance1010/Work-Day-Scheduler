// global variables
let timeSlots = $('#timeSlots').children();
let currentHour = moment().format('H');

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

// // sets the am or pm text content
// const setAMPM = function (i, count) {
// 	if (count <= 4) {
// 		return (i += ' AM');
// 	} else {
// 		return (i += ' PM');
// 	}
// };

// Loop that sets the colors of the schedule
const updateHour = function () {
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

// creates the main layout of the
// const timeSlotsOfDay = function () {
// 	displayTime();
// 	let count = 1;
// 	for (let i = 9; i <= 17; i++) {
// 		let newListEl = $('<li>');
// 		newListEl.addClass('row');

// 		let newDiv = $('<div>');
// 		newDiv.addClass('hour col-1');
// 		let amPM = setAMPM(i, count);
// 		newDiv.text(amPM);

// 		let newTextArea = $('<textarea>');
// 		newTextArea.addClass('col-10');
// 		newTextArea.attr('id', i);

// 		let newBtn = $('<buttons>');
// 		newBtn.addClass('saveBtn col-1');

// 		let newIcon = $('<i>');
// 		newIcon.addClass('fas fa-save fa-2x');

// 		newBtn.append(newIcon);

// 		newListEl.append(newDiv, newTextArea, newBtn);
// 		timeSlots.append(newListEl);
// 		count++;
// 	}
// 	updateHour();
// 	updateFeature();
// 	displayUserNotes();
// };

// sets the main time of the page
const displayTime = function () {
	$('#currentDay').text(moment().format('dddd, MMMM Do YYYY'));
};

// updates the times on the page every 2 mins
const updateFeature = function () {
	setInterval(function () {
		updateHour();
	}, 500000);
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

// timeSlotsOfDay();
displayTime();
updateFeature();
updateHour();
displayUserNotes();
