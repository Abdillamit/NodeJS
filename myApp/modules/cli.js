const logger = () => {
  const resp = {}
  for (let i = 2; i < process.argv.length; i++) {
    const argv = process.argv[i].split('=');
    resp[argv[0]] = argv[1] ? argv[1] : true
  }

  return resp
}

console.log(logger());