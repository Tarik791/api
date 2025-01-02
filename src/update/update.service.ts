import { Injectable, Logger } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class UpdateService {
  private readonly logger = new Logger(UpdateService.name);

  updateData(updatedText: any): string {
    this.logger.debug(`Updated Text: ${JSON.stringify(updatedText)}`);

    const filePath = path.join(
      __dirname,
      '..',
      '..',
      '..',
      'src',
      'locales',
      `${updatedText.lang}.json`
    );
    
    this.logger.debug(`File Path: ${filePath}`);
    try {
      const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      if (jsonData[updatedText.key]) {
        this.logger.debug(
          `Found key: ${updatedText.key}, Current data: ${JSON.stringify(
            jsonData[updatedText.key]
          )}`
        );

        jsonData[updatedText.key][updatedText.field] = updatedText.updatedText;
        fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));

        return 'Data updated successfully';
      } else {
        this.logger.warn(`Key "${updatedText.key}" not found`);
        return `Key "${updatedText.key}" not found`;
      }
    } catch (error) {
      this.logger.error('Error updating data', error.stack);
      throw error;
    }
  }
}
