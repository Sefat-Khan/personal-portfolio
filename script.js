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

  // button 

  const project1Btn = document.getElementById('project1-button');
  const project2Btn = document.getElementById('project2-button');
  const gitBtn = document.querySelectorAll('git-button');

  project1Btn.addEventListener('click', () => {
    window.open('https://sefat-khan.github.io/ecommerce-product-page-main/');

  });

  project2Btn.addEventListener('click', () => {
    window.open('https://sefat-khan.github.io/Time-Tracking-dashboard/');

  });

  gitBtn.forEach(button => {
    button.addEventListener('click', () => {
        const githubLink = button.querySelector('a').href;
        window.open(githubLink);
    });
});