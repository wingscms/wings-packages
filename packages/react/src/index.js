export { default as createCard } from './createCard';
export { slugify } from './lib/utils';

export { default as WingsProvider, useWings, withWings } from './ctx/Wings';
export { IntlProvider, useIntl, withIntl } from './ctx/Intl';

export const getNodeMetaTags = node => {
  const { all, facebook, twitter } = node.platforms;

  return {
    title: all.title,
    meta: [
      { name: 'description', content: all.description },

      { property: 'og:title', content: facebook.title },
      { property: 'og:description', content: facebook.description },
      { property: 'og:image', content: facebook.imageUrl },
      { property: 'og:image:secure_url', content: facebook.imageUrl },
      { property: 'og:type', content: 'article' },

      { name: 'twitter:title', content: twitter.title },
      { name: 'twitter:description', content: twitter.description },
      { name: 'twitter:image', content: twitter.imageUrl },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  };
};

export { default as Content } from './components/Content';
export { default as Campaign } from './components/Campaign/Campaign';
export { default as CampaignConfirmed } from './components/CampaignConfirmed';
export { default as Article } from './components/Article';
export { default as Page } from './components/Page';

export {
  allCards,
  CampaignCard,
  CampaignCardView,
  ChapterCard,
  CollectionCard,
  CTACard,
  DataCard,
  EmbedCard,
  ImageCard,
  InsightCard,
  NodesCard,
  QACard,
  QuoteCard,
  TestimonialCard,
  TextCard,
} from './components/cards';
