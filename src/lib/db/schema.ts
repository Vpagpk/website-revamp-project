import { pgTable, serial, varchar, text, integer, boolean, timestamp, jsonb } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

// Users table for admin authentication
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  passwordHash: varchar('password_hash', { length: 255 }).notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  role: varchar('role', { length: 50 }).default('admin'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow()
});

// Media Library table
export const mediaLibrary = pgTable('media_library', {
  id: serial('id').primaryKey(),
  filename: varchar('filename', { length: 255 }).notNull(),
  originalName: varchar('original_name', { length: 255 }).notNull(),
  filePath: varchar('file_path', { length: 500 }).notNull(),
  fileType: varchar('file_type', { length: 100 }).notNull(),
  fileSize: integer('file_size').notNull(),
  mimeType: varchar('mime_type', { length: 100 }).notNull(),
  altText: varchar('alt_text', { length: 500 }),
  caption: text('caption'),
  uploadedBy: integer('uploaded_by').references(() => users.id),
  createdAt: timestamp('created_at').defaultNow()
});

// Performances table
export const performances = pgTable('performances', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 500 }).notNull(),
  description: text('description'),
  videoId: varchar('video_id', { length: 100 }),
  thumbnailUrl: varchar('thumbnail_url', { length: 500 }),
  category: varchar('category', { length: 100 }).notNull(),
  duration: varchar('duration', { length: 20 }),
  viewsCount: integer('views_count').default(0),
  featured: boolean('featured').default(false),
  status: varchar('status', { length: 50 }).default('published'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow()
});

// Gallery table
export const gallery = pgTable('gallery', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  description: text('description'),
  imageUrl: varchar('image_url', { length: 500 }).notNull(),
  category: varchar('category', { length: 100 }).notNull(),
  featured: boolean('featured').default(false),
  sortOrder: integer('sort_order').default(0),
  status: varchar('status', { length: 50 }).default('published'),
  createdAt: timestamp('created_at').defaultNow()
});

// Blog Posts table
export const blogPosts = pgTable('blog_posts', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 500 }).notNull(),
  excerpt: text('excerpt'),
  content: text('content').notNull(),
  featuredImage: varchar('featured_image', { length: 500 }),
  category: varchar('category', { length: 100 }).notNull(),
  author: varchar('author', { length: 255 }).notNull(),
  tags: text('tags').array(),
  featured: boolean('featured').default(false),
  status: varchar('status', { length: 50 }).default('draft'),
  readTime: varchar('read_time', { length: 20 }),
  publishedAt: timestamp('published_at'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow()
});

// Testimonials table
export const testimonials = pgTable('testimonials', {
  id: serial('id').primaryKey(),
  clientName: varchar('client_name', { length: 255 }).notNull(),
  clientRole: varchar('client_role', { length: 255 }),
  clientCompany: varchar('client_company', { length: 255 }),
  quote: text('quote').notNull(),
  clientImage: varchar('client_image', { length: 500 }),
  rating: integer('rating').default(5),
  featured: boolean('featured').default(false),
  status: varchar('status', { length: 50 }).default('published'),
  createdAt: timestamp('created_at').defaultNow()
});

// Services table
export const services = pgTable('services', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  description: text('description').notNull(),
  icon: varchar('icon', { length: 100 }),
  features: text('features').array(),
  duration: varchar('duration', { length: 50 }),
  capacity: varchar('capacity', { length: 50 }),
  featured: boolean('featured').default(false),
  status: varchar('status', { length: 50 }).default('published'),
  sortOrder: integer('sort_order').default(0),
  createdAt: timestamp('created_at').defaultNow()
});

// Company Info table
export const companyInfo = pgTable('company_info', {
  id: serial('id').primaryKey(),
  sectionName: varchar('section_name', { length: 100 }).notNull().unique(),
  title: varchar('title', { length: 500 }),
  content: text('content'),
  data: jsonb('data'),
  updatedAt: timestamp('updated_at').defaultNow()
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type Performance = typeof performances.$inferSelect;
export type NewPerformance = typeof performances.$inferInsert;
export type GalleryItem = typeof gallery.$inferSelect;
export type NewGalleryItem = typeof gallery.$inferInsert;
export type BlogPost = typeof blogPosts.$inferSelect;
export type NewBlogPost = typeof blogPosts.$inferInsert;
export type Testimonial = typeof testimonials.$inferSelect;
export type NewTestimonial = typeof testimonials.$inferInsert;
export type Service = typeof services.$inferSelect;
export type NewService = typeof services.$inferInsert;
export type CompanyInfo = typeof companyInfo.$inferSelect;
export type NewCompanyInfo = typeof companyInfo.$inferInsert;