function pauseAndHideVideo()
{
    // Local Video.
    var videoframe = document.getElementById("content-showcase-localvideo");
    if (videoframe)
    {
        videoframe.pause();
        videoframe.style.display = 'none'
        return;
    }

    // Vimeo Video.
    var vimeoIframe = document.getElementById("content-showcase-vimeovideo");
    if (vimeoIframe)
    {
        const player = new Vimeo.Player(vimeoIframe);
        player.pause();
        vimeoIframe.style.display = 'none'
        return;
    }
    
    // Youtube Video.
    var ytIframe = document.getElementById("content-showcase-youtubevideo");
    if (ytIframe)
    {
        if (ytIframe.contentWindow)
        {
            var youtubeIFrameCommand = 'pauseVideo'
            ytIframe.contentWindow.postMessage('{"event":"command","func":"' + youtubeIFrameCommand + '","args":""}', '*');
        }
        ytIframe.style.display = 'none'
        return;
    }
}

function playAndShowVideo()
{
    // Local Video.
    var videoFrame = document.getElementById("content-showcase-localvideo");
    if (videoFrame)
    {
        videoFrame.play();
        videoFrame.style.display = "block"
        return;
    }

    // Vimeo Video.
    var vimeoIframe = document.getElementById("content-showcase-vimeovideo");
    if (vimeoIframe)
    {
        const player = new Vimeo.Player(vimeoIframe);
        player.play();
        vimeoIframe.style.display = "block"
        return;
    }
    
    // Youtube Video.
    var ytIframe = document.getElementById("content-showcase-youtubevideo");
    if (ytIframe)
    {
        if (ytIframe.contentWindow)
        {
            var youtubeIFrameCommand = 'playVideo'
            ytIframe.contentWindow.postMessage('{"event":"command","func":"' + youtubeIFrameCommand + '","args":""}', '*');
        }
        ytIframe.style.display = "block"
        return;
    }
}

let closedArrowUnicode = '\u{21B4}';
let openArrowUnicode = '\u{21C0}';
var defaultButtonClosedValue = "[Show Project Showcase Video]" + closedArrowUnicode;
var defaultButtonOpenValue = "[Hide Project Showcase Video]" + openArrowUnicode;

var collapsibles = document.getElementsByClassName("collapsible");
for (var it = 0; it < collapsibles.length; it++) 
{
    collapsibles[it].value = defaultButtonClosedValue;
    collapsibles[it].addEventListener("click", function() 
    {
        this.classList.toggle("collapsible-open");
        var collapsibleContent = this.nextElementSibling;
        if (collapsibleContent.style.maxHeight)
        {
            pauseAndHideVideo();
            this.value  = defaultButtonClosedValue;
            collapsibleContent.style.maxHeight = null;
        } 
        else 
        {
            playAndShowVideo();
            this.value  = defaultButtonOpenValue;
            collapsibleContent.style.maxHeight = "100%";
        } 
    });
}
