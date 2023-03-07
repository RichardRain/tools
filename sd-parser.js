var originalText;
var doneText;

function parseText() {
	originalText = document.getElementById("parser").value;
	originalText = "Prompt: " + originalText;
	originalText = originalText.replace("&#xA;-", " \n\nNegative: ");
	originalText = originalText.replace("&lt;", "<");
	originalText = originalText.replace("&gt;", ">");
	originalText = originalText.replace("&#xA;", " \n\n");

	document.getElementById("done").value = originalText;
	document.getElementById("copyButton").innerText = "Copy!";
}

function copyText() {
	doneText = document.getElementById("done").value;

	navigator.clipboard.writeText(doneText);
	document.getElementById("copyButton").innerText = "Copied!";
}

function clearText() {
	document.getElementById("parser").value = "";
	document.getElementById("done").value = "";
	document.getElementById("copyButton").innerText = "Copy!";
}
