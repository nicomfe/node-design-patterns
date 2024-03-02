import Transport from './transport'

export default abstract class Logistics {
  planDelivery(): string {
    const transport = this.createTransport()
    return transport.deliver()
  }

  abstract createTransport(): Transport
}