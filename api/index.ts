import { createServer, request } from "http";
import { createYoga } from "graphql-yoga";
import { schema }  from './schema'
import { useResponseCache } from "@envelop/response-cache";
import { context } from "./context";
import { useCookies } from '@whatwg-node/server-plugin-cookies'
import express from 'express'

const app = express()

function main() {
  const yoga = createYoga({ schema, context({request, res}) {
    return {
      ...context,
      request
    }
  }})
  app.use('/graphql', yoga)
  app.listen(4000, () => {
    console.info('Server is running on http://localhost:4000/graphql')
  })
}
 
main()