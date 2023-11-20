document.getElementById('add-button')
        .addEventListener( 'click', () => {
            let arr = [];
            arr.push(document.getElementById('input-text').value);
            document.getElementById('input-text').value = "";

            let ul = document.querySelector('ul'); //se hace pq te devuelve directamente el ul
            let li = document.createElement('li');
            
            for (let key of arr) {
                li.textContent = key;
                li.classList.add('todo');
                ul.append(li);
            } 
        });

