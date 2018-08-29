	$(document).ready(function(){
    $(".1").click(function(){
        $("#p").toggleClass("mystyle");
    });
});
	$(document).ready(function(){
    $(".2").click(function(){
        $("#p").toggleClass("italicstyle");
    });
});
	$(document).ready(function(){
    $(".3").click(function(){
        $("#p").toggleClass("underlinedstyle");
    });
});
	
$(document).ready(function(){
    $("#borderstyle").change( function(){
        var selectedValue= $(this).val();
         $("#p").css ( "border-style",selectedValue);
    });
});
$(document).ready(function(){
    $("#fontsize").change( function(){
        var selectedValue= $(this).val();
         $("#p").css ("font-size",selectedValue);
    });
});
$(document).ready(function(){
    $("#fontfamily").change( function(){
        var selectedValue= $(this).val();
         $("#p").css ("font-family",selectedValue);
    });
});
$(document).ready(function(){
    $("#bordercolor").change( function(){
        var selectedValue= $(this).val();
         $("#p").css ("border-color",selectedValue);
    });
});
$(document).ready(function(){
    $("#backgroundcolor").change( function(){
        var selectedValue= $(this).val();
         $("#p").css ("background-color",selectedValue);
    });
});
$(document).ready(function(){
    $("#colo").change( function(){
        var selectedValue= $(this).val();
         $("#p").css ("color",selectedValue);
    });
});

	

