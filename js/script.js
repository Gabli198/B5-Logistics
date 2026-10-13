const container = document.getElementById('videoContainer');
const video = document.getElementById('myVideo');

container.addEventListener('click', function() {
  if (video.paused) {
    video.play();
    video.setAttribute('controls', 'controls'); // Enables native video controls bar
    container.classList.add('playing');       // Hides overlay and play button
  }
});