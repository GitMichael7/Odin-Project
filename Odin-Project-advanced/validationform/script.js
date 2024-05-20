document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myForm");

  form.addEventListener("input", function (event) {
    validateField(event.target);
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const fields = form.querySelectorAll("input[required]");
    let isValid = true;

    fields.forEach((field) => {
      if (!validateField(field)) {
        isValid = false;
      }
    });

    if (isValid) {
      document.getElementById("success-message").textContent =
        "High five! Form submitted successfully.";
      document.getElementById("success-message").style.display = "block";
    } else {
      document.getElementById("success-message").textContent = "";
      alert("Please correct the errors before submitting the form.");
    }
  });

  function validateField(field) {
    const errorElement = document.getElementById(`${field.id}-error`);
    let errorMessage = "";

    if (!field.checkValidity()) {
      if (field.validity.valueMissing) {
        errorMessage = "This field is required.";
      } else if (field.validity.typeMismatch) {
        errorMessage = "Please enter a valid email address.";
      } else if (field.validity.patternMismatch) {
        errorMessage = "Please enter a valid zip code.";
      } else if (field.validity.tooShort) {
        errorMessage = `Password should be at least ${field.minLength} characters long.`;
      }
    }

    if (
      field.id === "confirm-password" &&
      field.value !== document.getElementById("password").value
    ) {
      errorMessage = "Passwords do not match.";
    }

    if (errorMessage) {
      field.classList.add("error");
      errorElement.textContent = errorMessage;
      errorElement.style.display = "block";
      return false;
    } else {
      field.classList.remove("error");
      errorElement.textContent = "";
      errorElement.style.display = "none";
      return true;
    }
  }
});
