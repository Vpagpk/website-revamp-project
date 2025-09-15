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
import { Plus, Edit, Trash2, Video, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface Performance {
  id: number;
  title: string;
  description: string;
  videoId: string;
  thumbnailUrl: string;
  category: string;
  duration: string;
  viewsCount: number;
  featured: boolean;
  status: string;
  createdAt: string;
}

export default function PerformancesAdmin() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [performances, setPerformances] = useState<Performance[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [newPerformance, setNewPerformance] = useState({
    title: '',
    description: '',
    videoId: '',
    thumbnailUrl: '',
    category: 'Sufi Performance',
    duration: ''
  });

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login');
      return;
    }

    if (session) {
      fetchPerformances();
    }
  }, [session, status, router]);

  const fetchPerformances = async () => {
    try {
      const response = await fetch('/api/admin/performances');
      if (response.ok) {
        const data = await response.json();
        setPerformances(data);
      } else {
        setError('Failed to fetch performances');
      }
    } catch (err) {
      setError('Error loading performances');
    } finally {
      setLoading(false);
    }
  };

  const handleCreatePerformance = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/admin/performances', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPerformance),
      });

      if (response.ok) {
        setNewPerformance({
          title: '',
          description: '',
          videoId: '',
          thumbnailUrl: '',
          category: 'Sufi Performance',
          duration: ''
        });
        setIsCreating(false);
        fetchPerformances();
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to create performance');
      }
    } catch (err) {
      setError('Error creating performance');
    } finally {
      setLoading(false);
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
                <h1 className="text-xl font-semibold">Performance Management</h1>
                <p className="text-sm text-zinc-600">Manage video performances and YouTube content</p>
              </div>
            </div>
            <Button onClick={() => setIsCreating(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Add Performance
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {isCreating && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Add New Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleCreatePerformance} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Title</label>
                    <Input
                      value={newPerformance.title}
                      onChange={(e) => setNewPerformance({...newPerformance, title: e.target.value})}
                      placeholder="Performance title"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Category</label>
                    <select
                      className="w-full p-2 border rounded-md"
                      value={newPerformance.category}
                      onChange={(e) => setNewPerformance({...newPerformance, category: e.target.value})}
                    >
                      <option value="Sufi Performance">Sufi Performance</option>
                      <option value="Cultural Festival">Cultural Festival</option>
                      <option value="Classical Dance">Classical Dance</option>
                      <option value="Folk Dance">Folk Dance</option>
                      <option value="Wedding Events">Wedding Events</option>
                      <option value="Training">Training</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">YouTube Video ID</label>
                    <Input
                      value={newPerformance.videoId}
                      onChange={(e) => setNewPerformance({...newPerformance, videoId: e.target.value})}
                      placeholder="e.g., dQw4w9WgXcQ"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Duration</label>
                    <Input
                      value={newPerformance.duration}
                      onChange={(e) => setNewPerformance({...newPerformance, duration: e.target.value})}
                      placeholder="e.g., 8:45"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Thumbnail URL</label>
                  <Input
                    value={newPerformance.thumbnailUrl}
                    onChange={(e) => setNewPerformance({...newPerformance, thumbnailUrl: e.target.value})}
                    placeholder="https://example.com/thumbnail.jpg"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Description</label>
                  <Textarea
                    value={newPerformance.description}
                    onChange={(e) => setNewPerformance({...newPerformance, description: e.target.value})}
                    placeholder="Performance description"
                    rows={3}
                  />
                </div>
                <div className="flex gap-2">
                  <Button type="submit" disabled={loading}>
                    {loading ? 'Creating...' : 'Create Performance'}
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setIsCreating(false)}>
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <div className="col-span-full text-center py-8">Loading performances...</div>
          ) : performances.length === 0 ? (
            <div className="col-span-full text-center py-8">
              <Video className="w-12 h-12 mx-auto text-zinc-400 mb-4" />
              <p className="text-zinc-600">No performances yet. Create your first one!</p>
            </div>
          ) : (
            performances.map((performance) => (
              <Card key={performance.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-base line-clamp-2">{performance.title}</CardTitle>
                      <Badge variant="secondary" className="mt-2">
                        {performance.category}
                      </Badge>
                    </div>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  {performance.thumbnailUrl && (
                    <div className="aspect-video bg-zinc-100 rounded-lg mb-3 overflow-hidden">
                      <img
                        src={performance.thumbnailUrl}
                        alt={performance.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <p className="text-sm text-zinc-600 line-clamp-2 mb-3">
                    {performance.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-zinc-500">
                    <span>{performance.duration}</span>
                    <span>{performance.viewsCount} views</span>
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