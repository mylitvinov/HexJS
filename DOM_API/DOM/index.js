// BEGIN
const text = document.body.innerHTML.trim();
const lines = text.split('\n');
const tags = lines.map((line) => `<p>${line}</p>`);
document.body.innerHTML = tags.join('\n');
// END