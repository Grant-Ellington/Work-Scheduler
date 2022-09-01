// 1 add in html for calendar that are time block
//see line 32 and down for next steps

//using moment.js find a way to add in the current date and time and add to the header

const clock = document.getElementById('clock')
const loadTime = moment() 
const hour = {
    nineAM: moment(9),
    tenAM: moment(10),
    elevenAM: moment(11),
    twelvePM: moment(12),
    onePM: moment(13),
    twoPM: moment(14),
    threePM: moment(15),
    fourPM: moment(16),
    fivePM: moment(17),

}


setInterval( () => {
    const now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    clock.textContent = now   
},1000)

var div = document.getElementById('nineAM')

if( moment(loadTime).isSame(nineAM)){
    div.setAttribute("style", "background: green");
} else if ( moment(loadTime).isBefore(nineAM)){
    div.setAttribute("style", "background: red")
}else {
    div.setAttribute("style", "background: yellow")
}
// using moment.js find a way to to target time and change the background property with past, current and future markers
// Past will be red, current will be green; future will be white

// add js functionality on jQuery to add in a text field with if 'events'

// The saved wvent needs to be saved using stringify 