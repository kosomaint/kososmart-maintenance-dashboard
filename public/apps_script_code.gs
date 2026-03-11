
function doGet(e) {
  const machine = e.parameter.machine || 'cnc-04';
  const start = parseInt(e.parameter.start, 10);
  const end = parseInt(e.parameter.end, 10);
  const url = `https://smartmaintenance-c1e7a-default-rtdb.asia-southeast1.firebasedatabase.app/history/${machine}.json`;

  const response = UrlFetchApp.fetch(url);
  const data = JSON.parse(response.getContentText());

  const filtered = {};
  for (let key in data) {
    const ts = new Date(data[key].timestamp).getTime();
    if (ts >= start && ts <= end) {
      filtered[key] = data[key];
    }
  }

  return ContentService.createTextOutput(JSON.stringify(filtered))
    .setMimeType(ContentService.MimeType.JSON);
}
