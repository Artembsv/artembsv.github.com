import { myMapFunc } from './mapFunc.js'
import { init } from './initialMap.js?v3'
import { validate } from './validate.js';
import { listenerSentMessageTelegram } from './telegram.js';

ymaps.ready(myMapFunc);
ymaps.ready(init);

const formCalc = document.getElementById('form-for-calculation')
formCalc.addEventListener("submit", (e) => {
    e.preventDefault()

    const departInput = document.querySelector('#departure-city');
    const arrivalInput = document.querySelector('#arrival-city');
    departInput.setCustomValidity('')
    arrivalInput.setCustomValidity('')

    if (formCalc.checkValidity()) {
        sessionStorage.removeItem('form-data')
        const departSity = document.getElementById('departure-city').value
        const arriveSity = document.getElementById('arrival-city').value

        const carSelectElement = document.getElementById('select-class')
        const indexOptionElement = carSelectElement.options.selectedIndex
        const element = carSelectElement[indexOptionElement]
        const carClass = element.getAttribute('type')


        const formData = {
            departSity: departSity,
            arriveSity: arriveSity,
            carClass: carClass

        }
        // console.log(formData);

        sessionStorage.setItem('form-data', JSON.stringify(formData))

        myMapFunc(departSity, arriveSity)

    }



})

// ======================== Listener for send message ===============

window.addEventListener('load', () => {
    validate();
    sessionStorage.removeItem('form-data')
}, false);

const sentForm = document.getElementById('form-for-sent')
const checkPhone = document.querySelector('#check-phone')

const inputPhone = document.querySelector('#phone-form')
const checkDate = document.getElementById('datepicker')
const checkTime = document.querySelector('#time-form')


const validationFunc = (e) => {
    // console.log(e.target.value.length);

    // if (e.target.value.length > 4) {
    //     checkPhone.classList.remove('check-phone')
    //     if (sessionStorage.getItem('form-data') && sentForm.checkValidity()
    //     ) {
    //         document.querySelector('#sent-order').disabled = false;
    //     } else {
    //         document.querySelector('#sent-order').disabled = true;
    //     }
    // } else {

    //     checkPhone.classList.add('check-phone')
    // }
}

checkDate.addEventListener('input', (e) => {
    validationFunc(e)
})

checkTime.addEventListener('input', (e) => {
    validationFunc(e)
})

inputPhone.addEventListener('input', (e) => {
    validationFunc(e)
})

listenerSentMessageTelegram()