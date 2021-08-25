/* teacher solution */
const prettify = (doc) => {
  const divs = doc.getElementsByTagName('div');
  [...divs].forEach((div) => {
    const filtered = [...div.childNodes]
      .filter((child) => child instanceof Text)
      .filter((child) => child.textContent.trim() !== '');
    filtered.forEach((node) => {
      const pEl = document.createElement('p');
      pEl.textContent = node.textContent;
      node.replaceWith(pEl);
    });
  });
};

export default prettify;