const { exec } = require('child_process')

exec('npm run build:es', error => {
  console.log(error || 'Build es success!')
})

exec('npm run build:cjs', error => {
  console.log(error || 'Build cjs success!')
})

exec('npm run build:umd', error => {
  console.log(error || 'Build umd success!')
})

// exec('npm run build:demo', error => {
//   console.log(error || 'Build demo success!')
// })
