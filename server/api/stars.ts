import { prisma } from '~~/prisma/main';

export default defineEventHandler((event) => {
  const stars = prisma.star.findMany();
  return stars;
});
