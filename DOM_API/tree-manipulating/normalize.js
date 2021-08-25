/* teacher solution */

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { camelCase } from 'lodash';

const normalize = (doc) => {
  for (const element of doc.body.getElementsByTagName('*')) { // eslint-disable-line
    const process = (item) => element.classList.replace(item, camelCase(item));
    element.classList.forEach(process);
  }
};

export default normalize;