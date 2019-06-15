export class BasicLayoutRoutes {
  public static readonly BASE = '';
  public static readonly TESTMODULE = 'tests';
  public static readonly TESTMODULEPATH = '/tests';
  public static readonly ACCOUNTMODULE = 'account';
  public static readonly ACCOUNTMODULEPATH = '/account';
  public static readonly HOME = 'home';
  public static readonly HOMEPATH = BasicLayoutRoutes.BASE + '/' + BasicLayoutRoutes.HOME;
}

export class TestRoutes {
  public static readonly LIST = 'list';
  public static readonly LISTPATH = BasicLayoutRoutes.TESTMODULEPATH + '/' + TestRoutes.LIST;
  public static readonly BIGFIVE = 'bigfive';
  public static readonly BIGFIVEPATH = BasicLayoutRoutes.TESTMODULEPATH + '/' + TestRoutes.BIGFIVE;
}

export class AccountRoutes {
  public static readonly LOGIN = 'login';
  public static readonly LOGINPATH = BasicLayoutRoutes.ACCOUNTMODULEPATH + '/' + AccountRoutes.LOGIN;
  public static readonly REGISTER = 'register';
  public static readonly REGISTERPATH = BasicLayoutRoutes.ACCOUNTMODULEPATH + '/' + AccountRoutes.REGISTER;
}
