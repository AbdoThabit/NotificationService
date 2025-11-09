import { Inject, Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import * as mssql from 'mssql';
import { ICARE_MSSQL_POOL } from 'src/config/mssql/mssql-client.constants';
import { NotificationDto } from './dto/notification-data';
import { getTokenDto } from './dto';

@Injectable()
export class PushNotifcationService {
   constructor(@Inject(ICARE_MSSQL_POOL)
            private readonly icarePool: mssql.ConnectionPool,) {}
   
//     async getTokens(data : NotificationDto){
//       const getNotificationTokensRequest = new mssql.Request(this.icarePool);
//             getNotificationTokensRequest.input('@center_id', mssql.Int, data.centerId);
//             getNotificationTokensRequest.input('@notification_id', mssql.Int, data.notificationId);
//             getNotificationTokensRequest.input('@notification_type', mssql.Date, data.notifictionType );
//             const result = await getNotificationTokensRequest.excute('Sp_selNotificationTokens');
//             console.log(result);
//     }
    async getTokens(data : getTokenDto){
      const getNotificationTokensRequest = new mssql.Request(this.icarePool);
            getNotificationTokensRequest.input('center_id', mssql.Int, data.center_id);
            getNotificationTokensRequest.input('notification_id', mssql.Int, data.notification_id);
            getNotificationTokensRequest.input('notification_type', mssql.Int, data.notification_type );
            const result = await getNotificationTokensRequest.execute('Sp_selNotificationTokens');
            console.log(result);
            return result.recordset[0].deviceToken;
    }         
            
}
