import Transport from '../transportProducts'
import Ship from '../transportProducts/ship'
import Logistics from './logistics'

class SeaLogistics extends Logistics {
  createTransport(): Transport {
    return new Ship();
  }
}

export default SeaLogistics