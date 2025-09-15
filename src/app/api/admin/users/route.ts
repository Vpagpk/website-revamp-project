import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { db } from '@/lib/db';
import { users } from '@/lib/db/schema';
import { verifyAdminAuth } from '@/lib/auth-utils';
import { eq } from 'drizzle-orm';

export async function POST(request: NextRequest) {
  try {
    const { error, session } = await verifyAdminAuth();
    
    if (error) {
      return error;
    }

    const { email, password, name, role = 'admin' } = await request.json();

    if (!email || !password || !name) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Check if user with this email already exists
    const existingUser = await db.select().from(users).where(eq(users.email, email)).limit(1);
    
    if (existingUser.length > 0) {
      return NextResponse.json({ 
        error: 'User with this email already exists' 
      }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await db.insert(users).values({
      email,
      passwordHash: hashedPassword,
      name,
      role,
    }).returning();

    const { passwordHash, ...userWithoutPassword } = newUser[0];

    return NextResponse.json(userWithoutPassword, { status: 201 });
  } catch (error) {
    console.error('Error creating user:', error);
    
    // Handle specific database constraint errors
    if (error instanceof Error && error.message.includes('unique constraint')) {
      return NextResponse.json({ 
        error: 'User with this email already exists' 
      }, { status: 409 });
    }
    
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const { error, session } = await verifyAdminAuth();
    
    if (error) {
      return error;
    }

    const allUsers = await db.select({
      id: users.id,
      email: users.email,
      name: users.name,
      role: users.role,
      createdAt: users.createdAt,
    }).from(users);

    return NextResponse.json(allUsers);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}