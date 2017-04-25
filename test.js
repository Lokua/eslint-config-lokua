/* global Component  */
export default class Foo extends Component {
  state = {
    foo: `bar`
  }

  render() {
    return (
      <h1 className="root">
        {hoistingIsAFeature()}
      </h1>
    )
  }
}

function hoistingIsAFeature() {
  return `booyow!`
}
