import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import constants from '@/core/constants'

// Définir un service à l'aide d'une URL de base et des points de terminaison attendus

const api = createApi({
  reducerPath: 'registerApi',
  baseQuery: fetchBaseQuery({ baseUrl: constants.api.baseURL }),
  endpoints: ()=>   ({})
})


export default api