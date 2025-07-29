import React, { createContext, useContext, useState, useEffect } from 'react';
import { useUser } from './UserContext';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Hebrew translations for all app content
const translations = {
  en: {
    // Home page
    greeting: "Shalom, ",
    heartStirring: "What's stirring in your heart today?",
    newEntry: "New Entry",
    captureThoughts: "Capture your thoughts and reflections",
    journal_entries: "Journal Entries",
    savedEchoes: "Saved Echoes",
    journeyWeek: "Journey Week",
    thisWeekJourney: "This Week's Journey",
    recentReflections: "Recent Reflections",
    viewAll: "View All",
    savedWisdom: "Saved Wisdom",
    exploreMore: "Explore More",

    // Navigation
    home: "Home",
    journal: "Journal",
    echoes_nav: "Echoes",
    journey: "Journey",
    collection: "Collection",
    hub: "Hub",
    community: "Community",

    // Journal page
    journal_title: "Journal",
    expressHeart: "Express what's in your heart",
    journalPlaceholder: "What's stirring in your heart today? Share your thoughts, prayers, questions, or insights...",
    characters: "characters",
    saving: "Saving...",
    saveEntry: "Save Entry",
    suggestedEchoes: "Suggested Echoes",
    echoesResonance: "These wisdom pieces resonate with your current reflection",
    reflectionPrompts: "Reflection Prompts",
    prompt1: "• What am I grateful for today?",
    prompt2: "• Where did I feel most connected to something greater?",
    prompt3: "• What challenged me spiritually or emotionally?",
    prompt4: "• How did I grow or learn something new about myself?",
    prompt5: "• What prayers or intentions am I holding?",

    // Tags & Mood
    tags: "Tags",
    addCustomTag: "Add custom tag",
    suggestedTags: "Suggested tags:",
    howFeeling: "How are you feeling?",
    moodHelp: "Your mood helps us suggest relevant echoes and track your emotional journey",

    // Echoes page
    echoes_title: "Echoes",
    discoverWisdom: "Discover wisdom that resonates with your soul",
    searchEchoes: "Search echoes by content or source...",
    type: "Type",
    allTypes: "All Types",
    theme: "Theme",
    allThemes: "All Themes",
    personalizedForYou: "Personalized for You",
    echoesAbout: "Based on your recent reflections, we've curated echoes about growth and purpose",
    echoesFound: "echoes found",
    noEchoesFound: "No echoes found",
    adjustSearch: "Try adjusting your search or filters to discover more wisdom",

    // Journey page
    journey_title: "Journey",
    guidedReflections: "Weekly guided reflections for spiritual growth",
    thisWeek: "This Week",
    journeyProgress: "Your Journey Progress",
    weekOf: "Week",
    ongoingJourney: "of ongoing journey",
    weeksCompleted: "weeks completed",
    generateNewJourney: "Generate New Journey",
    aiJourney: "Let AI create a personalized weekly reflection based on your recent entries",
    pastJourneys: "Past Journeys",
    journeyApproach: "The Journey Approach",
    journeyDesc1: "Each week brings a new question designed to deepen your spiritual awareness and self-understanding. These aren't meant to be answered quickly, but lived with throughout the week.",
    journeyDesc2: "The practice suggestions help you embody the week's theme, moving from contemplation to action, from thought to lived experience.",
    reflection: "Reflection",
    practice: "Practice",

    // Collection page
    collection_title: "Collection",
    journeyReflection: "Your journey of reflection and wisdom",
    entries: "Entries",
    daysActive: "Days Active",
    allContent: "All Content",
    journalEntries: "Journal Entries",
    allMoods: "All Moods",
    emptyCollection: "Your collection is empty",
    startBuilding: "Start journaling and saving echoes to build your spiritual collection",
    startWriting: "Start Writing",

    // Hub page
    hub_title: "Hub",
    exploreWisdom: "Explore wisdom by domain and tradition",
    torah: "Torah & Wisdom",
    torahDesc: "Ancient teachings and rabbinical insights",
    psychology: "Psychology",
    psychologyDesc: "Modern insights into the human psyche",
    poetry: "Poetry & Literature",
    poetryDesc: "Beautiful expressions of the human experience",
    philosophy: "Philosophy",
    philosophyDesc: "Timeless questions about existence and meaning",
    spirituality: "Spirituality",
    spiritualityDesc: "Practices and insights for spiritual growth",
    mysticism: "Mysticism",
    mysticismDesc: "Deeper mysteries and transcendent experiences",
    weeklySpotlight: "This Week's Spotlight: Philosophy",
    spotlightDesc: "This week we're exploring questions of meaning and purpose through the lens of classical and contemporary philosophy. Discover how ancient wisdom applies to modern life.",
    explorePhilosophy: "Explore Philosophy",
    browseAllEchoes: "Browse All Echoes",
    browseDesc: "Explore our complete collection of wisdom and inspiration",
    startReflecting: "Start Reflecting",
    startDesc: "Begin your journaling practice with guided prompts",
    echoes_count: "echoes",
    explore: "Explore",

    // Community page
    community_title: "Community",
    notAlone: "You're not alone in your spiritual journey",
    discover: "Discover",
    groups: "Groups",
    threads: "Threads",
    suggestedForYou: "Suggested for You",
    communityDesc: "Based on your recent reflections, we found groups where others are exploring similar themes",
    match: "match",
    activeMembers: "Active Members",
    activeThreads: "Active Threads",
    sharedEchoes: "Shared Echoes",
    searchGroups: "Search groups by theme...",
    createGroup: "Create Group",
    startThread: "Start a Thread",
    shareQuestion: "Share a question or reflection with the community",
    activeConversations: "Active Conversations",
    anonymousSharing: "Anonymous Sharing",
    anonymousDesc: "Many conversations happen anonymously, creating a safe space for vulnerable sharing. You can choose your comfort level for each thread.",
    open: "Open",
    anonymous: "Anonymous",
    members: "members",
    joinConversation: "Join Conversation",
    peopleReflecting: "people reflecting",

    // Common
    active: "Active",
    join: "Join",
    echo: "Echo",
  },
  he: {
    // Home page
    greeting: "שלום, ",
    heartStirring: "מה מתרחש בלבך היום?",
    newEntry: "רשומה חדשה",
    captureThoughts: "לכוד את מחשבותיך והרהוריך",
    journal_entries: "רשומות יומן",
    savedEchoes: "הדים שמורים",
    journeyWeek: "שבוע המסע",
    thisWeekJourney: "המסע של השבוע",
    recentReflections: "הרהורים אחרונים",
    viewAll: "צפה בהכל",
    savedWisdom: "חכמה שמורה",
    exploreMore: "חקור עוד",

    // Navigation
    home: "בית",
    journal: "יומן",
    echoes_nav: "הדים",
    journey: "מסע",
    collection: "אוסף",
    hub: "מרכז",
    community: "קהילה",

    // Journal page
    journal_title: "יומן",
    expressHeart: "בטא את מה שבלבך",
    journalPlaceholder: "מה מתרחש בלבך היום? שתף את מחשבותיך, תפילותיך, שאלותיך או תובנותיך...",
    characters: "תווים",
    saving: "שומר...",
    saveEntry: "שמור רשומה",
    suggestedEchoes: "הדים מוצעים",
    echoesResonance: "חלקי החכמה הללו מתהדהדים עם ההרהור הנוכחי שלך",
    reflectionPrompts: "רמזים להרהור",
    prompt1: "• על מה אני אסיר תודה היום?",
    prompt2: "• היכן הרגשתי מחובר למשהו גדול יותר?",
    prompt3: "• מה אתגר אותי רוחנית או רגשית?",
    prompt4: "• כיצד צמחתי או למדתי משהו חדש על עצמי?",
    prompt5: "• אילו תפילות או כוונות אני מחזיק?",

    // Tags & Mood
    tags: "תגיות",
    addCustomTag: "הוסף תגית מותאמת אישית",
    suggestedTags: "תגיות מוצעות:",
    howFeeling: "איך אתה מרגיש?",
    moodHelp: "מצב הרוח שלך עוזר לנו להציע הדים רלוונטיים ולעקוב אחר המסע הרגשי שלך",

    // Echoes page
    echoes_title: "הדים",
    discoverWisdom: "גלה חכמה שמהדהדת עם נשמתך",
    searchEchoes: "חפש הדים לפי תוכן או מקור...",
    type: "סוג",
    allTypes: "כל הסוגים",
    theme: "נושא",
    allThemes: "כל הנושאים",
    personalizedForYou: "מותאם אישית עבורך",
    echoesAbout: "על סמך ההרהורים האחרונים שלך, אצרנו הדים על צמיחה ותכלית",
    echoesFound: "הדים נמצאו",
    noEchoesFound: "לא נמצאו הדים",
    adjustSearch: "נסה להתאים את החיפוש או הסינונים שלך כדי לגלות חכמה נוספת",

    // Journey page
    journey_title: "מסע",
    guidedReflections: "הרהורים מודרכים שבועיים לצמיחה רוחנית",
    thisWeek: "השבוע",
    journeyProgress: "התקדמות המסע שלך",
    weekOf: "שבוע",
    ongoingJourney: "של המסע המתמשך",
    weeksCompleted: "שבועות הושלמו",
    generateNewJourney: "צור מסע חדש",
    aiJourney: "תן ל-AI ליצור הרהור שבועי מותאם אישית על סמך הרשומות האחרונות שלך",
    pastJourneys: "מסעות קודמים",
    journeyApproach: "גישת המסע",
    journeyDesc1: "כל שבוע מביא שאלה חדשה שנועדה להעמיק את המודעות הרוחנית וההבנה העצמית שלך. אלה לא נועדו להיענות במהירות, אלא לחיות איתן לאורך השבוע.",
    journeyDesc2: "הצעות התרגול עוזרות לך להגשים את נושא השבוע, לעבור מהרהור לפעולה, ממחשבה לחוויה מוחשית.",
    reflection: "הרהור",
    practice: "תרגול",

    // Collection page
    collection_title: "אוסף",
    journeyReflection: "המסע שלך של הרהור וחכמה",
    entries: "רשומות",
    daysActive: "ימים פעילים",
    allContent: "כל התוכן",
    journalEntries: "רשומות יומן",
    allMoods: "כל מצבי הרוח",
    emptyCollection: "האוסף שלך ריק",
    startBuilding: "התחל לכתוב ביומן ולשמור הדים כדי לבנות את האוסף הרוחני שלך",
    startWriting: "התחל לכתוב",

    // Hub page
    hub_title: "מרכז",
    exploreWisdom: "חקור חכמה לפי תחום ומסורת",
    torah: "תורה וחכמה",
    torahDesc: "לימודים עתיקים ותובנות רבניות",
    psychology: "פסיכולוגיה",
    psychologyDesc: "תובנות מודרניות על הנפש האנושית",
    poetry: "שירה וספרות",
    poetryDesc: "ביטויים יפים של החוויה האנושית",
    philosophy: "פילוסופיה",
    philosophyDesc: "שאלות נצחיות על קיום ומשמעות",
    spirituality: "רוחניות",
    spiritualityDesc: "פרקטיקות ותובנות לצמיחה רוחנית",
    mysticism: "מיסטיקה",
    mysticismDesc: "מסתורין עמוקים וחוויות טרנסנדנטיות",
    weeklySpotlight: "זרקור השבוע: פילוסופיה",
    spotlightDesc: "השבוע אנו חוקרים שאלות של משמעות ותכלית דרך העדשה של פילוסופיה קלאסית ועכשווית. גלה כיצד חכמה עתיקה מיושמת בחיים המודרניים.",
    explorePhilosophy: "חקור פילוסופיה",
    browseAllEchoes: "עיין בכל ההדים",
    browseDesc: "חקור את האוסף המלא שלנו של חכמה והשראה",
    startReflecting: "התחל להרהר",
    startDesc: "התחל את פרקטיקת הכתיבה ביומן שלך עם רמזים מודרכים",
    echoes_count: "הדים",
    explore: "חקור",

    // Community page
    community_title: "קהילה",
    notAlone: "אתה לא לבד במסע הרוחני שלך",
    discover: "גלה",
    groups: "קבוצות",
    threads: "שרשורים",
    suggestedForYou: "מוצע עבורך",
    communityDesc: "על סמך ההרהורים האחרונים שלך, מצאנו קבוצות שבהן אחרים חוקרים נושאים דומים",
    match: "התאמה",
    activeMembers: "חברים פעילים",
    activeThreads: "שרשורים פעילים",
    sharedEchoes: "הדים משותפים",
    searchGroups: "חפש קבוצות לפי נושא...",
    createGroup: "צור קבוצה",
    startThread: "התחל שרשור",
    shareQuestion: "שתף שאלה או הרהור עם הקהילה",
    activeConversations: "שיחות פעילות",
    anonymousSharing: "שיתוף אנונימי",
    anonymousDesc: "שיחות רבות מתרחשות באנונימיות, ויוצרות מרחב בטוח לשיתוף פגיע. אתה יכול לבחור את רמת הנוחות שלך לכל שרשור.",
    open: "פתוח",
    anonymous: "אנונימי",
    members: "חברים",
    joinConversation: "הצטרף לשיחה",
    peopleReflecting: "אנשים מהרהרים",

    // Common
    active: "פעיל",
    join: "הצטרף",
    echo: "הד",
  }
};

export const LanguageProvider = ({ children }) => {
  const { user, toggleRTL } = useUser();
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'he' : 'en';
    setLanguage(newLang);
    if (newLang === 'he') {
      toggleRTL();
    } else if (user.rtl_mode) {
      toggleRTL();
    }
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};