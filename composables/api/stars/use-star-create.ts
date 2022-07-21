import { Prisma } from '@prisma/client';
import { useMutation } from 'vue-query';

export const useStarCreate = () =>
  useMutation((body: Prisma.StarCreateInput) =>
    $fetch('/api/stars', {
      method: 'POST',
      body,
    })
  );
