'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import PageTransition from '@/components/PageTransition';
import HistoricalImage from '@/components/HistoricalImage';

// This would typically come from a database, but we'll hardcode it for now
const killerProfiles = {
  'jack-the-ripper': {
    name: 'Jack the Ripper',
    period: '1888',
    location: 'London, England',
    victims: '5 confirmed',
    status: 'Never Identified',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1533756972958-d6f38a9761e3',
        alt: 'Victorian London Street',
        caption: 'The foggy streets of Whitechapel, 1888',
        year: '2020',
        credit: 'Unsplash'
      },
      {
        src: 'https://images.unsplash.com/photo-1589832021964-a50c7952acc4',
        alt: 'Vintage Letter',
        caption: 'Example of a period letter similar to the Ripper letters',
        year: '2020',
        credit: 'Unsplash'
      },
      {
        src: 'https://images.unsplash.com/photo-1572375992501-4b0892d50c69',
        alt: 'Police Investigation',
        caption: 'Historical police investigation methods',
        year: '2020',
        credit: 'Unsplash'
      }
    ],
    content: `
      In the autumn of 1888, the Whitechapel district of London was gripped by a series of brutal murders that would become one of history's most infamous unsolved cases. The killer, known as Jack the Ripper, targeted female prostitutes, displaying a level of anatomical knowledge that led many to suspect he had medical training.

      The canonical five victims - Mary Ann Nichols, Annie Chapman, Elizabeth Stride, Catherine Eddowes, and Mary Jane Kelly - were killed between August 31 and November 9, 1888. Each murder became progressively more brutal, with the killer displaying increasingly sophisticated knowledge of human anatomy.

      The Ripper's identity has been the subject of countless theories and investigations. Suspects have ranged from royal physicians to American quack doctors, but no conclusive evidence has ever emerged to identify the killer definitively.

      What made the Ripper unique was not just his brutality, but his communication with the police and media. The infamous "Dear Boss" letter, which gave him his nickname, demonstrated a taunting relationship with authorities. Whether these letters were genuine or hoaxes remains debated.

      The case revolutionized criminal investigation techniques, leading to innovations in forensic science and criminal profiling. The failure to catch the killer also highlighted the inadequacies of Victorian policing methods.

      To this day, "Ripperologists" continue to study the case, proposing new theories and suspects. The mystery of Jack the Ripper remains one of criminology's most enduring puzzles, representing a perfect storm of social conditions, police limitations, and criminal cunning that allowed a killer to vanish into history.
    `,
    theories: [
      'Medical professional theory',
      'Royal conspiracy theory',
      'Local butcher theory',
      'American suspect theory'
    ],
    relatedKillers: ['zodiac', 'btk']
  },
  'zodiac': {
    name: 'The Zodiac Killer',
    period: '1968-1969',
    location: 'California, USA',
    victims: '5 confirmed, 37 claimed',
    status: 'Never Identified',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1577083552431-6e5fd01988ec',
        alt: 'Cryptographic Cipher',
        caption: 'Example of complex cipher patterns',
        year: '2020',
        credit: 'Unsplash'
      },
      {
        src: 'https://images.unsplash.com/photo-1499346030926-9a72daac6c63',
        alt: 'Lake Berryessa',
        caption: 'Lake Berryessa, site of one of the attacks',
        year: '2020',
        credit: 'Unsplash'
      },
      {
        src: 'https://images.unsplash.com/photo-1504618223053-559bdef9dd5a',
        alt: 'Police Sketch Area',
        caption: 'Area where police conducted their investigation',
        year: '2020',
        credit: 'Unsplash'
      }
    ],
    content: `
      The Zodiac Killer terrorized Northern California in the late 1960s, combining brutal murders with psychological warfare through a series of taunting letters to the press. The killer's signature was his complex ciphers, some of which remained unsolved for decades.

      The confirmed attacks began on December 20, 1968, when he killed two teenagers on Lake Herman Road. The next attack came on July 4, 1969, at Blue Rock Springs. The killer's pattern was to target young couples in isolated areas, though he later attacked a taxi driver in San Francisco.

      What set the Zodiac apart was his communication campaign. He sent encrypted messages to local newspapers, threatening to kill more people if his letters weren't printed on the front page. His most famous cipher, the 408-character message, was solved by a schoolteacher and his wife, revealing a disturbing message about collecting slaves for the afterlife.

      The Zodiac claimed responsibility for 37 murders, though investigators only confirmed seven attacks, with five fatalities. His last confirmed murder was taxi driver Paul Stine in October 1969, though he continued sending letters until 1974.

      The case gained renewed attention through books, movies, and ongoing investigations. Amateur sleuths continue to propose new theories and potential suspects, but like Jack the Ripper, the Zodiac's true identity remains one of crime history's greatest mysteries.

      The Zodiac case revolutionized how law enforcement dealt with serial killers who sought media attention. His ciphers also advanced the field of cryptography and influenced how investigators approach coded messages from criminals.
    `,
    theories: [
      'Arthur Leigh Allen theory',
      'Richard Gaikowski theory',
      'Ross Sullivan theory',
      'Lawrence Kane theory'
    ],
    relatedKillers: ['jack-the-ripper', 'btk']
  },
  'ted-bundy': {
    name: 'Ted Bundy',
    period: '1974-1978',
    location: 'Multiple US States',
    victims: '30+ confirmed',
    status: 'Executed 1989',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f',
        alt: 'Courthouse',
        caption: 'A courthouse similar to where the trials took place',
        year: '2020',
        credit: 'Unsplash'
      },
      {
        src: 'https://images.unsplash.com/photo-1502877338535-766e1452684a',
        alt: 'Vintage Car',
        caption: 'A Volkswagen Beetle similar to Bundy\'s',
        year: '2020',
        credit: 'Unsplash'
      },
      {
        src: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3',
        alt: 'University Campus',
        caption: 'A typical university campus from the era',
        year: '2020',
        credit: 'Unsplash'
      }
    ],
    content: `
      Ted Bundy represents one of the most notorious and complex serial killers in criminal history. His case is particularly disturbing because he shattered the stereotype of the social outcast killer, presenting himself as a charismatic, educated, and seemingly normal member of society.

      Born Theodore Robert Cowell on November 24, 1946, Bundy's early life gave little indication of his future crimes. He was a law student, worked for the Republican Party, and even volunteered for a suicide prevention hotline. This facade of normalcy made his crimes all the more shocking.

      Bundy's killing spree began in 1974 in Washington state. His typical method involved feigning injury or authority to lure young women to his vehicle. He would then subdue, assault, and murder his victims, often revisiting their bodies until decomposition made it impossible.

      What made Bundy especially dangerous was his mobility. He committed murders across Washington, Oregon, Idaho, Colorado, Utah, and Florida. His good looks and charm allowed him to move freely without arousing suspicion, and he used multiple disguises and aliases.

      After multiple arrests and escapes, Bundy was finally captured in Florida in 1978. His trials were sensational media events, marked by his decision to act as his own attorney and his courtroom marriage to Carole Ann Boone.

      Before his execution in 1989, Bundy confessed to 30 murders, though the true count is believed to be higher. His case led to significant advances in criminal profiling and demonstrated how a killer could hide behind a mask of social respectability.
    `,
    theories: [
      'Childhood trauma influence',
      'Psychopathic personality development',
      'Media influence on criminal behavior',
      'Social mask theory'
    ],
    relatedKillers: ['btk', 'zodiac']
  },
  'btk': {
    name: 'BTK Killer',
    period: '1974-1991',
    location: 'Kansas, USA',
    victims: '10 confirmed',
    status: 'Imprisoned',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1584432810601-6c7f27d2362b',
        alt: 'Police Station',
        caption: 'Police station where the arrest was processed',
        year: '2020',
        credit: 'Unsplash'
      },
      {
        src: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338',
        alt: 'Evidence Document',
        caption: 'Example of criminal correspondence',
        year: '2020',
        credit: 'Unsplash'
      },
      {
        src: 'https://images.unsplash.com/photo-1438032005730-c779502df39b',
        alt: 'Church Building',
        caption: 'Similar to Christ Lutheran Church',
        year: '2020',
        credit: 'Unsplash'
      }
    ],
    content: `
      Dennis Rader, known as the BTK Killer (Bind, Torture, Kill), terrorized Wichita, Kansas, for three decades while maintaining a facade as a family man, church leader, and compliance officer. His case demonstrates how serial killers can blend into society while committing horrific crimes.

      Rader's first known murders were the Otero family in 1974, where he killed four people including two children. His method was consistent with his chosen moniker - he would break into homes, bind his victims, torture them, and ultimately kill them.

      Like the Zodiac, BTK craved attention and sent taunting letters to police and media. However, he stopped communication in 1979, leading many to believe he had died or been imprisoned for another crime. In reality, he continued killing until 1991.

      What makes the BTK case unique is the length of time he remained active while maintaining a normal life. Married with two children, Rader was a Boy Scout leader and president of his church congregation. This dual life allowed him to avoid detection for decades.

      His downfall came from his own arrogance. When he resumed communication with the media in 2004, he asked if police could trace him through a floppy disk. They assured him they couldn't, but when he sent one, they quickly traced it to his church computer.

      Rader's arrest in 2005 shocked his community. The idea that a respected member of society could harbor such dark secrets has made his case a significant study in criminal psychology and the concept of the organized serial killer.
    `,
    theories: [
      'Double life psychology',
      'Power and control motivation',
      'Religious facade analysis',
      'Family man killer profile'
    ],
    relatedKillers: ['ted-bundy', 'zodiac']
  }
};

