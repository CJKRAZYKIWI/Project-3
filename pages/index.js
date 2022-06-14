import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
export default function Home() {
  const { data: session } = useSession();

  <div className="mt-8">
  {session?.user ? (
    <div>
      <p>
        Signed in as <strong>{session.user.email}</strong>
        <button
              onClick={signOut}
              className="font-semibold underline opacity-70 hover:opacity-100"
            >
              Sign Out
            </button>
      </p>
    </div>
  ) : (
    <Link href="/api/auth/signin">
      <a className="px-6 py-3 rounded-md text-lg text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition">
        Get started
      </a>
    </Link>
 )}
 </div>
}
