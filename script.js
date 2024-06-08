var csvData; // Global variable to store CSV data

// Function to load the CSV file automatically
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

  xhr.onerror = function () {
    console.error("An error occurred while loading the CSV file.");
  };

  xhr.open("GET", file, true);
  xhr.send();
}

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Function to capitalize syllables in a string
function capitalizeSyllables(string) {
  return string.replace(/\b\w/g, function (char) {
    return char.toUpperCase();
  });
}

// Add event listener for 'keydown' event on the name input field
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("nameInput")
    .addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault(); // Prevent default form submission behavior
        queryEmployee(); // Call queryEmployee() when Enter key is pressed
      }
    });

  // Load CSV file automatically when the window is loaded
  loadCSVFile();
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

// FOR CONVERTER

var conversionChart;
var conversionCount = 0; // Counter for conversion queries

function convertSeconds() {
  var input = document.getElementById("secondsInput").value;
  if (!input || isNaN(input)) {
    // Show SweetAlert if the input is empty or not a number
    Swal.fire({
      title: "Invalid Input",
      text: "Please enter a valid number of seconds.",
      showClass: {
        popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `,
      },
      hideClass: {
        popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `,
      },
    });
    return;
  }

  var seconds = parseInt(input);
  var minutes = Math.floor(seconds / 60);
  var remainingSeconds = seconds % 60;
  var resultConversionString =
    seconds +
    " Seconds = " +
    (minutes + remainingSeconds / 60).toFixed(2) +
    " Minutes = ";
  if (minutes === 1) {
    resultConversionString += "1 Minute";
  } else {
    resultConversionString += minutes + " Minutes";
  }
  resultConversionString += " and ";
  if (remainingSeconds === 1) {
    resultConversionString += "1 Second";
  } else {
    resultConversionString += remainingSeconds + " Seconds";
  }
  document.getElementById("resultConversion").innerText =
    resultConversionString;

  // Increment the conversion count
  conversionCount++;

  // Trigger confetti effect
  var canvas = document.getElementById("confettiCanvas");
  var myConfetti = confetti.create(canvas, {
    resize: true,
    useWorker: true,
  });
  myConfetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });

  // Update the chart to display conversion count
  if (conversionChart) {
    conversionChart.destroy();
  }

  var ctx = document.getElementById("conversionChart").getContext("2d");
  conversionChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Conversion Count"],
      datasets: [
        {
          label: "Number of Conversions",
          data: [conversionCount],
          backgroundColor: ["#80B9AD"],
          borderColor: ["#538392"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
}

// Event listener for "Enter" key press
document
  .getElementById("secondsInput")
  .addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      convertSeconds();
    }
  });
