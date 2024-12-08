import { CHAT_ID, URL_API } from './constants.js'

export const fetchRequest = async (URL, ID, depart, arrive, date, time, classCar, phone, cost, distance, comments) => {
    const message = `<b>Откуда</b>: ${depart} 
    ${'\n'}<b>Куда</b >: ${arrive} 
    ${'\n'}<b>Дата</b >: ${date} 
    ${'\n'}<b>Время</b >: ${time} 
    ${'\n'}<b>Класс</b >: ${classCar} 
    ${'\n'}<b>Расстояние</b >: ${distance} 
    ${'\n'}<b>Стоимость</b >: ${cost}р 
    ${'\n'}<b>Телефон</b >: ${phone} 
    ${'\n'}<b>Комментарий</b >: ${comments}`
    try {
        // const response = await fetch(URL, {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         chat_id: ID,
        //         parse_mode: 'html',
        //         text: message
        //     })
        // })
        // if (!response.ok) {
        //     console.error(`Ошибка POST запроса`);
        //     const message = document.getElementById('message-about-send')
        //     message.classList.add('err')
        //     message.innerText = "Заявка не отправлена, попробуйте еще раз!"
        // } else {
        //     const message = document.getElementById('message-about-send')
        //     message.classList.add('successfully')
        //     message.innerText = "Ваша заявка отправлена!"
        // }



        // $.ajax({
        //     type: "POST",
        //     url: "/mail2.php", //Change
        //     data: 'message=' + message
        // }).done(function () {
        //     setTimeout(function () {
        //         $.magnificPopup.open({
        //             items: {
        //                 src: '#popup-thanks'
        //             }
        //         });
        //     }, 1000);
        // });


        alert(message);
    } catch (err) {
        console.error(`Ошибка POST запроса`);
        const message = document.getElementById('message-about-send')
        message.classList.add('err')
        message.innerText = "Заявка не отправлена, попробуйте еще раз!"
    }

}


export const listenerSentMessageTelegram = () => {

    const buttonSend = document.getElementById('sent-order')
    buttonSend.addEventListener('click', function (e) {
        e.preventDefault();

        let n = 0
        if ($('#departure-city').val() == '') {
            $('#departure-city').siblings('.invalid-feedback').css('opacity', '1');
        } else {
            $('#departure-city').siblings('.invalid-feedback').css('opacity', '0'); n++
        }
        if ($('#arrival-city').val() == '') {
            $('#arrival-city').siblings('.invalid-feedback').css('opacity', '1');
        } else {
            $('#arrival-city').siblings('.invalid-feedback').css('opacity', '0'); n++
        }
        if ($('#select-class option:selected').val() == '') {
            $('#select-class').siblings('.invalid-feedback').css('opacity', '1');
        } else {
            $('#select-class').siblings('.invalid-feedback').css('opacity', '0'); n++
        }


        if ($('#datepicker').val() == '') {
            $('#datepicker').siblings('.invalid-feedback').css('opacity', '1');
        } else {
            $('#datepicker').siblings('.invalid-feedback').css('opacity', '0'); n++
        }

        if ($('#time-form').val() == '') {
            $('#time-form').siblings('.invalid-feedback').css('opacity', '1');
        } else {
            $('#time-form').siblings('.invalid-feedback').css('opacity', '0'); n++
        }

        if ($('#phone-form').val() == '') {
            $('#phone-form').siblings('.invalid-feedback').css('opacity', '1');
        } else {
            $('#phone-form').siblings('.invalid-feedback').css('opacity', '0'); n++
        }

        if (n == 6) {
            if (sessionStorage.getItem('form-data')) {
                const { departSity, arriveSity, carClass, cost, distance } = JSON.parse(sessionStorage.getItem('form-data'))
                const date = document.getElementById('datepicker').value
                const time = document.querySelector('#time-form').value
                const phone = document.getElementById('phone-form').value
                const comments = document.querySelector('#comments').value

                fetchRequest(URL_API, CHAT_ID, departSity, arriveSity, date, time, carClass, phone, cost, distance, comments)
            } else {
                alert('Рассчитайте стоимость')
            }
        }
    })
}