export default function KillerProfilePage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const profile = killerProfiles[params.id as keyof typeof killerProfiles];

  useEffect(() => {
    if (!profile) {
      router.push('/killers');
    }
  }, [profile, router]);

  if (!profile) {
    return null;
  }

  return (
    <PageTransition>
      <main className="min-h-screen gothic-container py-24">
        <article className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="gothic-heading text-center mb-4">{profile.name}</h1>
            <div className="flex flex-wrap justify-center items-center gap-4 text-gothic-400 mb-8">
              <span>{profile.period}</span>
              <span>•</span>
              <span>{profile.location}</span>
              <span>•</span>
              <span>Victims: {profile.victims}</span>
              <span>•</span>
              <span className="px-3 py-1 rounded-full bg-red-950/30 text-red-400 border border-red-900/30">
                {profile.status}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert prose-red max-w-none"
          >
            {profile.content.split('\n\n').map((paragraph, index) => (
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
              {profile.images.map((image, index) => (
                <HistoricalImage key={index} {...image} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-12 pt-8 border-t border-red-900/20"
          >
            <h2 className="text-2xl font-gothic text-red-500 mb-4">Major Theories</h2>
            <ul className="grid md:grid-cols-2 gap-4">
              {profile.theories.map((theory, index) => (
                <li
                  key={index}
                  className="bg-gothic-900/50 p-4 rounded-lg border border-red-900/20"
                >
                  <span className="text-gothic-300">{theory}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {profile.relatedKillers && profile.relatedKillers.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 pt-8 border-t border-red-900/20"
            >
              <h2 className="text-2xl font-gothic text-red-500 mb-4">Related Profiles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {profile.relatedKillers.map((relatedId) => {
                  const relatedProfile = killerProfiles[relatedId as keyof typeof killerProfiles];
                  return (
                    <motion.div
                      key={relatedId}
                      whileHover={{ scale: 1.02 }}
                      className="bg-gothic-900/50 p-6 rounded-lg border border-red-900/20 cursor-pointer"
                      onClick={() => router.push(`/killers/${relatedId}`)}
                    >
                      <h3 className="text-xl font-gothic text-red-500 mb-2">
                        {relatedProfile.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gothic-400 mb-2">
                        <span>{relatedProfile.period}</span>
                        <span>•</span>
                        <span>{relatedProfile.status}</span>
                      </div>
                      <p className="text-gothic-400 text-sm">
                        {relatedProfile.content.split('\n')[0].slice(0, 100)}...
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
}
