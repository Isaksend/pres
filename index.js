document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('changeImg').addEventListener('click', function() {
    var imgName = this.src.split('/').pop();
    if (imgName === 'music.png') {
        this.src = './img/music_off.png';
        } else {
        this.src = './img/music.png';
    }
    });
}); 