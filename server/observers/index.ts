import createReactor from '../lib/reactor';
import observerA from './observerA';
import observerB from './observerB';

const {dispatch, register} = createReactor();

register(observerA, observerB);

export default dispatch;
