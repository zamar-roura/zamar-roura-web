import React from 'react';
import ReactDOM from 'react-dom';
import CVComponent from './CVComponent';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CVComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});