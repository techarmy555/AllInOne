const appRoot = require('app-root-path');
const { createLogger, format, transports } = require('winston');

var configuration = {
    file: {
      level: 'info',
      filename: `${appRoot}/logs/app.log`,
      handleExceptions: true,
      json: true,
      maxsize: 15728640, // 15MB
      maxFiles: 5,
      colorize: false,
    }
  };

var logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.printf(info => `${info.level}------> ${info.timestamp}  ${info.message}`)
       
      ),
    transports: [new (transports.File)(configuration.file) ],
    exitOnError: false, 
  });


  module.exports = logger;



