const tempValue = document.querySelector(".temp-input");
const convertBtn = document.querySelector(".convertBtn");
const error = document.querySelector(".error");
const fromScale = document.querySelector(".from-scale");
const toScale = document.querySelector(".to-scale");

// let value = tempValue.value;

let fromUnit = fromScale.value;
let toUnit = toScale.value;

console.log(fromUnit, toUnit);

const getUnitSymbol = (unit) => {
  switch (unit) {
    case "celcuis":
      return "°C";
    case "fahrenheit":
      return "°F";
    case "kelvin":
      return "K";
  }
};

const symbol = getUnitSymbol(toUnit);
console.log(symbol);

const handleError = () => {
  console.log("clicked");
  let value = tempValue.value;

  console.log(value);

  if (isNaN(value) || value === "") {
    error.style.display = "block";
  } else {
    error.style.display = "none";
  }
};

convertBtn.addEventListener("click", handleError);
