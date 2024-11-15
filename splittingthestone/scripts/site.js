console.log(imageTexts);
console.log(imageFilenames);

document.addEventListener("DOMContentLoaded", function () {
  const imagesContainer = document.querySelector(".images");
  const textsContainer = document.querySelector(".texts");

  imageFilenames.forEach((filename, index) => {
    const image = new Image();
    image.src = `./assets/images/${filename}`;
    image.alt = `Stone ${index + 1}`;
    image.dataset.index = index;
    imagesContainer.appendChild(image);
  });

  function detectTopImage() {
    const images = document.querySelectorAll(".images img");
    let closestImage = null;
    let closestDistance = Infinity;
    if (window.innerWidth <= 800) {
      // For screens 800px or less, find the image closest to the center
      const centerX =
        imagesContainer.getBoundingClientRect().left +
        imagesContainer.clientWidth / 2;
      images.forEach((image) => {
        const rect = image.getBoundingClientRect();
        const imageCenterX = rect.left + rect.width / 2;
        const distance = Math.abs(centerX - imageCenterX);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestImage = image;
        }
      });
    } else {
      // For screens wider than 800px, find the image closest to the top
      const scrollTop =
        imagesContainer.scrollTop || window.scrollY || window.pageYOffset;
      images.forEach((image) => {
        const rect = image.getBoundingClientRect();
        const distance = Math.abs(
          rect.top - imagesContainer.getBoundingClientRect().top
        );
        if (distance < closestDistance) {
          closestDistance = distance;
          closestImage = image;
        }
      });
    }
    return closestImage;
  }

  function resetImages() {
    const images = document.querySelectorAll(".images img");
    images.forEach((image) => {
      image.style.opacity = "0.1";
      image.classList.remove("active");
    });
  }

  function setActive(image) {
    resetImages();
    image.style.opacity = "1";
    image.style.transition = "opacity 1.3s";
    image.classList.add("active");

    const index = parseInt(image.dataset.index);
    const text = imageTexts[index];
    textsContainer.innerHTML = `<p>${text}</p>`;
  }

  const firstImage = document.querySelector(".images img:first-child");
  setActive(firstImage);

  imagesContainer.addEventListener("scroll", function () {
    const topImage = detectTopImage();
    setActive(topImage);
  });
});

/*imagesContainer.addEventListener("scroll", function () {
  const topImage = detectTopImage();
  resetImages();
  topImage.style.opacity = "1"; // make image visible
  topImage.style.transition = "opacity 1.3s";
  topImage.classList.add("active");
  textsContainer.innerHTML = "<p>This is new content added dynamically.</p>";
});*/
