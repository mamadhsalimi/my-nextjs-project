import { useState } from 'react';

export default function OfferedCourses() {
  const [course_id, setCourseId] = useState('');
  const [department, setDepartment] = useState('');
  const [semester, setSemester] = useState('');
  const [schedule, setSchedule] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/offeredCourses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ course_id, department, semester, schedule, location }),
    });

    const data = await res.json();
    setMessage(data.message);
    setCourseId('');
    setDepartment('');
    setSemester('');
    setSchedule('');
    setLocation('');
  };

  return (
    <div>
      <h1>Register an Offered Course</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Course ID"
          value={course_id}
          onChange={(e) => setCourseId(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Semester"
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Schedule"
          value={schedule}
          onChange={(e) => setSchedule(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <button type="submit">Add Offered Course</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
