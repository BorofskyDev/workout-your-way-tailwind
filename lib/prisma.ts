// lib/prisma.ts
import { PrismaClient } from '@prisma/client'

// Prevent re-instantiating a new PrismaClient on every hot-reload in dev
declare global {
  // allow global `var` to be re-used across files
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined
}

export const prisma: PrismaClient =
  global.prisma ??
  new PrismaClient({
    log:
      process.env.NODE_ENV === 'development'
        ? ['query', 'info', 'warn', 'error']
        : ['error'],
  })

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma // cache the client in dev
}
