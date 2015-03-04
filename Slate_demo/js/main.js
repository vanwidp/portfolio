$(document).ready(function(){ 
    $(".imgToolTip").attr("src", "app_themes/wave/images/info.png");
    $(".scrollerItem").attr("src", "app_themes/wave/images/blank_avatar_large.png");
    $("#utility").insertAfter("#logo");
	$("#top_nav").insertAfter("#header");
	$("#bottom_logo").appendTo("#bottom_copyright");
    
    /* fixes header and footer width when page is loaded as preview.aspx in an iframe */
    var isInIFrame = (window.location != window.parent.location) ? true : false;
    if(isInIFrame){
        $("#header").width($("#inner_header").width());
        $("#footer").width($("#footer_content").width());
    }
    
    /**
     * Trim the accountholder/user name or patient name. The markup is the same for each.
     */
    if ($(".patientMiddleName").length > 0) {
        var patientMiddleName = $(".patientMiddleName"); 
		$(".patientMiddleName").html(patientMiddleName.html().substring(0,1));
    }
});