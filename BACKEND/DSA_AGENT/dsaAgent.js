const companyMappings = {
  amazon: {
    label: 'Amazon',
    focus: ['Arrays', 'Hash Tables', 'Greedy Algorithms', 'Trees'],
    flavor: 'scale and optimization',
  },
  google: {
    label: 'Google',
    focus: ['Graphs', 'Dynamic Programming', 'Strings', 'System Design'],
    flavor: 'algorithmic precision',
  },
  microsoft: {
    label: 'Microsoft',
    focus: ['Trees', 'Bit Manipulation', 'Graphs', 'Queues'],
    flavor: 'robust engineering',
  },
  meta: {
    label: 'Meta',
    focus: ['Arrays', 'Graphs', 'Hash Tables', 'Concurrency'],
    flavor: 'social graph thinking',
  },
  netflix: {
    label: 'Netflix',
    focus: ['Sorting', 'Caching', 'Graphs', 'Data Streams'],
    flavor: 'performance at scale',
  },
  apple: {
    label: 'Apple',
    focus: ['Trees', 'Strings', 'Optimization', 'Design'],
    flavor: 'clean, elegant solutions',
  },
  default: {
    label: 'Generic',
    focus: ['Arrays', 'Graphs', 'Dynamic Programming', 'Trees'],
    flavor: 'well-rounded problem solving',
  },
};

const questionBank = {
  Easy: [
    {
      title: 'Two Sum Variation',
      description: 'Given an array of integers and a target, return indices of the two numbers such that they add up to target. Optimize for a single pass where possible.',
      topics: ['Arrays', 'Hash Tables'],
      trick: 'Look for complementary values and avoid a brute-force O(n^2) scan.',
    },
    {
      title: 'Valid Parentheses',
      description: 'Verify whether a string of parentheses, brackets, and braces is valid and correctly nested.',
      topics: ['Stacks', 'Strings'],
      trick: 'Use a stack and match closing characters with the expected opening pair.',
    },
    {
      title: 'Merge Sorted Arrays',
      description: 'Merge two sorted arrays into one sorted array while minimizing extra space.',
      topics: ['Arrays', 'Two Pointers'],
      trick: 'Work from the end of both arrays to avoid overwriting elements when merging in place.',
    },
  ],
  Medium: [
    {
      title: 'Longest Substring Without Repeating Characters',
      description: 'Find the length of the longest substring with all unique characters using an efficient sliding window.',
      topics: ['Strings', 'Sliding Window'],
      trick: 'Use a map to track the last position of each character and move the left pointer smartly.',
    },
    {
      title: 'Number of Islands',
      description: 'Count the number of islands in a grid representation of land and water using DFS or BFS.',
      topics: ['Graphs', 'DFS', 'BFS'],
      trick: 'Mark visited cells to avoid revisiting the same region and handle grid boundaries carefully.',
    },
    {
      title: 'Product of Array Except Self',
      description: 'Return an array where each element is the product of all other elements without using division.',
      topics: ['Arrays', 'Prefix/Suffix Products'],
      trick: 'Compute forward and backward products to build the result in linear time.',
    },
  ],
  Hard: [
    {
      title: 'Word Ladder II',
      description: 'Generate all shortest transformation sequences from beginWord to endWord using a dictionary.',
      topics: ['Graphs', 'BFS', 'Backtracking'],
      trick: 'Build neighbor relationships and use BFS to preserve shortest path length before backtracking solutions.',
    },
    {
      title: 'Trapping Rain Water',
      description: 'Calculate how much water can be trapped after raining given elevation heights.',
      topics: ['Two Pointers', 'Stacks'],
      trick: 'Track left and right boundaries and accumulate water only where both sides are taller.',
    },
    {
      title: 'Minimum Window Substring',
      description: 'Find the smallest substring that contains all characters of a target string.',
      topics: ['Sliding Window', 'Hash Tables'],
      trick: 'Shrink the window only when the required character counts are satisfied.',
    },
  ],
};

const normalizeCompany = (company) => {
  if (!company) return companyMappings.default;

  const key = company.toString().trim().toLowerCase().replace(/\s+/g, '');
  return companyMappings[key] || companyMappings.default;
};

