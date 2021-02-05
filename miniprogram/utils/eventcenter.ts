class Observer {
    obj:any = null
    func:any = null
    constructor (obj:any, func:any) {
        this.obj = obj
        this.func = func
    }
}

module.exports = {
    setup (options: {Event: object}) {
        this.Event = options.Event
    },
    _register: {},

    register (event:string, obj:any, func?:any) {
        if (!event) {
            return
        } 
        if (!(event in this._register)) {
            this._register[event] = []
        }
        this._register[event].push(new Observer(obj, (func || event)))
    },

    unregister (event:string, obj:any) {
        if (!event || !(event in this._register)) {
            return
        } 
        this.removeObserver(event, obj)
    },

    unregisterAllEvents (obj:any) {
        if (!obj) {
            return 
        }
        for (let event in this._register) {
            this.removeObserver(event, obj)
        }
    },

    emit (event:string, data:any) {
        console.info('eventcenter emit: ', event, data)
        if (!event || !(event in this._register)) {
            return 
        }
        for (let observer of this._register[event]) {
            const obj = observer.obj
            const func = observer.func
            try {
                if (typeof func === 'function') {
                    func(data)
                } else {
                    obj[func] && obj[func](data)
                }
            } catch (e) {
                setTimeout(() => {
                    throw e
                })
            }
        }
    },

    removeObserver (event:string, obj:any) {
        const toRemove = this._register[event].map((observer: any) => observer.obj === obj)
        for (let observer of toRemove) {
            this._register[event].splice(this._register[event].indexOf(observer),1)
        }
    }
} 
