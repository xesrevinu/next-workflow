var Bbbb = require('../')

describe('index.js', ()=>{
  it('sayHello', ()=>{
    let test = new Bbbb();
    test.sayHello().should.have.length(14)
  })
  it('getNumber', (done)=>{
    let test = new Bbbb();
    let x = test.getNumber(100);
    x.then(function(val) {
      val.should.equal(100)
      done()
    })
  })
  it('async getNumber', (done)=>{
    let test = new Bbbb();
    (async function() {
      let x = await test.getNumber(200)
      x.should.equal(200)
      done()
    })()
  })
})
