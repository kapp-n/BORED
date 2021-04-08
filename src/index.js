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
    buttons.innerHTML += '<button class ="button">Recreational</button> <button class="button">Relaxation</button> <button class="button">Social</button> <button class="button">Music</button> <button class="button">Cooking</button> <button class="button">Education</button>'
    document.getElementsByClassName('button').addEventListener('click', randomActivity)
}

function randomActivity(){
    
}