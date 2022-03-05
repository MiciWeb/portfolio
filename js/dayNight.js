$(".night").click(function () {
    $('html').css({'background':'#333333'});
    $(".icons-bar").addClass("iconsBarColorJs");

    $(".main-note").addClass("borderLeftJs");

    $(".note-container, .gps-container, .projects-container, .contact-container, .option-container").addClass("nightBorderJs");
    $(".title-note2, .dots-container, .option-container-features, .note-content, .gps-container, .top-bar-projects, .projects-section, .contact-content").addClass("nightJs");

    $(".day-background").addClass("nightBackgroundJs");
    $(".night-background").addClass("dayBackgroundJs");

    $(".night-mode-text, .option-container-features, .option-text, .note-content, .note-folder, .other-folder").addClass("nightFontJs");

    $(".left-column-contact, .left-column-note").addClass("nightTransparentBackgroundJs");

    $(".top-row-note, .top-bar-option").addClass("top-rowNightJS");

    $(".note-folder").addClass("note-folderNightJs");

    $(".trash").css("fill", "white");

    $(".trash").hover(function () {
        $(this).addClass("svgFolderJs");
    })
});
$(".day").click(function () {
    $('html').css({'background':'#FFFFFF'});

    $(".icons-bar").removeClass("iconsBarColorJs");

    $(".main-note").removeClass("borderLeftJs");

    $(".note-container, .gps-container, .projects-container, .contact-container, .option-container").removeClass("nightBorderJs");
    $(".title-note2, .dots-container, .option-container-features, .note-content, .gps-container, .top-bar-projects, .projects-section, .contact-content").removeClass("nightJs");

    $(".day-background").removeClass("nightBackgroundJs");
    $(".night-background").removeClass("dayBackgroundJs");

    $(".night-mode-text, .option-container-features, .option-text, .note-content, .note-folder, .other-folder").removeClass("nightFontJs");

    $(".left-column-contact, .left-column-note").removeClass("nightTransparentBackgroundJs");

    $(".top-row-note, .top-bar-option").removeClass("top-rowNightJS");

    $(".note-folder").removeClass("note-folderNightJs");

    $(".trash").css("fill", "black");

    $(".trash").hover(function () {
        $(this).removeClass("svgFolderJs");
    })
});

$(".note-folder").click(function () {
    $(this).toggleClass("noteFolderJs");
    $(this).toggleClass("nightFontJs2");
    $(".note-number").toggleClass("nightFontJs");
    $(".note-folder").toggleClass("svgFolderJs");
})

$(".day").addClass("borderModeJs");

$(".day").click(function () {
    $(this).addClass("borderModeJs");
    $(".night").removeClass("borderModeJs");
})

$(".night").click(function () {
    $(this).addClass("borderModeJs");
    $(".day").removeClass("borderModeJs");
})

//note function 
$(".trash").click(function () {
    $(".main-note, .title-note1").hide();
});
$(".title-note1").click(function () {
    $(".title-note1").toggleClass("title-color-js");
});

