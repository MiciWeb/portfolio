$(document).ready(function(){
    $(".projects-container,.contact-container,.dot-icon1,.dot-icon2,.gps-container,.dot-icon4,.option-container,.dot-icon6,.dot-icon5").hide();
    //Dot n°1
    $(".dot1container").click(function(){
        $(".note-container").hide();
        $(".dot-icon3").hide();
    }),
    $(".note-icon").click(function(){
        $(".note-container").show();
        $(".dot-icon3").show();
    });

    $(".dot1contact").click(function(){
        $(".contact-container").hide();
        $(".dot-icon1").hide();
    }),
    $(".contact-icon").click(function(){
        $(".contact-container").show();
        $(".dot-icon1").show();
    });

    $(".dot1projects").click(function(){
        $(".projects-container").hide();
        $(".dot-icon2").hide();
    }),
    $(".photo-icon").click(function(){
        $(".projects-container").show();
        $(".dot-icon2").show();
    });

    $(".dot1gps").click(function(){
        $(".gps-container").hide();
        $(".dot-icon4").hide();
    });
    $(".gps-icon").click(function(){
        $(".gps-container").show();
    });

    $(".dot1option").click(function(){
        $(".option-container").hide();
        $(".dot-icon6").hide();
    }),
    $(".option-icon").click(function(){
        $(".option-container").show();
    });

    //Dot n°2
    $(".dot2container").click(function(){
        $(".note-container").hide();
        $(".dot-icon3").show();
    }),
    $(".note-icon").click(function(){
        $(".dot-icon3").show();
    });

    $(".dot2contact").click(function(){
        $(".contact-container").hide();
        $(".dot-icon1").show();
    }),
    $(".contact-icon").click(function(){
        $(".dot-icon1").show();
    });

    $(".dot2projects").click(function(){
        $(".projects-container").hide();
        $(".dot-icon2").show();
    });
    $(".photo-icon").click(function(){
        $(".dot-icon2").show();
    });

    $(".dot2gps").click(function(){
        $(".gps-container").hide();
        $(".dot-icon4").show();
    });
    $(".gps-icon").click(function(){
        $(".dot-icon4").show();
    });

    $(".dot2option").click(function(){
        $(".option-container").hide();
        $(".dot-icon6").show();
    });
    $(".option-icon").click(function(){
        $(".dot-icon6").show();
    });

    $(".github-icon").click(function(){
        $(".dot-icon5").show();
    });

    //dot n°3

    $(".dot3container").click(function(){
        $(".note-container").toggleClass("full-screen");
      });
    $(".dot3contact").click(function(){
        $(".contact-container").toggleClass("full-screen");
      });
    $(".dot3projects").click(function(){
        $(".projects-container").toggleClass("full-screen");
      });
    $(".dot3gps").click(function(){
        $(".gps-container").toggleClass("full-screen");
      });
    $(".dot3option").click(function(){
        $(".option-container").toggleClass("full-screen");
      });
      $(".dot3").click(function(){
        $(".icons-bar").toggleClass("displayNoneJs");
      });
      $(".dot1,.dot2").click(function(){
        $(".icons-bar").removeClass("displayNoneJs");
        $(".projects-container, .contact-container, .gps-container, .note-container, .option-container").removeClass("full-screen");
      });
}); 