let postNameInput = document.getElementById("post-name");
let postForm = document.getElementById("post-form");
let getButton = document.getElementById("get-button");


postForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const answer = ["Yes", "No", "Maybe tomorrow"];
        let randomIndex = Math.floor(Math.random() * answer.length);
        let eightballAnswer = answer[randomIndex];
    
    let data = {
      question: postNameInput.value,
      answer: eightballAnswer
    }

    axios
      .post('http://localhost:4000/goal', data)
      .then((result) => {
        alert(eightballAnswer);
        console.log(result.data)
      })
      .catch(() => {
        console.log('Sorry, we are experiencing a problem.')
      })
  })


function getClickHandler() {
    axios.get("http://localhost:4000/goals").then((result) => {
      let s = ""
      for (let thing of result.data) {
        s += `Question: ${(thing.question ?? thing.name)} Answer: ${thing.answer}\n`
      }
     
      alert(s)
    })   
  }
  
  getButton.addEventListener("click", getClickHandler);
  
  
  




