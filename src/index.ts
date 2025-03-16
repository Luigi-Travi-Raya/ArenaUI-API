import Enterprise from './models/enterprises';
import User from './models/users';
import Stock from './models/stock';
import Transaction from './models/transactions';
import sequelize, { DatabaseAuthenticate } from './database/db';
import { logger } from 'sequelize/lib/utils/logger';
import ServerStart from './routes';

async function syncModels() {
    try {
        await Enterprise.sync()
        await User.sync()
        await Stock.sync(),
            await Transaction.sync();
        console.log('Models synchronized successfully.');
    } catch (error) {
        console.error('Error synchronizing models:', error);
    }
}

DatabaseAuthenticate()
ServerStart()
// syncModels();