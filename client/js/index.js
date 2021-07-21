var fields = [
    document.querySelector("#data"),
    document.querySelector("#quantidade"),
    document.querySelector("#valor")
];

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event){

    event.preventDefault();

    var tr = document.createElement('tr');

    fields.forEach(field => {
        var td = document.createElement('td');
        td.textContent = field.value;
        tr.appendChild(td);
    });

    var tdSize = document.createElement('td');
    tdSize.textContent = fields[1].value * fields[2].value;
    tr.appendChild(tdSize);

    tbody.appendChild(tr);

    fields[0].value = '';
    fields[1].value = 1;
    fields[2].value = 0;

    fields[0].focus();
});