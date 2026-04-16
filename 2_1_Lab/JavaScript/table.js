const createTable = (data, idTable) => {
    const table = document.getElementById(idTable);
    
    // Самостоятельное задание в Задание 2
    if (data.length === 0) { // Если данных нет, мы не сможем обратиться к Object.keys(data[0]);, поэтому сами делаем заголовки
        const headers = ["Название", "Тип", "Страна", "Город", "Год", "Высота"]
        const headerRow = createHeaderRow(headers);
        table.append(headerRow);
        return;
    }
    else { // Это если данные есть
        const header = Object.keys(data[0]);
        console.log(header);
        console.log('2000' > '300');
        /* создание шапки таблицы */
        const headerRow = createHeaderRow(header);
        table.append(headerRow);
        const bodyRows = createBodyRows(data);
        table.append(bodyRows); 
    }
};
const createHeaderRow = (headers) => {
    const tr = document.createElement('tr');
    headers.forEach(header => {
        const th = document.createElement('th');
        th.innerHTML = header;
        tr.append(th);
    });
    return tr;
};

const createBodyRows = (data) => { //Передаём data в функцию, чтобы работать с данными
    const tbody = document.createElement('tbody');
    data.forEach(row => { // для каждого элемента в data создаём tr
        const tr = document.createElement('tr'); 
        Object.values(row).forEach(val => { // Для всех данных Object создаём td 
            const td = document.createElement('td');
            td.innerHTML = val;
            tr.append(td);
        })
        tbody.append(tr);
    })
    return tbody;
}

const clearTable = (idTable) => {
    const table = document.getElementById(idTable);
    if (table) {
        while (table.rows.length > 0) {
            table.deleteRow(0);
        }
    }
}

