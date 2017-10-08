import { ObjectId } from 'mongodb';
import setupApp from '../app';

const seed = async () => {
  const app = await setupApp();

  const teams = [
    {
      _id: ObjectId('91D7D8311871D64ED6AF912E'),
      name: 'Harry and the Bad Boys Club',
      players: [
        ObjectId('E0A498A0C28C896A3F52FC7F'),
        ObjectId('3B86128FCC563135C3348DDC'),
        ObjectId('B7E9DFEC5407E9069DF62143'),
        ObjectId('84D2415FDEE7A8848FC0EB15'),
        ObjectId('4FACBB819734DC7906051D10'),
        ObjectId('EE375261B2970B286C8CE54D'),
        ObjectId('0C1BA7A75CAEE82902E32769'),
      ],
    },
    {
      _id: ObjectId('F296C2DFC3AB1DB20648C618'),
      name: 'The Dinner Club',
      players: [
        ObjectId('40DFEA25AC73B9F9934427B8'),
        ObjectId('6DF6E1368BF730E629D52ABD'),
        ObjectId('92BB4BCD2B37EEF5C26C9097'),
        ObjectId('67AEA7FC50F5A9C3D3C878DC'),
        ObjectId('3F79B2567D75119EC55210D0'),
        ObjectId('A83B45DB110FBF39183E7868'),
        ObjectId('95ED98ADD90302A837009001'),
      ],
    },
  ];

  const service = app.service('api/teams');
  service.remove(null);
  return Promise.all(teams.map(team => service.create(team)));
};

export default seed;
