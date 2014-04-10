(function () {
    var doc = document,
        list = doc.getElementsByClassName('listInput')[0],
        ul = doc.getElementById('list');

    function createItem(item) {
        var li = doc.createElement('li'),
            span = doc.createElement('span'),
            checkBox = doc.createElement('input'),
            label = doc.createElement('label'),
            spanText = doc.createTextNode('X'),
            labelText = doc.createTextNode(item);
        label.appendChild(labelText);
        span.appendChild(spanText);
        checkBox.type = 'checkbox';
        li.appendChild(checkBox);
        li.appendChild(label);
        li.appendChild(span);
        ul.appendChild(li);

        function checked() {
            if (checkBox.checked) {
                label.style.textDecoration = 'line-through';
                label.style.color = '#7C7C7C';
            } else {
                label.style.textDecoration = 'none';
                label.style.color = 'blue';
            }
        }

        function removeLi() {
            ul.removeChild(li);
        }

        checkBox.addEventListener('click', checked, false);
        span.addEventListener('click', removeLi, false);

    }

    function addList(e) {
        var ent = e.keyCode;
        if (ent === 13 && list.value !== '') {
            createItem(list.value);
            list.value = '';
        }
    }


    list.addEventListener('keypress', addList, false);
}());