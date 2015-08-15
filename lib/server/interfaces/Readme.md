## Interface
An interface provides a consumer access to routes through a protocol that it defines.

### Interface Signature
#### Example
```javascript
export default class RestInterface extends Represent.Interface {
  static interfaceName = 'REST'

  interfaceWillMount() {
    // ?
  }

  interfaceWillUnmount() {
    // Stop listening
  }

  // Think like `React.Component#render`, but async and not visual...
  export() {
    // Return a promise
    return app
      .listen(80)
  }
}
```