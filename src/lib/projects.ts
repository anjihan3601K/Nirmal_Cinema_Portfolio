import lateNightImg from "../assets/project-late-night.jpg";
import fatherSonImg from "../assets/project-father-son.jpg";
import loveStoryImg from "../assets/project-love-story.jpg";
import studentLifeImg from "../assets/project-student-life.jpg";

export const LATE_NIGHT_URL = "https://youtu.be/RO6lFwY78tQ?si=kUsXGo1Ay_fwOxal";

export type Project = {
  id: string;
  title: string;
  role: string;
  category: string;
  description: string;
  image: string;
  accent: string;
  featured: boolean;
  link: string | null;
  logline: string;
  synopsis: string[];
  details: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    id: "late-night",
    title: "Late Night",
    role: "Actor",
    category: "Suspense Thriller · Short Film",
    description:
      "A suspense thriller set on a deserted campus night, where a single wrong turn pulls two students into something they cannot walk back from.",
    image: lateNightImg,
    accent: "from-primary/20 to-transparent",
    featured: true,
    link: LATE_NIGHT_URL,
    logline:
      "One sleepless campus night, one thing they were never meant to see.",
    synopsis: [
      "It begins the way most things do — with a message sent too late and answered too quickly. Arjun and Meghana are classmates who have spent a whole semester circling each other, hiding behind group chats, borrowed notes and casual excuses to walk the same corridor.",
      "One night the campus empties out. What starts as a walk to the tea stall stretches into hours: confessions traded like secrets, old wounds surfacing, laughter that turns quiet. The city sleeps around them while they finally speak in full sentences.",
      "By sunrise nothing has been solved and everything has changed. Late Night is about that fragile window when two people are honest because the dark makes it possible — and about what they choose to carry into the morning.",
    ],
    details: [
      { label: "Format", value: "Short Film" },
      { label: "Genre", value: "Suspense Thriller" },
      { label: "Nirmal's Role", value: "Lead Actor" },
      { label: "Status", value: "Released" },
    ],
  },
  {
    id: "father-son",
    title: "Father–Son Bond",
    role: "Story Writer",
    category: "Feature Concept",
    description:
      "A revenge saga rooted in bloodline honour and ancient combat discipline — based on Jeet Kune Do (optional).",
    image: fatherSonImg,
    accent: "from-accent/20 to-transparent",
    featured: false,
    link: null,
    logline:
      "A dying master teaches his son a forbidden fighting form — and the debt that comes with it.",
    synopsis: [
      "In a forgotten village guarded by stone and silence, an old warrior has spent twenty years pretending to be a farmer. He buried his art the day his wife was killed, and raised his son to be ordinary on purpose.",
      "When the men who took everything return for the land, the boy discovers his father's past in a single, terrifying night. What follows is an apprenticeship built on grief: a dead language of stances, breath and blade passed from a failing body to an angry one.",
      "The film asks whether revenge is inheritance or choice. The father wants justice; the son wants blood. By the final duel, only one of them still believes the difference matters.",
    ],
    details: [
      { label: "Format", value: "Feature Concept" },
      { label: "Genre", value: "Action · Martial Arts (Jeet Kune Do)" },
      { label: "Nirmal's Role", value: "Story & Screenplay" },
      { label: "Status", value: "In Development" },
    ],
  },
  {
    id: "untitled-crime",
    title: "Untitled — Crime Story",
    role: "Story Writer",
    category: "Crime Thriller · Feature Concept",
    description:
      "A tense crime thriller about a man who commits one small crime to survive — and spends the rest of his life paying for it.",
    image: loveStoryImg,
    accent: "from-primary/20 to-transparent",
    featured: false,
    link: null,
    logline:
      "One small crime to stay alive. One witness who never forgets a face.",
    synopsis: [
      "He never meant to cross the line. A desperate night, an unlocked door, and something taken that was never his — the kind of mistake a poor man makes once and regrets forever.",
      "Years later, he has built a quiet, respectable life on the wreckage of that night. Then a stranger walks into his workplace and smiles at him the way only someone who knows your secret can.",
      "The film traces the slow undoing of a man who thought he had outrun himself — and asks whether a single act can ever truly stay buried, or whether crime is just a debt that compounds in silence.",
    ],
    details: [
      { label: "Format", value: "Feature Concept" },
      { label: "Genre", value: "Crime Thriller" },
      { label: "Nirmal's Role", value: "Story & Screenplay" },
      { label: "Status", value: "In Development" },
    ],
  },
  {
    id: "student-life",
    title: "Untitled — A Student's Life",
    role: "Story Writer",
    category: "Social Drama",
    description:
      "The journey of a gifted student from a poor family whose dreams collide with society's indifference and the ego of power.",
    image: studentLifeImg,
    accent: "from-accent/20 to-transparent",
    featured: false,
    link: null,
    logline:
      "The brightest student in the district fails an exam he never got to write.",
    synopsis: [
      "Ravi tops every class he sits in. His mother works two jobs, his father's name is on a loan nobody will forgive, and the whole street treats his marksheet as collective property.",
      "A scholarship should have ended the story happily. Instead it drops him into a system of paperwork, quotas and officials who enjoy being asked twice. A signature withheld out of ego costs him a year; the year costs him everything else.",
      "The film follows him as brilliance slowly becomes a liability — and asks what a society loses each time it makes a poor child prove he deserves the chance he already earned.",
    ],
    details: [
      { label: "Format", value: "Feature Concept" },
      { label: "Genre", value: "Social Drama" },
      { label: "Nirmal's Role", value: "Story & Screenplay" },
      { label: "Status", value: "In Development" },
    ],
  },
];

export const getProject = (id: string) => projects.find((p) => p.id === id);
