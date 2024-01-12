let displayValue = "";
// let history="";

function updateDisplay() {
  const display = document.getElementById("display");
  display.value = displayValue;
}

function changestyle(){
  const change = document.getElementById("change");
        if(change.textContent==="OFF"){
          // displayValue = "";
          change.textContent="ON"
            
        }
        else{
          // displayValue=displayValue;
          change.textContent="OFF"
        }
}
function message(){

}


function appendValue(val) {
  displayValue += val;
  updateDisplay();
}
function showdata() {
  const history = document.getElementById("history");
  const showhistory = document.getElementById("showhistory");
  history.addEventListener("click", () => {
    if (showhistory.style.display === "none") {
      showhistory.style.display = "block";
    } else {
      showhistory.style.display = "none";
    }
  });
}

function updateHistory() {
  const para = document.getElementById("para");
  const newParagraph = document.createElement("p");
  const newbutton = document.createElement("button");
  newbutton.textContent = 'copy';
  newParagraph.textContent = displayValue;
  // Append the new paragraph to the container
  para.appendChild(newParagraph);
  para.appendChild(newbutton)
  newbutton.onclick = function() {
    navigator.clipboard.writeText(newParagraph.textContent);
  }
  }




// function updateHistory() {
//   const historyDiv = document.getElementById('para');
//   historyDiv.innerText = history;
// }

function calculate() {
  try {
    const result = eval(displayValue);
    displayValue = result.toString();
    updateDisplay();
    updateHistory();
    
    if(change.textContent==="OFF"){
      displayValue = "";
  }
    

    // history = `${displayValue} = ${result}`;
    // showResultButton();


  } catch (error) {
    displayValue = "Error";
    updateDisplay();
  }
}
function clearvalue() {
  displayValue = "";
  updateDisplay();
  hideResultButton();
}

function clearhistory() {
  updatepara();
}

function updatepara() {
  const para = document.getElementById("para");
  para.textContent = "";
}


// function showResultButton() {
//   const resultButton = document.getElementById("clear");
//   resultButton.style.display = "block";
// }
// function hideResultButton() {
//   const resultButton = document.getElementById("clear");
//   resultButton.style.display = "none";
// }

document.addEventListener("keydown", (event) => {
  const key = event.key;
  if (
    !isNaN(key) ||
    key === "." ||
    key === "+" ||
    key === "-" ||
    key === "*" ||
    key === "/" ||
    key === "="
  ) {
    event.preventDefault(); // Prevent default keyboard behavior (e.g., scrolling)
    if (key === "=") {
      calculate();
    } else {
      appendValue(key);
    }
  } else if (key === "Enter") {
    event.preventDefault(); // Prevent default form submission behavior
    calculate();
  } else if (key === "Backspace") {
    event.preventDefault(); // Prevent default backspace behavior (e.g., navigation)
    displayValue = displayValue.slice(0, -1); // Remove the last character from the displayValue
    updateDisplay();
  } else if (key === "Escape") {
    clearvalue();
  }
});
