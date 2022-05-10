/*
  В функцию personUpdate() приходят данные в виде объекта, содержащую некую информацию о человеке.
  Если этот человек является женщиной (свойство gender содержит значение 'female'), то из этого объекта
  необходимо удалить свойство age, если оно есть.
  Если этот человек является мужчиной (свойство gender содержит значение 'male'), следует убедиться,
  что в этом объекте есть свойство income. Если его нет, необходимо его добавить
  и присвоить начальное значение 100000.
  Объект после манипуляций следует вернуть в качестве результата работы функции.
*/
export function personUpdate(data) {
    if (data.gender == 'female') {
        delete data.age;
    }
    if (data.gender == 'male' && data.income == undefined) {
        data.income = 100000;
    }
    return data;
}

/*
  В функцию objectFieldsList приходят три объекта с различными полями, список которых заранее неизвестен.
  Верните список названий этих полей в алфавитном порядке в виде массива строк.
*/
export function objectFieldsList(obj1, obj2, obj3) {
    let arr = [];
    let key;

    for (key in obj1) {
        arr = [...arr, key];
    }
    for (key in obj2) {
        arr = [...arr, key];
    }
    for (key in obj3) {
        arr = [...arr, key];
    }

    arr.sort();

    return arr;
}

/*
  Верните в результате работы функции массив с клонами объекта obj.
  При этом каждый клон должен дополнительно содержать поле id со своим порядковым номером в массиве.
  Количество клонов - count.
*/
export function objectClone(obj, count) {
    function deepCopy(obj) {
        let newobj = {};
        for (let key in obj) {
            if (typeof obj[key] == 'object') {
                newobj[key] = deepCopy(obj[key]);
            } else {
                newobj[key] = obj[key];
            }
        }
        return newobj;
    }

    let arrOfObj = [];
    let newobj;

    for (let i = 0; i < count; i++) {
        newobj = { id: i, ...deepCopy(obj) };
        arrOfObj.push(newobj);
    }
    return arrOfObj;
}
