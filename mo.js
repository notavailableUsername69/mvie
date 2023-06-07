// Example JavaScript code

// Check if the app is accessed on a mobile device
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  }
  
  // Load images for mobile devices
  function loadMobileImages() {
    const movieImages = document.getElementsByClassName('movie-image');
    for (let i = 0; i < movieImages.length; i++) {
      const image = movieImages[i];
      const altText = image.alt;
      image.src = `mobile_${altText}.jpg`;
    }
  }
  
  // Load images for desktop devices
  function loadDesktopImages() {
    const movieImages = document.getElementsByClassName('movie-image');
    for (let i = 0; i < movieImages.length; i++) {
      const image = movieImages[i];
      const altText = image.alt;
      image.src = `${altText}.jpg`;
    }
  }
  
  // Load appropriate images based on device type
  if (isMobileDevice()) {
    loadMobileImages();
  } else {
    loadDesktopImages();
  }