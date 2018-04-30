export class HeaderLink {
  public url: string;
  public text: string;
  public target?: string;
}

export class HeaderLinkDropdown {
  public url: string;
  public text: string;
  public target?: string;
  public links: HeaderLink[];
}

export class HeaderLinkSet {
  public isRight: boolean;
  public links: (HeaderLink|HeaderLinkDropdown)[];
}
