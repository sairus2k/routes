export default {
  baseUrl: 'https://api-maps.yandex.ru/2.1/',
  params: {
    load: ['package.full'],
    lang: 'ru_RU',
    onLoad: 'ymapsReady'
  },
  mapBehaviors: ['default']
};
