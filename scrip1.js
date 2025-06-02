// This script can be used for additional functionality, like interacting with the audio player or other events

// Example: Add a click event to change the background color of a song section
document.querySelectorAll('.song').forEach(function(song) {
    song.addEventListener('click', function() {
        this.style.backgroundColor = '#e0ffe0'; // Light green background when clicked
    });
});
