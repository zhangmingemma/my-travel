import { promisifyAll, Wxp } from 'miniprogram-api-promise'

const wxp = {} as Wxp
// promisify all wx's api
promisifyAll(wx, wxp)

export default wxp