const smallDevice = window.matchMedia("(max-width: 1070px)");

smallDevice.addListener(handleDeviceChange);

function handleDeviceChange(e) {
  if (e.matches) {
    $(".note-icon, .photo-icon, .gps-icon, .contact-icon, .option-icon").click(function () {
      $(".icons-bar").hide();
    });
    $(".ipad-button, .ipad-button2, .ipad-button3").click(function () {
      $(".icons-bar").show();
      $(".projects-container, .contact-container, .gps-container, .note-container, .option-container").hide();
    })
  }
  else {
    $(".note-icon, .photo-icon, .gps-icon, .contact-icon, .option-icon").click(function () {
      $(".icons-bar").show();
    });
  }
}

handleDeviceChange(smallDevice);