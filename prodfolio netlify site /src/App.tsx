import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { ArrowRight, Mail, Instagram, Linkedin, X, Menu, Briefcase, GraduationCap, Award, Wrench, Star, ChevronLeft, Share2, Copy } from 'lucide-react';

const blogs = [
  {
    id: 'mountin-trail-discovery',
    title: "🏔️ MountIn — A Trail Discovery App for Modern Explorers",
    date: "18th Jun 2025",
    readTime: "4 min read",
    excerpt: "From Mockups to MVP: A Work-In-Progress Showcase. Today, most trekking or trail-finding apps are either overloaded with features hikers don’t need, or too minimal to inspire confidence.",
    tags: ["UX", "Case Study", "Product Design"],
    content: `
      <h3>🎯 The Problem</h3>
      <p>Today, most trekking or trail-finding apps are either:</p>
      <ul>
        <li>Overloaded with features hikers don’t need, or</li>
        <li>Too minimal to inspire confidence for solo or group treks</li>
      </ul>
      <p>As a mountain enthusiast and someone who values good UX, I saw a gap: What if there was a beautifully simple app to help you discover trails nearby, plan safely, and maybe even communicate with fellow trekkers?</p>

      <h3>👤 Target Persona</h3>
      <ul>
        <li><strong>Age:</strong> 18–35</li>
        <li>Lives in/near urban areas with weekend access to trails</li>
        <li>Tech-savvy, safety-conscious, but doesn’t want to sift through cluttered apps</li>
        <li>May or may not trek alone, but values coordination features and quick access to trail data</li>
      </ul>

      <h3>🧠 Design Philosophy</h3>
      <p>Before building anything, I sketched out the core user journey:</p>
      <ul>
        <li>🧭 Discover curated trails nearby</li>
        <li>🏁 Start a trek with live progress tracking</li>
        <li>🔔 Access emergency (SOS) tools easily</li>
        <li>🧑‍🤝‍🧑 Enable group trek planning (later phase)</li>
      </ul>
      <p>I designed the experience first in Figma, focusing on:</p>
      <ul>
        <li>Clean visual hierarchy</li>
        <li>Legible trail info cards</li>
        <li>Accessibility (big tap areas, readable fonts)</li>
        <li>Emphasis on a calming, outdoorsy visual tone</li>
      </ul>
      <p>Honestly, the Figma prototype is still my favorite version — it communicates the kind of polish I aspire to reach with the live MVP. But design is nothing without execution.</p>

      <h3>🛠️ Rapid Prototyping with Glide</h3>
      <p>I wanted to go beyond just pretty screens and ship something functional — fast. So I used Glide, to create a basic working MVP of MountIn.</p>

      <h4>What I Built:</h4>
      <ul>
        <li>Trail discovery screen with real trail names & distance</li>
        <li>"Start Trail" button that initiates a pseudo tracking experience</li>
        <li>Manual location logs and timestamps</li>
        <li>Simple workable UI components mapped to Figma designs (as closely as possible)</li>
      </ul>

      <h4>What’s Missing (for now):</h4>
      <ul>
        <li>Real-time GPS tracking</li>
        <li>Dynamic elevation gain, timer, group features</li>
        <li>Full fidelity animations/interactions from Figma</li>
      </ul>
      <p>That said, it’s a solid 0.5 version — good enough for user feedback, testing basic assumptions, and showing my end-to-end thinking.</p>

      <h3>📊 PM Lens</h3>
      <ul>
        <li>✅ Prioritized building a usable version over pixel perfection</li>
        <li>✅ Focused on core utility first (trail discovery & journey initiation)</li>
        <li>🚧 Cut features like group planning and SOS to avoid premature scaling</li>
        <li>📬 Plan to collect feedback from early users before expanding</li>
      </ul>

      <h3>🔄 Retrospective</h3>
      <p>This project reminded me that:</p>
      <ul>
        <li>Design is storytelling, but execution is momentum</li>
        <li>Users don’t care about how polished your mockup is — they care about what works</li>
        <li>It’s okay to build ugly if you’re testing assumptions fast</li>
      </ul>

      <h3>📍 Next Steps</h3>
      <ul>
        <li>Collect feedback on MVP from 5–10 target users</li>
        <li>Explore Glide + Make integrations for GPS/elevation APIs</li>
        <li>Possibly migrate to FlutterFlow for better sensor integration</li>
        <li>Add SOS functionality and real-time trail progress</li>
      </ul>
    `
  },
  {
    id: 'chopup-leftovers',
    title: "Designing ChopUp – For Leftovers That Deserve Better",
    date: "12th Jun 2025",
    readTime: "3 min read",
    excerpt: "So recently I was messing around with a fun product idea. What if there was an app that helped you figure out what to cook using just the random leftover ingredients in your fridge?",
    tags: ["cooking", "food", "recipe", "Product Design"],
    content: `
      <p>So recently I was messing around with a fun product idea. What if there was an app that helped you figure out what to cook using just the random leftover ingredients in your fridge?</p>
      <p>No grocery run. No scrolling endlessly on Pinterest. Just scan what you have and cook something legit.</p>
      <p>I called it ChopUp. It’s not a real app right now. Just a mockup with multiple experimented ideas and assistance from smart tools I made to explore product thinking and interface design. But I ended up liking how it turned out.</p>

      <h3>🍋 The Core Idea</h3>
      <p>We’ve all had those nights where you stare blankly into your fridge and see half a lemon, a lonely carrot, two boiled potatoes, and absolutely no clue what to do.</p>
      <p>The idea behind ChopUp is simple. <strong>Use what you already have.</strong></p>
      <p>You scan your ingredients or list them manually. The app gives you recipe suggestions based on what’s actually there. You can also set dietary preferences so you’re not seeing meals you can’t or don’t want to eat.</p>
      <p>That’s it. No fluff. Just a tool that solves a very real, very everyday problem.</p>

      <h3>🔍 What I Designed (and Why)</h3>
      <p>This part was fun. I tried to keep features tight and relevant. The goal was to make it super usable without bloating the experience. Here’s what I added:</p>

      <h4>1. Ingredient Scanner</h4>
      <p>Use your phone camera to scan the items in your fridge. Why? Because typing "half-used coriander leaves" is just annoying.</p>

      <h4>2. Manual Ingredient Entry</h4>
      <p>For when scanning fails or if you’re more of a control freak (guilty). Quick and clean.</p>

      <h4>3. Smart Recipe Suggestions</h4>
      <p>Only shows recipes based on what you currently have. If you’re short one or two things, it suggests easy substitutes.</p>

      <h4>4. Dietary Preferences</h4>
      <p>You can set restrictions like vegetarian, nut-free, keto, etc. Makes it feel more tailored and inclusive.</p>

      <h4>5. Leftover Reminders</h4>
      <p>Turn this on to get a gentle nudge before ingredients expire. Small feature, big impact on reducing waste.</p>

      <h4>6. Smartwatch Sync</h4>
      <p>You can push recipes to your watch. This makes it easier to cook without constantly unlocking your phone with floury fingers.</p>

      <h4>7. Saved Recipes and Shopping Lists</h4>
      <p>Because not every meal will be a spontaneous fridge dive. There’s room for planning too.</p>

      <h3>🎨 Design Style</h3>
      <p>The UI is super minimal. I wanted it to feel calm and clean. Clear icons, soft tones, and simple navigation tabs for Home, Recipes, Saved, and Profile. You shouldn’t have to think too much while using it. Especially not when you’re hungry.</p>

      <h3>👀 Why I Made This</h3>
      <p>I’ve been getting more hands-on with product design lately and I wanted to go beyond just sketching an idea. This was my attempt to think like a PM and designer at once.</p>
      <p>Some questions I tried to answer:</p>
      <ul>
        <li>How do I remove friction for users?</li>
        <li>How can the app be helpful but not annoying?</li>
        <li>What edge cases need thinking through, like having too few ingredients or fuzzy camera scans?</li>
      </ul>
      <p>It’s not a complicated app, but the idea is grounded in real, messy, daily behavior. That’s what made it fun to work on.</p>

      <h3>🎯 Just a Concept, Not a Launch</h3>
      <p>This isn’t a serious startup or anything. It’s just a side idea I played with because I think building something, even for fun, teaches you more than just talking about it.</p>
      <p>Still, if it got you thinking about how you’d use something like this, or you’ve got ideas to add, I’d love to hear.</p>
      <p>Thanks for reading. And if your fridge looks chaotic right now, maybe this is your sign to do something about it!</p>
    `
  },
  {
    id: 'apple-q4-dashboard',
    title: "Reimagining Apple’s Q4 2024 Financials as a Modern Product Dashboard",
    date: "8th Jun 2025",
    readTime: "4 min read",
    excerpt: "Apple’s Q4 2024 results were packed with signals. Services surged. iPhone demand stayed strong. China showed signs of recovery. But reading through a dense 10-K or earnings PDF? Not the most intuitive experience.",
    tags: ["Dashboard", "Finance", "Apple"],
    content: `
      <p>Apple’s Q4 2024 results were packed with signals. Services surged. iPhone demand stayed strong. China showed signs of recovery. But reading through a dense 10-K or earnings PDF? Not the most intuitive experience.</p>
      <p>So I decided to rethink how we see financials. I designed a sleek, widescreen dashboard that tells Apple’s Q4 story the way a product team might — with clarity, structure, and focus.</p>

      <h3>Why I Did It: Product Thinking Meets Financial Data</h3>
      <p>Financial reports are informative, but they’re not always usable. Product managers deal with data constantly, but we need it fast, visual, and actionable.</p>
      <p>So I asked myself:</p>
      <ul>
        <li>What would I want to see if I were a PM at Apple?</li>
        <li>How can design reveal business signals clearly?</li>
        <li>What’s the simplest way to turn earnings into insights?</li>
      </ul>
      <p>This dashboard became an exercise in business clarity — prototyped through design.</p>

      <h3>The Design Approach: Clean, Confident, and Apple-Inspired</h3>
      <p>I built the dashboard in Figma, designed for landscape desktop viewing. Think Studio Display or MacBook Pro screen — wide, open, and sharp.</p>
      <p><strong>Visual Style:</strong> Minimal spacing, monochrome palette with soft gradients, SF Pro typeface, and generous white space.</p>
      <p><strong>Layout System:</strong> Modular cards for revenue, YoY changes, segment breakdowns, and key regions. Each one designed to be clean and skimmable.</p>
      <p><strong>Interactivity (Conceptual):</strong> Toggle views by region, product, and quarter. Smooth motion and hover states give it a light, responsive feel.</p>

      <h3>What the Data Reveals</h3>
      <blockquote>"Good design doesn’t just show everything. It helps you see what matters."</blockquote>
      <p>Here are some of the key takeaways surfaced through the dashboard:</p>
      <ul>
        <li>Services revenue hit $24.1B, now close to 27 percent of Apple’s total revenue. That’s a structural shift.</li>
        <li>iPhone grew 7.2 percent year-over-year with only 10 days of iPhone 16 sales in the quarter.</li>
        <li>China rebounded 5.7 percent after three weak quarters.</li>
        <li>iPad declined 3.1 percent year-over-year, falling behind other categories.</li>
      </ul>
      <p>Each stat tells a story. For a PM, this could guide prioritization, focus areas, and roadmap conversations.</p>

      <h3>Product Thinking Behind the Scenes</h3>
      <p>This wasn’t just a design project. It was a product-thinking challenge:</p>
      <ul>
        <li><strong>Clarity first:</strong> Cut the noise and highlight movement.</li>
        <li><strong>Reusable components:</strong> Cards built like features — consistent and efficient.</li>
        <li><strong>Narrative-driven:</strong> Present data like a story, not a spreadsheet.</li>
        <li><strong>Quick takeaways:</strong> Reduce time to insight for decision-makers.</li>
      </ul>
      <p>It’s the same mindset we use when building products — applied to business data.</p>

      <h3>Tools Used: AI + Intuition</h3>
      <p>I used AI along the way to structure the data and sharpen the storytelling. It wasn’t about replacing design sense — it was about moving faster.</p>
      <p>AI helped generate clean layouts, surface key insights, and make the process more fluid. But every design decision was made with intention and product context.</p>

      <h3>Final Thoughts</h3>
      <p>Apple has always focused on experience. This dashboard was my way of imagining how financial results could feel more like an experience than a report.</p>
      <p>Design, data, and product thinking all came together here — with a bit of AI to accelerate the process.</p>
      <p>If you’re into dashboards, product strategy, or turning complexity into clarity, let’s connect.</p>
    `
  },
  {
    id: 'ai-security-dashboard',
    title: "I Got Tired of Manual Dashboards — So I Let AI do the Dirty Work",
    date: "2nd Jun 2025",
    readTime: "3 min read",
    excerpt: "What if I told you that I built something in a day that security teams usually spend entire weeks sweating over? No more late nights formatting bar charts in Excel.",
    tags: ["AI", "Automation", "Dashboard"],
    content: `
      <p>What if I told you that I built something in a day that security teams usually spend entire weeks sweating over? No more late nights formatting bar charts in Excel or praying Power BI doesn’t crash mid-presentation. This is a dashboard that actually works for you.</p>

      <h3>The Problem: Death by Dashboard</h3>
      <p>Let’s face it — security reporting has become a grind. Endless log files, vulnerability reports, and compliance checks. And somehow, every insight has to be handcrafted in a spreadsheet that looks like a rejected art project.</p>
      <p>You know the drill:</p>
      <ul>
        <li>Dozens of CSVs stitched together</li>
        <li>Complex filters that break every time someone sneezes</li>
        <li>Power BI visuals that load slower than a Monday morning</li>
      </ul>
      <p>Enough of that. Seriously.</p>

      <h3>The Fix: Let the Machines Do the Dirty Work</h3>
      <p>So I asked, why are we still doing this manually when we’ve got AI?</p>
      <p>That’s when I built a dashboard that cuts through the noise. It pulls in the mess, makes sense of it, and serves it up clean and ready for action. One screen. Real insight. No manual labor.</p>
      <p>And while you’re seeing static screenshots here, don’t be mistaken — the real dashboard is interactive, filterable, and fully functional. We’re not playing with image generators here. This thing actually runs.</p>

      <h3>What This Dashboard Delivers</h3>
      
      <h4>Top 5 Critical Findings</h4>
      <p>No more hunting. Just the biggest fires, automatically ranked and ready to tackle.</p>

      <h4>Assets with Most Issues</h4>
      <p>Know where the mess is piling up. The AI doesn’t miss. It spotted the troublemakers before I even had coffee.</p>

      <h4>Quick Wins</h4>
      <p>Security teams love fast wins. These are surfaced instantly so you can stop wasting time on low-impact fixes.</p>

      <h4>Findings by Age</h4>
      <p>Visualizing tech debt has never been this painless. No pivots, no VLOOKUPs, just a clear view.</p>

      <h4>Severity Heatmap</h4>
      <p>Get a true risk snapshot by asset type. Now you know if your printers are secretly plotting your downfall.</p>

      <h3>How It Works (Without the Tech Headache)</h3>
      <p>No custom models, no complex backend engineering. I just knew how to speak fluent AI.</p>
      <p>By combining a sharp product sense with precise prompting, I was able to guide advanced AI tools to generate a fully functional security dashboard layout — complete with filters, live insights, and a clean, enterprise-ready UI.</p>
      <p>I mapped out exactly what security teams need:</p>
      <ul>
        <li>Actionable data, not just visual clutter</li>
        <li>Prioritized findings based on real risk</li>
        <li>Clear ownership and remediation timelines</li>
        <li>A layout that makes sense at a glance</li>
      </ul>
      <p>With that vision in place, the AI helped translate it into a working dashboard that feels like a true command center — not another noisy spreadsheet in disguise.</p>
      <p>No design or development team. No weeks of wireframing. Just the right prompts and the right tools.</p>

      <h3>Why This Matters</h3>
      <ul>
        <li>Saves you six hours a week (minimum)</li>
        <li>Frees up security teams to actually fix problems instead of building reports</li>
        <li>Gives leadership the clarity they crave without the fluff</li>
        <li>And best of all, it doesn’t involve PowerPoint animations or Excel formulas gone rogue</li>
      </ul>

      <h3>Final Thoughts</h3>
      <p>This dashboard isn’t just a project. It’s a statement. We’re done wasting time where machines can handle the load. This is what happens when you combine AI with real product thinking.</p>
      <p>And yes, I’m proudly retiring from the spreadsheet grind.</p>
    `
  },
  {
    id: 'feelix-mood-productivity',
    title: "Designing Feelix: A Mood-Based Productivity Companion",
    date: "27th May 2025",
    readTime: "4 min read",
    excerpt: "In the age of hyper-productivity and endless to-do lists, most productivity apps ask: “What do you want to get done today?” But very few ask: “How are you feeling today?”",
    tags: ["health", "mental-health", "productivity"],
    content: `
      <h3>The Problem: Productivity Tools Are Emotion-Blind</h3>
      <p>Productivity apps today are data-rich but context-poor. They know what needs to be done but not when it’s the right time for the user to do it. Whether you’re anxious, excited, or exhausted, most tools treat you like a robot.</p>
      <p>This mismatch often leads to friction. You ignore notifications, procrastinate, or power through work at the cost of burnout. In short, the tool helps you “do more” but not necessarily “feel better.”</p>
      <p>That’s where I got the idea of Feelix, and how its concept changes the game.</p>

      <h3>The Concept: Feel Better, Do Better</h3>
      <p>Feelix begins every day with a check-in screen: “How Are You Feeling Today?” A friendly set of emojis lets users select their current mood — Excited, Happy, Neutral, Stressed, or Angry.</p>
      <p>Once selected, the AI recommendation engine kicks in. Based on your emotional state, it:</p>
      <ul>
        <li>Suggests a task order that fits your current capacity</li>
        <li>Prioritizes high-focus or low-effort tasks based on your mood</li>
        <li>Provides motivational nudges that speak to how you’re feeling</li>
      </ul>
      <p>This isn’t just a UI experiment. It’s product psychology in action.</p>

      <h3>The Wireframe: Translating Emotion Into Flow</h3>
      <p>The mockups (designed by me) showcase how Feelix flows from mood selection to personalized productivity:</p>
      <ul>
        <li><strong>Mood Check-in:</strong> Emotion-first UI that makes daily planning feel conversational</li>
        <li><strong>Smart Task Sorting:</strong> A recommended order list powered by emotional context</li>
        <li><strong>Progress Tracking:</strong> Bar charts and positivity metrics tied not just to output, but emotional consistency</li>
        <li><strong>AI-Powered Insights:</strong> Suggestions that nudge the user based on patterns in mood and task performance over time</li>
      </ul>
      <p>Design-wise, the interface is clean, friendly, and empathetic. It respects the user’s mental state while nudging them gently toward progress.</p>

      <h3>The Product Management Angle: Why This Matters</h3>
      <p>Product Managers obsess over features, flows, and frameworks, but emotion is often the missing variable. Great products don’t just solve problems, they connect with how users feel while solving them.</p>
      <p>Feelix is a conceptual reminder that:</p>
      <ul>
        <li>Contextual UX matters more than feature bloat</li>
        <li>AI can go beyond prediction, it can personalize experience</li>
        <li>Emotional insight should inform prioritization logic</li>
        <li>Delight and empathy are differentiators, not afterthoughts</li>
      </ul>

      <h3>Is This Real?</h3>
      <p>Right now, Feelix is a running concept. The mockups are real, and the vision is clear. The next step? I’m not really sure to be honest, building a robust app like this requires a highly skilled team with a shared vision, with which we can have a lightweight prototype, testing of emotional check-ins vs. default task flows, and validate if this model boosts engagement and well-being.</p>
      <p>And maybe, just maybe, rethink what it means to “be productive.”</p>

      <h3>If This Resonates…</h3>
      <p>I’d love to hear your thoughts. Would you use an app like Feelix? How else do you think emotion can play a larger role in product design?</p>
      <p>Until then... Feel better. Do better.</p>
    `
  },
  {
    id: 'wireframing-product-thinking',
    title: "Why Wireframing Matters in Product Thinking?",
    date: "22nd May 2025",
    readTime: "3 min read",
    excerpt: "Before anything becomes a product, it begins as a thought — rough, raw, and often messy. Translating that idea into a functional, usable, and delightful product is where the real challenge begins.",
    tags: ["Wireframing", "Product Thinking"],
    content: `
      <h3>A Look at My Video App Wireframe (YouTube-inspired)</h3>
      <p>Before anything becomes a product, it begins as a thought — rough, raw, and often messy. Translating that idea into a functional, usable, and delightful product is where the real challenge and fun begins. That’s where wireframing enters the scene, a vital step in every product builder’s toolkit.</p>
      <p>Today, I’m sharing a wireframe I created for a video streaming platform, loosely inspired by YouTube. It’s a simplified concept meant to focus on layout, structure, and user flow, not polish or pixel perfection.</p>

      <h3>What I Focused on in This Wireframe</h3>
      <ul>
        <li><strong>Video Area and Playback:</strong> This is the core experience. I wanted to give it prominence, mimicking the typical user behavior — come to watch, stay to explore.</li>
        <li><strong>Search and Navigation:</strong> At the top, I included intuitive navigation and a search bar, helping users access what they need quickly.</li>
        <li><strong>Suggested Content:</strong> Inspired by YouTube’s genius in content discovery, I placed suggested videos on the side. This supports engagement and retention.</li>
        <li><strong>Subscription and Interaction Section:</strong> The subscribe button, channel tag, and notification icon were included with intention — to simulate user interaction, engagement, and platform loyalty.</li>
      </ul>
      <p>Every element was purposefully placed, and it helped me practice thinking like a product manager — not just imagining what looks good, but asking: What problem does this solve? How does this help the user flow?</p>

      <h3>Why I Did This</h3>
      <p>Creating this wireframe taught me more than any tutorial ever could. It made me realize that product thinking starts on paper (or screen), and before anything flashy comes in, it’s about structuring the experience with intention.</p>
      <p>This wasn’t just a UI task. It was a hands-on product management exercise. Understanding how content, interaction, and navigation co-exist — even in a basic sketch — is a skill I’m building one screen at a time.</p>

      <h3>What is Wireframing — and Why Should PMs Care?</h3>
      <p>A wireframe is the skeleton of a user interface. It shows what goes where — not how it will look in the final version. Think of it as the blueprint of a building before the architecture or interior design is even considered.</p>
      <p>But wait….isn’t this a job for designers?</p>
      <p>Yes… and no.</p>
      <p>While UI/UX designers often lead this step, product managers benefit immensely from understanding wireframing. Why?</p>
      <ul>
        <li>🧭 It helps clarify product flow and priorities before diving into aesthetics.</li>
        <li>🧩 It facilitates meaningful collaboration with design and tech teams.</li>
        <li>🗣️ It makes it easier to communicate ideas and features to stakeholders.</li>
        <li>⚡ It helps identify usability issues early, saving time and resources later.</li>
      </ul>
      <p>As a PM-in-progress, being able to sketch a basic wireframe makes my ideas more tangible and testable.</p>

      <h3>Wireframe vs. Mockup vs. Prototype – What’s the Difference?</h3>
      <p>Let’s simplify:</p>
      <ul>
        <li><strong>Wireframe</strong> = Structure → What goes where</li>
        <li><strong>Mockup</strong> = Visuals → How it will look</li>
        <li><strong>Prototype</strong> = Experience → How it works when you interact with it</li>
      </ul>
      <p>Right now, I’m focusing on mastering wireframes. But I’ll be sharing mockups and interactive prototypes in upcoming posts too — especially designs built using popular tools I’m experimenting with.</p>

      <h3>Lessons I Learned</h3>
      <ol>
        <li><strong>Clarity over complexity</strong> — Wireframes aren’t supposed to be pretty. They’re meant to be clear.</li>
        <li><strong>Every element needs a reason</strong> — Whether it’s the subscribe button or the suggested video panel, everything should serve the user’s journey.</li>
        <li><strong>PMs should know this</strong> — You don’t need to be a designer, but being able to sketch your vision changes the way you think.</li>
      </ol>

      <h3>Final Thoughts</h3>
      <p>This isn’t about mimicking YouTube. This is about learning how product ideas take shape, one sketch at a time. Wireframing gives me a deeper respect for product design decisions and a stronger foundation for collaborating with UX experts in the future.</p>
      <p>Thanks for scrolling! Stay tuned for more visual journeys — mockups, prototypes, and more!</p>
    `
  },
  {
    id: 'why-product-management',
    title: "Why I Chose Product Managment – A Beginner’s Lens",
    date: "21st May 2025",
    readTime: "3 min read",
    excerpt: "Product Management. It’s a title that sounds sleek, powerful, and just a little bit mysterious. A few years ago, I barely knew what it meant. Today, I’m building my foundation to become one.",
    tags: ["Product Management", "Career"],
    content: `
      <p>Product Management. It’s a title that sounds sleek, powerful, and just a little bit mysterious. A few years ago, I barely knew what it meant. Today, I’m building my foundation to become one — one blog post, one user insight, and one design project at a time.</p>
      <p>So, why product management? Why not coding, design, marketing, or strategy alone? The answer lies somewhere at the intersection of all of them.</p>

      <h3>The Spark</h3>
      <p>My fascination with product management was not born in a lecture hall. It began with basic curiosity: Why are some apps so intuitive and others infuriating? Why do some features thrill you and others sound like background noise?</p>
      <p>As I ventured into the world behind these choices, I learned something great — the work of a Product Manager (PM). The PM is not merely a planner. He’s a builder without a code, a designer without pixels, a strategist without a briefcase. They assemble teams, set vision, prioritize challenges, and tirelessly focus on what really counts: the user.</p>

      <h3>What Drew Me In?</h3>
      <p>Here’s what makes product management exciting to me:</p>
      <ul>
        <li><strong>Big Picture Thinking:</strong> I love zooming out to see the overall strategy. What are we building, and why?</li>
        <li><strong>Collaboration:</strong> Working across teams, tech, design and sales is something I’ve naturally gravitated towards.</li>
        <li><strong>User-Centric Mindset:</strong> There’s real power in listening to users, identifying their pain points, and delivering value.</li>
        <li><strong>Rapid Learning:</strong> PMs don’t just stick to one skill. They’re constantly learning things such as market trends, user behavior, tech constraints.</li>
      </ul>

      <h3>My Learning Path So Far</h3>
      <p>As a BBA student and a curious beginner, I’ve started laying the groundwork:</p>
      <ul>
        <li>Completed the Udemy course: Become a Product Manager | Learn the Skills & Get the Job, which gave me a comprehensive overview of product lifecycles, user research, wireframing, and roadmap building</li>
        <li>Finished courses in Digital Marketing, Leadership, and Software Architecture</li>
        <li>Built design mockups of various apps in Figma to visualize ideas and explore user flows.</li>
        <li>Currently interning at SBI Life under the Bancassurance channel, where I’m learning about customer objections, product positioning, and the role of financial products in people’s lives.</li>
        <li>Writing this blog, as a way to document, reflect, and share my journey in real time.</li>
      </ul>

      <h3>Where I’m Headed</h3>
      <p>I’m not an expert yet, and I’m not trying to be. But I’m deeply invested in becoming a thoughtful product manager, someone who can connect dots, ask the right questions, and ship things that actually make people’s lives better.</p>
      <p>This blog, ProdFolio, will be a place where I explore ideas, analyze products, share my learnings, and showcase design and strategy experiments. It’s raw, real, and evolving, just like me.</p>
      <p>If you’re someone who’s also curious about product management or just beginning your journey, stick around. Let’s learn, build, and grow!</p>
    `
  }
];

