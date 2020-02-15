const describe = (desc, fn) => {
  console.log(desc)
  fn()
}

const it = (msg, fn) => describe('  ' + msg, fn)

const matchers = (exp) => ({
  toBe: (assertion) => {
    if (exp === assertion) {
      console.log('pass')
      return true
    } else {
      console.log('fail') 
      return false
    }
  }
})

const expect = (exp) => matchers(exp)

function add(a, b) {
  return a + b 
}

function subtract(a, b) {
    return a - b 
  }

  function multiply(a, b) {
    return a * b 
  }

  function divide(a, b) {
    return a / b 
  }



module.exports = {
  describe,
  expect,
  it,
  matchers,
  add,
  subtract,
  multiply,
  divide
}