import { redirect } from 'next/navigation';

export default function Home() {
  // Perform server-side redirection
  redirect('/login');

  return (
    <main>
      <p>Redirecting to login...</p>
    </main>
  );
}