import Logistics from './logisticFactories/logistics'
import RoadLogistics from './logisticFactories/roadLogistics'
import SeaLogistics from './logisticFactories/seaLogistics'

console.log('Starting factory method pattern example...')

let logisticsFactory: Logistics = new RoadLogistics()
console.log(logisticsFactory.planDelivery())

logisticsFactory = new SeaLogistics()
console.log(logisticsFactory.planDelivery())