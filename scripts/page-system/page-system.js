
function hideAllPages(){

	var pages = document.getElementsByClassName("page");

	for(var i = 0; i < pages.length; i++){
		$("#" + pages[i].id).hide();
	}
}

function openPage(pageToOpen){

    $("#fadeCover").fadeIn("slow", function(){        
       
        hideAllPages();   
		$("#" + pageToOpen).show();
		$("#fadeCover").fadeOut("slow");
        
    });

}



function fancyReload(){
	$("#fadeCover").fadeIn("slow",function(){
        location.reload();
    });
}