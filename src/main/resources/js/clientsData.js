function processJsonData(jsonData1) {
    var jsonData = JSON.parse(jsonData1);

    var tableBody = document.querySelector('.your-table-tbody');
    jsonData.forEach(function(data) {
        var row = document.createElement('tr');

        // Создаем ячейки и добавляем данные
        var nameCell = document.createElement('td');
        nameCell.textContent = data.clientsName;
        row.appendChild(nameCell);

        var field1Cell = document.createElement('td');
        field1Cell.textContent = data.phone;
        row.appendChild(field1Cell);

        var field2Cell = document.createElement('td');
        field2Cell.textContent = data.email;
        row.appendChild(field2Cell);

        var field3Cell = document.createElement('td');
        field3Cell.textContent = data.schedule;
        row.appendChild(field3Cell);

        var field4Cell = document.createElement('td');
        field4Cell.textContent = data.lesson_time;
        row.appendChild(field4Cell);

        var field5Cell = document.createElement('td');
        field5Cell.textContent = data.tariffsName;
        row.appendChild(field5Cell);

        // Добавляем строку в tbody таблицы
        tableBody.appendChild(row);
    });
}