let collection = JSON.parse(window.localStorage.getItem('collection'))
window.localStorage.setItem('collection', JSON.stringify(collection))

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

    let input = {
        Name: NameValue,
        Distance: DistValue,
      }
      collection.push(input)

      window.localStorage.setItem('collection', JSON.stringify(collection))
      window.localStorage.setItem('collection', JSON.stringify(collection))
      window.location.reload();

}

document.getElementById('form1').addEventListener("submit", (e) => {
    e.preventDefault()

    NameValue = document.getElementById("Name").value;
    DistValue = document.getElementById("Distance").value;

    console.log(NameValue)
    console.log(DistValue)

    addCities(NameValue, DistValue)
    localStorage.setItem("Name", NameValue);
    localStorage.setItem("Distance", DistValue);
})

document.getElementById('reinit').addEventListener("click", (e) => {
    window.localStorage.removeItem('collection')
    window.location.reload();

    // "Il faut manipuler le local avant de réinitialiser le storage !", -JCVD
})

// let nameStorage = JSON.parse(window.localStorage.getItem('Name'))
// let distStorage = JSON.parse(window.localStorage.getItem('Distance'))

// localStorage.setItem("Name", NameValue);
// localStorage.setItem("Distance", DistValue);

// window.localStorage.removeItem('collection')
// window.location.reload();