function updateProgressBars() {
    // HTML Progress Bar
    let htmlProgressBar = document.getElementById("htmlProgressBar");
    htmlProgressBar.style.width = "100%";
    htmlProgressBar.innerHTML = "100%";

    // CSS Progress Bar
    let cssProgressBar = document.getElementById("cssProgressBar");
    cssProgressBar.style.width = "100%";
    cssProgressBar.innerHTML = "100%";

    // JavaScript Progress Bar
    let javascriptProgressBar = document.getElementById("javascriptProgressBar");
    javascriptProgressBar.style.width = "50%";
    javascriptProgressBar.innerHTML = "50%";
  }

  // Call the function to start the progress bars
  updateProgressBars();