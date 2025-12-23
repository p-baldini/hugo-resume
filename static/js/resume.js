(function($) {
  "use strict"; // Start of use strict

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

})(jQuery); // End of use strict
