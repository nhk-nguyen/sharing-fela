import './scss/main.scss';
import { createRenderer } from 'fela';
import { render } from 'fela-dom';


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

const renderer = createRenderer();

render(renderer);

const className = renderer.renderRule(rule);
console.log(className, 'className');

root.classList = className
