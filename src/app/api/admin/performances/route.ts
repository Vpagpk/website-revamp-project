import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { performances } from '@/lib/db/schema';
import { verifyAdminAuth } from '@/lib/auth-utils';
import { eq } from 'drizzle-orm';

export async function GET() {
  try {
    const { error, session } = await verifyAdminAuth();
    
    if (error) {
      return error;
    }

    const allPerformances = await db.select().from(performances);
    return NextResponse.json(allPerformances);
  } catch (error) {
    console.error('Error fetching performances:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { error, session } = await verifyAdminAuth();
    
    if (error) {
      return error;
    }

    const { title, description, videoId, thumbnailUrl, category, duration } = await request.json();

    if (!title || !category) {
      return NextResponse.json({ error: 'Title and category are required' }, { status: 400 });
    }

    const newPerformance = await db.insert(performances).values({
      title,
      description,
      videoId,
      thumbnailUrl,
      category,
      duration,
    }).returning();

    return NextResponse.json(newPerformance[0], { status: 201 });
  } catch (error) {
    console.error('Error creating performance:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { error, session } = await verifyAdminAuth();
    
    if (error) {
      return error;
    }

    const { id, title, description, videoId, thumbnailUrl, category, duration } = await request.json();

    if (!id || !title || !category) {
      return NextResponse.json({ error: 'ID, title, and category are required' }, { status: 400 });
    }

    const updatedPerformance = await db.update(performances)
      .set({
        title,
        description,
        videoId,
        thumbnailUrl,
        category,
        duration,
        updatedAt: new Date(),
      })
      .where(eq(performances.id, id))
      .returning();

    if (updatedPerformance.length === 0) {
      return NextResponse.json({ error: 'Performance not found' }, { status: 404 });
    }

    return NextResponse.json(updatedPerformance[0]);
  } catch (error) {
    console.error('Error updating performance:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { error, session } = await verifyAdminAuth();
    
    if (error) {
      return error;
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Performance ID is required' }, { status: 400 });
    }

    const deletedPerformance = await db.delete(performances)
      .where(eq(performances.id, parseInt(id)))
      .returning();

    if (deletedPerformance.length === 0) {
      return NextResponse.json({ error: 'Performance not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Performance deleted successfully' });
  } catch (error) {
    console.error('Error deleting performance:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}