/* exported $dlgAbout */
var $dlgAbout = (function() {
  var $dlg = $(''
          + '<div class="notepad-dlg-mask notepad-dlg-about">'
            + '<div class="dialogbox notepad-dlgbox">'
              + '<div class="notepad-dlg-titlebar">'
                + '<p class="title">关于“记事本”</p>'
                + '<span class="close-btn">✖</span>'
              + '</div>'
              + '<div class="main notepad-dlg-main">'
                + '<h1 class="slogan">JSNotepad</h1>'
                + '<hr>'
                + '<img class="app-logo" src="http://1834.img.pp.sohu.com.cn/images/blog/2010/1/27/9/24/1271e51aa99g214.jpg" style="width:30px; height:30px;" alt="JSNotepad">'
                + '<div class="info">'
                  + '<p>作者：杨美静</p>'
                  + '<p>QQ：1806102644</p>'
                  + '<p>仓库地址：<a href="https://github.com/yangmeijing/jsnotepad/" target="_blank">https://github.com/yangmeijing/jsnotepad</a></p>'
                + '</div>'
                + '<input class="btn-ok btn" type="button" value="确定">'
              + '</div>'
            + '</div>'
          + '</div>');
  
  var $btnOk = $dlg.find('.btn-ok'),
      $btnClose = $dlg.find('.close-btn'),
      $titleBar = $dlg.find('.notepad-dlg-titlebar');
  
  function destory() { $dlg.remove(); }
  
  function show() {
    $('body').append($dlg);
    $dlg.find('.dialogbox').draggable({handle: $titleBar});
  
    $btnOk.click(destory);
    $btnClose.click(destory);
  }
  
  return {show: show};
}());
