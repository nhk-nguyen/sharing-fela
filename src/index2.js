import { createRenderer } from 'fela';
import { render } from 'fela-dom';
const root = document.getElementById('root2');

const rule = () =>  ({
  backgroundColor: 'pink',
  color: 'black',
  width: '100%',
  height: '50vh',
  fontSize: '60px',
  textAlign: 'center',
  lineHeight: '50vh'
})

const renderer = createRenderer();

render(renderer);

const className = renderer.renderRule(rule);

root.classList = className