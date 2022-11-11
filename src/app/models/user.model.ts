export class User {
  constructor(
    public email: string,
    public id: string,
    public token: string,
    private _tokenExpDate: Date
  ) {}
}
