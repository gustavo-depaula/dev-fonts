import { orderBy } from 'lodash';

const googleFonts = [
  { name: 'Fira Code', ligatures: true, sort: 1 },
  { name: 'Roboto Mono', sort: 3 },
  { name: 'Inconsolata', sort: 3 },
  { name: 'Source Code Pro', sort: 3 },
  { name: 'Anonymous Pro', sort: 3 },
  { name: 'Space Mono', sort: 3 },
  { name: 'Oxygen Mono', sort: 3 },
  { name: 'B612 Mono' },
  { name: 'PT Mono' },
  { name: 'Nanum Gothic Coding' },
  { name: 'Ubuntu Mono' },
  { name: 'IBM Plex Mono' },
  { name: 'Share Tech Mono' },
  // { name: 'VT323' },
  { name: 'Cousine' },
  // { name: 'Fira Mono' },
  { name: 'Overpass Mono' },
  { name: 'Courier Prime' },
  // { name: 'Cutive Mono' },
  { name: 'Nova Mono' },
];

interface Font {
  displayName: string;
  familyName: string;
  sort?: number;
  ligatures?: boolean;
  webPage: string;
  srcLink: string;
  price?: string;
  dateAdded?: string;
}

const rawFonts: Font[] = [
  {
    displayName: 'Cascadia Code',
    familyName: 'Cascadia',
    sort: 1,
    ligatures: true,
    webPage: 'https://github.com/microsoft/cascadia-code',
    srcLink: '/fonts/cascadia/font.css',
  },
  {
    displayName: 'Comic Mono',
    familyName: 'Comic Mono',
    sort: 1,
    ligatures: false,
    webPage: 'https://github.com/dtinth/comic-mono-font',
    srcLink: 'https://cdn.jsdelivr.net/npm/comic-mono@0.0.1/index.min.css',
  },
  {
    displayName: 'Dank Mono',
    familyName: 'dm',
    sort: 2,
    ligatures: true,
    webPage: 'https://dank.sh',
    srcLink: '/fonts/dank-mono/font.css',
    price: '£40',
    dateAdded: '2020-04-21T17:07:20.226Z',
  },
  {
    displayName: 'Input Mono',
    familyName: 'Input Mono',
    sort: 3,
    ligatures: false,
    webPage: 'https://input.fontbureau.com/',
    srcLink: '/fonts/input-mono/font.css',
  },
  {
    displayName: 'JetBrains Mono',
    familyName: 'JetBrains Mono',
    sort: 2,
    ligatures: true,
    webPage: 'https://www.jetbrains.com/lp/mono/',
    srcLink: '/fonts/jetbrains-mono/font.css',
  },
  {
    displayName: 'Julia Mono',
    familyName: 'Julia Mono',
    sort: 3,
    ligatures: true,
    webPage: 'https://github.com/cormullion/juliamono',
    srcLink: '/fonts/julia-mono/font.css',
  },
  {
    displayName: 'Monoid',
    familyName: 'Monoid Regular',
    sort: 2,
    ligatures: true,
    webPage: 'http://larsenwork.com/monoid/',
    srcLink: '/fonts/monoid/font.css',
  },
  {
    displayName: 'Lilex',
    familyName: 'Lilex',
    sort: 2,
    ligatures: true,
    webPage: 'https://github.com/mishamyrt/Lilex',
    srcLink: '/fonts/lilex/font.css',
  },
  {
    displayName: 'Victor Mono',
    familyName: 'Victor Mono',
    sort: 2,
    ligatures: true,
    webPage: 'https://rubjo.github.io/victor-mono/',
    srcLink:
      'https://cdn.jsdelivr.net/npm/victormono@latest/dist/index.min.css',
  },
  {
    displayName: 'Consolas Ligaturized',
    familyName: 'Consolas ligaturized',
    sort: 2,
    ligatures: true,
    webPage: 'https://github.com/somq/consolas-ligaturized/',
    srcLink: '/fonts/consolas-ligaturized/font.css',
  },
  {
    displayName: 'Iosevka',
    familyName: 'Iosevka Web',
    sort: 2,
    ligatures: true,
    webPage: 'https://typeof.net/Iosevka/',
    srcLink: '/fonts/iosevka/font.css',
  },
  {
    displayName: 'Iosevka Slab',
    familyName: 'Iosevka Slab Web',
    sort: 2,
    ligatures: true,
    webPage: 'https://typeof.net/Iosevka/',
    srcLink: '/fonts/iosevka-slab/font.css',
  },
  {
    displayName: 'Hasklig',
    familyName: 'Hasklig',
    sort: 2,
    ligatures: true,
    webPage: 'https://github.com/i-tu/Hasklig',
    srcLink: '/fonts/hasklig/font.css',
  },
  {
    displayName: 'Fantasque Sans Mono',
    familyName: 'Fantasque Sans Mono',
    sort: 2,
    ligatures: true,
    webPage: 'https://github.com/belluzj/fantasque-sans',
    srcLink: '/fonts/fantasque-sans-mono/font.css',
  },
  {
    displayName: 'Hack',
    familyName: 'Hack',
    sort: 3,
    webPage: 'https://sourcefoundry.org/hack',
    srcLink: 'https://cdn.jsdelivr.net/npm/hack-font@3.3.0/build/web/hack.css',
  },
  {
    displayName: 'Noto Mono',
    familyName: 'TypoPRO Noto Mono',
    sort: 3,
    webPage: 'https://www.google.com/get/noto/',
    srcLink:
      'https://cdn.jsdelivr.net/npm/@typopro/web-noto@3.7.5/TypoPRO-Noto.css',
  },
  {
    displayName: 'Conta',
    familyName: 'Conta',
    sort: 3,
    webPage: 'https://fontesk.com/conta-typeface/',
    srcLink: '/fonts/conta/font.css',
  },
  {
    displayName: 'Classic Console',
    familyName: 'Classic Console',
    sort: 3,
    ligatures: false,
    webPage: 'https://webdraft.eu/fonts/classic-console/',
    srcLink: '/fonts/classic-console/font.css',
  },
  ...googleFonts.map((font) => {
    const { name, ligatures } = font;
    const urlPart = name.replace(/\s/g, '+');
    return {
      ...font,
      displayName: name,
      familyName: name,
      webPage: `https://fonts.google.com/specimen/${urlPart}`,
      srcLink: `https://fonts.googleapis.com/css?family=${urlPart}&display=block`,
      ligatures,
    };
  }),
];

export const fonts = orderBy(rawFonts, 'sort');
