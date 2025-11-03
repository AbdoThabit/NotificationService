import { Module } from '@nestjs/common';
import { PushNotifcationService } from './push-notifcation.service';
import { PushNotifcationController } from './push-notifcation.controller';

@Module({
  controllers: [PushNotifcationController],
  providers: [PushNotifcationService],
})
export class PushNotifcationModule {}
