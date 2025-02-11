import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const metadata: Metadata = {
  title: 'Gothic Tales',
  description: 'Explore the darkest stories, legends, and profiles that haunt our collective nightmares'
};

const storiesDirectory = path.join(process.cwd(), 'src/content/stories');
  
const featuredStories = fs.readdirSync(storiesDirectory)
  .filter(filename => filename.endsWith('.md'))
  .map(filename => {
    const filePath = path.join(storiesDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    return {
      title: data.title || filename.replace('.md', '').replace(/-/g, ' '),
      excerpt: data.description || 'A haunting tale from the archives...',
      link: `/story/${filename.replace('.md', '')}`
    };
  });

export default function Home() {
  return (
    <main className="min-h-screen gothic-container py-16">
      <div className="relative w-full flex justify-center mb-16">
        <h1 
          className="gothic-heading text-center mb-8 text-6xl font-extrabold tracking-wider z-50 font-nosifer mt-24"
          style={{
            color: '#FF0000', 
            textShadow: `
              0 0 5px #FF0000,
              0 0 10px #FF0000,
              0 0 15px #FF0000
            `,
            WebkitTextStroke: '1px #8B0000',
            fontFamily: 'var(--font-nosifer)'
          }}
        >
          Welcome to Gothic Tales
        </h1>
      </div>

      <section className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-full text-center mb-12">
          <p className="text-gothic-300 text-xl max-w-2xl mx-auto">
            Dive into the shadows of human darkness. Explore haunting stories, sinister legends, and the most infamous killers in history.
          </p>
        </div>

        <div className="gothic-card bg-gothic-900/50 p-6 rounded-lg border border-red-900/20 hover:border-red-900/40 transition-colors">
          <Link href="/story" className="block group">
            <h2 className="text-2xl font-nosifer text-red-500 group-hover:text-red-400 transition-colors mb-4">
              Haunting Stories
            </h2>
            <p className="text-gothic-400 font-creepster tracking-wider">
              Immerse yourself in dark narratives that will chill your soul
            </p>
          </Link>
        </div>

        <div className="gothic-card bg-gothic-900/50 p-6 rounded-lg border border-red-900/20 hover:border-red-900/40 transition-colors">
          <Link href="/legend" className="block group">
            <h2 className="text-2xl font-nosifer text-red-500 group-hover:text-red-400 transition-colors mb-4">
              Dark Legends
            </h2>
            <p className="text-gothic-400 font-creepster tracking-wider">
              Uncover myths that have haunted generations
            </p>
          </Link>
        </div>

        <div className="gothic-card bg-gothic-900/50 p-6 rounded-lg border border-red-900/20 hover:border-red-900/40 transition-colors">
          <Link href="/killer" className="block group">
            <h2 className="text-2xl font-nosifer text-red-500 group-hover:text-red-400 transition-colors mb-4">
              Dark Profiles
            </h2>
            <p className="text-gothic-400 font-creepster tracking-wider">
              Explore the most infamous killers in history
            </p>
          </Link>
        </div>

        {featuredStories.length > 0 && (
          <div className="col-span-full mt-12">
            <h2 className="text-3xl font-nosifer text-red-500 text-center mb-8">
              Featured Stories
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredStories.map((story) => (
                <article 
                  key={story.title}
                  className="bg-gothic-900/50 p-6 rounded-lg border border-red-900/20 hover:border-red-900/40 transition-colors"
                >
                  <Link href={story.link} className="block group">
                    <h3 className="text-xl font-nosifer text-red-500 group-hover:text-red-400 transition-colors mb-2">
                      {story.title}
                    </h3>
                    <p className="text-gothic-400 font-creepster tracking-wider">
                      {story.excerpt}
                    </p>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
