<<<<<<< HEAD
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
=======
'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import PageTransition from '@/components/PageTransition';
import HistoricalImage from '@/components/HistoricalImage';

const legendProfiles = {
>>>>>>> b4da9516081393239a60beba36b2d532c61d4551
  'bloody-mary': {
    title: 'Bloody Mary',
    origin: 'Western Folklore',
    type: 'Urban Legend',
    riskLevel: 'High',
<<<<<<< HEAD
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
=======
    images: [
      {
        src: 'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5',
        alt: 'Antique Mirror',
        caption: 'Traditional mirror used in the Bloody Mary ritual',
        year: '2020',
        credit: 'Unsplash'
      },
      {
        src: 'https://images.unsplash.com/photo-1582582494705-f8ce0b0c24f0',
        alt: 'Dark Room Mirror',
        caption: 'Setting for the Bloody Mary ritual',
        year: '2021',
        credit: 'Unsplash'
      }
    ],
    content: `
      The Bloody Mary legend is one of the most enduring and widespread mirror-based rituals in modern folklore. The basic ritual involves standing in a darkened room with a mirror, illuminated only by candlelight, and calling out "Bloody Mary" three times. According to legend, this summons the vengeful spirit of Bloody Mary, who may appear in the mirror with devastating consequences.

      The origins of this legend are complex and intertwined with various historical figures. Some link it to Queen Mary I of England, nicknamed "Bloody Mary" for her persecution of Protestants. Others connect it to the infamous Elizabeth Báthory, who allegedly bathed in the blood of young women to maintain her youth.

      The ritual has several variations. Some versions require spinning while chanting, others specify exact times (often midnight or 3 AM). The consequences of summoning Bloody Mary also vary by region and telling: from simple appearances to violent attacks, from prophecies of the future to deadly curses.

      What makes this legend particularly fascinating is its persistence in modern culture. Despite our technological advancement, this simple mirror ritual continues to captivate and terrify new generations. Psychologists suggest this may be due to the power of self-suggestion and the natural human tendency to see patterns in darkness, especially when stressed or afraid.

      WARNING: This ritual should not be attempted. Many participants report severe psychological distress, and there are documented cases of accidental injuries occurring during attempts to perform the ritual.
    `,
    relatedLegends: ['black-eyed-children', 'banshee']
  },
  'slender-man': {
    title: 'Slender Man',
    origin: 'Internet Culture',
    type: 'Modern Myth',
    riskLevel: 'Unknown',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1477332552946-cfb384aeaf1c',
        alt: 'Dark Forest',
        caption: 'The eerie forests where Slender Man is said to appear',
        year: '2009',
        credit: 'Unsplash'
      },
      {
        src: 'https://images.unsplash.com/photo-1511497584788-876760111969',
        alt: 'Misty Woods',
        caption: 'Mysterious fog-filled woods associated with Slender Man sightings',
        year: '2010',
        credit: 'Unsplash'
      }
    ],
    content: `
      Slender Man represents a unique phenomenon in modern folklore: a completely digital origin that transcended into real-world belief. Created in 2009 by Eric Knudsen (aka Victor Surge) on the Something Awful forums, this tall, faceless figure in a black suit quickly captured the internet's imagination.

      The basic description of Slender Man is consistent across most tellings: an unnaturally tall, thin humanoid figure wearing a black suit. His face is completely blank, white, and featureless. He often appears in photographs stalking children, and is said to have multiple tentacle-like appendages that can extend from his back.

      What makes Slender Man particularly interesting is how quickly the legend evolved and spread. Through collaborative storytelling on various websites, the mythology grew to include specific behaviors and powers: the ability to cause memory loss, induce coughing fits ("slender sickness"), and manipulate electronic devices.

      The impact of this legend has been profound, demonstrating how modern technology can create and spread new folklore at unprecedented speeds. The legend has inspired numerous games, films, and stories, but also sparked serious discussions about the power of internet-driven belief systems.

      WARNING: While Slender Man is a documented work of fiction, the psychological impact of this legend should not be underestimated. There have been real-world incidents where individuals, particularly young people, have acted dangerously based on their belief in this entity.
    `,
    relatedLegends: ['black-eyed-children', 'wendigo']
  },
  'wendigo': {
    title: 'The Wendigo',
    origin: 'Native American',
    type: 'Ancient Legend',
    riskLevel: 'Extreme',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22',
        alt: 'Winter Forest',
        caption: 'The desolate winter environments where Wendigo legends originated',
        year: '2015',
        credit: 'Unsplash'
      },
      {
        src: 'https://images.unsplash.com/photo-1485201543483-f06c8d2a8fb4',
        alt: 'Dark Woods',
        caption: 'The haunting wilderness of Wendigo territory',
        year: '2019',
        credit: 'Unsplash'
      }
    ],
    content: `
      The Wendigo is one of the most terrifying creatures in Native American mythology, particularly among the Algonquian-speaking peoples of the northern United States and Canada. This creature embodies the desperation and horror of winter starvation, representing both a physical monster and a psychological malady.

      According to legend, the Wendigo is created when a human resorts to cannibalism to survive harsh winter conditions. The person then transforms into a massive, gaunt creature with an insatiable hunger for human flesh. The more it eats, the hungrier it becomes, and the larger it grows, ensuring it can never be satisfied.

      Physical descriptions of the Wendigo vary, but common elements include: enormous height (often 15 feet or more), emaciated appearance, glowing eyes, yellowed fangs, and the lingering smell of decay. Some versions describe it with characteristics of deer or wolf, while others portray it as more humanoid but with grotesquely stretched features.

      The psychological aspect of the Wendigo legend is equally important. "Wendigo psychosis" was documented by anthropologists as a culture-bound syndrome where individuals would experience an overwhelming desire to eat human flesh, even when other food was available. This connection between the supernatural and psychological aspects of the legend makes it particularly compelling.

      WARNING: The Wendigo legend remains sacred to many Native American communities. Treat these stories with respect and be aware that some traditional elders warn against speaking too much about the Wendigo, as this may attract its attention.
    `,
    relatedLegends: ['slender-man', 'banshee']
  },
  'black-eyed-children': {
    title: 'Black Eyed Children',
    origin: 'Modern America',
    type: 'Urban Legend',
    riskLevel: 'High',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1518141532615-4305c9f914c9',
        alt: 'Empty Street at Night',
        caption: 'Common setting for Black Eyed Children encounters',
        year: '2018',
        credit: 'Unsplash'
      },
      {
        src: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c',
        alt: 'Front Door at Night',
        caption: 'Typical location where BEK encounters are reported',
        year: '2019',
        credit: 'Unsplash'
      }
    ],
    content: `
      The Black Eyed Children (or BEK - Black Eyed Kids) phenomenon is a relatively recent addition to urban legend canon, first gaining prominence in the late 1990s. These entities appear as children between the ages of 6 and 16, with completely black eyes - no whites, no iris, just an endless void of darkness.

      The typical encounter follows a consistent pattern: The children appear at night, often at someone's door or car window, asking to be let in. They might claim to need help, a phone call, or a ride home. Witnesses report feeling an overwhelming sense of dread and fear during these encounters, despite the children's seemingly innocent appearance.

      What makes this legend particularly disturbing is the consistency of reported details across different encounters: the children speak in a manner too mature for their apparent age, they become increasingly insistent about being invited in, and they often travel in pairs. Witnesses also report electronic malfunctions during encounters, such as phones dying or car alarms activating.

      While no physical harm has been definitively linked to these entities, those who encounter them report lasting psychological effects. Many describe a persistent feeling of having narrowly escaped something terrible, and some report nightmares and anxiety that persist long after the encounter.

      WARNING: If you encounter children with solid black eyes asking to be invited into your home or vehicle, do not let them in under any circumstances. Multiple witnesses report that the urge to help these children can be almost overwhelming, despite their instinctive fear.
    `,
    relatedLegends: ['bloody-mary', 'slender-man']
  },
  'banshee': {
    title: 'The Banshee',
    origin: 'Irish Folklore',
    type: 'Ancient Legend',
    riskLevel: 'Medium',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1533154683836-84ea7a0bc310',
        alt: 'Ancient Castle',
        caption: 'Ancient Irish castle where Banshee appearances are reported',
        year: '2017',
        credit: 'Unsplash'
      },
      {
        src: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1',
        alt: 'Misty Ruins',
        caption: 'Ruins where the Banshee\'s wail is said to echo',
        year: '2020',
        credit: 'Unsplash'
      }
    ],
    content: `
      The Banshee (from the Irish "bean sídhe" meaning "woman of the fairy mound") is a female spirit in Irish folklore whose wail or keening is said to foretell the death of a family member. This spirit is deeply embedded in Irish mythology and is considered one of the most prominent death omens in Celtic folklore.

      Traditionally, the Banshee is associated with specific Irish families, particularly those with 'O' or 'Mc' in their names. She is described in various forms: sometimes as a beautiful young woman, other times as a haggard old crone, and occasionally as a washer-woman seen washing the bloody clothes of those about to die.

      The Banshee's cry is her most distinctive feature. It's described variously as a low, pleasant singing to a piercing scream or wail. The sound is said to be unmistakable once heard, and some accounts suggest that the closer to death the person is, the louder and more desperate the Banshee's cry becomes.

      What sets the Banshee apart from other death omens is her role as a protector and warner rather than a malevolent entity. Unlike many death spirits, she doesn't cause death - she merely announces its imminent arrival. This has led some scholars to suggest that the Banshee serves as a kind of spiritual midwife, helping to ease the transition between life and death.

      WARNING: While the Banshee is generally not considered dangerous, her appearance and cry can be extremely distressing. There are accounts of people who, upon hearing what they believed to be a Banshee's wail, suffered severe psychological trauma.
    `,
    relatedLegends: ['bloody-mary', 'wendigo']
  }
};

