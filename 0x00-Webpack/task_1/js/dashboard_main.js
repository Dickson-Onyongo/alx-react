const $ = require('jquery');
const _ = require('lodash');


    $('body').append('Holberton Dashboard');
    $('body').append('Dashboard data for the students');
    $('body').append('Click here to get started');
    $('body').append(`<p id='count'></p>`);
    $('body').append('Copyright - Holberton School');

let count = 0;

function updateCounter() {
    count++;
    $("#count").html(`${count} clicks on the button`);
};

$('button').on('click', _.debounce(updateCounter, 500));