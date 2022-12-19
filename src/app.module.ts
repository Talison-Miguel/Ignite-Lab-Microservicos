import { Module } from '@nestjs/common';
import { DataBaseModel } from './infra/database/database.model';
import { HttpModule } from './infra/http/http.module';

@Module({
    imports: [HttpModule, DataBaseModel],
})
export class AppModule {}
