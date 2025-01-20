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
      const { course_id, department, semester, schedule, location } = req.body;

      // درج اطلاعات گروه درسی
      const result = await client.query(
        'INSERT INTO OfferedCourse (course_id, department, semester, schedule, location) VALUES ($1, $2, $3, $4, $5)',
        [course_id, department, semester, schedule, location]
      );

      res.status(201).json({ message: `Offered course for ${department} department added` });
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
