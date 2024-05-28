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
    let dogName = document.createElement('h3')
    dogName.innerText = `Name: ${dog.name}`
    let dogBreed = document.createElement('h3')
    dogBreed.innerText = `Breed: ${dog.breed}`
    document.querySelector('#dog-list').appendChild(img)
    document.querySelector('#dog-list').appendChild(dogName)
    document.querySelector('#dog-list').appendChild(dogBreed)
  }

  function handleButton(){
    alert('You have been added the waitlist!! We will email you shortly.')
  }


  const renderPage = () => {
    displayDogs()
  }

//   function handleDoubleClick(){
//     img.src = dogsArray[0].image2
// }
  
  //Event Listeners
  document.addEventListener("DOMContentLoaded", renderPage)
  btn.addEventListener('click', handleButton)
//   img.addEventListener('dblclick', handleDoubleClick)