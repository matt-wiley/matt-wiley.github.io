import experienceData from '../data/experience.json';

type nullableString = string|undefined|null;

export interface IEmployer {
  end_date: nullableString;
  location: nullableString;
  name: nullableString;
  roles: IRole[];
  start_date: nullableString;
}

export interface IRole {
  description: nullableString;
  end_date: nullableString;
  notes: INote[];
  start_date: nullableString;
  title: nullableString;
}

export interface INote {
  summary: nullableString;
  is_enabled: boolean;
}

export class ExperienceDataService {

  private static rawEmployerData: IEmployer[] = experienceData["employers"];

  static getExperienceData(): IEmployer[] {
    return this.rawEmployerData;
  }

}