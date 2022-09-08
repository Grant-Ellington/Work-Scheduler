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

console.log(localStorage)


// Saving todos For 0900
const eventNineAM = document.getElementById('eventNineAM');
const saveBtnNineAM = document.getElementById('saveBtnNineAM');

saveBtnNineAM.onclick = function saveTextNineAM () {
    var taskNineAM = eventNineAM.value;

    console.log(taskNineAM);

    if (taskNineAM) {
        localStorage.setItem('todoNineAM', taskNineAM);
    }
    //eventNineAM.append(localStorage.todoNineAM)
    
}
eventNineAM.append(localStorage.todoNineAM)
if (eventNineAM === 'undefined') {
    eventNineAM.innerText = "";
} else {
    eventNineAM.innerText = localStorage.todoNineAM
    console.log('true')
}

//saving todos for 1000

const eventTenAM = document.getElementById('eventTenAM');
const saveBtnTenAM = document.getElementById('saveBtnTenAM');

saveBtnTenAM.onclick = function saveTextTenAM () {
    var taskTenAM = eventTenAM.value;

    console.log(taskTenAM);

    if (taskTenAM) {
        localStorage.setItem('todoTenAM', taskTenAM);
    }
    //eventNineAM.append(localStorage.todoNineAM)
    
}
eventTenAM.append(localStorage.todoTenAM)
if (eventTenAM) {
    eventTenAM.innerText = localStorage.todoTenAM
} else {
    eventTenAM.innerText = "";
}

// 1100

const eventElevenAM = document.getElementById('eventElevenAM');
const saveBtnElevenAM = document.getElementById('saveBtnElevenAM');

saveBtnElevenAM.onclick = function saveTextElevenAM () {
    var taskElevenAM = eventElevenAM.value;

    console.log(taskElevenAM);

    if (taskElevenAM) {
        localStorage.setItem('todoElevenAM', taskElevenAM);
    }
    //eventNineAM.append(localStorage.todoNineAM)
    
}
eventElevenAM.append(localStorage.todoElevenAM)
if (eventElevenAM) {
    eventNineAM.innerText = localStorage.todoElevenAM
} else {
    eventNineAM.innerText = "";
}

// for 1200

const eventTwelvePM = document.getElementById('eventTwelvePM');
const saveTwelvePM = document.getElementById('saveBtnTwelvePM');

saveBtnTwelvePM.onclick = function saveTextTwelvePM () {
    var taskTwelvePM = eventTwelvePM.value;

    console.log(taskTwelvePM);

    if (taskTwelvePM) {
        localStorage.setItem('todoTwelvePM', taskTwelvePM);
    }
    //eventNineAM.append(localStorage.todoNineAM)
    
}
eventTwelvePM.append(localStorage.todoTwelvePM)
if (eventTwelvePM) {
    eventTwelvePM.innerText = localStorage.todoTwelvePM
} else {
    eventTwelvePM.innerText = "";
}

// for 1300

const eventOnePM = document.getElementById('eventOnePM');
const saveBtnOnePM = document.getElementById('saveBtnOnePM');

saveBtnOnePM.onclick= function saveTextOnePM () {
    var taskOnePM = eventOnePM.value;

    console.log(taskOnePM);

    if (taskOnePM) {
        localStorage.setItem('todoOnePM', taskOnePM);
    }
    //eventNineAM.append(localStorage.todoNineAM)
    
}
eventOnePM.append(localStorage.todoOnePM)
if (eventOnePM) {
    eventOnePM.innerText = localStorage.todoOnePM
} else {
    eventOnePM.innerText = "";
}

// 1400

const eventTwoPM = document.getElementById('eventTwoPM');
const saveBtnTwoPM = document.getElementById('saveBtnTwoPM');

saveBtnTwoPM.onclick= function saveTextTwoPM () {
    var taskTwoPM = eventTwoPM.value;

    console.log(taskTwoPM);

    if (taskTwoPM) {
        localStorage.setItem('todoTwoPM', taskTwoPM);
    }
    //eventNineAM.append(localStorage.todoNineAM)
    
}
eventTwoPM.append(localStorage.todoTwoPM)
if (eventTwoPM) {
    eventTwoPM.innerText = localStorage.todoTwoPM
} else {
    eventTwoPM.innerText = "";
}

//1500

const eventThreePM = document.getElementById('eventThreePM');
const saveBtnThreePM = document.getElementById('saveBtnThreePM');

saveBtnThreePM.onclick= function saveTextThreePM () {
    var taskTwoPM = eventThreePM.value;

    console.log(taskThreePM);

    if (taskThreePM) {
        localStorage.setItem('todoTwoPM', taskThreePM);
    }
    //eventNineAM.append(localStorage.todoNineAM)
    
}
eventThreePM.append(localStorage.todoThreePM)
if (eventThreePM) {
    eventThreePM.innerText = localStorage.todoThreePM
} else {
    eventThreePM.innerText = "";
}

//1600

const eventFourPM = document.getElementById('eventFourPM');
const saveBtnFourPM = document.getElementById('saveBtnFourPM');

saveBtnFourPM.onclick= function saveTextFourPM () {
    var taskFourPM = eventFourPM.value;

    console.log(taskFourPM);

    if (taskFourPM) {
        localStorage.setItem('todoFourPM', taskFourPM);
    }
    //eventNineAM.append(localStorage.todoNineAM)
    
}
eventFourPM.append(localStorage.todoFourPM)
if (eventFourPM) {
    eventFourPM.innerText = localStorage.todoFourPM
} else {
    eventFourPM.innerText = "";
}

//1700

const eventFivePM = document.getElementById('eventFivePM');
const saveBtnFivePM = document.getElementById('saveBtnFivePM');

saveBtnTwoPM.onclick= function saveTextFivePM () {
    var taskFivePM = eventFivePM.value;

    console.log(taskFivePM);

    if (taskFivePM) {
        localStorage.setItem('todoFivePM', taskFivePM);
    }
    //eventNineAM.append(localStorage.todoNineAM)
    
}
eventFivePM.append(localStorage.todoFivePM)
if (eventFivePM) {
    eventFivePM.innerText = localStorage.todoFivePM
} else {
    eventFivePM.innerText = "";
}
