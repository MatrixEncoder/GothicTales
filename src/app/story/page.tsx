import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Haunting Stories',
  description: 'Explore the dark tales that send shivers down your spine'
};

export default function StoriesPage() {
  const storiesDirectory = path.join(process.cwd(), 'src/content/stories');
  
  let stories: Array<{
    title: string;
    description: string;
    slug: string;
  }> = [];

  try {
    const filenames = fs.readdirSync(storiesDirectory)
      .filter(filename => filename.endsWith('.md'));
    
    stories = filenames.map((filename) => {
      const filePath = path.join(storiesDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);
      return {
        title: data.title || 'Untitled',
        description: data.description || 'No description available',
        slug: filename.replace(/\.md$/, '')
      };
    });
  } catch (error) {
    console.error('Error reading stories directory:', error);
  }

  return (
    <main className="min-h-screen gothic-container py-24">
      <div className="relative mt-16">
        <h1 
          className="title-container text-center mb-2 text-6xl font-gothic tracking-wider leading-relaxed absolute inset-0 z-20"
          style={{
            color: '#FF0000', 
            textShadow: `
              0 0 5px #FF0000,
              0 0 10px #FF0000,
              0 0 15px #FF0000
            `,
            WebkitTextStroke: '1px #8B0000',
            fontFamily: 'var(--font-nosifer)',
            opacity: 1,
            display: 'block',
            position: 'relative',
            transform: 'translateZ(0)',
            willChange: 'opacity, transform',
            whiteSpace: 'nowrap',
            wordWrap: 'normal',
            overflow: 'visible'
          }}
        >
          Haunting Stories
        </h1>

        <h1 className="gothic-heading text-center mb-4">Dark Tales</h1>
        <p className="text-center text-gothic-300 text-lg mb-12">
          Explore the stories that lurk in the shadows
        </p>

        <section 
          className="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto"
        >
          {stories.map((story) => (
            <article
              key={story.slug}
              className="bg-gothic-900/50 p-6 rounded-lg border border-red-900/20 hover:border-red-900/40 transition-colors"
            >
              <Link href={`/story/${story.slug}`} className="block group">
                <h3 className="text-xl font-nosifer text-red-500 group-hover:text-red-400 transition-colors mb-2">
                  {story.title}
                </h3>
                <p className="text-gothic-400 font-creepster tracking-wider">
                  {story.description}
                </p>
              </Link>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
