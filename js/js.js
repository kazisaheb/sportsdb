let input = document.getElementById('input')

var myVar;
function loader() {
  if (input.value != '')
    document.getElementById("loader").style.display = "block";
  myVar = setTimeout(showPage, 3000);
}
function showPage() {
  document.getElementById("loader").style.display = "none";
}
// It's just loader


//Load and display sports
players = async () => {
  let displaySports = document.getElementById('displaySports')
  if (input.value != '')
    displaySports.innerHTML = ''
  res = await fetch('https://www.thesportsdb.com/api/v1/json/2/all_sports.php')
  data = await res.json()

  data.sports.forEach(e => {
    let sports = document.createElement('div')
    sports.classList.add('col')
    sports.innerHTML = `
    <div class="card">
    <img src="${e.strSportThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${e.strSport}</h5>
      <p class="card-text d-none">${e.strSportDescription.slice(0, 100)}</p>
      <div class="btns d-flex justify-content-between">
      <button class="btn btn-danger">Remove</button>
      <button class="btn btn-primary">Details</button>
    </div>
      </div>
  </div>
    `
    displaySports.append(sports)
  });
  input.value = ''
}
//Remove soprts from display
document.addEventListener('click', function (e) {
  if (e.target.className == 'btn btn-danger') {
    e.target.parentNode.parentNode.parentNode.parentNode.remove()
  }
})
//Show details
document.addEventListener('click', function (e) {
  if (e.target.className == 'btn btn-primary') {
    e.target.parentNode.parentNode.childNodes[1].nextElementSibling.classList.remove('d-none')
  }
})