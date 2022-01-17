var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
var currentHour = moment().format('h:mm:ss a');

var nineAM = $('#9AM');
var tenAM = $('#10AM');
var elevenAM = $('#11AM');
var twelveAM = $('#12AM');
var onePM = $('#1PM');
var twoPM = $('#2PM');
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
    
    console.log("Current Hour + hour");
    var init9 = JSON.parse(localStorage.getItem("09:00AM"));
    nineAM.val(init9);

    var init10 = JSON.parse(localStorage.getItem("10:00AM"));
    nineAM.val(init10);

    var init11 = JSON.parse(localStorage.getItem("11:00AM"));
    nineAM.val(init11);

    var init12 = JSON.parse(localStorage.getItem("12:00PM"));
    nineAM.val(init12);

    var init1 = JSON.parse(localStorage.getItem("01:00PM"));
    nineAM.val(init1);

    var init2 = JSON.parse(localStorage.getItem("02:00PM"));
    nineAM.val(init2);

    var init3 = JSON.parse(localStorage.getItem("03:00PM"));
    nineAM.val(init3);

    var init4 = JSON.parse(localStorage.getItem("04:00PM"));
    nineAM.val(init4);

    var init5 = JSON.parse(localStorage.getItem("05:00PM"));
    nineAM.val(init5);
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
