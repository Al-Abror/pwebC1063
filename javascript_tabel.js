function terimainput() {
    var a = document.forms['biodata']['First Name'].value;
    var b = document.forms['biodata']['Last Name'].value;
    var c = document.forms['biodata']['Email'].value;
    var d = document.forms['biodata']['Username'].value;
    var e = document.forms['biodata']['Password'].value;


    var tabel = document.getElementById("tabelinput");
    var row = tabel.insertRow(1);
    var cell1 = row.insertRow(0);
    var cell2 = row.insertRow(1);
    var cell3 = row.insertRow(2);
    var cell4 = row.insertRow(3);
    var cell5 = row.insertRow(4);

    cell1.innerHTML = a;
    cell2.innerHTML = b;
    cell3.innerHTML = c;
    cell4.innerHTML = d;
    cell5.innerHTML = e;

}

terimainput()