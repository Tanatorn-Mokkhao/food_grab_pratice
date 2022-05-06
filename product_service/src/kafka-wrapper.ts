import { Kafka } from 'kafkajs'

class KafkaWrapper {
    private client?: Kafka
    
    async connect(clientId: string, brokers: string[]) {
        try {
            this.client = new Kafka({ clientId, brokers })
            const producer = this.client.producer()

            await producer.connect()
        } catch (err) {
            console.log(err)
        }
    }


}
export const kafkaWrapper = new KafkaWrapper()