---
---

$( document ).ready(function() {

  // Mobile navigation through select tag
  $('#mobile-nav').on('change', function() {
    window.location = $(this).find("option:selected").val();
  });

  // open intercom when the contact us link is clicked
  $("#contact-us").click(function() {
    if ($("#intercom-container").length) {
      event.preventDefault();
      Intercom('show');
    }
  });

  // Give article headings direct links to anchors
  $("article h2, article h3, article h4, article h5, article h6").filter("[id]").each(function () {
    $(this).append('<a href="#' + $(this).attr("id") + '"><i class="fa fa-link" style="display: none;"></i></a>');
  });
  $("article h2, article h3, article h4, article h5, article h6").filter("[id]").hover(function () {
    $(this).find("i").toggle();
  });
});
