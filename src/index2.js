import renderer from './felaRenderer'
const root = document.getElementById('root2');

const rule = (props) =>  ({
  backgroundColor: 'pink',
  color: 'black',
  width: '100%',
  height: '50vh',
  fontSize: props.size,
  textAlign: 'center',
  lineHeight: '50vh'
})

const className = renderer.renderRule(rule, {size: '35px'});

root.classList = className