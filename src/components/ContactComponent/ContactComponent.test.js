import React from 'react';
import ReactDOM from 'react-dom';
import ContactComponent from './ContactComponent';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContactComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});