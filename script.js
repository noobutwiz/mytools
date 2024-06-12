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
    // Swal.fire({
    //   title: "Please enter a name!",
    //   text: "Are you nuts?",
    //   icon: "warning",
    // });
    Swal.fire({
      title: "Please enter a name!",
      text: "Are you nuts?",
      icon: "warning",
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
var conversionData = {}; // Object to store conversion count per date

// Function to retrieve conversion data from local storage
function retrieveConversionData() {
  var storedData = localStorage.getItem("conversionData");
  if (storedData) {
    conversionData = JSON.parse(storedData);
  }
}

// Function to save conversion data to local storage
function saveConversionData() {
  localStorage.setItem("conversionData", JSON.stringify(conversionData));
}

// Initialize chart
var ctx = document.getElementById("conversionChart").getContext("2d");
conversionChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [],
    datasets: [
      {
        label: "Number of Conversions",
        data: [],
        backgroundColor: "#0086FF",
        borderColor: "#0d6efd",
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

// Function to update chart with conversion data
function updateChart() {
  conversionChart.data.labels = Object.keys(conversionData);
  conversionChart.data.datasets[0].data = Object.values(conversionData);
  conversionChart.update();
}

// Retrieve conversion data from local storage
retrieveConversionData();
// Update chart with retrieved conversion data
updateChart();

function convertSeconds(date) {
  var input = document.getElementById("secondsInput").value;
  if (!input || isNaN(input)) {
    // Show SweetAlert if the input is empty or not a number
    Swal.fire({
      title: "Invalid Input!",
      text: "You don't do that.",
      icon: "warning",
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

  // Increment the conversion count for the provided date or today's date if not provided
  var currentDate = date ? date.toDateString() : new Date().toDateString();
  if (!conversionData[currentDate]) {
    conversionData[currentDate] = 1;
  } else {
    conversionData[currentDate]++;
  }

  // Update chart with new data
  updateChart();
  // Save conversion data to local storage
  saveConversionData();
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

// FOR BACK-TO-TOP BUTTON

// Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
