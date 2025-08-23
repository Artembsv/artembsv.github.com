import { calculateCost } from "./calculateCost.js";
import { createCostElement } from "./createCostElement.js";

export function myMapFunc(start, finish) {
    const costBtnAmount = document.getElementById('btn-cost-amount')
    const btnSpinner = document.querySelector('#btn-spinner')

    const departInput = document.querySelector('#departure-city');
    const arrivalInput = document.querySelector('#arrival-city');
    if (start && finish) {
        costBtnAmount.disabled = true;

        btnSpinner.classList.add('active-spinner')
    }



    var element = document.getElementById('map').firstChild
    element && element.remove()
    var myMap = new ymaps.Map('map', {
        center: [55.18786106953707, 61.27481299999998],
        zoom: 9,
        controls: ['routePanelControl']
    });

    // Получение ссылки на панель маршрутизации.
    var control = myMap.controls.get('routePanelControl');
    control.options.set({
        visible: false,
    });
    // Определение местоположения пользователя.
    var location = ymaps.geolocation.get();
    // Метод geolocation.get() возвращает Promise, который
    // будет разрешен коллекцией GeoObjectCollection.
    // Ссылка на эту коллекцию будет доступна в поле res.geoObjects.


    location.then(function (res) {


        // Получение адреса местоположения пользователя.
        var userTextLocation = typeof start == "string" ? start : res.geoObjects.get(0).properties.get('text');
        control.routePanel.state.set({
            // Флаг, запрещающий пользователям изменять
            // адрес начальной точки в поле ввода.
            fromEnabled: false,
            // Флаг, запрещающий пользователям изменять
            // адрес конечной точки в поле ввода.
            toEnabled: false,
            // В качестве начальной точки маршрута будет установлено
            // местоположение пользователя.
            from: userTextLocation,
            // Адрес конечной точки.
            to: finish || ''
        });


    });


    // Получение ссылки на панель.
    var control = myMap.controls.get('routePanelControl');

    // Получение мультимаршрута.
    var multiRoutePromise = control.routePanel.getRouteAsync();




    multiRoutePromise.then(function (multiRoute) {
        // Подписка на событие обновления мультимаршрута.
        multiRoute.model.events.add('requestsuccess', function (event) {
            // console.log(event.originalEvent.target);
            // Получение ссылки на активный маршрут.
            var activeRoute = multiRoute.getActiveRoute();
            // console.log(activeRoute);

            // Когда панель добавляется на карту, она
            // создает маршрут с изначально пустой геометрией. 
            // Только когда пользователь выберет начальную и конечную точки,
            // маршрут будет перестроен с непустой геометрией.
            // Поэтому для избежания ошибки нужно добавить проверку,
            // что маршрут не пустой.

            if (activeRoute) {

                // Вывод информации об активном маршруте.
                // console.log("Длина: " + activeRoute.properties.get("distance").text);
                // console.log("Время прохождения: " + activeRoute.properties.get("duration").text);

                const carSelectElement = document.getElementById('select-class')
                const indexOptionElement = carSelectElement.options.selectedIndex
                const element = carSelectElement[indexOptionElement]
                const carClass = element.getAttribute('type')
                const cost = calculateCost(activeRoute.properties.get("distance").text, carClass)
                // console.log("Стоимость: " + cost);
                createCostElement(cost, activeRoute.properties.get("distance").text)

            }

        }).add("requestfail", function (event) {
            createCostElement()
            departInput.setCustomValidity(false)
            arrivalInput.setCustomValidity(false)

            // console.log(event);
        });


    }, function (err) {
        // console.log(err);
    });

}