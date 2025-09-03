var bd = [];
window.onload = function () {
    $('body').addClass('preloader_yes');
    window.setTimeout(function () {
        $('body').removeClass('preloader_yes');
        if (localStorage.getItem('data')) {
            bd = JSON.parse(localStorage.getItem('data'));
            table_e_data(bd);
        } else {
            $('#table').append("<tr><td id='new_row'><div><textarea></textarea></div><span>+</span></td></tr>");
        }
    }, 500);
}

const secretKey = (localStorage.getItem('pass')) ? localStorage.getItem('pass') : '';
const simpleCrypto = new SimpleCrypto(secretKey)

// Окно ввода токена
$('#form_pass').on('submit', function (e) {
    e.preventDefault();
    let pass = $('#pass').val();
    localStorage.setItem('pass', pass);
    location.reload();
})

$('#reset_pass').on('click', () => {
    localStorage.setItem('pass', '');
    $('#table').html("");
    location.reload();
})

function load_table() {
    $('body').addClass('preloader_yes');
    $.get("https://script.google.com/macros/s/AKfycbzFsJaPD2JGmVInUHR7PI1pOalxt7V0wcJofcEn3Bj_4d0bMFYU9UwavYXK9Jg_2v4/exec?action=getTasks", function () {
    }).then(function (e) {
        console.log(e);
        table_e_data(e);
        localStorage.setItem('data', JSON.stringify(e));
        $('body').removeClass('preloader_yes');
    })
}
$('#load_table').on('click', () => {
    load_table();
})

function table_e_data(e) {
    $('#table').html("");
    $('#table').append("<tr><td id='new_row'><div><textarea></textarea></div><span>+</span></td></tr>");
    $.each(e, function (arr_index, arr_value) {
        console.log(arr_value[0])
        let roww = simpleCrypto.decrypt(arr_value[0]);
        let roww_split = String(roww);
        if (roww_split.includes('\n')) roww_split = '>'+roww.split('\n')[0];
        $('#table').append(`
            <tr>
                <td><div class="data">` + roww_split + `</div>
                    <div class="data_edit"><textarea>` + roww + `</textarea><br><input type="button" class="save_row" value="Сохр."></div>
                    <div class="nav">
                        <input type="button" class="svern_row" value="Сверн.">
                        <input type="button" class="edit_row" value="Ред.">
                        <input type="button" class="up_first_row" value="Вверх нач.">
                        <input type="button" class="up_row" value="Вверх">
                        <input type="button" class="down_row" value="Вниз">
                        <input type="button" class="down_last_row" value="Вниз кон.">
                    </div>
                </td>
            </tr>
            `);
    })
    work_table();
}

function work_table() {
    $('#table .data').on('click', function () {
        let i = false; its = $(this).closest('td');
        if(($('#table td').hasClass('zoom'))&&(!its.hasClass('zoom'))){
            if(its.find('textarea').css('display') != 'none') its.find('.data').html(its.find('textarea').val());
            table_e_data(bd)
            return;
        }
        if(!its.hasClass('zoom')){
            its.addClass('zoom')
        } else if (!its.hasClass('zoom_in')) {
            its.addClass('zoom_in');
            its.find('.data').html(its.find('textarea').val());
        } else if (its.hasClass('zoom_in')) {
            its.removeClass('zoom_in');
            its.find('.data').html('>'+its.find('textarea').val().split('\n')[0]);
        }
    })

    $('.save_row').on('click', function () {
        bd[$(this).closest('tr').index()-1][0] = simpleCrypto.encrypt($(this).closest('tr').find('textarea').val());
        localStorage.setItem('data', JSON.stringify(bd));
        alert ('Сохраненно!')
    })

    $('.edit_row').on('click', function () {
        $(this).closest('td').children('.data_edit').toggle();
        $(this).closest('td').children('.data').html($(this).closest('td').children('textarea').val());
    })
        
    $('.svern_row').on('click', function () {
        table_e_data(bd)
    })

    $('.up_first_row').on('click', function () {
        let bd_new = [];
        let thisis = $(this).closest('tr').index();
        bd_new.push(bd[thisis - 1]);
        $.each(bd, function (arr_index, arr_value) {
            if(arr_index != (thisis-1)) bd_new.push(arr_value);
        })
        bd = bd_new;
        localStorage.setItem('data', JSON.stringify(bd));
        table_e_data(bd);
        its = $('#table td').eq(1);
        its.addClass('zoom')
    })

    $('.down_last_row').on('click', function () {
        let bd_new = [];
        let thisis = $(this).closest('tr').index();
        $.each(bd, function (arr_index, arr_value) {
            if(arr_index != (thisis-1)) bd_new.push(bd[arr_index]);
        })
        bd_new.push(bd[thisis - 1]);
        bd = bd_new;
        localStorage.setItem('data', JSON.stringify(bd));
        table_e_data(bd);
        its = $('#table td').eq(-1);
        its.addClass('zoom')
    })

    $('.up_row').on('click', function () {
        let thisis = $(this).closest('tr').index();
        if(thisis == 1) return;
        let temp = bd[thisis - 2];
        bd[thisis - 2] = bd[thisis - 1];
        bd[thisis - 1] = temp;
        localStorage.setItem('data', JSON.stringify(bd));
        table_e_data(bd);
        its = $('#table td').eq(thisis-1);
        its.addClass('zoom')
    })
    
    $('.down_row').on('click', function () {
        let thisis = $(this).closest('tr').index()-1;
        if(thisis == ($('#table td').length-2)) return;
        let temp = bd[thisis+1];
        bd[thisis+1] = bd[thisis];
        bd[thisis] = temp;
        localStorage.setItem('data', JSON.stringify(bd));
        table_e_data(bd);
        its = $('#table td').eq(thisis+2);
        its.addClass('zoom')
    })
}



$('#upload_table').on('click', () => {
    let mass_ = [];
    $.each($('#table textarea'), function (arr_index, arr_value) {
        console.log('$(arr_value).val() - '+$(arr_value).val())
        if ($(arr_value).val() != '') mass_.push (simpleCrypto.encrypt($(arr_value).val()));
    })
    var mass = { 'data': mass_ };

    $('body').addClass('preloader_yes');
    let formData = {
        'action': 'updateTask',
        'contentType': 'application/json',
        'dannye': JSON.stringify(mass)
    }
    $.post("https://script.google.com/macros/s/AKfycbzFsJaPD2JGmVInUHR7PI1pOalxt7V0wcJofcEn3Bj_4d0bMFYU9UwavYXK9Jg_2v4/exec", formData, function (data) { //  передаем и загружаем данные с сервера с помощью HTTP запроса методом POST
        if (data == 'Данные выгрузены!') {
            $('body').removeClass('preloader_yes');
            bd = mass_;
            alert('Данные выгрузены!');
        }
    })
})

