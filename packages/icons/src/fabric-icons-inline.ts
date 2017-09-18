// tslint:disable:max-line-length

import { registerIcons } from '@uifabric/styling/lib/index';

export function initializeIcons(baseUrl: string = ''): void {
  registerIcons({
    style: {
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      fontStyle: 'normal',
      fontWeight: 'normal',
      speak: 'none'
    },
    fontFace: {
      fontFamily: `"FabricMDL2Icons"`,
      src: `url('data:application/octet-stream;base64,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') format('woff')`,
    },
icons: {
        'GlobalNavButton': '\uE700',
          'ChevronDown': '\uE70D',
          'ChevronUp': '\uE70E',
          'Edit': '\uE70F',
          'Add': '\uE710',
          'Cancel': '\uE711',
          'More': '\uE712',
          'Settings': '\uE713',
          'Mail': '\uE715',
          'Filter': '\uE71C',
          'Search': '\uE721',
          'Share': '\uE72D',
          'FavoriteStar': '\uE734',
          'FavoriteStarFill': '\uE735',
          'CheckMark': '\uE73E',
          'Delete': '\uE74D',
          'ChevronLeft': '\uE76B',
          'ChevronRight': '\uE76C',
          'Calendar': '\uE787',
          'Undo': '\uE7A7',
          'Flag': '\uE7C1',
          'View': '\uE890',
          'Clear': '\uE894',
          'Download': '\uE896',
          'Upload': '\uE898',
          'Sort': '\uE8CB',
          'Tag': '\uE8EC',
          'AddFriend': '\uE8FA',
          'Info': '\uE946',
          'SortLines': '\uE9D0',
          'List': '\uEA37',
          'CircleRing': '\uEA3A',
          'Tiles': '\uECA5',
          'Embed': '\uECCE',
          'Ascending': '\uEDC0',
          'Descending': '\uEDC1',
          'SortUp': '\uEE68',
          'SortDown': '\uEE69',
          'LargeGrid': '\uEECB',
          'SkypeCheck': '\uEF80',
          'SkypeClock': '\uEF81',
          'SkypeMinus': '\uEF82',
          'StatusCircleCheckmark': '\uF13E',
          'MoreVertical': '\uF2BC'
    }
  });
}