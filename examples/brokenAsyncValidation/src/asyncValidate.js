const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const asyncValidate = (values/*, dispatch */) => {
  return sleep(1000)
    .then(() => {
      return new Promise((resolve, reject) => {
        if ([ 'john', 'paul', 'george', 'ringo' ].includes(values.username)) {
          reject({ username: 'That username is taken' })
        } else {
          resolve('You shall not pass!')
        }
      })
    })
}

export default asyncValidate

