import Chair from '../../furnitureProducts/chair'
import Table from '../../furnitureProducts/table'
import VictorianChair from '../../furnitureProducts/concrete/victorian/victorianChair'
import VictorianTable from '../../furnitureProducts/concrete/victorian/victorianTable'
import FurnitureFactory from '../index'

class VictorianFactory implements FurnitureFactory {
  public createChair(): Chair {
    return new VictorianChair()
  }

  public createTable(): Table {
    return new VictorianTable()
  }
}

export default VictorianFactory