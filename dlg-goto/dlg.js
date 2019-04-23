var $dlgGoto = (function(){
  var $dlg=$(''
      +'<div class="notepad-goto-dlg">'
        +'<div class="dialogbox">'
          +'<div class="titlebar">'
            +'<p class="title">转到指定行</p>'
            +'<span class="btn-close">×</span>'
          +'</div>'
        +'<div class="main">'
          +'<lable>行号（L）:</lable><br>'
          +'<input type="text" class="line-num" autofocus><br>'
          +'<input type="button" class="btn-goto" value="转到">'
          +'<input type="button" class="btn-cancel" value="取消">'
        +'</div>'
      +'</div>'
    +'</div>');

  var $btnClose=$dlg.find('.btn-close'),
      $btnCancel=$dlg.find('.btn-cancel'),
      $btnGoto = $dlg.find('.btn-goto'),
      $txtLineNum=$dlg.find('.line-num');

  var cfg={
    curLine:1,
    totalLines:1,
    gotoHandler:null
  };

  function destory(){$dlg.remove();}
  function validation(){
    var num = Number($txtLineNum.val());
    if(num == 0 || num>cfg.totalLines){
      alert('行数超过');
      return false;
    }
    
  }
  function gotoHandler(){
    if(!validation()) return;
    cfg.gotoHandler($txtLineNum.val());
    destory();
  }

  function filterKey(e){
    if(!/[0-9]/.test(e.key)){
      e.preventDefault();
      alert('非法字符');
    }
  }

  var init = function(conf){
    $.extend(cfg,conf);
    $('body').append($dlg);
    //只有光标在titlebar上时才允许拖动
    $dlg.find('.dialogbog').draggable({handle:$dlg.find('.titlebar')});
    $txtLineNum.val(cfg.curLine);
    $txtLineNum.select();
    //事件绑定
    $btnClose.click(destory);
    $btnCancel.click(destory);
    $btnGoto.click(gotoHandler);
    $txtLineNum.keypress(filterKey);
  };
  return {init:init};
}());

