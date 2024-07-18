 // Preloader script
 window.addEventListener('load', function() {
    var preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
  });

  
//Transición Titulo
document.addEventListener('DOMContentLoaded', function() {
    var section = document.querySelector('section');
    setTimeout(function() {
        section.classList.add('visible');
    }, 100); 
});


// Mejorar la carga de videos
document.addEventListener("DOMContentLoaded", function() {
  var lazyVideos = [].slice.call(document.querySelectorAll("img.lazy-video"));

  if ("IntersectionObserver" in window) {
    let lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(video) {
        if (video.isIntersecting) {
          let videoElement = document.createElement("video");
          videoElement.src = video.target.dataset.videoSrc;
          videoElement.autoplay = true;
          videoElement.loop = true;
          videoElement.muted = true;
          videoElement.classList.add("img-fluid");

          video.target.parentNode.replaceChild(videoElement, video.target);
          lazyVideoObserver.unobserve(video.target);
        }
      });
    });

    lazyVideos.forEach(function(lazyVideo) {
      lazyVideoObserver.observe(lazyVideo);
    });
  }
});
