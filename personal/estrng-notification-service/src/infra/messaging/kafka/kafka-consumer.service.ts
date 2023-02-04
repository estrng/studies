import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['uncommon-woodcock-9159-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'dW5jb21tb24td29vZGNvY2stOTE1OSQgCa-7TrBvCuq4-lgtb3AML3Y3ZdewHPk',
          password:
            'PFCb2zy0ZJzpkl5AR95SnnUc0Jw5NUm4krp18zphSQy5Rq_ObsBhtCyAZPGGiPc5fGqOuA==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
