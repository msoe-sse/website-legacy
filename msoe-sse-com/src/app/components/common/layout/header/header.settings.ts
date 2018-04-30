import { HeaderLink, HeaderLinkDropdown, HeaderLinkSet } from '../../../../models/common/layout/header/header-links.model';

export class HeaderSettings {

  private static headerLinksLeft: (HeaderLink|HeaderLinkDropdown)[] = [
    {
      url: '/calendar',
      text: 'Calendar'
      // links: [
      //   { url: '#', text: 'Hackathon' },
      //   { url: '#', text: 'Source Trek' },
      //   { url: '#', text: 'Open Source Projects' },
      //   { url: '#', text: 'Mock Whiteboard Interview' }
      // ]
    },
    // { url: '', text: 'Announcements' },
    { url: 'https://msoe-sse.slack.com/', text: 'Slack', target: '_blank' }// ,
    // { url: '', text: 'Discussions' }
  ];

  private static headerLinksRight: (HeaderLink|HeaderLinkDropdown)[] = [
    /*{
      url: '',
      text: 'Jobs',
      links: [
        { url: '', text: 'All Jobs' },
        { url: '', text: 'My Postings' },
        { url: '', text: 'Post a Job' }
      ]
    },
    {
      url: '',
      text: 'Members',
      links: [
        { url: '', text: 'Site-Wide Activity' },
        { url: '', text: 'Groups' }
      ]
    },
    {
      url: '',
      text: 'About Us',
      links: [
        { url: '', text: 'Constitution' }
      ]
    }*/
  ];

  public static headerLinks: HeaderLinkSet[] = [
    {
      isRight: false,
      links: HeaderSettings.headerLinksLeft
    },
    {
      isRight: true,
      links: HeaderSettings.headerLinksRight
    }
  ];

}
