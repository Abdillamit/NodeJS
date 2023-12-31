const Events = require('events');

class Logger extends Events {
  log(a, b) {
    this.emit('Calculete', a + b)
  }
}

const logger = new Logger();

logger.on('Calculete', data => {
  console.log(data);
})

logger.log(1, 1)
