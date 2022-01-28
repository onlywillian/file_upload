const form = document.querySelector('form');
const input = document.querySelector('input');

function handleSubmit(e) {
    const files = e.target.files;

    console.log(files);

    for (let i = 0; i < files.length; i++) {
        const div = document.createElement('div');
        div.className = 'upload-file-block';
        document.querySelector('.main-content').append(div);

        const type = document.createElement('div');
        type.className = 'file-type';
        div.append(type);
        const icon = document.createElement('i');
        icon.className = 'material-icons';
        icon.textContent = 'image';
        type.append(icon);

        const name = document.createElement('div');
        name.className = 'file-name';
        name.textContent = files[i].name;
        div.append(name);

        const size = document.createElement('div');
        size.className = 'file-size';
        size.textContent = parseInt(files[i].size / 1024) + ' KB';
        div.append(size);

        form.submit();
    }
}

form.addEventListener('submit', e => { 
    e.preventDefault();
});

input.addEventListener('change', e => handleSubmit(e));