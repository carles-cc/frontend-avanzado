import { InMemoryDbService } from 'angular-in-memory-web-api';
import { UserDB } from './users';
import { OfferDB } from './offers';
import { CountryDB } from './countries';

export class InMemoryDataService implements InMemoryDbService {
  private userDB = new UserDB();
  private offerDB = new OfferDB();

  createDb() {
    return {
      users: this.userDB.users,
      offers: this.offerDB.offers,
      // 'countries': CountryDB.prototype.countries,
      /* Ejemplo:
      'contacts': ChatDB.contacts,
      'chat-collections': ChatDB.chatCollection,
      'chat-user': ChatDB.user */
    };
  }
}
