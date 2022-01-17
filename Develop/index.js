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
