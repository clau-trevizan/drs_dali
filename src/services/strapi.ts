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
const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'https://strapi-backend-nkch.onrender.com/admin';
const STRAPI_TOKEN = import.meta.env.VITE_STRAPI_TOKEN || 'bf89a2767f04401f00fcab1170fe1ff5a442f6b3d8e9dc3b2ff6c00de1996dde85b2352e463873445c3e08d9e20df28b14a59ca72f9ea042e52999a7343b62f8c46ea476d374e292b3c46e082c076016d90211c36fe64eee2cb58bd8a921717ba349e25f8384c345a1cd8f60e28f6711ae63dca6d367a3669e25829544403c72';

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

export async function getInsights(params?: {
  page?: number;
  pageSize?: number;
  category?: string;
  search?: string;
  locale?: string;
}): Promise<StrapiResponse<Insight[]>> {
  const filters: Record<string, unknown> = {};

  if (params?.category) {
    filters.category = { slug: { $eq: params.category } };
  }

  if (params?.search) {
    filters.$or = [
      { title: { $containsi: params.search } },
      { description: { $containsi: params.search } },
    ];
  }

  const query = buildQuery({
    filters,
    populate: '*',
    sort: ['publishedAt:desc'],
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
    populate: '*',
    locale: locale || 'pt-BR',
  });
  const response = await fetchAPI<StrapiResponse<Insight[]>>(`/articles${query}`);

  if (response.data && response.data.length > 0) {
    return response.data[0];
  }

  throw new Error(`Insight not found: ${slug}`);
}

export async function getInsightCategories(): Promise<InsightCategory[]> {
  const response = await fetchAPI<StrapiResponse<InsightCategory[]>>(
    '/categories'
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
  getInsights,
  getInsight,
  getInsightCategories,
  submitContactForm,
  getStrapiMedia,
};

export default strapiService;