const interpretResume = (resumeMetadata) => {
  const name = resumeMetadata?.fileName?.toString().toLowerCase() || '';
  const signals = new Set();

  if (name.includes('backend') || name.includes('node') || name.includes('api') || name.includes('server')) {
    signals.add('backend systems');
  }
  if (name.includes('frontend') || name.includes('react') || name.includes('ui') || name.includes('client')) {
    signals.add('frontend engineering');
  }
  if (name.includes('machine') || name.includes('learning') || name.includes('ml')) {
    signals.add('machine learning');
  }
  if (name.includes('data') || name.includes('analytics') || name.includes('sql') || name.includes('nosql')) {
    signals.add('data structures and analytics');
  }
  if (name.includes('senior') || name.includes('lead') || name.includes('principal')) {
    signals.add('senior-level problem solving');
  }

  if (signals.size === 0) {
    signals.add('general software engineering');
  }

  return {
    summary: `Resume metadata suggests strengths in ${[...signals].join(', ')}.`,
    strengths: [...signals],
    fileType: resumeMetadata?.mimeType || 'unknown',
  };
};

const getAdjacentDifficulties = (difficulty) => {
  if (difficulty === 'Easy') return ['Medium', 'Hard'];
  if (difficulty === 'Hard') return ['Medium', 'Easy'];
  return ['Easy', 'Hard'];
};

const enrichQuestion = (question, profile, companyProfile, resumeInsights, index) => ({
  id: `${profile.difficulty.toLowerCase()}-${index + 1}`,
  title: question.title,
  description: `${question.description} Focus on ${companyProfile.flavor}, ${companyProfile.focus.join(', ')} and the resume strengths: ${resumeInsights.strengths.join(', ')}. Use the ${profile.interviewTrack || 'DSA'} track and explain tradeoffs clearly.`,
  topics: question.topics,
  company: companyProfile.label,
  difficulty: profile.difficulty,
  expectedApproach: {
    timeComplexity: 'O(n) or O(n log n) depending on the variant',
    spaceComplexity: 'O(n)',
    reasoning: `Frame the solution using ${question.topics.join(' + ')} techniques and align it with ${companyProfile.flavor}.`,
  },
  tip: `Highlight ${resumeInsights.strengths.join(', ')} experience from the resume, and connect your answer to ${companyProfile.label}'s interview style.`,
});

const buildQuestionList = (profile, resumeInsights) => {
  const difficulty = profile.difficulty || 'Medium';
  const companyProfile = normalizeCompany(profile.company);
  const primary = questionBank[difficulty] || questionBank.Medium;
  const [adjacentOne, adjacentTwo] = getAdjacentDifficulties(difficulty);
  const secondary = questionBank[adjacentOne] || [];
  const tertiary = questionBank[adjacentTwo] || [];

  const selected = [
    ...primary.slice(0, 2),
    ...secondary.slice(0, 1),
    ...tertiary.slice(0, 1),
  ];

  const companyVariant = {
    title: `${companyProfile.label}-style DSA challenge`,
    description: `Craft a ${difficulty} level solution with ${companyProfile.focus.join(', ')} emphasis as typically expected by ${companyProfile.label}. Integrate resume strengths: ${resumeInsights.strengths.join(', ')}.`,
    topics: [...companyProfile.focus.slice(0, 2)],
    trick: `Tie the answer back to ${companyProfile.flavor} and show how your approach scales for real-world workloads.`,
  };

  const allQuestions = [...selected, companyVariant].slice(0, 5);

  return allQuestions.map((question, index) => enrichQuestion(question, profile, companyProfile, resumeInsights, index));
};

export const generateDsaQuestions = (profile) => {
  const normalized = {
    candidateName: profile.candidateName || 'Candidate',
    targetRole: profile.targetRole || 'SDE',
    interviewTrack: profile.interviewTrack || 'Technical / DSA',
    difficulty: profile.difficulty || 'Medium',
    company: profile.company || 'Generic',
  };

  const resumeInsights = interpretResume(profile.resumeMetadata || {});

  return {
    success: true,
    profile: normalized,
    generatedAt: new Date().toISOString(),
    resumeInsights,
    questions: buildQuestionList(normalized, resumeInsights),
  };
};
