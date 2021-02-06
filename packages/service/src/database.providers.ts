import { Connection, createConnection } from 'typeorm';
import { ContratoEntity } from './model';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'mssql',
        host: 'tecidosbr.database.windows.net',
        port: 1433,
        username: 'tecidosbr',
        password: 'next$2020',
        database: 'gestao-contratos-db',
        entities: [`${__dirname}/model/*.entity.{ts,js}`],
        synchronize: true,
      }),
  },
  {
    provide: 'CONTRATO_REPOSITORY',
    useFactory: (connection: Connection) =>
      connection.getRepository(ContratoEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];
