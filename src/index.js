const BASE_URL = "https://www.boredapi.com/api"

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('type').addEventListener('click', getActivities)
    document.getElementById('random').addEventListener('click', randomize)
})

function getActivities(){
    let buttons = document.getElementById('buttons')
    buttons.innerHTML = ''
    buttons.innerHTML += '<button class ="button">Recreational</button> <button class="button">Relaxation</button> <button class="button">Social</button> <button class="button">Music</button> <button class="button">Cooking</button> <button class="button">Education</button>'
    
}
