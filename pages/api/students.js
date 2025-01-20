import { Client } from 'pg';

export default async function handler(req, res) {
  const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'university',
    password: 'jlk;lkj',
    port: 5432,
  });

  try {
    await client.connect();
    if (req.method === 'POST') {
      const { id, name, major } = req.body;

      // درج اطلاعات دانشجو
      const result = await client.query(
        'INSERT INTO Student (id, name, major) VALUES ($1, $2, $3)',
        [id, name, major]
      );

      res.status(201).json({ message: `Student ${name} with ID ${id} added to ${major} major` });
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
