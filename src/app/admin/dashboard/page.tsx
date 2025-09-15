"use client";

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { 
  Video, 
  ImageIcon, 
  FileText, 
  MessageSquare, 
  Users, 
  Settings,
  Upload,
  Eye,
  Edit,
  Plus
} from 'lucide-react';

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const adminModules = [
    {
      title: 'Performance Management',
      description: 'Manage video performances and YouTube content',
      icon: Video,
      href: '/admin/performances',
      count: '12 videos',
      color: 'bg-blue-500'
    },
    {
      title: 'Media Gallery',
      description: 'Upload and organize photos and images',
      icon: ImageIcon,
      href: '/admin/gallery',
      count: '45 photos',
      color: 'bg-green-500'
    },
    {
      title: 'Blog Management',
      description: 'Create and edit blog posts and articles',
      icon: FileText,
      href: '/admin/blog',
      count: '8 posts',
      color: 'bg-purple-500'
    },
    {
      title: 'Testimonials',
      description: 'Manage client reviews and testimonials',
      icon: MessageSquare,
      href: '/admin/testimonials',
      count: '15 reviews',
      color: 'bg-orange-500'
    },
    {
      title: 'User Management',
      description: 'Manage admin users and permissions',
      icon: Users,
      href: '/admin/users',
      count: '3 users',
      color: 'bg-red-500'
    },
    {
      title: 'Site Settings',
      description: 'Configure company info and site settings',
      icon: Settings,
      href: '/admin/settings',
      count: '12 sections',
      color: 'bg-gray-500'
    }
  ];

  const quickActions = [
    {
      title: 'Upload Media',
      description: 'Add new photos or videos',
      icon: Upload,
      href: '/admin/media/upload',
      color: 'text-blue-500'
    },
    {
      title: 'New Blog Post',
      description: 'Create a new article',
      icon: Plus,
      href: '/admin/blog/new',
      color: 'text-green-500'
    },
    {
      title: 'View Website',
      description: 'Preview the live site',
      icon: Eye,
      href: '/',
      color: 'text-purple-500'
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="border-b bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div>
              <h1 className="text-xl font-semibold">Admin Dashboard</h1>
              <p className="text-sm text-zinc-600">Welcome back, {session.user.name}</p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline">
                {session.user.role}
              </Badge>
              <Button variant="outline" asChild>
                <Link href="/">View Website</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <div className="lg:col-span-3">
            <h2 className="text-lg font-semibold mb-4">Content Management</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {adminModules.map((module) => (
                <Link key={module.href} href={module.href}>
                  <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${module.color} text-white`}>
                          <module.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <CardTitle className="text-base">{module.title}</CardTitle>
                          <Badge variant="secondary" className="text-xs">
                            {module.count}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-zinc-600">{module.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              {quickActions.map((action) => (
                <Link key={action.href} href={action.href}>
                  <Card className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <action.icon className={`w-5 h-5 ${action.color}`} />
                        <div>
                          <div className="font-medium text-sm">{action.title}</div>
                          <div className="text-xs text-zinc-600">{action.description}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-zinc-600">Total Performances</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
                <Video className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-zinc-600">Gallery Images</p>
                  <p className="text-2xl font-bold">45</p>
                </div>
                <ImageIcon className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-zinc-600">Blog Posts</p>
                  <p className="text-2xl font-bold">8</p>
                </div>
                <FileText className="w-8 h-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-zinc-600">Testimonials</p>
                  <p className="text-2xl font-bold">15</p>
                </div>
                <MessageSquare className="w-8 h-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}