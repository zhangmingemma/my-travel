const promiseWrap = async(promise) => {
  try {
      const res = await promise
      return {error: null, res: res}
  } catch(e) {
      console.error(e)
      return {error: e, res: null}
  }
}

exports.Utils = {
  promiseWrap
}