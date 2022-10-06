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
	let currentHour = moment().format('H');

	// if (currentHour >= 9 || currentHour <= 17) {
	// 	for (let timeSlot of timeSlots) {
	// 		if (timeSlot.data("timeMil") < currentHour) {
	// 			timeSlot.children().eq(1).addClass('past');
	// 		} else if (timeSlot.data("timeMil") == currentHour) {
	// 			timeSlot.children().eq(1).removeClass('present');
	// 		} else {
	// 			timeSlot.children().eq(1).removeClass('future');
	// 		}
	// 	}
		if (currentHour > 9) {
			$('#9').addClass('past');
		} else if (currentHour >= 9 && currentHour < 10) {
			$('#9').addClass('present');
		} else {
			$('#9').addClass('future');

		}
		if (currentHour > 10) {
			$('#10').addClass('past');
		} else if (currentHour >= 10 && currentHour < 11) {
			$('#10').addClass('present');
		} else {
			$('#10').addClass('future');
		}
		if (currentHour > 11) {
			$('#11').addClass('past');
		} else if (currentHour >= 11 && currentHour < 12) {
			$('#11').addClass('present');
		} else {
			$('#11').addClass('future');
		}
		if (currentHour > 12) {
			$('#12').addClass('past');
		} else if (currentHour >= 12 && currentHour < 13) {
			$('#12').addClass('present');
		} else {
			$('#12').addClass('future');
		}
		if (currentHour > 13) {
			$('#13').addClass('past');
		} else if (currentHour >= 13 && currentHour < 14) {
			$('#13').addClass('present');
		} else {
			$('#13').addClass('future');
		}
		if (currentHour > 14) {
			$('#14').addClass('past');
		} else if (currentHour >= 14 && currentHour < 15) {
			$('#14').addClass('present');
		} else {
			$('#14').addClass('future');
		}
		if (currentHour > 15) {
			$('#15').addClass('past');
		} else if (currentHour >= 15 && currentHour < 16) {
			$('#15').addClass('present');
		} else {
			$('#15').addClass('future');
		}
		if (currentHour > 16) {
			$('#16').addClass('past');
		} else if (currentHour >= 16 && currentHour < 17) {
			$('#16').addClass('present');
		} else {
			$('#16').addClass('future');
		}
		if (currentHour > 17) {
			$('#17').addClass('past');
		} else if (currentHour >= 17 && currentHour < 18) {
			$('#17').addClass('present');
		} else {
			$('#17').addClass('future');
		}
	}


// updates the times on the page every 2 mins
const updateFeature = function () {
	setInterval(function () {
		displayTime();
        updateHour();
	}, 1000);//100000
};

// sets the main time of the page
const displayTime = function () {
	$('#currentDay').text(moment().format('dddd, MMMM Do YYYY'));
};

// click event handlers for save buttons
$('i').on('click', (event) => {
let savedNote = $(event.target);
let iconId = savedNote.parent().siblings().eq(1).attr("id");
let scheduleTask = savedNote.parent().siblings().eq(1).val();
console.log(iconId);
workSchedule[iconId] = scheduleTask;
localStorage.setItem('workSchedule', JSON.stringify(workSchedule));
});

// updateHour();
updateFeature();
displayUserNotes();