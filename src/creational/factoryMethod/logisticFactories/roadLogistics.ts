import Logistics from './logistics'
import Transport from '../transportProducts'
import Truck from '../transportProducts/truck'

class RoadLogistics extends Logistics {
  createTransport(): Transport {
    return new Truck();
  }
}

export default RoadLogistics