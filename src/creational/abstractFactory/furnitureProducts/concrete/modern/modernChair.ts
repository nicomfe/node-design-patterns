import Chair from '../../chair'

class ModernChair implements Chair {
  sitOn() {
    return 'You are sitting on a Modern chair'
  }
}

export default ModernChair