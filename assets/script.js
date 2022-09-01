// 1 add in html for calendar that are time block
//see line 32 and down for next steps

//using moment.js find a way to add in the current date and time and add to the header

const clock = document.getElementById('clock') 

setInterval(()=> {
    const now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    clock.textContent = now
},1000)

// using moment.js find a way to to target time and change the background property with past, current and future markers
// Past will be red, current will be green; future will be white

// add js functionality on jQuery to add in a text field with if 'events'

// The saved wvent needs to be saved using stringify 