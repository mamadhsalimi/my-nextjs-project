import { useState } from 'react';

export default function Professors() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/professors', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, name, department }),
    });

    const data = await res.json();
    setMessage(data.message);
    setId('');
    setName('');
    setDepartment('');
  };

  return (
    <div>
      <h1>Register a Professor</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Professor ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Professor Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
        />
        <button type="submit">Add Professor</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
