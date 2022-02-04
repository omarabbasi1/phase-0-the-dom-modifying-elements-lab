// Write your code here!
// const element = document.createElement("div");

// document.body.append(element);

// const ul = document.createElement("ul");

// for (let i = 0; i < 3; i++) {
//   const li = document.createElement("li");
//   li.textContent = (i + 1).toString();
//   ul.append(li);
//   li.textContent = "Hi there!";


// element.append(ul);

// const ul = document.getElementsByTagName("ul")[0];
// const secondChild = ul.querySelector("li:nth-child(2)");
// ul.removeChild(secondChild);

// ul.remove();
// }
// const main = document.getElementById("main");
// main.innerHTML =
//   "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";

  const testVar = "hi"

  /* Enter the code to remove the node element here */
  document.querySelector("main#main").remove();
  
  
  /* Create your new element here and assign it to newHeader */
  const newHeader = document.createElement("h1");
  newHeader.id = "victory"
  newHeader.innerHTML = "Flatiron School is the champion!";
  newHeader.className = "victory";