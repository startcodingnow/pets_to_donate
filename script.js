function enlargeImage(event) {
  // Get the image that was clicked.
  const image = event.target;

  // Create a new image element and set its src attribute to the src attribute of the clicked image.
  const newImage = document.createElement("img");
  newImage.src = image.src;

  // Set the style property of the new image element to center it on the page.
  newImage.style.position = "absolute";
  newImage.style.top = "10%";
  newImage.style.left = "10%";
  newImage.style.transform = "translate(-50%, -50%)";

  // Append the new image element to the body of the page.
  document.body.appendChild(newImage);

  // Remove the event listener from the clicked image.
  image.removeEventListener("click", enlargeImage);
}

const images = document.querySelectorAll("img");

images.forEach((image) => {
  image.addEventListener("click", enlargeImage);
});
