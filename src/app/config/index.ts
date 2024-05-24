import dotenv from 'dotenv'
import path, { join } from 'path'

dotenv.config({path: path.join(process.cwd(), '.env')})