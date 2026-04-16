document.addEventListener("DOMContentLoaded", function() {
    createTable(buildings, 'list');
    //
    const sortForm = document.getElementById('sort');
    //

    //фильтрация
    const filterForm = document.getElementById('filter');
    document.getElementById('findButton').addEventListener("click", function() {
        filterTable(buildings, 'list', filterForm);
        console.log('Тестик: ', Number('123 Утка по-пекински'));
        console.log('Тестик 2: ', '10'.localeCompare(true));
        
    })
    document.getElementById('clearButton').addEventListener("click", function() {
        console.log(1);
        clearFilter(buildings, 'list', filterForm); 
        console.log(2);
        resetSort(buildings, 'list', sortForm);

    })
    //сортировка
    
    setSortSelects(buildings, sortForm);

    const firstSelect = document.getElementById('fieldsFirst');
    firstSelect.addEventListener('change', function() {
        changeNextSelect(firstSelect, 'fieldsSecond');
    })

    document.getElementById('sortButton').addEventListener('click', function() {
        sortTable(buildings, 'list', sortForm);
    })

    document.getElementById('resetSortButton').addEventListener('click', function() {
        resetSort(buildings, 'list', sortForm);
        clearFilter(buildings, 'list', filterForm);
    })
})

// формирование полей элемента списка с заданным текстом и значением
const createOption = (str, val) => {
    let item = document.createElement('option');
    item.text = str;
    item.value = val;
    return item;
}

// формирование поля со списком
// параметры – массив со значениями элементов списка и элемент select
const setSortSelect = (arr, sortSelect) => {
    // создаем OPTION Нет и добавляем ее в SELECT
    sortSelect.append(createOption('Нет', 0));
    // перебираем массив со значениями опций
    arr.forEach((item, index) => {
        // создаем OPTION из очередного ключа и добавляем в SELECT
        // значение атрибута VALUE увеличиваем на 1, так как значение 0 имеет опция Нет
        sortSelect.append(createOption(item, index + 1));
    });
}

// формируем поля со списком для многоуровневой сортировки
const setSortSelects = (data, dataForm) => {
    // выделяем ключи словаря в массив
    const head = Object.keys(data[0]);
    // находим все SELECT в форме
    const allSelect = dataForm.getElementsByTagName('select');
    for(const item of allSelect) {
        // формируем очередной SELECT
        setSortSelect(head, item);
        // САМОСТОЯТЕЛЬНО все SELECT, кроме первого, сделать неизменяемым
        if (item !== allSelect[0]) {
        item.disabled = true;
        }
    }
}

// настраиваем поле для следующего уровня сортировки
const changeNextSelect = (curSelect, nextSelectId) => {
    let nextSelect = document.getElementById(nextSelectId);
    nextSelect.disabled = false;
    // в следующем SELECT выводим те же option, что и в текущем
    nextSelect.innerHTML = curSelect.innerHTML;
    // удаляем в следующем SELECT уже выбранную в текущем опцию
    // если это не первая опция - отсутствие сортировки
    if (curSelect.value !== '0') {
        nextSelect.remove(curSelect.value);
    } else {
        nextSelect.disabled = true;
    }
}