import Logistics from './logistics'
import Transport from './transport'
import Truck from './transport/truck'

class RoadLogistics extends Logistics {
  createTransport(): Transport {
    return new Truck();
  }
}

export default RoadLogistics