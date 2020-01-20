
// Run on doc ready
// =========================
$(document).ready(function(){
    $img = $('a').find('img');
    if($img.length > 0) {

        $img.parent().addClass('imgLink');
    }
});