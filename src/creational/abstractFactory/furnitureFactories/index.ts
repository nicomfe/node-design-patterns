import Chair from '../furnitureProducts/chair'
import Table from '../furnitureProducts/table'

interface FurnitureFactory {
  createChair(): Chair
  createTable(): Table
}

export default FurnitureFactory