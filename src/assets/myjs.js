// <!-- JavaScript files-->
require("../../template/vendor/bootstrap/js/bootstrap.bundle.min.js");
require("../../template/vendor/bootstrap/js/bootstrap.bundle.min.js");
require("../../template/vendor/glightbox/js/glightbox.min.js");
require("../../template/vendor/nouislider/nouislider.min.js");
require("../../template/vendor/swiper/swiper-bundle.min.js");
require("../../template/vendor/choices.js/public/assets/scripts/choices.min.js");
require("../../template/js/front.js");
// ------------------------------------------------------- //
//   Inject SVG Sprite -
//   see more here
//   https://css-tricks.com/ajaxing-svg-sprite/
// ------------------------------------------------------ //
function injectSvgSprite(path) {
  var ajax = new XMLHttpRequest();
  ajax.open("GET", path, true);
  ajax.send();
  ajax.onload = function (e) {
    var div = document.createElement("div");
    div.className = "d-none";
    div.innerHTML = ajax.responseText;
    document.body.insertBefore(div, document.body.childNodes[0]);
  };
}
// this is set to BootstrapTemple website as you cannot
// inject local SVG sprite (using only 'icons/orion-svg-sprite.svg' path)
// while using file:// protocol
// pls don't forget to change to your domain :)
injectSvgSprite("https://bootstraptemple.com/files/icons/orion-svg-sprite.svg");
