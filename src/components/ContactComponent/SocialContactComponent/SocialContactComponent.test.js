import React from 'react';
import ReactDOM from 'react-dom';
import SocialContactComponent from './SocialContactComponent';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SocialContactComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});