import { schema } from 'normalizr';

export const playerSchema = new schema.Entity('players', {}, { idAttribute: '_id' });
export const teamSchema = new schema.Entity('teams', { players: [playerSchema] }, { idAttribute: '_id' });
export const matchSchema = new schema.Entity('matches', { teams: [teamSchema] }, { idAttribute: '_id' });

export const matchListSchema = [matchSchema];

