import { BaseService } from '@modules/base/service';
import { WelcomeResponse } from './types';

export class WelcomeService extends BaseService {
    getWelcomeMessage() {
        return this.createSuccessResponse<WelcomeResponse>({
            message: 'Welcome to our API!',
        });
    }
}