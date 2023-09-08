let result = document.getElementById("inputext");

let calculate = (value) => {
  result.value += value;
}

let output = () => {
  try {
    let expression = result.value;

    // Handle percentage input
    expression = expression.replace(/%/g, '*0.01');

    result.value = eval(expression);
  } catch (err) {
    alert("Enter a valid value.");
  }
}

function clr() {
  result.value = " ";
}

function del() {
  result.value = result.value.slice(0, -1);
}



