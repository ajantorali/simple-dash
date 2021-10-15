function showadd(){
    document.querySelector(".add_book").style.display = "block";
}

var main = document.querySelector('.datam');
/*
var main = document.querySelector('.maind');
var book_name = document.querySelector('.book_name');
var code = document.querySelector('.code');
var writer = document.querySelector('.writer');
var other = document.querySelector('.other');

var tbl_data = document.querySelector('#tbl_data');

function addrow(){
    const newRow = document.createElement('tr');

    const newTitle = document.createElement('th');
    newTitle.innerHTML = book_name.value;
    newRow.appendChild(newTitle);


    const codea = document.createElement('th');
    codea.innerHTML = code.value;
    newRow.appendChild(codea);

    
    const writer_name = document.createElement('th');
    writer_name.innerHTML = writer.value;
    newRow.appendChild(writer_name);


    const othera = document.createElement('th');
    othera.innerHTML = other.value;
    newRow.appendChild(othera);

    form.appendChild(newRow);
}*/


function addrow(){
    alert("hi");
    var htmld = '<input type="text" placeholder="Minhaj" class="book_name"> <input type="text" placeholder="998" class="code"> <input type="text" placeholder="Bin Baj Hafijullah" class="writer"> <input type="text" placeholder="N/A" class="other">';
    main.document.write("hi");
}


