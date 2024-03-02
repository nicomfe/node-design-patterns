import Chair from '../../chair'

class VictorianChair implements Chair {
  sitOn() {
    return 'You are sitting on a Victorian chair'
  }
}

export default VictorianChair