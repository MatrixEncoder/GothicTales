import PageTransition from '@/components/PageTransition';
import { Story } from './page';

const stories: Record<string, Story> = {
  'blackwood-manor': {
    id: 'blackwood-manor',
    title: 'The Haunting of Blackwood Manor',
    date: '2024-01-15',
    author: 'Eleanor Blackwood',
    location: 'Yorkshire, England',
    content: `
      The Blackwood Manor has stood for over three centuries, its dark stone walls harboring secrets that have claimed countless lives. Built in 1687 by Lord Edmund Blackwood, the manor's history is steeped in tragedy and mystery.

      I first encountered the manor's malevolent presence in the winter of 2024. As a paranormal investigator, I'd heard countless stories about the property - the unexplained disappearances, the ghostly figures in windows, and the blood-curdling screams that echoed through the surrounding woods at midnight.

      The first sign that something was amiss came when we set up our equipment in the grand hall. Every device we had brought began malfunctioning simultaneously. The temperature dropped dramatically, falling from a mild 15°C to a bone-chilling -2°C in mere seconds.

      But it was in the library where we encountered the true horror of Blackwood Manor. The room, lined with ancient tomes and family portraits, held a presence so malevolent it defied description.
    `,
    readTime: '10 min',
    tags: ['Paranormal', 'Investigation', 'Historical'],
    images: [
      'https://images.unsplash.com/photo-1580537659466-0a9bfa916a54',
      'https://images.unsplash.com/photo-1504194104404-433180773017'
    ],
    relatedStories: ['asylum-whispers', 'red-room']
  },
  'red-room': {
    id: 'red-room',
    title: 'The Red Room Ritual',
    date: '2024-01-25',
    author: 'Victoria Cross',
    location: 'Undisclosed',
    content: `
      The red room was never meant to be discovered. Hidden deep within an abandoned Victorian mansion, its walls painted a disturbing shade of crimson that seemed to pulse with an otherworldly energy.

      Our team of researchers had been tracking urban legends about ritualistic spaces for months. We'd heard whispers, collected fragments of stories, but nothing could have prepared us for what we found that night.

      What happened next defies explanation. The candles' flames turned black, the mirror's surface began to ripple like water, and something started emerging from its depths.

      I'm sharing this story as a warning. The ritual worked, but not in the way I expected. Some doors, once opened, can never truly be closed again.

      If you value your sanity, your soul, never attempt the Red Room Ritual. What comes through the mirror will change you forever.
    `,
    readTime: '6 min',
    tags: ['Ritual', 'Urban Legend', 'Supernatural'],
    images: [
      'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5',
      'https://images.unsplash.com/photo-1513438205128-16af16280739'
    ],
    relatedStories: ['mirror-witch', 'blackwood-manor']
  },
  'asylum-whispers': {
    id: 'asylum-whispers',
    title: 'Whispers in the Asylum',
    date: '2024-01-20',
    author: 'Dr. James Thorne',
    location: 'Abandoned Psychiatric Hospital',
    content: `
      As a former psychiatric researcher, I've seen my share of disturbing cases. But nothing could have prepared me for the night I spent investigating the abandoned Ravenwood Asylum.

      The building stood as a testament to a darker era of mental health treatment. Crumbling walls, rusted medical equipment, and an oppressive silence that seemed to whisper of untold suffering.

      Our team set up recording equipment in what was once the main treatment ward. The moment we switched on the devices, something changed. The temperature plummeted, and a low, guttural moan echoed through the corridors.

      What we captured that night defied all scientific explanation. Voices, clear as day, speaking in fragments. Screams that seemed to come from nowhere and everywhere at once.
    `,
    readTime: '8 min',
    tags: ['Psychological', 'Horror', 'Mystery'],
    images: [
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7',
      'https://images.unsplash.com/photo-1517263904808-5dc91e3e7044'
    ],
    relatedStories: ['blackwood-manor', 'midnight-train']
  }
};

export default function StoriesClientPage({ story }: { story: Story }) {
  return (
    <PageTransition>
      <main className="min-h-screen gothic-container py-24">
        <article className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="gothic-heading mb-4">{story.title}</h1>
            <div className="flex flex-wrap justify-center items-center gap-4 text-gothic-400 mb-8">
              <span>{story.date}</span>
              <span>•</span>
              <span>By {story.author}</span>
              <span>•</span>
              <span>{story.location}</span>
              {story.readTime && (
                <>
                  <span>•</span>
                  <span>{story.readTime} read</span>
                </>
              )}
            </div>
          </div>

          <div className="prose prose-invert prose-red max-w-none">
            {story.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gothic-300 mb-4">
                {paragraph.trim()}
              </p>
            ))}
          </div>

          {story.images && story.images.length > 0 && (
            <div className="mt-12 pt-8 border-t border-red-900/20">
              <h2 className="text-2xl font-gothic text-red-500 mb-4">Images</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {story.images.map((image, index) => (
                  <img 
                    key={index} 
                    src={image} 
                    alt={`Story image ${index + 1}`} 
                    className="rounded-lg"
                  />
                ))}
              </div>
            </div>
          )}

          {story.tags && story.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-red-900/20">
              <h2 className="text-2xl font-gothic text-red-500 mb-4">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {story.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-gothic-900/50 text-gothic-300 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {story.relatedStories && story.relatedStories.length > 0 && (
            <div className="mt-12 pt-8 border-t border-red-900/20">
              <h2 className="text-2xl font-gothic text-red-500 mb-4">Related Stories</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {story.relatedStories.filter(relatedId => stories[relatedId]).map((relatedId) => {
                  const relatedStory = stories[relatedId];
                  return (
                    <a
                      key={relatedId}
                      href={`/stories/${relatedId}`}
                      className="bg-gothic-900/50 p-6 rounded-lg border border-red-900/20 hover:border-red-500/50 transition-all block"
                    >
                      <h3 className="text-xl font-gothic text-red-500 mb-2">
                        {relatedStory.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gothic-400 mb-2">
                        <span>{relatedStory.date}</span>
                        <span>•</span>
                        <span>By {relatedStory.author}</span>
                      </div>
                      <p className="text-gothic-400 text-sm">
                        {relatedStory.content.split('\n')[0].slice(0, 100)}...
                      </p>
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </article>
      </main>
    </PageTransition>
  );
}
