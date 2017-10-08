import { ObjectId } from 'mongodb';
import setupApp from '../app';

const seed = async () => {
  const app = await setupApp();

  const players = [
    {
      _id: ObjectId('E0A498A0C28C896A3F52FC7F'),
      name: 'Harry Pota',
      team: ObjectId('91D7D8311871D64ED6AF912E'),
      type: 'SEEKER',
    },
    {
      _id: ObjectId('3B86128FCC563135C3348DDC'),
      name: 'Petur Aston',
      team: ObjectId('91D7D8311871D64ED6AF912E'),
      type: 'CHASER',
    },
    {
      _id: ObjectId('B7E9DFEC5407E9069DF62143'),
      name: 'Maynard Anwer',
      team: ObjectId('91D7D8311871D64ED6AF912E'),
      type: 'CHASER',
    },
    {
      _id: ObjectId('84D2415FDEE7A8848FC0EB15'),
      name: 'Kai Yisrael',
      team: ObjectId('91D7D8311871D64ED6AF912E'),
      type: 'CHASER',
    },
    {
      _id: ObjectId('4FACBB819734DC7906051D10'),
      name: 'Clovis Pavlos',
      team: ObjectId('91D7D8311871D64ED6AF912E'),
      type: 'BEATER',
    },
    {
      _id: ObjectId('EE375261B2970B286C8CE54D'),
      name: 'Jayesh Kim',
      team: ObjectId('91D7D8311871D64ED6AF912E'),
      type: 'BEATER',
    },
    {
      _id: ObjectId('0C1BA7A75CAEE82902E32769'),
      name: 'Urban Akshay',
      team: ObjectId('91D7D8311871D64ED6AF912E'),
      type: 'KEEPER',
    },
    {
      _id: ObjectId('40DFEA25AC73B9F9934427B8'),
      name: 'Harish Cowal',
      team: ObjectId('F296C2DFC3AB1DB20648C618'),
      type: 'SEEKER',
    },
    {
      _id: ObjectId('6DF6E1368BF730E629D52ABD'),
      name: 'Durante Bassem',
      team: ObjectId('F296C2DFC3AB1DB20648C618'),
      type: 'CHASER',
    },
    {
      _id: ObjectId('92BB4BCD2B37EEF5C26C9097'),
      name: 'Elwyn Golshan',
      team: ObjectId('F296C2DFC3AB1DB20648C618'),
      type: 'CHASER',
    },
    {
      _id: ObjectId('67AEA7FC50F5A9C3D3C878DC'),
      name: 'Naevius Arnþórr',
      team: ObjectId('F296C2DFC3AB1DB20648C618'),
      type: 'CHASER',
    },
    {
      _id: ObjectId('3F79B2567D75119EC55210D0'),
      name: 'Aslanbek Rochus',
      team: ObjectId('F296C2DFC3AB1DB20648C618'),
      type: 'BEATER',
    },
    {
      _id: ObjectId('A83B45DB110FBF39183E7868'),
      name: 'Grozdan Péter',
      team: ObjectId('F296C2DFC3AB1DB20648C618'),
      type: 'BEATER',
    },
    {
      _id: ObjectId('95ED98ADD90302A837009001'),
      name: 'Ujarak Theobald',
      team: ObjectId('F296C2DFC3AB1DB20648C618'),
      type: 'KEEPER',
    },


  ];

  const service = app.service('api/players');
  await service.remove(null);
  return Promise.all(players.map(player => service.create(player)));
};

export default seed;

