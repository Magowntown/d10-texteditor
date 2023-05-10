function boldTgl() {
  let btn = document.getElementById("textBox");
  if (btn.style.fontWeight !== "bold") {
    btn.style.fontWeight = "bold";
  } else {
    btn.style.fontWeight = "normal";
  }
}

function italicTgl() {
  let btn = document.getElementById("textBox");
  if (btn.style.fontStyle !== "italic") {
    btn.style.fontStyle = "italic";
  } else {
    btn.style.fontStyle = "normal";
  }
}

function leftTgl() {
  let btn = document.getElementById("textBox");
  if (btn.style.textAlign !== "left") {
    btn.style.textAlign = "left";
  } else {
    btn.style.textAlign = "initial";
  }
}

function centerTgl() {
  let btn = document.getElementById("textBox");
  if (btn.style.textAlign !== "center") {
    btn.style.textAlign = "center";
  } else {
    btn.style.textAlign = "initial";
  }
}

function rightTgl() {
  let btn = document.getElementById("textBox");
  if (btn.style.textAlign !== "right") {
    btn.style.textAlign = "right";
  } else {
    btn.style.textAlign = "initial";
  }
}

function upperTgl() {
  let btn = document.getElementById("textBox");
  if (btn.style.textTransform !== "uppercase") {
    btn.style.textTransform = "uppercase";
  } else {
    btn.style.textTransform = "initial";
  }
}

function lowerTgl() {
  let btn = document.getElementById("textBox");
  if (btn.style.textTransform !== "lowercase") {
    btn.style.textTransform = "lowercase";
  } else {
    btn.style.textTransform = "initial";
  }
}

function capitalizeTgl() {
  let btn = document.getElementById("textBox");
  if (btn.style.textTransform !== "capitalize") {
    btn.style.textTransform = "capitalize";
  } else {
    btn.style.textTransform = "initial";
  }
}

function clearTgl() {
  let btn = document.getElementById("textBox");
  if (btn.value !== "") {
    btn.value = "";
    btn.style.fontWeight = "normal";
    btn.style.fontStyle = "normal";
    btn.style.textAlign = "initial";
    btn.style.textTransform = "initial";
  } else {
    btn.value = "Enter Text";
  }
}
