import Image from 'next/image';
import { Search, Calendar, Clock, Tag, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';

const blogPosts = [
  {
    id: 1,
    title: "The History of Sufi Whirling Dance",
    excerpt: "Explore the mystical origins and spiritual significance of the ancient Sufi whirling tradition, from its roots in 13th century Persia to modern Pakistani cultural performances.",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Traditional Arts",
    author: "Dr. Amira Hassan",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/868cb7af-e9c9-4037-8fcb-8f15fbc2feb7-vpagpk-lovable-app/assets/images/maxresdefault-5.jpg",
    tags: ["Sufi", "History", "Spirituality"],
    featured: true
  },
  {
    id: 2,
    title: "Traditional Pakistani Wedding Dance Performances",
    excerpt: "Discover the vibrant world of Pakistani wedding celebrations and the essential dance performances that make these occasions truly memorable.",
    date: "March 12, 2024",
    readTime: "6 min read",
    category: "Wedding Culture",
    author: "Fatima Khan",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/868cb7af-e9c9-4037-8fcb-8f15fbc2feb7-vpagpk-lovable-app/assets/images/about-image-B8DwQPlU-2.jpg",
    tags: ["Weddings", "Culture", "Celebrations"]
  },
  {
    id: 3,
    title: "Cultural Significance of Folk Dances",
    excerpt: "Understanding how traditional Pakistani folk dances preserve cultural heritage and tell the stories of different regions across the country.",
    date: "March 10, 2024",
    readTime: "7 min read",
    category: "Folk Culture",
    author: "Ahmed Ali",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/868cb7af-e9c9-4037-8fcb-8f15fbc2feb7-vpagpk-lovable-app/assets/images/maxresdefault-4.jpg",
    tags: ["Folk Dance", "Heritage", "Regional"]
  },
  {
    id: 4,
    title: "Behind the Scenes: Preparing for Cultural Shows",
    excerpt: "Take an exclusive look at the intensive preparation, training, and dedication that goes into creating spectacular cultural dance performances.",
    date: "March 8, 2024",
    readTime: "5 min read",
    category: "Performance",
    author: "Zara Malik",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/868cb7af-e9c9-4037-8fcb-8f15fbc2feb7-vpagpk-lovable-app/assets/images/maxresdefault-3.jpg",
    tags: ["Performance", "Training", "Preparation"]
  },
  {
    id: 5,
    title: "The Art of Storytelling Through Dance",
    excerpt: "Learn how Pakistani dancers use movement, expression, and rhythm to narrate ancient tales and convey deep emotional stories.",
    date: "March 5, 2024",
    readTime: "9 min read",
    category: "Artistic Expression",
    author: "Sana Qureshi",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/868cb7af-e9c9-4037-8fcb-8f15fbc2feb7-vpagpk-lovable-app/assets/images/maxresdefault-8.jpg",
    tags: ["Storytelling", "Expression", "Art"]
  },
  {
    id: 6,
    title: "Preserving Pakistani Cultural Heritage",
    excerpt: "Exploring the vital role of cultural dance companies in maintaining and passing down Pakistan's rich artistic traditions to future generations.",
    date: "March 2, 2024",
    readTime: "6 min read",
    category: "Cultural Preservation",
    author: "Dr. Hassan Raza",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/868cb7af-e9c9-4037-8fcb-8f15fbc2feb7-vpagpk-lovable-app/assets/images/hero-background-CT38UIQE-1.jpg",
    tags: ["Heritage", "Preservation", "Education"]
  }
];

const categories = [
  "Traditional Arts",
  "Wedding Culture", 
  "Folk Culture",
  "Performance",
  "Artistic Expression",
  "Cultural Preservation"
];

const recentPosts = blogPosts.slice(0, 4);

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-background to-card">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-primary">
              Cultural Insights
            </h1>
            <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto">
              Discover the rich heritage, traditions, and stories behind Pakistani cultural dance through our expert insights and behind-the-scenes content.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input 
                placeholder="Search articles..." 
                className="pl-12 py-3 bg-card border-border text-foreground"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Featured Post */}
              {featuredPost && (
                <div className="mb-16">
                  <Badge className="mb-4 bg-primary text-primary-foreground">
                    Featured Article
                  </Badge>
                  <Card className="overflow-hidden border-border bg-card hover:shadow-xl transition-all duration-300">
                    <div className="relative h-80 overflow-hidden">
                      <Image
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary text-primary-foreground">
                          {featuredPost.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-8">
                      <h2 className="text-3xl font-bold mb-4 text-primary hover:text-secondary transition-colors duration-300">
                        {featuredPost.title}
                      </h2>
                      <p className="text-secondary mb-6 text-lg leading-relaxed">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between flex-wrap gap-4">
                        <div className="flex items-center gap-4 text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            <span className="text-sm">{featuredPost.author}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{featuredPost.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm">{featuredPost.readTime}</span>
                          </div>
                        </div>
                        <Button className="bg-primary text-primary-foreground hover:bg-secondary">
                          Read Article
                        </Button>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {featuredPost.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="border-primary text-primary">
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Regular Posts Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {regularPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden border-border bg-card hover:shadow-xl transition-all duration-300 group">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary text-primary-foreground text-xs">
                          {post.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-secondary transition-colors duration-300">
                        {post.title}
                      </h3>
                      <p className="text-secondary mb-4 text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                        <span>{post.author}</span>
                        <div className="flex items-center gap-3">
                          <span>{post.date}</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {post.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="border-primary text-primary text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center items-center gap-4">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Previous
                </Button>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-primary text-primary-foreground">1</Button>
                  <Button size="sm" variant="outline" className="border-border text-foreground hover:bg-primary hover:text-primary-foreground">2</Button>
                  <Button size="sm" variant="outline" className="border-border text-foreground hover:bg-primary hover:text-primary-foreground">3</Button>
                </div>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Next
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-32 space-y-8">
                {/* Categories */}
                <Card className="border-border bg-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-primary">Categories</h3>
                    <div className="space-y-2">
                      {categories.map((category, index) => (
                        <div key={index} className="flex items-center justify-between py-2 border-b border-border last:border-b-0">
                          <span className="text-foreground hover:text-primary cursor-pointer transition-colors duration-300">
                            {category}
                          </span>
                          <Badge variant="outline" className="border-primary text-primary">
                            {Math.floor(Math.random() * 5) + 1}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Posts */}
                <Card className="border-border bg-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-primary">Recent Posts</h3>
                    <div className="space-y-4">
                      {recentPosts.map((post) => (
                        <div key={post.id} className="flex gap-3 pb-4 border-b border-border last:border-b-0 group cursor-pointer">
                          <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2 mb-1">
                              {post.title}
                            </h4>
                            <p className="text-xs text-muted-foreground">{post.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter Signup */}
                <Card className="border-border bg-gradient-to-br from-primary/10 to-secondary/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-primary">Stay Updated</h3>
                    <p className="text-secondary mb-4 text-sm">
                      Get the latest cultural insights and dance stories delivered to your inbox.
                    </p>
                    <div className="space-y-3">
                      <Input 
                        placeholder="Your email address" 
                        className="bg-card border-border text-foreground"
                      />
                      <Button className="w-full bg-primary text-primary-foreground hover:bg-secondary">
                        Subscribe
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-3">
                      No spam, unsubscribe anytime.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}