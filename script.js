document.getElementById('triggerImage').addEventListener('click', function() {
    // Mostrar el contenedor del video
    var videoContainer = document.getElementById('videoContainer');
    videoContainer.style.display = 'block';

    // Obtener el video y reproducirlo
    var videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.play();
});
