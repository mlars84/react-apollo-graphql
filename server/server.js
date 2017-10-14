import express from 'express'
import { 
  graphqlExpress,
  graphiqlExpress,
} from 'graphql-server-express'
import bodyParser from 'body-parser'
import { schema } from './src/schema'

const PORT = 3005

const server = express()

server.use('/graphql', bodyParser.json(), graphqlExpress({
  schema
}))

server.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}))

server.listen(PORT, () => console.log(`Server up on ${PORT}!`))
