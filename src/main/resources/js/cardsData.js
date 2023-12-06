function processJsonData(jsonData) {
    var dataArray = JSON.parse(jsonData);

    dataArray.forEach(function(data, index) {
        var card = document.getElementById('card' + (index + 1));

        card.querySelector('.name').textContent = data.name;
        card.querySelector('.price').textContent = data.price;
        card.querySelector('.max_students').textContent = data.max_students;
        card.querySelector('.period').textContent = data.period;
        card.querySelector('.duration').textContent = data.duration;
        card.querySelector('.type_of_lessons').textContent = data.type_of_lessons;
    });
}
function processJsonDataTariffs(jsonData) {
    var dataArray = JSON.parse(jsonData);

    dataArray.forEach(function(data, index) {
        var card = document.getElementById('card' + (index + 1));

        card.querySelector('.name').value = data.name;
        card.querySelector('.price').value = data.price;
        card.querySelector('.max_students').value = data.max_students;
        card.querySelector('.period').value = data.period;
        card.querySelector('.duration').value = data.duration;
        card.querySelector('.type_of_lessons').value = data.type_of_lessons;
    });
}