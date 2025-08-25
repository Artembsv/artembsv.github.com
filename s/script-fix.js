function crypt(salt, text) {
    const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
    const byteHex = (n) => ("0" + Number(n).toString(16)).substr(-2);
    const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);

    return text
        .split("")
        .map(textToChars)
        .map(applySaltToChar)
        .map(byteHex)
        .join("");
};

function decrypt (salt, encoded) {
    const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
    const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);
    return encoded
        .match(/.{1,2}/g)
        .map((hex) => parseInt(hex, 16))
        .map(applySaltToChar)
        .map((charCode) => String.fromCharCode(charCode))
        .join("");
};

const pass = (localStorage.getItem('pass'))?localStorage.getItem('pass'):'';

$('#form_pass').on('submit', function (e) {
    e.preventDefault();
    let pass = $('#pass').val();
    localStorage.setItem('pass', pass);
    location.reload();
})

$('#reset_pass').on('click', () => {
    localStorage.setItem('pass', '');
    location.reload();
})






function getUrlParameter(name) {  
    const urlParams = new URLSearchParams(window.location.search);  
    return urlParams.get(name);  
}
$('#num_stroki').val(getUrlParameter('s'));
$('#num_stolb').val(getUrlParameter('t'));

$.get("https://docs.google.com/spreadsheets/d/1Qm7b9K4zlJYb4OmaNooxES7khuL97JORDx8zmQjpU44/export?format=csv&gid=0", function () {
}).then(function (e) {
    es = e.split("\r\n");
    let arr = [];
    $.each(es, function (index, value) {
        arr[index] = value.split(",");
    });
    if((getUrlParameter('s'))&&(getUrlParameter('t'))){
        let data = arr[getUrlParameter('s')][getUrlParameter('t')];
        $('#dannye').val(decrypt(pass,data));
    }

    // https://script.google.com/macros/s/AKfycbxxpWmA5GjhdHoBsKBqWco0lz4kvtqmyROT8MgDEIx0CrOvA1nkG-NQv-Vin3wAmXVJ/exec


})

let st = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
$('#form_edit').on('submit', function (e) {
    e.preventDefault();
$.get("https://script.google.com/macros/s/AKfycbxxpWmA5GjhdHoBsKBqWco0lz4kvtqmyROT8MgDEIx0CrOvA1nkG-NQv-Vin3wAmXVJ/exec?s="+(parseInt($('#num_stroki').val())+1)+"&t="+st[$('#num_stolb').val()]+"&d="+crypt(pass,$('#dannye').val()), function () {
}).then(function (e) {
    alert('Сохранено');
    location.reload();
})
})
