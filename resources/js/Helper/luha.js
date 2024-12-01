import Toastify from 'toastify-js';

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
