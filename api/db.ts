import { PrismaClient } from '@prisma/client'
export const db = new PrismaClient()

const k = async () => {
  await db.user.create({
    data: {
      email: 'test',
      password: 'test',
      name: 'test',
    }
  })
}

k();