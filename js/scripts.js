$(document).ready(function() {
  $("button#light-theme").click(function() {
    // $("#light-theme").toggle();
    $("body").removeClass();
    $("body").addClass("light-theme");
    $("body").addClass("row");
    $("body").addClass("decpription");
  });

  $("button#dark-theme").click(function() {
    // $("#dark-theme").toggle();
    $("body").removeClass();
    $("body").addClass("dark-theme");
    $("body").addClass("row");
    $("body").addClass("decpription");
  });
});
