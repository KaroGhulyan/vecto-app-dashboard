import axios, { AxiosResponse } from 'axios'
import { HTTPRequestDataTypes, HTTPRequestParamsTypes, HttpRequestProps } from './interfaces'
import { httpHeader } from './httpHeader'

export default async ({
  data,
  params,
  url,
  method,
  withoutToken,
  cancelToken,
  headerType,
  responseType,
}: HttpRequestProps<HTTPRequestDataTypes, HTTPRequestParamsTypes>): Promise<AxiosResponse> => {
  const config = {
    url,
    data: data || null,
    params: params || null,
    method,
    headers: { ...httpHeader({ withoutToken, headerType }) },
    cancelToken: cancelToken || undefined,
    responseType,
  }

  try {
    return await axios(config)
  } catch (error) {
    return Promise.reject(error)
  }
}
