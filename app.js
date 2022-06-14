let NameValue = document.getElementById("Name").value;
let DistValue = document.getElementById("Distance").value;

function addCities(name, distance) {
    container = document.getElementById('container')

    let div = document.createElement("div")
    let pname = document.createElement("p")
    let pdist = document.createElement("p")

    let nameInput = document.createTextNode(NameValue)
    let distInput = document.createTextNode(DistValue)

    pname.appendChild(nameInput)
    pdist.appendChild(distInput)

    div.appendChild(pname)
    div.appendChild(pdist)
    
    div.classList.add('city')

    container.appendChild(div)

}

document.getElementById('form1').addEventListener("submit", (e) => {
    e.preventDefault()

    NameValue = document.getElementById("Name").value;
    DistValue = document.getElementById("Distance").value;

    console.log(NameValue)
    console.log(DistValue)

    addCities(NameValue, DistValue)
})

document.getElementById('reinit').addEventListener("click", (e) => {
    console.log('test')

    // "Il faut manipuler le local avant de réinitialiser le storage !", -JCVD
})

// let nameStorage = JSON.parse(window.localStorage.getItem('Name'))
// let distStorage = JSON.parse(window.localStorage.getItem('Distance'))

// localStorage.setItem("Name", NameValue);
// localStorage.setItem("Distance", DistValue);