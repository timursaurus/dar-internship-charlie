import { Actor, Movie } from './types';

export const movies: Movie[] = [
  {
    id: 1,
    title: 'Inglourious Basterds',
    description: 'A Jewish cinema owner in occupied Paris is forced to host a Nazi premiere, where a group of American soldiers called the Basterds plans a face-off.',
    duration: 152,
    genre: 'Military movies',
    image: 'https://occ-0-4923-769.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQczb7KMKJ3KbriVSNG03X4WeiNCynGnA021f2Yp5B_MGfbonM-KHVXYVBc1TsA8j_Qtdz_4PDDHvRtlj-aPMNs1r-o.jpg?r=de5',
    trailer: 'https://www.youtube.com/watch?v=KnrRy6kSFF0'
  },
  {
    id: 2,
    title: 'Inside Man',
    description: 'A detective matches wits with a thief who\'s always one step ahead of the cops, and when a loose-cannon negotiator arrives, things spin out of control.',
    duration: 127,
    genre: 'US movies',
    image: 'https://occ-0-4923-769.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeiP8y90wtesQVAnnYdfkerqcOUjZH95AVBFfC8fBiXpmxOwQKFxfdUZ2crSCItcsGVUtaKaGdkScAHqnD-ItoWUWX0.jpg?r=b7c',
    trailer: 'https://www.youtube.com/watch?v=U8J813ANdgQ'
  },
  {
    id: 3,
    title: 'Jason Bourne',
    description: 'Once again on the run from the government, the former spy is back to take on a shadowy cyber plot and solve the mystery behind his father\'s death.',
    duration: 123,
    genre: 'Action',
    image: 'https://occ-0-4923-769.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXVQdCPNowocTvieTLY992lrNMqHQnojx_DYPyTGI-vZDOa1cuR89QMFNxUIBd5ZuytcSxQ5mLtxUK-pUsEZ30rJRhKv.jpg?r=f29',
    trailer: "https://www.youtube.com/watch?v=FpKaB5dvQ4g"
  },
];


export const actors: Actor[] = [
  {
    id: 1,
    name: 'Chrisoph',
    lastname: 'Waltz',
    age: 65,
    bio: 'Christoph Waltz (German pronunciation: [ˈkʀɪstɔf ˈvalts]; born 4 October 1956) is an Austrian and German actor. He is the recipient of numerous accolades, including two Academy Awards, two British Academy Film Awards, two Screen Actors Guild Awards, and two Golden Globe Awards. Since 2009, he has mainly been active in the United States.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Christoph_Waltz_Viennale_2017_f_%28cropped%29.jpg'
  },
  {
    id: 2,
    name: 'Matt',
    lastname: 'Damon',
    age: 51,
    bio: 'Matthew Paige Damon (/ˈdeɪmən/; born October 8, 1970) is an American actor, film producer, and screenwriter. Ranked among Forbes\' most bankable stars, the films in which he has appeared have collectively earned over $3.88 billion at the North American box office, making him one of the highest-grossing actors of all time. He is the recipient of various accolades, including an Academy Award and two Golden Globe Awards, in addition to nominations for three British Academy Film Awards, six Screen Actors Guild Awards, and seven Primetime Emmy Awards.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Matt_Damon_TIFF_2015.jpg/330px-Matt_Damon_TIFF_2015.jpg'
    
  }
]
