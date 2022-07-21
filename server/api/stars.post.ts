import { Prisma } from '@prisma/client';
import { prisma } from '~~/prisma/main';

export default defineEventHandler(async (event) => {
  const data: Prisma.StarCreateInput = await useBody(event);
  console.log('data :>> ', data);
  return prisma.star.create({ data });
});
