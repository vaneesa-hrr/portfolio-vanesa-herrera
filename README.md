# 📌 Google Apps Script - Registrar datos en Google Sheets

Este script permite recibir datos mediante `POST` y almacenarlos en Google Sheets.

## 🔹 Código Principal

```javascript
var sheetName = 'Hoja 1';
var scriptProp = PropertiesService.getScriptProperties();

function intialSetup() {
  scriptProp.setProperty('key', SpreadsheetApp.getActiveSpreadsheet().getId());
}

function doPost(e) {
  Logger.log("doPost ejecutado");

  if (!e?.parameter) {
    return errorResponse("No se recibieron datos en la solicitud.");
  }

  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var sheetId = scriptProp.getProperty('key');
    if (!sheetId) throw new Error("No se encontró la propiedad 'key'. Ejecuta intialSetup() primero.");

    var sheet = SpreadsheetApp.openById(sheetId).getSheetByName(sheetName);
    if (!sheet) throw new Error(`No se encontró la hoja '${sheetName}'.`);

    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0] || [];
    var nextRow = sheet.getLastRow() + 1;
    var newRow = headers.map(header => header === 'timestamp' ? new Date() : e.parameter[header] ?? "");

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);
    return successResponse(nextRow);
  } catch (error) {
    return errorResponse(error.message);
  } finally {
    lock.releaseLock();
  }
}

function successResponse(row) {
  return ContentService
    .createTextOutput(JSON.stringify({ result: 'success', row }))
    .setMimeType(ContentService.MimeType.JSON);
}

function errorResponse(message) {
  Logger.log("Error: " + message);
  return ContentService
    .createTextOutput(JSON.stringify({ result: 'error', error: message }))
    .setMimeType(ContentService.MimeType.JSON);
}
