import {Test} from 'tslint';

export class BasicLayoutRoutes {
  private static readonly BASE = '';
  private static readonly HOME = 'home';
  private static readonly TESTMODULE = 'tests';
  private static readonly ACCOUNTMODULE = 'account';

  public static readonly path = {
    home: BasicLayoutRoutes.HOME,
    base: BasicLayoutRoutes.BASE,
    testModule: BasicLayoutRoutes.TESTMODULE,
    accountModule: BasicLayoutRoutes.ACCOUNTMODULE,
  };

  public static fullPath(key: 'home' | 'base' | 'testModule' | 'accountModule') {
    return BasicLayoutRoutes.path.base + '/' + this.path[key];
  }
}

export type TestType = 'list' | 'bigFive';
export class TestRoutes {
  private static readonly LIST = 'list';
  private static readonly BIGFIVE = 'bigfive';

  public static path = {
    list: TestRoutes.LIST,
    bigFive: TestRoutes.BIGFIVE
  };

  public static fullPath(key: TestType) {
    return BasicLayoutRoutes.fullPath('testModule') + '/' + this.path[key];
  }
}


export class AccountRoutes {
  private static readonly LOGIN = 'login';
  private static readonly REGISTER = 'register';

  public static path = {
    login: AccountRoutes.LOGIN,
    register: AccountRoutes.REGISTER
  };

  public static fullPath(key: string) {
    return BasicLayoutRoutes.path.accountModule + this.path[key];
  }
}

