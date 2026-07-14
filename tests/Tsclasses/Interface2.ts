/*interface API {
  get(): void;
  post(): void;
}


class UsAPI implements API {
  baseUrl:string;

  constructor(url: string) {
    this.baseUrl = url;
  }

  get() {
    console.log("GET from " + this.baseUrl);
  }

  post() {
    console.log("POST to " + this.baseUrl);
  }
}

const obj1 = new UserAPI("http:api.com");
obj1.get();
obj1.post();*/

interface API {
  get(): void;
  post(): void;
}

class UserAPI implements API {
  baseUrl: string;

  constructor(url: string) {
    this.baseUrl = url;
  }

  get() {
    console.log("GET from " + this.baseUrl);
  }

  post() {
    console.log("POST to " + this.baseUrl);
  }
}

// ✅ Create object
const obj1 = new UserAPI("http://api.com");

// ✅ Call methods
obj1.get();
obj1.post();
