let notifications = document.querySelector('.notifications');
let success = document.querySelector('#success');
let error = document.querySelector('#error');
let info = document.querySelector('#info');
let warning = document.querySelector('#warning');

function createToast(type, icon, title, text){
    let newToast = document.createElement('div');
    newToast.innerHTML = `
    <div class="toast ${type}">
        <i class="${icon}"></i>
        <div class="content">
            <div class="title">${title}</div>
            <span>${text}</span>
        </div>
         <i class="fa-solid fa-xmark"
         onclick="(this.parentElement).remove()"></i>
    </div>`;
    notifications.appendChild(newToast);
    newToast.timeOut = setTimeout(
        () => newToast.remove(), 5000
    )
}


success.onclick = function(){
    let type = 'success';
    let icon = 'fa-regular fa-circle-check' ;
    let title = 'Success ';
    let text = 'This is a success toast';
    createToast(type, icon, title, text);
}

error.onclick = function(){
    let type = 'error';
    let icon = 'fa-solid fa-circle-exclamation' ;
    let title = 'error ';
    let text = 'This is a error toast';
    createToast(type, icon, title, text);
}

warning.onclick = function(){
    let type = 'warning';
    let icon = 'fa-solid fa-triangle-exclamation' ;
    let title = 'warning';
    let text = 'This is a warning toast';
    createToast(type, icon, title, text);
}

info.onclick = function(){
    let type = 'info';
    let icon = 'fa-solid fa-circle-info' ;
    let title = 'info';
    let text = 'This is a info toast';
    createToast(type, icon, title, text);
}