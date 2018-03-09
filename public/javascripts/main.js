(() => {
  // variables always get declared at the top of the JS file
  let getButtons = document.querySelectorAll('.getButton')

  function fetchData() {
    let url = "api/" + this.id;

    fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
    })
    .catch(function(error) {
      console.log(error);
    });
  }

 
  // event handling always goes at the bottom
  getButtons.forEach(button => button.addEventListener('click', fetchData));
 
})();
