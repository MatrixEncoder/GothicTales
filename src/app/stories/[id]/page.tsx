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
  },
  'midnight-train': {
    id: 'midnight-train',
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

  if (!story) {
    return null;
  }

  return <StoriesClientPage story={story} />;
}
