export type NewsContent = {
  id: number;
  coverImage: string;
  author: string;
  publicationDate: string;
  title: string;
  description: string;
  subject: 'health' | 'science' | 'sport' | 'technology' | 'travel' | undefined;
  link: string;
  mainNews?: boolean;
};

export const fakeData: NewsContent[] = [
  {
    id: 1,
    link: 'https://www.bbc.com/sport/extra/zxack0e542/How-Curry-rebuilt-basketball',
    mainNews: true,
    coverImage:
      'https://www.conchovalleyhomepage.com/wp-content/uploads/sites/83/2022/10/2d4e49b2607145c6bc2940e3de9f15d4.jpg',
    author: 'BBC',
    publicationDate: '09/26/2023',
    title:
      'Stephen Curry: The "little guy with skinny arms" who changed the sport of giants',
    description: `Friday, 30 October 2009. Phoenix, Arizona.

    Stephen Curry, baby-faced, shaven-headed, is playing his second game in the NBA. The 21-year-old's Golden State Warriors team are away to the Phoenix Suns.
    
    With a minute to go in the second quarter, Curry dribbles the ball halfway up the court before passing it to a team-mate.
    
    Curry nonchalantly makes his way up the floor, stopping beneath the basket – a position where, without the ball, dwarfed by defenders, he is little threat to the opposition.
    
    What happens in the next two seconds will be the catalyst for changing basketball. Forever.
    
    Curry pushes off his defender. It is just enough contact to open up space, not enough to warrant a foul.
    
    He then sprints back outside the three-point line, gathers a pass and releases a high-arching jump-shot.
    
    Swish! A sharp ripping, rippling sound comes from the rim. His scoring shot touched nothing but net.`,
    subject: 'sport',
  },
  {
    id: 2,
    link: 'https://www.bbc.com/news/technology-66925550',
    coverImage:
      'https://ichef.bbci.co.uk/news/976/cpsprodpb/5069/production/_131258502_mediaitem131258501.jpg',
    author: 'BBC',
    publicationDate: '09/26/2023',
    title: 'Reddit to begin paying people for popular posts',
    description: `Reddit has unveiled plans to pay its top contributors cash for popular posts, starting in the US on Tuesday.

    The social media site will split revenue with people who are awarded "gold" by other users, who pay a fee.
    
    Gold awards will range in price from $1.99 (£1.63) to $49 (£40), with users receiving as much as half of that.
    
    Reddit users - or Redditors - will typically join a variety of subreddits, rather than following individual users on other platforms, and see posts from these communities in their feed.`,
    subject: 'technology',
  },
  {
    id: 3,
    link: 'https://www.bbc.com/news/science-environment-66786611',
    coverImage: 'https://images3.alphacoders.com/132/1328226.png',
    author: 'BBC',
    publicationDate: '09/12/2023',
    title: 'Tantalising sign of possible life on faraway world',
    description: `Nasa's James Webb Space Telescope may have discovered tentative evidence of a sign of life on a faraway planet.

    It may have detected a molecule called dimethyl sulphide (DMS). On Earth, at least, this is only produced by life.
    
    The researchers stress that the detection on the planet 120 light years away is "not robust" and more data is needed to confirm its presence.
    
    Researchers have also detected methane and CO2 in the planet's atmosphere.
    
    Detection of these gases could mean the planet, named K2-18b, has a water ocean.`,
    subject: 'science',
  },
  {
    id: 4,
    link: 'https://edition.cnn.com/2021/11/29/health/5-steps-habit-builder-wellness/index.html',
    coverImage:
      'https://domf5oio6qrcr.cloudfront.net/medialibrary/4517/trade-bad-habits-for-good-ones.png',
    author: 'CNN',
    publicationDate: '09/22/2023',
    title: 'How to build a habit in 5 steps, according to science',
    description: `Most of us assume those superachievers who are always able to squeeze in their workout, eat healthy foods, ace their exams and pick their kids up on time must have superhuman self-control. But science points to a different answer: What we mistake for willpower is often a hallmark of habit.

    procrastination type wellness STOCK
    Laziness isn't why you procrastinate. This is
    People with good habits rarely need to resist the temptation to laze on the couch, order greasy takeout, procrastinate on assignments or watch one more viral video before dashing out the door. That’s because autopilot takes over, eliminating temptation from the equation. Having established good habits, little to no willpower is required to choose wisely.ollowing individual users on other platforms, and see posts from these communities in their feed.`,
    subject: 'health',
  },
  {
    id: 5,
    link: 'https://edition.cnn.com/travel/london-kingsway-exchange-tunnels/index.html',
    coverImage:
      'https://media.cnn.com/api/v1/images/stellar/prod/230926085406-04-body-kingsway-telephone-exchange-tunnels.jpg',
    author: 'CNN',
    publicationDate: '09/26/2023',
    title: 'Secret World War II tunnels to open to public',
    description: `Plans have been revealed for what promises to be London's most spectacular underground tourist attraction ever: the $268 million transformation of a mile-long series of World War II tunnels into a glitzy immersive experience.

    So clandestine they were once protected by the UK's Official Secrets Act, the former spy tunnels are set to be reworked by a team including the architects behind Singapore's Gardens by the Bay and London's Battersea Power Station – if it secures planning approval later this fall.
    
    The Kingsway Exchange Tunnels, some 40 meters below Chancery Lane tube station in High Holborn, were built in the 1940s to shelter Londoners from the Blitz bombing campaign during World War II.`,
    subject: 'travel',
  },
];
