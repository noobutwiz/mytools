var csvData; // Global variable to store CSV data

// Function to load the CSV file automatically
window.onload = function () {
  loadCSVFile();
};

function loadCSVFile() {
  var file = "employees.csv"; // Assuming employees.csv is in the same folder
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        csvData = xhr.responseText;
        // Call queryEmployee() if CSV file loaded successfully
        // This ensures that the employee data is available when searching
        queryEmployee();
      } else {
        console.error("Failed to load CSV file. Status code: " + xhr.status);
      }
    }
  };

  xhr.open("GET", file, true);
  xhr.send();
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function capitalizeSyllables(string) {
  return string.replace(/\b\w/g, function (char) {
    return char.toUpperCase();
  });
}

// Add event listener for 'keydown' event on the name input field
document
  .getElementById("nameInput")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      queryEmployee(); // Call queryEmployee() when Enter key is pressed
    }
  });

function queryEmployee() {
  // Check if the search button is clicked within section one and if the input field is empty
  if (
    document.getElementById("sectionOne").contains(event.target) &&
    document.getElementById("nameInput").value.trim() === ""
  ) {
    // Use Sweet Alert instead of alert
    Swal.fire({
      title: "Please enter a name!",
      text: "Are you nuts?",
      icon: "warning",
    });
    return;
  }

  var name = capitalizeSyllables(
    document.getElementById("nameInput").value.trim().toLowerCase()
  );

  if (!csvData) {
    console.error("CSV file not loaded.");
    return;
  }

  var rows = csvData.split("\n");
  for (var i = 0; i < rows.length; i++) {
    var columns = rows[i].split(",");
    var employeeName = capitalizeSyllables(columns[0].trim().toLowerCase());
    var employeeId = columns[1] ? columns[1].trim() : "";
    var tlName = columns[2] ? columns[2].trim() : "";
    var site = columns[3] ? columns[3].trim() : "";
    var waveNumber = columns[4] ? columns[4].trim() : "";
    var hiredDate = columns[5] ? columns[5].trim() : "";
    var tenure = columns[6] ? columns[6].trim() : "";
    var agentStatus = columns[7] ? columns[7].trim() : "";

    if (employeeName.includes(name)) {
      // Display employee information
      document.getElementById("result").innerHTML =
        "<p><strong>Employee Name:</strong> " +
        employeeName +
        "</p><p><strong>Employee Number:</strong> " +
        employeeId.toUpperCase() +
        "</p><p><strong>TL Name:</strong> " +
        tlName +
        "</p><p><strong>Site:</strong> " +
        site +
        "</p><p><strong>Wave Number:</strong> " +
        waveNumber +
        "</p><p><strong>Hired Date:</strong> " +
        hiredDate +
        "</p><p><strong>Tenure:</strong> " +
        tenure +
        "</p><p><strong>Agent Status:</strong> " +
        agentStatus +
        "</p>";
      document.getElementById("wrapIDResult").style.display = "block";
      return; // Exit the loop once found
    }
  }

  // If loop completes without finding the employee
  document.getElementById("result").innerText = "Employee not found.";
  document.getElementById("wrapIDResult").style.display = "block";
}
