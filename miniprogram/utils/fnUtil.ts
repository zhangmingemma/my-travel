export const safeGet = (attrList: string[]) => {
    return (obj: any) => {
        attrList.map((attr: string) => {
            obj = (obj || {})[attr]
        })
        return obj
    }
}