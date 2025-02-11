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

export const stories: Record<string, Story> = {
  'blackwood-manor': {
    id: 'blackwood-manor',
    title: 'The Haunting of Blackwood Manor',
    date: '2024-01-15',
    author: 'Eleanor Blackwood',
    location: 'Yorkshire, England',
    content: `The Blackwood Manor has stood for over three centuries, its dark stone walls harboring secrets that have claimed countless lives. Built in 1687 by Lord Edmund Blackwood, the manor's history is steeped in tragedy and mystery.

    I first encountered the manor's malevolent presence in the winter of 2024. As a paranormal investigator, I'd heard countless stories about the property - the unexplained disappearances, the ghostly figures in windows, and the blood-curdling screams that echoed through the surrounding woods at midnight.

    The first sign that something was amiss came when we set up our equipment in the grand hall. Every device we had brought began malfunctioning simultaneously. The temperature dropped dramatically, falling from a mild 15°C to a bone-chilling -2°C in mere seconds.

    But it was in the library where we encountered the true horror of Blackwood Manor. The room, lined with ancient tomes and family portraits, held a presence so malevolent it defied description.`,
    readTime: '15 min',
    tags: ['Paranormal', 'Investigation', 'Historical', 'Haunted Location'],
    images: [
      'https://images.unsplash.com/photo-1580537659466-0a9bfa916a54',
      'https://images.unsplash.com/photo-1504194104404-433180773017',
      'https://images.unsplash.com/photo-1474487548417-3ca9c8ea0831',
      'https://images.unsplash.com/photo-1572072393749-3ca9c8ea0831',
      'https://images.unsplash.com/photo-1541447271487-09612b3f49f7'
    ],
    relatedStories: ['red-room', 'asylum-whispers']
  },
  'red-room': {
    id: 'red-room',
    title: 'The Red Room Ritual',
    date: '2024-01-25',
    author: 'Victoria Cross',
    location: 'Undisclosed',
    content: `The red room was never meant to be discovered. Hidden deep within an abandoned Victorian mansion, its walls painted a disturbing shade of crimson that seemed to pulse with an otherworldly energy.

    Our team of researchers had been tracking urban legends about ritualistic spaces for months. We'd heard whispers, collected fragments of stories, but nothing could have prepared us for what we found that night.

    What happened next defies explanation. The candles' flames turned black, the mirror's surface began to ripple like water, and something started emerging from its depths.

    I'm sharing this story as a warning. The ritual worked, but not in the way I expected. Some doors, once opened, can never truly be closed again.

    If you value your sanity, your soul, never attempt the Red Room Ritual. What comes through the mirror will change you forever.`,
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
    content: `As a former psychiatric researcher, I've seen my share of disturbing cases. But nothing could have prepared me for the night I spent investigating the abandoned Ravenwood Asylum.

    The building stood as a testament to a darker era of mental health treatment. Crumbling walls, rusted medical equipment, and an oppressive silence that seemed to whisper of untold suffering.

    Our team set up recording equipment in what was once the main treatment ward. The moment we switched on the devices, something changed. The temperature plummeted, and a low, guttural moan echoed through the corridors.

    What we captured that night defied all scientific explanation. Voices, clear as day, speaking in fragments. Screams that seemed to come from nowhere and everywhere at once.`,
    readTime: '8 min',
    tags: ['Psychological', 'Horror', 'Mystery'],
    images: [
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7',
      'https://images.unsplash.com/photo-1517263904808-5dc91e3e7044'
    ],
    relatedStories: ['blackwood-manor', 'midnight-train']
  }
};
