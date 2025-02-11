import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ClientPage from './ClientPage';

export interface Legend {
  title: string;
  origin: string;
  type: string;
  riskLevel: string;
  content: string;
  images: Array<{ src: string; alt: string; caption: string; year: string; credit: string; }>;
}

const legendProfiles: Record<string, Legend> = {
  'bloody-mary': {
    title: 'Bloody Mary',
    origin: 'Western Folklore',
    type: 'Urban Legend',
    riskLevel: 'High',
    content: `The Bloody Mary legend is a chilling urban myth that has haunted generations. The ritual involves standing in a darkened bathroom, facing a mirror, and repeating "Bloody Mary" three times. According to folklore, this summons a malevolent spirit - a ghostly woman with a horrifically disfigured face who appears in the mirror.

    The origins of this legend trace back to various historical and cultural interpretations. Some link her to Mary I of England, known as "Bloody Mary" for her brutal persecution of Protestants. Others connect her to folklore about vengeful female spirits seeking retribution.

    Teenagers and paranormal enthusiasts have long been fascinated by this ritual, testing their courage by attempting to invoke the spirit. Many report terrifying experiences: sudden temperature drops, ghostly apparitions, scratching sounds, or even physical attacks.

    Psychologists suggest the legend plays on primal fears of the unknown and the power of suggestion, especially in dark, confined spaces like bathrooms. The human mind, when primed with expectation and fear, can create incredibly vivid and terrifying hallucinations.`,
    images: [
      {
        src: 'https://images.unsplash.com/photo-1616248249518-0aeacf4a6bc2',
        alt: 'Haunting Mirror Reflection',
        caption: 'The Bloody Mary Mirror Ritual',
        year: '2021',
        credit: 'Unsplash Photography'
      },
      {
        src: 'https://images.unsplash.com/photo-1519974719765-e6559eac2575',
        alt: 'Dark Bathroom Mirror',
        caption: 'Darkness Breeds Legends',
        year: '2019',
        credit: 'Horror Photography Collection'
      }
    ]
  },
  'slender-man': {
    title: 'Slender Man',
    origin: 'Internet Folklore',
    type: 'Modern Myth',
    riskLevel: 'Unknown',
    content: `Slender Man represents a unique phenomenon in modern mythology - a creature born entirely from internet culture and collective digital imagination. First created in a 2009 Photoshop contest, this faceless, unnaturally tall figure quickly transcended its origins to become a global urban legend.

    Typically depicted as an impossibly thin humanoid in a black suit, Slender Man is said to stalk and abduct children, particularly in forested areas. His most distinctive features are his lack of facial features and tentacle-like appendages that can extend at will.

    The legend gained significant mainstream attention in 2014 when two 12-year-old girls in Wisconsin claimed Slender Man inspired them to attempt murder, blurring the lines between digital folklore and real-world horror.

    Psychologists and folklorists view Slender Man as a modern manifestation of ancient archetypes - the unknown predator, the incomprehensible threat that lurks just beyond human understanding. His viral spread demonstrates how quickly narratives can evolve in the digital age.`,
    images: [
      {
        src: 'https://images.unsplash.com/photo-1623018035782-b8ede5a8eebc',
        alt: 'Shadowy Forest Figure',
        caption: 'The Slender Silhouette',
        year: '2020',
        credit: 'Creepy Landscape Photography'
      },
      {
        src: 'https://images.unsplash.com/photo-1533577180227-46c487ddab58',
        alt: 'Misty Dark Woods',
        caption: 'Where Legends Dwell',
        year: '2018',
        credit: 'Mysterious Landscapes'
      }
    ]
  },
  'wendigo': {
    title: 'The Wendigo',
    origin: 'Native American Mythology',
    type: 'Ancient Legend',
    riskLevel: 'Extreme',
    content: `The Wendigo is a terrifying creature from Algonquian-speaking First Nations folklore, representing the ultimate taboo of cannibalism and spiritual corruption. In traditional stories, a Wendigo is a human transformed by extreme hunger into a monstrous, cannibalistic spirit.

    According to Cree and Ojibwe legends, a person becomes a Wendigo after consuming human flesh, even in desperate survival situations. The transformation is both physical and spiritual - the individual grows to monstrous size, develops an insatiable hunger, and loses all semblance of humanity.

    Physically described as gaunt, emaciated creatures with grey or ashen skin, sharp teeth, and an elongated body, Wendigos embody the harsh realities of survival in the unforgiving wilderness of North America. They represent a profound moral warning about the dangers of losing one's humanity.

    Modern interpretations have expanded the Wendigo from a literal monster to a metaphorical representation of destructive human impulses: greed, overconsumption, and the potential for evil that exists within everyone.`,
    images: [
      {
        src: 'https://images.unsplash.com/photo-1518984889878-478f24c14230',
        alt: 'Skeletal Forest Creature',
        caption: 'The Hunger of the Wendigo',
        year: '2022',
        credit: 'Mythological Creatures Photography'
      },
      {
        src: 'https://images.unsplash.com/photo-1610337673931-c5de2da0a4f0',
        alt: 'Dark Wilderness Scene',
        caption: 'Wilderness of Legends',
        year: '2020',
        credit: 'Mythic Landscapes'
      }
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(legendProfiles).map((id) => ({ id }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const legend = legendProfiles[params.id];
  
  return {
    title: legend ? `${legend.title} | Gothic Tales` : 'Legend Not Found',
    description: legend ? legend.content.substring(0, 160) : 'Legend details not available'
  };
}

export default function Page({ params }: { params: { id: string } }) {
  const legend = legendProfiles[params.id];

  if (!legend) {
    notFound();
  }

  return <ClientPage legend={legend} />;
}
