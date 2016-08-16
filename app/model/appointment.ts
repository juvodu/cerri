
export class Appointment {

   private _id:string;
   private _date:string;
   private _time:string;
   private _doctor:string;
   private _docAvatarUri:string;
   private _doctype:string;
   private _position:any;
   private _posUri:string;
   private _address:string;
   private _phone:string;
   private _desc:string;
   private _forecast:string;
   private _queue:number;

  // Constructor
  constructor(_id:string, _date: string, _doctor:string, _docAvatarUri:string, _doctype:string, _position:any, _posUri:string,_address:string, _phone:string, _desc:string, _forcast:string, _queue:number) {
    this._id = _id;
    this._date = _date;
    this._time = _date.split(",")[0];
    this._doctor = _doctor;
    this._docAvatarUri = _docAvatarUri;
    this._doctype = _doctype;
    this._position = _position;
    this._posUri = _posUri;
    this._address = _address;
    this._phone = _phone;
    this._desc = _desc;
    this._forecast = _forcast;
    this._queue = _queue;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get date(): string {
    return this._date;
  }

  set date(value: string) {
    this._date = value;
  }

  get doctor(): string {
    return this._doctor;
  }

  set doctor(value: string) {
    this._doctor = value;
  }

  get doctype(): string {
    return this._doctype;
  }

  set doctype(value: string) {
    this._doctype = value;
  }

  get position(): any {
    return this._position;
  }

  set position(value: any) {
    this._position = value;
  }

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  get phone(): string {
    return this._phone;
  }

  set phone(value: string) {
    this._phone = value;
  }

  get desc(): string {
    return this._desc;
  }

  set desc(value: string) {
    this._desc = value;
  }

  get forecast(): string {
    return this._forecast;
  }

  set forecast(value: string) {
    this._forecast = value;
  }

  get docAvatarUri(): string {
    return this._docAvatarUri;
  }

  set docAvatarUri(value: string) {
    this._docAvatarUri = value;
  }

  get posUri(): string {
    return this._posUri;
  }

  set posUri(value: string) {
    this._posUri = value;
  }

  get queue(): number {
    return this._queue;
  }

  set queue(value: number) {
    this._queue = value;
  }

  get time(): string {
    return this._time;
  }

  set time(value: string) {
    this._time = value;
  }
}
