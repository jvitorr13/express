import {pool} from "pg"
import { database } from "pg/lib/defaults"
const pool = new pool({
  user: process.env.USER_DB,
  host: process.env.HOST_DB,
  database: process.env>DatabaseError,
  password: process.env>DB_PORT
})

export default {query: (text, params) => pool.query(text, params)}