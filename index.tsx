import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold">🎛️ F.O.D.C. Back Office</h1>
      <p className="mt-4 text-lg">Manage your Discord server in style</p>
      <Link href="/api/login" className="mt-6 inline-block px-6 py-3 bg-pink-500 text-white rounded-xl">
        Login with Discord
      </Link>
    </div>
  );
}