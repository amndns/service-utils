import { Container } from 'typedi';
import WinstonLogger from './logger.class';

/**
 * The main Logger decorator used for injecting the `WinstonLogger` object
 * into class constructors.
 */
const Logger = (scope: string): ParameterDecorator => (
  object: any,
  propertyKey,
  index
): any => {
  const logger = new WinstonLogger(scope);
  const propertyName = propertyKey ? propertyKey.toString() : '';
  Container.registerHandler({
    object,
    propertyName,
    index,
    value: () => logger,
  });
};

export default Logger;
