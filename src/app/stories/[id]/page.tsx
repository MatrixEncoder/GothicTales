<<<<<<< HEAD
import { Metadata } from 'next';
import StoriesClientPage from './StoriesClientPage';

export interface Story {
  id: string;
  title: string;
  date: string;
  author: string;
  location: string;
  content: string;
  readTime?: string;
  tags?: string[];
  images?: string[];
  relatedStories?: string[];
}

const stories: Record<string, Story> = {
  'blackwood-manor': {
    id: 'blackwood-manor',
=======
'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import PageTransition from '@/components/PageTransition';

// This would typically come from a database, but we'll hardcode it for now
const stories = {
  'blackwood-manor': {
>>>>>>> b4da9516081393239a60beba36b2d532c61d4551
    title: 'The Haunting of Blackwood Manor',
    date: '2024-01-15',
    author: 'Eleanor Blackwood',
    location: 'Yorkshire, England',
    content: `
      The Blackwood Manor has stood for over three centuries, its dark stone walls harboring secrets that have claimed countless lives. Built in 1687 by Lord Edmund Blackwood, the manor's history is steeped in tragedy and mystery.

      I first encountered the manor's malevolent presence in the winter of 2024. As a paranormal investigator, I'd heard countless stories about the property - the unexplained disappearances, the ghostly figures in windows, and the blood-curdling screams that echoed through the surrounding woods at midnight.

      The first sign that something was amiss came when we set up our equipment in the grand hall. Every device we had brought began malfunctioning simultaneously. The temperature dropped dramatically, falling from a mild 15°C to a bone-chilling -2°C in mere seconds.

<<<<<<< HEAD
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
=======
      But it was in the library where we encountered the true horror of Blackwood Manor. The room, lined with ancient tomes and family portraits, held a presence so malevolent it defied description. As we conducted our EVP session, a voice, clear as day, came through our equipment: "You're all going to die here, just like the others."

      What followed was a night of pure terror. Books flew from shelves with devastating force. Invisible hands clawed at our clothes and skin. The portraits on the walls seemed to follow our every move, their eyes gleaming with an unholy light.

      The most disturbing discovery came when we accessed the manor's sealed records. Lord Edmund Blackwood hadn't merely built a home - he had constructed a gateway. The manor's very architecture was designed to amplify supernatural energies, creating a bridge between our world and something far darker.

      We barely escaped with our lives that night, but the manor's influence followed us. Each member of our team has been plagued by nightmares ever since. Some claim to see shadowy figures standing at the foot of their beds. Others hear whispers in empty rooms.

      The Blackwood Manor still stands today, its dark windows staring out like hollow eyes across the Yorkshire countryside. It waits, patient and hungry, for its next visitors. But my advice to anyone intrigued by its mysteries is simple: stay away. Some doors, once opened, can never truly be closed again.
    `,
    images: [
      'https://images.unsplash.com/photo-1509732344073-6d7dfd01b7a2',  // Gothic mansion exterior
      'https://images.unsplash.com/photo-1580537659466-0a9bfa916a54',  // Antique library
      'https://images.unsplash.com/photo-1504194104404-433180773017'   // Misty figure
    ],
    relatedStories: [
      'asylum-whispers',
      'red-room'
    ]
  },
  'asylum-whispers': {
    title: 'Whispers in the Asylum',
    date: '2024-01-20',
    author: 'Dr. James Thorne',
    location: 'Ravencrest Psychiatric Hospital, Massachusetts',
    content: `
      The Ravencrest Psychiatric Hospital closed its doors in 1985 after a series of mysterious patient deaths. As a psychiatric historian, I've spent years documenting the facility's troubled past. But nothing could have prepared me for what I discovered during my last visit.

      The hospital's records spoke of experimental treatments, unauthorized procedures, and patients who simply vanished without explanation. But it was the basement level that held the institution's darkest secrets.

      During my investigation, I discovered a hidden ward that didn't appear on any official blueprints. The walls were covered in strange symbols, and patient records described "successful conversions" rather than treatments.

      The most chilling evidence came from recovered audio recordings. The patients weren't just suffering from mental illness - something was systematically breaking their minds, preparing them for something inhuman.

      I still hear the whispers sometimes, echoing in my dreams. They speak of a grand design, a transformation that was never completed. Perhaps it's better that way.
    `,
    images: [
      'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f',  // Abandoned asylum
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7',  // Hospital ward
      'https://images.unsplash.com/photo-1517263904808-5dc91e3e7044'   // Dark basement
    ],
    relatedStories: [
      'blackwood-manor',
      'midnight-train'
    ]
  },
  'red-room': {
>>>>>>> b4da9516081393239a60beba36b2d532c61d4551
    title: 'The Red Room Ritual',
    date: '2024-01-25',
    author: 'Victoria Cross',
    location: 'Undisclosed',
    content: `
<<<<<<< HEAD
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
  },
  'midnight-train': {
    id: 'midnight-train',
=======
      I found the ritual described in an ancient grimoire, its pages stained with what I later discovered was blood. The instructions were specific: perform the ceremony at midnight, during a new moon, in a room painted completely red.

      The ritual required five red candles, a mirror, and a personal sacrifice - something of significant emotional value. I chose my grandmother's locket, the last thing she gave me before she passed.

      What happened next defies explanation. The candles' flames turned black, the mirror's surface began to ripple like water, and something started emerging from its depths.

      I'm sharing this story as a warning. The ritual worked, but not in the way I expected. Some doors should remain closed, some knowledge should stay buried.

      If you value your sanity, your soul, never attempt the Red Room Ritual. What comes through the mirror will change you forever.
    `,
    images: [
      'https://images.unsplash.com/photo-1534329539061-64caeb388c42',  // Red room
      'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5',  // Ritual mirror
      'https://images.unsplash.com/photo-1513438205128-16af16280739'   // Black candles
    ],
    relatedStories: [
      'mirror-witch',
      'blackwood-manor'
    ]
  },
  'midnight-train': {
>>>>>>> b4da9516081393239a60beba36b2d532c61d4551
    title: 'The Midnight Train',
    date: '2024-01-30',
    author: 'Thomas Night',
    location: 'Chicago Underground',
    content: `
      It was just another late night on the Chicago L train, or so I thought. The train that pulled into the station at exactly midnight wasn't on any schedule I'd ever seen.

      The cars were vintage, possibly from the 1940s, and completely empty except for a single passenger - a woman in period dress who never turned to face me.

      As we traveled, I noticed we weren't stopping at any regular stations. The tunnels grew darker, the air colder. That's when I realized the woman had no reflection in the windows.

      I later learned about other sightings of the Midnight Train, always appearing at exactly 12:00 AM, always with the same mysterious passenger. Those who board rarely return, and those who do are never quite the same.
    `,
    images: [
<<<<<<< HEAD
      'https://images.unsplash.com/photo-1474487548417-781cb71495f3',
      'https://images.unsplash.com/photo-1572072393749-3ca9c8ea0831',
      'https://images.unsplash.com/photo-1541447271487-09612b3f49f7'
    ],
    readTime: '7 min',
    tags: ['Paranormal', 'Mystery', 'Urban Legend'],
    relatedStories: ['asylum-whispers', 'mirror-witch']
  },
  'mirror-witch': {
    id: 'mirror-witch',
=======
      'https://images.unsplash.com/photo-1474487548417-781cb71495f3',  // Old train
      'https://images.unsplash.com/photo-1572072393749-3ca9c8ea0831',  // Foggy platform
      'https://images.unsplash.com/photo-1541447271487-09612b3f49f7'   // Dark tunnel
    ],
    relatedStories: [
      'asylum-whispers',
      'mirror-witch'
    ]
  },
  'mirror-witch': {
>>>>>>> b4da9516081393239a60beba36b2d532c61d4551
    title: 'The Mirror Witch of New Orleans',
    date: '2024-02-01',
    author: 'Marie Laveau II',
    location: 'New Orleans, Louisiana',
    content: `
      In the French Quarter of New Orleans, there's an antique shop that sells mirrors with dark histories. The owner told me about a particular ritual involving these mirrors - a way to contact what she called the Mirror Witch.

      The ritual seemed simple enough: light three black candles, speak her name three times while looking into an antique mirror, and offer a drop of blood.

      What manifested in that mirror wasn't just a reflection - it was something ancient, something that had been waiting to be called. The Mirror Witch offers knowledge, but her price is always more than you're prepared to pay.

      I'm still dealing with the consequences of that night. Sometimes, when I pass by mirrors, I see her watching me, waiting for me to make another deal.
    `,
    images: [
<<<<<<< HEAD
      'https://images.unsplash.com/photo-1582582494705-f8ce0b0c24f0',
      'https://images.unsplash.com/photo-1515263487990-61b07816b324',
      'https://images.unsplash.com/photo-1549965738-e1aaf1168943'
    ],
    readTime: '8 min',
    tags: ['Supernatural', 'Ritual', 'Mystery'],
    relatedStories: ['red-room', 'midnight-train']
  }
};

export function generateStaticParams() {
  return Object.keys(stories).map((id) => ({ id }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const story = stories[params.id];
  
  return {
    title: story ? `${story.title} | Gothic Tales` : 'Story Not Found',
    description: story ? story.content.substring(0, 160) : 'Story details not available'
  };
}

export default function Page({ params }: { params: { id: string } }) {
  const story = stories[params.id];
=======
      'https://images.unsplash.com/photo-1582582494705-f8ce0b0c24f0',  // Antique mirror
      'https://images.unsplash.com/photo-1515263487990-61b07816b324',  // Mysterious reflection
      'https://images.unsplash.com/photo-1549965738-e1aaf1168943'   // French Quarter
    ],
    relatedStories: [
      'red-room',
      'midnight-train'
    ]
  }
};

export default function StoryPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const story = stories[params.id as keyof typeof stories];

  useEffect(() => {
    if (!story) {
      router.push('/stories');
    }
  }, [story, router]);
>>>>>>> b4da9516081393239a60beba36b2d532c61d4551

  if (!story) {
    return null;
  }

<<<<<<< HEAD
  return <StoriesClientPage story={story} />;
=======
  return (
    <PageTransition>
      <main className="min-h-screen gothic-container py-24">
        <article className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="gothic-heading text-center mb-4">{story.title}</h1>
            <div className="flex justify-center items-center space-x-4 text-gothic-400 mb-8">
              <span>{story.date}</span>
              <span>•</span>
              <span>{story.author}</span>
              <span>•</span>
              <span>{story.location}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert prose-red max-w-none"
          >
            {story.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gothic-300 mb-4">
                {paragraph.trim()}
              </p>
            ))}
          </motion.div>

          {story.relatedStories && story.relatedStories.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-12 pt-8 border-t border-red-900/20"
            >
              <h2 className="text-2xl font-gothic text-red-500 mb-4">Related Stories</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {story.relatedStories.map((relatedId) => {
                  const relatedStory = stories[relatedId as keyof typeof stories];
                  return (
                    <motion.div
                      key={relatedId}
                      whileHover={{ scale: 1.02 }}
                      className="bg-gothic-900/50 p-6 rounded-lg border border-red-900/20 cursor-pointer"
                      onClick={() => router.push(`/stories/${relatedId}`)}
                    >
                      <h3 className="text-xl font-gothic text-red-500 mb-2">
                        {relatedStory.title}
                      </h3>
                      <p className="text-gothic-400 text-sm">
                        {relatedStory.content.split('\n')[0].slice(0, 100)}...
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </article>
      </main>
    </PageTransition>
  );
>>>>>>> b4da9516081393239a60beba36b2d532c61d4551
}
