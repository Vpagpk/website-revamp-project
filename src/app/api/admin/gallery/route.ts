import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { gallery } from '@/lib/db/schema';
import { verifyAdminAuth } from '@/lib/auth-utils';
import { eq } from 'drizzle-orm';

export async function GET() {
  try {
    const authResult = await verifyAdminAuth();
    if (authResult.error) {
      return authResult.error;
    }

    const allGalleryItems = await db.select().from(gallery).orderBy(gallery.createdAt);
    return NextResponse.json(allGalleryItems);
  } catch (error) {
    console.error('Error fetching gallery items:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const authResult = await verifyAdminAuth();
    if (authResult.error) {
      return authResult.error;
    }

    const { title, description, imageUrl, category, featured = false } = await request.json();

    if (!title || !imageUrl || !category) {
      return NextResponse.json({ error: 'Title, image URL, and category are required' }, { status: 400 });
    }

    const newGalleryItem = await db.insert(gallery).values({
      title,
      description: description || '',
      imageUrl,
      category,
      featured,
      status: 'published',
    }).returning();

    return NextResponse.json(newGalleryItem[0], { status: 201 });
  } catch (error) {
    console.error('Error creating gallery item:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const authResult = await verifyAdminAuth();
    if (authResult.error) {
      return authResult.error;
    }

    const { id, title, description, imageUrl, category, featured = false } = await request.json();

    if (!id || !title || !imageUrl || !category) {
      return NextResponse.json({ error: 'ID, title, image URL, and category are required' }, { status: 400 });
    }

    const updatedGalleryItem = await db.update(gallery)
      .set({
        title,
        description: description || '',
        imageUrl,
        category,
        featured,
        status: 'published',
      })
      .where(eq(gallery.id, id))
      .returning();

    if (updatedGalleryItem.length === 0) {
      return NextResponse.json({ error: 'Gallery item not found' }, { status: 404 });
    }

    return NextResponse.json(updatedGalleryItem[0]);
  } catch (error) {
    console.error('Error updating gallery item:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const authResult = await verifyAdminAuth();
    if (authResult.error) {
      return authResult.error;
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Gallery item ID is required' }, { status: 400 });
    }

    const deletedGalleryItem = await db.delete(gallery)
      .where(eq(gallery.id, parseInt(id)))
      .returning();

    if (deletedGalleryItem.length === 0) {
      return NextResponse.json({ error: 'Gallery item not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Gallery item deleted successfully' });
  } catch (error) {
    console.error('Error deleting gallery item:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}