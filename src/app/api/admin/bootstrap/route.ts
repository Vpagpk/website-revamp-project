import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { db } from '@/lib/db';
import { users } from '@/lib/db/schema';

/**
 * Bootstrap route to create the initial admin user when no users exist
 * This is a one-time operation for system initialization
 */
export async function POST(request: NextRequest) {
  try {
    // Check if any users already exist
    const existingUsers = await db.select().from(users).limit(1);
    
    if (existingUsers.length > 0) {
      return NextResponse.json({ 
        error: 'Bootstrap not allowed - admin users already exist' 
      }, { status: 403 });
    }

    const { email, password, name } = await request.json();

    if (!email || !password || !name) {
      return NextResponse.json({ 
        error: 'Email, password, and name are required' 
      }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ 
        error: 'Invalid email format' 
      }, { status: 400 });
    }

    // Validate password strength
    if (password.length < 8) {
      return NextResponse.json({ 
        error: 'Password must be at least 8 characters long' 
      }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newAdmin = await db.insert(users).values({
      email,
      passwordHash: hashedPassword,
      name,
      role: 'admin',
    }).returning();

    const { passwordHash, ...adminWithoutPassword } = newAdmin[0];

    return NextResponse.json({
      message: 'Initial admin user created successfully',
      user: adminWithoutPassword
    }, { status: 201 });

  } catch (error) {
    console.error('Bootstrap error:', error);
    return NextResponse.json({ 
      error: 'Failed to create initial admin user' 
    }, { status: 500 });
  }
}

/**
 * GET route to check if bootstrap is needed
 */
export async function GET() {
  try {
    const existingUsers = await db.select().from(users).limit(1);
    
    return NextResponse.json({
      bootstrapNeeded: existingUsers.length === 0,
      hasUsers: existingUsers.length > 0
    });

  } catch (error) {
    console.error('Bootstrap check error:', error);
    return NextResponse.json({ 
      error: 'Failed to check bootstrap status' 
    }, { status: 500 });
  }
}