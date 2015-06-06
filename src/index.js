class Bbbb {
  constructor() {
    let smile = '(＾0＾）'
    this.hello = `Hello ${smile}`
  }
  sayHello() {
    let hello = this.hello += ' 哈哈'
    return () => {
      return hello
    }()
  }
  async getNumber(x) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Number(x))
      }, 200)
    })
  }
}
export default Bbbb
