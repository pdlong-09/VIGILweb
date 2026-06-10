const SITE = {
  links: {
    map: "#/map",
    applicationForm: "https://forms.gle/REPLACE_WITH_APPLICATION_FORM",
    facebookPage: "https://facebook.com/REPLACE_WITH_VIGIL",
    instagram: "https://instagram.com/REPLACE_WITH_VIGIL",
    projectEmail: "vigil.project@email.com",
    personalEmail: "your.email@example.com"
  },

  nav: [
    { label: "Home", page: "home" },
    {
      label: "Map",
      page: "map",
      menu: [
        { label: "Interactive Risk Map", page: "map" },
        { label: "How to Read the Map", page: "map-guide" },
        { label: "Current Pilot: Gia Lai", page: "map-pilot" },
        { label: "Share a Field Observation", page: "map-submit" }
      ]
    },
    {
      label: "About Us",
      page: "about",
      menu: [
        { label: "VIGIL's Origins", page: "origins" },
        { label: "What We Do", page: "what-we-do" },
        { label: "Our Team", page: "team" },
        { label: "Projected Timeline", page: "timeline" },
        { label: "Milestones", page: "milestones" },
        { label: "Reports", page: "reports" }
      ]
    },
    {
      label: "Our Work",
      page: "work",
      menu: [
        { label: "Three Pillars", page: "work" },
        { label: "Field Validation", page: "field-validation" },
        { label: "Awareness Work", page: "awareness-work" },
        { label: "Social Activities", page: "social-activities" }
      ]
    },
    {
      label: "Technology",
      page: "technology",
      menu: [
        { label: "How the Model Works", page: "model" },
        { label: "Data Sources", page: "data-sources" },
        { label: "Map Updates", page: "map-updates" },
        { label: "Accuracy Checks", page: "accuracy" },
        { label: "Transparency", page: "transparency" }
      ]
    },
    {
      label: "Stories",
      page: "stories",
      menu: [
        { label: "About the Story Project", page: "stories" },
        { label: "People", page: "story-people" },
        { label: "Plants", page: "story-plants" },
        { label: "Animals", page: "story-animals" },
        { label: "Places", page: "story-places" }
      ]
    },
    {
      label: "Community",
      page: "community",
      menu: [
        { label: "Facebook Community", page: "facebook-community" },
        { label: "Social Activities", page: "social-activities" },
        { label: "Partnerships", page: "partnerships" }
      ]
    },
    {
      label: "Join",
      page: "join",
      menu: [
        { label: "Be a VIGILANTEE", page: "join" },
        { label: "Departments", page: "departments" },
        { label: "Application Form", page: "application" }
      ]
    },
    { label: "Contact Us", page: "contact" }
  ],

  pages: {
    home: {
      layout: "home",
      eyebrow: "Vietnam Intelligent Guardian Interface for Landscapes",
      title: "Protecting Vietnam's primary forests one step at a time.",
      intro: "VIGIL is a conservation technology initiative using AI risk mapping, field validation, storytelling, and community networks to help protect Vietnam's primary forests.",
      buttons: [
        { label: "About Us", page: "about", style: "secondary" },
        { label: "View Map", page: "map", style: "primary" },
        { label: "Join the Mission", page: "join", style: "secondary" }
      ],
      sections: [
        {
          type: "text",
          title: "Why the name V.I.G.I.L?",
          text: "V.I.G.I.L stands for Vietnam Intelligent Guardian Interface for Landscapes. The word vigil means staying awake, watchful, and present when something needs protection. For this project, the name carries two meanings: an intelligent interface that helps watch forest-risk signals, and a community that chooses not to look away from Vietnam's primary forests."
        },
        {
          type: "cards",
          title: "The three pillars",
          text: "VIGIL grows through three connected pillars. Each one makes the others stronger.",
          items: [
            {
              title: "Technology",
              text: "AI model, web map, research pipeline, prediction checks, and transparent data sources.",
              page: "technology"
            },
            {
              title: "Awareness",
              text: "Educational posts, field notes, visual explainers, and project updates on Facebook and Instagram.",
              page: "awareness-work"
            },
            {
              title: "Community",
              text: "A growing network of students, local contributors, partner initiatives, and conscious citizens.",
              page: "community"
            }
          ]
        },
        {
          type: "cards",
          title: "Start here",
          items: [
            {
              title: "Read our story",
              text: "Follow the journey from Cúc Phương to the research paper, the map, and the wider project.",
              page: "origins"
            },
            {
              title: "Explore the map",
              text: "See how VIGIL will present forest-risk zones and explain what each signal means.",
              page: "map"
            },
            {
              title: "Become a VIGILANTEE",
              text: "Join a department, contribute your skills, or help build the next stage of VIGIL.",
              page: "join"
            }
          ]
        }
      ]
    },

    map: {
      eyebrow: "Map",
      title: "Interactive Risk Map",
      intro: "The map is the core tool of VIGIL. It translates the technical model into visual risk zones that people can explore, discuss, validate, and understand.",
      sections: [
        { type: "map" },
        {
          type: "cards",
          title: "Map sections",
          items: [
            { title: "How to Read the Map", text: "A simple guide to risk colors, warning levels, and responsible interpretation.", page: "map-guide" },
            { title: "Current Pilot: Gia Lai", text: "The first technical pilot is based on K'Bang and Mang Yang districts in Gia Lai.", page: "map-pilot" },
            { title: "Share a Field Observation", text: "A future submission space for field-linked contributors and partner organizations.", page: "map-submit" }
          ]
        },
        { type: "note", text: "Developer note: replace the map placeholder with the production web map iframe or external map component when ready." }
      ]
    },

    "map-guide": {
      eyebrow: "Map",
      title: "How to Read the Map",
      intro: "VIGIL's map should be read as a prioritization tool, not as a final legal or enforcement judgment.",
      sections: [
        {
          type: "cards",
          items: [
            { title: "Red", text: "Higher predicted risk or stronger warning signal. These areas should be watched and prioritized for field validation." },
            { title: "Yellow", text: "Medium or uncertain signal. These areas may need repeated observation or better local context." },
            { title: "Green", text: "Lower predicted risk in the current update cycle. Green does not mean permanent safety." }
          ]
        },
        { type: "note", text: "Add screenshots and real map legends here once the final map colors and thresholds are confirmed." }
      ]
    },

    "map-pilot": {
      eyebrow: "Map",
      title: "Current Pilot: Gia Lai",
      intro: "The current technical pilot begins in Gia Lai, where VIGIL's model was first developed and tested through district-level analysis.",
      sections: [
        {
          type: "cards",
          items: [
            { title: "K'Bang", text: "Pipeline development area and key starting point for model construction." },
            { title: "Mang Yang", text: "Cross-area test location used to see how the model performs outside the first district." },
            { title: "Upcoming Gia Lai trip", text: "A field validation trip will compare predicted risk zones with ground observations and local context." }
          ]
        }
      ]
    },

    "map-submit": {
      eyebrow: "Map",
      title: "Share a Field Observation",
      intro: "This page is reserved for future field-linked contributors, partner organizations, local contacts, and VIGILANTEE teams.",
      sections: [
        {
          type: "embed",
          title: "Observation form placeholder",
          text: "Insert Google Form, Airtable, or a custom submission form here. Suggested fields: location, date, forest condition, photo/audio upload, contact, and permission to publish."
        }
      ]
    },

    about: {
      eyebrow: "About VIGIL",
      title: "About Us",
      intro: "VIGIL began with a field experience, became a research and mapping project, and is now growing into a wider platform for technology, awareness, and community action.",
      sections: [
        {
          type: "cards",
          title: "Explore About Us",
          items: [
            { title: "VIGIL's Origins", text: "The story that started at Cúc Phương and led to the research paper and the wider project.", page: "origins" },
            { title: "What We Do", text: "A detailed explanation of the three pillars and how they connect.", page: "what-we-do" },
            { title: "Our Team", text: "Space for founders, department heads, members, mentors, and open spots.", page: "team" },
            { title: "Projected Timeline", text: "A month-by-month milestone timeline with completed and future steps.", page: "timeline" },
            { title: "Milestones", text: "Major achievements and proof links, including the research paper when published.", page: "milestones" },
            { title: "Reports", text: "Field notes and activity reports from each major VIGIL activity.", page: "reports" }
          ]
        },
        {
          type: "text",
          title: "Our direction",
          text: "VIGIL is youth-initiated, but the ambition is not small. The long-term direction is to develop into a serious conservation organization that can work with schools, local communities, NGOs, researchers, and future international partners."
        }
      ]
    },

    origins: {
      eyebrow: "About Us",
      title: "VIGIL's Origins",
      intro: "The project began not from a recruitment file, but from a moment in the forest.",
      sections: [
        {
          type: "text",
          title: "Where it began",
          text: "During a trip to Cúc Phương National Park, the founding team began to see forest conservation as something urgent, personal, and deeply connected to Vietnam's future. The experience turned forest loss from a distant issue into a responsibility we could not ignore."
        },
        {
          type: "text",
          title: "From field experience to technology",
          text: "We realized that our role may not be to plant every tree by hand. Our strength was different: research, coding, data, design, communication, and the ability to build a tool that helps people see risk across a much larger landscape. That realization became the beginning of the VIGIL map and research paper."
        },
        {
          type: "note",
          text: "Content slot: add real Cúc Phương photos, a founding-team quote, and one short personal memory from the trip."
        }
      ]
    },

    "what-we-do": {
      eyebrow: "About Us",
      title: "What We Do",
      intro: "VIGIL works through three pillars: Technology, Awareness, and Community.",
      sections: [
        {
          type: "cards",
          items: [
            { title: "Technology", text: "We build and explain AI-assisted forest-risk mapping, with transparent data sources and validation plans.", page: "technology" },
            { title: "Awareness", text: "We turn forest risk into public content: explainers, field notes, updates, and media posts.", page: "awareness-work" },
            { title: "Community", text: "We connect people who can care, share, validate, partner, or act for Vietnam's primary forests.", page: "community" }
          ]
        },
        {
          type: "text",
          title: "How the pillars work together",
          text: "The model identifies risk. Field trips check the predictions. Stories and posts make the issue visible. Community and partners help the project grow beyond the founding team. Each part strengthens the others."
        }
      ]
    },

    team: {
      eyebrow: "About Us",
      title: "Our Team",
      intro: "Use this page to introduce the core team, department heads, members, mentors, and future open spots.",
      sections: [
        {
          type: "team",
          title: "Leadership and members",
          items: [
            { role: "Founder / Project Lead", name: "Name here", bio: "Open bio slot: role, school, focus, and why VIGIL matters." },
            { role: "Technology Lead", name: "Name here", bio: "Open bio slot: model, map, data, and research responsibilities." },
            { role: "Media & Design Head", name: "Recruiting", bio: "Open bio slot after recruitment." },
            { role: "Human Resources Head", name: "Recruiting", bio: "Open bio slot after recruitment." },
            { role: "Finance Head", name: "Recruiting", bio: "Open bio slot after recruitment." },
            { role: "Advisor / Mentor", name: "Name here", bio: "Open bio slot for mentor guidance and expertise." }
          ]
        },
        { type: "note", text: "After department heads are selected, replace recruitment descriptions with their contacts and responsibilities." }
      ]
    },

    timeline: {
      eyebrow: "About Us",
      title: "Projected Timeline",
      intro: "This timeline uses specific months and milestones so the project feels trackable and real.",
      sections: [
        {
          type: "timeline",
          title: "Milestone timeline",
          items: [
            { date: "2025", title: "Cúc Phương field trip", text: "Founding inspiration: the team begins caring seriously about Vietnam's primary forests.", done: true },
            { date: "Early 2026", title: "Research pipeline", text: "Development of the first deforestation-risk model and research manuscript.", done: true },
            { date: "June 2026", title: "Website and community build", text: "Rework VIGIL into a public platform with map, storytelling, community, and recruitment.", done: true },
            { date: "Summer 2026", title: "Recruitment round", text: "Open departments for Finance, HR, Media & Design, and future technical contributors.", done: false },
            { date: "Upcoming", title: "Gia Lai field validation", text: "Check prediction accuracy, collect field notes, create stories, and build local/partner links.", done: false },
            { date: "After validation", title: "Community and partner expansion", text: "Use field contacts and NGO partnerships to strengthen the Facebook community and website updates.", done: false }
          ]
        }
      ]
    },

    milestones: {
      eyebrow: "About Us",
      title: "Milestones",
      intro: "This page collects major achievements and links to proof when available.",
      sections: [
        {
          type: "cards",
          items: [
            { title: "Research paper", text: "Placeholder for title, abstract, journal link, DOI, and downloadable PDF once published.", page: "technology" },
            { title: "Web map prototype", text: "Placeholder for map link, screenshots, version notes, and current pilot area.", page: "map" },
            { title: "Recruitment launch", text: "Placeholder for recruitment dates, departments opened, and application results.", page: "join" },
            { title: "Field validation trip", text: "Placeholder for Gia Lai trip report, photos, GPS checks, story entries, and lessons learned.", page: "reports" }
          ]
        }
      ]
    },

    reports: {
      eyebrow: "About Us",
      title: "Reports and Field Notes",
      intro: "Reports document what VIGIL does, what was learned, and what changed after each activity.",
      sections: [
        {
          type: "cards",
          items: [
            { title: "Cúc Phương reflection", text: "Origin report and personal reflection from the founding trip.", page: "origins" },
            { title: "Gia Lai field report", text: "Coming soon: prediction checks, observations, photos, audio, and local context.", page: "field-validation" },
            { title: "Monthly progress report", text: "Coming soon: platform updates, recruitment, partnerships, and community growth." }
          ]
        }
      ]
    },

    work: {
      eyebrow: "Our Work",
      title: "Our Work",
      intro: "Our work is where the three pillars become real activities: technical development, field validation, awareness-building, and community engagement.",
      sections: [
        {
          type: "cards",
          title: "The work areas",
          items: [
            { title: "Field Validation", text: "Trips that compare model predictions with real conditions and local knowledge.", page: "field-validation" },
            { title: "Awareness Work", text: "Posts, explainers, media updates, and education around forest risk.", page: "awareness-work" },
            { title: "Social Activities", text: "Campaigns, workshops, community activities, and partner projects.", page: "social-activities" }
          ]
        }
      ]
    },

    "field-validation": {
      eyebrow: "Our Work",
      title: "Field Validation",
      intro: "Field validation helps VIGIL connect digital predictions with real landscapes, local knowledge, and observed conditions.",
      sections: [
        {
          type: "text",
          title: "How it works",
          text: "Before each trip, the team selects important risk areas from the map. During the trip, we collect observations, photos, audio notes, GPS points, and local perspectives. After the trip, we compare what the model predicted with what the field team actually saw."
        },
        {
          type: "cards",
          items: [
            { title: "Prediction checks", text: "Compare red, yellow, and green zones with field observations." },
            { title: "Local context", text: "Learn from people who understand the landscape beyond the satellite view." },
            { title: "Media and stories", text: "Collect photos, notes, and story subjects for the website and social pages." }
          ]
        }
      ]
    },

    "awareness-work": {
      eyebrow: "Our Work",
      title: "Awareness Work",
      intro: "Awareness work turns the map and research into content that people can understand, care about, and share.",
      sections: [
        {
          type: "cards",
          items: [
            { title: "Map explainers", text: "Simple posts explaining risk zones and model updates." },
            { title: "Field notes", text: "Trip updates, behind-the-scenes posts, and short reports." },
            { title: "Forest education", text: "Posts about primary forests, biodiversity, floods, erosion, and conservation." },
            { title: "Storytelling", text: "People, plants, animals, and places from the Forest Stories sub-project.", page: "stories" }
          ]
        }
      ]
    },

    "social-activities": {
      eyebrow: "Our Work / Community",
      title: "Social Activities",
      intro: "This page can appear under both Our Work and Community. It records the activities, campaigns, and public-facing achievements of VIGIL.",
      sections: [
        {
          type: "cards",
          items: [
            { title: "Field trip activities", text: "Expeditions, workshops, interviews, and validation work." },
            { title: "Community campaigns", text: "Online and offline activities that invite people to learn, share, and participate." },
            { title: "Partner activities", text: "Joint actions with schools, NGOs, environmental clubs, or local initiatives." }
          ]
        },
        { type: "note", text: "This page can double as an achievements page once activities are completed." }
      ]
    },

    technology: {
      eyebrow: "Technology",
      title: "Technology and Transparency",
      intro: "This section explains how the model works, where the data comes from, how updates happen, and what the model cannot claim yet.",
      sections: [
        {
          type: "cards",
          title: "Explore Technology",
          items: [
            { title: "How the Model Works", text: "Plain-language explanation of the prediction pipeline.", page: "model" },
            { title: "Data Sources", text: "Satellite, terrain, rainfall, and forest-loss datasets used by the model.", page: "data-sources" },
            { title: "Map Updates", text: "How new data and field observations may update the platform.", page: "map-updates" },
            { title: "Accuracy Checks", text: "How field trips and reports compare predictions with real conditions.", page: "accuracy" },
            { title: "Transparency", text: "Limitations, responsible use, and future improvements.", page: "transparency" }
          ]
        }
      ]
    },

    model: {
      eyebrow: "Technology",
      title: "How the Model Works",
      intro: "The VIGIL model is designed to turn public environmental data into a forest-risk ranking that can be visualized on a map.",
      sections: [
        {
          type: "steps",
          title: "Model workflow",
          items: [
            { title: "1. Divide the landscape", text: "The pilot area is divided into grid cells so every area can be compared at the same scale." },
            { title: "2. Collect predictors", text: "The system gathers data related to forest cover, terrain, rainfall, and satellite imagery." },
            { title: "3. Train risk models", text: "Machine learning models learn patterns linked to past forest loss and produce risk scores." },
            { title: "4. Visualize risk", text: "Risk scores become map layers and color-coded zones for easier interpretation." },
            { title: "5. Validate in the field", text: "Trips and partner updates help check whether predictions match real-world conditions." }
          ]
        },
        { type: "note", text: "Add diagrams, code links, model metrics, and research-paper references here when ready." }
      ]
    },

    "data-sources": {
      eyebrow: "Technology",
      title: "Data Sources",
      intro: "VIGIL should keep its data sources visible so users understand what the model is built on.",
      sections: [
        {
          type: "cards",
          items: [
            { title: "Forest loss data", text: "Historical forest-cover and loss information used to understand where change has happened." },
            { title: "Satellite imagery", text: "Optical imagery and vegetation indices that help detect surface conditions." },
            { title: "Terrain data", text: "Elevation and slope variables that describe physical landscape conditions." },
            { title: "Rainfall data", text: "Rainfall patterns that may relate to forest condition, access, and disturbance risk." },
            { title: "Field observations", text: "Future validation points, photos, notes, and partner-submitted observations." }
          ]
        },
        { type: "note", text: "Developer note: add exact dataset names, citations, processing notes, and download links when the research paper is finalized." }
      ]
    },

    "map-updates": {
      eyebrow: "Technology",
      title: "How We Update the Map",
      intro: "The map should update through a combination of new data, model improvements, and real observations from the field.",
      sections: [
        {
          type: "steps",
          items: [
            { title: "Data refresh", text: "New satellite or environmental data is prepared for the map." },
            { title: "Model rerun", text: "Risk scores are recalculated or adjusted based on the latest pipeline." },
            { title: "Field comparison", text: "Prediction checks from trips and partner updates are documented." },
            { title: "Public update", text: "Important changes are summarized on the website and social pages." }
          ]
        }
      ]
    },

    accuracy: {
      eyebrow: "Technology",
      title: "Accuracy Checks",
      intro: "Accuracy checks are how VIGIL stays honest about what the model can and cannot predict.",
      sections: [
        {
          type: "text",
          title: "Why validation matters",
          text: "A map can point us toward areas to watch, but the field shows what is actually happening. VIGIL uses field trips, local observations, partner feedback, and future submitted updates to compare predictions with reality."
        },
        { type: "note", text: "Add validation tables, GPS point counts, photos, and trip-specific accuracy notes after Gia Lai." }
      ]
    },

    transparency: {
      eyebrow: "Technology",
      title: "Transparency and Limitations",
      intro: "VIGIL should be clear about uncertainty. The project becomes stronger when it explains limits instead of hiding them.",
      sections: [
        {
          type: "cards",
          items: [
            { title: "Prediction, not proof", text: "A high-risk zone means the area deserves attention. It is not a final accusation or official enforcement conclusion." },
            { title: "Data gaps", text: "Cloud cover, outdated data, missing local context, and limited field observations can affect results." },
            { title: "Need for partners", text: "Local knowledge, NGOs, researchers, and forest-related initiatives can help improve the system." },
            { title: "Future improvements", text: "Future versions may add roads, settlements, protected-area boundaries, land-use context, and stronger validation." }
          ]
        }
      ]
    },

    stories: {
      eyebrow: "Stories",
      title: "Forest Stories",
      intro: "Forest Stories is VIGIL's storytelling sub-project. It is inspired by human-centered story archives, but it expands the frame to people, plants, animals, and places connected to primary forests.",
      sections: [
        {
          type: "text",
          title: "What this section is for",
          text: "The map shows risk. Stories show what risk reaches. Through real photos, audio notes, field journals, and drawings, this section will make the forest feel alive and connected to more than statistics."
        },
        {
          type: "cards",
          title: "Story archive",
          items: [
            { title: "People", text: "Rangers, local communities, students, guides, researchers, and people connected to forest life.", page: "story-people" },
            { title: "Plants", text: "Native trees, medicinal plants, forest species, and botanical details from expeditions.", page: "story-plants" },
            { title: "Animals", text: "Wildlife stories and species affected by forest loss and habitat change.", page: "story-animals" },
            { title: "Places", text: "Trails, protected areas, red zones, green zones, and forest landscapes with memory and meaning.", page: "story-places" }
          ]
        },
        { type: "note", text: "Visual direction: combine real expedition photos, audio files, and hand-drawn illustrations so the sub-project feels cohesive." }
      ]
    },

    "story-people": storyPage("People of the Forest", "Stories about the people who live with, protect, study, or pass through primary forests."),
    "story-plants": storyPage("Plants of the Forest", "Stories about trees, medicinal plants, roots, leaves, and botanical details from field expeditions."),
    "story-animals": storyPage("Animals of the Forest", "Stories about wildlife, habitat, vulnerability, and the lives affected when forests change."),
    "story-places": storyPage("Places of the Forest", "Stories about trails, protected areas, villages, risk zones, and the landscapes VIGIL learns from."),

    community: {
      eyebrow: "Community",
      title: "Community",
      intro: "The VIGIL community is not only for casual followers. It is designed to grow through field trips, local contacts, partner initiatives, schools, and people who can help keep the project connected to real places.",
      sections: [
        {
          type: "cards",
          title: "Community sections",
          items: [
            { title: "Facebook Community", text: "A curated view of community updates and a link to the full Facebook space.", page: "facebook-community" },
            { title: "Social Activities", text: "Campaigns, workshops, events, and achievements.", page: "social-activities" },
            { title: "Partnerships", text: "Sponsors, NGOs, environmental initiatives, schools, and local partners.", page: "partnerships" }
          ]
        }
      ]
    },

    "facebook-community": {
      eyebrow: "Community",
      title: "Facebook Community",
      intro: "This page will show selected community updates in VIGIL's website style, then direct visitors to Facebook for the full conversation.",
      sections: [
        {
          type: "embed",
          title: "Facebook post/feed area",
          text: "Placeholder for curated Facebook posts. For private groups, manually select approved posts and recreate them here as website cards. For public Facebook posts, add Meta embed code if compatible with the final page setup."
        },
        {
          type: "cards",
          title: "Curated community updates",
          items: [
            { title: "Update title here", text: "Short summary of a community post, partner observation, or field-linked update." },
            { title: "Partner post here", text: "Short summary and link back to the original partner or Facebook page." },
            { title: "Local observation here", text: "Short summary of an approved observation from a field-connected contributor." }
          ]
        },
        {
          type: "cta",
          title: "Read more on Facebook",
          text: "Follow the full discussion, updates, and community posts on VIGIL's Facebook page or group.",
          label: "Open Facebook",
          url: "facebookPage"
        }
      ]
    },

    partnerships: {
      eyebrow: "Community",
      title: "Partnerships",
      intro: "Partnerships help VIGIL reach real communities, strengthen field validation, and connect with initiatives that already care about forests, environment, education, or youth action.",
      sections: [
        {
          type: "cards",
          title: "Partner types",
          items: [
            { title: "NGOs and initiatives", text: "Organizations with existing communities, environmental experience, or field networks." },
            { title: "Schools and student groups", text: "Clubs and student teams that can support awareness, research, media, or activities." },
            { title: "Local contacts", text: "People and groups close to forest areas who can provide context and updates." },
            { title: "Sponsors", text: "Sponsors who support field trips, technology costs, printing, events, or community activities." }
          ]
        },
        { type: "note", text: "Add sponsor logos, partner descriptions, and partnership updates here once confirmed." }
      ]
    },

    join: {
      eyebrow: "Join VIGIL",
      title: "Be a VIGILANTEE",
      intro: "A VIGILANTEE is someone who helps keep watch with us. You can contribute through research, design, media, partnerships, finance, human resources, field support, or community-building.",
      sections: [
        {
          type: "cards",
          title: "Current recruitment focus",
          items: [
            { title: "Finance", text: "Budget planning, sponsor communication, funding records, and transparent spending." },
            { title: "Human Resources", text: "Recruitment, interviews, onboarding, member care, and internal communication." },
            { title: "Media & Design", text: "Content planning, visual identity, social posts, field documentation, and storytelling design." }
          ]
        },
        {
          type: "cards",
          title: "Role levels",
          items: [
            { title: "Department Heads", text: "Lead planning, assign tasks, coordinate members, communicate with the core team, and represent the department." },
            { title: "Members", text: "Carry out department tasks, contribute ideas, attend meetings, and help build consistent project output." },
            { title: "Future Technical Contributors", text: "Support coding, data processing, web map improvements, documentation, and model validation when roles open." }
          ]
        },
        {
          type: "cta",
          title: "Ready to apply?",
          text: "Fill in the application form below or contact the team if you want to discuss the best department for you.",
          label: "Open application form",
          url: "applicationForm"
        }
      ]
    },

    departments: {
      eyebrow: "Join VIGIL",
      title: "Departments",
      intro: "This page explains each department clearly so applicants know what they are applying for.",
      sections: [
        {
          type: "department",
          title: "Finance",
          head: "Finance Head: recruiting",
          members: "Finance Members: recruiting",
          duties: ["Budget planning", "Sponsor list and outreach support", "Funding records", "Expense tracking", "Financial transparency for activities"]
        },
        {
          type: "department",
          title: "Human Resources",
          head: "HR Head: recruiting",
          members: "HR Members: recruiting",
          duties: ["Recruitment planning", "Interview scheduling", "Onboarding", "Member communication", "Internal check-ins and culture"]
        },
        {
          type: "department",
          title: "Media & Design",
          head: "Media & Design Head: recruiting",
          members: "Media & Design Members: recruiting",
          duties: ["Social media calendar", "Graphic design", "Photo and video organization", "Field notes formatting", "Storytelling posts and website visuals"]
        },
        { type: "note", text: "After heads are selected, remove head descriptions from the Join page and replace them with names, contacts, and office hours here." }
      ]
    },

    application: {
      eyebrow: "Join VIGIL",
      title: "Application Form",
      intro: "Embed the Google Form here. Google Forms can expand to fit long forms, so this page is prepared for a tall iframe.",
      sections: [
        { type: "form", title: "VIGILTEE application form" }
      ]
    },

    contact: {
      eyebrow: "Contact Us",
      title: "Contact Us",
      intro: "Reach out for recruitment, partnerships, media questions, field collaboration, sponsorship, or general project inquiries.",
      sections: [
        {
          type: "text",
          title: "Let's build this carefully",
          text: "VIGIL is still growing. If you want to support the map, fieldwork, storytelling, sponsorship, or community-building, contact us through one of the channels below."
        },
        { type: "contact" }
      ]
    }
  }
};

function storyPage(title, intro) {
  return {
    eyebrow: "Stories",
    title,
    intro,
    sections: [
      {
        type: "cards",
        title: "Story slots",
        items: [
          { title: "Story title 01", text: "Photo + short story + audio note + drawing placeholder." },
          { title: "Story title 02", text: "Photo + short story + audio note + drawing placeholder." },
          { title: "Story title 03", text: "Photo + short story + audio note + drawing placeholder." }
        ]
      },
      { type: "note", text: "Add each subject as its own subpage later. Keep photos, audio files, and drawings together so the archive feels cohesive." }
    ]
  };
}
