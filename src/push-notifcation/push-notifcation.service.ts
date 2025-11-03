import { Inject, Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import * as mssql from 'mssql';
import { ICARE_MSSQL_POOL } from 'src/config/mssql/mssql-client.constants';

@Injectable()
export class PushNotifcationService {
   constructor(@Inject(ICARE_MSSQL_POOL)
            private readonly icarePool: mssql.ConnectionPool,) {}

            
}
