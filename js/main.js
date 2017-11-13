var df = document.forms;
var container = document.getElementById('container');
var mainFirstBlock = document.getElementById('mainFirstBlock');
var mainSecondBlock = document.getElementById('mainSecondBlock');
var area = document.getElementById('area');
var textarea = document.getElementById('textarea');
var blockStyle = document.getElementById('blockStyle');
var squareColorText = document.getElementById('squareColorText');
var squareColorBackground = document.getElementById('squareColorBackground');
var blockTableItem = document.getElementById('blockTableItem');
var blockTabl = document.getElementById('blockTabl');
var blockItem = document.getElementById('blockItem');

function id(a) {
    return document.getElementById(a);
}

function sel(a) {
    return document.querySelectorAll(a);
}
//Редагування тексту
id('edit').onclick = function () {
    var x = mainFirstBlock.innerHTML;
    textarea.style.display = 'block';
    area.innerHTML = x;
}
id('save').onclick = function () {
    var newText = area.value;
    mainFirstBlock.innerHTML = newText;
    area.value = '';
}
id('edit').onclick = function () {
    var newText = mainFirstBlock.innerHTML;
    blockStyle.style.display = 'none';
    textarea.style.display = 'block';
    area.value = newText;
    }
    //Стилі для тексту
id('stylez').onclick = function () {
    textarea.style.display = 'none';
    blockStyle.style.display = 'block';
}
for (var i = 0; i < df.rBtn.length; i++) {
    df.rBtn.elements[i].addEventListener('click', function () {
        //mainFirstBlock.style.overflow = 'auto'; //скрол
        mainFirstBlock.style.fontSize = this.value;
    })
}
id('listFontFamyli').onchange = function () {
    var i = id('listFontFamyli').selectedIndex;
    mainFirstBlock.style.fontFamily = id('listFontFamyli').options[i].text;
    }
//Колір тексту
    var flag = squareColorText.style.display; // одна кнопка додає і забирає (колір тексту)
    id('colorText').addEventListener('click', function () {
        if (flag == 'inline-block') {
            squareColorText.style.display = 'none';
        }
        else {
            squareColorText.style.display = 'inline-block';
        }
    });
/*id('colorText').onclick = function () {/////////////////////////////
    squareColorText.style.display = 'block';
}*/
for (var i = 0; i < sel('.boxText').length; i++) {
    sel('.boxText')[i].addEventListener('click', function () {
        mainFirstBlock.style.color = this.style.background;
        squareColorText.style.display = 'none';
    })
}
//Колір фону
id('colorBackground').onclick = function () {
    squareColorBackground.style.display = 'block';
}
for (var i = 0; i < sel('.boxBackground').length; i++) {
    sel('.boxBackground')[i].addEventListener('click', function () {
        mainFirstBlock.style.background = this.style.background;
        squareColorBackground.style.display = 'none';
    })
}
id('container').onmouseup = function () {///////////////////////////
    squareColorBackground.style.display = 'none';
    squareColorText.style.display = 'none';
}
    //Текст жирний або звичайний
df.checkboxTextBold.ctb.onclick = function () {
    if (this.checked) {
        mainFirstBlock.style.fontWeight = 'bold';
    }
    else {
        mainFirstBlock.style.fontWeight = 'normal';
    }
}
    //Текст курсив або звичайний
df.checkboxTextItalic.cti.onclick = function () {
    if (this.checked) {
        mainFirstBlock.style.fontStyle = 'italic';
    }
    else {
        mainFirstBlock.style.fontStyle = 'normal';
    }
}
    // Таблиця - список
id('add').onclick = function () {
    blockTableItem.style.display = 'block';
    header.style.display = 'none';
}
//Вибрати таблицю чи список
for (var i = 0; i < df.rBtnChoose.length; i++) {
    df.rBtnChoose.elements[i].addEventListener('click', function () {
        if (this.value == 'table') {
            blockTabl.style.display = 'block';
            blockItem.style.display = 'none';
        }
        else {
            blockTabl.style.display = 'none';
            blockItem.style.display = 'block';
        }
    })
}
// Добавити таблицю
df.rBtnTabStyle.createTable.onclick = function(){
 var tr = document.getElementById('tr').value;
 var td = document.getElementById('td').value;
 var wightTd = document.getElementById('wightTd').value;
 var hightTd = document.getElementById('hightTd').value;
 var borderLine = document.getElementById('borderLine').value;
 var listBorderLine = document.getElementById('listBorderLine').value;
 var listColorLine = document.getElementById('listColorLine').value;
  
 var table = '<table style="border:' + borderLine + 'px ' + listBorderLine + ' ' + listColorLine + ' ">';
for (var i = 0; i < tr; i++) {
    table += '<tr>';
    for (var j = 0; j < td; j++) {
        table += '<td style="border:' + borderLine + 'px ' + listBorderLine + ' ' + listColorLine + '; width: ' + wightTd + 'px;height:' + hightTd + 'px;"></td>';
    }
    table += '</tr>';
}
table += '</table>';
var x = mainFirstBlock.innerHTML;
id('header').style.display = 'block';
id('blockTableItem').style.display = 'none';
area.value += table;
}
//Добавити список
df.rBtnItem.createItem.onclick = function() {
var item = document.getElementById('elem').value;
var typeMarck = document.getElementById('listTypeItem').value;
var listItem = '<ul type=' + typeMarck + '>';
    for (var i = 0; i< item; i++){
        listItem += '<li>Text</li>';
    }
listItem += '</ul>';
var x = mainFirstBlock.innerHTML;
id('header').style.display = 'block';
id('blockTableItem').style.display = 'none';
area.value += listItem;    
}
 