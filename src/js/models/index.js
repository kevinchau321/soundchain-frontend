import { ORM, createReducer } from 'redux-orm';

import Session from './session';
import Network from './network';
import Keystore from './keystore';
import KeystoreType from './keystoreType';
import Address from './address';
import Token from './token';

export const orm = new ORM();

orm.register(
  Session,
  Network,
  KeystoreType,
  Keystore,
  Address,
  Token,
);

export const reducer = createReducer(orm);
