"use client";

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Plus, Upload, ImageIcon, ArrowLeft, Trash2, Edit } from 'lucide-react';
import Link from 'next/link';

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  featured: boolean;
  status: string;
  createdAt: string;
}

export default function GalleryAdmin() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [uploading, setUploading] = useState(false);
  const [uploadForm, setUploadForm] = useState({
    title: '',
    description: '',
    category: 'sufi',
    file: null as File | null
  });

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login');
      return;
    }

    if (session) {
      fetchGalleryItems();
    }
  }, [session, status, router]);

  const fetchGalleryItems = async () => {
    try {
      const response = await fetch('/api/admin/gallery');
      if (response.ok) {
        const data = await response.json();
        setGalleryItems(data);
      } else {
        setError('Failed to fetch gallery items');
      }
    } catch (err) {
      setError('Error loading gallery');
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadForm.file) return;

    setUploading(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('file', uploadForm.file);
      formData.append('altText', uploadForm.title);
      formData.append('caption', uploadForm.description);

      const uploadResponse = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
      });

      if (!uploadResponse.ok) {
        const errorData = await uploadResponse.json();
        setError(errorData.error || 'Upload failed');
        return;
      }

      const uploadResult = await uploadResponse.json();

      // Create gallery item with uploaded image
      const galleryResponse = await fetch('/api/admin/gallery', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: uploadForm.title,
          description: uploadForm.description,
          imageUrl: uploadResult.filePath,
          category: uploadForm.category,
        }),
      });

      if (galleryResponse.ok) {
        setUploadForm({
          title: '',
          description: '',
          category: 'sufi',
          file: null
        });
        fetchGalleryItems();
      } else {
        setError('Failed to create gallery item');
      }
    } catch (err) {
      setError('Error uploading image');
    } finally {
      setUploading(false);
    }
  };

  if (status === 'loading' || !session) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="border-b bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/admin/dashboard">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
              <div>
                <h1 className="text-xl font-semibold">Gallery Management</h1>
                <p className="text-sm text-zinc-600">Upload and organize photos and images</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="w-5 h-5" />
              Upload New Image
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleFileUpload} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Title</label>
                  <Input
                    value={uploadForm.title}
                    onChange={(e) => setUploadForm({...uploadForm, title: e.target.value})}
                    placeholder="Image title"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Category</label>
                  <select
                    className="w-full p-2 border rounded-md"
                    value={uploadForm.category}
                    onChange={(e) => setUploadForm({...uploadForm, category: e.target.value})}
                  >
                    <option value="sufi">Sufi Dance</option>
                    <option value="cultural">Cultural Shows</option>
                    <option value="wedding">Wedding Events</option>
                    <option value="corporate">Corporate Events</option>
                    <option value="festivals">Festivals</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Description</label>
                <Textarea
                  value={uploadForm.description}
                  onChange={(e) => setUploadForm({...uploadForm, description: e.target.value})}
                  placeholder="Image description"
                  rows={3}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Image File</label>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setUploadForm({...uploadForm, file: e.target.files?.[0] || null})}
                  required
                />
              </div>
              <Button type="submit" disabled={uploading || !uploadForm.file}>
                {uploading ? 'Uploading...' : 'Upload Image'}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {loading ? (
            <div className="col-span-full text-center py-8">Loading gallery...</div>
          ) : galleryItems.length === 0 ? (
            <div className="col-span-full text-center py-8">
              <ImageIcon className="w-12 h-12 mx-auto text-zinc-400 mb-4" />
              <p className="text-zinc-600">No images yet. Upload your first one!</p>
            </div>
          ) : (
            galleryItems.map((item) => (
              <Card key={item.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="aspect-square bg-zinc-100 overflow-hidden rounded-t-lg">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-medium text-sm line-clamp-1">{item.title}</h3>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm">
                          <Edit className="w-3 h-3" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs mb-2">
                      {item.category}
                    </Badge>
                    <p className="text-xs text-zinc-600 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
}