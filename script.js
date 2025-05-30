const pass = document.getElementById("password");
const msg = document.getElementById("message");
const str = document.getElementById("strength");

pass.addEventListener("input", () => {
  const val = pass.value;
  msg.style.display = val.length > 0 ? "block" : "none";

  if (val.length === 0) {
    pass.style.borderColor = "";
    msg.style.color = "";
    str.innerHTML = "";
    return;
  }

  // Regex Checks
  const hasUpper = /[A-Z]/.test(val);
  const hasNumber = /\d/.test(val);
  const hasSpecial = /[^A-Za-z0-9]/.test(val);

  let strengthLevel = 0;
  if (val.length >= 8) strengthLevel++;
  if (hasUpper) strengthLevel++;
  if (hasNumber) strengthLevel++;
  if (hasSpecial) strengthLevel++;

  // Strength logic
  if (strengthLevel <= 1) {
    str.innerHTML = "Weak";
    pass.style.borderColor = "#ff4d4d";
    msg.style.color = "#ff4d4d";
  } else if (strengthLevel === 2 || strengthLevel === 3) {
    str.innerHTML = "Medium";
    pass.style.borderColor = "#ffc107";
    msg.style.color = "#ffc107";
  } else {
    str.innerHTML = "Strong";
    pass.style.borderColor = "#28a745";
    msg.style.color = "#28a745";
  }
});
