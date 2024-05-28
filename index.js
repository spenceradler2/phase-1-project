// index.js
//Global Variables
const baseUrl = "http://localhost:3000"
let dogsArray =[]

const displayDogs = () => {
    fetch(`${baseUrl}/dogs`)
    .then(response => {
      return response.json()
    })
    .then(dogs => {
      dogsArray = dogs
      renderDogs(dogs)
    })
    function renderDogs(dogs) {
      dogs.forEach(dog => {
        renderDog(dog)
      })
    }
  };

  function renderDog(dog){
    let img = document.createElement('img')
    img.src = dog.image
    img.id = 'dog-images'
    document.querySelector('#dog-list').appendChild(img)
  }

  const renderPage = () => {
    displayDogs()
  }
  
  //Event Listeners
  document.addEventListener("DOMContentLoaded", renderPage)