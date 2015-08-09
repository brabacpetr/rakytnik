(function(){
    var s = skrollr.init({
        forceHeight: false,
        smoothScrolling: false,
        render: function(data) {
        }
    });

    $('.js-carousel').owlCarousel({
        items: 1
         
    });

    $(document).ready(function() {
        $('.tooltip').tooltipster({

        });
    })
})();
