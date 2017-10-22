import { ObjectId } from 'mongodb';
import setupApp from '../app';

const seed = async () => {
  const app = await setupApp();

  const matches = [
    {
      dateStarted: '2017-10-07T10:57:59.926Z',
      teamIds: [
        ObjectId('91D7D8311871D64ED6AF912E'),
        ObjectId('F296C2DFC3AB1DB20648C618')],
      plays: [
      ],
      handler: ObjectId('59e6bd6ea7cbe899397ca50d'),
    },
    {
      dateStarted: '2017-10-07T10:57:59.926Z',
      teamIds: [
        ObjectId('91D7D8311871D64ED6AF912E'),
        ObjectId('F296C2DFC3AB1DB20648C618')],
      plays: [
      ],
      handler: ObjectId('49e6bd6ea7cbe899397ca51d'),
    },
    {
      dateStarted: '2017-10-07T10:57:59.926Z',
      teamIds: [
        ObjectId('91D7D8311871D64ED6AF912E'),
        ObjectId('F296C2DFC3AB1DB20648C618')],
      plays: [
      ],
      handler: ObjectId('49e6bd6ea7cbe899397ca51e'),
    },
    {
      dateStarted: '2017-10-07T10:57:59.926Z',
      teamIds: [
        ObjectId('91D7D8311871D64ED6AF912E'),
        ObjectId('F296C2DFC3AB1DB20648C618')],
      plays: [
      ],
      handler: ObjectId('49e6bd6ea7cbe899397ca50e'),
    },

  ];

  const service = app.service('api/matches');
  await service.remove(null);
  return Promise.all(matches.map(match => service.create(match)));
};

export default seed;
