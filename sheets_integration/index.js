const findEndpoint = "http://54.224.80.47:3000/point";

function lookupInspection() {

	const activeSheetsApp = SpreadsheetApp.getActiveSpreadsheet();
	const sheet = activeSheetsApp.getSheets()[0];

	const options = {
		method: 'get'
	};

	const response = UrlFetchApp.fetch(findEndpoint, options);
	const documents = JSON.parse(response.getContentText())

	for (d = 1; d <= documents.length; d++) {
		let doc = documents[d - 1]

		let projects = ""
		doc.projects.forEach(p => {
			projects = projects !== "" ? `${projects} - ${p}` : p
		})


		let format
		let outputTime = doc.inputTime

		format = doc?.outputTime ? `=B${d + 1}-A${d + 1}-"01:00"` : "Aguardando saída"
		format = doc?.outputTime === "21:00" ? "Impossivel calcular" : format
		outputTime = doc?.outputTime && doc?.outputTime === "21:00" ? "Não preechida" : doc?.outputTime

		fields = [[doc.inputTime, outputTime, doc.createdAt, projects, format]]
		console.log('Row ' + d + ' data: ' + fields);
		if (!doc?.outputTime)
			return sheet.getRange(`A${d + 1}:E${d + 1}`).setValues(fields).setBackground("yellow")
		else if (doc?.outputTime === "21:00")
			return sheet.getRange(`A${d + 1}:E${d + 1}`).setValues(fields).setBackground("red")
		sheet.getRange(`A${d + 1}:E${d + 1}`).setValues(fields).setBackground("white")
	}
}