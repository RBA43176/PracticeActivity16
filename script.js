alert("Script is connected!");

console.log("Welcome to Roy's Portfolio!");
console.warn("Welcome to Roy's Portfolio!");

// 1. Footer Year
function getCurrentYear() {
  return new Date().getFullYear();
}

const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = getCurrentYear();
}

// 2. Experience Calculator
function calculateExperience(startYear) {
  return new Date().getFullYear() - startYear;
}

const expSpan = document.getElementById("expYears");
if (expSpan) {
  expSpan.textContent = calculateExperience(2020);
}

// 3. Project Table Counter
function updateProjectCount() {
  const rows = document.querySelectorAll('table tbody tr');
  console.log("Total projects:", rows.length);

  const countSpan = document.getElementById("projectCount");
  if (countSpan) {
    countSpan.textContent = rows.length;
  }
}

updateProjectCount();

const tableBody = document.getElementById("projectTableBody");
if (tableBody) {
  const observer = new MutationObserver(updateProjectCount);
  observer.observe(tableBody, { childList: true });
}

// 4. Form Validation
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name === "" || email === "") {
    alert("Please fill in all fields");
    return false;
  }

  alert("Message sent!");
  return false;
}
