import Chair from '../../furnitureProducts/chair'
import Table from '../../furnitureProducts/table'
import ModernChair from '../../furnitureProducts/concrete/modern/modernChair'
import ModernTable from '../../furnitureProducts/concrete/modern/modernTable'
import FurnitureFactory from '../index'

class ModernFactory implements FurnitureFactory {
  public createChair(): Chair {
    return new ModernChair()
  }

  public createTable(): Table {
    return new ModernTable()
  }
}

export default ModernFactory