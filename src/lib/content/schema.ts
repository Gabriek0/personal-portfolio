import { z } from 'zod';
import { locales } from '@/src/lib/i18n';

const localeSchema = z.enum(locales);

const mediaSchema = z.object({
  id: z.number(),
  name: z.string(),
  alt: z.string().nullable(),
  caption: z.string().nullable(),
  width: z.number(),
  height: z.number(),
  src: z.string().min(1),
});

const linkSchema = z.object({
  id: z.number(),
  title: z.string(),
  url: z.string().nullable(),
});

const buttonSchema = z.object({
  id: z.number(),
  text: z.string(),
  url: z.string().nullable(),
  value: z.string().nullable(),
});

const sectionHeaderSchema = z.object({
  id: z.number(),
  badge: z.string(),
  title: z.string(),
  description: z.string(),
  link: linkSchema.nullable(),
});

const experienceBaseSchema = z.object({
  id: z.number(),
  title: z.string(),
  from: z.string(),
  location: z.string(),
  to: z.string().nullable(),
  organization: z.string(),
  description: z.string(),
  image: mediaSchema,
});

const careerExperienceSchema = experienceBaseSchema.extend({
  type: z.literal('career'),
  isCurrentWork: z.preprocess((value) => value ?? false, z.boolean()),
  currentWorkLabel: z.string().nullable(),
});

const educationExperienceSchema = experienceBaseSchema.extend({
  type: z.literal('education'),
});

export const portfolioContentSchema = z.object({
  locale: localeSchema,
  header: z.object({
    id: z.number(),
    active: z.boolean(),
    navigation: z.array(
      z.object({
        id: z.number(),
        title: z.string(),
        url: z.string(),
      }),
    ),
    languageSelector: z.array(
      z.object({
        id: z.number(),
        name: z.string(),
        code: localeSchema,
        flag: mediaSchema,
      }),
    ),
  }),
  hero: z.object({
    id: z.number(),
    active: z.boolean(),
    greeting: z.string(),
    name: z.string(),
    role: z.string(),
    description: z.string(),
    roleIcon: mediaSchema.nullable(),
    animation: mediaSchema,
    socialLinks: z.array(linkSchema),
    primaryAction: buttonSchema,
    secondaryAction: buttonSchema,
  }),
  about: z.object({
    id: z.number(),
    active: z.boolean(),
    image: mediaSchema,
    action: linkSchema,
    header: sectionHeaderSchema,
  }),
  projects: z.object({
    id: z.number(),
    active: z.boolean(),
    items: z.array(
      z.object({
        id: z.number(),
        title: z.string(),
        description: z.string(),
        url: z.string(),
        image: mediaSchema,
      }),
    ),
    header: sectionHeaderSchema,
  }),
  blog: z.object({
    active: z.boolean(),
  }),
  experience: z.object({
    id: z.number(),
    active: z.boolean(),
    header: sectionHeaderSchema,
    switchers: z.array(buttonSchema),
    items: z.array(z.discriminatedUnion('type', [careerExperienceSchema, educationExperienceSchema])),
  }),
  skills: z.object({
    id: z.number(),
    active: z.boolean(),
    items: z.array(
      z.object({
        id: z.number(),
        name: z.string(),
        url: z.string(),
        image: mediaSchema,
      }),
    ),
    links: z.array(linkSchema),
    header: sectionHeaderSchema,
  }),
  footer: z.object({
    id: z.number(),
    active: z.boolean(),
    copyright: z.string(),
    backToTopAction: buttonSchema,
  }),
});

export type PortfolioContentInput = z.infer<typeof portfolioContentSchema>;