export default function LegendPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const legend = legendProfiles[params.id as keyof typeof legendProfiles];

  useEffect(() => {
    if (!legend) {
      router.push('/legends');
    }
  }, [legend, router]);

  if (!legend) {
    return null;
  }

  const getRiskLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'extreme':
        return 'bg-red-950/50 text-red-400 border-red-900/50';
      case 'high':
        return 'bg-orange-950/50 text-orange-400 border-orange-900/50';
      case 'medium':
        return 'bg-yellow-950/50 text-yellow-400 border-yellow-900/50';
      default:
        return 'bg-blue-950/50 text-blue-400 border-blue-900/50';
    }
  };

  return (
    <PageTransition>
      <main className="min-h-screen gothic-container py-24">
        <article className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="gothic-heading text-center mb-4">{legend.title}</h1>
            <div className="flex flex-wrap justify-center items-center gap-4 text-gothic-400 mb-8">
              <span>{legend.origin}</span>
              <span>•</span>
              <span>{legend.type}</span>
              <span>•</span>
              <span className={`px-3 py-1 rounded-full border ${getRiskLevelColor(legend.riskLevel)}`}>
                Risk Level: {legend.riskLevel}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert prose-red max-w-none"
          >
            {legend.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gothic-300 mb-4">
                {paragraph.trim()}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-12"
          >
            <h2 className="text-2xl font-gothic text-red-500 mb-6">Historical Images</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {legend.images.map((image, index) => (
                <HistoricalImage key={index} {...image} />
              ))}
            </div>
          </motion.div>

          {legend.relatedLegends && legend.relatedLegends.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-12 pt-8 border-t border-red-900/20"
            >
              <h2 className="text-2xl font-gothic text-red-500 mb-4">Related Legends</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {legend.relatedLegends.map((relatedId) => {
                  const relatedLegend = legendProfiles[relatedId as keyof typeof legendProfiles];
                  return (
                    <motion.div
                      key={relatedId}
                      whileHover={{ scale: 1.02 }}
                      className="bg-gothic-900/50 p-6 rounded-lg border border-red-900/20 cursor-pointer"
                      onClick={() => router.push(`/legends/${relatedId}`)}
                    >
                      <h3 className="text-xl font-gothic text-red-500 mb-2">
                        {relatedLegend.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gothic-400 mb-2">
                        <span>{relatedLegend.origin}</span>
                        <span>•</span>
                        <span>{relatedLegend.type}</span>
                      </div>
                      <p className="text-gothic-400 text-sm">
                        {relatedLegend.content.split('\n')[0].slice(0, 100)}...
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
