import _ from 'lodash';

import './styles.css';
import Icon from './images/icon.png';

function component() {
  var element = document.createElement('div');

  // Lodash, imported above
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  var myIcon = new Image();
  myIcon.src = Icon;
  myIcon.classList.add('framed');

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
