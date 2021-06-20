function myFunction(){
    var customerName = document.getElementById("nameInput").value;
    var customerEmail = document.getElementById("emailInput").value;
    var customerComments = document.getElementById("commentsInput").value;

    if (customerName === "" || customerEmail  === "" || customerComments === ""){
        alert("Please complete all sections of the form");
    } else{
    alert (customerName + " we have received your message. Thank you for reaching out to us.")
    document.getElementById("collection").submit();
    }
}

$(document).ready(function(){
    $("#design").click(function(){
        $(".designShowing").toggle();
        $(".designHidden").toggle();
    });
});

$(document).ready(function(){
    $("#development").click(function(){
        $(".developmentShowing").toggle();
        $(".developmentHidden").toggle();
    });
});

$(document).ready(function(){
    $("#prodmanagement").click(function(){
        $(".prodShowing").toggle();
        $(".prodHidden").toggle();
    });
});

$(document).ready(function(){
    $("#work1").hover(function(){
        $(".center1").toggle();
    });
});

$(document).ready(function(){
    $("#work2").hover(function(){
        $(".center2").toggle();
    });
});

$(document).ready(function(){
    $("#work3").hover(function(){
        $(".center3").toggle();
    });
});

$(document).ready(function(){
    $("#work4").hover(function(){
        $(".center4").toggle();
    });
});

$(document).ready(function(){
    $("#work5").hover(function(){
        $(".center5").toggle();
    });
});

$(document).ready(function(){
    $("#work6").hover(function(){
        $(".center6").toggle();
    });
});

$(document).ready(function(){
    $("#work7").hover(function(){
        $(".center7").toggle();
    });
});

$(document).ready(function(){
    $("#work8").hover(function(){
        $(".center8").toggle();
    });
});

$(document).ready(function(){
    $("#contactus").hover(function(){
        $("#submission").toggle();
    });
});
