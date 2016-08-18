export class Ad {

  private _id:string;
  private _title:string;
  private _company:string;
  private _actionIcon:string;
  private _banner:string;
  private _logo:string;
  private _desc:string;

  constructor(id: string, title: string, company: string, actionIcon: string, banner: string, logo: string, desc: string) {
    this._id = id;
    this._title = title;
    this._company = company;
    this._actionIcon = actionIcon;
    this._banner = banner;
    this._logo = logo;
    this._desc = desc;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get company(): string {
    return this._company;
  }

  set company(value: string) {
    this._company = value;
  }

  get actionIcon(): string {
    return this._actionIcon;
  }

  set actionIcon(value: string) {
    this._actionIcon = value;
  }

  get banner(): string {
    return this._banner;
  }

  set banner(value: string) {
    this._banner = value;
  }

  get logo(): string {
    return this._logo;
  }

  set logo(value: string) {
    this._logo = value;
  }

  get desc(): string {
    return this._desc;
  }

  set desc(value: string) {
    this._desc = value;
  }
}
