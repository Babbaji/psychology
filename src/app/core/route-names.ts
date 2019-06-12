export class BasicLayoutRoutes {
  public static get BASE() {
    return '';
  }

  public static get TESTMODULE() {
    return 'tests';
  }

  public static get TESTMODULEPATH() {
    return '/tests';
  }

  public static get ACCOUNTMODULE() {
    return 'account';
  }

  public static get ACCOUNTMODULEPATH() {
    return '/account';
  }

  public static get HOME() {
    return 'home';
  }

  public static get HOMEPATH() {
    return BasicLayoutRoutes.BASE + '/' + this.HOME;
  }
}

export class TestRoutes {
  public static get LIST() {
    return 'list';
  }

  public static get LISTPATH() {
    return BasicLayoutRoutes.TESTMODULEPATH + '/' + this.LIST;
  }

  public static get BIGFIVE() {
    return 'bigfive';
  }

  public static get BIGFIVEPATH() {
    return BasicLayoutRoutes.TESTMODULEPATH + '/' + this.BIGFIVE;
  }
}

export class AccountRoutes {
  public static get LOGIN() {
    return 'login';
  }

  public static get LOGINPATH() {
    return BasicLayoutRoutes.ACCOUNTMODULEPATH + '/' + this.LOGIN;
  }
}
