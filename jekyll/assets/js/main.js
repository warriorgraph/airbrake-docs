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

  // Show latest blog entries in the footer
  $.getJSON('/api/v4/content/latest-blog-entries', function( data ) {
    for (var i = 0; i < data.length; i++) {
      var $header = $('<header>');
      var $article = $('<article>');
      var $a = $('<a href="' + data[i].link + '">' + data[i].title + '</a>');
      var $p = $('<p>' + data[i].snippet + '</p>');

      $header.append($a);
      $article.append($p);

      $('#footer-blog').append($header).append($article);
    }
  });
});
