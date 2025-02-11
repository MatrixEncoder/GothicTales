import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const stories = {
    'blackwood-manor': {
      title: 'The Haunting of Blackwood Manor',
      description: 'A paranormal investigator uncovers the dark secrets of a centuries-old manor with a malevolent history.'
    },
    'red-room': {
      title: 'The Red Room Ritual',
      description: 'A chilling account of a forbidden ritual that opens a gateway to something beyond human comprehension.'
    },
    'asylum-whispers': {
      title: 'Whispers in the Asylum',
      description: 'A psychiatric researcher encounters unexplained phenomena in an abandoned mental hospital.'
    }
  };

  const story = stories[params.id as keyof typeof stories];
  
  return {
    title: story ? `${story.title} | Gothic Tales` : 'Story Not Found',
    description: story ? story.description : 'Story details not available'
  };
};
