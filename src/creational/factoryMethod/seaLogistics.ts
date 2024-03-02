import Transport from './transport'
import Ship from './transport/ship'
import Logistics from './logistics'

class SeaLogistics extends Logistics {
  createTransport(): Transport {
    return new Ship();
  }
}

export default SeaLogistics