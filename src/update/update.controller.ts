import { Controller, Put, Body, Logger } from '@nestjs/common';
import { UpdateService } from './update.service';

@Controller('update-data')
export class UpdateController {
  private readonly logger = new Logger(UpdateController.name);

  constructor(private readonly updateService: UpdateService) {}

  @Put()
  updateData(@Body() updatedText: any): string {
    this.logger.debug(`Request body: ${JSON.stringify(updatedText)}`);
    return this.updateService.updateData(updatedText);
  }
}
