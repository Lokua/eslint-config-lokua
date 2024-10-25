export default class Foo {
  state = {
    foo: 'bar',
  }

  get random() {
    return Math.random()
  }

  render() {
    return (
      <h1 className="root">
        {hoistingIsAFeature()}
        <Stateless />
      </h1>
    )
  }
}

function hoistingIsAFeature() {
  return 'booyow!'
}
