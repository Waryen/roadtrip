document.getElementById('form1').addEventListener("submit", (e) => {
    e.preventDefault()
    let NameValue = document.getElementById("Name").value;
    let DistValue = document.getElementById("Distance").value;

    console.log(NameValue)
    console.log(DistValue)

})