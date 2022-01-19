// js moment to display the date and time in the correct format
var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
var currentHour = moment().format('h:mm:ss a');

// variable for each timeblock, references the ID
var nineAM = $('#9AM');
var tenAM = $('#10AM');
var elevenAM = $('#11AM');
var twelvePM = $('#12PM');
var onePM = $('#13PM');
var twoPM = $('#14PM');
var threePM = $('#3PM');
var fourPM = $('#4PM');
var fivePM = $('#5PM');
var hour = moment().hours();
var userInput;
var hourSpan;

// function to work with the time intervals set in the variables
var interval = setInterval(function () {
    var momentNow = moment();
    $('#currentDay').html(momentNow.format('YYYY MMMM DD') + ' '
    + momentNow.format('dddd'));
    $('#currentDay').html(currentDate + " " + momentNow.format('hh:mm:ss A'));
}, 100);

// initialises the variables for each timeblock, interesting to note that to get this to work I had to write in digital format rather than 1pm, 2pm, 3pm etc
function initPage() {
    
    console.log("Current Hour" + hour);
    var init9 = JSON.parse(localStorage.getItem("09:00AM"));
    nineAM.val(init9);

    var init10 = JSON.parse(localStorage.getItem("10:00AM"));
    tenAM.val(init10);

    var init11 = JSON.parse(localStorage.getItem("11:00AM"));
    elevenAM.val(init11);

    var init12 = JSON.parse(localStorage.getItem("12:00PM"));
    twelvePM.val(init12);

    var init13 = JSON.parse(localStorage.getItem("13:00PM"));
    onePM.val(init13);

    var init14 = JSON.parse(localStorage.getItem("14:00PM"));
    twoPM.val(init14);

    var init15 = JSON.parse(localStorage.getItem("15:00PM"));
    threePM.val(init15);

    var init16 = JSON.parse(localStorage.getItem("16:00PM"));
    fourPM.val(init16);

    var init17 = JSON.parse(localStorage.getItem("17:00PM"));
    fivePM.val(init17);
}

// this function targets the form-control class and sets parameters for when to add the certain colour classes based on the time of day. e.g future adds the green class
function background () {

$(".form-control").each(function () {
    var timeTest = parseInt($(this).attr("id"));
    hour = parseInt(hour);
    console.log(timeTest);
    console.log(hour);
    if (hour > timeTest) {
        $(this).addClass("past");
    } else if (hour < timeTest) {
        $(this).addClass("future");
    } else {
        $(this).addClass("present");
    }
});
}

$(document).ready(function(){
    initPage()
    background()
})