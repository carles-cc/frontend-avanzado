import {AppSettings} from '../app.settings';

export class User {
  name: string;
  surname: string;
  email: string;
  birthDate: string;
  phone: string;
  otherPhone: string;
  documentType: string;
  documentNumber: string;
  address: string;
  province: string;
  city: string;
  about: string;
  roles: [];
  avatar_hash: string;
  parents: [];
  childrens: [];
  hasFailed: boolean;
  studies: {
    action: string,
    entities: []
  };
  experiences: {
    action: string,
    entities: []
  };
  languages: {
    action: string,
    entities: []
  };

  other: {
    driverLicenses: string,
    about: string,
    competences: string,
  };

  offers: {
    entities: []
  };
}
