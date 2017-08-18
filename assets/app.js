

$(document).ready(function(){

	$('.form-select .select-arrow').on('click', function(){
		$(this).parent().find('select').trigger('focus')
	})
   // openSelect('.form-control'); 
   $('#select').IELongDropDown(); 
});



// var openSelect = function(selector){
//      var element = $(selector)[0], worked = false;
//     if (document.createEvent) { // all browsers
//         var e = document.createEvent("MouseEvents");
//         e.initMouseEvent("mousedown", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
//         worked = element.dispatchEvent(e);
//     } else if (element.fireEvent) { // ie
//         worked = element.fireEvent("onmousedown");
//     }
//     if (!worked) { // unknown browser / error
//         alert("It didn't worked in your browser.");
//     }   
// }









(function($) {
    $.fn.IELongDropDown = function(cln) {
        if (jQuery.browser.msie) { //only IE has problems with long select boxes
            var el = this;
            var previousWidth = el.width();
            var divWrapper = "<div style='padding:0;margin:0;overflow:hidden;width:"+ previousWidth +"px'></div>";
            el.wrap(divWrapper);
            var newWidth = el.width("auto").width();
            el.width(previousWidth);
            if(newWidth > previousWidth) {
                el.bind("mousedown", function(){ return el.width("auto").focus(); }); 
                el.bind("blur", function(){ return el.width(previousWidth); });
                el.bind("change", function(){ return el.width(previousWidth); });
            }
        }
        return this;
    };
})(jQuery);



(function($) {
    "use strict";
    $.fn.openSelect = function()
    {
        return this.each(function(idx,domEl) {
            if (document.createEvent) {
                var event = document.createEvent("MouseEvents");
                event.initMouseEvent("mousedown", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                domEl.dispatchEvent(event);
            } else if (element.fireEvent) {
                domEl.fireEvent("onmousedown");
            }
        });
    }
}(jQuery));