const BASE_URL = "https://www.boredapi.com/api"

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('type').addEventListener('click', getActivities)
    document.getElementById('random').addEventListener('click', randomize)
})


function randomize(){
    let buttons = document.getElementById('buttons')
    buttons.innerHTML = '<button id="random">Try Again!</button>'
    buttons.addEventListener('click', randomize)
    let activities = document.getElementById('activity')
    fetch(BASE_URL + '/activity')
    .then(res => res.json())
    .then(activity => {
        console.log(activity)
        activities.innerHTML = `
        <li>Activity: ${activity.activity}</li>
        <li> Type: ${activity.type}</li>
        <li> Particpants: ${activity.particpants}</li>`
    })
}



function getActivities(){
    let buttons = document.getElementById('buttons')
    buttons.innerHTML = ''
    buttons.innerHTML += '<form name="select" id="form"> <select id="select"> <option value ="recreational">Recreational Activity</option><option value="education">Educational Acitvity</option><option value="relax">Relaxational Acitivity</option></select><input type="submit" value="Go"></form>'
    document.querySelector('#form').addEventListener('submit', getActivity)
}

function getActivity(event){
    event.preventDefault()
    console.log(event)
    let theActivity = document.getElementById('select').value
    let activities = document.getElementById('activity')
    if (theActivity === 'recreational'){
        fetch(BASE_URL + '/activity?type=recreational')
        .then(res => res.json())
        .then(activity => {
            console.log(activity)
            activities.innerHTML = `
            <li>Activity: ${activity.activity}</li>
            <li> Type: ${activity.type}</li>
            <li> Particpants: ${activity.particpants}</li>`
        })
    } else if (theActivity ==='education'){
        fetch(BASE_URL + '/activity?type=education')
        .then(res => res.json())
        .then(activity => {
            console.log(activity)
            activities.innerHTML = `
            <li>Activity: ${activity.activity}</li>
            <li> Type: ${activity.type}</li>
            <li> Particpants: ${activity.particpants}</li>`
        })
    } else {
        fetch(BASE_URL + '/activity?type=relaxation')
        .then(res => res.json())
        .then(activity => {
            console.log(activity)
            activities.innerHTML = `
            <li>Activity: ${activity.activity}</li>
            <li> Type: ${activity.type}</li>
            <li> Particpants: ${activity.particpants}</li>`
        })
    }
}

