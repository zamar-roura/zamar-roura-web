import React from 'react';
import ReactDOM from 'react-dom';
import BodyComponent from './BodyComponent';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BodyComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});