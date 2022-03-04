import { createLogger, format, transports } from 'winston';

export class Logger {
  static silent: boolean = process.env.NODE_ENV === 'test';

  private logger: any;

  private constructor(label: string) {
    this.logger = createLogger({
      format: format.combine(
        format.label({ label }),
        format.timestamp(),
        this.myFormat(),
      ),
      transports: [new transports.Console()],
      silent: Logger.silent,
    });
  }

  static getLogger(label: string = 'DEFAULT') {
    return new Logger(label);
  }

  public info(message: string, metadata: any = {}) {
    this.logger.info(message, metadata);
  }

  public error(message: string, metadata: any = {}) {
    this.logger.error(message, metadata);
  }

  private myFormat() {
    return format.printf(({
      timestamp: now,
      label: title,
      level,
      message,
      ...metadata
    }) => `${now} [${title}] ${level}: ${message}
          ${JSON.stringify(metadata)}`);
  }
}
