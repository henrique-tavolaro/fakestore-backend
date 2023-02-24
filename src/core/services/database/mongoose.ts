import mongoose from "mongoose";
import { env } from "../../config/env";

mongoose.set('strictQuery', true)
mongoose.connect(env.MONGO_URL!)
mongoose.Promise = global.Promise;

export { mongoose };
