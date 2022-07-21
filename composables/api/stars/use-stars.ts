import { Star } from '@prisma/client';
import { useQuery } from 'vue-query';

export const useStars = () =>
  useQuery('stars', () => $fetch<Star[]>('/api/stars'));
