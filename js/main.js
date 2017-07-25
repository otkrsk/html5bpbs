(function($) {
  $(document).ready(function() {
    var url_string = document.URL;
    var url = new URL(url_string);
    var mode = url.searchParams.get('mode');
    var status = url.searchParams.get('status');
    console.log(mode);
    console.log(status);
  })
})(jQuery);
