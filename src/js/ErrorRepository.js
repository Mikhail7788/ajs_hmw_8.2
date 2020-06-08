export default class ErrorRepository {
  constructor() {
    this.errorsArray = new Map();
  }

  translate(code) {
    if (this.errorsArray.has(code)) {
      return this.errorsArray.get(code);
    }
    return 'Unknown error';
  }
}

const errorsDataBase = new ErrorRepository();

//errorsDataBase.errorsArray.set(404, 'страница не найдена');