const Typewriter = ({ text }: { text: string[] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === text[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 1500);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % text.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 50 : 100, Math.random() * 150));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, text]);

  return (
    <span className="text-xl md:text-2xl font-medium text-gray-300">
      {text[index].substring(0, subIndex)}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#100F0F]/80 backdrop-blur-md py-4 border-b border-white/10' : 'py-6 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <img 
              src="https://prodfolios.wordpress.com/wp-content/uploads/2024/09/logo-revised-1.png" 
              alt="ProdFolio Logo" 
              className="w-10 h-10 object-contain group-hover:rotate-12 transition-transform duration-300"
              referrerPolicy="no-referrer"
            />
            <span className="font-display font-bold text-xl tracking-wide">ProdFolio</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium hover:text-[var(--color-accent)] transition-colors uppercase tracking-wider">About</a>
            <a href="#resume" className="text-sm font-medium hover:text-[var(--color-accent)] transition-colors uppercase tracking-wider">Resume</a>
            <a href="#work" className="text-sm font-medium hover:text-[var(--color-accent)] transition-colors uppercase tracking-wider">Work</a>
            <a href="#contact" className="text-sm font-medium hover:text-[var(--color-accent)] transition-colors uppercase tracking-wider">Contact</a>
            <a href="./resume.pdf" download className="text-sm font-medium px-5 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition-colors uppercase tracking-wider">Resume PDF</a>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-[#100F0F] flex flex-col p-6"
          >
            <div className="flex justify-end mb-12">
              <button onClick={() => setIsOpen(false)} className="text-white p-2">
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col gap-8 text-center">
              <a href="#about" onClick={() => setIsOpen(false)} className="text-4xl font-display font-bold hover:text-[var(--color-accent)]">About</a>
              <a href="#resume" onClick={() => setIsOpen(false)} className="text-4xl font-display font-bold hover:text-[var(--color-accent)]">Resume</a>
              <a href="#work" onClick={() => setIsOpen(false)} className="text-4xl font-display font-bold hover:text-[var(--color-accent)]">Work</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="text-4xl font-display font-bold hover:text-[var(--color-accent)]">Contact</a>
              <a href="./resume.pdf" download onClick={() => setIsOpen(false)} className="text-4xl font-display font-bold hover:text-[var(--color-accent)]">Resume PDF</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-6 pt-24">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center z-10"
      >
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-6">
          driven by <br />
          <span className="text-[var(--color-accent)] italic">insight</span>
        </h1>
        <div className="h-8 mb-8">
          <Typewriter text={["Aspiring Product Manager", "Strategy Enthusiast", "Builder"]} />
        </div>
        <p className="max-w-xl mx-auto text-lg text-gray-400 mb-10">
          I'm an aspiring Product Manager who values charisma in design and clarity in strategy. Keep scrolling to find out where I'm headed!
        </p>
        <a href="#work" className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-black px-8 py-4 rounded-full font-semibold hover:bg-white transition-colors duration-300">
          View my work <ArrowRight size={20} />
        </a>
      </motion.div>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-accent)] rounded-full mix-blend-screen filter blur-[128px] animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-[128px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-[#161616]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-8 uppercase">About Me</h2>
          <p className="text-2xl md:text-4xl font-medium text-gray-200 leading-tight mb-8">
            Hi, I'm Arnavv — an aspiring Product Manager who loves problem-solving.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="https://prodfolios.wordpress.com/wp-content/uploads/2024/09/1733906085327.jpeg" 
              alt="Arnavv Shukla" 
              className="w-full max-w-md mx-auto rounded-3xl grayscale hover:grayscale-0 transition-all duration-500 object-cover aspect-square"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 text-lg text-gray-400"
          >
            <p>
              <strong>ProdFolio</strong> is my dedicated space to explore and share everything I know about product management — from concepts and industry insights to hands-on design projects in tools like Figma.
            </p>
            <p>
              Here, I break down real-world ideas, user needs, and product thinking through blogs, case studies, and personal projects. This blog is my personal notebook of ideas, reflections, and experiments.
            </p>
            <p>
              I’m not here to teach or claim expertise — just to share what I discover as I dive deeper into how products are imagined, built, and improved. Whether it’s a rough wireframe, a thought-provoking question, or a breakdown of something I’m trying to understand, you’ll find it here.
            </p>
            <p className="text-white font-medium">
              If you're into ideas, creativity, and the early stages of building things, you're in the right place. Thanks for stopping by.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ExperienceTab = () => {
  const experiences = [
    {
      id: 1,
      role: "Summer Intern",
      company: "SBI Life",
      duration: "2025",
      points: [
        "Drove ₹34L in premium sales with 75% target achievement and a 53% lead-to-sale conversion rate.",
        "Pitched and closed loan protection insurance with home loan customers, collaborating with branch managers.",
        "Enhanced customer experience by streamlining premium calculations and policy documentation."
      ]
    },
    {
      id: 2,
      role: "Corporate Interface Group",
      company: "TAPMI Atharva Committee",
      duration: "2025",
      points: [
        "Responsible for industry outreach, partnerships, and speaker engagement.",
        "Contributed to event strategy, branding, and stakeholder communication.",
        "Coordinated with partners to design high-impact events and case competitions."
      ]
    },
    {
      id: 3,
      role: "Core Member",
      company: "MAHE UTSAV 2025",
      duration: "2025",
      points: [
        "Built relations & collaborated with core organizing members to make the fest a success.",
        "Ensured timely access to important event deliverables as part of the info desk team."
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      {experiences.map((exp) => (
        <div key={exp.id} className="bg-[#1A1A1A] p-6 md:p-8 rounded-3xl border border-white/5 hover:border-[var(--color-accent)]/30 transition-colors">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
            <div>
              <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
              <p className="text-[var(--color-accent)] font-medium text-lg">{exp.company}</p>
            </div>
            <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-sm font-medium w-fit">
              {exp.duration}
            </span>
          </div>
          <ul className="space-y-3 mt-6">
            {exp.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-400">
                <span className="text-[var(--color-accent)] mt-1">✦</span>
                <span dangerouslySetInnerHTML={{ __html: point.replace(/(₹34L|75%|53%)/g, '<strong class="text-white">$1</strong>') }} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </motion.div>
  );
};

const EducationTab = () => {
  const education = [
    {
      id: 1,
      degree: "IPM (Integrated Program in Management)",
      school: "T. A. Pai Management Institute",
      year: "2026 (Pursuing)",
      score: ""
    },
    {
      id: 2,
      degree: "Class XII (Commerce)",
      school: "Orchids The International School",
      year: "2023",
      score: "88.6%"
    },
    {
      id: 3,
      degree: "Class X",
      school: "Indus Valley World School",
      year: "2021",
      score: "90.1% (Batch-Level Top 10)"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="relative border-l-2 border-white/10 ml-4 md:ml-8 space-y-12 py-4"
    >
      {education.map((edu) => (
        <div key={edu.id} className="relative pl-8 md:pl-12">
          <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-[var(--color-accent)] shadow-[0_0_15px_var(--color-accent)]"></div>
          <div className="bg-[#1A1A1A] p-6 md:p-8 rounded-3xl border border-white/5 hover:border-[var(--color-accent)]/30 transition-colors">
            <span className="text-sm font-medium text-gray-500 mb-2 block">{edu.year}</span>
            <h3 className="text-2xl font-bold text-white mb-1">{edu.degree}</h3>
            <p className="text-[var(--color-accent)] font-medium text-lg mb-3">{edu.school}</p>
            {edu.score && (
              <p className="text-gray-400">Score: <strong className="text-white">{edu.score}</strong></p>
            )}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

const SkillsTab = () => {
  const skills = [
    { name: "FIGMA", level: 90, category: "Design" },
    { name: "Balsamiq", level: 85, category: "Design" },
    { name: "Prompt Engineering", level: 80, category: "Technical" },
    { name: "Google Analytics", level: 75, category: "Technical" },
    { name: "Jira", level: 80, category: "Management" },
    { name: "Trello", level: 85, category: "Management" },
    { name: "WordPress", level: 70, category: "Technical" },
    { name: "Canva", level: 95, category: "Design" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="grid md:grid-cols-2 gap-8"
    >
      {skills.map((skill, idx) => (
        <div key={skill.name} className="bg-[#1A1A1A] p-6 rounded-3xl border border-white/5 group hover:border-[var(--color-accent)]/30 transition-colors">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-bold text-white group-hover:text-[var(--color-accent)] transition-colors">{skill.name}</h4>
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-gray-400">
              {skill.category}
            </span>
          </div>
          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 + idx * 0.1, ease: "easeOut" }}
              className="h-full bg-[var(--color-accent)] rounded-full"
            />
          </div>
        </div>
      ))}
    </motion.div>
  );
};

const AchievementsTab = () => {
  const achievements = [
    { title: "National Winner – AI-Fluence", org: "Sri Ram College of Commerce, Delhi", year: "2025", type: "Award" },
    { title: "Runner Up – Pitch Perfect", org: "Indian Institute of Management, Raipur", year: "2025", type: "Award" },
    { title: "Second Runner Up: NEXUS 2024", org: "Goa Institute of Management, Goa", year: "2024", type: "Award" },
    { title: "Product Management: Learn the skills and get the job", org: "Udemy", year: "2025", type: "Certification" },
    { title: "Product Management Job Simulation", org: "Electronic Arts (Forage)", year: "2024", type: "Certification" },
    { title: "Product Design Simulation", org: "Accenture (Forage)", year: "2024", type: "Certification" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="grid md:grid-cols-2 gap-6"
    >
      {achievements.map((item, idx) => (
        <div key={idx} className="bg-[#1A1A1A] p-6 rounded-3xl border border-white/5 hover:border-[var(--color-accent)]/30 transition-colors flex flex-col h-full group">
          <div className="flex justify-between items-start mb-4 gap-4">
            <div className={`p-3 rounded-2xl transition-colors ${item.type === 'Award' ? 'bg-yellow-500/10 text-yellow-500 group-hover:bg-yellow-500/20' : 'bg-[var(--color-accent)]/10 text-[var(--color-accent)] group-hover:bg-[var(--color-accent)]/20'}`}>
              {item.type === 'Award' ? <Award size={24} /> : <Star size={24} />}
            </div>
            <span className="text-sm font-medium text-gray-500">{item.year}</span>
          </div>
          <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[var(--color-accent)] transition-colors">{item.title}</h4>
          <p className="text-gray-400 mt-auto">{item.org}</p>
        </div>
      ))}
    </motion.div>
  );
};

const Resume = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const tabs = [
    { id: 'experience', label: 'Experience', icon: <Briefcase size={18} /> },
    { id: 'education', label: 'Education', icon: <GraduationCap size={18} /> },
    { id: 'skills', label: 'Skills', icon: <Wrench size={18} /> },
    { id: 'achievements', label: 'Achievements', icon: <Award size={18} /> },
  ];

  return (
    <section id="resume" className="py-32 px-6 bg-[#100F0F]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-6">interactive <span className="text-[var(--color-accent)] italic">resume</span></h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A quick glance at my professional journey, educational background, and the skills I bring to the table.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.id 
                  ? 'bg-[var(--color-accent)] text-black' 
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === 'experience' && <ExperienceTab key="exp" />}
            {activeTab === 'education' && <EducationTab key="edu" />}
            {activeTab === 'skills' && <SkillsTab key="skills" />}
            {activeTab === 'achievements' && <AchievementsTab key="ach" />}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const Work = () => {
  const handleBlogClick = (id: string) => {
    window.location.hash = `#blog/${id}`;
  };

  return (
    <section id="work" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-6">my work</h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            Here's a sample of my thoughts, case studies, and projects. I'll let you in on a secret... I have a lot more cool stuff in the works!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative bg-[#1A1A1A] rounded-3xl p-8 hover:bg-[#222] transition-colors cursor-pointer border border-white/5 hover:border-[var(--color-accent)]/50 flex flex-col h-full hover:-translate-y-2 duration-300 shadow-lg hover:shadow-[0_10px_30px_rgba(255,60,0,0.1)]"
              onClick={() => handleBlogClick(blog.id)}
            >
              <div className="mb-6 flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-[var(--color-accent)] transition-colors line-clamp-3">
                  {blog.title}
                </h3>
                <p className="text-gray-400 line-clamp-3 text-sm">
                  {blog.excerpt}
                </p>
              </div>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/10">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500">{blog.date}</span>
                  <span className="text-xs text-[var(--color-accent)] mt-1">{blog.readTime}</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[var(--color-accent)] group-hover:text-black transition-colors">
                  <ArrowRight size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BlogDetail = ({ blog, onBack }: { blog: typeof blogs[0], onBack: () => void }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#100F0F] pt-24 pb-32 relative"
    >
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[var(--color-accent)] origin-left z-50"
        style={{ scaleX }}
      />

      <div className="max-w-3xl mx-auto px-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-white mb-12 transition-colors group"
        >
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </button>

        <header className="mb-16">
          <div className="flex flex-wrap gap-2 mb-6">
            {blog.tags.map(tag => (
              <span key={tag} className="text-sm font-medium px-4 py-1.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {blog.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-400 border-b border-white/10 pb-8">
            <span>{blog.date}</span>
            <span>•</span>
            <span>{blog.readTime}</span>
          </div>
        </header>

        <div 
          className="blog-content prose-invert"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        <footer className="mt-20 pt-10 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img 
                src="https://prodfolios.wordpress.com/wp-content/uploads/2024/09/1733906085327.jpeg" 
                alt="Arnavv Shukla" 
                className="w-16 h-16 rounded-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div>
                <h4 className="font-bold text-lg">Arnavv Shukla</h4>
                <p className="text-gray-400 text-sm">Aspiring Product Manager</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <button onClick={handleCopyLink} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors" title="Copy Link">
                <Copy size={18} />
              </button>
              <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white transition-colors" title="Share on Twitter">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(blog.title)}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-colors" title="Share on LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <button 
              onClick={onBack}
              className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-colors duration-300"
            >
              <ChevronLeft size={20} /> Back to all posts
            </button>
          </div>
        </footer>
      </div>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-[var(--color-accent)] text-black rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors z-50"
          >
            <ArrowRight size={24} className="-rotate-90" />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const WhyMe = () => {
  const reasons = [
    {
      num: "01",
      title: "product thinking",
      desc: "Breaking down real-world ideas and user needs. I focus on the 'why' before the 'what', ensuring every feature solves a genuine problem."
    },
    {
      num: "02",
      title: "hands-on design",
      desc: "Creating wireframes and prototypes in Figma. I believe in visualizing ideas early to validate concepts and align stakeholders."
    },
    {
      num: "03",
      title: "problem solver",
      desc: "I love nothing more than a problem. I need problems to solve to get out of bed in the morning... the process of achieving it is what drives me."
    },
    {
      num: "04",
      title: "continuous learner",
      desc: "Documenting my journey, reflections, and experiments. I'm always exploring new tools, frameworks, and methodologies to improve my craft."
    },
    {
      num: "05",
      title: "nice human-being",
      desc: "I do my best to be a positive, kind and accommodating human! I'm a keen communicator, love working with others and helping teams succeed."
    }
  ];

  return (
    <section className="py-32 px-6 bg-[#161616] relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="font-display text-5xl md:text-7xl font-bold">why work with me?</h2>
        </motion.div>

        <div className="space-y-16">
          {reasons.map((reason, idx) => (
            <motion.div 
              key={reason.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col md:flex-row gap-6 md:gap-12 items-start"
            >
              <div className="text-4xl md:text-6xl font-bold text-white/10 font-display shrink-0">
                {reason.num}
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--color-accent)] lowercase">
                  {reason.title}
                </h3>
                <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-6xl md:text-8xl font-bold mb-6">
            call me, <br/><span className="text-[var(--color-accent)] italic">maybe</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-md">
            I'm looking for a challenging new position that will help me squeeze out the best of my creative juices! Don't hesitate to contact me - I'm eager to hear from you.
          </p>
          
          <div className="space-y-6">
            <a href="mailto:arnavvv.shukla@gmail.com" className="flex items-center gap-4 text-2xl hover:text-[var(--color-accent)] transition-colors w-fit">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <Mail size={24} />
              </div>
              arnavvv.shukla@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/arnavv-shukla-2839b0283/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-2xl hover:text-[var(--color-accent)] transition-colors w-fit">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <Linkedin size={24} />
              </div>
              LinkedIn
            </a>
            <a href="https://www.instagram.com/arnav_o_o/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-2xl hover:text-[var(--color-accent)] transition-colors w-fit">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <Instagram size={24} />
              </div>
              Instagram
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#161616] p-8 md:p-12 rounded-3xl border border-white/10"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                required
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                required
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea 
                id="message" 
                required
                rows={4}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              disabled={formStatus !== 'idle'}
              className="w-full bg-[var(--color-accent)] text-black font-bold text-lg py-4 rounded-xl hover:bg-white transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
            >
              {formStatus === 'idle' && 'Send Message'}
              {formStatus === 'submitting' && 'Sending...'}
              {formStatus === 'success' && 'Message Sent! ✓'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[var(--color-accent)] text-black py-20 px-6 rounded-t-[3rem] mt-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <h2 className="font-display text-6xl md:text-9xl font-bold mb-12 tracking-tighter">
          Let's work <br/> together
        </h2>
        
        <div className="flex gap-6 mb-16">
          <a href="mailto:arnavvv.shukla@gmail.com" className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-transform">
            <Mail size={28} />
          </a>
          <a href="https://www.linkedin.com/in/arnavv-shukla-2839b0283/" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-transform">
            <Linkedin size={28} />
          </a>
          <a href="https://www.instagram.com/arnav_o_o/" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-transform">
            <Instagram size={28} />
          </a>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center pt-8 border-t border-black/20 text-sm font-medium">
          <p>© {new Date().getFullYear()} Arnavv Shukla</p>
          <p>Made with love and creative juices</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:underline">Home</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#work" className="hover:underline">Work</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [currentView, setCurrentView] = useState<'portfolio' | 'blog'>('portfolio');
  const [activeBlogId, setActiveBlogId] = useState<string | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#blog/')) {
        const blogId = hash.replace('#blog/', '');
        const blogExists = blogs.some(b => b.id === blogId);
        if (blogExists) {
          setActiveBlogId(blogId);
          setCurrentView('blog');
          window.scrollTo(0, 0);
        } else {
          setCurrentView('portfolio');
          window.location.hash = '';
        }
      } else {
        setCurrentView('portfolio');
        setActiveBlogId(null);
      }
    };

    // Check hash on initial load
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleBackToPortfolio = () => {
    window.location.hash = '#work';
  };

  const activeBlog = blogs.find(b => b.id === activeBlogId);

  return (
    <div className="bg-[#100F0F] min-h-screen text-white font-sans selection:bg-[var(--color-accent)] selection:text-black">
      {currentView === 'portfolio' && <Navbar />}
      
      <AnimatePresence mode="wait">
        {currentView === 'portfolio' ? (
          <motion.main
            key="portfolio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
          >
            <Hero />
            <About />
            <Resume />
            <Work />
            <WhyMe />
            <Contact />
            <Footer />
          </motion.main>
        ) : (
          activeBlog && (
            <motion.div
              key="blog"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
            >
              <BlogDetail blog={activeBlog} onBack={handleBackToPortfolio} />
            </motion.div>
          )
        )}
      </AnimatePresence>
    </div>
  );
}
