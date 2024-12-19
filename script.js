document.getElementById('add').addEventListener('click', function() {
    const input = document.getElementById('input').value;
    if (input.trim() !== "") {
        const li = document.createElement('li');

        const link = document.createElement('a');
        link.href = '#';
        link.textContent = input;

        li.appendChild(link);

        document.getElementById('list').appendChild(li);

        document.getElementById('input').value = '';
    }
});