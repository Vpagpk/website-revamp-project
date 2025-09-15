import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { db } from '@/lib/db';
import { mediaLibrary } from '@/lib/db/schema';
import { verifyAdminAuth } from '@/lib/auth-utils';

// This route requires Node.js runtime for file system operations
export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const { error, session } = await verifyAdminAuth();
    
    if (error) {
      return error;
    }

    const formData = await request.formData();
    const file = formData.get('file') as File;
    const altText = formData.get('altText') as string || '';
    const caption = formData.get('caption') as string || '';

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ error: 'Invalid file type' }, { status: 400 });
    }

    // Validate file size (5MB limit)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      return NextResponse.json({ error: 'File too large' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Generate unique filename
    const timestamp = Date.now();
    const extension = file.name.split('.').pop();
    const filename = `${timestamp}.${extension}`;
    
    // Create upload directory
    const uploadDir = join(process.cwd(), 'public', 'uploads');
    await mkdir(uploadDir, { recursive: true });
    
    // Save file
    const filePath = join(uploadDir, filename);
    await writeFile(filePath, buffer);
    
    // Save to database
    const dbRecord = await db.insert(mediaLibrary).values({
      filename,
      originalName: file.name,
      filePath: `/uploads/${filename}`,
      fileType: 'image',
      fileSize: file.size,
      mimeType: file.type,
      altText: altText || file.name,
      caption: caption || '',
      uploadedBy: parseInt(session.user.id),
    }).returning();

    return NextResponse.json({
      id: dbRecord[0].id,
      filename: dbRecord[0].filename,
      filePath: dbRecord[0].filePath,
      originalName: dbRecord[0].originalName,
      altText: dbRecord[0].altText,
      caption: dbRecord[0].caption,
    }, { status: 201 });

  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}