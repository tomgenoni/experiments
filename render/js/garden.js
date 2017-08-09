$(document).ready(function(){

    function renderCode(target) {
        var html = target.find('.tp-garden__window').html();
        var codeBlock = target.find('.tp-garden__code code');
        codeBlock.text(html);
        codeBlock.each(function(i, block) {
            hljs.highlightBlock(block);
        });
    }

    function setClass(garden, options, anchor, classValue, reverse) {
        options.forEach(function(item){
            garden.find('.tp-garden__window .tp-button').removeClass(item);
        })
        garden.find('.tp-garden__window .tp-button').addClass(classValue);
        garden.find('.tp-garden__window').removeClass('tp-garden__window--dark')
        if (reverse) {
            garden.find('.tp-garden__window').addClass('tp-garden__window--dark')
        }
        renderCode(garden);
    }

    $('.tp-garden').each(function(item){
        const target = $(this)
        const source = $(this).data('source');
        const controls = $(this).data('controls').split(",");

        // load source file
        const gardenWindow = $(this).find('.tp-garden__window');
        gardenWindow.load(source + '/source.html', function(){
            renderCode(target);
        });

        //load controls
        controls.forEach(function(item){
            $.getJSON( source + '/' + item + '.json', function( data ) {
                var source = $("#hlb-radio").html();
                var template = Handlebars.compile(source);
                var html = template(data);
                target.find('.tp-garden__control').append(html);
            });
        });
    });

    $('body').on('change', 'input', function() {
        var garden = $(this).closest('.tp-garden');
        var options = [];
        var anchor = $(this).data('anchor');
        var reverse = $(this).data('reverse');
        var classValue = $(this).val();
        var groupInputs = $(this).closest('.tp-garden__control__group').find('input');

        groupInputs.each(function(index, item){
            if (item.value != anchor) {
                options.push(item.value)
            }
        });

        setClass(garden, options, anchor, classValue, reverse);
    });

});
