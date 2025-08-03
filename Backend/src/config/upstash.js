import {Ratelimit} from "@upstash/ratelimit"
import {Redis} from "@upstash/redis"

import dotenv from "dotenv"

dotenv.config();

// Create a ratelimiter that allowed 10 req per 20 sec
const ratelimit = new Ratelimit({
    radis: Redis.fromEnv(),
    limiter:Ratelimit.slidingWindow(10,"20 s")
})

export default ratelimit;