// Strapi API Service
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
const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';
const STRAPI_TOKEN = import.meta.env.VITE_STRAPI_TOKEN || '';

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
    throw new Error(`Strapi API Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

// Helper to build query params
function buildQuery(params: Record<string, unknown>): string {
  const query = new URLSearchParams();
  
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      if (typeof value === 'object') {
        query.append(key, JSON.stringify(value));
      } else {
        query.append(key, String(value));
      }
    }
  });
  
  return query.toString() ? `?${query.toString()}` : '';
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
}): Promise<StrapiResponse<Insight[]>> {
  const filters: Record<string, unknown> = {};
  
  if (params?.category) {
    filters.categories = { slug: { $eq: params.category } };
  }
  
  if (params?.search) {
    filters.$or = [
      { title: { $containsi: params.search } },
      { excerpt: { $containsi: params.search } },
    ];
  }
  
  const query = buildQuery({
    filters,
    populate: ['featuredImage', 'categories'],
    sort: ['publishedAt:desc'],
    pagination: {
      page: params?.page || 1,
      pageSize: params?.pageSize || 6,
    },
  });
  
  return fetchAPI<StrapiResponse<Insight[]>>(`/insights${query}`);
}

export async function getInsight(slug: string): Promise<Insight> {
  const query = buildQuery({
    filters: { slug: { $eq: slug } },
    populate: ['featuredImage', 'categories'],
  });
  const response = await fetchAPI<StrapiResponse<Insight[]>>(`/insights${query}`);
  return response.data[0];
}

export async function getInsightCategories(): Promise<InsightCategory[]> {
  const response = await fetchAPI<StrapiResponse<InsightCategory[]>>(
    '/insight-categories'
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
