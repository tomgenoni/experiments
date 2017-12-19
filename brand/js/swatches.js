$(document).ready(function(){
    // add background color to swatch
    $( ".hex" ).each(function( index ) {
        var hex = $(this).text();
        $(this).next('.swatch').css({backgroundColor: hex})
    });

    var clipboard = new Clipboard('.hex, .name', {
        text: function(trigger) {
            return trigger.textContent;
        }
    });

    clipboard.on('success', function(e) {
        e.trigger.classList.add('copied');
        window.setTimeout(function() {
            e.trigger.classList.remove('copied');
        }, 2000);
    });
});
