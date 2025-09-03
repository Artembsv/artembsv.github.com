//Получаем доступ к таблице по ссылке с уникальным идентификатором
var tasklist = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1Qm7b9K4zlJYb4OmaNooxES7khuL97JORDx8zmQjpU44/edit#gid=0");
//Получаем доступ к странице по ее имени
var tasks = tasklist.getSheetByName("Main");


//Стандартная функция Google Apps Script для прослушивания входящих запросов, отправленных методом POST
function doPost (e) {
  var operation = e.parameter.action;//получаем параметр "action"
    
      switch (operation) {
          case "updateTask": return updateTask (e);
      }

}

//Стандартная функция Google Apps Script для прослушивания входящих запросов, отправленных методом GET
function doGet (e) {
  var operation = e.parameter.action;//получаем параметр "action"
    
      switch (operation) {    
          case "getTasks": return getTasks ();
      }

}

var lastrow = tasks.getLastRow();//получаем номер последней строки в таблице

//Функция, отвечающая за получение строк и отправку данных клиенту
function getTasks () {
  var data = tasks.getRange("A1:A" + lastrow).getValues();//получаем массив нужных колонок
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);//возвращает в ответ полученные данные в JSON формате
}

//Функция, отвечающая за обновление задач
function updateTask (e) {
  let dannye = JSON.parse(e.parameter.dannye)['data'];
  for (let index = 0; index < dannye.length; index++) {
    tasks.getRange('A'+(index+1)).setValue(dannye[index]);
  }
  for (let index = dannye.length+1; index <= lastrow; index++) {
    tasks.getRange('A'+index).setValue('');
  }

  return ContentService.createTextOutput("Данные выгрузены!");
}


