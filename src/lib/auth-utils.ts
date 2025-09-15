import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

/**
 * Verifies that the user is authenticated and has admin role
 * @returns Object with session if authorized, or NextResponse with error if not
 */
export async function verifyAdminAuth() {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    return {
      error: NextResponse.json({ error: 'Unauthorized - Please log in' }, { status: 401 }),
      session: null
    };
  }

  if (session.user.role !== 'admin') {
    return {
      error: NextResponse.json({ 
        error: 'Forbidden - Admin access required' 
      }, { status: 403 }),
      session: null
    };
  }

  return {
    error: null,
    session
  };
}

/**
 * Type guard to ensure session user has admin role
 */
export function isAdminUser(session: any): boolean {
  return session?.user?.role === 'admin';
}