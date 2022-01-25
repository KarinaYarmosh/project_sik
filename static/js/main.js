const player = new Plyr('#player', {
    invertTime: false,
    controls: [
  'play-large', // The large play button in the center
  'restart', // Restart playback
  'rewind', // Rewind by the seek time (default 10 seconds)
  'play', // Play/pause playback
  'fast-forward', // Fast forward by the seek time (default 10 seconds)
  'progress', // The progress bar and scrubber for playback and buffering
  'current-time', // The current time of playback
  'duration', // The full duration of the media
  'mute', // Toggle mute
  'volume', // Volume control
  'captions', // Toggle captions
  'settings', // Settings menu
  'pip', // Picture-in-picture (currently Safari only)
  'airplay', // Airplay (currently Safari only)
  'download', // Show a download button with a link to either the current source or a custom URL you specify in your options
  'fullscreen', // Toggle fullscreen
]
});
player.source = {
    type: 'video',
    poster: 'Outback.jpg', // Путь к постеру по умолчанию
    sources: [
        {
            src: 'Outback.mp4', // Путь к постеру по умолчанию
            type: 'video/mp4',
            size: 720
        }
    ]
};
$(function() {
    // Включение трека по клику
    $('.change-video').click(function(){
        $('.change-video').removeClass('active');
        $(this).addClass('active');
        let videourl = $(this).attr('data-video');
        let videoposter = $(this).attr('data-poster');
        player.source = {
            type: 'video',
            poster: videoposter,
            sources: [
                {
                    src: videourl,
                    type: 'video/mp4',
                    size: 720
                }
            ]
        };
        player.play(); // если нужно запускать видео сразу по клику, раскомментируйте эту строчку
    });
    // Переключение аидео на следующее по окончанию
    player.on('ended', event => {
        let nextvideo = $('.change-video.active').next(".change-video");
        let urlnextvideo = nextvideo.attr('data-video');
        let urlnextposter = nextvideo.attr('data-poster');
        if (!urlnextvideo) {
            player.stop();
            } else {
            $('.change-video').removeClass('active');
            nextvideo.addClass('active');
            player.source = {
                type: 'video',
                poster: urlnextposter,
                sources: [
                    {
                        src: urlnextvideo,
                        type: 'video/mp4',
                        size: 720
                    }
                ]
            };
            player.play(); // если нужно сразу запускать следующее видео, раскомментируйте эту строчку
        }
    });
});