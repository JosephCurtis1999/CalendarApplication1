var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
var currentHour = moment().format('h:mm:ss a');

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

var interval = setInterval(function () {
    var momentNow = moment();
    $('#currentDay').html(momentNow.format('YYYY MMMM DD') + ' '
    + momentNow.format('dddd'));
    $('#currentDay').html(currentDate + " " + momentNow.format('hh:mm:ss A'));
}, 100);

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