import { CONFIG } from './config';
import app from './app';

export default function listen() {
    console.log('Run listen task - [@core/server.ts]');
    app.listen(CONFIG.PORT, () => {
        console.log(`\t* Server running on port ${CONFIG.PORT}`);
        console.log(`\t* Environment: ${CONFIG.NODE_ENV}`);
        console.log(`\t* API: http://localhost:${CONFIG.PORT}${CONFIG.API_PREFIX}/welcome\n`);
    });
}