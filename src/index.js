import './scss/main.scss';
import './index2';

import renderer from './felaRenderer'

const root = document.getElementById('root');

const rule = () =>  ({
  backgroundColor: 'black',
  color: 'white',
  width: '100%',
  height: '50vh',
  fontSize: '40px',
  textAlign: 'center',
  lineHeight: '50vh'
})

const className = renderer.renderRule(rule);

root.classList = className
