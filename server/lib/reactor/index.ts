const EventEmitter = require('events').EventEmitter;
const reactor = new EventEmitter();
const REACTOR_EVENT = '@@reactor';

function validateAction(action : any) {
  if (!action || typeof action !== 'object' || Array.isArray(action)) {
    throw new Error('Action must be an object');
  }
  if (typeof action.type === 'undefined') {
    throw new Error('Action must have a type');
  }
}

export default function createReactor() {
  reactor.on(REACTOR_EVENT, action => console.log('Action:', action, 'emitted'));
  return {
    dispatch: (action) => {
      validateAction(action);
      reactor.emit(REACTOR_EVENT, action);
    },
    register: (...observers) => {
      if (observers.length === 0) {
        return;
      }

      observers.forEach(observer => reactor.on(REACTOR_EVENT, observer));
    }
  };
}
