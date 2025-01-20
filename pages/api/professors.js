import { Client } from 'pg';

export default async function handler(req, res) {
  const client = new Client({
    user: 'postgres', // نام کاربری پیش‌فرض PostgreSQL
    host: 'localhost', // آدرس پیش‌فرض دیتابیس
    database: 'university', // نام دیتابیس فرضی
    password: 'jlk;lkj', // رمز عبور
    port: 5432, // پورت پیش‌فرض PostgreSQL
  });

  try {
    await client.connect();
    if (req.method === 'POST') {
      const { id, name, department } = req.body;

      // درج اطلاعات استاد با ID
      const result = await client.query(
        'INSERT INTO Professor (id, name, department) VALUES ($1, $2, $3)',
        [id, name, department]
      );

      res.status(201).json({ message: `Professor ${name} with ID ${id} added to ${department}` });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ message: 'Internal server error' });
  } finally {
    await client.end();
  }
}
