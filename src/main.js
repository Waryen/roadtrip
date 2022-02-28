// DOM elements
const stepNameInput = document.querySelector("#step-name");
const stepRangeInput = document.querySelector("#step-range");
const stepSubmit = document.querySelector("#step-submit");
const stepsList = document.querySelector("#steps-list");
const totalRangeEl = document.querySelector("#total-range");
const resetBtn = document.querySelector("#reset");

// Variables
let oldList = null;
let stepName = null;
let stepRange = null;

// total range calcul
function totalRangeCal(steps) {
  const ranges = steps.map((step) => step.range);
  return ranges.reduce(
    (prev, curr) => parseInt(prev) + parseInt(curr),
    ranges[0]
  );
}

// listeners
function resetSteps() {
  window.localStorage.setItem("steps-list", []);
  location.reload();
}

function stepNameListener(e) {
  stepName = e.target.value;
}

function stepRangeListener(e) {
  stepRange = e.target.value;
}

function addStepListener(e) {
  e.preventDefault();
  const newStep = {
    name: stepName,
    range: stepRange,
  };
  let newList;
  if (oldList) {
    newList = [...oldList, newStep];
  } else {
    newList = [newStep];
  }
  window.localStorage.setItem("steps-list", JSON.stringify(newList));
  location.reload();
}

// check if there is a steps list already existing on document load
localList = window.localStorage.getItem("steps-list");
if (!localList || localList.length == 0) {
  const empty = "Il n'y a pas encore d'étapes enregistrées.";
  const node = stepsList.appendChild(document.createElement("p"));
  node.textContent = empty;
  totalRangeEl.textContent = "0 km";
} else {
  oldList = JSON.parse(localList);
  oldList.map((step) => {
    const li = document.createElement("li");
    const name = document.createElement("p");
    const range = document.createElement("p");
    name.textContent = step.name;
    range.textContent = step.range;
    li.appendChild(name);
    li.appendChild(range);
    stepsList.appendChild(li);
  });
  totalRangeEl.textContent = `${totalRangeCal(oldList)} km`;
}

// events listener
stepNameInput.addEventListener("input", stepNameListener);
stepRangeInput.addEventListener("input", stepRangeListener);
stepSubmit.addEventListener("click", addStepListener);
resetBtn.addEventListener("click", resetSteps);
