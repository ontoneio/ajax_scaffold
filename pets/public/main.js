const submitNewName = () => {
  let petNameField = document.querySelectorAll(".pet-name");
  let pet_id;
  let newName;
  console.log('p -> ',petNameField);
  

  petNameField.forEach( (pet, currentIndex) => {
    pet_id = currentIndex;
    newName = pet.value;
    
    pet.addEventListener("keypress", (event) => {
      event.preventDefault();
      fetch(`pets/${pet_id}/update_name`,{
        method: 'PUT',
        body: JSON.stringify({
          newName: newName
        })
      })
        .then(console.log)
        .catch(console.error);
    })
  });
}
