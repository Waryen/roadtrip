

let NameValue = document.getElementById("Name").value;
let DistValue = document.getElementById("Distance").value;
let stepsList = document.getElementById('container')
let totalRangeEl  = document.querySelector('.displayDist')


let oldList = null;
let stepName = null;
let stepRange = null;


function totalRangeCal(steps) {
    const ranges = steps.map((step) => step.range);
    return ranges.reduce(
      (prev, curr) => parseInt(prev) + parseInt(curr),
      ranges[0]
    );
  }

document.getElementById('form1').addEventListener("submit", (e) => {
    e.preventDefault()

    NameValue = document.getElementById("Name").value;
    DistValue = document.getElementById("Distance").value;

    console.log(NameValue)
    console.log(DistValue)

    localStorage.setItem("Name", NameValue);
    localStorage.setItem("Distance", DistValue);

    e.preventDefault();
  const newStep = {
    name: NameValue,
    range: DistValue,
  };
  let newList;
  if (oldList) {
    newList = [...oldList, newStep];
  } else {
    newList = [newStep];
  }
  window.localStorage.setItem("steps-list", JSON.stringify(newList));
  location.reload();
})



document.getElementById('reinit').addEventListener("click", (e) => {
        window.localStorage.setItem("steps-list", []);
        location.reload();
})

localList = window.localStorage.getItem("steps-list");
if (!localList || localList.length == 0) {
  const empty = "";
  const node = stepsList.appendChild(document.createElement("p"));
  node.textContent = empty;
  totalRangeEl.textContent = ": 0 km";
} else {
  oldList = JSON.parse(localList);
  oldList.map((step) => {
    let div = document.createElement("div")
    let pname = document.createElement("p")
    let pdist = document.createElement("p")

    let nameInput = document.createTextNode(NameValue)
    let distInput = document.createTextNode(DistValue)

    pname.appendChild(nameInput)
    pdist.appendChild(distInput)
    pdist.classList.add('distance')

    div.appendChild(pname)
    div.appendChild(pdist)
    
    div.classList.add('city')

    stepsList.appendChild(div);
  });
  totalRangeEl.textContent = `${totalRangeCal(oldList)} km`;
}