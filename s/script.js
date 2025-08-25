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





$.get("https://docs.google.com/spreadsheets/d/1Qm7b9K4zlJYb4OmaNooxES7khuL97JORDx8zmQjpU44/export?format=csv&gid=0", function () {
}).then(function (e) {
    es = e.split("\r\n");
    let arr = [];
    $.each(es, function (index, value) {
        arr[index] = value.split(",");
    });
    $('#table').append("<tr><td></td><td>A</td><td>B</td><td>C</td><td>D</td></tr>");
    $.each(arr, function (arr_index, arr_value) {
        $('#table').append("<tr>");
        $.each(arr_value, function (arr_index_index, arr_value_value) {
            if(arr_index_index == 0){
                $('#table').append("<td><a href='./fix.html?s=" + arr_index + "' target='_blank'>" + arr_index + "</a></td>");
            }
            let result;
            if(((typeof arr_value_value) == 'undefined') || (arr_value_value.length < 1)){
                result = '';
            } else {
                result = decrypt(pass,arr_value_value).split('\n')[0];
            }
            $('#table').append("<td><a href='./fix.html?s=" + arr_index + "&t=" + arr_index_index + "' target='_blank'>" + result + "</a></td>");
        })
        $('#table').append("</tr>");
    })
})



