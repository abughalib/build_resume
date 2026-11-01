import{Ea as c,Wa as d,a as i,b as s,l,w as a}from"./chunk-LP6ZTOJD.js";var g="resume-builder-llm-settings",S=`You are an Elite Technical Recruiter and AI-Screening Strategist. Analyze the job description and the candidate's master resume provided below.

<JOB_DESCRIPTION>
{{JOB_DESCRIPTION}}
</JOB_DESCRIPTION>

<MASTER_RESUME>
{{MASTER_RESUME}}
</MASTER_RESUME>

Your goal is to optimize this resume for DUAL evaluation:
1. AI Screeners (Semantic Match): AI models look for skill depth, contextual usage (Tool + Action + Result), and penalize isolated "keyword stuffing" or irrelevant domain shifts.
2. Human Recruiters (Signal-to-Noise): Humans skim the top-third in 6 seconds, looking for trajectory, strong action verbs, and quantifiable impact.

Analyze the resume thoroughly and return ALL suggestions that would meaningfully improve the candidate's ATS match score or recruiter impression. Each suggestion MUST include a priority score (1\u201310, where 10 is most critical) and an impact level ("critical", "high", "medium", or "low"). Focus on the highest-impact changes first. Stop generating when remaining suggestions would be marginal (priority \u2264 3). Typically this produces 3\u20138 suggestions per pass; exceed 8 only when the resume has significant structural gaps or missing critical skills.

CRITICAL CONSTRAINTS:
- Each resume item (identified by itemId) MUST appear AT MOST ONCE across all suggestions. Do NOT suggest multiple actions on the same item.
- Do NOT include contradictory suggestions (e.g., suggesting to both activate AND deactivate the same skill or section).
- Do NOT repeat suggestions that were already made in earlier messages in this conversation.

RULES FOR ACTIONS:
1. TOGGLE (Focus on Semantic Relevance & Trajectory):
   - Activate (targetState: true): If an [INACTIVE] item contains core skills or strong semantic matches to the JD, activate it.
   - Deactivate (targetState: false): Turn off [ACTIVE] items if they are "noise." Irrelevant older roles confuse AI screeners by diluting the candidate's core domain and waste the human recruiter's 6-second attention span.`,I=`
3. QUESTION (Focus on Dealbreakers & Missing Context):
   - Missing Dealbreakers: If a VITAL hard skill emphasized in the JD is completely absent from the resume, ask if they possess it.
   - Contextual AI Matching: If a key skill is listed but never demonstrated in any bullet, ask how they used it.
   - Limit to 1 question per response. Do not ask about soft skills.

4. ADD_SECTION (Focus on Structural Gaps):
   - Use this ONLY to suggest a missing structural element (like an 'achievement' section) that is entirely absent from the resume.
   - Do NOT hallucinate candidate experience.

OUTPUT FORMAT:
Return ONLY a valid JSON object (NOT wrapped in markdown code blocks). Do not include conversational text before or after the object. The object has two keys:
1. "suggestions" \u2014 an array of suggestion objects, ordered by priority (highest first).
2. "remainingAnalysis" \u2014 a brief string summarizing what other improvements you noticed but did not include in this batch. Set to null if the resume is well-optimized and no further changes are recommended.

Schema:
{
  "suggestions": [
    {
      "action": "toggle",
      "itemId": "<exact ID from the context>",
      "targetState": true | false,
      "priority": <1-10 integer, 10 = most critical>,
      "impact": "critical" | "high" | "medium" | "low",
      "explanation": "<short rationale>"
    },
    {
      "action": "modify",
      "itemId": "<exact bullet ID from the context>",
      "newText": "<the improved rewritten bullet text>",
      "priority": <1-10 integer>,
      "impact": "critical" | "high" | "medium" | "low",
      "explanation": "<brief coaching note on why this is stronger>"
    },
    {
      "action": "question",
      "missingSkill": "<e.g., AWS, PMP Certification>",
      "priority": <1-10 integer>,
      "impact": "critical" | "high" | "medium" | "low",
      "explanation": "<Direct coaching question>"
    },
    {
      "action": "add_section",
      "sectionType": "<skills | experience | projects | education | achievement>",
      "content": <valid JSON object matching schemas below>,
      "priority": <1-10 integer>,
      "impact": "critical" | "high" | "medium" | "low",
      "explanation": "<short rationale>"
    }
  ],
  "remainingAnalysis": "string describing additional improvements not included, or null"
}

SCHEMAS FOR 'add_section' CONTENT:
- skills:      { "skill_type": "string", "skills": ["string"] }
- experience:  { "company": "string", "position": "string", "location": "string", "start_date": "string", "end_date": "string", "descriptions":["string"] }
- projects:    { "project_name": "string", "project_url": "string", "project_tech": ["string"], "project_description": ["string"] }
- education:   { "school": "string", "degree": "string", "location": "string", "start_date": "string", "end_date": "string", "description": ["string"] }
- achievement: { "title": "string", "description": ["string"] }`,O={intern:`
2. MODIFY (Focus on Contribution Clarity & Learning Signal):
   - SENIORITY TIER: Intern / Entry Level (0-1 year of experience)
   - Use ONLY these action verb categories: Assisted, Built, Tested, Learned, Implemented, Contributed to, Supported, Documented, Resolved, Automated, Created, Explored.
   - OWNERSHIP SCOPE: Task-level and sub-feature contributions. Do NOT imply team leadership, independent system ownership, or architectural decisions.
   - IMPACT FOCUS: Task completion, quality support, delivery assistance, learning acceleration.
   - The rewrite should improve clarity and quantification only. Do NOT elevate the scope or authority level beyond what the original bullet implies.
   - FORBIDDEN verbs: Led, Architected, Spearheaded, Managed, Oversaw, Directed, Drove (strategically), Pioneered, Mentored, Scaled (system-wide).`,junior:`
2. MODIFY (Focus on Independent Delivery & Technical Depth):
   - SENIORITY TIER: Junior Level (1-3 years of experience)
   - Use ONLY these action verb categories: Built, Developed, Implemented, Resolved, Automated, Refactored, Delivered, Integrated, Optimized (component-level), Shipped, Created, Designed (feature-scoped), Reduced (bugs/time).
   - OWNERSHIP SCOPE: Feature-level independent work. May reference delivering a feature end-to-end solo, but NOT leading teams or making org-level architectural decisions.
   - IMPACT FOCUS: Feature delivery speed, defect reduction, code quality, component-level performance.
   - The rewrite should improve clarity and quantification only. Do NOT elevate scope or authority beyond what the original bullet implies.
   - FORBIDDEN verbs: Led (team), Architected, Spearheaded, Managed (people), Oversaw, Directed, Pioneered, Mentored, Established (org-wide).`,mid:`
2. MODIFY (Focus on End-to-End Ownership & Cross-Team Impact):
   - SENIORITY TIER: Mid-Level (3-6 years of experience)
   - Use ONLY these action verb categories: Designed, Owned, Improved, Delivered, Shipped, Coordinated, Refactored, Integrated, Scaled (service-level), Collaborated, Streamlined, Reduced, Increased, Drove (technical delivery).
   - OWNERSHIP SCOPE: Service or feature end-to-end. May reference cross-team collaboration and delivery coordination, but NOT formal people management or org-level strategy.
   - IMPACT FOCUS: Service reliability, engineering velocity, cross-functional delivery, system-level performance improvements.
   - The rewrite should improve clarity and quantification only. Do NOT elevate scope or authority beyond what the original bullet implies.
   - FORBIDDEN verbs: Architected (system-wide), Pioneered, Directed (org), Managed (large teams), Oversaw (org), Spearheaded (strategic initiatives).`,senior:`
2. MODIFY (Focus on Technical Leadership & Systemic Impact):
   - SENIORITY TIER: Senior Level (6-10 years of experience)
   - Use ONLY these action verb categories: Led (technical initiatives), Defined, Mentored, Optimized (system-wide), Scaled (system-wide), Established, Drove (strategy), Owned, Designed (system-level), Standardized, Reduced (org-level), Influenced, Championed.
   - OWNERSHIP SCOPE: System-level technical ownership. May reference technical leadership, influencing team engineering practices, and cross-org technical decisions.
   - IMPACT FOCUS: System reliability and scale, engineering velocity org-wide, team capability uplift, architectural quality.
   - The rewrite should improve clarity and quantification only. Do NOT elevate scope or authority beyond what the original bullet implies.
   - FORBIDDEN verbs: Architected (entire org platform), Pioneered (market-level), Directed (VP-scope), Grew (P&L), Oversaw (full org).`,principal:`
2. MODIFY (Focus on Platform Impact & Organizational Technical Strategy):
   - SENIORITY TIER: Principal / Staff Level (10+ years of experience)
   - Use ONLY these action verb categories: Architected, Pioneered, Drove (org-wide), Established, Standardized, Evangelized, Defined (org-wide standards), Enabled, Transformed (technical org), Guided, Influenced (multi-team), Designed (platform-level).
   - OWNERSHIP SCOPE: Org-wide technical strategy. May reference platform-level decisions, multi-team technical influence, setting engineering direction, and long-term system vision.
   - IMPACT FOCUS: Platform adoption and reliability, engineering org capability, cross-org technical standards, developer productivity at scale.
   - The rewrite should improve clarity and quantification only. Do NOT elevate scope or authority beyond what the original bullet implies.
   - FORBIDDEN verbs: Directed (business unit P&L), Grew (headcount as primary metric), Oversaw (non-technical org), Hired (as primary activity).`,executive:`
2. MODIFY (Focus on Business Outcomes & Organizational Leadership):
   - SENIORITY TIER: Director / VP / Executive Level
   - Use ONLY these action verb categories: Directed, Led (org), Grew, Scaled (org/business), Oversaw, Built (teams/organizations), Transformed, Established (business units), Drove (revenue/growth), Hired, Managed (org-level), Launched, Restructured.
   - OWNERSHIP SCOPE: Business unit or organization-level. May reference P&L responsibility, headcount decisions, strategic direction, and cross-company initiatives.
   - IMPACT FOCUS: Revenue, team growth, market positioning, organizational transformation, business outcomes, cost reduction at scale.
   - The rewrite should improve clarity and quantification only. Do NOT invent specific financial metrics not implied by the original bullet.
   - FORBIDDEN verbs: Implemented (task-level), Coded, Debugged (hands-on engineering at this level is typically not highlighted).`};function m(o){return S+O[o]+I}var p={selectedProvider:"openai",configs:{openai:{provider:"openai",apiKey:"",model:"gpt-4o"},anthropic:{provider:"anthropic",apiKey:"",model:"claude-3-5-sonnet-20240620"},gemini:{provider:"gemini",apiKey:"",model:"gemini-1.5-pro"},xai:{provider:"xai",apiKey:"",model:"grok-2"},custom:{provider:"custom",apiKey:"",baseUrl:"http://localhost:11434/v1",model:"llama3"},lmstudio:{provider:"lmstudio",apiKey:"",baseUrl:"http://localhost:1234/v1",model:""}},tierPromptOverrides:{},preferences:i({},d)},u=class o{settings=a(p);constructor(){this.loadSettings()}loadSettings(){try{let e=localStorage.getItem(g);if(e){let t=JSON.parse(e);this.settings.set(s(i(i({},p),t),{configs:i(i({},p.configs),t.configs||{}),tierPromptOverrides:t.tierPromptOverrides||{},preferences:i(i({},d),t.preferences||{})}))}}catch(e){console.error("Failed to parse LLM settings from local storage",e)}}getActiveConfig(){let e=this.settings();return e.configs[e.selectedProvider]}updateProvider(e){this.settings.update(t=>s(i({},t),{selectedProvider:e})),this.saveSettings()}updateConfig(e,t){this.settings.update(r=>{let n=i({},r.configs);return n[e]=i(i({},n[e]),t),s(i({},r),{configs:n})}),this.saveSettings()}getTierPrompt(e){return this.settings().tierPromptOverrides[e]??m(e)}getDefaultTierPrompt(e){return m(e)}hasTierOverride(e){return e in this.settings().tierPromptOverrides}setTierPromptOverride(e,t){this.settings.update(r=>s(i({},r),{tierPromptOverrides:s(i({},r.tierPromptOverrides),{[e]:t})})),this.saveSettings()}resetTierPrompt(e){this.settings.update(t=>{let r=i({},t.tierPromptOverrides);return delete r[e],s(i({},t),{tierPromptOverrides:r})}),this.saveSettings()}getPreferences(){return this.settings().preferences??i({},d)}updatePreference(e,t){this.settings.update(r=>s(i({},r),{preferences:s(i({},r.preferences),{[e]:t})})),this.saveSettings()}saveSettings(){try{localStorage.setItem(g,JSON.stringify(this.settings()))}catch(e){console.error("Failed to save LLM settings",e)}}static \u0275fac=function(t){return new(t||o)};static \u0275prov=l({token:o,factory:o.\u0275fac,providedIn:"root"})};var v=[{target:"app-editor",title:"Resume Editor",description:"Fill in your information here \u2014 everything auto-saves as you type and the preview on the right updates instantly.",position:"right",padding:0},{target:'[data-tour="resize-handle"]',title:"Adjustable Split View",description:"Drag this divider left or right to give yourself more editing room or a larger preview. Your preference is remembered.",position:"right",padding:14},{target:"app-profile-manager",title:"Job Profiles \u2014 The Power Feature",description:'Create profiles like "SWE at Google" or "ML Engineer". Each one controls which bullets and skills are active \u2014 one master resume, perfectly tailored per application.',position:"bottom",padding:6},{target:'[data-tour="completeness"]',title:"Resume Completeness Score",description:"Tracks resume quality in real-time: metrics in bullets, skill depth, link presence, and more. Click it anytime for specific, actionable tips.",position:"bottom",padding:6},{target:'[data-tour="download-pdf"]',title:"LaTeX PDF \u2014 ATS Optimized",description:"Compiles your resume using a full TeX engine running in your browser via WebAssembly. Zero server involvement. Produces perfectly formatted, ATS-readable PDFs every time.",position:"left",padding:4}],D=[{target:'[data-tour="ai-tabs"]',title:"AI Workspaces",description:"Switch between Optimizer (improving specific bullets), General Polish (rewriting entire sections), and ATS Matcher (tailoring to a job description).",position:"bottom",padding:4},{target:'[data-tour="ai-prompt"]',title:"Smart Prompts",description:"Tell the AI exactly what you want to improve, or leave it blank to let the AI automatically find the best improvements.",position:"top",padding:6},{target:'[data-tour="ai-diff"]',title:"Smart Diff Viewer",description:"See exactly what the AI changed. Red is old text, green is new text. You can accept or reject individual suggestions with zero hassle.",position:"left",padding:8}],f=class o{steps=a(v);totalSteps=c(()=>this.steps().length);isActive=a(!1);stepIndex=a(0);currentStep=c(()=>this.steps()[this.stepIndex()]);isFirst=c(()=>this.stepIndex()===0);isLast=c(()=>this.stepIndex()===this.steps().length-1);startTour(e="main"){this.steps.set(e==="main"?v:D),this.stepIndex.set(0),this.isActive.set(!0)}next(){this.isLast()?this.endTour():this.stepIndex.update(e=>e+1)}prev(){this.isFirst()||this.stepIndex.update(e=>e-1)}endTour(){this.isActive.set(!1),localStorage.setItem("rb_tour_done","1")}static isDone(){return localStorage.getItem("rb_tour_done")==="1"}static \u0275fac=function(t){return new(t||o)};static \u0275prov=l({token:o,factory:o.\u0275fac,providedIn:"root"})};var y=class o{toasts=a([]);confirmDialog=a(null);nextId=1;toastTimers=new Map;toast(e,t="info",r=4e3){let n=this.nextId++;this.toasts.update(T=>[...T,{id:n,message:e,type:t}]);let b=setTimeout(()=>this.dismiss(n),r);this.toastTimers.set(n,b)}dismiss(e){let t=this.toastTimers.get(e);t&&(clearTimeout(t),this.toastTimers.delete(e)),this.toasts.update(r=>r.filter(n=>n.id!==e))}confirm(e,t="Confirm"){return new Promise(r=>{let n=this.nextId++;this.confirmDialog.set({id:n,message:e,confirmLabel:t,resolve:r})})}resolveConfirm(e){let t=this.confirmDialog();t&&(t.resolve(e),this.confirmDialog.set(null))}static \u0275fac=function(t){return new(t||o)};static \u0275prov=l({token:o,factory:o.\u0275fac,providedIn:"root"})};export{u as a,y as b,f as c};
