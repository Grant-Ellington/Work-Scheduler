// 1 add in html for calendar that are time block
//see line 32 and down for next steps

//using moment.js find a way to add in the current date and time and add to the header

const clock = document.getElementById('clock')
const loadTime = moment() .get("hour")
const hour = {
    nineAM: 9,
    tenAM: 10,
    elevenAM: 11,
    twelvePM: 12,
    onePM: 13,
    twoPM: 14,
    threePM: 15,
    fourPM: 16,
    fivePM: 17,

}

console.log(hour.nineAM)


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
if(loadTime===hour.nineAM){
    divNineAM.setAttribute("style", "background: green");
    console.log('green')
} else if (loadTime>hour.nineAM){
    divNineAM.setAttribute("style", "background: red")
    console.log('red')
}else {
    divNineAM.setAttribute("style", "background: yellow")
    console.log('yellow')
}


// changes color for 1000
if( loadTime===hour.tenAM){
    divTenAM.setAttribute("style", "background: green");
} else if (loadTime >hour.tenAM){
    divTenAM.setAttribute("style", "background: red")
}else {
    divTenAM.setAttribute("style", "background: yellow")
}

//changes color for 1100

if(loadTime === hour.elevenAM){
    divElevenAM.setAttribute("style", "background: green");
} else if ( loadTime > hour.elevenAM){
    divElevenAM.setAttribute("style", "background: red")
}else {
    divElevenAM.setAttribute("style", "background: yellow")
}

//changes color for 1200

if( loadTime === hour.twelvePM){
    divTwelvePM.setAttribute("style", "background: green");
} else if ( loadTime > hour.twelvePM){
    divTwelvePM.setAttribute("style", "background: red")
}else {
    divTwelvePM.setAttribute("style", "background: yellow")
}

//change color for 1300

if( loadTime === hour.onePM){
    divOnePM.setAttribute("style", "background: green");
} else if ( loadTime > hour.onePM){
    divOnePM.setAttribute("style", "background: red")
}else {
    divOnePM.setAttribute("style", "background: yellow")
}

// change color for 1400

if( loadTime === hour.twoPM){
    divTwoPM.setAttribute("style", "background: green");
} else if ( loadTime > hour.twoPM){
    divTwoPM.setAttribute("style", "background: red")
}else {
    divTwoPM.setAttribute("style", "background: yellow")
}

//change color 1500

if(loadTime === hour.threePM){
    divThreePM.setAttribute("style", "background: green");
} else if ( loadTime > hour.threePM){
    divThreePM.setAttribute("style", "background: red")
}else {
    divThreePM.setAttribute("style", "background: yellow")
}

// change color for 1600

if( loadTime === hour.fourPm){
    divFourPM.setAttribute("style", "background: green");
} else if ( loadTime > hour.fourPM){
    divFourPM.setAttribute("style", "background: red")
}else {
    divFourPM.setAttribute("style", "background: yellow")
}

// change color for 1700

if( loadTime === hour.fivePM){
    divFivePM.setAttribute("style", "background: green");
} else if ( loadTime > hour.fivePM){
    divFivePM.setAttribute("style", "background: red")
}else {
    divFivePM.setAttribute("style", "background: yellow")
}


// get items from textarea and put in local storage.


let task = [];

let inputs = document.querySelectorAll(
        '#eventNineAM',
        '#eventTenAM',
        '#eventElevenAM',
        '#eventTwelveAM',
        '#eventOnePM',
        '#eventTwoPM',
        '#eventThreePM',
        '#eventFourPM',
        '#eventFivePM'
        )

inputs.forEach(function (element) {
    task.push({
        field: element.id,
        text: element.querySelector('.form-control').value,
        })
        console.log(task)
    })




//ounce in  local storage parse and set to text Content
// ounce completed figure out how to save eithout reloaading 