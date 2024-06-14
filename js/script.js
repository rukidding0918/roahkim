const atags = document.querySelectorAll('.uk-nav > li > a');
const offcanvas = document.getElementById('offcanvas-push');
// a tag 클릭시 offcanvas 닫기
atags.forEach(atag => {
  atag.addEventListener('click', () => {
    UIkit.offcanvas(offcanvas).hide();
  });
});
