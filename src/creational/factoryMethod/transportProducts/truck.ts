import Transport from './index'

class Truck implements Transport {
    deliver(): string {
        return 'Deliver by land in a box'
    }
}

export default Truck