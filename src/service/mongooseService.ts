import mongoose from "mongoose";
import debug from 'debug';

const log: debug.IDebugger = debug('app:mongoose-service');

class MongooseService {
    private count = 0;
    private mongooseOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        serverSelectionTimeoutMS: 5000,
    };

    constructor() {
        this.connectWithRetry();
    }

    getMongoose() {
        return mongoose;
    }

    connectWithRetry = async () => {

        log.info('Attempting MongoDB connection (will retry if needed');
        try {
            await mongoose.connect('mongodb://localhost:27017/cowork-api', this.mongooseOptions);
            log.info('Connected to MongoDB successfully');
        }catch (e) {
            log.error('Error connecting to MongoDB',e);
        }
    }
}
export default new MongooseService();