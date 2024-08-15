document.getElementById('triggerImage').addEventListener('click', function() {
    // Ocultar la imagen que activa el video
    var triggerImage = document.getElementById('triggerImage');
    triggerImage.style.display = 'none';

    // Mostrar el contenedor del video
    var videoContainer = document.getElementById('videoContainer');
    videoContainer.style.display = 'block';

    // Obtener el video y reproducirlo
    var videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.play();

    // Mostrar la imagen nuevamente cuando el video termine
    videoPlayer.addEventListener('ended', function() {
        triggerImage.style.display = 'block';
        videoContainer.style.display = 'none'; // Ocultar el contenedor del video
    });
});
