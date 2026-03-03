// TASK 1: Change paragraph text using DOM
function changeIntroText() {
  document.getElementById("introText").innerText =
    "This text was changed dynamically using JavaScript DOM manipulation.";
}
function changeBgColor(color) {
  document.body.style.backgroundColor = color;

  const para = document.getElementById("introText");

  // FORCE override external CSS
  para.style.setProperty("color", 
    color === "#fde2e4" ? "#17eb76" :
    color === "#e2f0cb" ? "#1f4d1f" :
    "#2a42ae",
    "important"
  );
}


// TASK 2: Dynamically add list items
let skillCount = 1;

function addSkill() {
  let li = document.createElement("li");
  li.innerText = "Skill " + skillCount;

  document.getElementById("skillList").appendChild(li);
  skillCount++;
}

// TASK 3: Remove last list item
function removeSkill() {
  let list = document.getElementById("skillList");

  if (list.lastChild) {
    list.removeChild(list.lastChild);
    skillCount--;
  }
}

