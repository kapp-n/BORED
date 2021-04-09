const BASE_URL = "https://www.boredapi.com/api"

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('type').addEventListener('click', getActivities)
    document.getElementById('random').addEventListener('click', randomize)
})
function randomize(){
    let buttons = document.getElementById('buttons')
    buttons.innerHTML = ''
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
    buttons.innerHTML += '<select> <option value ="recreational">Recreational Activity</option><option value="education">Educational Acitvity</option><option value="relax">Relaxational Acitivity</option></select>'
    document.getElementsByClassName('button').addEventListener('click', randomActivity)
}

// function randomActivity(){
//     switch(true)
// }