import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

export async function generateStaticParams() {
  const legendsDirectory = path.join(process.cwd(), 'src/content/legends');
  const filenames = fs.readdirSync(legendsDirectory)
    .filter(filename => filename.endsWith('.mdx') || filename.endsWith('.md'));

  return filenames.map((filename) => ({
    slug: filename.replace(/\.(mdx|md)$/, ''),
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const filePath = path.join(process.cwd(), `src/content/legends/${params.slug}.md`);
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      title: data.title || 'Untitled Legend',
      description: data.description || 'A dark legend from the archives',
    };
  } catch (error) {
    return {
      title: 'Legend Not Found',
      description: 'A dark legend from the archives',
    };
  }
}

export default function LegendPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), `src/content/legends/${slug}.md`);

  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return (
      <main className="container mx-auto px-4 py-16 max-w-2xl">
        <div className="relative gothic-container">
          <h1 
            className="text-4xl font-nosifer text-red-500 mb-8 text-center"
            style={{
              textShadow: `
                0 0 5px #FF0000,
                0 0 10px #FF0000,
                0 0 15px #FF0000
              `,
              WebkitTextStroke: '1px #8B0000'
            }}
          >
            {data.title || 'Untitled Legend'}
          </h1>
          
          <div className="prose prose-invert font-creepster text-lg bg-gothic-900/50 p-8 rounded-lg border border-red-900/20">
            <ReactMarkdown 
              components={{
                p: ({node, ...props}) => <p className="mb-4 text-gothic-300" {...props} />,
                h2: ({node, ...props}) => <h2 className="text-2xl font-nosifer text-red-500 mt-8 mb-4" {...props} />,
                a: ({node, ...props}) => <a className="text-red-500 hover:text-red-400 underline" {...props} />
              }}
            >
              {data.content || content}
            </ReactMarkdown>
          </div>

          <div className="mt-8 text-center">
            <Link 
              href="/legend" 
              className="inline-block px-6 py-3 bg-red-900/20 hover:bg-red-900/30 text-red-500 border border-red-900/40 rounded-lg transition-colors font-nosifer tracking-wider"
            >
              Back to Legends
            </Link>
          </div>
        </div>
      </main>
    );
  } catch (error) {
    notFound();
  }
}
