$(document).ready(function () {
   $(".cloud1").on("click", function() {
       console.log("clicked!")
   })
   
    $('div').mousedown(function() {
        $(this).css('color','red');
    });

    $('div').mouseup(function() {
        $(this).css('color','blue');
    });
})


/*   alert(img src="ams/cloud1_speak.png" class="cloud1_speak");
            });

/*  $(function() {
        $("a").mousedown(function() {
            $('img').attr('src', $(this).attr('href'));
        }).click(function() {
            return false;
        });

/* $(function (){
    $(".cloud1").on("mousedown"), function(){
        $(".cloud1_speak").addClass("mousedown")
    }
}
