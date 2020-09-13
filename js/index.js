(function(){
    'use strict';
    
    var makeJsHtml = function(){
      var textHtml = document.getElementById('text_html').value;
      var arrTextHtml = textHtml.split('\n');
      var result = document.getElementById('result');
      var textResult = '';
      var sQuote = '\''; //シングルクォーテーション
      var newLine = '\\n\' +\n';
      var anyWord = '';
      var space = '';
    
      for(var i = 0,len = arrTextHtml.length-1;i <= len;i++){
        //最終行の変換
        if(i === len){
          newLine = '\\n\';';
        }
    
        //半スぺ以外の文字の出現位置で分岐する
        var convertText;
        anyWord = arrTextHtml[i].search(/[^ ]/);
        if(anyWord !== 0){
          //１文字目から、半スぺ以外の文字の出現位置まで切り出す。
          space = arrTextHtml[i].slice(0,anyWord);
          //文頭の半スぺ削除
          convertText = arrTextHtml[i].replace(/ +/,'');
        }
        else{
          space = '';
          convertText = arrTextHtml[i];
        }
    
        textResult += sQuote + space + convertText + newLine;
      }
      result.innerText = textResult;
    };
    
    var btnMake = document.getElementById('btn-make');
    btnMake.addEventListener('click',makeJsHtml,false);
    
    
    var convertVar = function(){
      var selectedText = window.getSelection().toString();
      var result = document.getElementById('result');
      var txtBefore = result.innerText;
      var varNum = document.getElementById('userNum').value;
      var txtAfter = txtBefore.replace(selectedText,'\' + arrVar'+ varNum +'[i] + \'');
      result.innerText = txtAfter;
    };
    var btnConvert = document.getElementById('btn-convert');
    btnConvert.addEventListener('click',convertVar,false);
    
    
    
    }());