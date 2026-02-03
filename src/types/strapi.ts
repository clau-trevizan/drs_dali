// Strapi API Types

export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiMedia {
  id: number;
  attributes: {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
      thumbnail?: StrapiImageFormat;
      small?: StrapiImageFormat;
      medium?: StrapiImageFormat;
      large?: StrapiImageFormat;
    };
    url: string;
  };
}

export interface StrapiImageFormat {
  url: string;
  width: number;
  height: number;
}

// Page Components
export interface HeroSection {
  id: number;
  title: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  image?: { data: StrapiMedia };
  backgroundImage?: { data: StrapiMedia };
}

export interface StatsItem {
  id: number;
  number: string;
  label: string;
  description?: string;
}

export interface ServiceCard {
  id: number;
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  icon?: { data: StrapiMedia };
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio?: string;
  photo?: { data: StrapiMedia };
}

// Content Types
export interface HomePage {
  id: number;
  attributes: {
    hero: HeroSection;
    stats: StatsItem[];
    featuredServices: ServiceCard[];
    drs360Section: {
      title: string;
      description: string;
      buttonText: string;
      buttonLink: string;
      image?: { data: StrapiMedia };
    };
    solutionsSection: {
      title: string;
      description: string;
      services: ServiceCard[];
    };
    insightsSection: {
      title: string;
      buttonText: string;
      buttonLink: string;
    };
    ctaSection: {
      title: string;
      buttonText: string;
      buttonLink: string;
    };
  };
}

export interface SolutionsPage {
  id: number;
  attributes: {
    hero: HeroSection;
    introduction: string;
    services: {
      id: number;
      slug: string;
      name: string;
      shortName: string;
      description: string;
      color: 'teal' | 'orange';
    }[];
    ctsSection: ServiceSection;
    pcsSection: ServiceSection;
    tisSection: ServiceSection;
    digitalPlatformSection: {
      title: string;
      description: string;
      buttonText: string;
      buttonLink: string;
      image?: { data: StrapiMedia };
    };
  };
}

export interface ServiceSection {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  image?: { data: StrapiMedia };
}

export interface ServicePage {
  id: number;
  attributes: {
    slug: string;
    name: string;
    shortName: string;
    hero: HeroSection;
    introduction: string;
    highlights: string[];
    images: { data: StrapiMedia[] };
    solutions: ServiceCard[];
    ctaSection: {
      title: string;
      buttonText: string;
      buttonLink: string;
    };
    drs360Section?: {
      title: string;
      description: string;
      buttonText: string;
      buttonLink: string;
    };
  };
}

export interface DRS360Page {
  id: number;
  attributes: {
    hero: HeroSection;
    introduction: string;
    features: {
      id: number;
      icon: string;
      title: string;
      description: string;
    }[];
    benefits: {
      id: number;
      icon: string;
      title: string;
      description: string;
    }[];
    securitySection: {
      title: string;
      description: string;
      features: string[];
      image?: { data: StrapiMedia };
    };
    ctaSection: {
      title: string;
      buttonText: string;
      buttonLink: string;
    };
  };
}

export interface GroupPage {
  id: number;
  attributes: {
    hero: HeroSection;
    introduction: string;
    stats: StatsItem[];
    mission: string;
    vision: string;
    values: string[];
    differentials: {
      id: number;
      title: string;
      description: string;
    }[];
    teamSection: {
      title: string;
      description: string;
      image?: { data: StrapiMedia };
    };
    locations: {
      title: string;
      description: string;
      areas: string[];
    };
    certifications: {
      title: string;
      items: string[];
      image?: { data: StrapiMedia };
    };
  };
}

export interface InsightCategory {
  id: number;
  attributes: {
    name: string;
    slug: string;
  };
}

export interface Insight {
  id: number;
  attributes: {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    publishedAt: string;
    featuredImage: { data: StrapiMedia };
    categories: { data: InsightCategory[] };
    author?: string;
    readTime?: string;
  };
}

export interface ContactPage {
  id: number;
  attributes: {
    hero: HeroSection;
    supplierSection: {
      title: string;
      buttonText: string;
    };
    workWithUsSection: {
      title: string;
      buttonText: string;
    };
    formSection: {
      title: string;
      description: string;
    };
  };
}

export interface GlobalSettings {
  id: number;
  attributes: {
    logo: { data: StrapiMedia };
    logoDark: { data: StrapiMedia };
    siteName: string;
    navigation: {
      id: number;
      label: string;
      link: string;
      submenu?: {
        id: number;
        label: string;
        link: string;
      }[];
    }[];
    footer: {
      tagline: string;
      ctaButton: {
        text: string;
        link: string;
      };
      drsGroup: {
        title: string;
        links: { id: number; label: string; link: string }[];
      };
      contact: {
        title: string;
        email: string;
        phone: string;
        supportPhone: string;
        careersLink: string;
      };
      community: {
        title: string;
        links: { id: number; label: string; link: string }[];
      };
      addresses: {
        title: string;
        locations: {
          id: number;
          region: string;
          name: string;
          address: string;
        }[];
      };
      socialLinks: {
        linkedin?: string;
        instagram?: string;
        youtube?: string;
      };
      legalLinks: { id: number; label: string; link: string }[];
      copyright: string;
    };
  };
}
