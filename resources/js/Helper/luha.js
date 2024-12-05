import Toastify from 'toastify-js';
import moment from 'moment';

export function showToast(message) {
    Toastify({
        text: message,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        duration: 3000,
        style: {
            background: "linear-gradient(to right, #95ccf0, #95ccf0)",
            borderRadius: "16px",
            color: '#010152',
        },
    }).showToast();
}

export function toUpper(form, field, event) {
    form[field] = event.target.value.toUpperCase();
}

export function today() {
    return moment().format('y-M-DD')
}
