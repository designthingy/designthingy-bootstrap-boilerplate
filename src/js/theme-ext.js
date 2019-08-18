(function ($) {
    'use strict';
    $(function () {
        /*====================================
        //     Tooltips & Popovers
        ======================================*/
        $('body').tooltip({
            selector: '[data-toggle=tooltip]'
        });
        $('[data-toggle="popover"]').popover({
            container: 'body'
        });
        /*====================================
            Date and Time picker
        ======================================*/
        $('#datepicker').on('focusin', function () {
            $(this).datepicker();
        });
        $('#timepicker').on('focusin', function () {
            $(this).timepicker({timeFormat: 'HH:mm p'});
        });
    });
}(jQuery));
