function crypt (salt, text) {
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
$('#test2').html(decrypt(pass,$('#test').html()));

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




$.get("https://docs.google.com/spreadsheets/d/1Qm7b9K4zlJYb4OmaNooxES7khuL97JORDx8zmQjpU44/export?format=csv&gid=0", function (data) {
}).then(function (e) {
    es = e.split("\r\n");
    $.each(es, function (index, value) {
        arr[index] = value.split(",");
    });
    console.table(arr);
    // gocalc_dop(arr);
})



