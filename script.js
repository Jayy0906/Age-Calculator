// script.js
document.getElementById("ageForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
  
    const dob = document.getElementById("dob").value;
    const resultDiv = document.getElementById("result");
    const errorDiv = document.getElementById("error");
  
    // Clear previous results
    resultDiv.innerHTML = "";
    errorDiv.innerHTML = "";
  
    if (!dob) {
      errorDiv.innerHTML = "Please select a valid date of birth.";
      return;
    }
  
    const dobDate = new Date(dob);
    const today = new Date();
  
    if (dobDate > today) {
      errorDiv.innerHTML = "Date of birth cannot be in the future.";
      return;
    }
  
    // Calculate age
    let age = today.getFullYear() - dobDate.getFullYear();
    const monthDiff = today.getMonth() - dobDate.getMonth();
    const dayDiff = today.getDate() - dobDate.getDate();
  
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
  
    resultDiv.innerHTML = `Your age is <strong>${age} years</strong>.`;
  });
  