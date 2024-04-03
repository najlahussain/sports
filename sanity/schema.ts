import { type SchemaTypeDefinition } from 'sanity'
import {home, abouthome, facilities, eventshome,
        about, eventspage, salon, contact, pictures} from './index'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [home, abouthome, facilities, eventshome, about, eventspage, salon, contact, pictures],
}
