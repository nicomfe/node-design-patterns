import FurnitureFactory from './furnitureFactories'
import ModernFurnitureFactory from './furnitureFactories/concrete/modernFactory'
import VictorianFurnitureFactory from './furnitureFactories/concrete/victorianFactory'
import Chair from './furnitureProducts/chair'
import Table from './furnitureProducts/table'

console.log('Starting abstract factory pattern example...')

console.log('Modern furniture:')
let furnitureFactory: FurnitureFactory = new ModernFurnitureFactory()
let chair: Chair = furnitureFactory.createChair()
console.log(chair.sitOn())
let table: Table = furnitureFactory.createTable() 
console.log(table.putOn())

console.log('Victorian furniture:')
furnitureFactory = new VictorianFurnitureFactory()
chair = furnitureFactory.createChair()
console.log(chair.sitOn())
table = furnitureFactory.createTable() 
console.log(table.putOn())