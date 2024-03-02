import Transport from './index'

class Ship implements Transport {
  deliver(): string {
    return 'Deliver by sea'
  }
}

export default Ship