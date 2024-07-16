// Challenge 1
// const createHeading = () => {
//   let headingSize = prompt("Enter the size of the heading (1-6): ");
//   let headingText = prompt("Enter the text for the heading: ");

//   const heading = document.createElement(`h${headingSize}`);
//   heading.textContent = headingText;
//   document.body.appendChild(heading);
// };

// createHeading();

// Challenge 2
const hamburgerIcon = document.querySelector(".hamburger");
const icon = document.querySelector(".container");

hamburgerIcon.addEventListener("click", () => {
  if (icon.style.display === "flex") {
    icon.style.display = "none";
  } else {
    icon.style.display = "flex";
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 501) {
    icon.style.display = "flex";
  } else {
    icon.style.display = "none";
  }
});

console.log(window.innerWidth);

console.dir(hamburgerIcon);
