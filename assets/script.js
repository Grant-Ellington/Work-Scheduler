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

const divNineAM = document.getElementById('nineAM')
const divTenAM = document.getElementById('tenAM')
const divElevenAM = document.getElementById('elevenAM')
const divTwelvePM = document.getElementById('twelvePM')
const divOnePM = document.getElementById('onePM')
const divTwoPM = document.getElementById('twoPM')
const divThreePM = document.getElementById('threePM')
const divFourPM = document.getElementById('fourPM')
const divFivePM = document.getElementById('fivePM')

// changes color for 9:00 am
if( moment(loadTime).isSame(nineAM)){
    divNineAM.setAttribute("style", "background: green");
} else if ( moment(loadTime).isBefore(nineAM)){
    divNineAM.setAttribute("style", "background: red")
}else {
    divNineAM.setAttribute("style", "background: yellow")
}
// changes color for 1000
if( moment(loadTime).isSame(tenAM)){
    divTenAM.setAttribute("style", "background: green");
} else if ( moment(loadTime).isBefore(tenAM)){
    divTenAM.setAttribute("style", "background: red")
}else {
    divTenAM.setAttribute("style", "background: yellow")
}

//changes color for 1100

if( moment(loadTime).isSame(elevenAM)){
    divElevenAM.setAttribute("style", "background: green");
} else if ( moment(loadTime).isBefore(elevenAM)){
    divElevenAM.setAttribute("style", "background: red")
}else {
    divElevenAM.setAttribute("style", "background: yellow")
}

//changes color for 1200

if( moment(loadTime).isSame(twelvePM)){
    divTwelvePM.setAttribute("style", "background: green");
} else if ( moment(loadTime).isBefore(nineAM)){
    divTwelvePM.setAttribute("style", "background: red")
}else {
    divTwelvePM.setAttribute("style", "background: yellow")
}

//change color for 1300

if( moment(loadTime).isSame(onePM)){
    divOnePM.setAttribute("style", "background: green");
} else if ( moment(loadTime).isBefore(onePM)){
    divOnePM.setAttribute("style", "background: red")
}else {
    divOnePM.setAttribute("style", "background: yellow")
}

// change color for 1400

if( moment(loadTime).isSame(twoPM)){
    divTwoPM.setAttribute("style", "background: green");
} else if ( moment(loadTime).isBefore(twoPM)){
    divTwoPM.setAttribute("style", "background: red")
}else {
    divTwoPM.setAttribute("style", "background: yellow")
}

//change color 1500

if( moment(loadTime).isSame(threePM)){
    divThreePM.setAttribute("style", "background: green");
} else if ( moment(loadTime).isBefore(threePM)){
    divThreePM.setAttribute("style", "background: red")
}else {
    divThreePM.setAttribute("style", "background: yellow")
}

// change color for 1600

if( moment(loadTime).isSame(fourPM)){
    divFourPM.setAttribute("style", "background: green");
} else if ( moment(loadTime).isBefore(fourPM)){
    divFourPM.setAttribute("style", "background: red")
}else {
    divFourPM.setAttribute("style", "background: yellow")
}

// change color for 1700

if( moment(loadTime).isSame(fivePM)){
    divFivePM.setAttribute("style", "background: green");
} else if ( moment(loadTime).isBefore(fivePM)){
    divFivePM.setAttribute("style", "background: red")
}else {
    divFivePM.setAttribute("style", "background: yellow")
}


var saveBTN = document.getElementById('saveBtn')
var eventNineAm = document.querySelector('#event9AM')
console.log(eventNineAm)

saveBTN.addEventListener('click', function (event) { 
    event.preventDefault()


var event = {
    NineAMEvent: eventNineAm.value.trim(),
}



localStorage.setItem('event', JSON.stringify(event))})

// using moment.js find a way to to target time and change the background property with past, current and future markers
// Past will be red, current will be green; future will be white

// add js functionality on jQuery to add in a text field with if 'events'

// The saved wvent needs to be saved using stringify 