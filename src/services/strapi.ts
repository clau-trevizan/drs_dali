// Strapi API Service
import qs from 'qs';
import type {
  StrapiResponse,
  HomePage,
  SolutionsPage,
  ServicePage,
  DRS360Page,
  GroupPage,
  Insight,
  InsightCategory,
  ContactPage,
  GlobalSettings,
} from '@/types/strapi';

// Strapi API Configuration
const STRAPI_URL = import.meta.env.VITE_STRAPI_URL;
const STRAPI_TOKEN = import.meta.env.VITE_STRAPI_TOKEN;


// Base fetch function
async function fetchAPI<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${STRAPI_URL}/api${endpoint}`;

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...(STRAPI_TOKEN && { Authorization: `Bearer ${STRAPI_TOKEN}` }),
    ...options.headers,
  };

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const errorBody = await response.text();
    console.error(`Strapi API Error [${response.status}] ${url}:`, errorBody.substring(0, 300));
    throw new Error(`Strapi API Error: ${response.status} ${response.statusText}`);
  }

  const contentType = response.headers.get('content-type');
  if (!contentType?.includes('application/json')) {
    const text = await response.text();
    console.error('Strapi returned non-JSON:', contentType, text.substring(0, 200));
    throw new Error(`Unexpected response format: ${contentType}`);
  }

  return response.json();
}

// Helper to build query params
function buildQuery(params: Record<string, unknown>): string {
  const queryString = qs.stringify(params, { encodeValuesOnly: true });
  return queryString ? `?${queryString}` : '';
}

// Helper to get full image URL
export function getStrapiMedia(url: string | undefined): string {
  if (!url) return '/placeholder.svg';
  if (url.startsWith('http')) return url;
  return `${STRAPI_URL}${url}`;
}

// API Functions

export async function getGlobalSettings(): Promise<GlobalSettings> {
  const response = await fetchAPI<StrapiResponse<GlobalSettings>>(
    '/global?populate=deep'
  );
  return response.data;
}

export async function getHomePage(): Promise<HomePage> {
  const response = await fetchAPI<StrapiResponse<HomePage>>(
    '/home-page?populate=deep'
  );
  return response.data;
}

export async function getSolutionsPage(): Promise<SolutionsPage> {
  const response = await fetchAPI<StrapiResponse<SolutionsPage>>(
    '/solutions-page?populate=deep'
  );
  return response.data;
}

export async function getServicePage(slug: string): Promise<ServicePage> {
  const query = buildQuery({
    filters: { slug: { $eq: slug } },
    populate: 'deep',
  });
  const response = await fetchAPI<StrapiResponse<ServicePage[]>>(
    `/service-pages${query}`
  );
  return response.data[0];
}

export async function getDRS360Page(): Promise<DRS360Page> {
  const response = await fetchAPI<StrapiResponse<DRS360Page>>(
    '/drs360-page?populate=deep'
  );
  return response.data;
}

export async function getGroupPage(): Promise<GroupPage> {
  const response = await fetchAPI<StrapiResponse<GroupPage>>(
    '/group-page?populate=deep'
  );
  return response.data;
}

export async function getContactPage(): Promise<ContactPage> {
  const response = await fetchAPI<StrapiResponse<ContactPage>>(
    '/contact-page?populate=deep'
  );
  return response.data;
}

export async function getPrivacyPolicy(locale?: string): Promise<{ title: string; content: string }> {
  const strapiLocale = locale === 'en' ? 'en' : locale === 'es' ? 'es-ES' : 'pt-BR';
  const query = buildQuery({ locale: strapiLocale });
  const response = await fetchAPI<StrapiResponse<{ Title: string; Texto: string }>>(
    `/politica-de-privacidade${query}`
  );
  return { title: response.data.Title, content: response.data.Texto };
}

export async function getTermsOfUse(locale?: string): Promise<{ title: string; content: string }> {
  const strapiLocale = locale === 'en' ? 'en' : locale === 'es' ? 'es-ES' : 'pt-BR';
  const query = buildQuery({ locale: strapiLocale });
  const response = await fetchAPI<StrapiResponse<{ Title: string; Texto: string }>>(
    `/termos${query}`
  );
  return { title: response.data.Title, content: response.data.Texto };
}

export async function getCookiesPolicy(locale?: string): Promise<{ title: string; content: string }> {
  const strapiLocale = locale === 'en' ? 'en' : locale === 'es' ? 'es-ES' : 'pt-BR';
  const query = buildQuery({ locale: strapiLocale });
  const response = await fetchAPI<StrapiResponse<{ Title: string; Texto: string }>>(
    `/cookies${query}`
  );
  return { title: response.data.Title, content: response.data.Texto };
}

export async function getInsights(params?: {
  page?: number;
  pageSize?: number;
  category?: string;
  categories?: string[];
  search?: string;
  locale?: string;
}): Promise<StrapiResponse<Insight[]>> {
  const filters: Record<string, unknown> = {};

  if (params?.categories && params.categories.length > 0) {
    filters.categories = { slug: { $in: params.categories } };
  } else if (params?.category) {
    filters.categories = { slug: { $eq: params.category } };
  }

  if (params?.search) {
    filters.$or = [
      { title: { $containsi: params.search } },
      { description: { $containsi: params.search } },
    ];
  }

  const query = buildQuery({
    filters,
    populate: {
      cover: true,
      categories: true,
      blocks: true,
      localizations: true,
      authors: true,
    },
    sort: ['publishedAt:desc', 'createdAt:desc'],
    locale: params?.locale || 'pt-BR',
    pagination: {
      page: params?.page || 1,
      pageSize: params?.pageSize || 6,
    },
  });

  return fetchAPI<StrapiResponse<Insight[]>>(`/articles${query}`);
}

export async function getInsight(slug: string, locale?: string): Promise<Insight> {
  const query = buildQuery({
    filters: { slug: { $eq: slug } },
    populate: {
      cover: true,
      categories: true,
      blocks: true,
      localizations: true,
      authors: true,
    },
    locale: locale || 'pt-BR',
  });
  const response = await fetchAPI<StrapiResponse<Insight[]>>(`/articles${query}`);

  if (response.data && response.data.length > 0) {
    return response.data[0];
  }

  throw new Error(`Insight not found: ${slug}`);
}

export async function getInsightCategories(locale?: string): Promise<InsightCategory[]> {
  const strapiLocale = locale === 'en' ? 'en' : locale === 'es-ES' || locale === 'es' ? 'es-ES' : 'pt-BR';
  const query = buildQuery({ locale: strapiLocale });
  const response = await fetchAPI<StrapiResponse<InsightCategory[]>>(
    `/categories${query}`
  );
  return response.data;
}

export async function submitContactForm(data: {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
}): Promise<{ success: boolean }> {
  await fetchAPI('/contact-submissions', {
    method: 'POST',
    body: JSON.stringify({ data }),
  });
  return { success: true };
}

// Export all functions
export const strapiService = {
  getGlobalSettings,
  getHomePage,
  getSolutionsPage,
  getServicePage,
  getDRS360Page,
  getGroupPage,
  getContactPage,
  getPrivacyPolicy,
  getTermsOfUse,
  getCookiesPolicy,
  getInsights,
  getInsight,
  getInsightCategories,
  submitContactForm,
  getStrapiMedia,
};

export default strapiService;
