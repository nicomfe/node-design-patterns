import Logistics from './logistics'
import RoadLogistics from './roadLogistics'
import SeaLogistics from './seaLogistics'

console.log('Starting factory method pattern example...')

let logisticsFactory: Logistics = new RoadLogistics()
console.log(logisticsFactory.planDelivery())

logisticsFactory = new SeaLogistics()
console.log(logisticsFactory.planDelivery())