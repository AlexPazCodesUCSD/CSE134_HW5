document.addEventListener("DOMContentLoaded", function () {
  let touchedFields = {
    name: false,
    title: false,
    comments: false,
  };

  const inputs = {
    name: document.getElementById("name"),
    title: document.getElementById("title"),
    comments: document.getElementById("comments"),
  };

  const outputs = {
    name: document.getElementById("error-name"),
    title: document.getElementById("error-title"),
    comments: document.getElementById("error-comment"),
  };

  let error_array = [];

  Object.keys(inputs).forEach((key) => {
    inputs[key].addEventListener("input", () => {
      updateCount();
      if (!touchedFields[key] && inputs[key].value.length > 0) {
        touchedFields[key] = true;
      }
      validateFieldOnInput(key);
    });

    inputs[key].addEventListener("blur", () => {
      touchedFields[key] = true;
      validateFieldOnBlur(key);
      storeErrors();
    });
  });

  document.getElementById("comment-form").addEventListener("submit", function (event) {
      const form = event.target;
      const formErrors = document.getElementById("form-errors");
      formErrors.value = JSON.stringify(error_array);

      if (!form.checkValidity()) {
        event.preventDefault();
        alert("Please fix the errors before submitting.");
      }
    });

  function validateFieldOnBlur(field) {
    let errorMessage = "";

    if (touchedFields[field]) {
      const value = inputs[field].value;

      switch (field) {
        case "name":
          outputs[field].style.display = "inline";
          if (value.length < 3) {
            outputs[field].textContent = "Name cannot be less than 3 characters.";
            inputs[field].classList.remove("flash");
            outputs[field].classList.remove("fade");
            setTimeout(() => {
              inputs[field].classList.add("flash");
              outputs[field].classList.add("fade");
            }, 100);

            setTimeout(() => {
              outputs[field].style.display = "none";
            }, 2000);

            // Set custom validity message for name
            inputs[field].setCustomValidity(
              "Name cannot be less than 3 characters."
            );
            inputs[field].className = "invalid";
          } else if (/[^a-zA-Z0-9\s.,!?'-]/.test(value)) {
            // Set custom validity message for special characters
            inputs[field].setCustomValidity(
              "Name cannot contain special characters."
            );
            inputs[field].className = "invalid";
          } else {
            // Clear the custom validity message for valid name
            inputs[field].setCustomValidity("");
            outputs[field].style.display = "none";
            inputs[field].className = "valid";
          }
          break;

        case "title":
          outputs[field].style.display = "inline";
          if (value.length < 5) {
            outputs[field].textContent =
              "Title cannot be less than 5 characters.";
            inputs[field].classList.remove("flash");
            outputs[field].classList.remove("fade");
            setTimeout(() => {
              inputs[field].classList.add("flash");
              outputs[field].classList.add("fade");
            }, 100);

            setTimeout(() => {
              outputs[field].style.display = "none";
            }, 2000);

            // Set custom validity message for title
            inputs[field].setCustomValidity(
              "Title cannot be less than 5 characters."
            );
            inputs[field].className = "invalid";
          } else if (/[^a-zA-Z0-9\s.,!?'-]/.test(value)) {
            // Set custom validity message for special characters in title
            inputs[field].setCustomValidity(
              "Title cannot contain special characters."
            );
            inputs[field].className = "invalid";
          } else {
            // Clear the custom validity message for valid title
            inputs[field].setCustomValidity("");
            outputs[field].style.display = "none";
            inputs[field].className = "valid";
          }
          break;

        case "comments":
          outputs[field].style.display = "inline";
          if (value.length < 5) {
            outputs[field].textContent =
              "Comments cannot be less than 5 characters.";
            inputs[field].classList.remove("flash");
            outputs[field].classList.remove("fade");
            setTimeout(() => {
              inputs[field].classList.add("flash");
              outputs[field].classList.add("fade");
            }, 100);

            setTimeout(() => {
              outputs[field].style.display = "none";
            }, 2000);

            // Set custom validity message for comments
            inputs[field].setCustomValidity(
              "Comments cannot be less than 5 characters."
            );
            inputs[field].className = "invalid";
          } else if (/[^a-zA-Z0-9\s.,!?'-]/.test(value)) {
            // Set custom validity message for special characters in comments
            inputs[field].setCustomValidity(
              "Comments cannot contain special characters."
            );
            inputs[field].className = "invalid";
          } else {
            // Clear the custom validity message for valid comments
            inputs[field].setCustomValidity("");
            outputs[field].style.display = "none";
            inputs[field].className = "valid";
          }
          break;
      }
    }
  }

  function validateFieldOnInput(field) {
    let errorMessage = "";

    if (touchedFields[field]) {
      const value = inputs[field].value;

      switch (field) {
        case "name":
          outputs[field].style.display = "inline";
          if (/[^a-zA-Z0-9\s.,!?'-]/.test(value)) {
            outputs[field].textContent =
              "Name cannot contain special characters.";
            inputs[field].classList.remove("flash");
            outputs[field].classList.remove("fade");

            // Set custom validity message for name
            inputs[field].setCustomValidity(
              "Name cannot contain special characters."
            );

            setTimeout(() => {
              inputs[field].classList.add("flash");
              outputs[field].classList.add("fade");
            }, 100);

            setTimeout(() => {
              outputs[field].style.display = "none";
            }, 2000);
          } else {
            // Clear the custom validity message
            inputs[field].setCustomValidity("");
            outputs[field].style.display = "none";
          }
          break;

        case "title":
          outputs[field].style.display = "inline";
          if (/[^a-zA-Z0-9\s.,!?'-]/.test(value)) {
            outputs[field].textContent =
              "Title cannot contain special characters.";
            inputs[field].classList.remove("flash");
            outputs[field].classList.remove("fade");

            // Set custom validity message for title
            inputs[field].setCustomValidity(
              "Title cannot contain special characters."
            );

            setTimeout(() => {
              inputs[field].classList.add("flash");
              outputs[field].classList.add("fade");
            }, 100);

            setTimeout(() => {
              outputs[field].style.display = "none";
            }, 2000);
          } else {
            // Clear the custom validity message
            inputs[field].setCustomValidity("");
            outputs[field].style.display = "none";
          }
          break;

        case "comments":
          outputs[field].style.display = "inline";
          if (/[^a-zA-Z0-9\s.,!?'-]/.test(value)) {
            outputs[field].textContent =
              "Comments cannot contain special characters.";
            inputs[field].classList.remove("flash");
            outputs[field].classList.remove("fade");

            // Set custom validity message for comments
            inputs[field].setCustomValidity(
              "Comments cannot contain special characters."
            );

            setTimeout(() => {
              inputs[field].classList.add("flash");
              outputs[field].classList.add("fade");
            }, 100);

            setTimeout(() => {
              outputs[field].style.display = "none";
            }, 2000);
          } else {
            // Clear the custom validity message
            inputs[field].setCustomValidity("");
            outputs[field].style.display = "none";
          }
          break;
      }
    }
  }

  const updateCount = () => {
    const info = document.getElementById("remaining-num");
    const remaining = 800 - document.getElementById("comments").value.length;
    info.textContent = `${remaining}`;

    if (remaining > 50) {
      info.style.color = "black";
      info.classList.remove("shake");
    } else if (remaining > 0) {
      info.style.color = "orange";
      info.classList.remove("shake");
    } else {
      info.style.color = "red";
      info.classList.add("shake");
    }
  };

  const storeErrors = () => {
    if (touchedFields["name"]) {
      if (inputs["name"].value.length < 3) {
        error_array.push({
          field: "name",
          message: "Name cannot be less than 3 characters",
        });
      }
      if (/[^a-zA-Z0-9\s.,!?'-]/.test(inputs["name"].value)) {
        error_array.push({
          field: "name",
          message: "Name cannot contain special characters.",
        });
      }
    }

    if (touchedFields["title"]) {
      if (inputs["title"].value.length < 5) {
        error_array.push({
          field: "title",
          message: "Title cannot be less than 5 characters",
        });
      }
      if (/[^a-zA-Z0-9\s.,!?'-]/.test(inputs["title"].value)) {
        error_array.push({
          field: "title",
          message: "Title cannot contain special characters.",
        });
      }
    }

    if (touchedFields["comments"]) {
      if (inputs["comments"].value.length < 5) {
        error_array.push({
          field: "comments",
          message: "Comments cannot be less than 5 characters",
        });
      }
      if (/[^a-zA-Z0-9\s.,!?'-]/.test(inputs["comments"].value)) {
        error_array.push({
          field: "comments",
          message: "Comments cannot contain special characters.",
        });
      }
    }
  };
}
);