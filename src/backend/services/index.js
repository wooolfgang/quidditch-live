import userService from './user';
import playerService from './player';
import teamService from './team';
import matchService from './match';
import authentication from './authentication';

function services(db) {
  return function execute() {
    const app = this;

    app
      .configure(userService(db))
      .configure(authentication())
      .configure(playerService(db))
      .configure(matchService(db))
      .configure(teamService(db));
  };
}

export default services;
