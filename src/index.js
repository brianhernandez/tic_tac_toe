import 'jquery';
import './style.scss';
// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;

$(document).ready(function() {
  $('body').append('<div class="hello">HELLO Moto</div>');
})
