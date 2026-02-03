import { useQuery } from '@tanstack/react-query';
import strapiService from '@/services/strapi';

// Hook for Global Settings
export function useGlobalSettings() {
  return useQuery({
    queryKey: ['global-settings'],
    queryFn: strapiService.getGlobalSettings,
    staleTime: 1000 * 60 * 60, // 1 hour
  });
}

// Hook for Home Page
export function useHomePage() {
  return useQuery({
    queryKey: ['home-page'],
    queryFn: strapiService.getHomePage,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

// Hook for Solutions Page
export function useSolutionsPage() {
  return useQuery({
    queryKey: ['solutions-page'],
    queryFn: strapiService.getSolutionsPage,
    staleTime: 1000 * 60 * 5,
  });
}

// Hook for Service Page
export function useServicePage(slug: string) {
  return useQuery({
    queryKey: ['service-page', slug],
    queryFn: () => strapiService.getServicePage(slug),
    staleTime: 1000 * 60 * 5,
    enabled: !!slug,
  });
}

// Hook for DRS 360 Page
export function useDRS360Page() {
  return useQuery({
    queryKey: ['drs360-page'],
    queryFn: strapiService.getDRS360Page,
    staleTime: 1000 * 60 * 5,
  });
}

// Hook for Group Page
export function useGroupPage() {
  return useQuery({
    queryKey: ['group-page'],
    queryFn: strapiService.getGroupPage,
    staleTime: 1000 * 60 * 5,
  });
}

// Hook for Contact Page
export function useContactPage() {
  return useQuery({
    queryKey: ['contact-page'],
    queryFn: strapiService.getContactPage,
    staleTime: 1000 * 60 * 5,
  });
}

// Hook for Insights List
export function useInsights(params?: {
  page?: number;
  pageSize?: number;
  category?: string;
  search?: string;
}) {
  return useQuery({
    queryKey: ['insights', params],
    queryFn: () => strapiService.getInsights(params),
    staleTime: 1000 * 60 * 2, // 2 minutes
  });
}

// Hook for Single Insight
export function useInsight(slug: string) {
  return useQuery({
    queryKey: ['insight', slug],
    queryFn: () => strapiService.getInsight(slug),
    staleTime: 1000 * 60 * 5,
    enabled: !!slug,
  });
}

// Hook for Insight Categories
export function useInsightCategories() {
  return useQuery({
    queryKey: ['insight-categories'],
    queryFn: strapiService.getInsightCategories,
    staleTime: 1000 * 60 * 60, // 1 hour
  });
}
