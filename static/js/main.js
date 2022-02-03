const player = new Plyr('#player', {
    invertTime: false,
    controls: [
  'play-large',
  'restart',
  'rewind', 
  'play', 
  'fast-forward',
  'progress',
  'current-time', 
  'duration', 
  'mute', 
  'volume', 
  'captions', 
  'settings', 
  'pip', 
  'airplay',
  'download',
  'fullscreen', 
]
});
player.source = {
    type: 'video',
    poster: 'Outback.jpg', 
    sources: [
        {
            src: 'Outback.mp4', 
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
        player.play(); 
    });

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
            player.play();
        }
    });
});
