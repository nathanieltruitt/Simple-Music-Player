export class User {
  constructor(
    public email: string,
    public id: string,
    public token: string,
    private _tokenExpDate: Date
  ) {}

  // token() {
  //   if (!this._tokenExpDate || new Date() > this._tokenExpDate) {
  //     return null;
  //   }
  //   return this._token;
  // }
}
