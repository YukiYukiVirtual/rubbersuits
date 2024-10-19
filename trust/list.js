window.addEventListener("DOMContentLoaded", function()
{
	function readcsv(filePath)
	{
		var csvData = new Array();
		var data = new XMLHttpRequest();	
		data.open("GET", filePath, false); //true:非同期,false:同期
		data.send(null);

		var LF = String.fromCharCode(10); //改行ｺｰﾄﾞ
		var lines = data.responseText.split(LF);
		for (var i = 0; i < lines.length;++i) {
			var cells = lines[i].replace("\r", "").split(",");
			if( cells.length == 4 ) {
				var tags = cells[3].split(";");
				for(var j = 0; j < tags.length; j++)
				{
					tags[j] = tags[j].trim();
				}
				var cellData = {
					"name": cells[0].trim(),
					"url": cells[1].trim(),
					"description": cells[2].trim(),
					"tags": tags
				};
				csvData.push(cellData);
			}
		}
		return csvData;
	}
	console.dir(readcsv("list.csv"));
	
});