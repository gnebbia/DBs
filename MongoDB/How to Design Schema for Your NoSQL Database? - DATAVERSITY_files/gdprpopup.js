function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}

jQuery(document).ready(function($){
    function openPopup () {
        var sectionPopupSubscribe = $('.section-popup-gdpr');
        $(window).on('scroll', function () {

                sectionPopupSubscribe.addClass('visible');

        });
       

		$('.btn-close').on("click", set_cookie);
  		function set_cookie() {
    		//event.preventDefault();
            console.log("Accepted Cookies");
            sectionPopupSubscribe.addClass('hidden');
            createCookie('gdpraccept', '', 365);
  		}
		
        

    }


    if( readCookie('gdpraccept') === null  ) {

            console.log("Called openPopup()");
            openPopup();


    }
});


