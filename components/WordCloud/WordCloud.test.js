import React from 'react';
import ReactDOM from 'react-dom';
import WordCloud from './WordCloud';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WordCloud />, div);
  ReactDOM.unmountComponentAtNode(div);
});