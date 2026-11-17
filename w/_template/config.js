// Test page settings. Also read by the influencer's partner space for result labels.
window.WAITLIST = {
  lang: "en",                         // "en" or "tr"
  slug: "template",                   // row label in the sheet
  partner: "[Creator name]",
  intro: "We're building an app with [Creator]. Your answers decide what it does.",
  problemQuestion: "[What's hardest about ...?]",
  problems: [
    { id: "p1", label: "[Problem 1]", ideasQuestion: "[For problem 1, which would you use?]" },
    { id: "p2", label: "[Problem 2]" },
    { id: "p3", label: "[Problem 3]" },
    { id: "p4", label: "[Problem 4]" }
  ],
  // Shared ideas for every problem. To show different ideas per problem,
  // add  ideas: [...]  inside that problem instead.
  ideas: [
    { id: "plan",  title: "[Idea A: daily plan]",   desc: "[One line on what it does]" },
    { id: "coach", title: "[Idea B: coach]",        desc: "[One line on what it does]" },
    { id: "lib",   title: "[Idea C: library]",      desc: "[One line on what it does]" }
  ],
  price: { amount: "$9.99 a month", offer: "Early members get the first 3 months at half price." },
  endpoint: "PASTE_APPS_SCRIPT_WEB_APP_URL_HERE"
};
