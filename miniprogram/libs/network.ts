import { LoginResp } from '../../proto/cloudcgi'

class Network {
    loginOn: Promise<LoginResp> | null = null
    login() {
        this.loginOn = this.loginOn || this.doLogin()
    }
    async doLogin() {
        return await wx.cloud.callFunction({
            name: 'login'
        })
    }
}

export default new Network()