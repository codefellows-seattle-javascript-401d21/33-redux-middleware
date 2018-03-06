import superagent from 'superagent';
import { logError } from '../lib/utils';

export const champGet = champs => ({
  type: 'CHAMP_GET',
  payload: champs,
});

export const champCreate = champ => ({
  type: 'CHAMP_CREATE',
  payload: champ,
});

export const champUpdate = champ => ({
  type: 'CHAMP_UPDATE',
  payload: champ,
});

export const champDelete = champ => ({
  type: 'CHAMP_DELETE',
  payload: champ,
});


