$(document).ready(function(){
    // add background color to swatch
    $( ".hex" ).each(function( index ) {
        var hex = $(this).text();
        $(this).next('.swatch').css({backgroundColor: hex})
    });

    var clipboard = new Clipboard('.hex, .sass, .js', {
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

    $("#color-group").change(function() {
        var selected = $(this).val();
        $("body").removeClass("show-expanded");
        if ( selected == "expanded" ) {
            $("body").addClass("show-expanded");
        }
    });});
