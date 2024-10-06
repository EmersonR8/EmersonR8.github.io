    // This is an example with default parameters
/*
    year: 2024,
    month: 10, 
    day: 6, 
    hours: 13, 
    minutes: 0, 
    seconds: 0,  */

    simplyCountdown('#cuenta', {
        year: 2024, // required
        month: 10, // required
        day: 6, // required
        hours: 10, // Default is 0 [0-23] integer
        minutes: 30, // Default is 0 [0-59] integer
        seconds: 0, // Default is 0 [0-59] integer
        words: { //words displayed into the countdown
            days: { singular: 'day', plural: 'days' },
            hours: { singular: 'hour', plural: 'hours' },
            minutes: { singular: 'minute', plural: 'minutes' },
            seconds: { singular: 'second', plural: 'seconds' }
        },
        plural: true, //use plurals
        inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
        inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
        // in case of inline set to false
        enableUtc: false, //Use UTC or not - default : false
        onEnd: function() { 
           let revelar = document.getElementById("revelar");
           let cuenta = document.getElementById("cuenta");
           let containerImg = document.getElementById("containerImg");

           containerImg.style.display = 'none';
           cuenta.style.display = 'none';
           revelar.style.display = 'block';
          
         }, //Callback on countdown end, put your own function here
        refresh: 1000, // default refresh every 1s
        sectionClass: 'simply-section', //section css class
        amountClass: 'simply-amount', // amount css class
        wordClass: 'simply-word', // word css class
        zeroPad: false,
        countUp: false
});

// Also, you can init with already existing Javascript Object.
let myElement = document.querySelector('.my-countdown');
simplyCountdown(myElement, { /* options */ });

let multipleElements = document.querySelectorAll('.my-countdown');
simplyCountdown(multipleElements, { /* options */ });
