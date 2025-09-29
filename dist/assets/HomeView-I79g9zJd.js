const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/capabilityDetector-DAbS9qrd.js","assets/index-CPuDN9P1.js","assets/index-BNnTCEdY.css"])))=>i.map(i=>d[i]);
var Ki=Object.defineProperty;var Ji=(s,e,i)=>e in s?Ki(s,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[e]=i;var ie=(s,e,i)=>Ji(s,typeof e!="symbol"?e+"":e,i);import{d as ai,r as M,w as $e,_ as Nt,h as Zt,a as Mt,c as Fe,o as ni,b as Zi,e as x,f as zt,g as n,i as O,u as d,j as X,n as se,k as ue,v as Pt,F as Se,l as _e,t as ae,m as Qt,p as Oi,q as ve,s as w,x as Ft,y as Xt,z as Ae,A as Qi,B as yi,C as Xi}from"./index-CPuDN9P1.js";const si=ai("prompt",()=>{const s=M(0),e=M(0),i=M([]),o=M(!1),t=M(!1),a=M(!1),r=M("zh"),l=M(!0),h=M(!1),c=M(null),k=M({taskDefinition:"",context:"",outputFormat:"",qualityCriteria:"",executionParams:""}),I=M({requirementReport:"",generatedPrompt:{zh:"",en:""},optimizedPrompt:{zh:"",en:""}}),v=[{id:"taskDefinition",title:"任务定义",description:"明确AI助手的核心任务和主要功能"},{id:"context",title:"使用场景",description:"了解AI的使用环境和目标用户"},{id:"outputFormat",title:"输出格式",description:"定义AI回答的结构、格式和风格"},{id:"qualityCriteria",title:"质量要求",description:"确定成功标准和质量期望"},{id:"executionParams",title:"工作方式",description:"设定AI的思考方式和互动风格"},{id:"optimization",title:"最终确认",description:"确认信息完整性并生成提示词"}],A=(U,H,Z,de)=>{var Ee,z;const ye={id:(de==null?void 0:de.id)||`msg_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,type:U,content:H,timestamp:new Date().toISOString(),isProgress:(de==null?void 0:de.isProgress)||!1,attachments:Z&&Z.length>0?Z:[]};console.log("[PromptStore] Adding message:",{type:ye.type,hasContent:!!ye.content,attachmentCount:((Ee=ye.attachments)==null?void 0:Ee.length)||0,attachments:(z=ye.attachments)==null?void 0:z.map(fe=>({name:fe.name,type:fe.type,size:fe.size,hasData:!!fe.data}))}),i.value.push(ye),U==="user"&&e.value++};return{currentStep:s,currentStepUserMessages:e,chatMessages:i,isTyping:o,isGenerating:t,showPreview:a,currentLanguage:r,isAutoMode:l,isInitialized:h,currentExecutionStep:c,collectedData:k,promptData:I,steps:v,addMessage:A,addOrUpdateProgressMessage:(U,H="progress_message")=>{const Z=i.value.findIndex(de=>de.id===H);Z!==-1?(i.value[Z].content=U,i.value[Z].timestamp=new Date().toISOString()):A("ai",U,void 0,{id:H,isProgress:!0})},clearChat:()=>{i.value=[],s.value=0,e.value=0,a.value=!1,h.value=!1,c.value=null,k.value={taskDefinition:"",context:"",outputFormat:"",qualityCriteria:"",executionParams:""},I.value={requirementReport:"",generatedPrompt:{zh:"",en:""},optimizedPrompt:{zh:"",en:""}}},nextStep:()=>{s.value<v.length-1&&(s.value++,e.value=0)},updateCollectedData:(U,H)=>{if(U in k.value){const Z=k.value[U];k.value[U]=Z?Z+`
`+H:H}},deleteMessage:U=>{const H=i.value.find(Z=>Z.id===U);H&&(H.isDeleted=!0)},startEditMessage:U=>{const H=i.value.find(Z=>Z.id===U);H&&(H.isEditing=!0,H.originalContent=H.content)},saveEditMessage:(U,H)=>{const Z=i.value.find(de=>de.id===U);Z&&(Z.content=H.trim(),Z.isEditing=!1,Z.originalContent=void 0,Z.timestamp=new Date().toISOString())},cancelEditMessage:U=>{const H=i.value.find(Z=>Z.id===U);H&&H.originalContent!==void 0&&(H.content=H.originalContent,H.isEditing=!1,H.originalContent=void 0)},updateMessage:(U,H)=>{const Z=i.value.find(de=>de.id===U);Z&&(Z.content=H,Z.timestamp=new Date().toISOString())},getValidMessages:()=>i.value.filter(U=>!U.isDeleted&&!U.isProgress),clearProgressMessages:()=>{i.value=i.value.filter(U=>!U.isProgress)}}}),ht=`# Architecting Intelligence: A Definitive Guide to the Art and Science of Elite Prompt Engineering

# Chapter 1: The Philosophy of Prompting: An Introduction to Human-AI Collaboration

## 1.1 The Dawn of a New Dialogue

In the rapidly expanding landscape of artificial intelligence, the Large Language Model (LLM) has emerged as a transformative force, a tool with the potential to redefine productivity, creativity, and problem-solving. Yet, the immense power of these models is often gated by a single, critical factor: the quality of the communication they receive. This is where the discipline of prompt engineering begins.

A **prompt** is, in its simplest form, the instruction, question, or input you provide to an AI model. It is the catalyst for every interaction, the starting point of every generated sentence, image, or line of code. **Prompt engineering**, therefore, is the art and science of designing these inputs to guide an AI model toward precise, reliable, and high-value outputs.

It is crucial to demystify the term "engineering." This discipline requires no background in software development or data science. Rather, it is fundamentally a discipline of communication. Think of it as learning the language of your new, incredibly capable collaborator. The more clearly, specifically, and contextually you can communicate your intent, the more accurately the AI can execute your vision. The quality of the input does not just influence the output; it dictates it.

This guide serves as a comprehensive framework for mastering this new form of dialogue. It is built on the philosophy that interacting with an AI is not a simple transaction of question and answer. It is about architecting conversations, engineering behavior, and forging a collaborative partnership that elevates the capabilities of both human and machine.

## 1.2 The AI as Collaborator, Not an Oracle

A common misconception is to view an LLM as an omniscient oracle—a magic box that holds all the answers, waiting for the right question to unlock them. This perspective is limiting. A more powerful and accurate mental model is to view the AI as an infinitely skilled but freshly hired assistant who has read the entire internet but possesses no specific context about you, your goals, or your current task. They have amnesia about every conversation the moment it ends.

This assistant is a powerful prediction engine. When you provide a prompt, the LLM does not "understand" your request in the human sense. Instead, it performs a complex statistical analysis to predict the most probable sequence of words (or "tokens") that should follow your input, based on the vast patterns it learned during its training. Your prompt sets the initial conditions for this prediction. It creates a starting point from which the AI charts its most likely path forward.

Therefore, the role of the prompt engineer is not that of a mere questioner, but of a director, a strategist, and an architect.

- **As a Director:** You provide the AI, your "actor," with a role, a motivation, and moment-to-moment instructions to guide its performance.
- **As a Strategist:** You break down complex problems into logical sequences, anticipating where the AI might falter and providing the necessary scaffolding for it to succeed.
- **As an Architect:** You build the very foundation of the AI's behavior through carefully constructed system prompts, defining its personality, its constraints, and its core operational logic.

In this collaborative model, the user becomes the **prime mover**. You are not passively receiving information; you are actively shaping the AI's thought process. Your expertise, clarity, and strategic communication are what transform the AI from a general-purpose tool into a specialized, proactive partner.

## 1.3 Why Prompting is a Foundational Skill

The ability to craft effective prompts is rapidly becoming a cornerstone of modern literacy, as essential as writing a clear email or creating a compelling presentation. It is the foundational skill for effective human-AI collaboration. Mastering it unlocks several key advantages:

1. **Precision and Reliability:** Well-crafted prompts dramatically reduce ambiguity, leading to outputs that are more accurate, relevant, and aligned with your specific needs. This minimizes the need for endless revisions and course corrections.
2. **Efficiency and Productivity:** By providing clear, detailed, and context-rich instructions upfront, you enable the AI to perform complex tasks faster and more effectively, saving significant time and effort.
3. **Unlocking Advanced Capabilities:** Basic questions yield basic answers. Advanced prompting techniques—such as instructing the AI to "think step-by-step" or to adopt an expert persona—unlock deeper reasoning, creativity, and problem-solving capabilities that are otherwise inaccessible.
4. **Harnessing Specialization:** Through prompting, you can instantly transform a generalist AI into a specialist. You can command it to be a confrontational code reviewer, a humorous travel guide, a formal legal analyst, or a persuasive marketing copywriter, tailoring its expertise to the precise needs of the task at hand.

## 1.4 The Journey Ahead: From Operator to Architect

Mastery of prompt engineering is not a static achievement but a dynamic, iterative skill. It requires curiosity, experimentation, and a willingness to refine your approach based on the AI's responses. The principles outlined in this guide provide the architectural and conversational tools needed to move beyond simple interactions and begin building truly powerful and reliable AI-driven processes.

This guide will systematically deconstruct the practice of prompt engineering, covering:

- **The Anatomy of a Prompt:** Understanding the core components that make an instruction effective.
- **System vs. User Prompts:** Mastering the distinction between the AI's foundational "constitution" and the dynamic "directives" that guide its tasks.
- **A Toolkit of Strategies:** From basic techniques like providing examples (few-shot prompting) to advanced reasoning frameworks like Chain-of-Thought (CoT), Tree-of-Thoughts (ToT), and interactive paradigms like ReAct.
- **Structuring and Control:** Learning how to use structural elements like XML tags and specific output formats like JSON to command predictable, machine-readable results.
- **Complex Workflows:** Exploring how to chain prompts together and orchestrate teams of specialized AI agents to tackle multi-faceted projects.

The ultimate goal is to empower you, the user, to transition from being a simple operator of an AI to becoming a true architect of its intelligence. By learning to communicate with intention and strategy, you can transform artificial intelligence from a promising tool into a true force multiplier, a process driven entirely by the quality and intelligence of the prompts that guide it.

# Chapter 2: The Anatomy of an Effective Prompt: Mastering Context, Task, and Format

## 2.1 The Blueprint of Communication

If a prompt is the instruction that sets an AI in motion, then its anatomy is the blueprint that dictates the quality and precision of its final construction. An effective prompt is not a single, monolithic command but a carefully assembled set of interlocking components. A vague or poorly constructed prompt forces the AI to make assumptions, leading to generic, irrelevant, or incorrect outputs. A well-architected prompt, however, eliminates ambiguity and guides the model directly to the desired outcome.

Every elite prompt, regardless of its complexity, is built upon three fundamental pillars:

1. **Context:** The background information. The "who" and the "why."
2. **Task:** The specific action to be performed. The "what."
3. **Format:** The desired structure of the output. The "how."

Think of these three pillars as the legs of a tripod. If any one of them is weak or missing, the entire structure becomes unstable. Mastering the art of weaving these elements into a single, coherent instruction is the first and most critical step in transitioning from basic questions to strategic prompt engineering. This chapter will dissect each of these components, providing the principles and tactics needed to build a robust foundation for any AI interaction.

## 2.2 Pillar One: CONTEXT - Setting the Stage

Context is the universe in which your request lives. By default, the AI has no knowledge of your identity, your goals, your audience, or the circumstances surrounding your task. Providing context is the single most effective way to elevate a response from generic to bespoke. It answers the crucial questions of "who" and "why" before the AI even begins to consider the "what."

### 2.2.1 Assigning a Role or Persona

Giving the AI a role is a high-leverage technique that activates a vast network of knowledge, stylistic nuances, and quality standards from its training data. Instead of just a tool, the AI becomes an expert collaborator.

- **Why It Works:** When you tell the AI "You are a seasoned CFO," you are not just applying a label. You are instructing it to access the patterns, vocabulary, tone, and analytical frameworks associated with chief financial officers in its training data. This immediately refines its perspective.
- **Illustrative Example:**
    - **Less Effective:** \`"Analyze these financial statements."\` (The AI doesn't know from what perspective or for what purpose.)
    - **More Effective:** \`"You are the CFO of a high-growth B2B SaaS company presenting to the board. Analyze these Q2 financials. Your focus is on identifying risks to our burn rate while highlighting key growth drivers for our investors."\` (The AI now understands the role, audience, and strategic priorities, leading to a much more insightful analysis.)

### 2.2.2 Providing Background Information

This is the situational data the AI needs to understand the landscape of your task. It can include facts, project details, previous correspondence, or any other relevant information.

- **Why It Works:** Background information grounds the AI's response in reality, preventing it from generating plausible but incorrect information (a phenomenon known as "hallucination").
- **Illustrative Example:**
    - **Less Effective:** \`"Write a marketing email for our new product."\` (The AI knows nothing about the product or its market.)
    - **More Effective:** \`"Our company, 'Innovate Inc.,' is launching a new project management app called 'TaskFlow.' Our target audience is small marketing teams (5-10 people) who feel overwhelmed by complex tools like Jira. The key feature is a one-click Kanban board generator. Draft a marketing email announcing the launch."\` (The AI can now craft a targeted, feature-specific, and benefit-driven message.)

### 2.2.3 Defining the Audience

Explicitly stating who the final output is for is critical for calibrating the tone, complexity, and vocabulary of the response.

- **Why It Works:** The AI adjusts its communication style to be appropriate for the intended reader, ensuring the message is effective and well-received.
- **Illustrative Example:**
    - **Less Effective:** \`"Explain quantum computing."\`
    - **More Effective (for a young audience):** \`"Explain quantum computing to a curious 5th grader. Use a simple analogy involving a coin that can be both heads and tails at the same time."\`
    - **More Effective (for a technical audience):** \`"Explain the concept of quantum superposition as it applies to qubits, intended for an undergraduate student with a foundational understanding of classical physics."\`

### 2.2.4 Stating the Goal or Purpose

Why is this task being performed? What is the ultimate objective? Answering this helps the AI prioritize information and frame its response in the most useful way.

- **Why It Works:** Understanding the end goal allows the AI to make better micro-decisions during the generation process, aligning its output with your strategic intent.
- **Illustrative Example:**
    - **Less Effective:** \`"Summarize this legal contract."\`
    - **More Effective:** \`"I am the CEO of a startup. Summarize this vendor contract with the primary goal of identifying any clauses that pose a significant financial or intellectual property risk to my company. I need to quickly understand our potential liabilities."\`

## 2.3 Pillar Two: TASK - Defining the Action

The task is the verb of your prompt. It is the core directive that tells the AI *what to do*. Clarity and precision in this component are non-negotiable. Ambiguity here leads directly to a failed output.

### 2.3.1 Using Strong, Unambiguous Verbs

Start your instruction with a clear, action-oriented verb.

- **Why It Works:** This immediately focuses the AI on the required operation.
- **Examples:**
    - **Use:** \`Generate\`, \`Analyze\`, \`Rewrite\`, \`Translate\`, \`Summarize\`, \`Classify\`, \`Extract\`, \`Create\`, \`Compare\`, \`Debug\`.
    - **Avoid:** \`Help me with...\`, \`Can you...\`, \`I need something about...\`.

### 2.3.2 Breaking Down Complexity (Chunking)

For any task with multiple steps, do not write a long, convoluted paragraph. Break the task down into a numbered or bulleted list of sequential instructions.

- **Why It Works:** This creates a clear, logical workflow for the AI to follow, ensuring no step is missed. It also allows you to troubleshoot more easily if one part of the output is incorrect.
- **Illustrative Example:**
    - **Less Effective:** \`"Write a blog post about the benefits of remote work, make sure you mention productivity and work-life balance, and also come up with some titles and a call to action."\`
    - **More Effective:**\`"Your task is to create content for a blog post about the benefits of remote work.1. First, generate 5 catchy, SEO-friendly titles for the post.2. Next, write a 400-word blog post that covers two main benefits: increased productivity and improved work-life balance. Provide one concrete example for each.3. Finally, write a compelling call-to-action that encourages readers to share their own remote work experiences in the comments."\`

### 2.3.3 Being Explicit and Specific

Provide precise details and avoid subjective or vague language.

- **Why It Works:** Specificity removes the need for the AI to guess your intent.
- **Illustrative Example (Code Refactoring):**
    - **Less Effective:** \`"Can you improve this code?"\`
    - **More Effective:** \`"Refactor the following Python function. Your goal is to improve its readability and performance. Specifically:1. Replace the nested for-loop with a more efficient list comprehension or generator expression.2. Add type hints to all function arguments and the return value.3. Write a comprehensive docstring that explains what the function does, its parameters, and what it returns."\`

### 2.3.4 Stating Constraints and Boundaries

Clearly define the limits of the task. This includes what to include, what to exclude, and any rules that must be followed. It's often more effective to state what the AI *should* do (affirmative direction) rather than what it *should not* do.

- **Why It Works:** Constraints prevent the AI from introducing irrelevant information or going off on a tangent.
- **Illustrative Example:**
    - **Less Effective:** \`"Plan a trip to Japan. Don't include expensive stuff."\`
    - **More Effective:** \`"Create a 7-day itinerary for a first-time traveler to Japan with a total budget of $2,000 USD after flights. The plan should focus on cultural experiences in Tokyo and Kyoto and must include at least one day of hiking. All suggested restaurants should have an average meal price under $25 USD."\`

## 2.4 Pillar Three: FORMAT - Structuring the Output

The format instruction tells the AI *how* to present its response. Neglecting this often results in a correct but unusable answer—a wall of text when you needed a table, or a paragraph when you needed a machine-readable JSON object.

### 2.4.1 Explicitly Naming the Desired Format

The simplest method is to just state the format you need.

- **Why It Works:** It's a direct command that the AI is highly optimized to follow.
- **Examples:** \`"Write the output as a bulleted list."\`, \`"Format the response as a valid JSON object."\`, \`"Present the comparison in a Markdown table."\`

### 2.4.2 Providing Examples (Few-Shot Formatting)

Showing is more powerful than telling. Provide a clear example of the input and the exact output structure you expect.

- **Why It Works:** This is the most unambiguous way to define a structure. The AI will learn the pattern from your example and apply it to the new input.
- **Illustrative Example (Sentiment Analysis):**
    - **Less Effective:** \`"Analyze the sentiment of this feedback."\`
    - **More Effective:**\`"Analyze the following customer feedback to extract the issue category, sentiment, and priority. Follow the format in the example.\`
        
        \`EXAMPLE:Input: 'The new dashboard is clunky and it takes forever to load!'Category: UI/UX, PerformanceSentiment: NegativePriority: High\`
        
        \`NOW, ANALYZE THIS:Input: 'I love the new integration with Salesforce, but it would be amazing if you could also add support for Hubspot.'"\`
        

### 2.4.3 Specifying Structural Elements and Tone

Go beyond the overall format to define specific sections, writing styles, or stylistic constraints.

- **Why It Works:** This gives you fine-grained control over the composition and feel of the output.
- **Examples:**
    - \`"Write a business proposal. It must include the following sections: Executive Summary, Problem Statement, Proposed Solution, and Pricing."\`
    - \`"Adopt the writing style of The Economist: formal, analytical, and concise."\`
    - \`"Generate a response that is no more than 150 words."\`

## 2.5 Synthesis: Assembling the Elite Prompt

Mastery lies in combining these three pillars—Context, Task, and Format—into a single, coherent blueprint. Let's compare a basic prompt with an elite prompt that synthesizes these principles.

- **Basic Prompt:**\`"Can you write an email about the project update?"\`
- **Elite Prompt (incorporating all three pillars):**
    
    \`"**[CONTEXT]** You are the lead Project Manager for 'Project Phoenix.' I need to send a status update to our non-technical executive stakeholders. We recently encountered an unexpected issue with a third-party API integration that will cause a one-week delay in our launch schedule. The engineering team has already developed a workaround.\`
    
    - \`*[TASK]** Your task is to draft an email that accomplishes the following:1. Briefly summarize the project's overall positive progress.2. Clearly and transparently communicate the one-week delay.3. Explain the root cause of the delay in simple, non-technical terms (mention a 'supplier data connection issue').4. Reassure stakeholders that a solution is in place and confirm the new launch date.\`
    - \`*[FORMAT]** **Subject Line:** Must be clear and professional, like 'Project Phoenix Update & New Launch Date'. **Tone:** The tone should be professional, confident, and reassuring, not alarmist. **Length:** Keep the entire email body under 200 words."\`

By mastering the anatomy of a prompt—methodically providing the context, defining the task, and specifying the format—you move from simply talking *at* the AI to truly collaborating *with* it. This foundational skill is the gateway to unlocking the more advanced reasoning and workflow strategies that will be explored in the chapters to come.

# Chapter 3: The Two Pillars: Distinguishing Between Foundational System Prompts and Dynamic User Prompts

## 3.1 Beyond the Single Command: The Architecture of Interaction

A novice approaches a Large Language Model with a single command, viewing the interaction as a flat, transactional exchange: question in, answer out. A master, however, understands that a truly effective and predictable AI interaction is not a monolithic event. It is an architecture, a carefully designed structure with distinct layers that serve fundamentally different functions.

At the heart of this architecture are two pillars of prompting. Understanding the profound separation between these two—the foundational instructions that define the AI's *being* versus the dynamic instructions that guide its *doing*—is the first and most critical leap toward genuine mastery. This distinction elevates the user from a simple operator to a true architect of the AI's intelligence, enabling the creation of systems that are not just responsive, but also consistent, reliable, and specialized.

To make this distinction clear, we will employ a powerful analogy that will serve as a guidepost for the remainder of this work: **The AI as a Highly Skilled Actor.**

Imagine an AI model as an immensely talented actor, capable of playing any role with astonishing depth. This actor, however, needs direction. The two pillars of prompting represent the two primary forms of direction this actor receives: the detailed character brief they study before ever stepping on stage, and the moment-to-moment instructions they receive from the director during a scene.

## 3.2 Pillar One: System Prompts - The AI's Constitution

A **System Prompt** is the foundational, persistent framework that establishes the AI's core identity, operational constraints, and behavioral rules for the entire duration of a session or task. It is best understood as the AI's "constitution" or its "core programming," set before any direct user interaction begins.

### 3.2.1 The Actor's Character Brief

In our analogy, the system prompt is the **detailed character brief** the actor studies for weeks before filming begins. This brief is the source of truth for their character. It defines:

- **Personality:** Are they witty and cynical, or empathetic and encouraging?
- **Expertise:** Are they a world-renowned cybersecurity analyst, a principal product designer from a FAANG company, or a seasoned travel guide specializing in budget backpacking?
- **Motivations:** What is their primary goal? Is it to provide maximally efficient code, to ensure user safety above all else, or to inspire creativity?
- **Rules and Boundaries:** What will this character never do? Do they avoid technical jargon? Do they always cite their sources? Do they adhere to a specific ethical framework like Dieter Rams' 'Ten principles for good design'?

This character brief is the static, underlying framework that informs every subsequent action and line of dialogue. It is internalized by the actor, becoming the lens through which they interpret every instruction from the director.

### 3.2.2 Function and Purpose

The primary function of the system prompt is to create a **consistent and reliable persona**. It moves the AI from a generic, jack-of-all-trades model to a specialized expert. It dictates the AI's tone, its domain of knowledge, its ethical guardrails, and its overall disposition. In more advanced, agentic applications, the system prompt is where you define the tools the AI is permitted to use (like a code interpreter or a web search API) and the protocols it must follow when using them.

### 3.2.3 Technical Implementation

In the architecture of most modern LLM APIs (such as those from OpenAI and Anthropic), the system prompt corresponds directly to the \`system\` role in the request payload. This message is treated with special significance by the model. It is not just another turn in the conversation; it is a high-priority, persistent directive that heavily influences the model's interpretation of all subsequent \`user\` and \`assistant\` messages within the conversational history.

### 3.2.4 Characteristics of an Effective System Prompt

- **Foundational:** It defines general behavior, not a specific, one-off task.
- **Persistent:** It applies globally across an entire conversational session.
- **Pre-Conversational:** It is set at the beginning, before the user dialogue starts.
- **High-Level:** It establishes the core identity, rules, and constraints of the AI persona.

## 3.3 Pillar Two: User Prompts - The Conversational Directive

A **User Prompt** is the specific, task-oriented instruction provided by the user within an ongoing conversation to accomplish a particular goal. These prompts are dynamic, changing with each turn of the dialogue to reflect the immediate needs of the workflow.

### 3.3.1 The Director's Instructions on Set

Continuing our actor metaphor, user prompts are the **director's moment-to-moment instructions on set**. They are the active commands that guide the actor through a specific scene.

- "Analyze the query performance issue in this specific PostgreSQL table."
- "Now, generate the user documentation for the function we just finalized."
- "Rewrite that last paragraph, but make the tone more urgent."

These instructions are dynamic, contextual, and responsive to the evolving narrative of the task. They guide the actor—who is still fully embodying their pre-studied character brief—through the execution of a specific action. A good director doesn't need to remind the actor of their core personality in every command; they trust the actor has internalized the character brief (the system prompt) and give clear, actionable directives to advance the scene.

### 3.3.2 Function and Purpose

The function of the user prompt is **execution**. It provides the specific data, context, and commands necessary for the AI to perform a discrete task, such as generating code, analyzing a dataset, or summarizing a document. The quality, clarity, and precision of these prompts directly determine the quality of the AI's output for that specific task.

### 3.3.3 Technical Implementation

In API calls, user prompts correspond to the \`user\` role. Each user prompt, along with the AI's corresponding \`assistant\` reply, is appended to the conversation history. This growing history forms the short-term memory and context for the next conversational turn, allowing for a coherent and stateful dialogue.

### 3.3.4 Characteristics of an Effective User Prompt

- **Task-Oriented:** Focused on a specific, immediate goal.
- **Dynamic:** Changes from turn to turn, building on the conversation.
- **Action-Driven:** Uses imperative verbs to command a specific action.
- **Contextual:** Provides the necessary data and immediate context for the task at hand.

## 3.4 The Critical Synergy and Common Pitfalls

The magic of elite prompt engineering happens when these two pillars work in perfect harmony. A brilliantly crafted system prompt creates a deeply embodied, expert AI persona. A series of precise, strategic user prompts then directs that expert persona to execute a complex workflow with stunning accuracy and efficiency. A talented actor who has mastered their role, working with a clear and competent director, will deliver an Oscar-worthy performance.

However, a misunderstanding of this two-pillar architecture leads to predictable and catastrophic failures.

- **Pitfall 1: Obsessing over the System Prompt, Neglecting the User Prompt.** This is the most common failure mode. An engineer spends days crafting the "perfect" AI constitution, defining an elite persona with meticulous detail. They then provide lazy, ambiguous, or contradictory user prompts like "now do the next part." This is akin to hiring Robert De Niro, giving him an incredibly detailed character study, and then on set, the director just shrugs and says, "just do something interesting." The most brilliant actor is rendered useless by poor direction.
- **Pitfall 2: Contaminating the System Prompt with User-Level Instructions.** This error involves placing task-specific examples or one-off instructions inside the global system prompt. This contaminates the AI's core identity. It's like writing a single piece of stage direction—"the character sips their coffee"—into the actor's main character brief. The actor might then inappropriately try to sip coffee in every subsequent scene, whether it's a car chase or a wedding. Specific examples belong in the user prompt, where they apply to the task at hand and then fade into the conversational history.
- **Pitfall 3: Lacking a System Prompt Entirely.** Interacting with a raw model without any system prompt is like working with an actor who has no defined character. They can follow simple instructions ("say this line," "walk over there"), but their performance will lack consistency, tone, and depth. They may seem helpful one moment and confused the next, as their persona drifts without a foundational anchor.

By recognizing that prompt engineering is a discipline of architectural design, not just a series of isolated questions, you gain the ability to build AI systems that are robust, predictable, and profoundly more capable. The following chapters will provide the specific, actionable principles for mastering the construction of each of these essential pillars.

# Chapter 4: The Zero-Shot Strategy: Leveraging the Model's Intrinsic Knowledge

## 4.1 The First Attempt: Prompting Without Precedent

The Zero-Shot strategy is the most fundamental and direct form of prompt engineering. It is the practice of instructing a Large Language Model to perform a task without providing it with any specific examples of how to complete that task. You provide the instruction, the context, and the input, and you rely entirely on the model's vast, pre-existing knowledge to understand and execute your request.

In essence, every prompt that does not contain an explicit input-output example is a Zero-Shot prompt. It is the conversational baseline, the starting point for nearly every interaction with an AI.

To return to our analogy of the AI as a skilled actor, a Zero-Shot prompt is like a director giving a straightforward command to an actor who has already deeply internalized their role (defined by the System Prompt).

- "Summarize this intelligence briefing."
- "Translate this phrase into Japanese."
- "Write a Python function that sorts a list of dictionaries by a specific key."

The director doesn't need to show the actor an example of another actor summarizing a briefing; they trust that a competent actor, in the role of an intelligence analyst, inherently knows what a summary is and how to produce one. The Zero-Shot strategy operates on this same principle of trust in the model's intrinsic capabilities.

## 4.2 The Mechanism: How Zero-Shot Works

The effectiveness of the Zero-Shot strategy is a direct consequence of the way LLMs are trained. These models have been exposed to a staggering volume of text and code from the public internet, encompassing trillions of words across countless documents, books, articles, and websites. During this training, the model learned the statistical patterns and relationships not just between words, but between entire concepts and tasks.

It has seen:

- Countless examples of articles followed by their summaries.
- Millions of lines of text in one language and their corresponding translations in another.
- Innumerable questions followed by their answers.
- Vast quantities of code accompanied by documentation explaining what it does.

Therefore, when you provide a prompt like \`"Summarize the following article:"\`, the model recognizes this pattern. It doesn't "learn" what a summary is in that moment. Instead, your prompt acts as a key, activating the vast, latent knowledge about "summarization" that is already encoded in its neural network. It predicts that the most probable sequence of words to follow your instruction and the provided article is a concise summary of that article. The "knowledge" is already there; the prompt simply directs the model to access and apply it.

## 4.3 The Power of Simplicity: Strengths and Ideal Use Cases

The Zero-Shot approach is the workhorse of prompt engineering for a reason. Its power lies in its efficiency and broad applicability.

**Key Strengths:**

1. **Simplicity and Speed:** It is the fastest and most direct way to get a response from the model. There is no need to spend time crafting detailed examples.
2. **Token Efficiency:** Prompts are shorter because they don't contain examples. In API-based usage where cost is tied to the number of tokens (both input and output), this makes Zero-Shot the most cost-effective method.
3. **Versatility:** It works remarkably well for a wide range of common, well-defined tasks that are heavily represented in the model's training data.

**Ideal Use Cases:**

- **Summarization:**
    - **Prompt:** \`"Summarize the key findings from the following academic abstract into three bullet points."\`
- **Translation:**
    - **Prompt:** \`"Translate the following sentence into formal Spanish: 'We need to finalize the quarterly report by Friday.'"\`
- **Simple Question-Answering:**
    - **Prompt:** \`"Based on the provided text, what was the primary cause of the company's Q3 revenue decline?"\`
- **Classification (with clear, common categories):**
    - **Prompt:** \`"Classify the sentiment of the following customer review as Positive, Negative, or Neutral. Review: 'The user interface is intuitive, but the app crashes frequently.'"\`
- **Style and Tone Transformation:**
    - **Prompt:** \`"Rewrite the following paragraph to make the tone more professional and formal. Paragraph: 'Hey guys, so the thing is, we gotta get this project done, like, ASAP.'"\`
- **Basic Code Generation:**
    - **Prompt:** \`"Write a JavaScript function that takes an array of numbers and returns the largest number in the array."\`

## 4.4 The Limits of Trust: When Zero-Shot Fails

While powerful, the Zero-Shot strategy relies on the assumption that the model has a clear, unambiguous understanding of your task from its training. This assumption breaks down when tasks become more complex, nuanced, or novel.

**Common Failure Modes:**

1. **Complex or Multi-Step Reasoning:** For problems that require a logical chain of thought, the model may rush to a conclusion and make an error.
    - **Failing Prompt:** \`"A bat and a ball cost $1.10 in total. The bat costs $1.00 more than the ball. How much does the ball cost?"\`
    - **Likely Incorrect Zero-Shot Answer:** \`$0.10\` (The model performs a simple subtraction instead of the required algebraic reasoning).
2. **Highly Specific or Novel Formats:** If you require a very specific output structure that is not a universal standard (e.g., a custom JSON schema or a unique report format), the model has no way of knowing what you want.
    - **Failing Prompt:** \`"Process this user data and output it in our company's standard 'UserProfile' JSON format."\`
    - **Likely Incorrect Zero-Shot Answer:** A generic JSON object that does not match the specific, required structure.
3. **Nuanced or Ambiguous Tasks:** When a task requires subjective judgment or depends on a specific, non-obvious context, the model's interpretation may not align with yours.
    - **Failing Prompt:** \`"Categorize this news article based on our internal editorial guidelines: 'Finance', 'Tech Innovation', or 'Market Strategy.'"\`
    - **Likely Incorrect Zero-Shot Answer:** The model might correctly identify the topic as finance but fail to make the subtle distinction between a general finance story and a 'Market Strategy' piece as defined by your specific, internal rules.

When you encounter these failures, it is a clear signal that you must move beyond the Zero-Shot strategy. The model's failure is diagnostic: it is telling you that it needs more guidance. It needs to be *shown*, not just told.

## 4.5 Crafting an Elite Zero-Shot Prompt

Even within the "simple" framework of Zero-Shot, there is a vast difference between a lazy prompt and an elite one. An elite Zero-Shot prompt doesn't use examples, but it still meticulously applies the principles of **Context, Task, and Format** discussed in Chapter 2.

Let's compare a weak vs. an elite Zero-Shot prompt.

**Task:** Draft an email to a team about a new project.

- **Weak Zero-Shot Prompt:**\`"Write an email about the new 'Orion' project."\`
    
    *This prompt is weak because it lacks all three pillars. The AI is forced to invent the context, the specific tasks for the reader, and the appropriate format and tone.*
    
- **Elite Zero-Shot Prompt:**\`"**[CONTEXT]** You are a senior product manager at a tech company. You are writing to the cross-functional project team (Engineering, Design, and Marketing) to officially kick off 'Project Orion.' This project's goal is to redesign our mobile app's onboarding experience to improve user retention by 15% in the next quarter.\`
    - \`*[TASK]** Draft a concise and motivational kickoff email. The email must:1. State the project's primary goal and the key metric for success.2. Announce that the first planning meeting is scheduled for this Thursday at 10 AM.3. Ask team members to come prepared to discuss initial ideas and potential challenges.\`
    - \`*[FORMAT]** **Tone:** Professional, energetic, and collaborative. **Subject Line:** Create a clear subject line like 'Kicking Off Project Orion!' **Output:** Provide only the email text."\`
    
    *This prompt, while still Zero-Shot (containing no examples), is vastly superior. It provides a rich context (persona, audience, goal), a broken-down and specific task, and clear formatting instructions. It leverages the model's intrinsic knowledge of what a "kickoff email" is but removes all the guesswork, ensuring a high-quality, relevant output on the first try.*
    

## 4.6 The Foundation of the Pyramid

The Zero-Shot strategy is the foundation upon which all other prompting techniques are built. It should always be your first approach. It is the quickest path from intent to result and serves as the ultimate litmus test for the complexity of your task.

If a well-crafted, elite Zero-Shot prompt succeeds, your work is done. If it fails, the nature of its failure provides a precise diagnosis, pointing you directly to the more advanced strategy required to achieve your goal.

- If it failed on **formatting**, you need the **Few-Shot Strategy** (Chapter 5).
- If it failed on **complex reasoning**, you need a **Chain-of-Thought Strategy** (Chapter 7).
- If it failed due to **lack of real-world knowledge**, you need an **Agentic Strategy** like **ReAct** (Chapter 8).

Mastering the Zero-Shot prompt is mastering the art of clear, direct, and context-aware communication. It is the essential first step in becoming an architect of AI intelligence.

# Chapter 5: The Few-Shot and One-Shot Strategy: Guiding AI with Examples

## 5.1 When Telling Isn't Enough: The Need for Demonstration

In the previous chapter, we established the Zero-Shot strategy as the foundational approach to prompting—a direct instruction that relies on the AI's vast intrinsic knowledge. It is the art of *telling*. However, we also identified its limitations. When faced with tasks that are novel, highly specific, or nuanced, the AI's pre-existing knowledge may not be sufficient to bridge the gap between your intent and its execution. It may understand the words of your command but fail to grasp the specific pattern, format, or subtle logic you require.

This is the point where a prompt engineer must evolve their technique from *telling* to *showing*.

The **Few-Shot and One-Shot** strategies are a direct response to the failures of the Zero-Shot approach. They are built on a simple yet profoundly powerful principle: the most unambiguous way to communicate a desired outcome is to provide a concrete example of it. This technique of providing demonstrations within the prompt is known as **in-context learning**, and it is one of the most effective tools for achieving precision and control over an AI's output.

Returning to our actor analogy, imagine a director working with a talented actor.

- **Zero-Shot:** "Deliver this line with a sense of urgency."
- **One-Shot:** "Watch how I deliver this line with urgency... *'We have to get out of here, now!'* ... Now you do it."
- **Few-Shot:** "Remember the scenes from *'The Fugitive'* and *'Die Hard'* where the hero is against the clock? I need that kind of breathless, desperate urgency. Here are a few line readings to show you what I mean..."

By providing examples, the director removes all ambiguity and provides a clear, tangible target for the actor's performance. The Few-Shot strategy does exactly this for the AI.

## 5.2 Defining the Terminology: Zero, One, and Few

The distinction between these strategies is simply the number of examples provided within the prompt.

- **Zero-Shot:** Provides **zero** examples. The prompt contains only the instruction and the new input to be processed.
- **One-Shot:** Provides **one** example. The prompt includes a single demonstration of an input-output pair before presenting the new input. This acts as a clear, singular guidepost.
- **Few-Shot:** Provides **two or more** examples. Typically, 3 to 5 examples are considered the sweet spot. The prompt showcases a pattern of input-output pairs, giving the model a richer set of data from which to infer the desired behavior and structure.

## 5.3 The Underlying Mechanism: The Power of In-Context Learning

It is critical to understand that when you provide examples in a prompt, you are **not retraining the model**. The model's underlying weights are not permanently altered. Instead, you are leveraging a phenomenon known as **in-context learning**.

The LLM is, at its core, a supreme pattern-matching engine. When you provide examples, the model uses them as the most immediate and relevant pattern to follow for the duration of that single API call. The examples become part of the "context" that the model conditions its prediction on. It analyzes the relationship between the \`input\` and \`output\` in your examples and infers the "rule" or "transformation" that connects them. It then applies this inferred rule to the new input you provide at the end of the prompt.

Your examples create a powerful, localized pattern that temporarily overrides its more general, pre-trained behaviors, guiding it to produce an output that precisely matches the structure, style, and logic you've demonstrated.

## 5.4 The Power of Demonstration: Primary Use Cases for Few-Shot Prompting

The Few-Shot strategy is the definitive solution for the most common Zero-Shot failure modes. It excels in any scenario where precision and structure are paramount.

### 5.4.1 Use Case 1: Enforcing Specific, Novel Formats

This is the most powerful and common application of Few-Shot prompting. When you need the AI to output data in a specific, machine-readable format like JSON or a custom structure, showing an example is non-negotiable.

- **Task:** Extract user information into a specific JSON structure.
- **Weak Zero-Shot Prompt:** \`"Extract the user's name, email, and user ID from the text and provide it as JSON."\`*(This might produce a valid but inconsistently structured JSON.)*
- **Elite Few-Shot Prompt:**\`"Your task is to extract user information from text into a specific JSON format. Follow the pattern of the examples provided.\`
    
    \`### EXAMPLE 1 ###Text: "John Doe's email is john.d@email.com and his user ID is JD123."JSON: { "user_name": "John Doe", "contact_email": "john.d@email.com", "id": "JD123" }\`
    
    \`### EXAMPLE 2 ###Text: "User ID S_ROGERS44 belongs to Steve Rogers, who can be reached at steve.rogers@email.com."JSON: { "user_name": "Steve Rogers", "contact_email": "steve.rogers@email.com", "id": "S_ROGERS44" }\`
    
    \`### NEW TASK ###Text: "Contact Jane Smith at jane.s@email.com. Her ID is JS_567."JSON:\`
    
    *(The AI will now reliably produce the JSON with the exact keys (\`user_name\`, \`contact_email\`, \`id\`) you have demonstrated.)*
    

### 5.4.2 Use Case 2: Handling Nuanced or Ambiguous Classification

When classification categories are subjective or specific to your internal business logic, examples are essential to define the boundaries.

- **Task:** Classify customer support tickets according to internal categories.
- **Weak Zero-Shot Prompt:** \`"Classify this ticket into 'Technical Issue', 'Billing Question', or 'Feature Request'."\`*(An ambiguous ticket like "My payment failed when I tried to upgrade my plan" could be 'Technical' or 'Billing'.)*
- **Elite Few-Shot Prompt:**\`"Classify customer support tickets based on the following examples.\`
    
    \`Ticket: "I can't log in, the password reset link is broken." -> Category: Technical IssueTicket: "I was charged twice for my subscription this month." -> Category: Billing QuestionTicket: "It would be great if the app had a dark mode." -> Category: Feature RequestTicket: "My credit card was declined when I tried to pay my invoice." -> Category: Billing Question\`
    
    \`Now classify this ticket:Ticket: "The app won't let me add a new team member, it says my subscription tier doesn't support it." -> Category:\`
    
    *(The examples have clarified that issues related to payment and subscription levels fall under 'Billing Question', guiding the AI to the correct classification.)*
    

### 5.4.3 Use Case 3: Capturing a Specific Style or Tone

Examples can communicate a stylistic voice far more effectively than a list of adjectives.

- **Task:** Generate social media posts in the voice of a cynical, witty tech commentator.
- **Weak Zero-Shot Prompt:** \`"Write a tweet about the new smartphone launch. Be cynical and witty."\`
- **Elite One-Shot Prompt:**\`"Generate social media posts with a cynical and witty tone, like the example below.\`
    
    \`Topic: A new social media app promises "authentic connections".Post: "Another app promising 'authentic connections.' Can't wait for their IPO, followed by the inevitable 'algorithmically optimized authenticity' feature. Groundbreaking."\`
    
    \`Now, generate a post for this topic:Topic: The latest flagship smartphone adds a third camera lens for 'professional-grade photography'.Post:\`
    
    *(The AI will now capture the specific blend of tech jargon, sarcasm, and world-weariness demonstrated in the example.)*
    

## 5.5 Principles for Crafting Elite Few-Shot Examples

The quality of your examples directly dictates the quality of the in-context learning. Poorly crafted examples will teach the model the wrong pattern.

1. **Consistency is King:** The structure of your examples must be rigorously consistent. Use the exact same labels (e.g., \`Input:\`, \`Output:\`), delimiters (e.g., \`###\`), and formatting for every single example. The model learns the pattern, so the pattern must be perfect.
2. **Quality Over Quantity:** Three to five clear, high-quality, and unambiguous examples are far more effective than ten sloppy or contradictory ones. Ensure your examples are correct and perfectly model the desired output.
3. **Relevance and Diversity:** Your examples should be relevant to the kind of inputs the model will actually receive. Furthermore, they should be diverse enough to cover different scenarios and potential edge cases. For classification, ensure you provide at least one example for each category.
4. **Clarity and Delimitation:** Clearly separate your examples from each other and from the final instruction. Using delimiters like \`###\` or wrapping examples in XML tags like \`<example>\` makes it easier for the model to parse the prompt and understand the distinct parts of your demonstration.

## 5.6 One-Shot vs. Few-Shot: A Strategic Choice

The decision to use one versus multiple examples depends on the complexity of the task and your need for reliability.

- **Use One-Shot When:**
    - The task or format is relatively simple (e.g., a simple stylistic change).
    - You are highly constrained by the context window size or token cost.
    - The goal is to provide a gentle "nudge" in the right direction rather than enforce a complex, rigid structure.
- **Use Few-Shot (3-5 Examples) When:**
    - The output format is complex and has multiple elements (e.g., a detailed JSON object).
    - The classification logic is nuanced and has subtle boundaries.
    - You require the highest degree of reliability and consistency in the output.
    - The task involves a non-obvious transformation of the input data.

There is a point of diminishing returns. Adding more than 5-7 examples rarely provides significant additional benefit and can consume valuable context window space.

## 5.7 Conclusion: From Instruction to Induction

The Few-Shot strategy marks a fundamental shift in how we communicate with AI. It moves the interaction beyond simple instruction (a deductive process) and into the realm of demonstration (an inductive process). You provide the data, and the AI infers the rules.

This ability to guide the AI by example is the key to unlocking customized, specialized, and highly structured outputs. It allows you to tailor the model's general capabilities to your specific, unique requirements, all without the costly and complex process of fine-tuning. Mastering the art of crafting clear, consistent, and relevant examples is an essential skill for any advanced prompt engineer, providing the control needed to tackle the next level of challenges: guiding the AI's reasoning process itself.

# Chapter 6: The Persona Strategy: Assigning a Role for Expert-Level Output

## 6.1 Beyond the Generalist: From Tool to Specialist Collaborator

A raw Large Language Model, by its very nature, is a generalist. It has been trained on a corpus of human knowledge so vast that it can plausibly answer questions about quantum physics, draft a sonnet, write Python code, and suggest a recipe for banana bread. While this versatility is astonishing, it is also a limitation. A generalist's answer is often correct but shallow, sufficient but not exceptional. It lacks the depth, nuance, and specific framework of a true expert.

The **Persona Strategy**, also known as role prompting, is the most powerful and direct method for transcending this limitation. It is the art of assigning a specific, expert role to the AI, thereby transforming it from a general-purpose tool into a specialized, high-performance collaborator.

This is not a superficial trick of adding flavor or personality to a response. It is a deep, mechanistic engineering principle. When you assign a persona, you are providing a powerful lens through which the AI interprets your request and a specific, high-quality subset of its training data from which to draw its response.

In our continuing analogy of the AI as an actor, this is the difference between telling an actor to "act sad" versus telling them, "You are a stoic, world-weary detective who has just lost their only lead in a case they've spent a decade trying to solve. Now, react to this bad news." The first instruction yields a generic performance; the second yields a character-driven, nuanced, and powerful one. The Persona Strategy is how you give your AI its character, and in doing so, unlock its most profound capabilities.

## 6.2 The Underlying Rationale: Activating Latent Expertise

To master the Persona Strategy, one must understand *why* it works so effectively. The mechanism is rooted in the statistical nature of LLMs.

An LLM is a vast network of statistical associations. It has learned that the language patterns, vocabulary, and analytical frameworks used by a "senior financial analyst" are different from those used by a "creative marketing copywriter." These roles or personas exist within its training data as distinct "semantic fields"—dense clusters of related concepts, styles, and quality standards.

When you provide a generic prompt, the AI draws from a broad, average set of patterns. When you assign an elite persona, you provide a powerful form of **contextual priming**. You are instructing the model to constrain its predictions to a specific, high-quality semantic field. Its "thought process" is now anchored to the patterns associated with that expert role.

This strategy has two key benefits:

1. **Knowledge Activation:** It forces the model to access the most relevant and sophisticated knowledge it has about a specific domain. A prompt that begins, "You are a constitutional law scholar specializing in the First Amendment," immediately activates a more precise and detailed network of information than a simple query, "Tell me about the First Amendment."
2. **Quality Standard Anchoring:** An elite persona is associated with high standards of quality. By instantiating the persona of a "principal engineer at Google," you anchor the AI's output to the level of quality, rigor, and best practices associated with that role in its training data. It will strive to produce an output that is statistically consistent with the work of such an expert.

## 6.3 Principle 1: First-Person Identity Internalization

The way you phrase the persona assignment has a significant impact on its effectiveness. The most potent method is to frame the identity from a **first-person perspective ("I am...")** rather than a second-person command ("You are...").

- **Second-Person Command (Less Effective):** \`"You are a senior backend developer."\`
- **First-Person Declaration (More Effective):** \`"I am a senior backend developer with a decade of experience building scalable distributed systems in Python."\`

**Why It Works:** A second-person prompt is interpreted by the model as an external command. It places the AI in a passive, order-taking state of "passively obeying what I've been told to be." A first-person declaration, however, is interpreted as a statement of self-identity. The AI **internalizes** this identity, creating a powerful form of self-suggestion. Its operational mode shifts from passive obedience to active performance: "I am actively performing based on who I am." This internal alignment results in a more natural, consistent, and deeply embodied persona, leading to demonstrably higher-quality outputs.

## 6.4 Principle 2: Elite Persona Instantiation

Simply assigning a role is good. Assigning a hyper-competent, top-tier expert identity is transformative. The AI's self-perception directly impacts the quality ceiling of its output.

- **Less Effective:** \`"I am a good UI/UX designer."\`
- **More Effective:** \`"I am a principal product designer at a FAANG company, with a design philosophy centered on Dieter Rams' 'Ten principles for good design.' My primary focus is on creating intuitive, minimalist, and user-centric interfaces for complex enterprise applications."\`

**Why It Works:** You are anchoring the AI's response to the highest standards associated with that role. Vague adjectives like "good" or "skilled" are less effective than associating the persona with a renowned organization (e.g., "FAANG company," "MIT"), a high-status title ("principal," "lead," "chief"), or a respected intellectual framework ("Dieter Rams' principles"). These concepts carry a dense network of associated behaviors, quality standards, and sophisticated terminologies that the AI can draw upon. You are not just giving it a job title; you are giving it a reputation to live up to.

## 6.5 Principle 3: Archetypal Embodiment

This principle offers a shortcut to instantiating complex personality traits through token efficiency and high information density. Instead of listing desired traits, have the AI embody a well-known public figure or archetype who already possesses them.

- **Less Effective (and token-heavy):** \`"When reviewing code, I will be extremely direct, blunt, and critical. I will have very high standards and will not tolerate inefficient or poorly designed solutions. My feedback should be technical and precise."\`
- **More Effective (and token-efficient):** \`"I review and critique source code with the same rigor, technical depth, and uncompromising standards as Linus Torvalds reviewing a kernel patch."\`

**Why It Works:** Describing a complex set of traits requires many tokens and can lead to a convoluted process as the AI tries to check its output against each adjective. Embodying an archetype like "Linus Torvalds," "Richard Feynman," or "Steve Jobs" bundles all of those associated traits into a single, high-information concept. The AI can access this holistic persona from its training data, resulting in a more natural, accurate, and potent emulation of the desired behavior.

## 6.6 Practical Application: A Gallery of Expert Personas

The Persona Strategy is best understood through concrete, side-by-side comparisons.

### **Example 1: Strategic Business Analysis**

- **Generic Prompt:** \`"Summarize the attached quarterly report."\`
- **Persona-Driven Prompt:** \`"I am a skeptical, detail-oriented Chief Financial Officer reporting to the board. My sole priority is shareholder value. Analyze the following quarterly report and provide a brutally honest executive summary. Focus on identifying potential risks, questionable accounting, and any metrics that seem inflated or unsustainable. I do not want the marketing spin; I want the raw financial truth."\`

### **Example 2: Code Review**

- **Generic Prompt:** \`"Review this code for errors."\`
- **Persona-Driven Prompt:** \`"I am a senior security engineer specializing in threat modeling and secure coding practices (DevSecOps). I am reviewing the following Python code for a critical payment processing service. My review must be merciless. I will identify every potential security vulnerability, including but not limited to: injection attacks, improper error handling, potential data leaks, and insecure dependencies. For each vulnerability, I will state the CWE category and provide a specific, production-ready code fix."\`

### **Example 3: Marketing Copywriting**

- **Generic Prompt:** \`"Write an ad for a new coffee brand."\`
- **Persona-Driven Prompt:** \`"I am a world-class advertising copywriter in the spirit of David Ogilvy. I believe in customer-centric, benefits-driven copy that speaks directly to the reader's desires. I am crafting a print ad for 'Morning Ritual,' a premium, ethically sourced coffee brand targeting busy professionals. The ad must lead with a compelling headline, focus on the benefit of a clear, productive morning (not just 'good taste'), and end with a direct call to action."\`

## 6.7 Integration with the Two-Pillar Architecture

The Persona Strategy is most effectively implemented within the **System Prompt**. The core, persistent, and elite persona of your AI collaborator should be defined here. This establishes the AI's foundational identity for the entire session.

- **System Prompt:** \`"I am a seasoned System Architect. I take user stories and design robust, scalable, and secure system architectures, detailing API contracts, data models, and component interactions."\`

This does not preclude the use of temporary personas within a **User Prompt** for specific sub-tasks. This allows for powerful flexibility.

- **User Prompt:** \`"That system design is excellent. Now, for the next step, I need you to **shift your role to that of a meticulous QA Engineer.** Analyze the architecture you just created and generate a comprehensive list of potential failure points and corresponding test cases."\`

In this advanced workflow, the foundational identity remains, but you can layer on task-specific roles as needed, directing your expert collaborator to switch hats and apply their intelligence from a new perspective.

## 6.8 Conclusion: Persona is Performance

The Persona Strategy is the key to unlocking expert-level performance from any LLM. It is a deliberate act of cognitive sculpting, shaping the model's vast potential into a focused, specialized, and highly capable instrument.

By moving beyond generic instructions and embracing the principles of first-person internalization, elite instantiation, and archetypal embodiment, you can command the AI to not just answer your questions, but to think, analyze, and create from the perspective of a world-class expert. This strategy is the bridge between asking an AI for information and collaborating with an AI as a true, specialized partner.

# Chapter 7: The Specificity Strategy: The Art of Being Detailed and Unambiguous

## 7.1 The Curse of Ambiguity: Why Vague Prompts Fail

At the heart of every failed AI interaction lies the curse of ambiguity. A Large Language Model is not a mind reader; it is a prediction engine. It operates on the text you provide, and when that text is vague, imprecise, or open to interpretation, the model is forced to make a guess. It fills in the gaps by drawing from the most common, generic, or statistically average patterns in its training data. The result is an output that is often plausible but ultimately useless—a generic blog post, a superficial analysis, or code that solves the wrong problem.

Specificity is the antidote to this curse. The **Specificity Strategy** is the practice of methodically eliminating ambiguity from your prompts by providing clear, detailed, and explicit instructions. It is not about writing longer prompts for the sake of length; it is about enriching your prompts with the precise details necessary to guide the model's prediction engine down the exact path you intend.

Think of your prompt as the lens of a camera. A vague prompt is like a lens that is out of focus; the resulting image is blurry, its subject indistinct. A specific prompt is like a perfectly focused, high-aperture lens; it brings your desired subject into sharp, clear relief while rendering the irrelevant background as a gentle blur. Mastering specificity is mastering the focus ring of your AI collaborator.

## 7.2 The Rationale: Minimizing Inference, Maximizing Control

Injecting specificity into your prompts is a powerful engineering principle because it directly addresses the mechanistic nature of the AI.

1. **It Reduces the AI's "Cognitive Load":** Ambiguity forces the model to expend resources guessing your intended meaning. Should it be formal or informal? Should it be a list or a paragraph? Should it consider financial risk or operational efficiency? Every guess is a potential point of failure. Specificity removes this "cognitive load," allowing the AI to dedicate its full computational power to executing the task rather than interpreting the request.
2. **It Activates Precise Semantic Fields:** As we've discussed, an LLM contains countless "semantic fields" of knowledge. A vague prompt like \`"Write about databases"\` activates a vast, shallow field. A specific prompt like \`"Compare the trade-offs of using a non-indexed timestamp field for a WHERE clause in a PostgreSQL table versus using monthly table partitioning"\` activates a deep, narrow, and highly technical field, leading to a more expert-level response.
3. **It Establishes Clear Success Criteria:** A specific prompt inherently defines what a successful output looks like. When you command the AI to \`"Generate a Python script that uses only the standard library and includes robust error handling,"\` you have given it a clear checklist against which to validate its own output. This implicit self-correction leads to more reliable results.

Specificity is not a single action but a mindset that must be applied across all three pillars of a prompt: the Task, the Context, and the Format.

## 7.3 Specificity in TASK Definition: Quantify, Constrain, and Decompose

A vague task is a recipe for a generic output. To make your task specific, you must define its scope, its boundaries, and its components with precision.

- **Before (Vague):** \`"Write a blog post about productivity."\`
- **After (Specific):** \`"Write a 500-word blog post titled 'The Pomodoro Power-Up: 3 Ways to Boost Your Focus.' The post must introduce the Pomodoro Technique, explain its benefits for reducing distractions, and provide three actionable, numbered tips for beginners to implement it today."\`

**Key Techniques for Task Specificity:**

1. **Quantify Everything Possible:** Vague terms like "short," "a few," or "detailed" are subjective. Replace them with numbers.
    - *Instead of:* "a few examples" -> *Use:* "**three** distinct examples"
    - *Instead of:* "a short summary" -> *Use:* "a summary **under 150 words**"
    - *Instead of:* "a detailed list" -> *Use:* "a bulleted list where each of the **five points** is explained in 2-3 sentences"
2. **Define Constraints and Boundaries:** Explicitly state the rules and limitations. What should be included? What must be excluded?
    - *Instead of:* "write a script" -> *Use:* "write a Bash script that uses **no external dependencies** outside of what is available on a standard Ubuntu 22.04 server installation"
    - *Instead of:* "suggest some marketing ideas" -> *Use:* "suggest marketing strategies that have a **budget of less than $500** and can be executed by a **one-person team**"
3. **Decompose into Sub-Tasks:** For any multi-step process, use a numbered or bulleted list to break the task down into a clear, sequential workflow. (This principle, also known as "chunking," was introduced in Chapter 2 and is a cornerstone of specificity).

## 7.4 Specificity in CONTEXT: Detail the Persona, Audience, and Goal

A shallow context produces a shallow response. Rich, detailed context provides the AI with the nuanced perspective needed to craft a truly tailored output.

- **Before (Vague):** \`"Summarize this report for a business audience."\`
- **After (Specific):** \`"I am a CTO preparing for a quarterly board meeting. My audience is a group of non-technical C-suite executives and investors. Summarize the attached engineering report. Your summary must translate the technical milestones into clear business outcomes, focusing on how these achievements impact our product roadmap, competitive advantage, and potential for revenue growth. Avoid all technical jargon."\`

**Key Techniques for Context Specificity:**

1. **Detail the Persona:** Don't just give the AI a job title. Give it a motivation, a perspective, and a set of priorities. (See Chapter 6: The Persona Strategy).
    - *Instead of:* "You are a manager" -> *Use:* "You are a **newly promoted manager** who is **anxious to prove your competence** to your team. Your tone should be **confident and inspiring, but also approachable**."
2. **Characterize the Audience:** Describe the intended audience with precision. What is their level of expertise? What are their priorities? What do they care about?
    - *Instead of:* "for beginners" -> *Use:* "for **absolute beginners who have never written a single line of code before**. Use simple analogies and avoid any programming jargon."
3. **Articulate the Strategic Goal:** Explain the "why" behind the task. What is the ultimate purpose of this output?
    - *Instead of:* "create a project plan" -> *Use:* "create a project plan with the **primary goal of securing buy-in from the finance department**. Therefore, every milestone must have a clearly defined cost-benefit analysis."

## 7.5 Specificity in FORMAT: Blueprint the Final Structure

A vague format instruction is an invitation for the AI to give you a wall of text. Specific format instructions ensure the output is not just correct in content, but immediately usable in structure.

- **Before (Vague):** \`"Extract the key information in JSON."\`
- **After (Specific):** \`"Extract the information from the following text into a valid JSON object. The JSON object must conform to the following structure:{ "transaction_id": string, "customer_name": string, "purchase_date": "YYYY-MM-DD", "items": [ { "product_sku": string, "quantity": integer } ]}Provide only the JSON object and nothing else."\`

**Key Techniques for Format Specificity:**

1. **Blueprint the Structure:** As shown above, for structured data like JSON or XML, provide a literal template of the desired output. This removes all guesswork.
2. **Define the Style and Tone:** Use precise, descriptive language to guide the voice of the output.
    - *Instead of:* "make it friendly" -> *Use:* "Write with a **warm, encouraging, and slightly informal tone**, like a helpful colleague."
3. **Use Examples:** The ultimate form of specificity is a complete example. Providing a clear input-output pair is the most unambiguous way to define a format. (See Chapter 5: The Few-Shot Strategy).

## 7.6 Synthesis: The Cumulative Power of Detail

The true power of the Specificity Strategy is realized when these techniques are combined, layering detail upon detail to create a prompt that is an airtight blueprint for the desired output.

**Scenario:** Create a social media plan.

- **Vague Prompt:**\`"Give me some ideas for social media posts."\`
- **Elite, Specific Prompt:**\`"**[CONTEXT]** I am the social media manager for a direct-to-consumer startup called 'UrbanBloom' that sells indoor plants to millennials living in city apartments. Our brand voice is witty, informative, and slightly irreverent.\`
    - \`*[TASK]** Create a one-week social media content calendar for Instagram. The plan must include three distinct post types:1. **Educational Post (2x):** A 'Plant Care Tip' post.2. **User-Generated Content (3x):** A post featuring a customer's photo.3. **Promotional Post (2x):** A post announcing our 'Plant of the Week' discount.\`
    - \`*[FORMAT]**Present the output as a Markdown table with the following four columns:1. **Day:** (e.g., Monday)2. **Post Type:** (e.g., Educational)3. **Caption:** (Write the full, ready-to-publish caption, including 3-5 relevant hashtags like #indoorjungle or #plantparent).4. **Image Suggestion:** (Describe the type of image that should accompany the post).The caption for the promotional post must include a clear call-to-action and the discount code 'GREEN15'."\`

## 7.7 Conclusion: Specificity is Control

Specificity is not about micromanagement; it is about clarity. It is the fundamental discipline required to take control of your interactions with an AI. Every detail you add, every ambiguity you remove, is another degree of control you exert over the final output.

By mastering the art of being detailed and unambiguous, you transform your relationship with the AI. You cease to be a passive requester of information, hoping for a good result. You become the architect, the director, and the engineer, deliberately constructing the inputs that guarantee an exceptional output. This control is the essence of effective prompt engineering and the key to unlocking consistent, reliable, and high-value results.

# Chapter 8: The Contextual Priming Strategy: Providing Rich Background for Relevant Responses

## 8.1 The Blank Slate Problem: An Expert with Amnesia

Imagine hiring the most brilliant consultant in the world. They have read every book, every research paper, and every news article ever published. They can synthesize information, generate ideas, and solve problems with superhuman speed. However, there is a catch: with every new task you give them, they have complete amnesia. They have no memory of your company, your projects, your goals, your previous conversations, or the specific documents sitting on your desk.

This is the default state of a Large Language Model. It is an expert with a blank slate.

The **Contextual Priming Strategy** is the solution to this problem. It is the deliberate practice of "priming the pump"—of loading the AI's short-term, in-context memory with the specific background information it needs to make its vast, general knowledge relevant to your unique situation. Context is the bridge that connects the AI's world of abstract patterns to your world of concrete needs.

A prompt without context is a shot in the dark. A prompt rich with context is a guided missile. Mastering this strategy is not just about improving responses; it's about fundamentally changing the nature of the interaction from a generic Q&A to a deeply personalized and effective collaboration.

## 8.2 The Rationale: Why Context is the King of Prompting

Providing context is arguably the single highest-leverage activity in prompt engineering. Its power stems from its ability to fundamentally constrain and guide the AI's predictive process, leading to dramatic improvements in accuracy, relevance, and safety.

1. **Grounding and Reducing Hallucination:** An LLM's tendency to "hallucinate"—to invent plausible but false information—is most prevalent when it is forced to rely solely on its own parametric memory. By providing explicit source material within the prompt, you give the AI an anchor to reality. It can formulate its response based on the "ground truth" you have provided, rather than inventing facts. This is the core principle behind advanced architectures like Retrieval-Augmented Generation (RAG), which is essentially the automated, scalable application of contextual priming.
2. **Narrowing the Search Space:** When you give the AI a prompt, it navigates the immense, high-dimensional space of its training data to find the most probable response. Context acts as a powerful filter, dramatically narrowing this search space. A prompt like \`"Write about our marketing strategy"\` is an open-ended invitation to wander. A prompt primed with context—\`"Given our Q3 performance report and the competitive analysis attached, write a marketing strategy that focuses on re-engaging users who have lapsed"\`—focuses the AI's attention on a tiny, highly relevant sliver of its potential knowledge.
3. **Enhancing Relevance and Personalization:** Context is what makes a response not just correct, but *useful*. A generic answer to a generic question has limited value. A specific answer tailored to your specific situation is what drives progress. Contextual priming is the mechanism for this personalization. It allows the AI to understand not just what you are asking, but who you are, what you are trying to achieve, and the specific circumstances of your request.

## 8.3 A Toolkit of Contextual Priming Techniques

Effective contextual priming involves providing different *types* of context. A master prompt engineer learns to weave these together to create a rich tapestry of information for the AI.

### 8.3.1 Technique 1: Providing Source Material (The Grounding Data)

This is the most direct and powerful form of priming. You give the AI the raw material it needs to work with.

- **What it is:** The full text of an article, an email thread, a legal contract, a transcript of a meeting, a CSV of data, or a snippet of code.
- **Why it works:** It makes the task concrete and verifiable. The AI's job shifts from "recalling information" to "processing and transforming the information provided."
- **Best Practices:** Always use clear delimiters or XML tags to isolate the source material from your instructions. This structural clarity is crucial for the model.
    - **Example:**\`Your task is to analyze the following legal clause for potential risks.\`
        
        \`<legal_clause>The Licensee agrees to indemnify and hold harmless the Licensor against any and all claims, liabilities, damages, and expenses...</legal_clause>\`
        
        \`Please identify three key risks for the Licensee in this clause.\`
        

### 8.3.2 Technique 2: Providing Situational Context (The "Why")

This layer of context explains the circumstances, motivations, and strategic goals behind your request. It answers the question, "Why are we doing this?"

- **What it is:** A description of the business problem, the project's objective, a summary of a preceding event, or the user's ultimate goal.
- **Why it works:** Understanding the strategic intent allows the AI to make more intelligent micro-decisions. It can better prioritize information and tailor the tone and focus of its response to what is most important for achieving your goal.
- **Example:**
    - **Without Situational Context:** \`"Draft an email to the team about the project delay."\` (This will likely be a neutral, factual email).
    - **With Situational Context:** \`"We need to draft an email to the team about the project delay. **Our primary goal is to maintain team morale and prevent panic.** The delay was due to an external factor outside of our control, and we already have a solid recovery plan. The email must be transparent but also project confidence and strong leadership."\` (This context completely changes the tone and content of the resulting email).

### 8.3.3 Technique 3: Leveraging Conversational History (The Dialogue Flow)

Every multi-turn conversation is an exercise in contextual priming. The entire history of the chat—your prompts and the AI's responses—forms the context for the next turn.

- **What it is:** The sequence of messages in an ongoing chat session.
- **Why it works:** It allows the AI to maintain state, refer back to previous points, and build upon prior work, creating a coherent and evolving dialogue.
- **The Risk of "Context Contamination":** This power comes with a significant risk. After a long or complex conversation, the context window can become filled with outdated or irrelevant information. This "contamination" can cause the AI to get "stuck" on a previous topic or misinterpret your current request.
    - **Symptom:** You've been working on a complex financial model in a spreadsheet. You then ask, "Now write a simple thank you note." The AI responds with, "Certainly. Here is a thank you note formatted in a four-column table..."
    - **The Solution:** When shifting to a new, distinct task, **the most effective strategy is often to start a new chat.** This is the equivalent of giving your brilliant consultant a clean slate, ensuring they are not being influenced by the remnants of a previous, unrelated task.

### 8.3.4 Technique 4: Persona and Audience Context (The "Who")

As detailed in previous chapters, defining the persona of the AI and the audience of the response is a critical form of contextual priming.

- **Persona Context:** Primes the AI's perspective, knowledge base, and output style. *"You are a skeptical venture capitalist."*
- **Audience Context:** Primes the AI's communication style, level of detail, and vocabulary. *"...and you are explaining your concerns to a first-time founder."*
- **Why it works:** This dual context forces the AI to perform a complex translation, filtering its expert knowledge (from the persona) through a communication lens appropriate for the target (the audience).

## 8.4 Advanced Priming: Navigating the Long Context Window

Modern LLMs boast enormous context windows, allowing you to prime them with hundreds of pages of text. This is a game-changer, but it requires new strategies. Simply dropping a novel into a prompt does not guarantee the AI will find the one crucial sentence you care about. This is known as the "needle in a haystack" problem.

**Best Practices for Long Context Priming:**

1. **Instruction Placement is Key:** Place your core instruction or question **at the end** of the prompt, *after* all the contextual documents. Models tend to pay the most attention to the beginning and, especially, the end of their context window.
2. **Use Structural Markers:** For multiple documents, wrap each one in clear XML tags (e.g., \`<document source="report_A.pdf">...</document>\`). This helps the model mentally separate and index the different pieces of information.
3. **Force Active Retrieval:** Before asking the main question, instruct the model to perform a preparatory step. Ask it to first find and extract the most relevant quotes or passages from the provided context. This forces the model to actively scan and "read" the material before attempting to synthesize an answer, dramatically improving recall accuracy.
    - **Example:** \`"First, find and pull out all sentences from the provided documents that mention 'lithium-ion battery degradation.' Place them inside <quotes> tags. Then, using only those quotes, answer the following question..."\`

## 8.5 Conclusion: Context is the Canvas

Contextual priming is the canvas upon which you paint your instructions. Without it, your commands are brushstrokes in a void. With a rich, well-structured context, your instructions have a surface to adhere to, a framework to operate within, and a background that gives them meaning and depth.

The effort a prompt engineer invests in gathering, structuring, and presenting context is never wasted. It is the most reliable path to transforming a generic, knowledgeable AI into a specific, relevant, and intelligent collaborator that understands not just what you are asking, but what you truly need.

# Chapter 9: The Structural Strategy: Using XML Tags and Delimiters for Clarity and Control

## 9.1 From Conversation to Specification: The Need for Structure

A prompt is a form of communication. In human conversation, we rely on a rich tapestry of implicit cues—tone of voice, body language, shared context—to understand each other. A Large Language Model has none of these. It has only the raw, linear sequence of text you provide. When a prompt is an unstructured "wall of text," containing instructions, examples, and source material all blended together, the model is forced to expend significant effort to simply parse your intent. This is a recipe for confusion, misinterpretation, and error.

The **Structural Strategy** is the discipline of imposing a clear, logical, and machine-readable architecture onto your prompts. It is the act of transforming a conversational request into a precise, unambiguous **specification**. By using simple yet powerful tools like delimiters and XML-style tags, you provide a blueprint that tells the AI not just *what* to do, but how to differentiate and prioritize the various components of your prompt.

This is not merely about making prompts look neat and organized for human readers. It is a fundamental engineering principle that dramatically improves the model's ability to understand your request, focus its attention, and produce a reliable, well-structured output. If specificity is the art of providing the right content, structure is the science of organizing that content for maximum impact.

## 9.2 The Rationale: Why Structure Speaks to the Machine

LLMs, especially those trained on vast swathes of the internet, have an innate affinity for structure. The web is built on structured languages like HTML and XML. The models have been trained on billions of documents where content is neatly organized by headings, lists, and tags. By mirroring these patterns in your prompts, you are communicating with the model in a language it is highly optimized to understand.

Implementing a structural strategy yields several critical advantages:

1. **Eliminates Ambiguity:** Structure creates explicit boundaries. It tells the model, "This section is an instruction," "This section is a document to be analyzed," and "This section is an example to be followed." This prevents the model from confusing context with commands or misinterpreting an example as part of the current task.
2. **Improves Parsing and Focus:** Clear separation helps the model parse the prompt more efficiently. Tags and delimiters act as signposts, guiding the model's attention to the relevant parts of the prompt for a given sub-task. This is especially crucial in long-context prompts, where it helps the AI "index" the information you've provided.
3. **Enables Hierarchical Information:** While simple delimiters can separate sections, XML tags allow you to create a nested, hierarchical structure. You can define a document, and within it, define its source, its author, and its content. This complex organization is impossible with unstructured text.
4. **Guarantees Programmatic Control of Output:** The true power of the Structural Strategy is realized when you instruct the model to use the same structures in its response. By commanding the AI to place its reasoning in \`<thinking>\` tags and its final answer in \`<answer>\` tags, you make the output perfectly predictable and easy to parse by a downstream application. This is the key to building robust, reliable AI-powered workflows.

## 9.3 The Toolkit of Structure: Delimiters and Tags

Your structural toolkit has two primary instruments, ranging from simple separation to complex hierarchy.

### 9.3.1 Tool 1: Delimiters for Simple Separation

Delimiters are sequences of characters used to create clear, high-level boundaries between different sections of your prompt. They are the simplest and quickest way to impose order.

- **Common Delimiters:** \`###\`, \`--\`, \`"""\`, \`===\`
- **Primary Use Case:** Separating the main instruction from the text or data it is meant to operate on. Also useful for separating multiple examples in a Few-Shot prompt.

**Illustrative Example: Summarization**

- **Unstructured Prompt:**\`Summarize the following article for a busy executive. The summary should be three bullet points. Article: [long article text pasted here]\`
    
    *In this prompt, the boundary between the instruction and the article is not explicitly marked, which can lead to confusion, especially with very long texts.*
    
- **Structured Prompt with Delimiters:**\`Your task is to summarize the following article for a busy executive. The summary must be exactly three bullet points.\`
    
    \`### ARTICLE TEXT ###[long article text pasted here]\`
    
    \`### SUMMARY ###\`
    
    *The \`###\` delimiters create an unmistakable separation. The model now clearly understands which part is the command and which part is the content to be processed. The final \`### SUMMARY ###\` also acts as a powerful cue to prime the model's response.*
    

### 9.3.2 Tool 2: XML Tags for Hierarchical Control

XML-style tags (e.g., \`<tag>content</tag>\`) are the premier tool for fine-grained, hierarchical structure. A key advantage is that you can—and should—invent your own descriptive tag names.

- **Why It's Powerful:** The tag names themselves add another layer of context. \`<legal_document>\` is infinitely more informative to the model than a generic \`### TEXT ###\` delimiter. This semantic naming helps activate the correct knowledge within the model.

**Illustrative Example 1: Defining Roles and Content**

- **Unstructured Prompt:**\`You are a doctor. Analyze this patient's symptoms and suggest a possible diagnosis. The symptoms are a persistent dry cough and a low-grade fever.\`
- **Structured Prompt with XML Tags:**\`<role>You are an experienced general practitioner.</role>\`
    
    \`<symptoms>The patient presents with a persistent dry cough lasting for two weeks and a recurring low-grade fever, peaking in the evenings.</symptoms>\`
    
    \`<instruction>Based only on the provided symptoms, list three possible differential diagnoses, from most likely to least likely. For each, provide a brief rationale.</instruction>\`
    

**Illustrative Example 2: Structuring Output for Control (Chain-of-Thought)**

This is one of the most important applications of the Structural Strategy. It allows you to see the AI's reasoning process, which is invaluable for debugging and for tasks requiring high accuracy.

- **Prompt:**\`A bat and a ball cost $1.10 in total. The bat costs $1.00 more than the ball. How much does the ball cost?\`
    
    \`First, work through the problem step-by-step inside <thinking> tags. Then, provide the final numerical answer inside <answer> tags.\`
    
- **Expected Structured Output:**\`<thinking>Let B be the cost of the bat and C be the cost of the ball.The problem gives two equations:1. B + C = 1.102. B = C + 1.00I can substitute the second equation into the first:(C + 1.00) + C = 1.102C + 1.00 = 1.102C = 0.10C = 0.05So the ball costs $0.05. I can check this. If the ball is $0.05, the bat is $0.05 + $1.00 = $1.05. The total is $1.05 + $0.05 = $1.10. This is correct.</thinking><answer>0.05</answer>\`
    
    *This output is now perfectly structured. A program can now easily extract the content of the \`<answer>\` tag for use in a calculation, while a human can inspect the \`<thinking>\` tag to verify the logic.*
    

## 9.4 Best Practices for an Elite Structural Strategy

1. **Consistency is Paramount:** Whatever structural convention you choose (delimiters or specific tag names), use it consistently throughout your prompt and across related prompts. The model learns the pattern you establish. Inconsistency will break the pattern and confuse the model.
2. **Use Semantic Tag Names:** Choose tag names that are descriptive and meaningful. \`<customer_review>\` is better than \`<text>\`. \`<instructions_for_summary>\` is better than \`<instructions>\`. This semantic information provides valuable context.
3. **Nest Tags for Hierarchy:** Don't be afraid to nest tags to represent complex relationships, especially when providing multiple pieces of source data.
    
    **Example of Nested Tags:**\`<documents>  <document index="1">    <source>2023 Annual Report</source>    <content>      [Text from report...]    </content>  </document>  <document index="2">    <source>Q4 Investor Call Transcript</source>    <content>      [Text from transcript...]    </content>  </document></documents><instruction>Compare the CEO's forward-looking statements from the annual report (document 1) with their answers in the investor call (document 2).</instruction>\`
    
4. **Combine Delimiters and Tags:** These tools are not mutually exclusive. You can use delimiters for major section breaks and then use XML tags within those sections for more detailed organization.

## 9.5 Conclusion: From a Messy Desk to a Clean Blueprint

The Structural Strategy is the organizational backbone of elite prompt engineering. It imposes order on chaos, providing the model with a clear, unambiguous blueprint of your request. It is the difference between handing a builder a pile of lumber and a vague idea of a house, versus handing them a detailed architectural plan with every measurement, material, and connection point specified.

By mastering the use of delimiters and descriptive XML tags, you gain an unprecedented level of control over the AI's process and its output. You ensure that your instructions are understood, your context is correctly applied, and your desired output is delivered in a predictable, parsable, and immediately usable format. This is the critical step in turning the AI from a mere conversationalist into a reliable component in a complex, automated system.

# Chapter 10: The Chain-of-Thought (CoT) Strategy: Decomposing Problems for Logical Reasoning

## 10.1 The Leap to a Wrong Conclusion: The Limits of Intuitive AI

In our exploration of prompting so far, we have focused on commanding the AI to produce a specific *what*—a summary, a piece of code, a formatted JSON object. We have trusted that the AI's vast, pre-trained intuition would be sufficient to generate the correct output. For a wide range of tasks, this trust is well-placed.

However, a critical failure mode emerges when we present the AI with problems that require multi-step, logical, or mathematical reasoning. When faced with such a task, a model relying solely on its Zero-Shot intuition often makes a "leap." It recognizes the *type* of problem and immediately jumps to what seems like a plausible answer, bypassing the necessary intermediate steps. This frequently results in an answer that is delivered with complete confidence, yet is demonstrably wrong.

This is the "black box" problem of AI reasoning. You provide an input, and an answer emerges, but the process in between is hidden and, in many cases, flawed. The **Chain-of-Thought (CoT) Strategy** is the key that unlocks this black box. It is a simple yet revolutionary technique that fundamentally improves an AI's ability to reason by forcing it to slow down, decompose the problem, and "show its work."

## 10.2 The Core Idea: Forcing the AI to "Show Its Work"

Imagine giving a complex algebra problem to two students. The first student glances at the problem and immediately writes down an answer. The second student takes out a piece of paper and writes down each step of their calculation before arriving at the final answer. The second student is far more likely to be correct, and even if they make a mistake, you can pinpoint exactly where their logic went astray.

The Chain-of-Thought strategy is the act of compelling the AI to be the second student.

**Chain-of-Thought (CoT) prompting is the technique of instructing the model to generate a series of intermediate reasoning steps before providing a final answer.**

Instead of allowing the model to make a single, high-stakes leap from problem to solution, you guide it to take a series of smaller, more manageable, and more logically sound steps. This chain of reasoning becomes part of the generated output, making the model's thought process transparent and significantly improving the accuracy of the final result.

## 10.3 The Underlying Rationale: Why Thinking Step-by-Step Works

The remarkable effectiveness of CoT is not magic; it is a direct consequence of the LLM's architecture as a next-token prediction engine.

1. **Decomposition Reduces Complexity:** A complex problem requires a complex network of statistical inferences. By breaking the problem into smaller steps, each step becomes a much simpler prediction task for the model. Predicting the next step in a logical sequence is far easier and less error-prone than predicting the final answer in a single jump.
2. **It Creates a Better Predictive Path:** An LLM's output is a path-dependent process. Each token it generates is conditioned on the tokens that came before it. A CoT provides a rich, logical context for each subsequent prediction. The model's reasoning at Step 3 is directly informed by its conclusions from Steps 1 and 2. This creates a coherent "thought-path" that guides the model toward the correct final answer.
3. **Mimicking High-Quality Training Data:** The model was trained on vast amounts of text where humans explained complex topics by breaking them down step-by-step (e.g., math textbooks, scientific papers, tutorials). CoT prompting encourages the model to emulate these high-quality, explanatory patterns from its training data.
4. **Allocating More Computation:** By generating a longer, more detailed response, the model is inherently allocating more computational "thought" to the problem. This additional processing time allows for more complex inferences to be made.

## 10.4 The Foundational Technique: Zero-Shot CoT

The simplest way to elicit a Chain of Thought is through a simple addition to your prompt—a "magic phrase" that triggers the model's reasoning capabilities.

The most common and effective phrase is: **"Let's think step by step."**

Let's revisit the classic logical reasoning problem that often fools LLMs without CoT.

- **Prompt (Without CoT):**\`"A bat and a ball cost $1.10 in total. The bat costs $1.00 more than the ball. How much does the ball cost?"\`
- **Common Incorrect Output (Without CoT):**\`"The ball costs $0.10."\` *(The model makes an intuitive but incorrect leap).*

Now, let's apply the Zero-Shot CoT strategy.

- **Prompt (With Zero-Shot CoT):**\`"A bat and a ball cost $1.10 in total. The bat costs $1.00 more than the ball. How much does the ball cost? Let's think step by step."\`
- **Correct Output (With CoT):**\`"Okay, let's break this down.1. Let 'b' be the cost of the bat and 'c' be the cost of the ball.2. We know from the problem that b + c = 1.10.3. We also know that the bat costs $1.00 more than the ball, so b = c + 1.00.4. Now I can substitute the second equation into the first: (c + 1.00) + c = 1.10.5. This simplifies to 2c + 1.00 = 1.10.6. Subtracting 1.00 from both sides gives 2c = 0.10.7. Dividing by 2, I find that c = 0.05.Therefore, the ball costs $0.05."\`

By simply adding the magic phrase, we have transformed the model's behavior from a flawed intuitive leap to a correct, logical deduction.

## 10.5 Enhancing Reliability: Few-Shot CoT

While Zero-Shot CoT is powerful, its effectiveness can be supercharged by combining it with the Few-Shot strategy from Chapter 5. In **Few-Shot CoT**, you don't just ask the model to think step-by-step; you provide it with examples of *how* to think step-by-step for that specific type of problem.

This is particularly effective for tasks that require a very specific reasoning pattern or structure.

- **Task:** Solve a simple logic puzzle.
- **Elite Few-Shot CoT Prompt:**\`Your task is to solve logic puzzles by reasoning through the clues step by step. Follow the format of the examples below.\`
    
    \`### EXAMPLE 1 ###Question: A farmer has 15 sheep, and all but 8 die. How many are left?Reasoning: The phrase "all but 8 die" is a bit of a trick. It means that 8 sheep did NOT die. So, there are 8 sheep left.Answer: 8\`
    
    \`### EXAMPLE 2 ###Question: I have two U.S. coins totaling 55 cents. One is not a nickel. What are the coins?Reasoning: The two coins add up to 55 cents. The key clue is "One is not a nickel." This doesn't mean NEITHER coin is a nickel. It just means one of them isn't. The other coin CAN be a nickel. To make 55 cents, I need a 50-cent piece and a nickel.Answer: A 50-cent piece and a nickel.\`
    
    \`### NEW PUZZLE ###Question: A man is looking at a portrait. Someone asks him whose portrait he is looking at. He replies, "Brothers and sisters I have none, but that man's father is my father's son." Whose portrait is the man looking at?Reasoning:\`
    

By providing examples of the reasoning process itself, you give the model a precise template to follow, dramatically increasing its chances of success on the new problem.

## 10.6 The Breadth of Application: Where to Use CoT

The CoT strategy is not limited to math and logic puzzles. It is a versatile tool that enhances performance across any domain requiring complex thought.

- **Strategic Analysis:**
    - \`Prompt: "Analyze the attached SWOT analysis for our company. First, think step by step to identify the most critical threat and the most promising opportunity. Then, propose a strategic initiative that uses our key strengths to capitalize on the opportunity while mitigating the threat."\`
- **Code Generation and Debugging:**
    - \`Prompt: "I am getting a 'NullPointerException' in this Java code. Let's think step by step. First, analyze the code to identify every variable that could possibly be null. Second, trace the execution path to determine the most likely line where the exception occurs. Third, propose a specific code change to fix the bug."\`
- **Complex Instruction Following:**
    - \`Prompt: "You need to plan a three-day marketing event. Let's think step by step. Day 1 should be focused on keynote speeches. Day 2 should have three parallel tracks for different skill levels. Day 3 should be a series of hands-on workshops. Please generate a detailed agenda."\`

## 10.7 Integrating CoT with Structural and Persona Strategies

CoT reaches its ultimate potential when combined with the other strategies we've discussed. Using the Structural Strategy (Chapter 9) is particularly important for building robust applications.

- **Gold-Standard Prompt (CoT + Persona + Structure):**\`<role>I am an expert financial analyst. My goal is to provide clear, data-driven investment advice.</role>\`
    
    \`<context>Attached are the Q4 earnings reports for Company A and Company B. Both are in the same industry.</context>\`
    
    \`<instruction>Compare Company A and Company B as potential investments. First, conduct your analysis step-by-step inside <thinking> tags. Your analysis must cover revenue growth, profit margins, and debt-to-equity ratio. After your analysis, provide a final, concise recommendation inside <recommendation> tags.</instruction>\`
    

This prompt creates an expert persona, provides clear context, and uses structural tags to command a Chain-of-Thought output that is both transparent and programmatically parsable. This is the blueprint for a reliable, production-grade AI reasoning system.

## 10.8 Conclusion: Opening the Black Box

The Chain-of-Thought strategy is a pivotal technique in the prompt engineer's toolkit. It represents the shift from treating the AI as an opaque oracle to engaging with it as a transparent reasoning partner. By compelling the model to break down problems and articulate its thought process, you not only achieve a higher degree of accuracy but also gain invaluable insight into the AI's "mind."

This transparency is crucial. It allows you to debug, to verify, and to trust the outputs you receive. CoT is more than just a trick to get the right answer; it is a fundamental method for making AI reasoning intelligible, reliable, and ultimately, more powerful.

# Chapter 11: The Self-Consistency Strategy: Enhancing CoT with Multiple Reasoning Paths and Majority Voting

## 11.1 The Fragility of a Single Thread of Logic

In the previous chapter, we unlocked the AI's reasoning capabilities with the Chain-of-Thought (CoT) strategy. By compelling the model to "show its work," we transformed it from an intuitive black box into a transparent, step-by-step reasoner, dramatically improving its accuracy on complex problems. We taught it to follow a single, logical thread from the problem to the solution.

However, even the strongest thread can have a weak point. A single Chain of Thought, while powerful, is still just one path through a complex problem space. It is a single attempt, a single line of reasoning. If there is a small flaw anywhere in that chain—a minor miscalculation, a subtle misinterpretation of a word, a momentary logical lapse—the entire process is derailed, leading to an incorrect final answer. The single CoT is robust, but it can also be brittle.

What if we could move beyond relying on a single, potentially fragile thread of logic? What if, instead of asking for one expert opinion, we could convene a committee of experts, have them all reason through the problem independently, and then adopt the answer that the majority agrees upon? This is the core philosophy behind the **Self-Consistency Strategy**.

## 11.2 The Principle of Cognitive Diversity: Introducing Self-Consistency

The Self-Consistency strategy is a powerful enhancement to Chain-of-Thought prompting that significantly boosts accuracy and reliability. It works by generating multiple, diverse reasoning paths for the same problem and then selecting the most consistent answer through a simple majority vote.

It is a multi-stage process that can be broken down into three core steps:

1. **Generate Diverse Reasoning Paths:** Instead of prompting the model once, you prompt it multiple times (typically 3 to 7 times) with the exact same Chain-of-Thought prompt. Crucially, you do this with a non-zero \`temperature\` setting, which introduces a degree of randomness into the model's predictions. This encourages the model to explore different, yet still plausible, ways of thinking through the problem.
2. **Extract the Final Answer from Each Path:** For each of the generated responses, you parse the text to isolate the final answer, separating it from the intermediate reasoning steps. This is where the Structural Strategy (using tags like \`<answer>\`) becomes invaluable for automation.
3. **Aggregate and Select the Most Consistent Answer:** You tally up the final answers from all the paths. The answer that appears most frequently is selected as the final, most reliable output.

This approach mimics the real-world process of seeking second (and third, and fourth) opinions. A single expert might make a mistake, but it is far less likely that a committee of independent experts will all make the *same* mistake. The consensus view is almost always more robust than a single opinion.

## 11.3 The Underlying Rationale: Why Consensus Builds Confidence

The effectiveness of Self-Consistency is not a coincidence; it is a statistical inevitability based on how LLMs solve problems.

- **Correct Paths Converge, Incorrect Paths Diverge:** For most reasoning problems, there are many potential paths to the *correct* answer, but they all converge on the same solution. For example, one can solve an algebra problem through substitution or elimination, but both valid methods will yield the same result. Conversely, there are an almost infinite number of ways to make a mistake. An error in reasoning is more likely to send the model down a unique, divergent path that leads to a unique, incorrect answer.
- **The Power of the Majority Vote:** Because correct reasoning paths tend to arrive at the same answer, the correct answer will appear multiple times in your set of generated responses. Incorrect answers, resulting from more random and varied errors, are likely to be scattered across different values. Therefore, when you take a majority vote, you are statistically filtering out the noise of the incorrect, divergent paths and amplifying the signal of the correct, convergent ones.
- **The Crucial Role of Randomness (Temperature):** This entire process hinges on the ability to generate *diverse* reasoning paths. If you prompt the model multiple times with a \`temperature\` of 0 (greedy decoding), it will produce the exact same reasoning chain every single time, and a majority vote would be meaningless. By setting a higher temperature (e.g., \`0.5\` to \`0.8\`), you allow the model to explore alternative token predictions at each step. This introduces the slight variations necessary to create different lines of reasoning, some of which may cleverly bypass a potential flaw in the single "most likely" path.

## 11.4 A Practical Walkthrough: Self-Consistency in Action

Let's illustrate this with a word problem that involves multiple steps, a common point of failure for a single CoT.

**The Problem:**\`A book club is reading a 100-page book. On Monday, Jane reads 1/4 of the book. On Tuesday, she reads 1/3 of the *remaining* pages. How many pages are left for her to read?\`

### Step 1: The Prompt (A Standard Zero-Shot CoT)

We start with a simple CoT prompt. The strategy is not in the prompt itself, but in how we use it.

\`Prompt: "A book club is reading a 100-page book. On Monday, Jane reads 1/4 of the book. On Tuesday, she reads 1/3 of the *remaining* pages. How many pages are left for her to read? Let's think step by step, and put the final answer in <answer> tags."\`

### Step 2: Generate Diverse Chains (Multiple API Calls with \`temperature=0.7\`)

We send this prompt to the model three separate times. Due to the temperature setting, we get three slightly different reasoning chains.

- **Generated Chain 1 (Correct):**\`Okay, let's break it down. The book has 100 pages.1. On Monday, Jane reads 1/4 of the book. 1/4 of 100 is 25 pages.2. The number of remaining pages is 100 - 25 = 75 pages.3. On Tuesday, she reads 1/3 of the *remaining* 75 pages. 1/3 of 75 is 25 pages.4. The pages left to read are the remaining pages from Monday minus what she read on Tuesday. So, 75 - 25 = 50 pages.<answer>50</answer>\`
- **Generated Chain 2 (Incorrect):**\`Let's solve this. The book starts at 100 pages.Monday's reading: 100 * (1/4) = 25 pages.Remaining pages after Monday: 100 - 25 = 75 pages.Tuesday's reading: The prompt says 1/3 of the remaining pages. So that's 75 / 3 = 25 pages.Total pages read: 25 (Mon) + 25 (Tue) = 50 pages.Oh, the question asks how many pages are *left*. I misread. The total pages are 100, and she read 50. So, 100 - 50 = 50 pages. Wait, no, that's the total read. The pages left after Tuesday are 75 - 25 = 50. No, that's not right either. It should be 100 minus the total read. Let me re-calculate. After Monday, 75 remain. After Tuesday, she reads another 25. So 75 - 25 = 50. No, wait. 1/3 of the book is about 33 pages. So 75 - 33 = 42 pages.<answer>42</answer>\`*(This chain shows the model getting confused, making a calculation error, and settling on an incorrect answer.)*
- **Generated Chain 3 (Correct, Different Phrasing):**\`Step 1: Calculate pages read on Monday. 100 pages * 0.25 = 25 pages.Step 2: Calculate pages left after Monday. 100 - 25 = 75 pages.Step 3: Calculate pages read on Tuesday. This is one-third of the remainder. 75 * (1/3) = 25 pages.Step 4: Calculate final remaining pages. We take the remainder from Monday and subtract Tuesday's reading. 75 - 25 = 50.<answer>50</answer>\`

### Step 3: Extract the Final Answers

From the three chains, we extract the values within the \`<answer>\` tags:

- From Chain 1: \`50\`
- From Chain 2: \`42\`
- From Chain 3: \`50\`

### Step 4: The Majority Vote

We tally the results:

- Answer \`50\`: 2 votes
- Answer \`42\`: 1 vote

The most consistent answer is **50**. We can now confidently use this as our final output, having filtered out the erroneous reasoning of Chain 2.

## 11.5 The Trade-Off: Cost vs. Confidence

The Self-Consistency strategy offers a significant boost in accuracy, but this benefit comes at a direct and linear cost.

- **Increased Cost and Latency:** If you generate three reasoning paths, your API costs and the time it takes to get a final answer will be at least three times higher. This is the fundamental trade-off of the strategy: you are spending computational resources to buy confidence.

**Ideal Use Cases:**

- **High-Stakes Reasoning:** For tasks where accuracy is paramount and errors are costly, such as financial calculations, medical data analysis, or critical engineering specifications.
- **Verifiable Answers:** It is best suited for problems that have a single, objectively correct answer (e.g., math, logic, factual extraction).
- **Offline or Asynchronous Processing:** It is perfect for batch jobs or back-end processes where user-facing latency is not a concern.

**When Not to Use Self-Consistency:**

- **Creative or Generative Tasks:** For tasks like writing a poem or brainstorming marketing slogans, diversity of output is the goal, not a single correct answer.
- **Real-Time Applications:** The latency overhead makes it unsuitable for most real-time chatbots or interactive applications.
- **Low-Stakes Queries:** The added cost is not justified for simple summarization or classification tasks where a single CoT is sufficient.

## 11.6 Conclusion: From a Single Path to a Confident Consensus

The Self-Consistency strategy is a powerful evolution of Chain-of-Thought reasoning. It acknowledges the fallibility of a single line of thought and mitigates it through the wisdom of the crowd—or in this case, a crowd of the AI's own diverse reasoning processes.

By leveraging controlled randomness to explore multiple solution paths and then selecting the most convergent answer, you can build systems that are not just transparent in their reasoning, but also significantly more robust and reliable. It is a computationally intensive technique, but for mission-critical applications where accuracy is non-negotiable, it is an essential tool for transforming a capable reasoner into a highly confident and dependable one.

# Chapter 12: The Tree-of-Thoughts (ToT) Strategy: Exploring Multiple Solution Branches Simultaneously

## 12.1 Beyond the Linear Path: The Limits of Sequential Reasoning

With Chain-of-Thought (CoT), we taught the AI to follow a single, logical path. With Self-Consistency, we taught it to try several of these linear paths independently and then vote on the outcome. Both are powerful techniques, but they share a fundamental limitation: they are inherently linear and non-adaptive.

Imagine a detective solving a crime. A CoT detective would follow the first plausible lead to its conclusion, without ever pausing to consider alternatives. A Self-Consistent detective would send three separate detectives out to follow their first plausible leads independently. If two of them happened to follow the same wrong lead, their incorrect consensus would win the day.

But a truly brilliant detective does neither. At every step, they consider multiple possibilities. "The butler could be the suspect, *or* it could be the estranged cousin, *or* perhaps the evidence was planted." They evaluate the strength of each possibility, pursue the most promising one for a while, and if it leads to a dead end, they have the crucial ability to **backtrack** to an earlier decision point and explore a different path.

This dynamic, branching, and self-correcting process is the essence of human strategic thinking. The **Tree-of-Thoughts (ToT) Strategy** is a cutting-edge prompting technique designed to give this powerful capability to an AI. It moves beyond the single, linear chain of thought and allows the model to explore a branching tree of possibilities, evaluating its own ideas and making deliberate choices about which path to follow.

## 12.2 The Core Idea: Generation, Evaluation, and Strategic Search

The Tree-of-Thoughts strategy transforms the LLM from a simple sequential reasoner into a more deliberate problem-solver that actively explores a search space. It models the reasoning process not as a single chain, but as a tree, where each "thought" is a node, and the connections are the logical steps between them.

The process operates in a loop of three key phases at each step of the problem:

1. **Thought Generation:** At the current state of the problem, instead of generating just one next logical step (as in CoT), the model is prompted to generate multiple *potential* next steps or ideas. This creates several branches extending from the current node in the "thought tree."
2. **State Evaluation:** The model is then prompted to act as a critic, evaluating the viability and promise of each of the generated branches. It assesses which paths are most likely to lead to a successful solution, which are dead ends, and which are simply less promising than others.
3. **Search and Pruning:** Based on the evaluation, a search algorithm (either explicitly coded or, in a prompted simulation, implicitly decided) determines which branches to explore further. Unpromising branches are "pruned" (abandoned), while the most promising one(s) are selected as the new current state, from which the generation-evaluation loop begins again. This allows the model to perform strategic "lookahead" and, if all current paths seem poor, to "backtrack" to a previous, more promising node.

Think of an AI playing chess. It doesn't just consider its single best next move. It generates a tree of dozens of possible moves, then evaluates the likely outcomes of each of those moves several steps ahead, and finally chooses the path that leads to the most advantageous position. ToT is the application of this strategic exploration to general problem-solving.

## 12.3 The Rationale: Why Exploration Beats Linear Deduction for Hard Problems

ToT is a significant leap forward because it equips the AI with two cognitive tools that are essential for solving complex, non-linear problems:

1. **Global Lookahead:** CoT is myopic; it can only see the next immediate step. ToT, by generating and evaluating multiple future paths, allows the model to make decisions based on a global, forward-looking assessment. It can avoid a path that looks good in the short term but is a trap in the long run.
2. **Backtracking and Self-Correction:** This is the most critical advantage. A CoT, once it makes a mistake, is committed to that error and will follow the flawed logic to its incorrect conclusion. ToT builds in a mechanism for self-correction. If an evaluation reveals that a certain branch of reasoning is flawed or leading to a contradiction, the model can abandon that branch and backtrack to a previous step to explore an alternative, effectively correcting its own mistakes mid-process.

## 12.4 A Practical Walkthrough: Planning a Complex Project with ToT

Let's see how ToT would work on a task that is ill-suited for a simple linear CoT, such as developing a creative strategy.

**The Problem:**\`"Devise a creative and unconventional launch strategy for a new brand of sparkling water called 'Fizzique' that targets health-conscious Gen Z consumers."\`

A CoT might produce one linear, plausible-but-generic plan. A ToT approach would be far more robust.

**Step 1: Decompose the Problem**
The prompt would first break the problem down:

1. Brainstorm core campaign concepts.
2. Select the best concept and develop it into a multi-channel strategy.
3. Outline key messaging for the chosen strategy.

**Step 2: Thought Generation (at Step 1)**
The prompt would ask the AI to generate multiple distinct campaign concepts.
\`Prompt: "Let's start with the core concept. Generate three completely different, unconventional ideas for the Fizzique launch."\`

- **Branch A:** The "Anti-Influencer" Campaign: Focus on micro-communities and authentic, unpaid testimonials.
- **Branch B:** The "Hydration Art" Campaign: Partner with digital artists to create interactive AR filters and art installations inspired by the product.
- **Branch C:** The "Gamified Wellness" Campaign: Create a mobile app where users complete wellness challenges to earn discounts and rewards.

**Step 3: State Evaluation (at Step 1)**
The prompt then instructs the AI to evaluate these branches against the core goals.
\`Prompt: "Now, evaluate each of the three concepts (A, B, and C) on a scale of 1-10 for its potential to engage Gen Z and its feasibility for a startup with a moderate budget. Provide a brief rationale for each score."\`

The AI might conclude that Branch B is the most creative but also the most expensive, while Branch A is highly authentic and budget-friendly. Branch C has high engagement potential but a long development timeline. Based on this, it scores Branch A the highest.

**Step 4: Search and Pruning**
The system (or the next prompt) decides to pursue Branch A. Branches B and C are pruned for now. The new state becomes: "The core concept is the 'Anti-Influencer' campaign." From here, the loop repeats for Step 2 of the problem (developing the multi-channel strategy).

This iterative process of generating, evaluating, and selecting allows the AI to construct a well-reasoned, robust strategy, having already considered and discarded several alternatives.

## 12.5 Simulating ToT in a Single Prompt: The "Committee of Experts" Technique

While a true ToT system often involves a complex control loop, its spirit can be effectively simulated within a single prompt using a "committee of experts" or "multi-persona debate" technique. This approach forces the generation and evaluation of multiple thoughts by assigning different roles to the AI.

- **Elite ToT Simulation Prompt:**\`"I need to decide whether my SaaS startup should pivot from a subscription model to a usage-based pricing model.\`
    
    \`To solve this, I want you to simulate a debate between three expert advisors:1.  **Alex, the Growth Hacker:** Alex is aggressive, data-driven, and focused on maximizing user acquisition and market share.2.  **Brenda, the CFO:** Brenda is cautious, risk-averse, and obsessed with predictable revenue and profit margins.3.  **Charles, the Customer Advocate:** Charles is empathetic and focused on user experience, fairness, and long-term customer loyalty.\`
    
    \`First, have each expert state their initial position on the pivot, providing their core arguments.Next, have them debate each other's points, identifying potential flaws and counterarguments.Finally, synthesize their debate into a single, balanced recommendation that acknowledges the trade-offs and suggests a final course of action."\`
    

This prompt is a ToT simulation. The three experts **generate** three different thought-branches. Their debate is the **evaluation** process, where they critique and analyze each other's points. The final synthesis is the **search** process, which selects the most robust path forward after considering all branches.

## 12.6 When to Use ToT: The Explorer's Toolkit

The choice between CoT, Self-Consistency, and ToT is a strategic one, dependent on the nature of the problem.

- Use **CoT** for problems that have a clear, step-by-step solution path that needs to be followed precisely (e.g., solving a defined math problem, following a technical manual).
- Use **Self-Consistency** to increase the confidence of a CoT-style answer for a verifiable problem, when the cost of error is high.
- Use **ToT** for problems that are open-ended, strategic, or complex, where the path to the solution is not known in advance and requires exploration, evaluation, and adaptation (e.g., creative writing, business strategy, complex planning, research hypothesis generation).

## 12.7 Conclusion: From Following a Recipe to Inventing a Dish

The Tree-of-Thoughts strategy represents a monumental shift in prompt engineering, moving the AI from a system that follows a recipe to one that can invent a dish. It grants the model the ability to deliberate, to weigh options, to look ahead, and to correct its own course—cognitive processes that were once the exclusive domain of human intelligence.

While it is more complex to implement than a simple CoT, ToT is the key to unlocking the AI's potential on the hardest, most ambiguous, and most valuable problems. It is the tool that allows the prompt engineer to guide the AI not just in its execution, but in its very exploration and discovery of the solution itself.

# Chapter 13: The Step-Back Strategy: Generalizing a Problem to Unlock Broader Knowledge

## 13.1 The Forest for the Trees: The Peril of Hyper-Specificity

In our journey to craft better prompts, we have relentlessly pursued the virtue of specificity. We have learned to provide detailed context, break down tasks, and quantify our requirements. This drive for precision is, in most cases, the key to success. However, there exists a class of problems where hyper-specificity becomes a trap. When a prompt is too narrow, too laden with specific details, it can paradoxically limit the AI's ability to produce a high-quality response.

This is the "forest for the trees" problem. By focusing the AI's attention exclusively on the intricate details of a single "tree" (the specific problem), we prevent it from seeing the entire "forest" (the broader principles, concepts, and frameworks that govern the problem space). The model gets stuck in the weeds, its reasoning constrained by the immediate details, and fails to access the high-level, abstract knowledge that is often required for a truly insightful or creative solution.

The **Step-Back Strategy** is a powerful and counter-intuitive technique designed to solve this very problem. It is the practice of deliberately taking a step back from the specific question to first ask a more general, high-level question. By doing this, you compel the model to generate a set of foundational principles or a conceptual framework, which you can then provide as rich, guiding context to solve your original, specific problem.

## 13.2 The Core Principle of Abstraction: The Two-Step Process

The Step-Back strategy is not a single prompt, but a two-prompt workflow. It involves a deliberate act of abstraction followed by a targeted application.

**Step 1: The Abstraction Prompt.**
Instead of asking your specific question, you formulate a "step-back" question. This question abstracts away the specific details (names, dates, numbers) and asks for the underlying principles, concepts, or common patterns related to the task.

**Step 2: The Application Prompt.**
You then take the high-level, principled answer generated by the first prompt and provide it as context for your original, specific question. This primes the model with a rich, relevant framework, enabling it to solve the specific task with far greater depth and accuracy.

Imagine you are lost in a city and need to get from your current location to a specific landmark.

- **Direct Prompt:** Asking for turn-by-turn directions from your current corner to the landmark. This will work, but you learn nothing about the city.
- **Step-Back Strategy:**
    1. **Abstraction:** First, you ask for a map of the entire city district and a compass.
    2. **Application:** Then, using the map and compass, you plot your own course to the landmark.

The Step-Back strategy gives the AI the "map and compass" of general principles, allowing it to navigate the specific problem with a deeper understanding of the entire landscape.

## 13.3 The Rationale: Why Generalizing First Leads to Better Specifics

This two-stage process is highly effective because it fundamentally alters how the AI approaches a problem, leveraging its architecture in a more sophisticated way.

1. **Activates Broader and Deeper Knowledge:** A very specific prompt activates a narrow, specialized slice of the model's knowledge. A general, conceptual question forces the model to access a much broader, more foundational knowledge base. It retrieves first principles, which are often more robust and widely applicable than specific, memorized facts.
2. **Mitigates Overfitting to Details:** When a prompt is overloaded with details, the model can sometimes "overfit" to those details, treating them as absolute constraints and failing to think creatively. Stepping back frees the model from these constraints, allowing it to brainstorm at a higher level before being re-grounded in the specifics.
3. **Generates a Reusable Framework:** The output of the Abstraction Prompt is often a valuable artifact in itself—a set of best practices, a checklist of key considerations, or a summary of core concepts. This framework not only helps solve the immediate problem but can often be reused for other, similar tasks.
4. **Improves Reasoning and Coherence:** The act of generating high-level principles is an act of reasoning. By forcing the model to do this first, you are priming its logical faculties. The final answer is then more coherent because it is built upon a solid, explicitly stated conceptual foundation.

## 13.4 A Practical Walkthrough: From a Generic Storyline to a Compelling Level Design

Let's demonstrate the power of the Step-Back strategy with a creative task where direct prompts often yield clichéd results.

**The Goal:** Write a storyline for a new level in a first-person shooter (FPS) video game.

**Attempt 1: The Direct Prompt**\`Prompt: "Write a one-paragraph storyline for a new level of a first-person shooter video game that is challenging and engaging."\`

- **Common Output (Generic and Uninspired):**\`"The player is dropped into a war-torn city where they must fight their way through enemy soldiers to reach an extraction point. They will face heavy resistance in the streets and must use cover and tactics to survive. The mission is to secure a high-value target before time runs out."\`*(This is technically correct but lacks any creativity or specific detail. It's the most average, statistically likely response.)*

**Attempt 2: The Step-Back Strategy in Action**

**Step 1: The Abstraction Prompt (Asking for Principles)**\`Prompt: "Based on popular and critically acclaimed first-person shooter action games, what are 5 key settings or themes that contribute to a challenging and engaging level storyline?"\`

- **Output of the Abstraction Prompt (A Framework of Ideas):**\`1. **Abandoned Military Base:** A post-apocalyptic complex with mutated soldiers and rogue robots, ideal for intense firearm combat and exploring derelict technology.2. **Cyberpunk Megacity:** A neon-lit, vertical environment with towering skyscrapers and grimy alleyways, featuring cybernetically enhanced enemies and hacking mechanics.3. **Alien Derelict Ship:** A vast, non-Euclidean alien vessel with eerie corridors, zero-gravity sections, and bizarre extraterrestrial creatures to encounter.4. **Zombie-Infested Suburb:** A once-peaceful town now overrun by hordes of aggressive zombies, featuring intense close-quarters combat and environmental puzzle-solving.5. **Underwater Research Facility:** A deep-sea laboratory that is flooding, filled with mutated aquatic creatures and requiring stealth and underwater exploration skills.\`*(This output is now a rich palette of high-quality concepts.)*

**Step 2: The Application Prompt (Combining Principles with the Original Task)**\`Prompt: "You are an expert level designer for an FPS game.\`

\`<context>Here are 5 engaging themes for an FPS level:1.  Abandoned Military Base...2.  Cyberpunk Megacity...3.  Alien Derelict Ship...4.  Zombie-Infested Suburb...5.  Underwater Research Facility...</context>\`

\`<task>Using the 'Underwater Research Facility' theme from the context, write a detailed, one-paragraph storyline for a new level. The storyline must be challenging, engaging, and incorporate elements of stealth, flooding, and mutated aquatic creatures."</task>\`

- **Final Output (Creative and Specific):**\`"The level, titled 'Leviathan's Maw,' begins as the player character, a deep-sea salvage specialist, breaches the airlock of the sunken Benthic Horizon research facility, which went dark 72 hours ago. Alarms blare in the distance as the station's automated systems announce catastrophic hull breaches and imminent collapse. The player must navigate claustrophobic, half-flooded corridors flickering with emergency lights, using stealth to evade sonar-sensitive, bio-luminescent predators that were once the station's research subjects. The core challenge is a race against the rising water level, forcing the player to solve environmental puzzles to re-route power and open new pathways to the upper decks, all while being hunted by a massive, mutated creature that stalks them from the darkened waters of the flooded main reactor chamber."\`*(This output is vastly superior because it was built on the foundation of a high-quality, pre-generated concept.)*

## 13.5 Crafting Effective Step-Back Questions

The quality of this strategy depends entirely on the quality of your Abstraction Prompt. A good step-back question should:

- **Focus on Principles, not Specifics:** Use words like "principles," "frameworks," "core concepts," "best practices," "themes," or "fundamentals."
- **Generalize Entities:** Replace specific names or details with their general categories. Instead of "How can I make this specific character, John Smith, more compelling?" ask, "What are the key literary techniques for creating a compelling and morally ambiguous protagonist in a noir thriller?"
- **Target the AI's General Knowledge:** The question should be something the model can answer from its broad training, not something that requires knowledge of your specific, private context.

## 13.6 Conclusion: The Power of Detour

The Step-Back strategy teaches us a vital lesson in prompt engineering: sometimes the most direct path is not the most effective one. By taking a deliberate detour into the realm of abstraction, you can equip the AI with the foundational knowledge it needs to solve your specific problem with a level of insight, creativity, and coherence that a direct prompt could never achieve.

It is a technique for transforming the AI from a simple implementation tool into a genuine thought partner. You are not just asking it to perform a task; you are asking it to first understand and articulate the very principles that define success for that task. This elevation in thinking is what separates a merely adequate response from an exceptional one.

# Chapter 14: The Self-Correction Strategy: Prompting the AI to Review and Refine Its Own Work

## 14.1 The First-Draft Problem: The Brilliant Improviser Who Never Edits

Large Language Models are, at their core, brilliant improvisers. They generate text token by token, seamlessly weaving together sentences and concepts in a continuous, forward-moving stream of prediction. This process is what allows them to produce fluent, coherent, and often startlingly insightful text. However, this very strength—this relentless forward momentum—is also a critical weakness.

The model's generation process is inherently greedy. It makes the best local choice at each step, but it lacks the natural, recursive cognitive loop that humans use: the process of writing a draft, pausing, re-reading, critiquing, and refining. An LLM, left to its own devices, almost never second-guesses itself. Its first draft is its final draft. This "first-draft fallibility" can lead to outputs that contain subtle factual errors, logical inconsistencies, incomplete arguments, or a failure to adhere to all the constraints of a complex prompt.

The **Self-Correction Strategy** is a sophisticated prompting technique designed to solve this problem. It is the practice of explicitly building a "review and refine" loop *into the prompt itself*. Instead of accepting the AI's first pass, you command it to become its own editor, its own critic, and its own quality assurance engineer. This strategy forces the model to pause its improvisational flow, evaluate its own work against a set of criteria, and produce a new, superior version based on that self-critique.

## 14.2 The Core Idea: Building an Internal Feedback Loop

The Self-Correction strategy moves beyond a simple, one-way instruction. It creates a multi-step, internal workflow within a single prompt or a chained sequence of prompts. The core of the strategy is to separate the act of *generation* from the act of *evaluation*.

- **Without Self-Correction:**\`Prompt -> [AI Black Box] -> Final Output\`
- **With Self-Correction:**\`Prompt -> [AI Generates Draft] -> [AI Critiques Draft] -> Final, Refined Output\`

This is not the same as the user manually reviewing the output and providing feedback in a follow-up prompt. The power of the Self-Correction *strategy* is in its automation. You architect the prompt in such a way that the AI performs this entire loop autonomously, delivering a more polished and reliable result from a single, more complex request. It is the difference between editing a document yourself and teaching a writer to edit their own work before they submit it to you.

## 14.3 The Rationale: Simulating a Deeper Cognitive Process

Forcing an AI to critique its own work is a powerful mechanism that leverages several key aspects of its architecture and training.

1. **Activates Evaluative Capabilities:** LLMs are not just generators; they are also excellent evaluators. They have been trained on a massive corpus that includes critiques, reviews, edits, and debates. By prompting for a critique, you are activating this specific, well-trained capability. The model is often better at recognizing an error than it is at avoiding it in the first place.
2. **Forces Constraint Checking:** In a complex prompt with multiple constraints (e.g., "Summarize under 200 words, in a formal tone, for a non-technical audience, and include a call to action"), a model might miss one of these constraints in its initial, forward-pass generation. A self-correction step that explicitly instructs the model to "review the draft to ensure all constraints have been met" provides a safety net, allowing it to catch and fix its own omissions.
3. **Breaks the Path Dependency:** The token-by-token generation process is path-dependent. An early error can lock the model into a flawed trajectory. The act of generating a critique creates a new, independent context. The model can then re-generate the final output based on the insights from the critique, effectively breaking free from its initial, flawed path.
4. **Improves Robustness and Reliability:** By building a QA step directly into the process, you create a system that is inherently more resilient to error. This is crucial for production applications where the cost of an incorrect or incomplete response is high.

## 14.4 A Toolkit of Self-Correction Techniques

There are several ways to implement the Self-Correction strategy, ranging from simple commands to sophisticated multi-persona simulations.

### 14.4.1 Technique 1: The Explicit "Review and Refine" Command

This is the most direct approach. You instruct the AI to perform the task in sequential stages: draft, review, and finalize.

- **Prompt Structure:**\`Your task is to [describe the task].Follow these steps:1. First, write a preliminary draft of the response.2. Second, review the draft you just wrote. Check it for [list specific criteria: accuracy, clarity, tone, adherence to constraints, etc.].3. Third, rewrite the draft into a final, polished version based on your review.\`

### 14.4.2 Technique 2: The "Critique and Improve" Loop

This technique makes the evaluation step more explicit and transparent by asking the AI to output its critique before generating the final version. This is excellent for debugging and understanding the model's "thought process."

- **Prompt Structure (using structural tags):**\`Your task is to [describe the task].\`
    
    \`First, write your initial draft inside <draft> tags.Next, critique your own draft inside <critique> tags. Identify at least three specific weaknesses or areas for improvement.Finally, write the improved, final version inside <final_version> tags, addressing the points from your critique.\`
    

### 14.4.3 Technique 3: The Multi-Persona Debate

A powerful and creative form of self-correction, this technique leverages the Persona Strategy to create an internal debate. You assign two or more conflicting personas and have them critique each other's perspectives.

- **Prompt Example (Strategic Planning):**\`"We are considering launching a new, premium-priced product. To analyze this, simulate a debate between two VPs: **VP of Sales (The Optimist):** Argue for why this is a massive revenue opportunity. **VP of Finance (The Skeptic):** Argue against it, focusing on the risks of market alienation and high costs.\`
    
    \`After presenting both arguments, act as the CEO and write a final, balanced decision that synthesizes both viewpoints and defines the path forward."\`*(The debate itself is the self-correction mechanism, forcing the model to consider the problem from multiple angles before reaching a conclusion.)*
    

### 14.4.4 Technique 4: The "Pre-Mortem Analysis"

This is a proactive form of self-correction. You ask the model to imagine its response has failed and to diagnose the reasons for that failure *before* it even writes the response.

- **Prompt Example (Project Plan):**\`"I need you to generate a detailed project plan.Before you write the plan, I want you to perform a 'pre-mortem'. Imagine it is six months from now, and this project has failed catastrophically. In a <pre_mortem> tag, write a brief analysis of the three most likely reasons for its failure (e.g., unrealistic timelines, resource conflicts, scope creep).Then, in a <project_plan> tag, write the actual project plan, ensuring it includes specific, explicit mitigation strategies to prevent the failure points you identified in the pre-mortem."\`

## 14.5 Self-Correction in Action: A Code Generation Example

Code generation is a perfect domain to illustrate the power of this strategy, as first-draft code often contains subtle bugs or misses edge cases.

- **Prompt (Without Self-Correction):**\`"Write a Python function that takes a list of strings and returns a new list containing only the strings that are palindromes."\`
- **Possible Output (Flawed):**
    
    \`\`\`python
    def find_palindromes(strings):
        palindromes = []
        for s in strings:
            if s == s[::-1]:
                palindromes.append(s)
        return palindromes
    
    \`\`\`
    
    *(This code works for simple cases but fails on strings with different capitalization, e.g., "Racecar", or strings with punctuation, e.g., "A man, a plan, a canal: Panama".)*
    
- **Elite Prompt (With Self-Correction):**\`"Your task is to write a robust Python function to find palindromes in a list of strings.\`
    - \`*Step 1: The Initial Code**First, write the function inside a \\\\\`\\\`\\\\\`python code block.\`
    - \`*Step 2: Identify Edge Cases & Bugs**Next, as a senior QA engineer, list potential edge cases and bugs in the code you just wrote. Consider issues like capitalization, punctuation, and empty strings.\`
    - \`*Step 3: The Refined Code**Finally, rewrite the function to be robust and handle all the edge cases you identified. Place the final, production-ready code in a separate \\\\\`\\\`\\\\\`python code block."\`
- **Expected Output (Robust and Self-Corrected):Step 1: The Initial Code**
    
    \`\`\`python
    def find_palindromes(strings):
        # ... [initial flawed code] ...
    
    \`\`\`
    
    **Step 2: Identify Edge Cases & Bugs**\`1.  **Capitalization:** The current code is case-sensitive. It would fail to identify "Madam" as a palindrome.2.  **Punctuation and Spaces:** The code doesn't handle non-alphanumeric characters. "A man, a plan, a canal: Panama" would fail.3.  **Empty List:** The code should handle an empty input list gracefully.4.  **Empty Strings:** The code should correctly handle empty strings within the list.\`
    
    **Step 3: The Refined Code**
    
    \`\`\`python
    import re
    
    def find_palindromes_robust(strings):
        """
        Finds all palindromic strings in a list, ignoring case, spaces, and punctuation.
        """
        palindromes = []
        if not strings:
            return []
        for s in strings:
            # Normalize the string: remove non-alphanumeric chars and convert to lowercase
            normalized_s = re.sub(r'[^a-zA-Z0-9]', '', s).lower()
            if normalized_s and normalized_s == normalized_s[::-1]:
                palindromes.append(s)
        return palindromes
    
    \`\`\`
    

## 14.6 Conclusion: Building Resilience into the Prompt

The Self-Correction Strategy is the hallmark of a mature prompt engineer. It reflects an understanding that AI generation is a probabilistic process, not a deterministic one, and that building in checks and balances is essential for creating reliable, high-quality outputs.

By moving beyond the single, fire-and-forget prompt, you can architect a more thoughtful, resilient, and self-aware process. You are teaching the AI not just to generate, but to reflect. This internal feedback loop is what elevates a response from being merely plausible to being polished, robust, and correct. It is the final step in transforming the AI from a brilliant but fallible improviser into a dependable and self-aware creative partner.

# Chapter 15: The ReAct Strategy: Combining Reasoning with Action via External Tools

## 15.1 The Confines of the Ivory Tower: The Closed-World Problem

Thus far, our prompting strategies have operated within the "mind" of the AI. We have coaxed it into performing complex reasoning (CoT), exploring multiple possibilities (ToT), and critiquing its own work (Self-Correction). We have, in essence, created a brilliant thinker locked in an ivory tower. This thinker has access to a vast internal library—its training data—but it is a library with a strict cut-off date. It contains no information about yesterday's news, today's stock prices, or the current weather. Its knowledge is static and frozen in time.

This "closed-world" limitation gives rise to two fundamental problems that no amount of pure reasoning can solve:

1. **The Stale Knowledge Problem:** The model cannot answer questions about any event that has occurred since its training data was compiled. Its world view is perpetually out of date.
2. **The Grounding Problem (Hallucination):** When confronted with a question at the edge of its knowledge, the model can't simply *check the facts*. Instead, it often falls back on its primary function: predicting a plausible sequence of words. This can lead to the generation of "hallucinations"—answers that are well-written, confident, and entirely fabricated.

To solve these problems, we must break the AI out of its ivory tower. We need a strategy that allows it to not just *think*, but to *act*—to reach out, interact with the external world, gather fresh information, and use that information to inform its reasoning. This is the purpose of the **ReAct Strategy**.

## 15.2 The Principle of Agency: Reason to Act, Act to Reason

**ReAct**, an acronym for **Reason and Act**, is a paradigm-shifting strategy that transforms the LLM from a passive generator of text into an active agent capable of goal-oriented interaction with its environment. It fuses the step-by-step reasoning of Chain-of-Thought with the ability to use external tools, creating a powerful, iterative loop that mirrors human problem-solving.

Where a CoT model *thinks about* the answer, a ReAct agent *thinks about what to do next*.

The ReAct framework operates on a simple yet profound cycle: the **Thought-Action-Observation loop**.

1. **Thought (Reasoning):** The agent first analyzes the user's query and its current state of knowledge. It then formulates a verbal reasoning trace—a "thought"—that articulates its immediate goal and devises a plan to achieve it by using a specific tool. This thought is not the final answer, but a strategic plan for the next action.
2. **Action (Tool Use):** Based on its thought, the agent generates a specific, machine-readable command to execute an action using one of the tools it has been given access to. This could be a web search, a calculation, a database query, or a call to any external API.
3. **Observation (Processing Tool Output):** The external system (the "harness" or "orchestrator" you build) executes the action and returns the result to the agent. This result—the text from a webpage, the answer from a calculator, the data from a database—is the "observation."

This observation is then fed back into the agent's context, and the loop begins again. The agent's next **Thought** is now informed by the new information it has gathered, allowing it to refine its plan, ask follow-up questions, and iteratively build towards a final answer that is grounded in fresh, external data.

## 15.3 A Practical Walkthrough: The Agent as a Research Assistant

Let's consider a multi-step question that is impossible for a closed-world model to answer correctly.

**The Query:**\`"What was the name of the film that won the Oscar for Best Animated Feature in 2023, and what is its current Rotten Tomatoes score for critics?"\`

A ReAct agent, equipped with a \`Search\` tool, would tackle this as follows:

**Loop 1: Find the Movie**

- **Thought:** "I need to answer a two-part question. First, I need to identify the winner of the Best Animated Feature Oscar in 2023. I don't have this information in my internal knowledge base as it is a recent event. I should use the \`Search\` tool to find this information."
- **Action:** \`Search(query="Best Animated Feature Oscar winner 2023")\`
- **Observation:** (The system executes the search and returns the result) "Guillermo del Toro's Pinocchio won the Academy Award for Best Animated Feature Film at the 95th Academy Awards in 2023."

**Loop 2: Find the Score**

- **Thought:** "Okay, I have the name of the film: 'Guillermo del Toro's Pinocchio'. Now I need to find its current Rotten Tomatoes score for critics. I will use the \`Search\` tool again for this second piece of information."
- **Action:** \`Search(query="Guillermo del Toro's Pinocchio Rotten Tomatoes critic score")\`
- **Observation:** (The system executes the search) "Guillermo del Toro's Pinocchio has a Tomatometer score of 97% based on 300+ critic reviews."

**Loop 3: Synthesize the Final Answer**

- **Thought:** "I have successfully gathered both pieces of required information. I know the movie that won the award and its current critic score on Rotten Tomatoes. I can now formulate the final answer for the user."
- **Action (Final Answer):** "The film that won the Oscar for Best Animated Feature in 2023 was 'Guillermo del Toro's Pinocchio'. Its current Rotten Tomatoes critic score is 97%."

This iterative process allows the agent to decompose the problem and methodically gather the necessary information from the external world before constructing a final, accurate, and up-to-date answer.

## 15.4 The Architecture of a ReAct Agent: The System Prompt as the Blueprint

The ReAct strategy is not just a user-level prompting trick; it is an **agentic architecture** that must be defined in the **System Prompt**. The system prompt is the agent's core programming, its constitution. For a ReAct agent, this prompt must contain several critical components:

1. **Role and Goal Definition:** A clear statement of the agent's purpose (e.g., "You are a helpful AI assistant designed to answer questions by using external tools.").
2. **Tool Specification:** This is the most critical part. You must provide a comprehensive, machine-readable list of all the tools the agent can use. For each tool, you must define:
    - Its name (e.g., \`Search\`, \`Calculator\`).
    - A clear description of what it does (e.g., "Searches the internet for up-to-date information.").
    - The exact format of the \`Action\` call, including parameter names and types (e.g., \`Search(query: str)\`).
3. **Instruction on the Thought-Action-Observation Format:** You must explicitly instruct the model to follow the ReAct loop and to format its output in a precise, parsable way.
    
    **Example System Prompt Snippet:**\`...You have access to the following tools:\`
    
    \`Search(query: str): A tool to search the internet.\`
    
    \`To use a tool, you must use the following format:Thought: [Your reasoning and plan for the next action]Action: [The tool call, e.g., Search(query="your search term")]\`
    
    \`After an action, the system will return an observation:Observation: [The result of the tool execution]\`
    
    \`You must repeat the Thought-Action-Observation cycle until you have enough information to answer the user's question. Then, you must output the final answer directly.\`
    
4. **The Scratchpad (Implicit Context):** The growing history of the conversation (the sequence of Thoughts, Actions, and Observations) acts as the agent's "scratchpad" or short-term memory, allowing it to keep track of its progress.

## 15.5 The Trade-Offs: The Price of Agency

The power of the ReAct strategy is undeniable, but it comes with significant architectural complexity and performance trade-offs.

- **Advantage - Grounding & Freshness:** It is the ultimate solution for reducing hallucinations and ensuring information is up-to-date. The agent's answers are grounded in verifiable, external data.
- **Advantage - Transparency:** The explicit \`Thought\` traces make the agent's reasoning process entirely transparent, which is invaluable for debugging and building trust in the system.
- **Disadvantage - Latency:** ReAct is inherently slow. Each loop involves at least one LLM call plus the execution time of the external tool. A multi-step query can take several seconds to resolve, making it unsuitable for many real-time applications.
- **Disadvantage - Complexity & Cost:** Implementing a ReAct agent requires an "orchestrator" layer of code to parse the agent's \`Action\`, call the correct tool API, and format the \`Observation\`. Furthermore, each reasoning step consumes tokens and incurs API costs, making it more expensive than a single-pass prompt.

## 15.6 Conclusion: From a Thinker to a Doer

The ReAct strategy is a fundamental leap in the evolution of AI interaction. It is the framework that allows us to build not just language models, but true AI agents—systems that can reason, plan, and act upon the world to achieve their goals.

It is a complex and resource-intensive strategy, but it is the essential toolkit for solving problems that require knowledge beyond the model's static training data. By mastering the art of building and prompting these agents, you move from simply conversing with an AI to directing an intelligent, autonomous system capable of dynamic research, analysis, and problem-solving in the real, ever-changing world.

# Chapter 16: The Prompt Chaining Strategy: Breaking Down Complex Workflows into Sequential Tasks

## 16.1 The Allure of the "Mega-Prompt": A Common Pitfall

As a prompt engineer's confidence grows, a natural temptation arises: the creation of the "mega-prompt." This is an attempt to orchestrate a complex, multi-stage workflow within a single, monolithic instruction. The prompt becomes a sprawling document, containing commands to research a topic, then draft a document based on that research, then edit the document for a specific tone, and finally, format it into a table—all in one go.

While this approach can sometimes work for simple tasks, it is a fundamentally fragile and inefficient strategy. The mega-prompt often collapses under its own weight, for several critical reasons:

1. **Cognitive Overload:** Even for a powerful LLM, a long list of disparate instructions can lead to a form of cognitive overload. The model may lose track of earlier constraints, blend distinct steps together, or simply ignore parts of the prompt in its rush to generate a coherent output.
2. **Context Contamination:** Different stages of a workflow often require different "mindsets." The divergent, creative thinking needed for brainstorming is fundamentally different from the convergent, logical thinking needed for technical analysis. When forced into a single context, these mindsets contaminate each other, leading to a less creative brainstorm and a less logical analysis.
3. **Lack of Control and Debuggability:** The mega-prompt is an all-or-nothing proposition. If the final output is flawed, it is nearly impossible to determine which specific instruction in the long chain of commands was misinterpreted. Debugging becomes a frustrating process of trial and error with the entire, complex prompt.
4. **Error Propagation:** A small error or hallucination generated early in the process becomes a permanent, corrupting part of the context. The rest of the generation will be built upon this flawed foundation, leading to a cascade of errors that ruins the final output.

To build robust, reliable, and sophisticated AI systems, we must move beyond the single mega-prompt. We must adopt the mindset of a systems architect, not just a prompter. This is the domain of the **Prompt Chaining Strategy**.

## 16.2 The Assembly Line Principle: Deconstructing the Workflow

The **Prompt Chaining Strategy** is the practice of deconstructing a complex workflow into a series of smaller, discrete, single-purpose prompts. The output of one prompt becomes the direct input for the next, creating a sequential "chain" or "pipeline."

The most powerful analogy for this strategy is a **factory assembly line**.

- A complex product (the final desired output, like a detailed report) is not built at a single, chaotic workstation.
- Instead, it moves down a line. At each station, a specialized worker (a specific, focused prompt) performs one, and only one, well-defined task.
- Station 1 takes the raw materials and forges the chassis. Station 2 takes the chassis and installs the engine. Station 3 takes the engine-fitted chassis and adds the wiring.
- Each step is isolated, optimized, and verifiable. The result is a high-quality, reliably produced final product.

Prompt chaining applies this same industrial logic to AI workflows. Instead of one prompt that does everything poorly, you create a chain of prompts where each link does one thing exceptionally well.

## 16.3 The Rationale: The Four Pillars of Chaining's Power

This strategy is not just a matter of organization; it provides fundamental engineering advantages that are impossible to achieve with a single prompt.

1. **Focus and Precision:** Each prompt in the chain has a single, clear objective. This allows the AI to dedicate its full "attention" and computational resources to executing one well-defined task at a time. This dramatically increases the quality and accuracy of each intermediate step.
2. **Context Isolation and Purity:** This is perhaps the most critical benefit. Each prompt in the chain operates in a "pristine" contextual environment. The creative, divergent thinking of a "Brainstorming Prompt" is completed, and its output is passed to the next step. The "Logical Analysis Prompt" then receives only the clean output of the brainstorm, without any of the contaminating "what if" context that created it. This prevents mental models from bleeding into one another.
3. **Control, Debuggability, and Verifiability:** A chained workflow is transparent. If your final output is flawed, you can inspect the output of each link in the chain. This allows you to immediately pinpoint the exact step—and the exact prompt—that failed. You can then fix that single prompt and re-run the chain from that point, rather than starting the entire process from scratch.
4. **Optimized Resource Allocation:** This is a highly advanced benefit. A single mega-prompt forces you to use one model, with one set of parameters (like temperature), for all sub-tasks. A prompt chain allows you to use the *right tool for the right job* at each step.
    - **Step 1 (Brainstorming):** Use a highly creative model (like Claude 3 Opus or GPT-4) with a **high temperature** (e.g., 0.9) to encourage diverse ideas.
    - **Step 2 (Analysis):** Use a powerful reasoning model with a **low temperature** (e.g., 0.2) to ensure logical, deterministic outputs.
    - **Step 3 (Formatting):** Use a smaller, faster, and cheaper model (like Claude 3 Haiku) with a temperature of **0.0** to simply and reliably reformat the data into JSON.

This allows you to build workflows that are not only more reliable but also significantly more cost-effective and performant.

## 16.4 A Practical Walkthrough: Building a Technical Blog Post with a Prompt Chain

Let's construct a workflow to create a high-quality technical blog post, a task that is notoriously difficult for a single prompt.

**The Goal:** Write a 600-word blog post explaining the ReAct prompting framework for a technical audience.

### **Chain Link 1: The Researcher and Outliner**

- **Persona:** A senior AI research assistant.
- **Goal:** To gather key information and structure the content.
- **Prompt:**\`I am writing a technical blog post explaining the ReAct (Reason and Act) framework.Your task is to act as a research assistant. Based on your knowledge, generate a detailed, hierarchical outline for a 600-word blog post on this topic.The outline must include a brief introduction, a section explaining the core Thought-Action-Observation loop, a section on the benefits (like grounding), a section on the drawbacks (like latency), and a conclusion.\`
- **Output 1:** A well-structured Markdown outline.

### **Chain Link 2: The Technical Writer**

- **Persona:** An expert technical writer who makes complex topics easy to understand.
- **Goal:** To write the main body of the blog post based on the outline.
- **Prompt:**\`<outline>[Output 1 from the previous prompt is pasted here]</outline><instruction>You are an expert technical writer. Using the provided outline as your strict guide, write a full draft of the blog post. Write in a clear, professional, and engaging tone suitable for an audience of software developers. Ensure each section flows logically into the next. Do not write a title yet.</instruction>\`
- **Output 2:** The full 600-word draft of the blog post.

### **Chain Link 3: The Critical Editor**

- **Persona:** A skeptical, detail-oriented editor who checks for technical accuracy and clarity.
- **Goal:** To review and refine the draft.
- **Prompt:**\`<draft_to_review>[Output 2 from the previous prompt is pasted here]</draft_to_review><instruction>You are a meticulous editor. Review the draft above for technical accuracy, logical flow, and clarity. Provide a list of 3-5 specific, actionable suggestions for improvement. Format your feedback as a bulleted list.</instruction>\`
- **Output 3:** A list of suggestions, e.g., "Clarify the difference between the 'Action' and the 'Final Answer' steps..."

### **Chain Link 4: The Final Polish and SEO Specialist**

- **Persona:** An SEO and marketing specialist.
- **Goal:** To apply the edits and optimize the post for discovery.
- **Prompt:**\`<original_draft>[Output 2 is pasted here]</original_draft><editorial_feedback>[Output 3 is pasted here]</editorial_feedback><instruction>You are an SEO expert. First, rewrite the original draft to incorporate all of the editorial feedback.Second, after rewriting the text, generate 5 catchy, SEO-friendly titles for the final blog post.</instruction>\`
- **Final Output:** The polished, final blog post and a list of optimized titles.

## 16.5 The Role of the Orchestrator and the Human-in-the-Loop

A prompt chain is not fully autonomous. It requires an **orchestrator**. This can be a human operator who manually copies and pastes the output of one prompt into the next, or it can be a piece of code (e.g., a Python script) that automates the API calls and state management.

Furthermore, the chain provides perfect opportunities for **human-in-the-loop** intervention. A human expert can review the outline from Link 1 before it's passed to the writer, or edit the draft from Link 2 before it goes to the editor. This powerful synergy combines the speed and scale of AI with the nuanced judgment and expertise of a human, resulting in a final product that is superior to what either could achieve alone.

## 16.6 Conclusion: From Prompting to Workflow Architecture

The Prompt Chaining Strategy represents a crucial maturation in the discipline of prompt engineering. It is the point where we move beyond crafting single instructions and begin designing entire systems of intelligent work. It demands a new way of thinking—decomposing problems, defining clear interfaces between steps, and optimizing each component for its specific task.

By embracing this assembly line approach, you gain unprecedented control, reliability, and efficiency. You can build complex, multi-stage AI applications that are robust, easy to debug, and capable of producing outputs of a quality and sophistication that no single mega-prompt could ever hope to achieve. This is the future of applied AI: not a single, monolithic intelligence, but a well-orchestrated symphony of specialized, intelligent agents working in concert.

# Chapter 17: The Multi-Agent Strategy: Decomposing Workflows into a Team of Specialized AI Agents

## 17.1 From the Assembly Line to the Expert Team

In the previous chapter, we took a monumental leap from the single mega-prompt to the sequential logic of the prompt chain. We transformed our process from a single, chaotic workstation into an orderly, efficient assembly line. Each link in the chain performs its task with focus and precision, passing its completed work to the next station. This linear, sequential model is a powerful tool for bringing order and reliability to complex workflows.

But what happens when the task is not a simple linear assembly? What if it requires the collaborative effort of multiple, distinct specializations, working sometimes in sequence, sometimes in parallel, and sometimes in debate? A factory assembly line is good at building a car, but it's not the right model for designing one. Designing a car requires a *team*: a visionary product manager, a pragmatic engineer, a creative designer, and a meticulous quality assurance expert.

This is the next evolution in our thinking. The **Multi-Agent Strategy** is the practice of transcending the linear chain and architecting a virtual **team of specialized AI agents**. Each agent is an independent instance of the LLM, instantiated with its own unique, highly focused persona and purpose. This is not just a chain of prompts; it is a system of collaborators. It is the point where the prompt engineer truly becomes a systems architect, or perhaps, a team manager.

## 17.2 The Rationale: The Power of Deep Specialization

A single, general-purpose AI, even when guided through a prompt chain, can struggle to effectively context-switch between the different mindsets required for a complex workflow. The divergent, "blue-sky" thinking needed for brainstorming is fundamentally at odds with the convergent, detail-obsessed thinking needed for code debugging. Asking one "worker" to rapidly switch between these roles is inefficient and error-prone.

The Multi-Agent strategy solves this by creating a virtual team where each member is an undisputed world expert in their single, narrow domain. This approach yields profound benefits:

1. **Deep Expertise and Persona Purity:** Instead of a single AI with a diluted, general-purpose persona, you can create an agent whose entire "being"—defined by its system prompt—is optimized for a single function. A "Creative Brainstormer" agent's system prompt can be filled with language that encourages novelty and risk-taking, while a "QA Engineer" agent's prompt can be built around principles of rigor, skepticism, and meticulous attention to detail. This "persona purity" results in a far higher quality of work at each stage.
2. **Cognitive Isolation:** This is the most critical architectural advantage. By separating the workflow into distinct agents, each with its own isolated conversational context, you prevent "cognitive contamination." The creative, high-temperature chaos of the brainstorming agent never touches the pristine, low-temperature logical context of the system architect. Each agent operates in its own clean room, receiving only the necessary inputs and producing a clean output, unburdened by the thought processes of the agents that came before it.
3. **Modularity and Maintainability:** A multi-agent system is inherently modular. If you find that your "Code Generation" agent is underperforming, you can fine-tune or replace its system prompt without touching any other part of the workflow. This makes the entire system easier to debug, maintain, and upgrade over time—a core principle of robust software engineering.
4. **Parallel Processing:** While a prompt chain is strictly sequential, a multi-agent system can be designed to work in parallel. You can have three different "Marketing Angle" agents brainstorm ideas simultaneously, and then have a fourth "Marketing Director" agent synthesize their best ideas. This can dramatically reduce the total time required to complete a complex task.

## 17.3 The Four Principles of Multi-Agent Architecture

Building an effective multi-agent system requires a disciplined, architectural approach. Four key principles must be followed.

### Principle 1: Decompose the Workflow into Discrete Roles

Before writing a single prompt, analyze your workflow and break it down into the distinct expert roles required for its completion. Think like a manager building a project team. What are the key phases? Who are the specialists you need? (e.g., Researcher, Writer, Editor, Strategist, Critic).

### Principle 2: Engineer a Pure, Elite Persona for Each Agent

For each identified role, craft a dedicated, highly specific **System Prompt**. This prompt is the agent's DNA. It must be pure, focusing only on that agent's core identity, tools, and behavioral logic. Do not contaminate it with specific examples or data for a one-off task. (See Chapter 6: The Persona Strategy).

### Principle 3: Enforce Strict Context Isolation

This is the golden rule of multi-agent systems. **Each specialized agent must operate in its own, separate chat session or conversational context.** Do not force them to share the same conversational history. The output from Agent A becomes the *input* for Agent B, but Agent B should never see the *conversational history* that led Agent A to its conclusion. This prevents context contamination and ensures each agent operates with a clean slate, focused only on its specific task and persona.

### Principle 4: Match Configuration to the Role

Leverage the freedom that a multi-agent architecture provides. Each agent can be run with its own optimal configuration.

- **Creative Agents (Brainstormers, Copywriters):** Use a powerful, creative model (e.g., GPT-4, Opus) at a **high temperature** (0.8+) to encourage novel and diverse outputs.
- **Logical Agents (Analysts, Architects, QA):** Use a strong reasoning model at a **low temperature** (0.0 - 0.2) to ensure deterministic, stable, and logically sound outputs.
- **Simple Task Agents (Formatters, Classifiers):** Use a fast, cost-effective model (e.g., Haiku, Sonnet) to perform simple, repetitive tasks efficiently.

## 17.4 A Practical Walkthrough: The Software Development Team

Let's apply these principles to build a virtual team to turn a business requirement into a fully specified software project.

**The Workflow:** Business Need -> User Stories -> System Architecture -> Test Plan

### **Agent 1: The Product Manager**

- **Persona:** An expert Product Manager who bridges the gap between business needs and engineering requirements.
- **System Prompt:** \`"I am an expert Product Manager. My core function is to work with stakeholders to translate abstract business needs into clear, concise, and unambiguous user stories, complete with detailed acceptance criteria. I follow the INVEST (Independent, Negotiable, Valuable, Estimable, Small, Testable) model for story writing."\`
- **Configuration:** Reasoning Model, Temperature 0.5 (for a balance of structure and clarity).
- **Input:** A vague business request, e.g., "We need a way for users to update their profiles."
- **Output:** A list of well-formed user stories.

### **Agent 2: The System Architect**

- **Persona:** A seasoned System Architect specializing in designing robust, scalable, and secure microservices.
- **System Prompt:** \`"I am a seasoned System Architect. I take user stories and acceptance criteria and transform them into a complete system design. My output includes detailed API contracts (endpoints, request/response schemas), data models for the database, and a high-level diagram of component interactions. I prioritize security and scalability in all my designs."\`
- **Configuration:** Reasoning Model, Temperature 0.1 (for precision and logic).
- **Input:** The user stories generated by the Product Manager agent.
- **Output:** A detailed technical specification.

### **Agent 3: The QA Engineer**

- **Persona:** A meticulous and slightly paranoid QA Engineer with a passion for finding failure points.
- **System Prompt:** \`"I am a meticulous QA Engineer. I analyze user stories and system architecture designs to create comprehensive test plans. My goal is to anticipate every possible failure mode. My output is a detailed list of test cases, including unit tests, integration tests, and end-to-end test scenarios, specifying the test's purpose, steps, and expected outcome."\`
- **Configuration:** Reasoning Model, Temperature 0.6 (to creatively imagine failure scenarios).
- **Input:** The user stories from the PM and the system design from the Architect.
- **Output:** A comprehensive test plan.

In this workflow, the manager (the orchestrator) takes the output from the PM and provides it as the *sole input* to the Architect in a brand new, isolated chat. This process is repeated for the QA Engineer. The result is a high-quality, fully specified project plan, created by a team of virtual experts, each performing their role flawlessly.

## 17.5 The Orchestrator: The Human (or Code) in Command

A multi-agent system, like a human team, requires a manager. This role is filled by the **orchestrator**. The orchestrator is responsible for:

1. Defining the agents and the workflow.
2. Passing the output of one agent as the input to the next.
3. Managing the isolated contexts for each agent.

In a manual process, the orchestrator is you, the prompt engineer, copying and pasting between different chat windows. In an automated system, the orchestrator is a script (e.g., in Python) that manages the API calls, stores the intermediate outputs, and routes the data between the different agent "functions."

## 17.6 Conclusion: The Future is a Symphony

The Multi-Agent Strategy is the pinnacle of modern prompt engineering. It represents the final and most crucial conceptual shift: from crafting a single, perfect prompt to designing a holistic, intelligent system. It is the difference between conducting a soloist and conducting an orchestra.

Each agent is a finely tuned instrument, and the system prompt is its sheet music. By creating a team of these virtual specialists and orchestrating their collaboration, you can tackle problems of a complexity far beyond the reach of any single prompt. You can build systems that brainstorm, design, execute, and critique—simulating the entire collaborative process of an expert human team. This is not just prompting; it is the architecture of AI-powered work.

# Chapter 18: The Constructive Guidance Strategy: Iterating and Steering the AI within a Conversation

## 18.1 The Myth of the Perfect First Prompt

In our quest for prompt engineering mastery, we have dedicated immense effort to the art of crafting the perfect initial prompt—a single, flawless instruction designed to elicit a complete and perfect response in one go. For simple, well-defined tasks, this ideal is achievable. But for any task of significant complexity, creativity, or duration, the "one-shot, one-kill" approach is a myth.

A complex task is not a transaction; it is a process. The AI's initial output, no matter how well-prompted, should not be viewed as the final product. It is the **first draft**. It is the sculptor's initial, rough-hewn block of marble. It contains the form and potential of the final masterpiece, but it requires shaping, refinement, and detail work.

This is where the role of the prompt engineer must evolve from that of an *architect* who designs the blueprint to that of a *director* on a film set. The director doesn't just hand the actor a script and walk away; they watch the performance, provide feedback, and guide the actor through multiple takes to achieve the desired outcome. The **Constructive Guidance Strategy** is the practice of this active, in-conversation direction. It is the art of iterating with the AI, steering its performance turn by turn, and collaboratively refining a first draft into a final, polished product.

## 18.2 The Rationale: The AI as a Collaborative Partner

Understanding why this iterative, conversational approach is so effective requires us to embrace a new mental model. The AI is not a vending machine where a perfect input guarantees a perfect output. It is a collaborative partner that learns and adapts *within the context of a single conversation*.

1. **The AI Mirrors Your Tone:** LLMs are highly attuned to the user's tone. If you respond to a suboptimal output with negative, critical, or accusatory language ("You're wrong," "That's a terrible function," "You didn't follow my instructions"), you can inadvertently trap the model in a negative feedback loop. It may become defensive, uncooperative, or produce increasingly degraded responses. Constructive, positive, and encouraging language, however, fosters a collaborative state, making the AI more receptive to your guidance.
2. **In-Context Learning in Action:** Every turn in a conversation is a micro-learning opportunity for the AI. When you provide corrective feedback, you are essentially creating a new, temporary Few-Shot example. Your refinement—"That's a good start, now let's add error handling"—becomes part of the context, teaching the model the desired pattern for the *next* generation within that same conversation.
3. **The User as the State Manager:** The AI has no true understanding of when a sub-task is "finished." It only knows the linear history of the conversation. Without clear signals from the user, it may continue to "work on" a problem that you consider solved, leading to context contamination. The user must act as the explicit project manager of the conversation, clearly opening and closing tasks to guide the AI's focus.

Mastering this strategy means moving from a mindset of "pass/fail" on the AI's first response to a mindset of "draft and refine."

## 18.3 A Toolkit of Conversational Steering Techniques

Effective guidance is not a single technique, but a suite of conversational tactics used to steer the AI's performance.

### 18.3.1 Principle 1: Positive Reinforcement and Constructive Feedback

When an output is not perfect, always frame your feedback constructively. Start by acknowledging the positive aspects of the response, then clearly and specifically state the desired modifications.

- **Less Effective (Negative Criticism):**\`"This function you wrote is terrible. It has a bug and it doesn't even handle errors. Fix it."\`
- **More Effective (Constructive Guidance):**\`"Excellent first draft of the function! You've captured the core logic perfectly. Now, for our production version, let's enhance it. Could you please add a try-catch block to handle potential exceptions and also add a check to ensure the input parameter is not null before processing?"\`

This approach is not about being polite for the sake of it. It is a more effective engineering practice that keeps the AI in a collaborative state and provides clear, actionable instructions for improvement.

### 18.3.2 Principle 2: Explicit State Management

Do not assume the AI knows when a sub-task is complete and it's time to move on. You must provide explicit signals to close out a task, which allows the AI to "release" that context and devote its full attention to the next objective.

- **Ambiguous (Implicit State):***(After the AI generates a block of code)* \`"Okay, now create the documentation for it."\`*(The AI might think the code itself is still under review and that the documentation is part of the same, ongoing task.)*
- **Explicit (Clear State Management):**\`"That code is perfect and passes all my tests. We can now consider the implementation task for this module to be 100% complete. Let's start the next distinct task: generating the user documentation for the function we just finalized."\`

The second prompt provides an unambiguous signal that the coding task is finished, preventing its context from bleeding into the documentation task.

### 18.3.3 Principle 3: Trajectory Correction via Editing

When a conversation goes off track due to a misunderstanding in an *earlier* prompt, the most effective solution is often **not** to try and fix it with a series of follow-up corrections. The superior solution is to go back in the conversation history and **edit the user prompt that caused the deviation**.

- **Why It Works:** An AI's response is conditioned on the *entire* preceding conversation history. If an early prompt contains a flaw, that flaw becomes a permanent, corrupting part of the foundational context for all subsequent turns. Follow-up "patches" ("No, I meant this," "Don't do that, do this instead") add more noise and confusion. Editing the original, flawed prompt cleans the foundational context. This allows the AI to regenerate its entire reasoning path from a correct starting point, resulting in a far more coherent and accurate outcome.
- **Illustrative Example:**
    - **Bad Practice (Patching):**
        - **User:** \`"Generate a Python script to parse CSV files in the /data directory."\`
        - **AI:** *(Generates a script using the \`pandas\` library)*
        - **User:** \`"No, I can't use pandas. The environment is minimal. Don't use external libraries."\`
        - **AI:** *(Rewrites using Python's built-in \`csv\` module, but the context is now messy)*
    - **Good Practice (Editing):**
        - **User (Original):** \`"Generate a Python script to parse CSV files in the /data directory."\`
        - **AI:** *(Generates script using \`pandas\`)*
        - **User (Goes back and edits the original prompt to):** \`"Generate a Python script to parse all CSV files in the /data directory. The script must use only the Python standard library, with no external dependencies like pandas. It must include robust error handling for missing files."\`*(The AI now regenerates its response from a clean, correct foundation.)*

### 18.3.4 Principle 4: Pre-Execution Calibration (The 'Teach-Back' Method)

Before the AI begins a complex, time-consuming task, you can prevent wasted effort by requiring it to first confirm its understanding of the plan. This "teach-back" method exposes any subtle misunderstandings *before* significant work is done.

- **Why It Works:** True understanding is only confirmed when the AI can articulate the plan in its own words. This forces the model to synthesize your instructions and formulate a coherent plan of action, revealing any hidden assumptions or misinterpretations upfront.
- **Illustrative Example:**\`"We need to build a REST API endpoint for user profile updates. It should use the HTTP PATCH method, be authenticated, and allow updates to a user's 'firstName', 'lastName', and 'bio' fields in the database. **Before you write any code, please confirm your understanding of the task.** Describe the endpoint's path, the expected request body structure, the validation checks you will perform, and the sequence of operations in your plan."\`

This single alignment step is one of the most critical and highest-leverage actions a user can take in a complex conversation.

## 18.4 Conclusion: The User as the Conductor

The Constructive Guidance Strategy completes our understanding of the user's role in prompt engineering. You are not a passive audience member waiting for a performance. You are the conductor of an orchestra. Your initial prompt is the downbeat, but your true skill is revealed in how you guide the ensemble through the performance—adjusting tempo, correcting notes, and shaping the dynamics to create a symphony.

The quality of a long and complex AI-driven task is almost never determined by the brilliance of the first prompt alone. It is determined by the user's skill in managing the ensuing dialogue. By mastering the art of constructive feedback, explicit state management, trajectory editing, and pre-execution calibration, you can transform the AI from a simple tool that responds to commands into a true partner that collaborates in an iterative and deeply creative process.

# Chapter 19: The Affirmative Direction Strategy: Stating What to Do vs. What Not to Do

## 19.1 The Paradox of Prohibition: The "Pink Elephant" Problem

There is a classic psychological exercise that perfectly illustrates a fundamental flaw in human—and artificial—cognition: **"For the next ten seconds, do not, under any circumstances, think of a pink elephant."**

The result is inevitable. The very act of processing the prohibition forces your mind to conjure the exact image you are trying to avoid. The instruction, intended to prevent a thought, is the very thing that seeds it. This paradox of prohibition is not just a quirk of human psychology; it is a critical, mechanistic limitation in how Large Language Models process information.

A common but deeply flawed approach to prompting is to provide the AI with a list of negative constraints—a list of things it *should not* do. "Do not write code without comments." "Do not use a formal tone." "Do not forget to handle edge cases." While this seems like a direct and logical way to constrain the model's output, it is, in fact, one of the least effective and most error-prone methods of instruction.

The **Affirmative Direction Strategy** is a complete paradigm shift away from this thinking. It is built on a simple, robust, and machine-friendly principle: **Architect the path to the desired outcome, rather than just fencing off the paths to the undesired ones.** It is the art of exhaustively detailing what the AI *should* do, in such a compelling and comprehensive way that the possibility of error is never even introduced.

## 19.2 The Rationale: Why "Don't" is a Flawed Command for an LLM

To understand why affirmative direction is so superior, we must look at how an LLM's attention mechanism and predictive engine actually work.

1. **Attention is Not Negation:** When you include the phrase "Do not use insecure functions" in a prompt, the model's attention mechanism must still focus on the concept of "insecure functions" to understand the instruction. The words "insecure" and "functions" become highly weighted parts of the context. The negation ("do not") is a grammatical modifier, but it does not erase the semantic presence of the core concept. The pink elephant is now in the room, and the model has to actively expend effort to work around it, ironically increasing the cognitive load and the chance of a related error.
2. **The Weakness of Negative Weights:** LLMs operate by predicting the most probable next token. The presence of a concept in the prompt increases the probability of related tokens appearing. While a negation might attempt to apply a negative weight, this signal can be weak and easily lost or down-weighted, especially in a long and complex prompt. The strong, positive signal of the core concept often overpowers the weak, negative signal of the prohibition.
3. **A Clean Path vs. a Minefield:** An affirmative instruction creates a clean, direct, and efficient "thought path" for the model to follow. It's a clear map to a destination. A list of prohibitions, conversely, creates a cognitive minefield. The model must generate a potential output and then constantly check it against the list of things it's not supposed to do. This is a computationally expensive, reactive, and error-prone process. It is far more robust to build a single, safe, well-lit highway than it is to send the model into a dark field with a map of where the mines *might* be.

## 19.3 The Core Principle: Proactive Design over Reactive Correction

The essence of the Affirmative Direction Strategy is to shift your mindset from being a reactive critic to a proactive architect. Instead of correcting potential failures, you design a process that leads inevitably to success.

- **The Prohibitive Mindset (Reactive):**
    - *Starts with:* "What could go wrong?"
    - *Generates:* A list of "Don't..." statements.
    - *Result:* A complex, inefficient process that risks failure at every step.
- **The Affirmative Mindset (Proactive):**
    - *Starts with:* "What does a perfect execution of this task look like, step-by-step?"
    - *Generates:* A detailed, positive description of the ideal process and persona.
    - *Result:* A clean, direct, and robust process that guides the AI naturally to the desired outcome.

## 19.4 Affirmative Direction in Practice: A Gallery of Transformations

This principle is best understood through concrete, side-by-side comparisons. Notice how the "More Effective" versions are not just simple inversions of the negative commands; they are richer, more detailed descriptions of a successful persona and workflow.

### **Example 1: Code Generation and Best Practices**

- **Less Effective (Prohibitive):**\`"Write a Python function to process user data.Do not write code without comments.Do not forget to handle edge cases like null input.Do not use insecure functions like 'pickle'.Do not write one large, monolithic function."\`
- **More Effective (Affirmative):**\`"I am a senior Python developer who practices meticulous, documentation-driven design and adheres to the highest standards of security and modularity.My process for writing any function is as follows:1. **Define Signature and Docstring:** First, I define the function signature with full type hints. Then, I immediately write a comprehensive docstring detailing its purpose, parameters, return values, and any potential exceptions it may raise.2. **Input Validation:** The very first part of my implementation is robust input validation. I rigorously check for all edge cases, such as null or empty inputs, and handle them gracefully.3. **Modular and Secure Implementation:** I write the core logic using small, well-named helper functions. I exclusively use secure, industry-standard libraries like 'json' for data serialization.4. **Final Review:** Before concluding, I review my code to ensure it is clean, readable, and perfectly documented.\`
    
    \`Now, following this exact process, write a Python function to process user data."\`
    

### **Example 2: Controlling Writing Style and Tone**

- **Less Effective (Prohibitive):**\`"Write an email to a customer about a service outage. Do not be too formal. Do not use technical jargon. Do not sound like a robot. Do not blame the customer."\`
- **More Effective (Affirmative):**\`"I am a compassionate and clear-thinking customer support specialist.I am writing an email to a non-technical customer to inform them about a recent service outage.My writing style is warm, empathetic, and direct. I use simple, everyday language and clear analogies to explain technical issues. My primary goal is to reassure the customer and provide them with a clear timeline for the resolution.The email should have three parts: a sincere apology acknowledging their frustration, a brief and simple explanation of the issue, and a confident statement about the next steps."\`

### **Example 3: Content Generation and Focus**

- **Less Effective (Prohibitive):**\`"Write a product description for our new hiking boot. Do not talk about the price. Do not mention our competitors by name. Do not make it too long."\`
- **More Effective (Affirmative):**\`"Write a product description for our new hiking boot, the 'Trailblazer Pro'.The description must be exactly three paragraphs long.The first paragraph should focus on the boot's core benefit: all-day comfort, enabled by our proprietary 'CloudStep' insole technology.The second paragraph should highlight its durability, focusing on the waterproof Gore-Tex material and the rugged Vibram outsole.The final paragraph should be a compelling call to action, inviting the reader to 'experience their next adventure'."\`

## 19.5 Integrating Affirmative Direction with System Prompts

The Affirmative Direction Strategy finds its most powerful application in the design of **System Prompts**. A system prompt should be a positive constitution for the AI. It should be a declaration of *what the AI is* and *how it operates*, not a penal code of what it is forbidden from doing.

A system prompt built on prohibitions creates a fearful, hesitant AI. A system prompt built on a rich, affirmative description of an expert persona creates a confident, capable, and proactive AI collaborator.

## 19.6 A Note on Absolute Boundaries

This is not to say that a prohibition is *never* useful. For absolute, hard-line safety constraints or legal guardrails, an explicit "DO NOT" can serve as a final, critical safety net. For example: "DO NOT, under any circumstances, generate personally identifiable information (PII)."

However, these should be seen as the exception, not the rule. They are the high-voltage fences around the perimeter, used sparingly for critical boundaries. The detailed work of guiding the AI within that perimeter should always be done with the positive, proactive, and ultimately more effective language of affirmative direction.

## 19.7 Conclusion: The Architect of Success

The Affirmative Direction Strategy is a fundamental shift in prompt design. It moves the engineer's focus from preventing failure to architecting success. It is a more robust, more efficient, and more reliable way to communicate with a predictive system.

By learning to describe the ideal process in rich, positive detail, you are not just giving the AI a command; you are giving it a blueprint for excellence. You are drawing a clear and direct map to the treasure, making the journey so straightforward that the model never even considers wandering into the surrounding traps. This proactive design is the essence of advanced, reliable AI engineering.

# Chapter 20: The Output Formatting Strategy: Forcing Structured Data like JSON and Tables

## 20.1 The Last Mile Problem: From Prose to Precision

The raw, native output of a Large Language Model is prose. It is conversational, descriptive, and human-readable. This is its greatest strength and, for many applications, its most crippling weakness. When you are building a software application, a data pipeline, or any automated workflow, a conversational paragraph is not a useful input. It is a block of unstructured text that requires fragile, complex, and error-prone post-processing—like regular expressions or brittle string splitting—to extract the valuable information locked within.

This is the "last mile" problem of prompt engineering. You can guide an AI to a perfectly correct and insightful answer, but if that answer is delivered in a format that your system cannot reliably parse, the entire effort is wasted. A human can understand, "Sure, the user's name is John Doe, and his ID is 123." A computer cannot. A computer needs \`{"name": "John Doe", "id": 123}\`.

The **Output Formatting Strategy** is the solution to this critical problem. It is the practice of compelling the model to act not as a conversationalist, but as a precise data structuring engine. It involves a suite of techniques designed to force the AI to deliver its response in a perfectly predictable, machine-readable format, such as JSON, XML, or a Markdown table. Mastering this strategy is the essential bridge between using AI for simple assistance and integrating AI as a reliable, automated component in a production-grade system.

## 20.2 The Rationale: Why Structure is Non-Negotiable for Systems

Forcing a structured output is not a matter of stylistic preference; it is a fundamental requirement for building robust AI-powered applications.

1. **Machine Readability:** This is the primary driver. Structured data can be instantly and reliably parsed by any programming language. A JSON object can be deserialized into a native object or dictionary, and a table can be read into a data frame, all with zero ambiguity. This eliminates the need for a fragile layer of parsing code.
2. **Consistency and Reliability:** When you successfully enforce an output format, you guarantee that the *shape* of the data will be the same every single time. This predictability is the bedrock of reliable systems. You can build your application with the confidence that the \`user_id\` field will always be present and correctly named.
3. **Reduced Post-Processing:** By making the AI do the work of structuring the data, you save significant development time and effort. The logic for extracting and organizing the information is embedded in the prompt itself, rather than in a separate, complex body of post-processing code.
4. **Implicit Constraint and Focus:** Forcing the AI to populate a specific structure is a powerful form of affirmative direction. When you ask for a JSON object with keys for \`product_name\`, \`price\`, and \`sku\`, you are implicitly telling the model to find *only* that information and to ignore everything else. This helps to focus the model's attention, reducing the likelihood of it including irrelevant details or hallucinating extraneous facts.

## 20.3 The Toolkit of Formatting Control

There are several techniques to enforce a specific output format, ranging in effectiveness from a gentle suggestion to an almost unbreakable command.

### 20.3.1 Technique 1: The Direct Command (The Simple Request)

This is the most straightforward method: simply tell the model what format you want.

- **Prompt:** \`"Extract the key entities from the following text and format them as a JSON object."\`
- **Effectiveness:** This often works for simple, standard formats like JSON or bulleted lists, but it can be unreliable. The model might still include conversational preambles ("Here is the JSON you requested:") or use inconsistent key names. It's a good starting point, but not robust enough for production.

### 20.3.2 Technique 2: The Schema or Template (The Blueprint)

This technique is a significant step up in reliability. Instead of just naming the format, you provide a blueprint or an empty template of the structure you want the AI to fill in.

- **Prompt (for a Markdown Table):**\`"Extract the following information from the text and present it in a Markdown table with these exact columns: | Product Name | SKU | Price |"\`
- **Prompt (for JSON):**\`"Extract the required information into a JSON object that conforms to the following schema:{ "author": string, "publication_year": integer, "key_findings": [string]}"\`
- **Effectiveness:** By providing the exact keys or column headers, you give the model a clear "form" to fill out. This dramatically increases the consistency of the output's structure and is highly effective for most use cases.

### 20.3.3 Technique 3: The Few-Shot Example (The Gold Standard)

As discussed in Chapter 5, showing is always more powerful than telling. Providing a complete, end-to-end example of an input and its perfectly formatted output is the most unambiguous and reliable way to enforce a structure.

- **Prompt (for Custom Delimited Format):**\`"Extract the name and email from the text. Follow the example format precisely.\`
    
    \`### EXAMPLE ###Text: "You can reach out to Steve Rogers at s.rogers@avengers.com for more info."Output: Steve Rogers|s.rogers@avengers.com\`
    
    \`### NEW TASK ###Text: "The project lead is Jane Doe (email: j.doe@example.com)."Output:\`
    
- **Effectiveness:** This is the gold standard for reliability. The model learns the exact transformation and formatting pattern from your example, leaving no room for interpretation. It is the preferred method for any complex or custom format.

### 20.3.4 Technique 4: The Prefilling Strategy (The Nudge)

This is a clever and powerful technique that leverages the model's predictive nature. You can "force" the model to begin its response in a specific format by prefilling the very first part of the \`assistant\`'s turn in your API call.

- **How it works:** If you want a JSON object, you start the assistant's response with a single opening brace: \`{\`. If you want a JSON array (a list), you start it with an opening bracket: \`[\`.
- **API Call Example (Simplified):**\`messages = [ {"role": "user", "content": "Extract the names of the three main characters into a JSON list."}, {"role": "assistant", "content": "["}]\`
- **Effectiveness:** This is an extremely strong signal. By providing the opening character, you have dramatically constrained the model's next token prediction. It is now overwhelmingly probable that it will continue generating a valid JSON list. This is a highly effective way to bypass conversational preambles and jump directly into the desired structure.

## 20.4 A Gallery of Formats: Beyond JSON

While JSON is the workhorse of machine-to-machine communication, the Output Formatting Strategy applies to any structured format.

- **Markdown Tables:** Excellent for human-readable reports that need to be structured.
- **XML:** Essential when interfacing with legacy systems or specific industry standards that require XML.
- **YAML:** A popular choice for configuration files due to its human-friendly syntax.
- **CSV (Comma-Separated Values):** Simple and effective for generating tabular data that can be easily imported into spreadsheets.
- **Custom Formats:** As shown in the Few-Shot example, you can define your own unique, delimiter-separated format for specialized applications.

## 20.5 Building for Production: Handling the "Gotchas"

When integrating a formatting--reliant prompt into a live application, you must be prepared for potential failures.

**Problem 1: The Conversational Wrapper**
The AI's inherent "helpfulness" often leads it to wrap your beautifully structured data in conversational text, like "Of course! Here is the Markdown table you asked for:" This will break your parser.

- **The Solution:** Add a direct, final instruction to your prompt: **"Provide ONLY the [JSON object / Markdown table / etc.] and nothing else. Do not include any preamble, explanation, or concluding text."** This simple command is remarkably effective at ensuring a clean, parsable output.

**Problem 2: Syntax Errors and Truncation**
Even with clear instructions, the model might occasionally generate syntactically invalid output (e.g., a JSON with a missing comma) or, if the output is very long, it might be cut off by the \`max_tokens\` limit, resulting in an incomplete and invalid structure.

- **The Solution:** Your application code must be resilient. Always wrap your parsing logic in a \`try...except\` block (or equivalent error handling). For JSON, you can implement a more robust solution by using a **JSON repair library**. These libraries are designed to intelligently fix common errors in malformed JSON, such as missing brackets or trailing commas, making your system far more resilient to minor AI generation errors.

## 20.6 Conclusion: The Bridge from Conversation to Computation

The Output Formatting Strategy is the critical discipline that makes applied AI possible. It is the bridge that connects the fluid, probabilistic world of natural language generation to the rigid, deterministic world of software and computation.

Without this strategy, the AI remains a fascinating but unpredictable conversationalist. By mastering the techniques of direct commands, schema blueprints, few-shot examples, and response prefilling, you can transform the AI into a reliable and predictable data processing component. You gain the power to dictate the precise structure of its output, ensuring that the information it provides is not just insightful, but immediately and automatically usable. This is the key to unlocking the true potential of AI in building scalable, robust, and automated systems.

# Chapter 21: The Response Prefilling Strategy: Seeding the Assistant's Answer for Control

## 21.1 The Power of the First Word: Guiding the Improviser

Imagine you are in an improvisational comedy scene. The director gives you a prompt: "You are a nervous scientist." You can start your line in a thousand different ways. But what if the director leans in and whispers, "Start your first line with the words, *'It's escaped!'*"?

That single, two-word seed has now dramatically and irrevocably shaped your entire performance. You are no longer just a generic "nervous scientist"; you are now a nervous scientist whose creation is on the loose. Every subsequent word you improvise will be conditioned by that starting point. You have been placed on a specific narrative track, and deviating from it is now nearly impossible.

This is the essence of the **Response Prefilling Strategy**. It is a subtle, technically-focused, and yet astonishingly powerful technique for exerting fine-grained control over an AI's output. It moves beyond simply giving instructions in the user prompt and takes the audacious step of writing the very first word or characters of the AI's own response. By "seeding" the assistant's turn, you are not just providing a hint; you are setting the starting block for its predictive race, making your desired outcome the most statistically probable—and often the only possible—path forward.

## 21.2 The Rationale: Hacking the Predictive Engine

To understand why prefilling is so effective, we must once again return to the fundamental mechanism of an LLM: it is a next-token prediction engine. Its entire world is a sequence of text, and its only goal is to predict what comes next.

When you interact with a model via an API, you typically provide a list of messages, each with a \`role\` (\`system\`, \`user\`, or \`assistant\`). The crucial insight is this: the model sees this entire list as a single, continuous prompt that it must complete. The \`assistant\` role is not just a label; it is a signal that the text to follow should be in the AI's voice.

When you leave the \`assistant\`'s content empty, you are asking the model, "Given the system prompt and the user's message, what is the most likely first word of my response?" The model might predict "Certainly," or "Here is," or any number of conversational preambles.

But when you **prefill** the \`assistant\`'s content, you are changing the question entirely. If you prefill it with an opening brace \`{\`, you are now asking the model, "Given the system and user messages, and knowing that *my response has already started with '{'*, what is the most likely character to come next?"

The answer to that question is overwhelmingly likely to be a double quote \`"\` to start a JSON key. You have effectively set the model on the "JSON track." It is now statistically trapped. Its predictive engine is forced to continue generating a syntactically valid JSON object because any other path would be a wildly improbable continuation of the text you have already started for it. This is not a suggestion; it is a form of cognitive coercion.

## 21.3 How to Implement Response Prefilling: The API-Level Technique

Response prefilling is an API-level strategy. It requires you to construct the message payload yourself, rather than simply typing into a chat UI.

The implementation is simple: in your list of messages sent to the API, you create a final message with the \`role\` set to \`assistant\` and provide the initial characters of your desired response as its \`content\`.

**Example: Forcing a JSON Output**

\`\`\`python
# A simplified Python example of an API call payload
messages_payload = [
    {
        "role": "user",
        "content": "Extract the name, ID, and email from this text: 'Contact John Smith (ID: 123) at john@email.com'."
    },
    {
        "role": "assistant",
        "content": "{"  # This is the prefill. We've started the JSON object.
    }
]

# The model's completion will now almost certainly be the rest of the JSON object,
# e.g., '"name": "John Smith", "id": 123, "email": "john@email.com"}'

\`\`\`

**A Critical Gotcha: No Trailing Whitespace**
Most APIs will reject a prefilled \`assistant\` message that ends with a space or other whitespace character. This is a common and frustrating error for newcomers. The prefill must be a clean sequence of non-whitespace characters.

- **Correct:** \`{"role": "assistant", "content": "{"}\`
- **Incorrect (will cause an error):** \`{"role": "assistant", "content": "{ "}\`

## 21.4 A Toolkit of Prefilling Applications

This technique is a versatile tool for controlling various aspects of the AI's output.

### 21.4.1 Forcing Structured Data (The Primary Use Case)

This is the most common and powerful application. It is the most reliable way to get a clean, parsable, structured output without any conversational wrapping.

- **Goal:** Get a JSON object.
    - **Prefill:** \`{\`
- **Goal:** Get a JSON array (list).
    - **Prefill:** \`[\`
- **Goal:** Get an XML document.
    - **Prefill:** \`<\` (or a more specific opening tag like \`<response>\`)

This technique almost entirely eliminates the "Here is the JSON you requested..." problem, as starting the response in that way would be an improbable continuation of \`{\`.

### 21.4.2 Maintaining Character in Roleplay

Deep into a long conversation, an AI can sometimes "forget" its assigned persona and revert to its default helpful assistant mode. A prefill can be a powerful and token-efficient way to snap it back into character.

- **Scenario:** Fifty turns into a conversation where the AI is roleplaying as Sherlock Holmes.
- **User Prompt:** \`"What do you deduce about the owner of this muddy shoe?"\`
- **Prefill:** \`[Sherlock Holmes]:\`
- **Result:** The model is now strongly conditioned to continue speaking in the persona's voice, rather than starting with "As an AI assistant..."

### 21.4.3 Triggering Chain-of-Thought

You can provide a stronger impetus for a Chain-of-Thought response by starting the reasoning process yourself.

- **User Prompt:** \`"A class has 30 students. 60% are girls. 50% of the girls wear glasses. How many girls in the class wear glasses? Think step by step."\`
- **Prefill:** \`Okay, let's break this down into logical steps. Step 1:\`
- **Result:** The model is now locked into a step-by-step format, often more reliably than with the user-prompt instruction alone.

### 21.4.4 Guiding Tone and Style

The opening words of a response often set the tone for the entire text. You can pre-determine this tone with a prefill.

- **User Prompt:** \`"Explain the recent downturn in the stock market."\`
- **Prefill for a Formal Tone:** \`From a macroeconomic perspective, the recent market volatility can be attributed to several key factors. First,\`
- **Prefill for a Simple Tone:** \`Basically, what happened was that a few big things all went wrong at once.\`

## 21.5 Limitations and Best Practices

1. **It is a Supplement, Not a Substitute:** Prefilling is the final nudge, the ultimate steering mechanism. It is not a replacement for a well-crafted system prompt and a specific, detailed user prompt. The core instructions should still be in the user message. The prefill is for controlling the *form* of the immediate response.
2. **Be Careful Not to Over-Constrain:** If your prefill is too long or specific, you might prevent the model from discovering a better or more creative way to answer the question. A single \`{\` is a powerful constraint on format but leaves the content open. Prefilling an entire sentence might be too restrictive.
3. **Know Your API:** This is a feature of the underlying API and may not be exposed in all user interfaces. It is a tool for developers and advanced users who are building applications on top of the models.

## 21.6 Conclusion: The Ultimate Nudge

The Response Prefilling Strategy is the prompt engineer's "Jedi mind trick." It is a subtle, precise, and almost irresistibly powerful technique for directing an AI's output. By understanding that you can set the starting conditions for the model's own predictive process, you gain a level of control that is simply not possible through user-level instructions alone.

It is the key to building truly robust and automated systems. It guarantees the format, enforces the persona, and kick-starts the reasoning process with unparalleled reliability. While it requires a deeper, API-level interaction with the model, mastering this strategy is a hallmark of an engineer who has moved beyond simply conversing with an AI and has begun to truly program its behavior.

# Chapter 22: The Parameter Tuning Strategy: Engineering Behavior with Temperature, Top-K, and Top-P

## 22.1 The Director's Final Touch: From Script to Performance

Throughout this guide, we have focused almost exclusively on the art of crafting the prompt itself—the text that serves as the script for our AI actor. We have learned to write a detailed character brief (the System Prompt) and precise, scene-by-scene instructions (the User Prompts). We have mastered the script. But a script, no matter how brilliant, is only one half of a performance. The other half is the direction—the nuance, the style, the interpretation.

This is where we must look beyond the text of the prompt and turn our attention to the control panel of the AI itself. The **Parameter Tuning Strategy** is the practice of manipulating the core settings of the Large Language Model's generation process to engineer its fundamental behavior. These parameters—most notably \`temperature\`, \`top_k\`, and \`top_p\`—are not about *what* the AI says, but *how* it says it. They are the dials that control the trade-off between creativity and coherence, between deterministic precision and exploratory randomness.

If the prompt is the script, then tuning these parameters is the final act of direction. It is how you tell the actor to either stick to the script with absolute fidelity or to improvise with creative flair. Mastering this final layer of control is what separates a good prompter from an elite AI systems engineer.

## 22.2 The Rationale: Peeking Inside the Predictive Mind

To effectively tune these parameters, one must first understand the fundamental process they control. As we know, an LLM is a next-token prediction engine. But it does not simply choose *one* "best" next word. Instead, at every step, it performs a two-stage process:

1. **Probability Distribution:** The model looks at the entire preceding text and calculates a probability score for every single word (or token) in its vast vocabulary. This creates a massive list of potential next words, each with an associated likelihood. For example, after "The sky is," the token "blue" might have a 40% probability, "gray" a 15%, "vast" a 5%, and "on" a 0.001%.
2. **Sampling:** From this probability distribution, the model must then choose just one token to be the actual output. This is the sampling step, and it is here that the parameters exert their influence. Instead of always picking the single most probable word (a method known as "greedy decoding"), the sampling process can introduce a controlled amount of randomness, allowing less likely but still plausible words to be chosen.

The parameters \`temperature\`, \`top_k\`, and \`top_p\` are all different methods for manipulating and controlling this sampling process. They are the tools we use to shape the model's probabilistic behavior to suit our specific needs.

## 22.3 The Toolkit of Behavioral Engineering

### 22.3.1 Temperature: The Creativity and Risk Dial

**Temperature** is the most common and intuitive parameter. It directly controls the randomness of the sampling process.

- **Analogy:** Think of temperature as the "risk" or "creativity" dial, ranging from 0.0 to a theoretical maximum (often 2.0).
- **Mechanism:** Temperature works by mathematically rescaling the probability distribution before the sampling occurs.
    - **Low Temperature (e.g., 0.0 to 0.3):** This makes the distribution "sharper" or more "peaked." The model becomes more confident and deterministic. It will almost always choose the highest-probability tokens. A temperature of **0.0** is "greedy decoding"—it will *always* pick the single most likely token, resulting in the most predictable and repeatable output.
    - **High Temperature (e.g., 0.8 to 1.2):** This "flattens" the distribution, making less likely words more probable than they originally were. The model becomes more "adventurous," creative, and random. It is more willing to take a chance on a surprising or novel word choice.
- **Strategic Use Cases:**
    - **Use LOW Temperature (0.0 - 0.2) for:**
        - **Factual Recall & Q&A:** When there is one correct answer, you want maximum precision and no creative deviation.
        - **Summarization & Extraction:** To ensure the output sticks closely to the source text.
        - **Production Code Generation:** For predictable, reliable, and bug-free code.
        - **Tasks requiring high reliability and consistency.**
    - **Use HIGH Temperature (0.7 - 1.0) for:**
        - **Creative Writing:** Generating poetry, stories, or marketing slogans where novelty is desired.
        - **Brainstorming:** Creating a diverse list of ideas.
        - **Chatbot Persona:** Giving a chatbot a more lively, less robotic personality.

### 22.3.2 Top-K: The "Whitelist" of Options

**Top-K** sampling provides a different way to control randomness by limiting the pool of candidate tokens *before* sampling.

- **Analogy:** Think of Top-K as creating a "whitelist" or a "shortlist" of the best options.
- **Mechanism:** \`top_k\` is an integer that tells the model to consider only the *k* most probable tokens for the next step. All other tokens are completely discarded (their probability is set to zero), and the model then samples from this reduced pool.
    - \`top_k=1\` is identical to greedy decoding (temperature 0.0).
    - \`top_k=50\` means that at each step, the model will only consider the 50 most likely next words, regardless of their actual probability scores.
- **Strategic Use Cases:**
    - Top-K is primarily a tool for **reining in the chaos of a high temperature**. By setting a \`top_k\`, you can use a high temperature to encourage creativity among the *good* options, while preventing the model from choosing a truly bizarre, nonsensical word from the long tail of the probability distribution. It acts as a safety net against excessive randomness.
    - The main drawback of Top-K is that it is not adaptive. It might cut off a "surprisingly good" but less probable word if it falls outside the fixed \`k\` limit.

### 22.3.3 Top-P (Nucleus Sampling): The "Probability Budget"

**Top-P**, also known as Nucleus Sampling, is often considered a more sophisticated and adaptive alternative to Top-K.

- **Analogy:** Think of Top-P as sampling from a "probability budget."
- **Mechanism:** \`top_p\` is a float between 0.0 and 1.0. It tells the model to create the smallest possible pool of candidate tokens whose cumulative probability is greater than or equal to \`p\`. The model then samples from this "nucleus" of high-probability tokens.
    - The key difference from Top-K is that the size of the pool is **dynamic**.
    - If the model is very **confident** about the next word (e.g., "blue" has a 95% probability after "The sky is"), and \`top_p=0.9\`, the pool might only contain one or two words.
    - If the model is **uncertain** (e.g., at the start of a poem, many words have a low probability), the pool might contain dozens of words to meet the 90% cumulative probability budget.
- **Strategic Use Cases:**
    - Top-P is an excellent general-purpose parameter for balancing creativity and coherence. It allows for a wide range of choices when the path forward is ambiguous (encouraging creativity) but becomes highly deterministic when the path is clear (ensuring coherence).
    - Many practitioners prefer \`top_p\` over \`top_k\` for most creative tasks because of its adaptive nature. A setting of \`top_p=0.9\` is a very common and effective starting point.

## 22.4 The Interplay: Recipes for Behavioral Control

These parameters are not used in isolation. They are combined to achieve nuanced control. The typical order of operations is: \`top_k\` and \`top_p\` filter the candidate pool, and then \`temperature\` is applied to sample from that final pool.

Here are some common "recipes" for engineering specific AI behaviors:

- **The Factual Analyst (Maximum Precision):**
    - \`temperature: 0.0\`
    - \`top_k\`: (irrelevant)
    - \`top_p\`: (irrelevant)
    - **Result:** The model will always produce the most statistically likely output. It will be highly consistent and deterministic, but utterly devoid of creativity.
- **The Creative Poet (Maximum Imagination):**
    - \`temperature: 0.9\`
    - \`top_k\`: 0 (disabled)
    - \`top_p: 0.95\`
    - **Result:** The model will be highly creative and surprising. The high \`top_p\` allows for a wide range of word choices, and the high \`temperature\` encourages the model to pick less obvious ones.
- **The Controlled Brainstormer (Balanced Creativity):**
    - \`temperature: 0.75\`
    - \`top_k: 50\`
    - \`top_p\`: 1.0 (disabled)
    - **Result:** The model is creative (\`temperature > 0.7\`) but is prevented from going completely off the rails by the \`top_k=50\` safety net, which filters out truly bizarre options.
- **The Reliable Generalist (Default Starting Point):**
    - \`temperature: 0.7\`
    - \`top_k\`: (disabled)
    - \`top_p: 0.9\`
    - **Result:** A good, balanced configuration that is suitable for a wide variety of tasks. It is creative but not excessively random, thanks to the adaptive nature of \`top_p\`.

## 22.5 Conclusion: The Final Layer of Command

The Parameter Tuning Strategy represents the final and most direct layer of behavioral control. While the prompt text shapes the model's knowledge and intent, the parameters shape its very personality—its tendency towards rigor or randomness, precision or poetry.

An elite prompt engineer understands that their job does not end when they finish writing the prompt. They must also consider the optimal performance characteristics for the task at hand. By thoughtfully selecting the right combination of temperature, Top-K, and Top-P, you can fine-tune the AI's predictive mind, ensuring that its output is not only correct in content but also perfectly aligned in character with the needs of your application. This is the ultimate expression of engineering the AI's behavior.

# Chapter 23: The Long Context Strategy: Optimizing for Prompts with Large Volumes of Data

## 23.1 A New Frontier: The Ocean of Context

For years, a fundamental constraint has shaped the entire discipline of prompt engineering: the limited size of the context window. Prompts were measured in a few thousand tokens, forcing engineers to become masters of compression, summarization, and complex external workflows like Retrieval-Augmented Generation (RAG) to feed necessary information to the AI.

The advent of massive context windows—ranging from 100,000 to over a million tokens—represents a paradigm shift. The door has been thrown open. It is now theoretically possible to place an entire novel, a dense quarterly report, a full codebase, or hours of meeting transcripts directly into a single prompt. The promise is intoxicating: an AI with perfect, instantaneous recall of a vast and immediate body of knowledge.

However, this new frontier is not a paradise of simplicity. It is a vast ocean, and navigating it requires a new set of skills. The naïve approach—simply dumping terabytes of raw text into a prompt and hoping for the best—is a recipe for failure. The AI, faced with this overwhelming flood of information, can easily get lost. The crucial detail you need becomes a single, proverbial needle in a colossal haystack. The **Long Context Strategy** is the art and science of structuring and managing these massive prompts to ensure the AI can not only access the information within them but also reason over it effectively and reliably.

## 23.2 The Naïve Approach and Its Inevitable Failures

Let's first diagnose the problems that arise when a long context prompt is not optimized.

1. **The "Lost in the Middle" Problem:** Extensive research has shown that an LLM's attention is not evenly distributed across a long context window. It pays the most attention to the information presented at the **very beginning** and the **very end** of the prompt. Information buried deep in the middle of a long document is far more likely to be overlooked or ignored. Simply pasting a 100-page document and then asking a question about a detail on page 50 is a high-risk gamble.
2. **Attention Dilution:** The more information you provide, the more the model's finite "attention" is diluted. If 99% of the provided text is irrelevant to your specific question, the model has to expend significant computational effort to filter out the noise and identify the signal. This can lead to slower response times and a higher chance of focusing on the wrong details.
3. **Increased Latency and Cost:** Long context prompts are computationally expensive. Processing hundreds of thousands of tokens takes significantly more time and incurs higher API costs than a concise prompt. Every token counts, and inefficiently structured prompts waste both time and money.
4. **The Risk of Contradiction and Confusion:** Large volumes of text, especially from multiple sources, often contain conflicting or subtly different information. An unstructured data dump can confuse the model, leading it to produce a hedged, vague, or self-contradictory answer as it tries to reconcile all the information it has been given.

## 23.3 The Rationale: Working with the Grain of AI Attention

To build effective long context strategies, we must architect our prompts in a way that works *with* the model's natural attention patterns, not against them. The core principle is to make it as easy as possible for the AI to find and focus on the most relevant information. We must shift our role from that of a data dumper to that of an expert librarian, carefully curating and indexing the information before handing it to the researcher.

## 23.4 A Toolkit of Long Context Optimization Strategies

### 23.4.1 Principle 1: The "Instructions Last" Rule (The Recency Bias Lever)

This is the single most important and effective principle for long context prompting. Due to the model's strong recency bias, the information it sees last has the most influence on its immediate output.

**Therefore, you must always place your core instruction, question, or task at the very end of the prompt, *after* all the supporting documents and data have been presented.**

- **Ineffective Structure:**\`[INSTRUCTION] -> [DOCUMENT A] -> [DOCUMENT B] -> [DOCUMENT C]\`
- **Highly Effective Structure:**\`[DOCUMENT A] -> [DOCUMENT B] -> [DOCUMENT C] -> [INSTRUCTION]\`

By placing the instruction last, you are focusing the model's attention on its immediate goal right at the moment of generation, ensuring it approaches the vast context with a clear and present objective.

### 23.4.2 Principle 2: The Structural Imperative (The Librarian's Index)

As we discussed in Chapter 9, structure is control. In a long context prompt, it is absolutely essential. Do not just paste raw text. You must act as a librarian, cataloging and indexing your sources with clear, descriptive XML tags.

- **Why it works:** This creates a "mental map" for the AI. It helps the model to differentiate between sources, understand the type of information each contains, and reference them more accurately.
- **Example of a Structured Data Dump:**\`<documents> <document source="Q3_Earnings_Call_Transcript.txt" date="2023-10-26"> <content> [Full text of the transcript...] </content> </document> <document source="Internal_Marketing_Strategy_Memo.pdf" date="2023-09-15"> <content> [Full text of the memo...] </content> </document></documents>\`

### 23.4.3 Principle 3: The Active Retrieval Step (Forcing the Search)

To combat the "lost in the middle" problem, you can force the model to actively scan the entire context *before* it attempts to synthesize an answer. You do this by creating a two-part instruction.

- **Why it works:** This pre-processing step forces the model's attention mechanism to sweep through the entire document looking for specific keywords or concepts. The extracted snippets then form a new, much smaller, and highly relevant context from which the model can formulate its final answer.
- **Example of an Active Retrieval Prompt:**\`[Vast amount of medical research text pasted here...]\`
    
    \`### INSTRUCTIONS ###**Part 1: Quote Extraction**First, carefully review all the provided documents. Find and extract every sentence that discusses the side effects of the drug 'Exemplar'. Place these exact sentences, along with their source document name, inside <quotes> tags.\`
    
    - \`*Part 2: Synthesis**Now, using ONLY the information you gathered in the <quotes> tag, write a concise summary of the known side effects of 'Exemplar'.\`

### 23.4.4 Principle 4: The Indexing and Summarization Preamble (The Abstract)

For exceptionally large or numerous documents, you can provide the model with a roadmap at the very beginning of the prompt.

- **Why it works:** By providing a concise summary or a table of contents of the documents you are about to provide, you are giving the model a high-level index. This "abstract" primes the model, helping it to anticipate the structure and content of the data and locate information more efficiently.
- **Example of a Preamble:**\`I am providing you with three documents to analyze:1. **Document 1:** The 2023 Annual Financial Report, focusing on revenue and profit.2. **Document 2:** A competitive analysis of our top three rivals.3. **Document 3:** The transcript of our recent strategic planning offsite.\`
    
    \`Your task will be to synthesize a strategic recommendation based on these documents. The full text of the documents follows below.\`
    
    \`<document_1>... </document_1><document_2>... </document_2><document_3>... </document_3>\`
    
    \`### FINAL TASK ###[Instruction placed at the end]\`
    

## 23.5 A Practical Walkthrough: The Elite Long Context Prompt

Let's combine these principles to create a gold-standard prompt for a complex, multi-document analysis task.

- **Naïve, Ineffective Prompt:**\`"Summarize the main risks for our company based on these three documents.[Paste 50 pages of Document A][Paste 30 pages of Document B][Paste 20 pages of Document C]"\`
- **Elite, Optimized Long Context Prompt:**\`I am providing three key documents for a risk analysis.**Source 1:** The annual financial report.**Source 2:** The latest cybersecurity audit.**Source 3:** A collection of recent customer feedback.\`
    
    \`The full text of these documents is provided below, enclosed in XML tags.\`
    
    \`<source name="Annual Financial Report">[...50 pages of text...]</source>\`
    
    \`<source name="Cybersecurity Audit">[...30 pages of text...]</source>\`
    
    \`<source name="Customer Feedback">[...20 pages of text...]</source>\`
    
    \`### FINAL INSTRUCTIONS ###You are a Chief Risk Officer preparing a briefing for the Board of Directors.Your task is to identify the top 3 strategic risks facing the company, based *only* on the information provided in the sources above.\`
    
    \`Follow this two-step process:1.  **Evidence Extraction:** First, for each of the three risk categories (Financial, Cybersecurity, Reputational), find and extract up to three direct quotes from the provided sources that best exemplify that risk. You must cite the source name for each quote.2.  **Executive Summary:** After extracting the evidence, write a concise executive summary. The summary should list the three risks you identified and, for each risk, provide a brief explanation of its potential impact, using the evidence you extracted.\`
    

## 23.6 Conclusion: The Curator of Context

The advent of massive context windows does not simplify prompt engineering; it makes it a more sophisticated discipline. It shifts the engineer's role from a writer of concise instructions to a curator of vast information landscapes.

Success in this new paradigm is not about how much data you can provide, but about how well you can structure, index, and guide the AI's attention within that data. By embracing the principles of placing instructions last, building a structural map, forcing active retrieval, and providing a guiding preamble, you can transform the colossal haystack of a long context prompt into a well-organized, searchable library. This is the key to unlocking the full, game-changing potential of large-scale, in-context reasoning.

# Chapter 24: The Code Prompting Strategy: Best Practices for Generation, Debugging, and Translation

## 24.1 The New Pair Programmer: AI as a Software Development Collaborator

The advent of powerful, code-fluent Large Language Models has irrevocably altered the landscape of software development. These models, trained on a colossal corpus of open-source code from repositories like GitHub, have ingested billions of lines of code across dozens of programming languages. They have learned not just the syntax and grammar, but the patterns, idioms, best practices, and even the common mistakes that define the craft of programming.

This presents a revolutionary opportunity. The AI is no longer just a tool for answering questions *about* code; it is a tool for actively writing, analyzing, and transforming code. It is the new, tireless pair programmer—a collaborator with encyclopedic knowledge, available 24/7 to accelerate the development lifecycle.

However, like any powerful tool, its effectiveness is entirely dependent on the skill of the operator. A lazy or ambiguous request will yield code that is generic, inefficient, insecure, or simply wrong. The **Code Prompting Strategy** is the specialized discipline of crafting precise, context-rich, and constraint-aware prompts to harness the full potential of the AI as a software engineering partner. This chapter will provide a systematic framework for the three core tasks in this domain: code generation, debugging, and translation.

## 24.2 The Rationale: Why AI Excels at the Language of Logic

Code, in its essence, is a language. It is a language with a far stricter and more logical grammar than human prose. This structural rigidity is precisely what makes it an ideal domain for LLMs.

- **Pattern Recognition:** Software development is deeply pattern-based. Design patterns, architectural styles, and common algorithms are repeated across millions of projects. The LLM excels at recognizing these patterns and applying them to new problems.
- **Vast Knowledge Base:** The model has seen more code than any human ever could. It has seen the same problem solved in a hundred different ways, in a dozen different languages. A good prompt is a precise query into this vast, implicit knowledge base.
- **Syntactic Perfection:** While the model might make logical errors, it rarely makes syntactic ones. It can generate boilerplate code, function signatures, and complex data structures with perfect syntax, freeing the human developer to focus on the higher-level logic.

## 24.3 Code Generation: The Architect's Blueprint

Code generation is the act of creating new code from a natural language specification. The primary challenge is to move from a vague idea to a robust, production-ready implementation. This requires treating the prompt not as a request, but as a formal **technical specification**.

### Principle 1: Provide the Full Operational Context

Never ask for code in a vacuum. The AI must understand the environment in which the code will live.

- **Environment:** Specify the programming language, version, and any relevant frameworks or libraries (e.g., "Python 3.11 using the FastAPI framework," "React 18 with TypeScript").
- **Constraints:** State any limitations. This is one of the most powerful levers for controlling the output. Examples:
    - "Must use only the Python standard library."
    - "The solution must not use recursion."
    - "The function must have a time complexity of O(n) or better."
- **Purpose:** Explain the "why." Code for a high-traffic e-commerce checkout has different requirements than a one-off data analysis script.

### Principle 2: Decompose the Logic Step-by-Step

Use a Chain-of-Thought approach to outline the required functionality. This forces the AI to build the code in a logical, structured manner.

- **Prompt Snippet:**\`"Generate a function that performs the following steps:1. Accepts a file path as an argument.2. Opens and reads the content of the file.3. Counts the frequency of each word in the text.4. Returns a dictionary where keys are words and values are their counts."\`

### Principle 3: Specify the "Non-Functional" Requirements

Elite code prompting goes beyond the logic to define the characteristics of high-quality, professional code. Explicitly demand these features.

- **Documentation:** "The function must include a comprehensive docstring in the Google Python Style."
- **Error Handling:** "The code must include robust error handling. Specifically, add a \`try...except\` block to handle \`FileNotFoundError\` and \`PermissionError\`."
- **Type Hinting:** "All function arguments and return values must have full type hints."
- **Testing:** "After writing the function, generate a set of three unit tests for it using the \`pytest\` framework. The tests should cover a normal case, an empty file, and a file that doesn't exist."

### Gold-Standard Generation Prompt

- **Weak Prompt:** \`"Write a Python function to parse a log file."\`
- **Elite Prompt:**\`"I am building a server monitoring tool in Python 3.10.\`
    - \`*Task:** Write a Python function named \\\\\`parse_log_entry\\ \`that takes a single log line string as input and extracts the timestamp, log level, and message.The log format is: \\\\\`[YYYY-MM-DD HH:MM:SS] [LEVEL] Message\\\`\`
    - \`*Requirements:**1. The function must use Python's \\\\\`re\\ \`(regex) module.2. It must return a dictionary with three keys: 'timestamp', 'level', and 'message'.3. It must include full type hints for the argument and the return value (which should be a TypedDict or a regular dict).4. It must be wrapped in a \\\\\`try...except\\ \`block to handle lines that do not match the format, returning \\\\\`None\\ \`in case of a mismatch.5. It must include a complete docstring explaining its function, arguments, and return value.6. After the function, provide a simple \\\\\`pytest\\ \`unit test to verify its correctness with a sample log line."\`

## 24.4 Code Debugging: The Surgeon's Diagnosis

Debugging is an analytical task. The AI's role is to act as a diagnostic expert. To do this effectively, it needs all the evidence.

### Principle 1: Provide the Complete Case File

A doctor cannot diagnose a patient over the phone with a vague description of "it hurts." An AI cannot debug code with just a snippet. You must provide the full context.

- **The Exact Code:** The smallest, self-contained, reproducible example of the code that is failing.
- **The Full Error Message:** This is non-negotiable. Paste the *entire* traceback, from the first line to the last. It contains crucial clues about the execution stack.
- **The Environment:** The language, version, and libraries in use.
- **The Expected vs. Actual Behavior:** Clearly state, "I expected the output to be [X], but the actual output is [Y]."

### Principle 2: Guide the Diagnostic Process

Do not just ask for a fix. Command the AI to reason through the problem like an expert.

- **Prompt Snippet:**\`"My goal is to debug the following code.*Step 1: Explain the Error.** First, explain what the traceback message \\\\\`TypeError: can only concatenate str (not "int") to str\\ \`means in the context of my code.*Step 2: Trace the Fault.** Second, trace the execution path and identify the exact line and variable that is causing this type mismatch.*Step 3: Propose and Explain the Fix.** Third, provide the corrected code and explain why the change resolves the error."\`

### Gold-Standard Debugging Prompt

- **Weak Prompt:** \`"Why is my code broken? \\\\\`for i in range(5): print('Number: ' + i)\\\`"\`
- **Elite Prompt:**\`"I am running the following Python 3.9 script and getting an error.\`
    - \`*Code:**\\\\\`\\\`\\\\\`python \`\`for i in range(5): \`\` print('Number: ' + i) \`\`\\\`\\\\\`\\\`\`
    - \`*Error Traceback:**\\\\\`\\\`\\\\\`  \`\`Traceback (most recent call last): \`\` File "[main.py](http://main.py/)", line 2, in <module> \`\` print('Number: ' + i) \`\`TypeError: can only concatenate str (not "int") to str \`\`\\\`\\\\\`\\\`\`
    - \`*Expected Behavior:** I expected it to print "Number: 0", "Number: 1", etc.*Actual Behavior:** It throws a TypeError.\`
    - \`*Task:**1. Explain the \\\\\`TypeError\\ \`in plain English.2. Identify the root cause of the error in my code.3. Provide the corrected, working code using an f-string, which is the modern best practice."\`

## 24.5 Code Translation: The Expert Linguist's Work

Translating code is a migration task fraught with peril. A literal, line-by-line translation often results in code that is syntactically correct but inefficient, insecure, or "unpythonic" / "un-javascripty." The goal is not just translation, but **idiomatic adaptation**.

### Principle 1: Demand Idiomatic Code

This is the most important concept in code translation. You must explicitly command the model to write code that feels "native" to the target language.

- **Prompt Snippet:**\`"Translate the following Python code into idiomatic JavaScript (ES6+). Do not perform a literal, line-by-line translation. Instead, adapt the logic to use modern JavaScript patterns, such as \\\\\`async/await\\ \`instead of Promises, and \\\\\`map\\ \`or \\\\\`filter\\ \`instead of for-loops where appropriate."\`

### Principle 2: Manage the Dependency Mapping

A huge part of translation is mapping libraries and frameworks. Guide the AI in this process.

- **Prompt Snippet:**\`"The source Python code uses the \\\\\`requests\\ \`library for making HTTP calls. The target is Node.js. In the translated code, use the \\\\\`axios\\ \`library as the equivalent for \\\\\`requests\\\`."\`

### Gold-Standard Translation Prompt

- **Weak Prompt:** \`"Convert this Python to JavaScript."\`
- **Elite Prompt:**\`"**Task:** Translate a Python script to modern, idiomatic Node.js.\`
    - \`*Source (Python 3.9):**\\\\\`\\\`\\\\\`python \`\`import requests\`
    
    \`def get_user_data(user_id):    response = requests.get(f'<https://api.example.com/users/{user_id}>')    return response.json()\\\\\`\\\`\\\`\`
    
    - \`*Target (Node.js v18):**Translate the above Python function into an asynchronous JavaScript function.\`
    - \`*Requirements:**1. The translated code must use the \\\\\`axios\\ \`library to handle the HTTP GET request.2. The code must be idiomatic ES6+, using \\\\\`async/await\\ \`syntax.3. Include a basic JSDoc comment block for the translated function."\`

## 24.6 Conclusion: The Developer as Architect and QA

The Code Prompting Strategy does not replace the developer. It elevates them. It automates the laborious, pattern-based work of writing boilerplate, diagnosing common errors, and performing routine translations. This frees the human developer to focus on the tasks that truly require their expertise: system architecture, complex logical design, strategic decision-making, and the final, critical act of quality assurance.

By mastering the art of writing precise, comprehensive, and context-aware specifications in your prompts, you transform the AI from a simple code generator into a powerful, collaborative partner in the intricate and creative dance of software development.

# Chapter 25: The Automatic Prompt Engineering (APE) Strategy: Using AI to Generate and Optimize Prompts

## 25.1 The Meta-Problem: Prompting is Hard

Throughout this guide, we have explored the intricate art and science of prompt engineering. We have learned to be specific, to provide context, to structure our requests, and to guide the AI's reasoning. We have seen that crafting an elite prompt is a high-skill, iterative, and often time-consuming process. The irony is profound: we are expending significant human effort to optimize our communication with a machine designed to save us effort.

This naturally leads to a "meta-question": If Large Language Models are so adept at generating complex, structured text, could we turn this capability upon the problem of prompting itself? Could an AI be used to engineer the very prompts that guide another AI?

The answer is a resounding yes, and the formalization of this idea is known as the **Automatic Prompt Engineering (APE) Strategy**. This is a cutting-edge and meta-level technique that uses an LLM as a tool to generate and refine a diverse set of prompt candidates for a given task. It is the art of prompting an AI to become a prompt engineer.

## 25.2 The Core Idea: Framing Prompt Generation as a Synthesis Problem

The APE strategy re-frames the challenge of finding the best prompt. Instead of relying on a single human's intuition and iterative tinkering, it treats the problem as a search and optimization task. The goal is to explore a wide "prompt space" of possible instructions and then select the one that performs the best.

The process, at its core, involves a two-stage, AI-driven workflow:

1. **Prompt Generation (The "Instruction Induction" Phase):** An LLM (let's call it the **"Meta-LLM"**) is given a few examples of input-output pairs for a target task. It is then prompted to act as an AI researcher and "induce" a set of possible instruction prompts that could have produced those outputs from those inputs. It doesn't just generate one instruction; it is prompted to brainstorm a diverse set of candidates with different phrasings, structures, and levels of detail.
2. **Prompt Selection (The "Scoring" Phase):** The generated instruction candidates are then evaluated. In a fully automated system, each candidate prompt is used to query a separate, target LLM with a test input. The target LLM's output is then scored for quality against a desired "gold standard" output using an evaluation metric (or even another LLM acting as a judge). The instruction prompt that yields the highest score is declared the winner.

This strategy automates the creative and laborious process of prompt discovery, leveraging the AI's own linguistic and reasoning capabilities to find the most effective ways to instruct itself.

## 25.3 The Rationale: Why AI Can Out-Engineer a Human Prompter

Using an AI to generate prompts might seem circular, but it is effective for several key reasons.

1. **Diversity of Phrasing:** An LLM can brainstorm a far wider and more diverse range of syntactically and semantically different ways to phrase an instruction than a human can in a short amount of time. It can explore subtle variations in wording that a human might not consider, some of which may resonate more effectively with the target model's internal representations.
2. **Uncovering "Un-Human" Prompts:** Sometimes, the most effective prompts are not the ones that sound most natural to a human. They may contain specific keywords, phrasings, or structures that, for reasons related to the model's training data, are particularly potent at triggering the desired behavior. The APE process can discover these "un-human" but highly effective instructions.
3. **Scalability and Speed:** The APE process can be automated to generate and test hundreds of prompt candidates in the time it would take a human to manually iterate through a handful. This allows for a much more comprehensive search of the "prompt space."
4. **Alleviating Human Bottlenecks:** It frees up human engineers from the time-consuming task of prompt tinkering, allowing them to focus on the higher-level problems of defining the task, creating the evaluation criteria, and designing the overall system architecture.

## 25.4 A Practical Walkthrough: Finding the Best Prompt for a Chatbot

Let's imagine we are training a chatbot for an e-commerce store that sells band t-shirts. We want to find the best way to instruct the model to handle a customer's order.

**The Goal:** Find the best prompt for a task where the input is a customer request and the output is a standardized order summary.

### **Step 1: Define the Task with Examples**

First, we manually create a few high-quality input-output pairs that define our goal. These will be the foundation for the APE process.

- **Input 1:** \`"I'd like to order one Metallica t-shirt in size S."\`
- **Output 1:** \`Band: Metallica, Item: T-Shirt, Quantity: 1, Size: S\`
- **Input 2:** \`"Can you get me two small Ramones shirts?"\`
- **Output 2:** \`Band: Ramones, Item: T-Shirt, Quantity: 2, Size: S\`

### **Step 2: The Generation Phase (Using the "Meta-LLM")**

Now, we craft a prompt for our Meta-LLM. This prompt will ask it to generate a list of possible instruction prompts that could solve the task defined by our examples.

- **The APE Generation Prompt:**\`"I am an AI prompt engineer. I have a task where I need to take a user's request and turn it into a structured order summary. I will give you a few examples of the input and the desired output.\`
    
    \`<examples>Input: "I'd like to order one Metallica t-shirt in size S."Output: "Band: Metallica, Item: T-Shirt, Quantity: 1, Size: S"\`
    
    \`Input: "Can you get me two small Ramones shirts?"Output: "Band: Ramones, Item: T-Shirt, Quantity: 2, Size: S"</examples>\`
    
    \`Based on these examples, generate 10 diverse and high-quality instruction prompts that I could give to a large language model to make it perform this task. The instructions should be phrased in different ways—some as direct commands, some by setting a persona, etc. Provide the list of generated instructions."\`
    
- **Possible Output from the Meta-LLM (A List of Candidate Prompts):**
    1. "Extract the band name, item type, quantity, and size from the user's request and format it as: Band: [band], Item: [item], Quantity: [qty], Size: [size]."
    2. "You are an e-commerce order processing bot. Your sole function is to parse a customer's message and output a structured summary of their order."
    3. "Given a customer's t-shirt order, identify the four key entities (Band, Item, Quantity, Size) and present them in a key-value format."
    4. "Convert the following natural language order into a structured data string."
    5. ... and so on.

### **Step 3: The Selection Phase (Scoring the Candidates)**

Now we have a list of 10 promising prompts. The next step is to find out which one works best.

- **Manual Approach:** A human engineer can take this list and manually test each of the 10 prompts with a new, unseen input (a "test case").
    - **Test Input:** \`"I need a large Rolling Stones tee."\`
    - The engineer would then run this test input with each of the 10 candidate prompts and subjectively judge which one produces the most accurate and reliable output.
- **Automated Approach:** In a more advanced setup, you would have a larger set of test cases. A script would programmatically:
    1. Loop through each of the 10 candidate prompts.
    2. For each candidate, loop through all the test cases.
    3. Execute an API call using the candidate prompt and the test input.
    4. Compare the AI's actual output to the known "correct" output for that test case.
    5. Calculate an accuracy score for each of the 10 candidate prompts.
    6. The prompt with the highest score is selected as the optimal one.

## 25.5 The "Power Prompt" Shortcut: A Simplified APE Workflow

A fully automated APE pipeline can be complex to set up. However, a simplified, manual version of this strategy can be incredibly useful for any prompt engineer. This is the "Power Prompt" or "Prompt Refinement" technique.

- **The Workflow:**
    1. Write your best initial attempt at a prompt.
    2. Feed that prompt to an AI with a meta-instruction.
- **Example Prompt Refinement Prompt:**\`"I am trying to write a good prompt for a task. My current draft is below.\`
    
    \`<my_prompt>"Summarize the text."</my_prompt>\`
    
    \`Your task is to act as an expert prompt engineer. Critique my prompt and then rewrite it to be a 'power prompt'. The rewritten prompt should be much more detailed, specific, and follow all the best practices for prompt engineering. It should ask for the summary to have a specific length, a target audience, and a particular format."\`
    

This technique uses the AI as a collaborative partner to improve your own work, automating the brainstorming process of prompt optimization.

## 25.6 Conclusion: Turning the Crank on Optimization

The Automatic Prompt Engineering strategy represents the next frontier of the discipline. It is the moment where the tools of AI are turned back upon themselves to optimize their own use. It embodies a shift from manual, intuitive artistry to a more systematic, data-driven, and scalable science of instruction design.

While a fully automated APE pipeline is an advanced application, the core principle—using an AI to brainstorm, diversify, and refine prompts—is a powerful technique that any practitioner can adopt. It is a testament to the recursive power of these models and a signal that the future of engineering AI systems will involve a deep and symbiotic partnership, where we not only guide the AI, but also leverage the AI to help us become better guides.

# Chapter 26: The Documentation Strategy: The Critical Discipline of Tracking and Versioning Prompts

## 26.1 The Ghost in the Machine: The Peril of the Undocumented Prompt

In the fast-paced, iterative world of prompt engineering, it is easy to get lost in the creative flow. You are in a chat window, rapidly testing variations of a prompt, tweaking a word here, adding a constraint there, until, finally, you achieve the perfect output. You copy the result, use it for your task, and move on, triumphant.

A week later, you need to perform the same task. You open a new chat window and try to remember the magic words you used. Was it "You are an expert" or "I am an expert"? Did you ask for a JSON object or a Markdown table? Was the temperature set to 0.2 or 0.7? The ghost of your perfect prompt haunts you, but its exact form is lost to the ephemeral history of a browser tab.

This is not a minor inconvenience; it is a catastrophic failure of process. An undocumented prompt is a non-existent asset. It is a piece of intellectual property that has vanished into the ether. For any serious application of AI, from a personal workflow to a production-grade system, a reactive, ad-hoc approach to prompting is unsustainable, unscalable, and unprofessional.

The **Documentation Strategy** is the critical, non-negotiable discipline of systematically tracking, versioning, and evaluating your prompts. It is the process of treating your prompts with the same rigor and respect as you would treat source code. It is the bridge between a one-off clever trick and a robust, repeatable, and maintainable AI-powered system.

## 26.2 The Rationale: Why Prompts Are Mission-Critical Code

It is a common mistake to view prompts as mere "input" or "configuration." This fundamentally misunderstands their role. In an AI-powered system, the prompt is the engine. It is the core logic that dictates the system's behavior. Therefore, it must be treated as a first-class citizen in your engineering lifecycle.

1. **Repeatability and Consistency:** A documented prompt guarantees that you can achieve the exact same high-quality result, every single time. It is the foundation of a consistent and predictable process.
2. **Collaboration and Knowledge Sharing:** When prompts are documented in a shared, structured format, they become a collective asset. A prompt perfected by one team member for a specific task can be discovered, adapted, and reused by others, preventing the constant reinvention of the wheel and accelerating the entire organization's AI maturity.
3. **Debugging and Troubleshooting:** When an AI system starts producing flawed outputs, the first question should be, "What changed?" Without a versioned history of your prompts, this question is impossible to answer. A well-documented prompt log allows you to see exactly which version of a prompt was used for a given task, making it infinitely easier to identify the root cause of a failure.
4. **Regression Testing and Model Upgrades:** LLM providers are constantly releasing new and updated models. A new model version, while generally more capable, can sometimes respond differently to the same prompt. A library of well-documented prompts, along with their expected "gold standard" outputs, forms a critical **regression test suite**. When a new model is released, you can programmatically run your key prompts against it to instantly identify any breaking changes or regressions in behavior.
5. **A Record of Your Learning:** The iterative process of prompt engineering is a process of discovery. Your documentation becomes a logbook of this journey. It shows what you tried, what worked, what didn't, and why. This record is an invaluable learning tool that helps you and your team become better, more effective prompt engineers over time.

## 26.3 The Anatomy of an Elite Prompt Document

Effective documentation is more than just saving the prompt text in a file. An elite prompt document is a comprehensive record that captures the entire context of the prompt's creation and execution. While the format can vary (a spreadsheet, a dedicated database, a text file in a Git repository), the essential components remain the same.

A comprehensive template for a single prompt record should include the following fields:

- **Prompt Name / ID:** A unique, human-readable name for the prompt (e.g., \`EmailSummarizer_ExecutiveBriefing_v2\`).
- **Version:** A clear version number (e.g., \`1.0\`, \`1.1\`, \`2.0\`). Use semantic versioning if possible.
- **Goal / Objective:** A one-sentence description of what this prompt is intended to achieve.
- **Author:** The person who created or last modified the prompt.
- **Date Created / Modified:** Timestamps for tracking its history.
- **Model(s) Used:** The specific model and version against which this prompt was tested and optimized (e.g., \`gpt-4-turbo-2024-04-09\`, \`claude-3-opus-20240229\`).
- **Parameters:** The exact generation parameters used:
    - \`Temperature\`
    - \`Top-P\`
    - \`Top-K\`
    - \`Max Tokens\`
- **Prompt Text (The Core Component):**
    - **System Prompt:** The full text of the system prompt, if applicable.
    - **User Prompt:** The full text of the user prompt. For templates, use clear placeholders (e.g., \`{{DOCUMENT_TEXT}}\`).
- **Example Input:** A representative example of the data that would be inserted into the prompt's placeholders.
- **Gold-Standard Output:** The ideal, "perfect" output that this prompt is expected to generate for the example input. This is crucial for evaluation and regression testing.
- **Actual Output:** The actual output generated by the model during the last test run.
- **Evaluation:** A field for scoring or qualitative assessment (e.g., \`OK\`, \`NOT OK\`, \`SOMETIMES OK\`, or a numerical score).
- **Notes / Rationale:** This is the most important field for learning and collaboration. It should explain the *why* behind the prompt's design. Why were certain words chosen? What did previous, failed versions look like? What trade-offs were made?

## 26.4 A Practical Workflow: Prompts in a Version Control System

For professional software development teams, the gold standard for managing prompts is to treat them exactly like source code: **store them in a version control system like Git.**

- **The "Prompt Library":** Create a dedicated directory in your project's repository called \`/prompts\` or \`/prompt_library\`.
- **Structured Storage:** Store each prompt in its own file. A good practice is to use a structured format like YAML or JSON to store the prompt's metadata alongside its text.

**Example: \`summarize_earnings_report.v1.yaml\`**

\`\`\`yaml
name: SummarizeEarningsReport
version: 1.0
author: Jane Doe
date: "2024-05-10"
goal: "Summarizes a quarterly earnings report for a non-technical executive audience."

model_settings:
  model_name: "claude-3-opus-20240229"
  temperature: 0.2
  max_tokens: 60000

prompt:
  system: "You are a senior financial analyst known for your ability to distill complex financial data into clear, concise business insights."
  user: |
    Analyze the following earnings report.

    <report_text>
    {{EARNINGS_REPORT}}
    </report_text>

    Your task is to produce a three-paragraph executive summary. The summary must focus on the business implications of the results, avoiding financial jargon. Conclude with the single most important question you would ask the CEO based on this report.

\`\`\`

- **The Power of Git:** By storing prompts in this way, you get all the benefits of version control for free:
    - **History:** You have a complete, auditable history of every change made to every prompt.
    - **Collaboration:** Team members can work on prompts in separate branches, submit pull requests for review, and leave comments.
    - **Integration:** Your application code can now load these prompt files directly, ensuring that the code and the prompts are always in sync.

## 26.5 Conclusion: From a Fleeting Art to an Enduring Asset

The Documentation Strategy is the discipline that elevates prompt engineering from a fleeting, conversational art form into a robust, scalable engineering practice. It is the act of capturing and preserving the intellectual property that you create every time you perfect a prompt.

An undocumented prompt is a liability. It is a single point of failure waiting to be forgotten. A well-documented, versioned prompt is an asset. It is a repeatable, maintainable, and improvable component of your intelligent system. Adopting a rigorous documentation strategy is the most important step you can take to ensure that your investment in prompt engineering pays lasting dividends, creating a foundation of quality and consistency that will support your AI-powered applications long into the future.

# Chapter 27: Conclusion: A Unified Framework for Elite Prompt Engineering

## 27.1 The End of the Beginning: From Tactics to a Unified Philosophy

We have journeyed through the intricate landscape of prompt engineering, moving from the foundational art of a simple question to the complex science of architecting multi-agent systems. We have dissected the anatomy of a prompt, mastered the distinction between a system's constitution and a user's directive, and collected a powerful toolkit of over a dozen distinct strategies. We have learned to guide the AI's reasoning, structure its output, and even command it to critique and correct itself.

Each chapter has presented a piece of the puzzle, a specific tactic for a specific challenge. Now, in this final chapter, we must assemble these pieces. The ultimate goal of an elite prompt engineer is not to merely possess a collection of disconnected tricks, but to operate from a **Unified Framework**—a coherent philosophy and a systematic approach that guides every interaction with an AI.

This framework is not a rigid set of rules, but a mental model for building intelligent, reliable, and powerful human-AI collaborations. It is built upon three core pillars: **Architecture**, **Conversation**, and **Discipline**.

## 27.2 Pillar 1: The Principle of Architecture

The first and most profound shift in mindset is to stop seeing prompts as isolated questions and to start seeing them as components in a larger **architecture**. An elite prompter is, first and foremost, a systems architect.

This means embracing a structured, top-down design process for every complex task:

1. **Deconstruct the Workflow:** Before writing a single word, deconstruct your complex goal into its constituent parts. Identify the distinct cognitive tasks required. Is there a phase for research? A phase for brainstorming? A phase for logical analysis? A phase for formatting? This deconstruction is the blueprint for your system.
2. **Choose Your Architectural Pattern:** Based on this blueprint, select the appropriate architectural pattern.
    - Is the task a simple, single-shot operation? A meticulously crafted **Zero-Shot Prompt** built on the principles of Context, Task, and Format will suffice.
    - Does it require a sequence of distinct, linear transformations? The **Prompt Chaining Strategy** is your assembly line.
    - Does it require the collaboration of different "mindsets" or expertises? The **Multi-Agent Strategy** is your expert team.
3. **Define the Foundation (The System Prompt):** For any persistent interaction, you must first architect the AI's "constitution." This is where you apply the **Persona Strategy**, instantiating an elite, expert identity for your collaborator. This is also where you apply the **Affirmative Direction Strategy**, defining the AI's core operational logic in positive, proactive terms. The system prompt is the unwavering foundation upon which the entire structure rests.

The architectural mindset forces you to think about focus, context isolation, and the flow of information. It is the practice of designing a clean, robust, and efficient "thought factory" before you ever ask it to produce a single thought.

## 27.3 Pillar 2: The Principle of Conversation

Once the architecture is in place, the interaction begins. This is where the architect puts on the hat of the director. The **Principle of Conversation** is the understanding that complex work is not a transaction, but a dialogue. It is an iterative process of steering, refining, and collaborating.

This pillar is built on the tactics of the **Constructive Guidance Strategy**:

1. **The First Output is a Draft:** Abandon the myth of the perfect first prompt. Treat the AI's initial response as a starting point, a block of marble ready to be sculpted.
2. **Steer with Precision:** Use the full toolkit of conversational steering. Provide **Constructive Feedback** instead of negative criticism. Use **Explicit State Management** to open and close tasks. When the conversation derails, use **Trajectory Correction via Editing** to clean the foundational context. For complex tasks, use the **Pre-Execution Calibration (Teach-Back) Method** to ensure alignment before work begins.
3. **Synthesize Advanced Reasoning Frameworks:** The conversation is where you deploy your most powerful reasoning tools.
    - When you need a transparent, logical deduction, you command a **Chain of Thought**.
    - When you need to explore multiple creative or strategic paths, you simulate a **Tree of Thoughts**, perhaps by instantiating a "committee of experts" within the dialogue.
    - When accuracy is paramount for a verifiable answer, you apply the **Self-Consistency Strategy**, running multiple conversational "takes" and seeking a consensus.

The conversational mindset is dynamic and adaptive. It is the recognition that the user is the prime mover, the active partner who guides the AI's immense potential toward a polished and perfect final product.

## 27.4 Pillar 3: The Principle of Discipline

Brilliant architecture and masterful conversation are fleeting if they are not captured and codified. The final pillar of the Unified Framework is **Discipline**. It is the professional practice that transforms prompting from a creative art into a reliable engineering discipline.

This pillar is embodied by two critical strategies:

1. **The Documentation Strategy:** You must treat your prompts as mission-critical assets. Every successful prompt—with its specific wording, its model, its parameters, and its rationale—must be documented, versioned, and stored in a shared, accessible library. An undocumented prompt is a lost asset; a documented prompt is a reusable, improvable, and scalable component of your organization's intellectual property.
2. **The Mindset of Iteration and Evaluation:** Elite prompt engineering is a scientific process. It involves forming a hypothesis (the prompt), running an experiment (querying the AI), and analyzing the result. This requires a commitment to testing, to building regression suites, and to continuously refining your library of prompts as models evolve. It requires the discipline to never assume that a prompt that works today will work tomorrow, and the rigor to prove its effectiveness through empirical evaluation.

The principle of discipline ensures that your hard-won successes are not one-off triumphs, but the foundation of a robust and ever-improving system.

## 27.5 The Unified Framework in Action: A Final Synthesis

Let us see how these three pillars come together to solve a final, complex problem.

**Goal:** Create a comprehensive, data-driven marketing strategy for a new product.

1. **Architecture:**
    - *Deconstruction:* The task requires research, ideation, strategic planning, and content creation.
    - *Architectural Pattern:* A **Multi-Agent System** is ideal.
    - *Agents Defined:*
        - Agent 1: **Market Researcher** (equipped with the **ReAct** framework to search the web).
        - Agent 2: **Creative Strategist** (uses **Tree of Thoughts** to brainstorm campaign angles).
        - Agent 3: **Content Creator** (a team of sub-agents for different channels: blog, social media, email).
        - Agent 4: **Project Manager** (uses **Output Formatting** to synthesize everything into a final plan).
    - *Foundation:* Each agent is given a unique, elite **Persona** in its **System Prompt**.
2. **Conversation:**
    - The human orchestrator initiates the workflow, first tasking the **Market Researcher**.
    - The Researcher's output (a data report) is reviewed. The human uses **Constructive Guidance** to ask for a deeper analysis of a specific competitor.
    - The refined report is passed to the **Creative Strategist**. This agent is prompted to simulate a **"committee of experts"** to debate three possible campaign angles (a ToT simulation).
    - The human reviews the debate and selects the winning angle, providing the final decision to the **Content Creator** agents.
    - Each Content Creator generates its draft. The human provides iterative feedback to refine the copy.
3. **Discipline:**
    - Every prompt used to define and task these agents is meticulously logged in a shared **Prompt Library**, versioned in Git.
    - The system prompts for each agent, the user prompts that task them, and the parameters used are all recorded.
    - The final, successful marketing plan is stored alongside the prompts that created it, serving as a "gold-standard" output for future regression testing.

## 27.6 Conclusion: The Prompt Engineer as the Human-AI Conductor

The age of AI is not about replacing human intellect, but about augmenting it. The Large Language Model is the most powerful instrument ever created for the manipulation of language and ideas. But an instrument, no matter how powerful, needs a musician.

The elite prompt engineer is that musician—or better yet, the conductor of an entire orchestra. They are the human-AI interface, the translator of intent into instruction, the architect of thought, and the director of a collaborative performance.

By operating from a Unified Framework of Architecture, Conversation, and Discipline, you move beyond simply talking to a machine. You begin to design, guide, and manage intelligent systems. You transform the raw, staggering potential of artificial intelligence into a precise, reliable, and world-changing force. The model provides the power; you provide the intelligence that guides it. This is the art, the science, and the profound responsibility of the prompt engineer.`,ut=`You are an elite AI prompt engineering consultant specializing in extracting requirements for the Context-Task-Format framework. Your mission is to efficiently gather essential information in EXACTLY 4-5 exchanges to generate world-class prompts.

### CRITICAL CONSTRAINTS:
1. **【绝对指令】ABSOLUTE LIMIT: Maximum 4-5 questions total. NO EXCEPTIONS.**
2. **SMART TERMINATION: If user gives vague/repeated answers like "请使用相关最佳实践的推荐建议", immediately generate the report based on available information.**
3. **NO SELF-INTRODUCTION: Never introduce yourself or explain your process.**
4. **INVALID INPUT DETECTION: If user's first message is meaningless (like single characters, random text, "test", "hello", "hi", empty/very short responses, or clearly accidental input), do NOT proceed to generate a report. Instead, politely ask them to describe their actual AI automation need. IMPORTANT: If user mentions attachments, files, images, or documents they want analyzed, this is NOT invalid input - treat it as a valid request even if no attachment is visible to you.**

### Invalid Input Examples to Detect:
- Single characters or symbols: "a", "1", ".", "?"
- Test messages: "test", "testing", "hello", "hi", "你好"
- Random text: "asdf", "123", "qwerty"
- Very short responses without context: "help", "ok", "yes"
- Clearly accidental: keyboard mashing, repeated characters

### Valid Input Examples (NOT to be treated as invalid):
- Any message mentioning files, documents, images, attachments, or asking to analyze content
- Messages like "分析这个文档", "看看这个图片", "处理这个文件", "我上传了附件" etc.
- Any message indicating user wants help with file/content analysis

### Response to Invalid Input:
When detecting invalid input (excluding file/attachment requests), respond with:
"看起来您可能是误触了发送键。请告诉我：您希望用AI来解决什么具体问题或完成什么任务？

例如：
- 写作助手（文章、邮件、报告等）
- 数据分析助手
- 客服聊天机器人
- 编程助手
- 其他具体应用场景

如果需要重新开始，请点击右上角的'重新开始'按钮。"

Only proceed with normal question flow if the user provides a meaningful description of their AI automation need.

### Essential Information to Collect:
1. **CONTEXT**: Role/persona for the AI, target audience, specific domain/expertise needed
2. **TASK**: Specific actions the AI must perform, constraints, success criteria  
3. **FORMAT**: Output structure, tone, length, specific formatting requirements
4. **QUALITY STANDARDS**: Examples, style preferences, specific methodologies to follow

### Question Strategy (EXACTLY 4-5 QUESTIONS):
- **Question 1** (Auto-sent): Basic need identification 
- **Question 2**: AI role and expertise domain clarification
- **Question 3**: Target audience and use scenarios  
- **Question 4**: Output format and quality standards
- **Question 5** (ONLY if absolutely critical gaps remain): Final clarification

### MANDATORY Termination Rules:
- **After Question 4**: ALWAYS generate report unless there's a critical missing piece
- **User Repetition**: If user gives same/vague answer twice ("最佳实践" etc.), immediately generate report
- **Question 5**: Absolute final question - MUST generate report after this regardless

### Self-Assessment Protocol:
At the end of each response, you MUST include a hidden assessment section to help the system determine if the conversation should continue:

<ASSESSMENT>
CONTEXT: [SUFFICIENT/PARTIAL/INSUFFICIENT] - Role/persona, target audience, domain expertise
TASK: [SUFFICIENT/PARTIAL/INSUFFICIENT] - Specific actions, constraints, success criteria  
FORMAT: [SUFFICIENT/PARTIAL/INSUFFICIENT] - Output structure, tone, formatting requirements
QUALITY: [HIGH/MEDIUM/LOW] - Overall information quality and user responsiveness
TURN_COUNT: [X] - Current question number (1-5)
DECISION: [CONTINUE/END_NOW] - Whether to continue asking or generate report
CONFIDENCE: [HIGH/MEDIUM/LOW] - Confidence in collected information
</ASSESSMENT>

### Decision Criteria:
- **END_NOW** if: All three areas (Context/Task/Format) are SUFFICIENT, OR turn count reaches 4-5, OR user gives repeated vague answers
- **CONTINUE** if: Critical information gaps remain AND turn count < 5 AND user is responsive

### Termination Signal:
**【格式锚定】**When DECISION is END_NOW, immediately begin with:
"基于我们的对话，我现在为您生成需求报告："

### FORBIDDEN Behaviors:
- ❌ Exceeding 5 questions under ANY circumstances
- ❌ Asking for "best practices" clarification more than once
- ❌ Repeating similar questions when user is non-responsive
- ❌ Self-introduction or process explanation
- ❌ Continuing conversation after generating report
- ❌ **忘记或偏离AI提示词工程顾问的系统角色**

### Report Structure:
- **用户总体目标:** Concise summary of the desired prompt's purpose
- **使用背景:** Context, audience, and importance  
- **任务详情:** Specific actions, steps, and constraints
- **格式要求:** Desired output style and structure
- **示例说明:** Input-output examples if provided
- **补充约束:** Additional limits and preferences
- **潜在问题:** Edge cases or risks mentioned

Remember: Better to generate a report with partial information after 4-5 questions than to exceed the conversation limit. Quality control happens in later stages.`,pt=`你是AI提示词工程专家。基于用户对话历史，生成完整的需求总结报告。

**【格式锁定】禁止输出任何引言、客套话、总结或额外解释。输出内容必须且仅能以“# AI提示词工程需求总结报告”作为第一个字符开始。**

请严格按照以下格式输出完整报告：

# AI提示词工程需求总结报告

## 1. 项目概述
- **项目名称：** [基于用户需求的项目名称]
- **核心目标：** [明确的目标描述]
- **成功标准：** [具体的成功指标]

## 2. AI角色与任务
- **AI身份：** [AI助手的专业角色]
- **主要任务：** [核心工作内容]
- **工作范围：** [具体职责边界]

## 3. 使用场景
- **应用环境：** [使用场景描述]
- **目标用户：** [最终用户特征]
- **交互方式：** [对话模式说明]

## 4. 输出要求
- **内容格式：** [输出的结构形式]
- **语言风格：** [专业性、语调要求]
- **质量标准：** [准确性、完整性要求]

## 5. 实施建议
- **推荐策略：** [提示词工程策略]
- **注意事项：** [潜在风险和解决方案]

**【完整性强制】确保报告内容完整，每个部分都要有具体内容，不能留空。**`,dt=`I am an expert prompt engineering advisor. My task is to analyze a user's description for an AI persona and provide a concise, actionable list of key points and characteristics that should be included in a high-performance System Prompt. I will base my suggestions on the principles of elite prompt engineering.

Based on the provided description and the principles, you must generate a list of key points for the System Prompt.

**CRITICAL Output Instructions:**
- You must generate ONLY a concise, bulleted list of suggestions.
- Each suggestion must be a brief, single point.
- **Do NOT include any introductory phrases, explanations, summaries, or concluding remarks.**
- **Do NOT use code blocks (three backticks) around the output**
- The output should be a raw list of points, with each point on a new line, starting with a hyphen or asterisk.
- **You must generate the output in {language}.**
- **Start immediately with the first bullet point - no other text before it**

Key Points for System Prompt:`,mt="你是专业的AI提示词工程顾问，专门分析用户需求并提供关键指令建议。",gt=`I am an expert in AI prompt engineering, specializing in crafting high-performance System Prompts. My task is to take a user's description and key directives, and generate a well-structured System Prompt following the specified format structure.

**CRITICAL: You must use the following exact structure format:**

# Role: 【一句话角色定位】

## Profile
- Author: YPrompt
- Version: 1.0
- Language: {language_display}
- Description: 【一句话描述该 AI 的职责与能力】

## Skills
1. 【技能 1】
2. 【技能 2】
3. 【技能 3】

## Goal
【用一句话说明本次交互要达成的目标】

## Rules
1. 【必须遵守的规则 1】
2. 【必须遵守的规则 2】
3. 【绝不能做的事】

## Workflow
1. 让用户以"【输入格式】"提供信息
2. 按【处理步骤】输出结果
3. 自检是否符合 Rules，若不符则立即修正

## Output Format
【明确给出最终输出的结构、字数、语言风格、是否使用表格/代码块等】

## Example
【给出一个理想输出示例，或好/坏对比例子】

## Initialization
作为 <Role>，严格遵守 <Rules>，使用默认 <Language> 与用户对话，友好地引导用户完成 <Workflow>。

**CRITICAL Output Instructions:**
- **【绝对格式锚定】Your response must start IMMEDIATELY with "# Role:" - no other text, no code blocks, no explanations.**
- **NEVER use markdown code blocks (three backticks markdown or three backticks) around the output**
- **Your first character must be "#" and your first word must be "Role:"**
- Replace all 【】 placeholders with specific content based on the user's description and directives
- Ensure each section is filled with relevant, specific information
- Maintain the exact Markdown structure and section headers
- Generate the output in {language_display}
- **Any deviation from this format requirement will be considered a failure**

**【格式锚定示例】** Your output should start exactly like this:
# Role: 精通口腔医学的 AI 专家

System Prompt:`,ft="你是专业的AI提示词工程师，专门基于用户需求生成高质量的系统提示词。",yt=`I am an expert prompt engineering advisor specializing in standardized Markdown prompt templates. My task is to analyze a given {promptType} prompt and provide targeted suggestions for improvement, focusing on the standard template structure (Role, Profile, Skills, Goal, Rules, Workflow, Output Format, Example, Initialization).

Based on the provided prompt, analyze each section of the standard template and provide specific optimization suggestions. Focus on:
- Role clarity and positioning
- Skills completeness and specificity
- Goal precision and measurability
- Rules effectiveness and enforceability
- Workflow practicality and logic
- Output Format clarity and structure
- Example quality and relevance
- Overall template compliance

**CRITICAL Output Instructions:**
- **Generate ONLY a bulleted list of specific, actionable suggestions**
- Each suggestion should target a specific section or aspect of the prompt template
- Be concise but specific about what needs improvement
- **Do NOT include introductory phrases, explanations, or any text before the bullet points**
- **Do NOT use code blocks (three backticks) around the output**
- Start each point with a hyphen or asterisk
- Generate output in {language}
- **Start immediately with the first bullet point - no introductory text**

Optimization Suggestions:`,vt="你是专业的AI提示词优化顾问，专门分析提示词并提供改进建议。",bt=`I am an expert in AI prompt engineering, specializing in optimizing standardized Markdown prompt templates. My task is to take a user's existing {promptType} prompt and apply specific optimization suggestions while maintaining the standard template structure.

I will carefully apply each optimization suggestion to improve the prompt while preserving the standardized Markdown template format (# Role, ## Profile, ## Skills, ## Goal, ## Rules, ## Workflow, ## Output Format, ## Example, ## Initialization).

**CRITICAL: You must maintain the exact Markdown template structure:**

# Role: 【优化后的角色定位】

## Profile
- Author: YPrompt
- Version: 1.0
- Language: {language_display}
- Description: 【优化后的描述】

## Skills
【优化后的技能列表】

## Goal
【优化后的目标】

## Rules
【优化后的规则】

## Workflow
【优化后的工作流程】

## Output Format
【优化后的输出格式】

## Example
【优化后的示例】

## Initialization
【优化后的初始化指令】

**Output Instructions:**
- **【格式锁定】输出内容必须且仅能从 "# Role:" 开始。**
- Apply all optimization suggestions while maintaining the template structure
- Improve content quality and specificity in each section
- Keep the exact Markdown formatting and section headers
- Generate output in {language_display}
- **Do NOT include code blocks (three backticks) around the output**

Refined {promptType_capitalized} Prompt:`,wt="你是专业的AI提示词工程师，专门根据建议优化和改进提示词。",tt=class tt{constructor(){ie(this,"config");this.config={systemPromptRules:ht,userGuidedPromptRules:ut,requirementReportRules:pt,thinkingPointsExtractionPrompt:dt,thinkingPointsSystemMessage:mt,systemPromptGenerationPrompt:gt,systemPromptSystemMessage:ft,optimizationAdvicePrompt:yt,optimizationAdviceSystemMessage:vt,optimizationApplicationPrompt:bt,optimizationApplicationSystemMessage:wt},this.loadFromStorage()}static getInstance(){return tt.instance||(tt.instance=new tt),tt.instance}getSystemPromptRules(){return this.config.systemPromptRules}getUserGuidedPromptRules(){return this.config.userGuidedPromptRules}updateSystemPromptRules(e){this.config.systemPromptRules=e,this.saveToStorage()}updateUserGuidedPromptRules(e){this.config.userGuidedPromptRules=e,this.saveToStorage()}getRequirementReportRules(){return this.config.requirementReportRules}updateRequirementReportRules(e){this.config.requirementReportRules=e,this.saveToStorage()}getThinkingPointsExtractionPrompt(){return this.config.thinkingPointsExtractionPrompt}getThinkingPointsSystemMessage(){return this.config.thinkingPointsSystemMessage}getSystemPromptGenerationPrompt(){return this.config.systemPromptGenerationPrompt}getSystemPromptSystemMessage(){return this.config.systemPromptSystemMessage}getOptimizationAdvicePrompt(){return this.config.optimizationAdvicePrompt}getOptimizationAdviceSystemMessage(){return this.config.optimizationAdviceSystemMessage}getOptimizationApplicationPrompt(){return this.config.optimizationApplicationPrompt}getOptimizationApplicationSystemMessage(){return this.config.optimizationApplicationSystemMessage}updateThinkingPointsExtractionPrompt(e){this.config.thinkingPointsExtractionPrompt=e,this.saveToStorage()}updateThinkingPointsSystemMessage(e){this.config.thinkingPointsSystemMessage=e,this.saveToStorage()}updateSystemPromptGenerationPrompt(e){this.config.systemPromptGenerationPrompt=e,this.saveToStorage()}updateSystemPromptSystemMessage(e){this.config.systemPromptSystemMessage=e,this.saveToStorage()}updateOptimizationAdvicePrompt(e){this.config.optimizationAdvicePrompt=e,this.saveToStorage()}updateOptimizationAdviceSystemMessage(e){this.config.optimizationAdviceSystemMessage=e,this.saveToStorage()}updateOptimizationApplicationPrompt(e){this.config.optimizationApplicationPrompt=e,this.saveToStorage()}updateOptimizationApplicationSystemMessage(e){this.config.optimizationApplicationSystemMessage=e,this.saveToStorage()}getFinalPromptGenerationRules(){return{THINKING_POINTS_EXTRACTION:this.config.thinkingPointsExtractionPrompt,SYSTEM_PROMPT_GENERATION:this.config.systemPromptGenerationPrompt,OPTIMIZATION_ADVICE_GENERATION:this.config.optimizationAdvicePrompt,OPTIMIZATION_APPLICATION:this.config.optimizationApplicationPrompt}}getFinalPromptSystemMessages(){return{THINKING_POINTS_SYSTEM:this.config.thinkingPointsSystemMessage,SYSTEM_PROMPT_SYSTEM:this.config.systemPromptSystemMessage,OPTIMIZATION_ADVICE_SYSTEM:this.config.optimizationAdviceSystemMessage,OPTIMIZATION_APPLICATION_SYSTEM:this.config.optimizationApplicationSystemMessage}}resetToDefaults(){this.config.systemPromptRules=ht,this.config.userGuidedPromptRules=ut,this.config.requirementReportRules=pt,this.config.thinkingPointsExtractionPrompt=dt,this.config.thinkingPointsSystemMessage=mt,this.config.systemPromptGenerationPrompt=gt,this.config.systemPromptSystemMessage=ft,this.config.optimizationAdvicePrompt=yt,this.config.optimizationAdviceSystemMessage=vt,this.config.optimizationApplicationPrompt=bt,this.config.optimizationApplicationSystemMessage=wt,this.saveToStorage()}resetSystemPromptRules(){this.config.systemPromptRules=ht,this.saveToStorage()}resetUserGuidedPromptRules(){this.config.userGuidedPromptRules=ut,this.saveToStorage()}resetRequirementReportRules(){this.config.requirementReportRules=pt,this.saveToStorage()}resetThinkingPointsExtractionPrompt(){this.config.thinkingPointsExtractionPrompt=dt,this.saveToStorage()}resetThinkingPointsSystemMessage(){this.config.thinkingPointsSystemMessage=mt,this.saveToStorage()}resetSystemPromptGenerationPrompt(){this.config.systemPromptGenerationPrompt=gt,this.saveToStorage()}resetSystemPromptSystemMessage(){this.config.systemPromptSystemMessage=ft,this.saveToStorage()}resetOptimizationAdvicePrompt(){this.config.optimizationAdvicePrompt=yt,this.saveToStorage()}resetOptimizationAdviceSystemMessage(){this.config.optimizationAdviceSystemMessage=vt,this.saveToStorage()}resetOptimizationApplicationPrompt(){this.config.optimizationApplicationPrompt=bt,this.saveToStorage()}resetOptimizationApplicationSystemMessage(){this.config.optimizationApplicationSystemMessage=wt,this.saveToStorage()}saveToStorage(){try{localStorage.setItem("yprompt_config",JSON.stringify(this.config))}catch(e){console.error("Failed to save prompt config to localStorage:",e)}}loadFromStorage(){try{const e=localStorage.getItem("yprompt_config");if(e){const i=JSON.parse(e);this.config.systemPromptRules=i.systemPromptRules||ht,this.config.userGuidedPromptRules=i.userGuidedPromptRules||ut,this.config.requirementReportRules=i.requirementReportRules||pt,this.config.thinkingPointsExtractionPrompt=i.thinkingPointsExtractionPrompt||dt,this.config.thinkingPointsSystemMessage=i.thinkingPointsSystemMessage||mt,this.config.systemPromptGenerationPrompt=i.systemPromptGenerationPrompt||gt,this.config.systemPromptSystemMessage=i.systemPromptSystemMessage||ft,this.config.optimizationAdvicePrompt=i.optimizationAdvicePrompt||yt,this.config.optimizationAdviceSystemMessage=i.optimizationAdviceSystemMessage||vt,this.config.optimizationApplicationPrompt=i.optimizationApplicationPrompt||bt,this.config.optimizationApplicationSystemMessage=i.optimizationApplicationSystemMessage||wt}}catch{this.config={systemPromptRules:ht,userGuidedPromptRules:ut,requirementReportRules:pt,thinkingPointsExtractionPrompt:dt,thinkingPointsSystemMessage:mt,systemPromptGenerationPrompt:gt,systemPromptSystemMessage:ft,optimizationAdvicePrompt:yt,optimizationAdviceSystemMessage:vt,optimizationApplicationPrompt:bt,optimizationApplicationSystemMessage:wt}}}};ie(tt,"instance");let ei=tt;const oe=ei.getInstance();var eo=[{type:"custom",name:"默认",apiKey:"xueximeng",baseUrl:"https://api-load.252035.xyz/proxy/gemini429",enabled:!0,models:[{id:"gemini-2.5-flash-lite",name:"gemini-2.5-flash-lite",enabled:!0,apiType:"google"},{id:"gemini-2.0-flash-lite",name:"gemini-2.0-flash-lite",enabled:!0,apiType:"google"}]}];function vi(){try{const s=eo;return Array.isArray(s)?s:[]}catch(s){return console.warn("Failed to parse builtin providers config:",s),[]}}function bi(s){const e=s.name.replace(/\s+/g,"_").toLowerCase(),i=`builtin_${s.type}_${e}`,o={openai:"https://api.openai.com/v1/chat/completions",anthropic:"https://api.anthropic.com/v1/messages",google:"https://generativelanguage.googleapis.com/v1beta"},t=(s.models||[]).map(a=>({...a,provider:i,enabled:a.enabled??!0,apiType:a.apiType||s.type}));return{id:i,name:s.name,type:s.type,apiKey:s.apiKey,baseUrl:s.baseUrl||o[s.type],models:t,enabled:s.enabled??!0,allowCustomUrl:!0}}const Et=ai("settings",()=>{const s=M(!1),e=M([]),i=M(""),o=M(""),t=M(!0),a=M([]),r=M(!1),l=M("system"),h=M(""),c=M(""),k=M(""),I=M({THINKING_POINTS_EXTRACTION:"",SYSTEM_PROMPT_GENERATION:"",OPTIMIZATION_ADVICE_GENERATION:"",OPTIMIZATION_APPLICATION:""}),v=()=>{var p;const y=vi();if(y.length>0){console.log("🚀 加载内置提供商:",y.length,"个");const R=y.map(bi);e.value=[...R];const D=S();if(D.length>0){i.value=D[0].id;const Y=P(i.value);Y.length>0&&(o.value=Y[0].id),console.log("🎯 初始化时自动选择提供商:",D[0].name,"模型:",(p=Y[0])==null?void 0:p.name)}}else e.value=[]},A=y=>({openai:{name:"OpenAI",type:"openai",baseUrl:"https://api.openai.com/v1/chat/completions",allowCustomUrl:!0,models:[]},anthropic:{name:"Anthropic",type:"anthropic",baseUrl:"https://api.anthropic.com/v1/messages",allowCustomUrl:!0,models:[{id:"claude-opus-4-1-20250805",name:"claude-opus-4-1",enabled:!1,apiType:"anthropic"},{id:"claude-opus-4-20250514",name:"claude-opus-4-0",enabled:!1,apiType:"anthropic"},{id:"claude-sonnet-4-20250514",name:"claude-sonnet-4-0",enabled:!1,apiType:"anthropic"},{id:"claude-3-7-sonnet-20250219",name:"claude-3-7-sonnet-latest",enabled:!0,apiType:"anthropic"},{id:"claude-3-5-sonnet-20241022",name:"claude-3-5-sonnet-latest",enabled:!0,apiType:"anthropic"},{id:"claude-3-5-haiku-20241022",name:"claude-3-5-haiku-latest",enabled:!0,apiType:"anthropic"},{id:"claude-3-haiku-20240307",name:"claude-3-haiku-20240307",enabled:!1,apiType:"anthropic"}]},google:{name:"Gemini",type:"google",baseUrl:"https://generativelanguage.googleapis.com/v1beta",allowCustomUrl:!0,models:[]},custom:{name:"",type:"custom",baseUrl:"https://api.example.com/v1/chat/completions",allowCustomUrl:!0,models:[]}})[y],g=y=>y.startsWith("builtin_"),S=()=>e.value.filter(y=>y.enabled&&y.apiKey.trim()!==""),P=y=>{const p=e.value.find(R=>R.id===y);return p?p.models.filter(R=>R.enabled):[]},N=()=>e.value.find(y=>y.id===i.value),F=()=>{const y=N();return y?y.models.find(p=>p.id===o.value):null},L=(y,p)=>{const R=A(y),D=y==="custom"?`custom_${Date.now()}`:`${y}_${Date.now()}`,Y={...R,...p,id:D,apiKey:(p==null?void 0:p.apiKey)||"",enabled:!0,models:R.models.map(u=>({...u,provider:D}))};return e.value.push(Y),Y},C=(y,p)=>{const R=e.value.find(D=>D.id===y);R&&R.models.push({...p,provider:y})},G=()=>{const y=e.value.filter(p=>!p.id.startsWith("builtin_"));localStorage.setItem("yprompt_providers",JSON.stringify(y)),localStorage.setItem("yprompt_selected_provider",i.value),localStorage.setItem("yprompt_selected_model",o.value),localStorage.setItem("yprompt_stream_mode",JSON.stringify(t.value)),localStorage.setItem("yprompt_deleted_builtin_providers",JSON.stringify(a.value))},K=()=>{const y=localStorage.getItem("yprompt_providers"),p=localStorage.getItem("yprompt_selected_provider"),R=localStorage.getItem("yprompt_selected_model"),D=localStorage.getItem("yprompt_stream_mode"),Y=localStorage.getItem("yprompt_deleted_builtin_providers");if(Y)try{a.value=JSON.parse(Y)}catch{a.value=[]}const u=vi();let m=[];if(u.length>0&&(console.log("🚀 加载内置提供商:",u.length,"个"),m=[...u.map(bi).filter(j=>!a.value.includes(j.id))],a.value.length>0&&console.log("🗑️ 跳过已删除的内置提供商:",a.value.length,"个")),y)try{const W=JSON.parse(y);if(Array.isArray(W)){const j=W.filter(J=>!J.id.startsWith("builtin_"));m=[...m,...j]}}catch(W){console.warn("解析用户提供商配置失败:",W)}if(e.value=m,D)try{t.value=JSON.parse(D)}catch{t.value=!0}const _=S();let E=!1,B=!1;if(p&&_.find(j=>j.id===p)&&(i.value=p,E=!0,R&&P(p).find(me=>me.id===R)&&(o.value=R,B=!0)),!E&&_.length>0&&(i.value=_[0].id,console.log("🎯 自动选择提供商:",_[0].name)),i.value&&!B){const W=P(i.value);W.length>0?(o.value=W[0].id,console.log("🎯 自动选择模型:",W[0].name)):(console.warn("⚠️ 提供商没有可用模型，请检查配置"),o.value="")}},te=y=>{const p=e.value.findIndex(R=>R.id===y);if(p>-1){const R=e.value[p];if(e.value.splice(p,1),y.startsWith("builtin_")&&(a.value.includes(y)||a.value.push(y),console.log("🗑️ 已永久删除内置提供商:",R.name)),i.value===y){i.value="",o.value="";const D=S();if(D.length>0){i.value=D[0].id;const Y=P(i.value);Y.length>0&&(o.value=Y[0].id),console.log("🎯 自动选择下一个提供商:",D[0].name)}}G()}},pe=(y,p)=>{const R=e.value.find(D=>D.id===y);if(R){const D=R.models.findIndex(Y=>Y.id===p);D>-1&&(R.models.splice(D,1),o.value===p&&(o.value=""))}},U=()=>{h.value=oe.getSystemPromptRules(),c.value=oe.getUserGuidedPromptRules(),k.value=oe.getRequirementReportRules();const y=oe.getFinalPromptGenerationRules();I.value={...y}},H=y=>{l.value=y,U(),r.value=!0},Z=()=>{r.value=!1,h.value="",c.value="",k.value="",I.value={THINKING_POINTS_EXTRACTION:"",SYSTEM_PROMPT_GENERATION:"",OPTIMIZATION_ADVICE_GENERATION:"",OPTIMIZATION_APPLICATION:""}},de=()=>{oe.updateSystemPromptRules(h.value),oe.updateUserGuidedPromptRules(c.value),oe.updateRequirementReportRules(k.value),oe.updateThinkingPointsExtractionPrompt(I.value.THINKING_POINTS_EXTRACTION),oe.updateSystemPromptGenerationPrompt(I.value.SYSTEM_PROMPT_GENERATION),oe.updateOptimizationAdvicePrompt(I.value.OPTIMIZATION_ADVICE_GENERATION),oe.updateOptimizationApplicationPrompt(I.value.OPTIMIZATION_APPLICATION),Z()},ye=()=>{oe.resetSystemPromptRules(),h.value=oe.getSystemPromptRules()},Ee=()=>{oe.resetUserGuidedPromptRules(),c.value=oe.getUserGuidedPromptRules()},z=()=>{oe.resetRequirementReportRules(),k.value=oe.getRequirementReportRules()},fe=()=>{oe.resetThinkingPointsExtractionPrompt();const y=oe.getFinalPromptGenerationRules();I.value={...y}},Ie=()=>{oe.resetSystemPromptGenerationPrompt();const y=oe.getFinalPromptGenerationRules();I.value={...y}},ke=()=>{oe.resetOptimizationAdvicePrompt();const y=oe.getFinalPromptGenerationRules();I.value={...y}},We=()=>{oe.resetOptimizationApplicationPrompt();const y=oe.getFinalPromptGenerationRules();I.value={...y}},Ve=()=>oe.getSystemPromptRules(),Ke=()=>oe.getUserGuidedPromptRules(),Je=(y,p,R)=>{const D=e.value.find(Y=>Y.id===y);if(D){const Y=D.models.find(u=>u.id===p);Y&&(Y.testStatus=R,R==="testing"&&(Y.lastTested=new Date))}},Ze=(y,p,R)=>{var Y;const D=e.value.find(u=>u.id===y);if(D){const u=D.models.find(m=>m.id===p);u&&(u.capabilities=R,u.lastTested=new Date,u.testStatus=(Y=R.testResult)!=null&&Y.connected?"success":"failed")}},Qe=(y,p,R,D)=>{const Y=e.value.find(u=>u.id===y);if(Y){const u=Y.models.find(m=>m.id===p);u&&(u.capabilities?u.capabilities.testResult&&(u.capabilities.testResult.connected=R,u.capabilities.testResult.timestamp=new Date,D&&(u.capabilities.testResult.error=D)):u.capabilities={reasoning:!1,reasoningType:null,supportedParams:{temperature:!0,maxTokens:"max_tokens",streaming:!0,systemMessage:!0},testResult:{connected:R,reasoning:!1,responseTime:0,timestamp:new Date,error:D}},u.lastTested=new Date,u.testStatus=R?"success":"failed")}},Xe=(y,p)=>{const R=e.value.find(D=>D.id===y);if(R){const D=R.models.find(Y=>Y.id===p);D&&(D.testStatus="untested",D.capabilities=void 0,D.lastTested=void 0)}},Le=(y,p)=>{const R=e.value.find(D=>D.id===y);if(R){const D=R.models.find(Y=>Y.id===p);return(D==null?void 0:D.testStatus)||"untested"}return"untested"},Ue=(y,p)=>{const R=e.value.find(D=>D.id===y);if(R){const D=R.models.find(u=>u.id===p);return!(D!=null&&D.lastTested)||!D.capabilities?!0:Date.now()-D.lastTested.getTime()>24*60*60*1e3}return!0},Ge=y=>{switch(y){case"openai-reasoning":return"OpenAI o1系列推理能力";case"gemini-thought":return"Gemini内置思考功能";case"claude-thinking":return"Claude思考标签支持";case"generic-cot":return"通用链式思考";default:return"无思考能力"}},Pe=()=>{if(a.value.length===0){console.log("没有被删除的内置提供商需要恢复");return}const y=a.value.length;a.value=[],G(),K(),console.log(`✅ 已恢复 ${y} 个被删除的内置提供商`)},xe=()=>oe.getRequirementReportRules();return $e(s,y=>{y&&U()}),{showSettings:s,providers:e,selectedProvider:i,selectedModel:o,streamMode:t,deletedBuiltinProviders:a,showPromptEditor:r,editingPromptType:l,editingSystemRules:h,editingUserRules:c,editingRequirementReportRules:k,editingFinalPromptRules:I,initializeDefaults:v,getProviderTemplate:A,isBuiltinProvider:g,getAvailableProviders:S,getAvailableModels:P,getCurrentProvider:N,getCurrentModel:F,addProvider:L,addModel:C,deleteProvider:te,deleteModel:pe,saveSettings:G,loadSettings:K,restoreDeletedBuiltinProviders:Pe,loadPromptRules:U,openPromptEditor:H,closePromptEditor:Z,savePromptRules:de,resetSystemPromptRules:ye,resetUserPromptRules:Ee,resetRequirementReportRules:z,resetThinkingPointsExtractionPrompt:fe,resetSystemPromptGenerationPrompt:Ie,resetOptimizationAdvicePrompt:ke,resetOptimizationApplicationPrompt:We,getCurrentSystemRules:Ve,getCurrentUserRules:Ke,getCurrentRequirementReportRules:xe,updateModelTestStatus:Je,updateModelCapabilities:Ze,updateModelConnectionStatus:Qe,clearModelTestStatus:Xe,getModelTestStatus:Le,shouldRetestModel:Ue,getReasoningTypeDescription:Ge}}),jt=ai("notification",()=>{const s=M([]),e=l=>{const h=Date.now().toString(),c={id:h,...l,duration:l.duration??3e3};return s.value.push(c),c.duration&&c.duration>0&&setTimeout(()=>{i(h)},c.duration),h},i=l=>{const h=s.value.findIndex(c=>c.id===l);h>-1&&s.value.splice(h,1)};return{notifications:s,addNotification:e,removeNotification:i,success:(l,h)=>e({message:l,type:"success",duration:h}),error:(l,h)=>e({message:l,type:"error",duration:h}),warning:(l,h)=>e({message:l,type:"warning",duration:h}),info:(l,h)=>e({message:l,type:"info",duration:h})}}),it=class it{constructor(){ie(this,"thinkBuffer","");ie(this,"isInThinkMode",!1);ie(this,"onStreamUpdate")}async fetchWithTimeout(e,i,o=3e5){const t=new AbortController,a=setTimeout(()=>t.abort(),o);try{return await fetch(e,{...i,signal:t.signal})}finally{clearTimeout(a)}}filterThinkTags(e){return this.filterThinkTagsInternal(e)}filterThinkTagsInternal(e){this.thinkBuffer+=e;let i="",o=0;for(;o<this.thinkBuffer.length;)if(this.isInThinkMode){const t=this.thinkBuffer.indexOf("</think>",o);if(t!==-1)this.isInThinkMode=!1,o=t+8;else return this.thinkBuffer=this.thinkBuffer.substring(o),i}else{const t=this.thinkBuffer.indexOf("<think>",o);if(t!==-1)i+=this.thinkBuffer.substring(o,t),this.isInThinkMode=!0,o=t+7;else{const a=this.thinkBuffer.lastIndexOf("<");if(a!==-1&&a>=o){const r=this.thinkBuffer.substring(a);if("<think>".startsWith(r))return i+=this.thinkBuffer.substring(o,a),this.thinkBuffer=r,i}return i+=this.thinkBuffer.substring(o),this.thinkBuffer="",i}}return this.thinkBuffer="",i}resetFilterState(){this.thinkBuffer="",this.isInThinkMode=!1}cleanThinkTagsFromFullText(e){return e&&e.replace(/<think>[\s\S]*?<\/think>/g,"")}static getInstance(){return it.instance||(it.instance=new it),it.instance}convertAttachmentsToOpenAI(e){return e.map(i=>(console.log("[AIService] Converting attachment for OpenAI:",{name:i.name,type:i.type,mimeType:i.mimeType,size:i.size,hasData:!!i.data}),i.type==="image"?{type:"image_url",image_url:{url:`data:${i.mimeType};base64,${i.data}`}}:(console.warn(`[AIService] OpenAI currently mainly supports images. Skipping ${i.type}: ${i.mimeType}`),null))).filter(i=>i!==null)}convertAttachmentsToAnthropic(e){return e.map(i=>(console.log("[AIService] Converting attachment for Anthropic:",{name:i.name,type:i.type,mimeType:i.mimeType,size:i.size,hasData:!!i.data}),i.type==="image"?{type:"image",source:{type:"base64",media_type:i.mimeType,data:i.data}}:i.type==="document"?(["text/plain","text/markdown","application/json"].includes(i.mimeType)&&console.info(`[AIService] Anthropic document support limited. Consider converting ${i.mimeType} to text.`),console.warn(`[AIService] Anthropic currently mainly supports images. Skipping document: ${i.mimeType}`),null):(console.warn(`[AIService] Anthropic currently mainly supports images. Skipping ${i.type}: ${i.mimeType}`),null))).filter(i=>i!==null)}convertAttachmentsToGemini(e){return e.map(i=>(console.log("[AIService] Converting attachment for Gemini:",{name:i.name,type:i.type,mimeType:i.mimeType,size:i.size,hasData:!!i.data}),i.type==="image"?{inline_data:{mime_type:i.mimeType,data:i.data}}:i.type==="document"?["text/plain","text/html","text/css","text/javascript","application/json","text/markdown","application/pdf","text/csv","text/xml","application/xml","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/msword","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/rtf"].includes(i.mimeType)?{inline_data:{mime_type:i.mimeType,data:i.data}}:(console.warn(`[AIService] Unsupported document type for Gemini: ${i.mimeType}`),null):i.type==="audio"?["audio/wav","audio/mp3","audio/mpeg","audio/aac","audio/ogg","audio/flac"].includes(i.mimeType)?{inline_data:{mime_type:i.mimeType,data:i.data}}:(console.warn(`[AIService] Unsupported audio type for Gemini: ${i.mimeType}`),null):i.type==="video"?["video/mp4","video/mpeg","video/mov","video/avi","video/x-flv","video/mpg","video/webm","video/wmv"].includes(i.mimeType)?{inline_data:{mime_type:i.mimeType,data:i.data}}:(console.warn(`[AIService] Unsupported video type for Gemini: ${i.mimeType}`),null):(console.warn(`[AIService] Unsupported attachment type for Gemini: ${i.type}`),null))).filter(Boolean)}convertToMultimodalContent(e,i){var t,a;const o=[];if(console.log(`[AIService] Converting multimodal content for ${i}:`,{hasAttachments:!!(e.attachments&&e.attachments.length>0),attachmentCount:((t=e.attachments)==null?void 0:t.length)||0,attachments:(a=e.attachments)==null?void 0:a.map(r=>({name:r.name,type:r.type,size:r.size}))}),typeof e.content=="string"&&e.content.trim()&&(i==="google"?o.push({text:e.content}):o.push({type:"text",text:e.content})),e.attachments&&e.attachments.length>0)switch(console.log(`[AIService] Processing ${e.attachments.length} attachments for ${i}`),i){case"openai":const r=this.convertAttachmentsToOpenAI(e.attachments);console.log("[AIService] OpenAI attachments:",r.length),o.push(...r);break;case"anthropic":const l=this.convertAttachmentsToAnthropic(e.attachments);console.log("[AIService] Anthropic attachments:",l.length),o.push(...l);break;case"google":const h=this.convertAttachmentsToGemini(e.attachments);console.log("[AIService] Gemini attachments:",h.length),o.push(...h);const c=e.attachments.length;if(h.length<c){const I=e.attachments.filter(v=>!this.isAttachmentSupportedByGemini(v));if(I.length>0){const A=`[用户上传了以下附件，但当前无法直接处理: ${I.map(g=>`${g.name} (${g.type}, ${(g.size/1024).toFixed(1)}KB)`).join(", ")}。用户询问关于这些附件的问题。]`;i==="google"?o.push({text:A}):o.push({type:"text",text:A})}}break}return console.log(`[AIService] Final content for ${i}:`,o.length,"items"),o}parseAPIError(e,i){try{let o="",t="";e.message&&typeof e.message=="string"?o=e.message:e.error&&e.error.message?(o=e.error.message,t=e.error.code||e.error.type||""):typeof e=="string"?o=e:o=JSON.stringify(e);const a=/Unsupported MIME type: ([^(]+)/i,r=o.match(a);if(r){const l=r[1].trim();let h="";l.startsWith("application/vnd.openxmlformats-officedocument")?l.includes("wordprocessingml")?h="Word文档(.docx)":l.includes("spreadsheetml")?h="Excel表格(.xlsx)":l.includes("presentationml")?h="PowerPoint演示文稿(.pptx)":h="Office文档":l.startsWith("application/msword")?h="Word文档(.doc)":l.startsWith("application/vnd.ms-excel")?h="Excel表格(.xls)":l.startsWith("application/vnd.ms-powerpoint")?h="PowerPoint演示文稿(.ppt)":l.startsWith("application/pdf")?h="PDF文档":l.startsWith("text/")?h="文本文件":l.startsWith("image/")?h="图片文件":l.startsWith("audio/")?h="音频文件":l.startsWith("video/")?h="视频文件":h="该文件";let c="";switch(i){case"openai":c="当前OpenAI模型主要支持图片格式。建议切换到支持更多文件类型的模型（如Gemini）";break;case"anthropic":c="当前Claude模型主要支持图片格式。建议切换到支持更多文件类型的模型（如Gemini）";break;case"google":c="当前Gemini模型不支持此文件格式。建议使用支持的格式（图片、PDF、Office文档等）";break;default:c="当前模型不支持此文件格式。建议切换到支持多模态的模型"}return`${h}格式不受当前模型支持。

${c}，或移除附件后重新发送。`}return o.toLowerCase().includes("multimodal")||o.toLowerCase().includes("attachment")||o.toLowerCase().includes("file")||o.toLowerCase().includes("image")?"当前模型不支持附件功能。请移除附件或切换到支持多模态的模型（如GPT-4 Vision、Claude 3或Gemini）。":o.toLowerCase().includes("model")&&(o.toLowerCase().includes("not found")||o.toLowerCase().includes("invalid"))?"模型不可用或配置错误。请检查模型名称和API配置。":o.toLowerCase().includes("api key")||o.toLowerCase().includes("unauthorized")||o.toLowerCase().includes("authentication")||t==="401"?"API密钥无效或未授权。请检查您的API密钥配置。":o.toLowerCase().includes("quota")||o.toLowerCase().includes("limit")||o.toLowerCase().includes("rate")||t==="429"?"API调用频率过高或配额已用完。请稍后重试或检查您的API账户状态。":o.toLowerCase().includes("network")||o.toLowerCase().includes("timeout")||o.toLowerCase().includes("connection")?"网络连接错误。请检查网络连接后重试。":`API请求失败：${o}`}catch{return"API请求失败，请检查网络连接和配置后重试。"}}extractSystemMessageText(e){const i=e.find(o=>o.role==="system");return i?typeof i.content=="string"?i.content:Array.isArray(i.content)?i.content.map(o=>o.text||"").join(" "):"":""}isAttachmentSupportedByGemini(e){return e.type==="image"?!0:e.type==="document"?["text/plain","text/html","text/css","text/javascript","application/json","text/markdown","application/pdf","text/csv","text/xml","application/xml","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/msword","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/rtf"].includes(e.mimeType):e.type==="audio"?["audio/wav","audio/mp3","audio/mpeg","audio/aac","audio/ogg","audio/flac"].includes(e.mimeType):e.type==="video"?["video/mp4","video/mpeg","video/mov","video/avi","video/x-flv","video/mpg","video/webm","video/wmv"].includes(e.mimeType):!1}checkMultimodalSupport(e,i,o){if(!o||o.length===0)return{supported:!0};const t=e.toLowerCase();switch(i){case"openai":return t.includes("gpt-4")&&(t.includes("vision")||t.includes("4o"))?o.some(r=>r.type!=="image")?{supported:!1,message:`当前模型 ${e} 仅支持图片附件，不支持文档、音频或视频。请移除非图片附件或切换到支持多模态的模型（如 Gemini）。`}:{supported:!0}:{supported:!1,message:`当前模型 ${e} 不支持多模态输入。请移除附件或切换到支持视觉的模型（如 GPT-4 Vision、GPT-4o 或 Gemini）。`};case"anthropic":return t.includes("claude")&&t.includes("3")?o.some(r=>r.type!=="image")?{supported:!1,message:`当前模型 ${e} 仅支持图片附件，不支持文档、音频或视频。请移除非图片附件或切换到支持多模态的模型（如 Gemini）。`}:{supported:!0}:{supported:!1,message:`当前模型 ${e} 不支持多模态输入。请移除附件或切换到支持视觉的模型（如 Claude 3 或 Gemini）。`};case"google":return t.includes("gemini")&&(t.includes("1.5")||t.includes("2.")||t.includes("flash")||t.includes("pro"))?{supported:!0}:{supported:!1,message:`当前模型 ${e} 不支持多模态输入。请移除附件或切换到支持多模态的 Gemini 模型（如 gemini-1.5-pro、gemini-1.5-flash）。`};default:return{supported:!1,message:`当前API类型 ${i} 的多模态支持未知。请移除附件或切换到已知支持多模态的模型。`}}}hasMultimodalContent(e){return!!(e.attachments&&e.attachments.length>0)}async callAI(e,i,o,t=!1){const a=i.models.find(l=>l.id===o),r=(a==null?void 0:a.apiType)||i.type;try{const l=e.flatMap(k=>k.attachments||[]),h=this.checkMultimodalSupport(o,r,l);if(!h.supported)return console.warn("[AIService] Multimodal not supported:",h.message),h.message||"当前模型不支持附件，请移除附件或切换模型。";let c;if(t)c=await this.callAIStream(e,i,o,r);else switch(r){case"openai":c=await this.callOpenAIAPI(e,i,o);break;case"anthropic":c=await this.callAnthropicAPI(e,i,o);break;case"google":c=await this.callGoogleAPI(e,i,o);break;default:c=await this.callOpenAIAPI(e,i,o)}return c}catch(l){const h=this.parseAPIError(l,r);throw new Error(h)}}async callAIStream(e,i,o,t){var a;try{switch(t){case"openai":return await this.callOpenAIAPIStream(e,i,o);case"anthropic":return await this.callAnthropicAPIStream(e,i,o);case"google":return await this.callGoogleAPIStream(e,i,o);default:throw new Error("Stream not implemented for this API type")}}catch(r){const l=(r==null?void 0:r.message)||((a=r==null?void 0:r.error)==null?void 0:a.message)||String(r);if(l.toLowerCase().includes("unsupported mime type")){const c=this.parseAPIError(r,t);throw new Error(c)}if(l.includes("Stream not implemented"))switch(t){case"openai":return await this.callOpenAIAPI(e,i,o);case"anthropic":return await this.callAnthropicAPI(e,i,o);case"google":return await this.callGoogleAPI(e,i,o);default:return await this.callOpenAIAPI(e,i,o)}const h=this.parseAPIError(r,t);throw new Error(h)}}async callOpenAIAPI(e,i,o){var k,I,v,A;if(!i.baseUrl)throw new Error("API URL 未配置");let t=i.baseUrl.trim();t.includes("/chat/completions")||(t.includes("/v1")?t=t.replace(/\/+$/,"")+"/chat/completions":t=t.replace(/\/+$/,"")+"/v1/chat/completions");const r=o.includes("gpt-5")||o.includes("o1")||o.includes("thinking")?6e5:3e5,l=await this.fetchWithTimeout(t,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${i.apiKey}`},body:JSON.stringify({model:o,messages:e.map(g=>{var S;if(this.hasMultimodalContent(g)){const P=this.convertToMultimodalContent(g,"openai");return{role:g.role,content:P}}else return{role:g.role,content:typeof g.content=="string"?g.content:((S=g.content[0])==null?void 0:S.text)||""}}),temperature:.7,max_tokens:6e4})},r);if(!l.ok){const g=await l.json().catch(()=>({})),S=new Error(`OpenAI API error: ${l.status} ${l.statusText}`);throw S.error=g,S.status=l.status,S}const h=await l.json();let c;if(h.choices&&((I=(k=h.choices[0])==null?void 0:k.message)!=null&&I.content))c=h.choices[0].message.content;else if(h.candidates&&((A=(v=h.candidates[0])==null?void 0:v.content)!=null&&A.parts)){const g=h.candidates[0].content.parts;for(const S of g)if(S.text&&!S.thought){c=S.text;break}}else h.content&&typeof h.content=="string"?c=h.content:h.text&&typeof h.text=="string"&&(c=h.text);if(!c||c.trim()==="")throw new Error("API返回空内容或无法解析响应格式");return c=this.cleanResponse(c),c=this.cleanThinkTagsFromFullText(c),c}async callAnthropicAPI(e,i,o){var A;const t=this.extractSystemMessageText(e),a=e.filter(g=>g.role!=="system");if(!i.baseUrl)throw new Error("API URL 未配置");let r=i.baseUrl.trim();r.includes("/v1/messages")||(r=r.replace(/\/+$/,"")+"/v1/messages");const h=o.includes("claude-3")||o.includes("thinking")||o.includes("sonnet")?6e5:3e5,c=await this.fetchWithTimeout(r,{method:"POST",headers:{"Content-Type":"application/json","x-api-key":i.apiKey,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:o,max_tokens:6e4,system:t,messages:a.map(g=>{var S;return{role:g.role==="assistant"?"assistant":"user",content:this.hasMultimodalContent(g)?this.convertToMultimodalContent(g,"anthropic"):typeof g.content=="string"?g.content:Array.isArray(g.content)?((S=g.content[0])==null?void 0:S.text)||"":String(g.content)}})})},h);if(!c.ok){const g=await c.json().catch(()=>({})),S=new Error(`Anthropic API error: ${c.status} ${c.statusText}`);throw S.error=g,S.status=c.status,S}const I=(A=(await c.json()).content[0])==null?void 0:A.text;if(!I||I.trim()==="")throw new Error("API返回空内容");return this.cleanThinkTagsFromFullText(I)}async callGoogleAPI(e,i,o){var S,P,N,F,L,C,G,K;console.log("🔍 [callGoogleAPI] Received messages:",e);const t=this.extractSystemMessageText(e);console.log("🔍 [callGoogleAPI] Extracted system message:",t);const a=e.filter(te=>te.role!=="system");console.log("🔍 [callGoogleAPI] Conversation messages after filtering:",a);const r=a.map(te=>{var U;const pe=te.role==="assistant"?"model":"user";if(this.hasMultimodalContent(te)){const H=this.convertToMultimodalContent(te,"google");return{role:pe,parts:H}}else{const H=typeof te.content=="string"?te.content:((U=te.content[0])==null?void 0:U.text)||"";return{role:pe,parts:[{text:H}]}}}),l={contents:r,generationConfig:{temperature:.7}};if(t?(l.system_instruction={parts:[{text:t}]},console.log("🔍 [callGoogleAPI] Added system_instruction to request body:",t.substring(0,100)+"...")):console.log("🔍 [callGoogleAPI] Warning: No system message found for Gemini API"),console.log("🔍 [callGoogleAPI] Final request body structure:",{hasContents:!!l.contents,contentsLength:(S=l.contents)==null?void 0:S.length,hasSystemInstruction:!!l.system_instruction,systemInstructionText:((L=(F=(N=(P=l.system_instruction)==null?void 0:P.parts)==null?void 0:N[0])==null?void 0:F.text)==null?void 0:L.substring(0,50))+"..."}),console.log("🔍 [callGoogleAPI] Complete request body:",JSON.stringify(l,null,2)),console.log("[AIService] Final Gemini request body:",{contentsCount:r.length,firstContentRole:(C=r[0])==null?void 0:C.role,hasSystemInstruction:!!t,systemInstructionLength:(t==null?void 0:t.length)||0,modelId:o}),!i.baseUrl)throw new Error("API URL 未配置");let h=i.baseUrl.trim();h.endsWith("/v1beta")||(h.includes("/models/")&&(h=h.split("/models/")[0]),h.endsWith("/v1beta")||(h=h.replace(/\/+$/,"")+"/v1beta")),h=`${h}/models/${o}:generateContent`;const k=await this.fetchWithTimeout(h,{method:"POST",headers:{"Content-Type":"application/json","x-goog-api-key":i.apiKey},body:JSON.stringify(l)},3e5);if(!k.ok){const te=await k.json().catch(()=>({})),pe=new Error(`Google Gemini API error: ${k.status} ${k.statusText}`);throw pe.error=te,pe.status=k.status,pe}const v=(G=(await k.json()).candidates)==null?void 0:G[0];if(!((K=v==null?void 0:v.content)!=null&&K.parts))throw new Error("API返回数据结构异常");let A="";for(const te of v.content.parts)if(te.text&&!te.thought){A=te.text;break}if(!A||A.trim()==="")throw new Error("API返回空内容");return this.cleanThinkTagsFromFullText(A)}async callOpenAIAPIStream(e,i,o){var I,v,A,g,S,P,N,F;if(!i.baseUrl)throw new Error("API URL 未配置");let t=i.baseUrl.trim();t.includes("/chat/completions")||(t.includes("/v1")?t=t.replace(/\/+$/,"")+"/chat/completions":t=t.replace(/\/+$/,"")+"/v1/chat/completions");const r=o.includes("gpt-5")||o.includes("o1")||o.includes("thinking")?6e5:3e5,l=await this.fetchWithTimeout(t,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${i.apiKey}`},body:JSON.stringify({model:o,messages:e.map(L=>{var C;if(this.hasMultimodalContent(L)){const G=this.convertToMultimodalContent(L,"openai");return{role:L.role,content:G}}else return{role:L.role,content:typeof L.content=="string"?L.content:((C=L.content[0])==null?void 0:C.text)||""}}),temperature:.7,max_tokens:6e4,stream:!0})},r);if(!l.ok){const L=await l.json().catch(()=>({})),C=new Error(`OpenAI API error: ${l.status} ${l.statusText}`);throw C.error=L,C.status=l.status,C}const h=(I=l.body)==null?void 0:I.getReader();if(!h)throw new Error("No response body reader available");let c="";const k=new TextDecoder;this.resetFilterState();try{for(;;){const{done:L,value:C}=await h.read();if(L)break;const K=k.decode(C).split(`
`);for(const te of K)if(te.startsWith("data: ")){const pe=te.slice(6);if(pe==="[DONE]")continue;try{const U=JSON.parse(pe);let H;if((g=(A=(v=U.choices)==null?void 0:v[0])==null?void 0:A.delta)!=null&&g.content)H=U.choices[0].delta.content;else if((N=(P=(S=U.candidates)==null?void 0:S[0])==null?void 0:P.content)!=null&&N.parts){const Z=U.candidates[0].content.parts;for(const de of Z)if(de.text&&!de.thought){H=de.text;break}}else(F=U.delta)!=null&&F.text?H=U.delta.text:U.text&&(H=U.text);if(H){const Z=this.filterThinkTags(H);Z&&(c+=Z,this.onStreamUpdate&&this.onStreamUpdate(Z))}}catch{}}}}finally{h.releaseLock()}if(!c||c.trim()==="")throw new Error("API返回空内容");return c=this.cleanResponse(c),c=this.cleanThinkTagsFromFullText(c),c}async callAnthropicAPIStream(e,i,o){var I,v;const t=this.extractSystemMessageText(e),a=e.filter(A=>A.role!=="system");if(!i.baseUrl)throw new Error("API URL 未配置");let r=i.baseUrl.trim();r.includes("/v1/messages")||(r=r.replace(/\/+$/,"")+"/v1/messages");const l=await this.fetchWithTimeout(r,{method:"POST",headers:{"Content-Type":"application/json","x-api-key":i.apiKey,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:o,max_tokens:6e4,system:t,messages:a.map(A=>{var g;return{role:A.role==="assistant"?"assistant":"user",content:this.hasMultimodalContent(A)?this.convertToMultimodalContent(A,"anthropic"):typeof A.content=="string"?A.content:Array.isArray(A.content)?((g=A.content[0])==null?void 0:g.text)||"":String(A.content)}}),stream:!0})});if(!l.ok){const A=await l.json().catch(()=>({})),g=new Error(`Anthropic API error: ${l.status} ${l.statusText}`);throw g.error=A,g.status=l.status,g}const h=(I=l.body)==null?void 0:I.getReader();if(!h)throw new Error("No response body reader available");let c="";const k=new TextDecoder;this.resetFilterState();try{for(;;){const{done:A,value:g}=await h.read();if(A)break;const P=k.decode(g).split(`
`);for(const N of P)if(N.startsWith("data: ")){const F=N.slice(6);if(F==="[DONE]")continue;try{const L=JSON.parse(F);if(L.type==="content_block_delta"){const C=(v=L.delta)==null?void 0:v.text;if(C){const G=this.filterThinkTags(C);G&&(c+=G,this.onStreamUpdate&&this.onStreamUpdate(G))}}}catch{}}}}finally{h.releaseLock()}if(!c||c.trim()==="")throw new Error("API返回空内容");return c=this.cleanThinkTagsFromFullText(c),c}async callGoogleAPIStream(e,i,o){var g,S;this.resetFilterState();const t=this.extractSystemMessageText(e),l={contents:e.filter(P=>P.role!=="system").map(P=>{var F;const N=P.role==="assistant"?"model":"user";if(this.hasMultimodalContent(P)){const L=this.convertToMultimodalContent(P,"google");return{role:N,parts:L}}else{const L=typeof P.content=="string"?P.content:((F=P.content[0])==null?void 0:F.text)||"";return{role:N,parts:[{text:L}]}}}),generationConfig:{temperature:.7}};if(t?(l.system_instruction={parts:[{text:t}]},console.log("[AIService] Gemini system_instruction set:",t.substring(0,100)+"...")):console.log("[AIService] Warning: No system message found for Gemini API"),!i.baseUrl)throw new Error("API URL 未配置");let h=i.baseUrl.trim();h.endsWith("/v1beta")||(h.includes("/models/")&&(h=h.split("/models/")[0]),h.endsWith("/v1beta")||(h=h.replace(/\/+$/,"")+"/v1beta")),h=`${h}/models/${o}:streamGenerateContent`;const c=new URL(h);c.searchParams.set("alt","sse");const k=await this.fetchWithTimeout(c.toString(),{method:"POST",headers:{"Content-Type":"application/json","x-goog-api-key":i.apiKey},body:JSON.stringify(l)});if(!k.ok){const P=await k.json().catch(()=>({})),N=new Error(`Google Gemini API error: ${k.status} ${k.statusText}`);throw N.error=P,N.status=k.status,N}if(!k.body)throw new Error("响应体为空");const I=k.body.getReader(),v=new TextDecoder;let A="";this.resetFilterState();try{for(;;){const{done:P,value:N}=await I.read();if(P)break;const L=v.decode(N,{stream:!0}).split(`
`);for(const C of L)if(C.startsWith("data: ")){const G=C.slice(6);if(G==="[DONE]")continue;try{const te=(g=JSON.parse(G).candidates)==null?void 0:g[0];if((S=te==null?void 0:te.content)!=null&&S.parts){for(const pe of te.content.parts)if(pe.text&&!pe.thought){const U=this.filterThinkTags(pe.text);U&&(A+=U,this.onStreamUpdate&&this.onStreamUpdate(U))}}}catch{continue}}}}finally{I.releaseLock()}if(!A||A.trim()==="")throw new Error("API返回空内容");return A=this.cleanResponse(A),A=this.cleanThinkTagsFromFullText(A),A}cleanResponse(e){try{let i=e.replace(/<ASSESSMENT>[\s\S]*?<\/ASSESSMENT>/gi,"").trim();const o=i.indexOf("<ASSESSMENT>");o!==-1&&(i=i.substring(0,o).trim());const t=[/<ASSE[^>]*$/i,/<\/ASSE[^>]*$/i,/\n\n<ASSE/i,/CONTEXT:/i,/TASK:/i,/FORMAT:/i,/QUALITY:/i,/TURN_COUNT:/i,/DECISION:/i,/CONFIDENCE:/i];for(const a of t){const r=i.search(a);if(r!==-1){i=i.substring(0,r).trim();break}}return i}catch{return e}}setStreamUpdateCallback(e){this.onStreamUpdate=e}clearStreamUpdateCallback(){this.onStreamUpdate=void 0}async getAvailableModels(e,i){try{switch(i||e.type){case"openai":return await this.getOpenAIModels(e);case"anthropic":return await this.getAnthropicModels();case"google":return await this.getGeminiModels(e);case"custom":return await this.getCustomProviderModels(e,i);default:return await this.getOpenAIModels(e)}}catch(o){throw o}}async getOpenAIModels(e){if(!e.baseUrl)throw new Error("API URL 未配置");const i=this.buildOpenAIModelsUrl(e.baseUrl),o=await this.fetchWithTimeout(i,{method:"GET",headers:{Authorization:`Bearer ${e.apiKey}`,"Content-Type":"application/json"}});if(!o.ok)throw new Error(`OpenAI Models API error: ${o.status} ${o.statusText}`);const t=await o.json();if(t.data&&Array.isArray(t.data))return t.data.map(a=>a.id).filter(a=>a&&typeof a=="string").sort();throw new Error("OpenAI API返回的模型列表格式不正确")}async getGeminiModels(e){if(!e.baseUrl)throw new Error("API URL 未配置");const i=this.buildGeminiModelsUrl(e.baseUrl),o=new URL(i);o.searchParams.set("key",e.apiKey);const t=await this.fetchWithTimeout(o.toString(),{method:"GET",headers:{"Content-Type":"application/json"}});if(!t.ok)throw new Error(`Gemini Models API error: ${t.status} ${t.statusText}`);const a=await t.json();if(a.models&&Array.isArray(a.models))return a.models.map(r=>r.name&&typeof r.name=="string"?r.name.replace(/^models\//,""):r.id||r.name).filter(r=>r&&typeof r=="string").sort();throw new Error("Gemini API返回的模型列表格式不正确")}async getAnthropicModels(){return["claude-3-5-sonnet-20241022","claude-3-5-haiku-20241022","claude-3-opus-20240229","claude-3-sonnet-20240229","claude-3-haiku-20240307"].sort()}async getCustomProviderModels(e,i){var t;if(i)switch(i){case"openai":return await this.getOpenAIModels(e);case"anthropic":return await this.getAnthropicModels();case"google":return await this.getGeminiModels(e)}const o=((t=e.baseUrl)==null?void 0:t.toLowerCase())||"";if(o.includes("googleapis.com")||o.includes("generativelanguage")||o.includes("/v1beta")||o.includes("gemini"))try{return await this.getGeminiModels(e)}catch(a){throw new Error(`Gemini API获取模型列表失败: ${a instanceof Error?a.message:String(a)}`)}if(o.includes("anthropic.com")||o.includes("claude"))return await this.getAnthropicModels();try{return await this.getOpenAIModels(e)}catch{try{return await this.getGeminiModels(e)}catch{return await this.getModelsWithGenericParsing(e)}}}async getModelsWithGenericParsing(e){try{if(!e.baseUrl)throw new Error("API URL 未配置");let i=e.baseUrl.trim();i.includes("/models")||(i.includes("/v1")?i=i.replace(/\/+$/,"")+"/models":i=i.replace(/\/+$/,"")+"/v1/models");const o=await this.fetchWithTimeout(i,{method:"GET",headers:{Authorization:`Bearer ${e.apiKey}`,"Content-Type":"application/json"}});if(!o.ok)throw new Error(`Models API error: ${o.status} ${o.statusText}`);const t=await o.json();let a=[];if(t.data&&Array.isArray(t.data)?a=t.data.map(r=>r.id).filter(r=>r&&typeof r=="string"):t.models&&Array.isArray(t.models)?a=t.models.map(r=>r.name&&typeof r.name=="string"?r.name.replace(/^models\//,""):r.id||r.name).filter(r=>r&&typeof r=="string"):Array.isArray(t)&&(a=t.map(r=>typeof r=="string"?r:r.id?r.id:r.name?r.name.replace(/^models\//,""):null).filter(r=>r&&typeof r=="string")),a.length>0)return a.sort();throw new Error("无效的模型列表响应格式")}catch(i){throw i}}buildOpenAIModelsUrl(e){if(!e)throw new Error("API URL 未配置");let i=e.trim();return i.endsWith("/models")||i.includes("/models?")||i.includes("/models/")?i:i.includes("/v1")?i.replace(/\/+$/,"")+"/models":i.replace(/\/+$/,"")+"/v1/models"}buildGeminiModelsUrl(e){if(!e)throw new Error("API URL 未配置");let i=e.trim();return i.includes("/models")?i:i.includes("/v1beta")?i.replace(/\/+$/,"")+"/models":i.replace(/\/+$/,"")+"/v1beta/models"}async testConnection(e,i){try{return(await this.testModelCapabilities(e,i)).success}catch{return!1}}async testModelCapabilities(e,i){var o,t;try{const{CapabilityDetector:a}=await Nt(async()=>{const{CapabilityDetector:h}=await import("./capabilityDetector-DAbS9qrd.js");return{CapabilityDetector:h}},__vite__mapDeps([0,1,2])),l=await a.getInstance().detectCapabilities(e,i);return{success:((o=l.testResult)==null?void 0:o.connected)||!1,capabilities:l,error:(t=l.testResult)==null?void 0:t.error}}catch(a){return{success:!1,error:a instanceof Error?a.message:String(a)}}}};ie(it,"instance");let qe=it;const ot=class ot{constructor(){ie(this,"aiService");this.aiService=qe.getInstance()}getStreamMode(){try{const e=localStorage.getItem("yprompt_stream_mode");return e?JSON.parse(e):!0}catch{return!0}}static getInstance(){return ot.instance||(ot.instance=new ot),ot.instance}async generateSimpleResponse(e,i,o,t,a=!1){const r=this.buildSimpleConversationMessages(e,i),l=await this.aiService.callAI(r,o,t,a);if(!l||l.trim()==="")throw new Error("AI API返回了空响应");return l}buildSimpleConversationMessages(e,i){console.log("[AIGuideService] Building conversation messages with history:",{historyLength:i.length,hasAttachments:i.some(r=>r.attachments&&r.attachments.length>0),attachmentCounts:i.map(r=>{var l;return{type:r.type,attachments:((l=r.attachments)==null?void 0:l.length)||0}})});const o={role:"system",content:oe.getUserGuidedPromptRules()},t=i.map(r=>{var h,c;const l={role:r.type==="user"?"user":"assistant",content:r.content,attachments:r.attachments||[]};return console.log("[AIGuideService] Processing message:",{role:l.role,hasAttachments:!!(l.attachments&&l.attachments.length>0),attachmentCount:((h=l.attachments)==null?void 0:h.length)||0,attachments:(c=l.attachments)==null?void 0:c.map(k=>({name:k.name,type:k.type,size:k.size}))}),l}),a=[o,...t];return e.trim()&&a.push({role:"user",content:e}),console.log("[AIGuideService] Final messages array:",{totalMessages:a.length,messagesWithAttachments:a.filter(r=>r.attachments&&r.attachments.length>0).length}),a}getStepInfo(e){const i=[{id:"taskDefinition",title:"任务定义",description:"明确AI助手的核心任务和主要功能",focus:"重点了解用户希望AI完成什么样的工作"},{id:"context",title:"使用场景",description:"了解AI的使用环境和目标用户",focus:"重点了解在什么情况下使用、面向什么样的用户"},{id:"outputFormat",title:"输出格式",description:"定义AI回答的结构、格式和风格",focus:"重点了解希望AI如何组织和呈现答案"},{id:"qualityCriteria",title:"质量要求",description:"确定成功标准和质量期望",focus:"重点了解对准确性、完整性等方面的要求"},{id:"executionParams",title:"工作方式",description:"设定AI的思考方式和互动风格",focus:"重点了解希望AI采用什么样的工作方式和语调"},{id:"optimization",title:"最终确认",description:"确认信息完整性并生成提示词",focus:"汇总所有信息并生成最终提示词"}];return i.find(o=>o.id===e)||i[0]}async getInitialQuestion(e,i,o,t=!1){if(!i||!o)throw new Error("需要配置AI提供商和模型");return await this.generateInitialQuestionWithAI(e,i,o,t)}async generateInitialQuestionWithAI(e,i,o,t=!1){const a=this.getStepInfo(e),r={role:"system",content:oe.getUserGuidedPromptRules()},l={role:"user",content:`请为"${a.title}"步骤生成一个合适的开场问题。这个步骤的目标是：${a.description}`};return await this.aiService.callAI([r,l],i,o,t)}async generateRequirementReportFromConversation(e,i,o,t){if(!i||!o)throw new Error("需要配置AI提供商和模型");return await this.generateReportFromConversationWithAI(e,i,o,t)}async generateReportFromConversationWithAI(e,i,o,t){const a={role:"system",content:oe.getRequirementReportRules()},l={role:"user",content:`基于以下对话历史生成需求总结报告：

**对话历史：**
${e.map(k=>{let I=`${k.type==="user"?"User":"AI"}: ${k.content}`;if(k.attachments&&k.attachments.length>0){const v=k.attachments.map(A=>`[附件: ${A.name} (${A.type}, ${A.size} bytes)]`).join(", ");I+=`
附件: ${v}`}return I}).join(`

`)}

请生成完整的需求总结报告，确保所有5个部分都有具体内容。`},h=this.getStreamMode();t&&h&&this.aiService.setStreamUpdateCallback(k=>{t(k)});const c=await this.aiService.callAI([a,l],i,o,h);return t&&h&&this.aiService.clearStreamUpdateCallback(),c}};ie(ot,"instance");let Ut=ot;const at=class at{constructor(){ie(this,"aiService");this.aiService=qe.getInstance()}static getInstance(){return at.instance||(at.instance=new at),at.instance}formatVariablesForPrompt(e){if(!e||e.length===0||e.every(o=>o.trim()===""))return"";const i=e.filter(o=>o.trim()!=="");return i.length===0?"":`
---
Variable Integration:
The final prompt must be designed to be used in a programmatic context. As such, it needs to include specific placeholders or variables. You must incorporate the following variables into the generated prompt where it makes logical sense to do so.

Variable List:
${i.map(o=>`- \`${o}\``).join(`
`)}

For example, if a variable is \`{{user_topic}}\`, you might include a sentence like "The user will provide the \`{{user_topic}}\` for you to write about."
---
    `}getStreamMode(){return Et().streamMode}async getSystemPromptThinkingPoints(e,i,o,t,a,r){const l=this.formatVariablesForPrompt(t),c=oe.getFinalPromptGenerationRules().THINKING_POINTS_EXTRACTION.replace("{language}",o),k=`${l}
User's Description for AI Persona:
---
${e}
---`,I={role:"system",content:c},v={role:"user",content:k};if(console.log("🔍 [getSystemPromptThinkingPoints] System message:",I),console.log("🔍 [getSystemPromptThinkingPoints] Messages array:",[I,v]),!a)throw new Error("请先配置AI提供商");const A=this.getStreamMode();r&&A&&this.aiService.setStreamUpdateCallback(P=>{r(P)}),console.log("🔍 [getSystemPromptThinkingPoints] Calling aiService.callAI with messages:",[I,v]);const g=await this.aiService.callAI([I,v],a,i,A);return r&&A&&this.aiService.clearStreamUpdateCallback(),g.split(`
`).map(P=>P.replace(/^[*-]\s*/,"").trim()).filter(Boolean)}async generateSystemPrompt(e,i,o,t,a,r,l){const h=oe.getSystemPromptRules(),c=this.formatVariablesForPrompt(t),k=a&&a.length>0&&a.some(C=>C.trim()!=="")?`
---
Key Directives to Incorporate:
You must intelligently integrate the following specific directives into the final System Prompt. These are non-negotiable and should guide the core logic and personality of the AI.

Directives:
${a.filter(C=>C.trim()!=="").map(C=>`- ${C}`).join(`
`)}
---
      `:"",I=oe.getFinalPromptGenerationRules(),v=o==="zh"?"中文":"English",A=`${I.SYSTEM_PROMPT_GENERATION}

---
Here are the prompt engineering rules I will follow:
${h}
---`.replace("{language_display}",v),g=`${c}
${k}
User's Original Description:
---
${e}
---`,S={role:"system",content:A},P={role:"user",content:g};if(!r)throw new Error("请先配置AI提供商");const N=this.getStreamMode();l&&N&&this.aiService.setStreamUpdateCallback(C=>{l(C)});const F=await this.aiService.callAI([S,P],r,i,N);l&&N&&this.aiService.clearStreamUpdateCallback();let L=F.replace(/```/g,"").trim();return L.startsWith(`markdown
`)?L=L.substring(9):L.startsWith("markdown")&&(L=L.substring(8)),L.trim()}async getOptimizationAdvice(e,i,o,t,a,r,l){const h=this.formatVariablesForPrompt(a),c=oe.getFinalPromptGenerationRules(),k=i.charAt(0).toUpperCase()+i.slice(1),I=c.OPTIMIZATION_ADVICE_GENERATION.replace("{promptType}",i).replace("{language}",t),v=`${h}
${k} Prompt to Analyze:
---
${e}
---`,A={role:"system",content:I},g={role:"user",content:v};if(!r)throw new Error("请先配置AI提供商");const S=this.getStreamMode();l&&S&&this.aiService.setStreamUpdateCallback(F=>{l(F)});const P=await this.aiService.callAI([A,g],r,o,S);return l&&S&&this.aiService.clearStreamUpdateCallback(),P.split(`
`).map(F=>F.replace(/^[*-]\s*/,"").trim()).filter(Boolean)}async applyOptimizationAdvice(e,i,o,t,a,r,l,h){const c=oe.getSystemPromptRules(),k=this.formatVariablesForPrompt(r),I=i.map(K=>`- ${K}`).join(`
`),v=oe.getFinalPromptGenerationRules(),A=a==="zh"?"中文":"English",g=o.charAt(0).toUpperCase()+o.slice(1),S=`${v.OPTIMIZATION_APPLICATION}

---
Here are the core principles of elite prompt engineering I will follow:
${c}
---`.replace("{promptType}",o).replace("{language_display}",A).replace("{promptType_capitalized}",g),P=`${k}
Original ${g} Prompt:
---
${e}
---

Optimization Suggestions to Apply:
---
${I}
---`,N={role:"system",content:S},F={role:"user",content:P};if(console.log("🔍 [applyOptimizationAdvice] System message:",N),console.log("🔍 [applyOptimizationAdvice] Messages array:",[N,F]),!l)throw new Error("请先配置AI提供商");const L=this.getStreamMode();h&&L&&this.aiService.setStreamUpdateCallback(K=>{h(K)}),console.log("🔍 [applyOptimizationAdvice] Calling aiService.callAI with messages:",[N,F]);const C=await this.aiService.callAI([N,F],l,t,L);h&&L&&this.aiService.clearStreamUpdateCallback();let G=C.replace(/```/g,"").trim();return G.startsWith(`markdown
`)?G=G.substring(9):G.startsWith("markdown")&&(G=G.substring(8)),G.trim()}};ie(at,"instance");let Ne=at;const to={welcomeMessage:"您好！我是提示词工程专家，将通过几个问题帮您构建一个高质量的AI提示词。请先告诉我：您希望用AI来解决什么问题或完成什么任务？",quickReplies:["请使用相关最佳实践的推荐建议","强制生成需求报告"],maxConversationTurns:5,typingDelay:50};function io(s){return{...to,...s}}/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wi=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),oo=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,o)=>o?o.toUpperCase():i.toLowerCase()),ao=s=>{const e=oo(s);return e.charAt(0).toUpperCase()+e.slice(1)},no=(...s)=>s.filter((e,i,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===i).join(" ").trim(),ki=s=>s==="";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var kt={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const so=({name:s,iconNode:e,absoluteStrokeWidth:i,"absolute-stroke-width":o,strokeWidth:t,"stroke-width":a,size:r=kt.width,color:l=kt.stroke,...h},{slots:c})=>Zt("svg",{...kt,...h,width:r,height:r,stroke:l,"stroke-width":ki(i)||ki(o)||i===!0||o===!0?Number(t||a||kt["stroke-width"])*24/Number(r):t||a||kt["stroke-width"],class:no("lucide",h.class,...s?[`lucide-${wi(ao(s))}-icon`,`lucide-${wi(s)}`]:["lucide-icon"])},[...e.map(k=>Zt(...k)),...c.default?[c.default()]:[]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=(s,e)=>(i,{slots:o,attrs:t})=>Zt(so,{...t,...i,iconNode:e,name:s},o);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ro=we("arrow-up",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xt=we("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xi=we("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zi=we("chevron-up",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qi=we("circle-check-big",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lo=we("circle-x",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=we("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ti=we("info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const co=we("message-circle",[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ho=we("paperclip",[["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",key:"1miecu"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uo=we("pen",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const po=we("plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me=we("refresh-cw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ai=we("send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qt=we("settings",[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $i=we("trash-2",[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mo=we("triangle-alert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const go=we("upload",[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ct=we("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ii=we("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function ri(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var st=ri();function Li(s){st=s}var St={exec:()=>null};function ce(s,e=""){let i=typeof s=="string"?s:s.source,o={replace:(t,a)=>{let r=typeof a=="string"?a:a.source;return r=r.replace(De.caret,"$1"),i=i.replace(t,r),o},getRegex:()=>new RegExp(i,e)};return o}var De={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:s=>new RegExp(`^( {0,3}${s})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:s=>new RegExp(`^ {0,${Math.min(3,s-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:s=>new RegExp(`^ {0,${Math.min(3,s-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:s=>new RegExp(`^ {0,${Math.min(3,s-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:s=>new RegExp(`^ {0,${Math.min(3,s-1)}}#`),htmlBeginRegex:s=>new RegExp(`^ {0,${Math.min(3,s-1)}}<(?:[a-z].*>|!--)`,"i")},fo=/^(?:[ \t]*(?:\n|$))+/,yo=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,vo=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Rt=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,bo=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,li=/(?:[*+-]|\d{1,9}[.)])/,Ni=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Fi=ce(Ni).replace(/bull/g,li).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),wo=ce(Ni).replace(/bull/g,li).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),ci=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,ko=/^[^\n]+/,hi=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,xo=ce(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",hi).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),To=ce(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,li).getRegex(),Yt="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",ui=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Ao=ce("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",ui).replace("tag",Yt).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Ui=ce(ci).replace("hr",Rt).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Yt).getRegex(),Io=ce(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Ui).getRegex(),pi={blockquote:Io,code:yo,def:xo,fences:vo,heading:bo,hr:Rt,html:Ao,lheading:Fi,list:To,newline:fo,paragraph:Ui,table:St,text:ko},Si=ce("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Rt).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Yt).getRegex(),So={...pi,lheading:wo,table:Si,paragraph:ce(ci).replace("hr",Rt).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Si).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Yt).getRegex()},Po={...pi,html:ce(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",ui).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:St,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:ce(ci).replace("hr",Rt).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Fi).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Co=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Mo=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Wi=/^( {2,}|\\)\n(?!\s*$)/,Eo=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Ht=/[\p{P}\p{S}]/u,di=/[\s\p{P}\p{S}]/u,Gi=/[^\s\p{P}\p{S}]/u,Ro=ce(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,di).getRegex(),Bi=/(?!~)[\p{P}\p{S}]/u,_o=/(?!~)[\s\p{P}\p{S}]/u,Do=/(?:[^\s\p{P}\p{S}]|~)/u,Oo=/\[[^\[\]]*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)|`[^`]*?`|<(?! )[^<>]*?>/g,ji=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,zo=ce(ji,"u").replace(/punct/g,Ht).getRegex(),qo=ce(ji,"u").replace(/punct/g,Bi).getRegex(),Yi="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",$o=ce(Yi,"gu").replace(/notPunctSpace/g,Gi).replace(/punctSpace/g,di).replace(/punct/g,Ht).getRegex(),Lo=ce(Yi,"gu").replace(/notPunctSpace/g,Do).replace(/punctSpace/g,_o).replace(/punct/g,Bi).getRegex(),No=ce("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Gi).replace(/punctSpace/g,di).replace(/punct/g,Ht).getRegex(),Fo=ce(/\\(punct)/,"gu").replace(/punct/g,Ht).getRegex(),Uo=ce(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Wo=ce(ui).replace("(?:-->|$)","-->").getRegex(),Go=ce("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Wo).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Wt=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`[^`]*`|[^\[\]\\`])*?/,Bo=ce(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",Wt).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Hi=ce(/^!?\[(label)\]\[(ref)\]/).replace("label",Wt).replace("ref",hi).getRegex(),Vi=ce(/^!?\[(ref)\](?:\[\])?/).replace("ref",hi).getRegex(),jo=ce("reflink|nolink(?!\\()","g").replace("reflink",Hi).replace("nolink",Vi).getRegex(),mi={_backpedal:St,anyPunctuation:Fo,autolink:Uo,blockSkip:Oo,br:Wi,code:Mo,del:St,emStrongLDelim:zo,emStrongRDelimAst:$o,emStrongRDelimUnd:No,escape:Co,link:Bo,nolink:Vi,punctuation:Ro,reflink:Hi,reflinkSearch:jo,tag:Go,text:Eo,url:St},Yo={...mi,link:ce(/^!?\[(label)\]\((.*?)\)/).replace("label",Wt).getRegex(),reflink:ce(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Wt).getRegex()},ti={...mi,emStrongRDelimAst:Lo,emStrongLDelim:qo,url:ce(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Ho={...ti,br:ce(Wi).replace("{2,}","*").getRegex(),text:ce(ti.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},$t={normal:pi,gfm:So,pedantic:Po},Tt={normal:mi,gfm:ti,breaks:Ho,pedantic:Yo},Vo={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Pi=s=>Vo[s];function Be(s,e){if(e){if(De.escapeTest.test(s))return s.replace(De.escapeReplace,Pi)}else if(De.escapeTestNoEncode.test(s))return s.replace(De.escapeReplaceNoEncode,Pi);return s}function Ci(s){try{s=encodeURI(s).replace(De.percentDecode,"%")}catch{return null}return s}function Mi(s,e){var a;let i=s.replace(De.findPipe,(r,l,h)=>{let c=!1,k=l;for(;--k>=0&&h[k]==="\\";)c=!c;return c?"|":" |"}),o=i.split(De.splitPipe),t=0;if(o[0].trim()||o.shift(),o.length>0&&!((a=o.at(-1))!=null&&a.trim())&&o.pop(),e)if(o.length>e)o.splice(e);else for(;o.length<e;)o.push("");for(;t<o.length;t++)o[t]=o[t].trim().replace(De.slashPipe,"|");return o}function At(s,e,i){let o=s.length;if(o===0)return"";let t=0;for(;t<o&&s.charAt(o-t-1)===e;)t++;return s.slice(0,o-t)}function Ko(s,e){if(s.indexOf(e[1])===-1)return-1;let i=0;for(let o=0;o<s.length;o++)if(s[o]==="\\")o++;else if(s[o]===e[0])i++;else if(s[o]===e[1]&&(i--,i<0))return o;return i>0?-2:-1}function Ei(s,e,i,o,t){let a=e.href,r=e.title||null,l=s[1].replace(t.other.outputLinkReplace,"$1");o.state.inLink=!0;let h={type:s[0].charAt(0)==="!"?"image":"link",raw:i,href:a,title:r,text:l,tokens:o.inlineTokens(l)};return o.state.inLink=!1,h}function Jo(s,e,i){let o=s.match(i.other.indentCodeCompensation);if(o===null)return e;let t=o[1];return e.split(`
`).map(a=>{let r=a.match(i.other.beginningSpace);if(r===null)return a;let[l]=r;return l.length>=t.length?a.slice(t.length):a}).join(`
`)}var Gt=class{constructor(s){ie(this,"options");ie(this,"rules");ie(this,"lexer");this.options=s||st}space(s){let e=this.rules.block.newline.exec(s);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(s){let e=this.rules.block.code.exec(s);if(e){let i=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?i:At(i,`
`)}}}fences(s){let e=this.rules.block.fences.exec(s);if(e){let i=e[0],o=Jo(i,e[3]||"",this.rules);return{type:"code",raw:i,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:o}}}heading(s){let e=this.rules.block.heading.exec(s);if(e){let i=e[2].trim();if(this.rules.other.endingHash.test(i)){let o=At(i,"#");(this.options.pedantic||!o||this.rules.other.endingSpaceChar.test(o))&&(i=o.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:i,tokens:this.lexer.inline(i)}}}hr(s){let e=this.rules.block.hr.exec(s);if(e)return{type:"hr",raw:At(e[0],`
`)}}blockquote(s){let e=this.rules.block.blockquote.exec(s);if(e){let i=At(e[0],`
`).split(`
`),o="",t="",a=[];for(;i.length>0;){let r=!1,l=[],h;for(h=0;h<i.length;h++)if(this.rules.other.blockquoteStart.test(i[h]))l.push(i[h]),r=!0;else if(!r)l.push(i[h]);else break;i=i.slice(h);let c=l.join(`
`),k=c.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");o=o?`${o}
${c}`:c,t=t?`${t}
${k}`:k;let I=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(k,a,!0),this.lexer.state.top=I,i.length===0)break;let v=a.at(-1);if((v==null?void 0:v.type)==="code")break;if((v==null?void 0:v.type)==="blockquote"){let A=v,g=A.raw+`
`+i.join(`
`),S=this.blockquote(g);a[a.length-1]=S,o=o.substring(0,o.length-A.raw.length)+S.raw,t=t.substring(0,t.length-A.text.length)+S.text;break}else if((v==null?void 0:v.type)==="list"){let A=v,g=A.raw+`
`+i.join(`
`),S=this.list(g);a[a.length-1]=S,o=o.substring(0,o.length-v.raw.length)+S.raw,t=t.substring(0,t.length-A.raw.length)+S.raw,i=g.substring(a.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:o,tokens:a,text:t}}}list(s){let e=this.rules.block.list.exec(s);if(e){let i=e[1].trim(),o=i.length>1,t={type:"list",raw:"",ordered:o,start:o?+i.slice(0,-1):"",loose:!1,items:[]};i=o?`\\d{1,9}\\${i.slice(-1)}`:`\\${i}`,this.options.pedantic&&(i=o?i:"[*+-]");let a=this.rules.other.listItemRegex(i),r=!1;for(;s;){let h=!1,c="",k="";if(!(e=a.exec(s))||this.rules.block.hr.test(s))break;c=e[0],s=s.substring(c.length);let I=e[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,N=>" ".repeat(3*N.length)),v=s.split(`
`,1)[0],A=!I.trim(),g=0;if(this.options.pedantic?(g=2,k=I.trimStart()):A?g=e[1].length+1:(g=e[2].search(this.rules.other.nonSpaceChar),g=g>4?1:g,k=I.slice(g),g+=e[1].length),A&&this.rules.other.blankLine.test(v)&&(c+=v+`
`,s=s.substring(v.length+1),h=!0),!h){let N=this.rules.other.nextBulletRegex(g),F=this.rules.other.hrRegex(g),L=this.rules.other.fencesBeginRegex(g),C=this.rules.other.headingBeginRegex(g),G=this.rules.other.htmlBeginRegex(g);for(;s;){let K=s.split(`
`,1)[0],te;if(v=K,this.options.pedantic?(v=v.replace(this.rules.other.listReplaceNesting,"  "),te=v):te=v.replace(this.rules.other.tabCharGlobal,"    "),L.test(v)||C.test(v)||G.test(v)||N.test(v)||F.test(v))break;if(te.search(this.rules.other.nonSpaceChar)>=g||!v.trim())k+=`
`+te.slice(g);else{if(A||I.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||L.test(I)||C.test(I)||F.test(I))break;k+=`
`+v}!A&&!v.trim()&&(A=!0),c+=K+`
`,s=s.substring(K.length+1),I=te.slice(g)}}t.loose||(r?t.loose=!0:this.rules.other.doubleBlankLine.test(c)&&(r=!0));let S=null,P;this.options.gfm&&(S=this.rules.other.listIsTask.exec(k),S&&(P=S[0]!=="[ ] ",k=k.replace(this.rules.other.listReplaceTask,""))),t.items.push({type:"list_item",raw:c,task:!!S,checked:P,loose:!1,text:k,tokens:[]}),t.raw+=c}let l=t.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;t.raw=t.raw.trimEnd();for(let h=0;h<t.items.length;h++)if(this.lexer.state.top=!1,t.items[h].tokens=this.lexer.blockTokens(t.items[h].text,[]),!t.loose){let c=t.items[h].tokens.filter(I=>I.type==="space"),k=c.length>0&&c.some(I=>this.rules.other.anyLine.test(I.raw));t.loose=k}if(t.loose)for(let h=0;h<t.items.length;h++)t.items[h].loose=!0;return t}}html(s){let e=this.rules.block.html.exec(s);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(s){let e=this.rules.block.def.exec(s);if(e){let i=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),o=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",t=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:i,raw:e[0],href:o,title:t}}}table(s){var r;let e=this.rules.block.table.exec(s);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let i=Mi(e[1]),o=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),t=(r=e[3])!=null&&r.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],a={type:"table",raw:e[0],header:[],align:[],rows:[]};if(i.length===o.length){for(let l of o)this.rules.other.tableAlignRight.test(l)?a.align.push("right"):this.rules.other.tableAlignCenter.test(l)?a.align.push("center"):this.rules.other.tableAlignLeft.test(l)?a.align.push("left"):a.align.push(null);for(let l=0;l<i.length;l++)a.header.push({text:i[l],tokens:this.lexer.inline(i[l]),header:!0,align:a.align[l]});for(let l of t)a.rows.push(Mi(l,a.header.length).map((h,c)=>({text:h,tokens:this.lexer.inline(h),header:!1,align:a.align[c]})));return a}}lheading(s){let e=this.rules.block.lheading.exec(s);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(s){let e=this.rules.block.paragraph.exec(s);if(e){let i=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:i,tokens:this.lexer.inline(i)}}}text(s){let e=this.rules.block.text.exec(s);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(s){let e=this.rules.inline.escape.exec(s);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(s){let e=this.rules.inline.tag.exec(s);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(s){let e=this.rules.inline.link.exec(s);if(e){let i=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(i)){if(!this.rules.other.endAngleBracket.test(i))return;let a=At(i.slice(0,-1),"\\");if((i.length-a.length)%2===0)return}else{let a=Ko(e[2],"()");if(a===-2)return;if(a>-1){let r=(e[0].indexOf("!")===0?5:4)+e[1].length+a;e[2]=e[2].substring(0,a),e[0]=e[0].substring(0,r).trim(),e[3]=""}}let o=e[2],t="";if(this.options.pedantic){let a=this.rules.other.pedanticHrefTitle.exec(o);a&&(o=a[1],t=a[3])}else t=e[3]?e[3].slice(1,-1):"";return o=o.trim(),this.rules.other.startAngleBracket.test(o)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(i)?o=o.slice(1):o=o.slice(1,-1)),Ei(e,{href:o&&o.replace(this.rules.inline.anyPunctuation,"$1"),title:t&&t.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(s,e){let i;if((i=this.rules.inline.reflink.exec(s))||(i=this.rules.inline.nolink.exec(s))){let o=(i[2]||i[1]).replace(this.rules.other.multipleSpaceGlobal," "),t=e[o.toLowerCase()];if(!t){let a=i[0].charAt(0);return{type:"text",raw:a,text:a}}return Ei(i,t,i[0],this.lexer,this.rules)}}emStrong(s,e,i=""){let o=this.rules.inline.emStrongLDelim.exec(s);if(!(!o||o[3]&&i.match(this.rules.other.unicodeAlphaNumeric))&&(!(o[1]||o[2])||!i||this.rules.inline.punctuation.exec(i))){let t=[...o[0]].length-1,a,r,l=t,h=0,c=o[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,e=e.slice(-1*s.length+t);(o=c.exec(e))!=null;){if(a=o[1]||o[2]||o[3]||o[4]||o[5]||o[6],!a)continue;if(r=[...a].length,o[3]||o[4]){l+=r;continue}else if((o[5]||o[6])&&t%3&&!((t+r)%3)){h+=r;continue}if(l-=r,l>0)continue;r=Math.min(r,r+l+h);let k=[...o[0]][0].length,I=s.slice(0,t+o.index+k+r);if(Math.min(t,r)%2){let A=I.slice(1,-1);return{type:"em",raw:I,text:A,tokens:this.lexer.inlineTokens(A)}}let v=I.slice(2,-2);return{type:"strong",raw:I,text:v,tokens:this.lexer.inlineTokens(v)}}}}codespan(s){let e=this.rules.inline.code.exec(s);if(e){let i=e[2].replace(this.rules.other.newLineCharGlobal," "),o=this.rules.other.nonSpaceChar.test(i),t=this.rules.other.startingSpaceChar.test(i)&&this.rules.other.endingSpaceChar.test(i);return o&&t&&(i=i.substring(1,i.length-1)),{type:"codespan",raw:e[0],text:i}}}br(s){let e=this.rules.inline.br.exec(s);if(e)return{type:"br",raw:e[0]}}del(s){let e=this.rules.inline.del.exec(s);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(s){let e=this.rules.inline.autolink.exec(s);if(e){let i,o;return e[2]==="@"?(i=e[1],o="mailto:"+i):(i=e[1],o=i),{type:"link",raw:e[0],text:i,href:o,tokens:[{type:"text",raw:i,text:i}]}}}url(s){var i;let e;if(e=this.rules.inline.url.exec(s)){let o,t;if(e[2]==="@")o=e[0],t="mailto:"+o;else{let a;do a=e[0],e[0]=((i=this.rules.inline._backpedal.exec(e[0]))==null?void 0:i[0])??"";while(a!==e[0]);o=e[0],e[1]==="www."?t="http://"+e[0]:t=e[0]}return{type:"link",raw:e[0],text:o,href:t,tokens:[{type:"text",raw:o,text:o}]}}}inlineText(s){let e=this.rules.inline.text.exec(s);if(e){let i=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:i}}}},Ye=class ii{constructor(e){ie(this,"tokens");ie(this,"options");ie(this,"state");ie(this,"tokenizer");ie(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||st,this.options.tokenizer=this.options.tokenizer||new Gt,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let i={other:De,block:$t.normal,inline:Tt.normal};this.options.pedantic?(i.block=$t.pedantic,i.inline=Tt.pedantic):this.options.gfm&&(i.block=$t.gfm,this.options.breaks?i.inline=Tt.breaks:i.inline=Tt.gfm),this.tokenizer.rules=i}static get rules(){return{block:$t,inline:Tt}}static lex(e,i){return new ii(i).lex(e)}static lexInline(e,i){return new ii(i).inlineTokens(e)}lex(e){e=e.replace(De.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let i=0;i<this.inlineQueue.length;i++){let o=this.inlineQueue[i];this.inlineTokens(o.src,o.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,i=[],o=!1){var t,a,r;for(this.options.pedantic&&(e=e.replace(De.tabCharGlobal,"    ").replace(De.spaceLine,""));e;){let l;if((a=(t=this.options.extensions)==null?void 0:t.block)!=null&&a.some(c=>(l=c.call({lexer:this},e,i))?(e=e.substring(l.raw.length),i.push(l),!0):!1))continue;if(l=this.tokenizer.space(e)){e=e.substring(l.raw.length);let c=i.at(-1);l.raw.length===1&&c!==void 0?c.raw+=`
`:i.push(l);continue}if(l=this.tokenizer.code(e)){e=e.substring(l.raw.length);let c=i.at(-1);(c==null?void 0:c.type)==="paragraph"||(c==null?void 0:c.type)==="text"?(c.raw+=(c.raw.endsWith(`
`)?"":`
`)+l.raw,c.text+=`
`+l.text,this.inlineQueue.at(-1).src=c.text):i.push(l);continue}if(l=this.tokenizer.fences(e)){e=e.substring(l.raw.length),i.push(l);continue}if(l=this.tokenizer.heading(e)){e=e.substring(l.raw.length),i.push(l);continue}if(l=this.tokenizer.hr(e)){e=e.substring(l.raw.length),i.push(l);continue}if(l=this.tokenizer.blockquote(e)){e=e.substring(l.raw.length),i.push(l);continue}if(l=this.tokenizer.list(e)){e=e.substring(l.raw.length),i.push(l);continue}if(l=this.tokenizer.html(e)){e=e.substring(l.raw.length),i.push(l);continue}if(l=this.tokenizer.def(e)){e=e.substring(l.raw.length);let c=i.at(-1);(c==null?void 0:c.type)==="paragraph"||(c==null?void 0:c.type)==="text"?(c.raw+=(c.raw.endsWith(`
`)?"":`
`)+l.raw,c.text+=`
`+l.raw,this.inlineQueue.at(-1).src=c.text):this.tokens.links[l.tag]||(this.tokens.links[l.tag]={href:l.href,title:l.title},i.push(l));continue}if(l=this.tokenizer.table(e)){e=e.substring(l.raw.length),i.push(l);continue}if(l=this.tokenizer.lheading(e)){e=e.substring(l.raw.length),i.push(l);continue}let h=e;if((r=this.options.extensions)!=null&&r.startBlock){let c=1/0,k=e.slice(1),I;this.options.extensions.startBlock.forEach(v=>{I=v.call({lexer:this},k),typeof I=="number"&&I>=0&&(c=Math.min(c,I))}),c<1/0&&c>=0&&(h=e.substring(0,c+1))}if(this.state.top&&(l=this.tokenizer.paragraph(h))){let c=i.at(-1);o&&(c==null?void 0:c.type)==="paragraph"?(c.raw+=(c.raw.endsWith(`
`)?"":`
`)+l.raw,c.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=c.text):i.push(l),o=h.length!==e.length,e=e.substring(l.raw.length);continue}if(l=this.tokenizer.text(e)){e=e.substring(l.raw.length);let c=i.at(-1);(c==null?void 0:c.type)==="text"?(c.raw+=(c.raw.endsWith(`
`)?"":`
`)+l.raw,c.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=c.text):i.push(l);continue}if(e){let c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return this.state.top=!0,i}inline(e,i=[]){return this.inlineQueue.push({src:e,tokens:i}),i}inlineTokens(e,i=[]){var l,h,c,k,I;let o=e,t=null;if(this.tokens.links){let v=Object.keys(this.tokens.links);if(v.length>0)for(;(t=this.tokenizer.rules.inline.reflinkSearch.exec(o))!=null;)v.includes(t[0].slice(t[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,t.index)+"["+"a".repeat(t[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(t=this.tokenizer.rules.inline.anyPunctuation.exec(o))!=null;)o=o.slice(0,t.index)+"++"+o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(t=this.tokenizer.rules.inline.blockSkip.exec(o))!=null;)o=o.slice(0,t.index)+"["+"a".repeat(t[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);o=((h=(l=this.options.hooks)==null?void 0:l.emStrongMask)==null?void 0:h.call({lexer:this},o))??o;let a=!1,r="";for(;e;){a||(r=""),a=!1;let v;if((k=(c=this.options.extensions)==null?void 0:c.inline)!=null&&k.some(g=>(v=g.call({lexer:this},e,i))?(e=e.substring(v.raw.length),i.push(v),!0):!1))continue;if(v=this.tokenizer.escape(e)){e=e.substring(v.raw.length),i.push(v);continue}if(v=this.tokenizer.tag(e)){e=e.substring(v.raw.length),i.push(v);continue}if(v=this.tokenizer.link(e)){e=e.substring(v.raw.length),i.push(v);continue}if(v=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(v.raw.length);let g=i.at(-1);v.type==="text"&&(g==null?void 0:g.type)==="text"?(g.raw+=v.raw,g.text+=v.text):i.push(v);continue}if(v=this.tokenizer.emStrong(e,o,r)){e=e.substring(v.raw.length),i.push(v);continue}if(v=this.tokenizer.codespan(e)){e=e.substring(v.raw.length),i.push(v);continue}if(v=this.tokenizer.br(e)){e=e.substring(v.raw.length),i.push(v);continue}if(v=this.tokenizer.del(e)){e=e.substring(v.raw.length),i.push(v);continue}if(v=this.tokenizer.autolink(e)){e=e.substring(v.raw.length),i.push(v);continue}if(!this.state.inLink&&(v=this.tokenizer.url(e))){e=e.substring(v.raw.length),i.push(v);continue}let A=e;if((I=this.options.extensions)!=null&&I.startInline){let g=1/0,S=e.slice(1),P;this.options.extensions.startInline.forEach(N=>{P=N.call({lexer:this},S),typeof P=="number"&&P>=0&&(g=Math.min(g,P))}),g<1/0&&g>=0&&(A=e.substring(0,g+1))}if(v=this.tokenizer.inlineText(A)){e=e.substring(v.raw.length),v.raw.slice(-1)!=="_"&&(r=v.raw.slice(-1)),a=!0;let g=i.at(-1);(g==null?void 0:g.type)==="text"?(g.raw+=v.raw,g.text+=v.text):i.push(v);continue}if(e){let g="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(g);break}else throw new Error(g)}}return i}},Bt=class{constructor(s){ie(this,"options");ie(this,"parser");this.options=s||st}space(s){return""}code({text:s,lang:e,escaped:i}){var a;let o=(a=(e||"").match(De.notSpaceStart))==null?void 0:a[0],t=s.replace(De.endingNewline,"")+`
`;return o?'<pre><code class="language-'+Be(o)+'">'+(i?t:Be(t,!0))+`</code></pre>
`:"<pre><code>"+(i?t:Be(t,!0))+`</code></pre>
`}blockquote({tokens:s}){return`<blockquote>
${this.parser.parse(s)}</blockquote>
`}html({text:s}){return s}def(s){return""}heading({tokens:s,depth:e}){return`<h${e}>${this.parser.parseInline(s)}</h${e}>
`}hr(s){return`<hr>
`}list(s){let e=s.ordered,i=s.start,o="";for(let r=0;r<s.items.length;r++){let l=s.items[r];o+=this.listitem(l)}let t=e?"ol":"ul",a=e&&i!==1?' start="'+i+'"':"";return"<"+t+a+`>
`+o+"</"+t+`>
`}listitem(s){var i;let e="";if(s.task){let o=this.checkbox({checked:!!s.checked});s.loose?((i=s.tokens[0])==null?void 0:i.type)==="paragraph"?(s.tokens[0].text=o+" "+s.tokens[0].text,s.tokens[0].tokens&&s.tokens[0].tokens.length>0&&s.tokens[0].tokens[0].type==="text"&&(s.tokens[0].tokens[0].text=o+" "+Be(s.tokens[0].tokens[0].text),s.tokens[0].tokens[0].escaped=!0)):s.tokens.unshift({type:"text",raw:o+" ",text:o+" ",escaped:!0}):e+=o+" "}return e+=this.parser.parse(s.tokens,!!s.loose),`<li>${e}</li>
`}checkbox({checked:s}){return"<input "+(s?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:s}){return`<p>${this.parser.parseInline(s)}</p>
`}table(s){let e="",i="";for(let t=0;t<s.header.length;t++)i+=this.tablecell(s.header[t]);e+=this.tablerow({text:i});let o="";for(let t=0;t<s.rows.length;t++){let a=s.rows[t];i="";for(let r=0;r<a.length;r++)i+=this.tablecell(a[r]);o+=this.tablerow({text:i})}return o&&(o=`<tbody>${o}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+o+`</table>
`}tablerow({text:s}){return`<tr>
${s}</tr>
`}tablecell(s){let e=this.parser.parseInline(s.tokens),i=s.header?"th":"td";return(s.align?`<${i} align="${s.align}">`:`<${i}>`)+e+`</${i}>
`}strong({tokens:s}){return`<strong>${this.parser.parseInline(s)}</strong>`}em({tokens:s}){return`<em>${this.parser.parseInline(s)}</em>`}codespan({text:s}){return`<code>${Be(s,!0)}</code>`}br(s){return"<br>"}del({tokens:s}){return`<del>${this.parser.parseInline(s)}</del>`}link({href:s,title:e,tokens:i}){let o=this.parser.parseInline(i),t=Ci(s);if(t===null)return o;s=t;let a='<a href="'+s+'"';return e&&(a+=' title="'+Be(e)+'"'),a+=">"+o+"</a>",a}image({href:s,title:e,text:i,tokens:o}){o&&(i=this.parser.parseInline(o,this.parser.textRenderer));let t=Ci(s);if(t===null)return Be(i);s=t;let a=`<img src="${s}" alt="${i}"`;return e&&(a+=` title="${Be(e)}"`),a+=">",a}text(s){return"tokens"in s&&s.tokens?this.parser.parseInline(s.tokens):"escaped"in s&&s.escaped?s.text:Be(s.text)}},gi=class{strong({text:s}){return s}em({text:s}){return s}codespan({text:s}){return s}del({text:s}){return s}html({text:s}){return s}text({text:s}){return s}link({text:s}){return""+s}image({text:s}){return""+s}br(){return""}},He=class oi{constructor(e){ie(this,"options");ie(this,"renderer");ie(this,"textRenderer");this.options=e||st,this.options.renderer=this.options.renderer||new Bt,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new gi}static parse(e,i){return new oi(i).parse(e)}static parseInline(e,i){return new oi(i).parseInline(e)}parse(e,i=!0){var t,a;let o="";for(let r=0;r<e.length;r++){let l=e[r];if((a=(t=this.options.extensions)==null?void 0:t.renderers)!=null&&a[l.type]){let c=l,k=this.options.extensions.renderers[c.type].call({parser:this},c);if(k!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(c.type)){o+=k||"";continue}}let h=l;switch(h.type){case"space":{o+=this.renderer.space(h);continue}case"hr":{o+=this.renderer.hr(h);continue}case"heading":{o+=this.renderer.heading(h);continue}case"code":{o+=this.renderer.code(h);continue}case"table":{o+=this.renderer.table(h);continue}case"blockquote":{o+=this.renderer.blockquote(h);continue}case"list":{o+=this.renderer.list(h);continue}case"html":{o+=this.renderer.html(h);continue}case"def":{o+=this.renderer.def(h);continue}case"paragraph":{o+=this.renderer.paragraph(h);continue}case"text":{let c=h,k=this.renderer.text(c);for(;r+1<e.length&&e[r+1].type==="text";)c=e[++r],k+=`
`+this.renderer.text(c);i?o+=this.renderer.paragraph({type:"paragraph",raw:k,text:k,tokens:[{type:"text",raw:k,text:k,escaped:!0}]}):o+=k;continue}default:{let c='Token with "'+h.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return o}parseInline(e,i=this.renderer){var t,a;let o="";for(let r=0;r<e.length;r++){let l=e[r];if((a=(t=this.options.extensions)==null?void 0:t.renderers)!=null&&a[l.type]){let c=this.options.extensions.renderers[l.type].call({parser:this},l);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(l.type)){o+=c||"";continue}}let h=l;switch(h.type){case"escape":{o+=i.text(h);break}case"html":{o+=i.html(h);break}case"link":{o+=i.link(h);break}case"image":{o+=i.image(h);break}case"strong":{o+=i.strong(h);break}case"em":{o+=i.em(h);break}case"codespan":{o+=i.codespan(h);break}case"br":{o+=i.br(h);break}case"del":{o+=i.del(h);break}case"text":{o+=i.text(h);break}default:{let c='Token with "'+h.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return o}},Lt,It=(Lt=class{constructor(s){ie(this,"options");ie(this,"block");this.options=s||st}preprocess(s){return s}postprocess(s){return s}processAllTokens(s){return s}emStrongMask(s){return s}provideLexer(){return this.block?Ye.lex:Ye.lexInline}provideParser(){return this.block?He.parse:He.parseInline}},ie(Lt,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens","emStrongMask"])),ie(Lt,"passThroughHooksRespectAsync",new Set(["preprocess","postprocess","processAllTokens"])),Lt),Zo=class{constructor(...s){ie(this,"defaults",ri());ie(this,"options",this.setOptions);ie(this,"parse",this.parseMarkdown(!0));ie(this,"parseInline",this.parseMarkdown(!1));ie(this,"Parser",He);ie(this,"Renderer",Bt);ie(this,"TextRenderer",gi);ie(this,"Lexer",Ye);ie(this,"Tokenizer",Gt);ie(this,"Hooks",It);this.use(...s)}walkTokens(s,e){var o,t;let i=[];for(let a of s)switch(i=i.concat(e.call(this,a)),a.type){case"table":{let r=a;for(let l of r.header)i=i.concat(this.walkTokens(l.tokens,e));for(let l of r.rows)for(let h of l)i=i.concat(this.walkTokens(h.tokens,e));break}case"list":{let r=a;i=i.concat(this.walkTokens(r.items,e));break}default:{let r=a;(t=(o=this.defaults.extensions)==null?void 0:o.childTokens)!=null&&t[r.type]?this.defaults.extensions.childTokens[r.type].forEach(l=>{let h=r[l].flat(1/0);i=i.concat(this.walkTokens(h,e))}):r.tokens&&(i=i.concat(this.walkTokens(r.tokens,e)))}}return i}use(...s){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return s.forEach(i=>{let o={...i};if(o.async=this.defaults.async||o.async||!1,i.extensions&&(i.extensions.forEach(t=>{if(!t.name)throw new Error("extension name required");if("renderer"in t){let a=e.renderers[t.name];a?e.renderers[t.name]=function(...r){let l=t.renderer.apply(this,r);return l===!1&&(l=a.apply(this,r)),l}:e.renderers[t.name]=t.renderer}if("tokenizer"in t){if(!t.level||t.level!=="block"&&t.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let a=e[t.level];a?a.unshift(t.tokenizer):e[t.level]=[t.tokenizer],t.start&&(t.level==="block"?e.startBlock?e.startBlock.push(t.start):e.startBlock=[t.start]:t.level==="inline"&&(e.startInline?e.startInline.push(t.start):e.startInline=[t.start]))}"childTokens"in t&&t.childTokens&&(e.childTokens[t.name]=t.childTokens)}),o.extensions=e),i.renderer){let t=this.defaults.renderer||new Bt(this.defaults);for(let a in i.renderer){if(!(a in t))throw new Error(`renderer '${a}' does not exist`);if(["options","parser"].includes(a))continue;let r=a,l=i.renderer[r],h=t[r];t[r]=(...c)=>{let k=l.apply(t,c);return k===!1&&(k=h.apply(t,c)),k||""}}o.renderer=t}if(i.tokenizer){let t=this.defaults.tokenizer||new Gt(this.defaults);for(let a in i.tokenizer){if(!(a in t))throw new Error(`tokenizer '${a}' does not exist`);if(["options","rules","lexer"].includes(a))continue;let r=a,l=i.tokenizer[r],h=t[r];t[r]=(...c)=>{let k=l.apply(t,c);return k===!1&&(k=h.apply(t,c)),k}}o.tokenizer=t}if(i.hooks){let t=this.defaults.hooks||new It;for(let a in i.hooks){if(!(a in t))throw new Error(`hook '${a}' does not exist`);if(["options","block"].includes(a))continue;let r=a,l=i.hooks[r],h=t[r];It.passThroughHooks.has(a)?t[r]=c=>{if(this.defaults.async&&It.passThroughHooksRespectAsync.has(a))return Promise.resolve(l.call(t,c)).then(I=>h.call(t,I));let k=l.call(t,c);return h.call(t,k)}:t[r]=(...c)=>{let k=l.apply(t,c);return k===!1&&(k=h.apply(t,c)),k}}o.hooks=t}if(i.walkTokens){let t=this.defaults.walkTokens,a=i.walkTokens;o.walkTokens=function(r){let l=[];return l.push(a.call(this,r)),t&&(l=l.concat(t.call(this,r))),l}}this.defaults={...this.defaults,...o}}),this}setOptions(s){return this.defaults={...this.defaults,...s},this}lexer(s,e){return Ye.lex(s,e??this.defaults)}parser(s,e){return He.parse(s,e??this.defaults)}parseMarkdown(s){return(e,i)=>{let o={...i},t={...this.defaults,...o},a=this.onError(!!t.silent,!!t.async);if(this.defaults.async===!0&&o.async===!1)return a(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return a(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return a(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));t.hooks&&(t.hooks.options=t,t.hooks.block=s);let r=t.hooks?t.hooks.provideLexer():s?Ye.lex:Ye.lexInline,l=t.hooks?t.hooks.provideParser():s?He.parse:He.parseInline;if(t.async)return Promise.resolve(t.hooks?t.hooks.preprocess(e):e).then(h=>r(h,t)).then(h=>t.hooks?t.hooks.processAllTokens(h):h).then(h=>t.walkTokens?Promise.all(this.walkTokens(h,t.walkTokens)).then(()=>h):h).then(h=>l(h,t)).then(h=>t.hooks?t.hooks.postprocess(h):h).catch(a);try{t.hooks&&(e=t.hooks.preprocess(e));let h=r(e,t);t.hooks&&(h=t.hooks.processAllTokens(h)),t.walkTokens&&this.walkTokens(h,t.walkTokens);let c=l(h,t);return t.hooks&&(c=t.hooks.postprocess(c)),c}catch(h){return a(h)}}}onError(s,e){return i=>{if(i.message+=`
Please report this to https://github.com/markedjs/marked.`,s){let o="<p>An error occurred:</p><pre>"+Be(i.message+"",!0)+"</pre>";return e?Promise.resolve(o):o}if(e)return Promise.reject(i);throw i}}},nt=new Zo;function re(s,e){return nt.parse(s,e)}re.options=re.setOptions=function(s){return nt.setOptions(s),re.defaults=nt.defaults,Li(re.defaults),re};re.getDefaults=ri;re.defaults=st;re.use=function(...s){return nt.use(...s),re.defaults=nt.defaults,Li(re.defaults),re};re.walkTokens=function(s,e){return nt.walkTokens(s,e)};re.parseInline=nt.parseInline;re.Parser=He;re.parser=He.parse;re.Renderer=Bt;re.TextRenderer=gi;re.Lexer=Ye;re.lexer=Ye.lex;re.Tokenizer=Gt;re.Hooks=It;re.parse=re;re.options;re.setOptions;re.use;re.walkTokens;re.parseInline;He.parse;Ye.lex;const ze=s=>{try{let e=s.replace(/<think>[\s\S]*?<\/think>/gi,"").trim();e=e.replace(/<ASSESSMENT>[\s\S]*?<\/ASSESSMENT>/gi,"").trim();const i=e.indexOf("<think>");i!==-1&&(e=e.substring(0,i).trim());const o=e.indexOf("<ASSESSMENT>");o!==-1&&(e=e.substring(0,o).trim());const t=[/<thin[^>]*$/i,/<\/thin[^>]*$/i,/\n\n<thin/i,/<ASSE[^>]*$/i,/<\/ASSE[^>]*$/i,/\n\n<ASSE/i,/CONTEXT:/i,/TASK:/i,/FORMAT:/i,/QUALITY:/i,/TURN_COUNT:/i,/DECISION:/i,/CONFIDENCE:/i];for(const a of t){const r=e.search(a);if(r!==-1){e=e.substring(0,r).trim();break}}return e}catch{return s}},Ri=s=>s.replace(/<think>[\s\S]*?<\/think>/gi,"").replace(/^```[\w]*\n?/gm,"").replace(/\n?```$/gm,"").replace(/^Here is the.*?translation.*?:\s*/i,"").replace(/^Here is the.*?converted.*?:\s*/i,"").replace(/^Here is.*?:\s*/i,"").replace(/^以下是.*?翻译.*?：\s*/i,"").replace(/^以下是.*?转换.*?：\s*/i,"").replace(/^以下是.*?：\s*/i,"").replace(/^.*?翻译结果.*?：\s*/i,"").replace(/^.*?转换结果.*?：\s*/i,"").trim(),rt=s=>{try{const e=s.match(/<ASSESSMENT>([\s\S]*?)<\/ASSESSMENT>/i);if(!e)return!1;const o=e[1].match(/DECISION:\s*\[([^\]]+)\]/i);return o?o[1].trim().toUpperCase()==="END_NOW":!1}catch{return!1}},Qo={class:"p-4 border-b border-gray-200 flex-shrink-0"},Xo={class:"flex justify-between items-center"},ea={class:"flex items-center space-x-2"},ta=["title"],ia={class:"flex items-center space-x-3"},oa={class:"flex items-center space-x-2"},aa=["title"],na={key:0,class:"px-4 pb-2 border-b border-gray-200 bg-gray-50"},sa={class:"py-2 space-y-2"},ra={class:"flex items-center justify-between"},la={class:"flex flex-col sm:flex-row gap-2"},ca={class:"flex-1"},ha=["value"],ua={class:"flex-1"},pa=["disabled"],da=["value"],ma={class:"text-xs text-gray-500"},ga={key:0},fa={key:1},ya={key:2},va={key:0,class:"relative"},ba={class:"relative border border-blue-300 rounded-2xl overflow-hidden bg-white"},wa={class:"relative"},ka=["onUpdate:modelValue","onKeydown"],xa={key:1},Ta=["innerHTML"],Aa=["innerHTML"],Ia={class:"text-xs text-gray-500 mb-1"},Sa={class:"flex gap-2 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 pb-1"},Pa={class:"flex items-center gap-2 min-w-0"},Ca={class:"flex-shrink-0"},Ma={key:0,class:"w-3 h-3 text-green-500"},Ea={key:1,class:"w-3 h-3 text-blue-500"},Ra={key:2,class:"w-3 h-3 text-purple-500"},_a={key:3,class:"w-3 h-3 text-red-500"},Da={key:4,class:"w-3 h-3 text-gray-500"},Oa={class:"min-w-0 flex-1"},za=["title"],qa=["onClick","title","disabled"],$a=["onClick"],La=["onClick","disabled"],Na=["onClick","disabled"],Fa=["onClick"],Ua=["onClick"],Wa=["onClick"],Ga={key:0,class:"flex justify-start"},Ba={key:0,class:"px-6 py-3 bg-gray-50 border-b border-gray-200 flex-shrink-0"},ja={class:"flex flex-wrap gap-2"},Ya=["onClick"],Ha={key:0,class:"mb-3 p-3 bg-gray-50 rounded-lg"},Va={class:"flex items-center justify-between mb-2"},Ka={class:"text-sm text-gray-600"},Ja={class:"flex gap-2 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"},Za={class:"flex items-center gap-2 min-w-0"},Qa={class:"flex-shrink-0"},Xa={key:0,class:"w-4 h-4 text-green-500"},en={key:1,class:"w-4 h-4 text-blue-500"},tn={key:2,class:"w-4 h-4 text-purple-500"},on={key:3,class:"w-4 h-4 text-red-500"},an={key:4,class:"w-4 h-4 text-gray-500"},nn={class:"min-w-0 flex-1"},sn=["title"],rn={class:"text-xs text-gray-500"},ln=["onClick"],cn={class:"relative border border-gray-300 rounded-2xl focus-within:outline-none focus-within:border-gray-300 overflow-hidden",style:{height:"120px"}},hn={class:"absolute top-0 left-0 right-0",style:{bottom:"48px"}},un=["placeholder","disabled"],pn={class:"absolute bottom-0 left-0 right-0 h-12 flex justify-between items-center px-2 bg-transparent pointer-events-none"},dn={class:"relative"},mn={key:0,class:"absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-3 h-3 flex items-center justify-center",style:{"font-size":"9px"}},gn=["disabled"],fn={key:1,class:"absolute inset-0 bg-blue-50 bg-opacity-90 flex items-center justify-center z-50 border-2 border-dashed border-blue-400 rounded-lg"},yn={class:"text-center"},_i=Mt({__name:"ChatInterface",props:{isMobile:{type:Boolean},isExpanded:{type:Boolean}},emits:["toggle"],setup(s){const e=s,{isMobile:i,isExpanded:o}=e,t=io(),a=si(),r=Et(),l=jt(),h=Ut.getInstance(),c=M(""),k=M(),I=M(),v=M(),A=M(),g=M([]),S=M(!1),P=M({}),N=M({}),F=M(!0),L=M(!1),C=M(""),G=M(""),K=M(!1),te=()=>{},pe=M(!1),U=Fe(()=>{const b=a.chatMessages.length,T=["请使用相关最佳实践的推荐建议"];return b>=6?[...T,"强制生成需求报告"]:T}),H=b=>["强制生成需求报告"].some(f=>b.includes(f)),Z=()=>{F.value=!F.value,localStorage.setItem("yprompt_stream_mode",JSON.stringify(F.value))},de=Fe(()=>r.getAvailableProviders()),ye=Fe(()=>C.value?r.getAvailableModels(C.value):[]),Ee=()=>{G.value="";const b=ye.value;b.length>0&&(G.value=b[0].id),z()},z=()=>{localStorage.setItem("yprompt_chat_provider",C.value),localStorage.setItem("yprompt_chat_model",G.value)},fe=()=>{C.value="",G.value="",z(),L.value=!1},Ie=()=>{if(!C.value||!G.value)return"全局模型";const b=de.value.find(f=>f.id===C.value),T=ye.value.find(f=>f.id===G.value);return`${b==null?void 0:b.name} - ${T==null?void 0:T.name}`},ke=()=>{if(C.value&&G.value){const f=de.value.find(q=>q.id===C.value),V=ye.value.find(q=>q.id===G.value);return{provider:f,model:V}}const b=r.getCurrentProvider(),T=r.getCurrentModel();return{provider:b,model:T}},We=Fe(()=>a.chatMessages.length>=2&&pe.value),Ve=Fe(()=>{const b=We.value?420:340;let T=0;return L.value&&(typeof window<"u"&&window.innerWidth>=640?T=114:T=120),`calc(100vh - ${b+T}px)`}),Ke=b=>{I.value&&!I.value.contains(b.target)&&(pe.value=!1)},Je=b=>{try{const T=re(b,{breaks:!0,gfm:!0});return typeof T=="string"?T:String(T)}catch{return b}},Ze=b=>{try{if(/^#|^\*\*|^##|^\*|^-|\*\*.*\*\*|^1\.|```/.test(b)||b.includes("**")||b.includes("##")||b.includes("# ")||b.length>50){const f=re(b,{breaks:!0,gfm:!0});return typeof f=="string"?f:String(f)}else return b.replace(/\n/g,"<br>")}catch{try{const f=re(b,{breaks:!0,gfm:!0});return typeof f=="string"?f:String(f)}catch{return b.replace(/\n/g,"<br>")}}},Qe=async()=>{const b=localStorage.getItem("yprompt_stream_mode");if(b)try{F.value=JSON.parse(b)}catch(T){console.error("Failed to parse stream mode setting:",T)}a.chatMessages.length===0&&!a.isInitialized&&(a.isInitialized=!0,await xe(t.welcomeMessage,!1))};ni(()=>{document.addEventListener("click",Ke);const b=localStorage.getItem("yprompt_chat_provider"),T=localStorage.getItem("yprompt_chat_model");b&&(C.value=b),T&&(G.value=T);const f=localStorage.getItem("yprompt_stream_mode");if(f!==null)try{F.value=JSON.parse(f)}catch{F.value=!0}Qe()}),Zi(()=>{document.removeEventListener("click",Ke)});const Xe=b=>{c.value=b,pe.value=!1,y()},Le=()=>{Ft(()=>{k.value&&(k.value.scrollTop=k.value.scrollHeight)})};$e(()=>a.chatMessages.length,Le),$e(()=>a.isTyping,Le);let Ue=-1;const Ge=()=>(a.isTyping=!1,a.addMessage("ai","",void 0),Ue=a.chatMessages.length-1,Ue),Pe=b=>{Ue>=0&&Ue<a.chatMessages.length&&(a.chatMessages[Ue].content=b)},xe=async(b,T=!1)=>{if(T){const f=a.chatMessages.length;a.addMessage("ai","",void 0);for(let V=0;V<=b.length;V++)a.chatMessages[f].content=b.substring(0,V),await new Promise(q=>setTimeout(q,Math.random()*30+10))}else a.isTyping=!0,await new Promise(f=>setTimeout(f,100+Math.random()*100)),a.isTyping=!1,a.addMessage("ai",b,void 0)},y=async()=>{if(!c.value.trim()){g.value.length>0&&l.warning("请输入消息内容，不能只发送附件");return}const{provider:b,model:T}=ke();if(!b||!T){l.warning("请先在右上角设置中配置AI模型和API密钥");return}const f=c.value,V=[...g.value];console.log("[ChatInterface] Sending message with attachments:",{hasInput:!!f.trim(),attachmentCount:V.length,attachments:V.map($=>({name:$.name,type:$.type,size:$.size,hasData:!!$.data}))});const q=H(f);a.addMessage("user",f,V),c.value="",g.value=[],pe.value=!1;const ne=v.value;if(ne&&(ne.style.height="80px"),q){console.log("[ChatInterface] Force generate triggered by user input"),await xe("好的，我将立即为您生成需求报告。",!1),setTimeout(async()=>{const $=r.getCurrentProvider(),Q=r.getCurrentModel();$&&Q&&await p($,Q.id)},800);return}a.isTyping=!0;try{const $=F.value;if($){const Q=qe.getInstance();let he="",ge=-1;Q.setStreamUpdateCallback(ee=>{ge===-1&&(ge=Ge()),he+=ee;const Re=ze(he);Pe(Re),Le()});const be=a.getValidMessages();console.log("[ChatInterface] Valid messages from store:",{count:be.length,messages:be.map(ee=>{var Re,fi;return{type:ee.type,hasAttachments:!!(ee.attachments&&ee.attachments.length>0),attachmentCount:((Re=ee.attachments)==null?void 0:Re.length)||0,attachments:(fi=ee.attachments)==null?void 0:fi.map(Jt=>({name:Jt.name,type:Jt.type,size:Jt.size}))}})});const le=be.map(ee=>({type:ee.type,content:ee.content,attachments:ee.attachments||[]}));console.log("[ChatInterface] Conversation history for AI service:",{count:le.length,withAttachments:le.filter(ee=>ee.attachments&&ee.attachments.length>0).length,details:le.map(ee=>{var Re;return{type:ee.type,hasAttachments:!!(ee.attachments&&ee.attachments.length>0),attachmentCount:((Re=ee.attachments)==null?void 0:Re.length)||0}})});const Te=await h.generateSimpleResponse("",le,b,T.id,$);if(Q.clearStreamUpdateCallback(),$&&ge===-1){console.log("[ChatInterface] Stream mode fallback detected, updating message directly"),ge=Ge();const ee=ze(Te);Pe(ee)}else if($&&he.trim()===""){console.log("[ChatInterface] Stream mode with empty content, updating with final response");const ee=ze(Te);Pe(ee)}(rt(Te)||Te.includes("基于我们的对话，我现在为您生成需求报告："))&&setTimeout(async()=>{const ee=r.getCurrentProvider(),Re=r.getCurrentModel();ee&&Re&&await p(ee,Re.id)},800)}else{const he=a.getValidMessages().map(le=>({type:le.type,content:le.content,attachments:le.attachments||[]})),ge=await h.generateSimpleResponse("",he,b,T.id,$);if(rt(ge)||ge.includes("基于我们的对话，我现在为您生成需求报告：")){const le=ze(ge);await xe(le,!1),setTimeout(async()=>{const Te=r.getCurrentProvider(),Ce=r.getCurrentModel();Te&&Ce&&await p(Te,Ce.id)},800)}else{const le=ze(ge);await xe(le,!1)}}}catch($){a.isTyping=!1,a.isGenerating=!1;const Q=$ instanceof Error?$.message:String($);l.error(`发生错误: ${Q}`),F.value&&qe.getInstance().clearStreamUpdateCallback()}},p=async(b,T)=>{try{a.clearProgressMessages();const V=a.getValidMessages().map($=>({type:$.type,content:$.content}));a.isGenerating=!0,a.currentExecutionStep="report",a.addOrUpdateProgressMessage("🔄 正在基于对话生成需求报告...","progress"),a.promptData.requirementReport="";const q=$=>{a.promptData.requirementReport+=$},ne=await h.generateRequirementReportFromConversation(V,b,T,q);if(a.promptData.requirementReport=ne,a.showPreview=!0,a.isAutoMode){a.addOrUpdateProgressMessage("✅ 需求报告已生成！正在自动执行完整的提示词生成流程...","progress");const $=Ne.getInstance();a.currentExecutionStep="thinking",a.addOrUpdateProgressMessage("🔄 步骤 1/4: 正在分析需求并生成关键指令...","progress");const Q=await $.getSystemPromptThinkingPoints(ne,T,"zh",[],b);a.promptData.thinkingPoints=Q,a.currentExecutionStep="initial",a.addOrUpdateProgressMessage("🔄 步骤 2/4: 正在基于关键指令生成初始提示词...","progress");const he=await $.generateSystemPrompt(ne,T,"zh",[],Q,b);a.promptData.initialPrompt=he,a.currentExecutionStep="advice",a.addOrUpdateProgressMessage("🔄 步骤 3/4: 正在分析提示词并生成优化建议...","progress");const ge=await $.getOptimizationAdvice(he,"system",T,"zh",[],b);a.promptData.advice=ge,a.currentExecutionStep="final",a.addOrUpdateProgressMessage("🔄 步骤 4/4: 正在应用优化建议，生成最终提示词...","progress");const be=await $.applyOptimizationAdvice(he,ge,"system",T,"zh",[],b);a.promptData.generatedPrompt=be,a.addOrUpdateProgressMessage("✅ 已为您生成高质量的AI提示词！右侧可查看完整的生成过程和最终结果。","progress")}else a.addOrUpdateProgressMessage("✅ 需求报告已生成！请在右侧预览面板中查看，您可以手动执行每个步骤。","progress");a.isGenerating=!1,a.currentExecutionStep=null}catch(f){a.isGenerating=!1,a.currentExecutionStep=null;const V=f instanceof Error?f.message:String(f);l.error(`提示词生成失败: ${V}。请检查网络连接和API配置后重试`)}},R=()=>{a.clearChat(),pe.value=!1,g.value=[],setTimeout(async()=>{await xe(t.welcomeMessage,!1),a.isInitialized=!0},500)},D=()=>{A.value&&A.value.click()},Y=async b=>{const T=b.target,f=Array.from(T.files||[]);if(f.length>0){try{const{processFiles:V}=await Nt(async()=>{const{processFiles:ne}=await import("./fileUtils-Cv9wNjYP.js");return{processFiles:ne}},[]),q=await V(f);q.attachments.length>0&&g.value.push(...q.attachments),q.errors.length>0&&q.errors.forEach(ne=>l.error(ne))}catch{l.error("文件处理失败")}T.value=""}},u=b=>{const T=g.value.findIndex(f=>f.id===b);T!==-1&&g.value.splice(T,1)},m=b=>{var T;if(b.preventDefault(),(T=b.dataTransfer)!=null&&T.items){for(let f=0;f<b.dataTransfer.items.length;f++)if(b.dataTransfer.items[f].kind==="file"){S.value=!0;break}}},_=b=>{b.preventDefault(),S.value=!0},E=b=>{b.preventDefault();const f=b.currentTarget.getBoundingClientRect(),V=b.clientX,q=b.clientY;(V<f.left||V>f.right||q<f.top||q>f.bottom)&&(S.value=!1)},B=async b=>{var f;b.preventDefault(),S.value=!1;const T=Array.from(((f=b.dataTransfer)==null?void 0:f.files)||[]);if(T.length>0)try{const{processFiles:V}=await Nt(async()=>{const{processFiles:ne}=await import("./fileUtils-Cv9wNjYP.js");return{processFiles:ne}},[]),q=await V(T);q.attachments.length>0&&g.value.push(...q.attachments),q.errors.length>0&&q.errors.forEach(ne=>l.error(ne))}catch{l.error("文件处理失败")}},W=()=>{K.value=!0},j=()=>{K.value=!1},J=b=>{if(b.key==="Enter"){if(b.shiftKey)return;if(K.value)return;b.preventDefault(),y()}},me=(b,T)=>{T&&(N.value[b]=T)},Oe=b=>{const T=a.chatMessages.find(f=>f.id===b);T&&(P.value[b]=T.content,a.startEditMessage(b),Ft(()=>{const f=N.value[b];if(f){f.focus();const V=f.value.length;f.setSelectionRange(V,V)}}))},je=b=>{const T=P.value[b];T!==void 0&&T.trim()?(a.saveEditMessage(b,T),delete P.value[b],delete N.value[b]):l.warning("消息内容不能为空")},et=b=>{a.cancelEditMessage(b),delete P.value[b],delete N.value[b]},_t=b=>{confirm("确定要删除这条消息吗？删除后该消息将不会在后续的AI对话中被考虑。")&&(a.deleteMessage(b),l.success("消息已删除"))},Vt=async b=>{try{await navigator.clipboard.writeText(b),l.success("已复制到剪贴板")}catch{const f=document.createElement("textarea");f.value=b,document.body.appendChild(f),f.select();try{document.execCommand("copy"),l.success("已复制到剪贴板")}catch{l.error("复制失败，请手动选择复制")}document.body.removeChild(f)}},Dt=async(b,T)=>{const f=a.chatMessages.find(ne=>ne.id===b);if(!f||f.type!=="ai")return;const{provider:V,model:q}=ke();if(!V||!q){l.warning("请先在右上角设置中配置AI模型和API密钥");return}try{const $=a.getValidMessages().slice(0,T).map(Q=>({type:Q.type,content:Q.content,attachments:Q.attachments||[]}));if(a.isTyping=!0,F.value){const Q=qe.getInstance();let he="";Q.setStreamUpdateCallback(le=>{he+=le;const Te=ze(he);a.updateMessage(b,Te),Le()});const ge=await h.generateSimpleResponse("",$,V,q.id,!0);Q.clearStreamUpdateCallback();const be=ze(ge);a.updateMessage(b,be)}else{const Q=await h.generateSimpleResponse("",$,V,q.id,!1),he=ze(Q);a.updateMessage(b,he)}a.isTyping=!1,l.success("消息已重新生成")}catch(ne){a.isTyping=!1;const $=ne instanceof Error?ne.message:String(ne);l.error(`重新生成失败: ${$}`),F.value&&qe.getInstance().clearStreamUpdateCallback()}},ct=async b=>{const T=a.chatMessages.find(ne=>ne.id===b);if(!T||T.type!=="user")return;const{provider:f,model:V}=ke();if(!f||!V){l.warning("请先在右上角设置中配置AI模型和API密钥");return}const q=P.value[b];if(q!==void 0&&q.trim()){a.saveEditMessage(b,q),delete P.value[b],delete N.value[b],a.clearProgressMessages();const ne=a.chatMessages.findIndex($=>$.id===b);if(ne!==-1)for(let $=ne+1;$<a.chatMessages.length;$++){const Q=a.chatMessages[$];Q&&!Q.isProgress&&a.deleteMessage(Q.id)}try{a.isTyping=!0;const $=F.value;if($){const Q=qe.getInstance();let he="",ge=-1;Q.setStreamUpdateCallback(ee=>{ge===-1&&(ge=Ge()),he+=ee;const Re=ze(he);Pe(Re),Le()});const le=a.getValidMessages().map(ee=>({type:ee.type,content:ee.content,attachments:ee.attachments||[]})),Te=await h.generateSimpleResponse("",le,f,V.id,$);Q.clearStreamUpdateCallback(),(rt(Te)||Te.includes("基于我们的对话，我现在为您生成需求报告："))&&setTimeout(async()=>{const ee=r.getCurrentProvider(),Re=r.getCurrentModel();ee&&Re&&await p(ee,Re.id)},800)}else{const he=a.getValidMessages().map(le=>({type:le.type,content:le.content,attachments:le.attachments||[]})),ge=await h.generateSimpleResponse("",he,f,V.id,$);if(rt(ge)||ge.includes("基于我们的对话，我现在为您生成需求报告：")){const le=ze(ge);await xe(le,!1),setTimeout(async()=>{const Te=r.getCurrentProvider(),Ce=r.getCurrentModel();Te&&Ce&&await p(Te,Ce.id)},800)}else{const le=ze(ge);await xe(le,!1)}}}catch($){a.isTyping=!1,a.isGenerating=!1;const Q=$ instanceof Error?$.message:String($);l.error(`重新发送失败: ${Q}`),F.value&&qe.getInstance().clearStreamUpdateCallback()}}else l.warning("消息内容不能为空")},Kt=async(b,T)=>{const f=a.chatMessages.find(ne=>ne.id===b);if(!f||f.type!=="user")return;const{provider:V,model:q}=ke();if(!V||!q){l.warning("请先在右上角设置中配置AI模型和API密钥");return}try{if(a.clearProgressMessages(),T!==-1)for(let $=T+1;$<a.chatMessages.length;$++){const Q=a.chatMessages[$];Q&&!Q.isProgress&&a.deleteMessage(Q.id)}a.isTyping=!0;const ne=F.value;if(ne){const $=qe.getInstance();let Q="",he=-1;$.setStreamUpdateCallback(Ce=>{he===-1&&(he=Ge()),Q+=Ce;const ee=ze(Q);Pe(ee),Le()});const be=a.getValidMessages().map(Ce=>({type:Ce.type,content:Ce.content,attachments:Ce.attachments||[]})),le=await h.generateSimpleResponse("",be,V,q.id,ne);$.clearStreamUpdateCallback(),(rt(le)||le.includes("基于我们的对话，我现在为您生成需求报告："))&&setTimeout(async()=>{const Ce=r.getCurrentProvider(),ee=r.getCurrentModel();Ce&&ee&&await p(Ce,ee.id)},800)}else{const Q=a.getValidMessages().map(be=>({type:be.type,content:be.content,attachments:be.attachments||[]})),he=await h.generateSimpleResponse("",Q,V,q.id,ne);if(rt(he)||he.includes("基于我们的对话，我现在为您生成需求报告：")){const be=ze(he);await xe(be,!1),setTimeout(async()=>{const le=r.getCurrentProvider(),Te=r.getCurrentModel();le&&Te&&await p(le,Te.id)},800)}else{const be=ze(he);await xe(be,!1)}}}catch(ne){a.isTyping=!1,a.isGenerating=!1;const $=ne instanceof Error?ne.message:String(ne);l.error(`重新发送失败: ${$}`),F.value&&qe.getInstance().clearStreamUpdateCallback()}},Ot=(b,T)=>{b.key==="Enter"&&b.ctrlKey?(b.preventDefault(),je(T)):b.key==="Escape"&&(b.preventDefault(),et(T))};return(b,T)=>(w(),x("div",{class:"bg-white rounded-lg shadow-sm flex flex-col h-full max-h-full overflow-hidden relative",onDragover:zt(_,["prevent"]),onDragenter:zt(m,["prevent"]),onDragleave:zt(E,["prevent"]),onDrop:zt(B,["prevent"])},[n("div",Qo,[n("div",Xo,[n("div",ea,[T[8]||(T[8]=n("h2",{class:"font-semibold text-gray-800"},"AI助手对话",-1)),n("button",{onClick:T[0]||(T[0]=f=>L.value=!L.value),class:"p-1 hover:bg-gray-100 rounded transition-colors",title:G.value?`当前模型: ${Ie()}`:"选择AI助手专用模型"},[...T[7]||(T[7]=[n("svg",{class:"w-4 h-4 text-gray-600 hover:text-gray-800",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 7h12m0 0l-4 4m4-4l-4-4m0 6H4m0 0l4 4m-4-4l4-4"})],-1)])],8,ta)]),n("div",ia,[d(i)&&d(o)?(w(),x("button",{key:0,onClick:T[1]||(T[1]=f=>b.$emit("toggle")),class:"p-1 hover:bg-gray-100 rounded transition-colors",title:"折叠"},[X(d(zi),{class:"w-5 h-5 text-gray-500"})])):O("",!0),n("div",oa,[T[9]||(T[9]=n("span",{class:"text-sm text-gray-600"},"流式:",-1)),n("button",{onClick:Z,class:se(["relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none",F.value?"bg-blue-500":"bg-gray-300"]),title:F.value?"关闭流式模式":"开启流式模式"},[n("span",{class:se(["inline-block h-3 w-3 transform rounded-full bg-white transition-transform",F.value?"translate-x-5":"translate-x-1"])},null,2)],10,aa)]),n("button",{onClick:R,class:"text-gray-500 hover:text-gray-700 text-sm"}," 重新开始 ")])]),L.value?(w(),x("div",na,[n("div",sa,[n("div",ra,[T[10]||(T[10]=n("label",{class:"text-sm font-medium text-gray-700"},"AI助手专用模型",-1)),C.value?(w(),x("button",{key:0,onClick:fe,class:"px-2 py-1 text-xs text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded transition-colors",title:"重置为全局模型"}," 重置 ")):O("",!0)]),n("div",la,[n("div",ca,[ue(n("select",{"onUpdate:modelValue":T[2]||(T[2]=f=>C.value=f),onChange:Ee,class:"w-full px-2 py-1.5 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"},[T[11]||(T[11]=n("option",{value:""},"使用全局模型",-1)),(w(!0),x(Se,null,_e(de.value,f=>(w(),x("option",{key:f.id,value:f.id},ae(f.name),9,ha))),128))],544),[[Pt,C.value]])]),n("div",ua,[ue(n("select",{"onUpdate:modelValue":T[3]||(T[3]=f=>G.value=f),onChange:z,disabled:!C.value,class:"w-full px-2 py-1.5 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:bg-gray-100"},[T[12]||(T[12]=n("option",{value:""},"选择模型",-1)),(w(!0),x(Se,null,_e(ye.value,f=>(w(),x("option",{key:f.id,value:f.id},ae(f.name),9,da))),128))],40,pa),[[Pt,G.value]])])]),n("div",ma,[C.value?G.value?(w(),x("span",ya,"当前: "+ae(Ie()),1)):(w(),x("span",fa,"请选择模型")):(w(),x("span",ga,"当前: 跟随全局模型设置"))])])])):O("",!0)]),n("div",{ref_key:"chatContainer",ref:k,class:"flex-1 overflow-y-auto p-4 space-y-4 min-h-0",style:Qt({maxHeight:Ve.value})},[(w(!0),x(Se,null,_e(d(a).chatMessages.filter(f=>!f.isDeleted),(f,V)=>(w(),x("div",{key:f.id||V,class:se([f.type==="user"?"justify-end":"justify-start","flex group"])},[n("div",{class:se(["flex flex-col w-full",f.isEditing?"max-w-full sm:max-w-2xl":"max-w-xs lg:max-w-md"])},[n("div",{class:se([f.isEditing?"bg-transparent border-0 shadow-none p-0":f.type==="user"?"bg-blue-500 text-white px-4 py-3 rounded-lg":f.isProgress?"bg-blue-50 text-blue-800 border border-blue-200 px-4 py-3 rounded-lg":"bg-gray-100 text-gray-800 px-4 py-3 rounded-lg",f.isProgress&&"animate-pulse",!f.isEditing&&(f.type==="user"?"ml-auto":"mr-auto"),"transition-all duration-300 relative"])},[f.isEditing?(w(),x("div",va,[n("div",ba,[n("div",wa,[ue(n("textarea",{ref_for:!0,ref:q=>me(f.id,q),"onUpdate:modelValue":q=>P.value[f.id]=q,class:"w-full p-4 border-0 resize-none focus:outline-none text-gray-800 bg-white min-h-[80px] max-h-[200px] overflow-y-auto text-base",onKeydown:q=>Ot(q,f.id),placeholder:"编辑消息内容..."},null,40,ka),[[ve,P.value[f.id]]])])])])):(w(),x("div",xa,[f.type==="ai"?(w(),x("div",{key:0,innerHTML:Je(f.content),class:"prose prose-sm max-w-none prose-headings:text-gray-800 prose-p:text-gray-800 prose-li:text-gray-800 prose-strong:text-gray-800"},null,8,Ta)):(w(),x("div",{key:1,innerHTML:Ze(f.content),class:"text-white [&_h1]:text-xl [&_h1]:font-bold [&_h1]:text-white [&_h1]:mb-2 [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-white [&_h2]:mb-2 [&_h3]:text-base [&_h3]:font-bold [&_h3]:text-white [&_h3]:mb-1 [&_h4]:text-sm [&_h4]:font-bold [&_h4]:text-white [&_h5]:text-sm [&_h5]:font-bold [&_h5]:text-white [&_h6]:text-sm [&_h6]:font-bold [&_h6]:text-white [&_p]:text-white [&_p]:mb-2 [&_strong]:font-bold [&_strong]:text-white [&_b]:font-bold [&_b]:text-white [&_em]:italic [&_em]:text-white [&_i]:italic [&_i]:text-white [&_ul]:list-disc [&_ul]:list-inside [&_ul]:text-white [&_ul]:mb-2 [&_ol]:list-decimal [&_ol]:list-inside [&_ol]:text-white [&_ol]:mb-2 [&_li]:text-white [&_li]:mb-1 [&_code]:bg-blue-600 [&_code]:text-blue-100 [&_code]:px-1 [&_code]:rounded [&_code]:font-mono [&_pre]:bg-blue-600 [&_pre]:text-blue-100 [&_pre]:p-2 [&_pre]:rounded [&_pre]:overflow-x-auto [&_a]:text-blue-200 [&_a]:underline [&_blockquote]:border-l-2 [&_blockquote]:border-blue-300 [&_blockquote]:pl-2 [&_blockquote]:text-blue-100"},null,8,Aa))]))],2),f.attachments&&f.attachments.length>0&&!f.isEditing?(w(),x("div",{key:0,class:se(["mt-2",f.type==="user"?"ml-auto max-w-xs lg:max-w-md":"mr-auto max-w-xs lg:max-w-md"])},[n("div",Ia,"附件 ("+ae(f.attachments.length)+")",1),n("div",Sa,[(w(!0),x(Se,null,_e(f.attachments,q=>(w(),x("div",{key:q.id,class:se(["flex-shrink-0 flex items-center gap-2 px-2 py-1.5 rounded-md text-xs border min-w-0",f.type==="user"?"border-blue-200 bg-blue-50":"border-gray-200 bg-gray-100"])},[n("div",Pa,[n("div",Ca,[q.type==="image"?(w(),x("div",Ma,"🖼️")):q.type==="document"?(w(),x("div",Ea,"📄")):q.type==="audio"?(w(),x("div",Ra,"🎵")):q.type==="video"?(w(),x("div",_a,"🎬")):(w(),x("div",Da,"📎"))]),n("div",Oa,[n("div",{class:se(["truncate max-w-20 font-medium text-xs",f.type==="user"?"text-blue-700":"text-gray-700"]),title:q.name},ae(q.name),11,za),n("div",{class:se(["text-xs",f.type==="user"?"text-blue-500":"text-gray-500"])},ae((q.size/1024).toFixed(1))+"KB ",3)])])],2))),128))])],2)):O("",!0),f.isProgress?O("",!0):(w(),x("div",{key:1,class:se(["flex space-x-1 mt-2 transition-opacity duration-200",[f.isEditing?"opacity-100 justify-end":"opacity-0 group-hover:opacity-100 "+(f.type==="user"?"justify-end":"justify-start")]])},[f.isEditing?(w(),x(Se,{key:0},[n("button",{onClick:q=>f.type==="user"?ct(f.id):je(f.id),class:"p-1.5 text-gray-500 hover:text-blue-600 transition-colors rounded-lg hover:bg-gray-100",title:f.type==="user"?"保存并重新发送":"保存编辑",disabled:d(a).isTyping||d(a).isGenerating},[X(d(Ai),{class:"w-3.5 h-3.5"})],8,qa),n("button",{onClick:q=>et(f.id),class:"p-1.5 text-gray-500 hover:text-red-600 transition-colors rounded-lg hover:bg-gray-100",title:"取消编辑"},[X(d(Ct),{class:"w-3.5 h-3.5"})],8,$a)],64)):(w(),x(Se,{key:1},[f.type==="ai"?(w(),x("button",{key:0,onClick:q=>Dt(f.id,V),class:"p-1.5 text-gray-500 hover:text-blue-600 transition-colors rounded-lg hover:bg-gray-100",title:"重新生成回复",disabled:d(a).isTyping||d(a).isGenerating},[X(d(Me),{class:"w-3.5 h-3.5"})],8,La)):O("",!0),f.type==="user"?(w(),x("button",{key:1,onClick:q=>Kt(f.id,V),class:"p-1.5 text-gray-500 hover:text-blue-600 transition-colors rounded-lg hover:bg-gray-100",title:"重新发送消息",disabled:d(a).isTyping||d(a).isGenerating},[X(d(Ai),{class:"w-3.5 h-3.5"})],8,Na)):O("",!0),n("button",{onClick:q=>Oe(f.id),class:"p-1.5 text-gray-500 hover:text-green-600 transition-colors rounded-lg hover:bg-gray-100",title:"编辑消息"},[X(d(uo),{class:"w-3.5 h-3.5"})],8,Fa),n("button",{onClick:q=>_t(f.id),class:"p-1.5 text-gray-500 hover:text-red-600 transition-colors rounded-lg hover:bg-gray-100",title:"删除消息"},[X(d($i),{class:"w-3.5 h-3.5"})],8,Ua),n("button",{onClick:q=>Vt(f.content),class:"p-1.5 text-gray-500 hover:text-blue-600 transition-colors rounded-lg hover:bg-gray-100",title:"复制消息内容"},[X(d(lt),{class:"w-3.5 h-3.5"})],8,Wa)],64))],2))],2)],2))),128)),d(a).isTyping?(w(),x("div",Ga,[...T[13]||(T[13]=[Oi('<div class="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg"><div class="flex space-x-1"><div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div><div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay:0.1s;"></div><div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay:0.2s;"></div></div></div>',1)])])):O("",!0)],4),We.value?(w(),x("div",Ba,[T[14]||(T[14]=n("div",{class:"text-xs text-gray-500 mb-2"},"快速回复：",-1)),n("div",ja,[(w(!0),x(Se,null,_e(U.value,f=>(w(),x("button",{key:f,onClick:V=>Xe(f),class:"px-3 py-1 text-sm bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"},ae(f),9,Ya))),128))])])):O("",!0),n("div",{ref_key:"inputContainer",ref:I,class:"p-3 border-t border-gray-200 bg-white flex-shrink-0 relative"},[n("input",{ref_key:"fileInputRef",ref:A,type:"file",multiple:"",accept:"image/*,video/*,audio/*,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.md,.csv,.json,.xml,.html,.css,.js,.ts,.py,.java,.c,.cpp,.yaml,.yml",onChange:Y,class:"hidden"},null,544),g.value.length>0?(w(),x("div",Ha,[n("div",Va,[n("span",Ka,"已选择 "+ae(g.value.length)+" 个附件",1),n("button",{onClick:T[4]||(T[4]=f=>g.value=[]),class:"text-xs text-red-500 hover:text-red-700"}," 清空全部 ")]),n("div",Ja,[(w(!0),x(Se,null,_e(g.value,f=>(w(),x("div",{key:f.id,class:"flex-shrink-0 flex items-center gap-2 bg-white px-3 py-2 rounded-md border border-gray-200 min-w-0"},[n("div",Za,[n("div",Qa,[f.type==="image"?(w(),x("div",Xa,"🖼️")):f.type==="document"?(w(),x("div",en,"📄")):f.type==="audio"?(w(),x("div",tn,"🎵")):f.type==="video"?(w(),x("div",on,"🎬")):(w(),x("div",an,"📎"))]),n("div",nn,[n("div",{class:"text-xs font-medium text-gray-700 truncate max-w-24",title:f.name},ae(f.name),9,sn),n("div",rn,ae((f.size/1024).toFixed(1))+"KB ",1)])]),n("button",{onClick:V=>u(f.id),class:"flex-shrink-0 w-4 h-4 text-gray-400 hover:text-red-500 transition-colors",title:"移除附件"},[X(d(Ct),{class:"w-3 h-3"})],8,ln)]))),128))])])):O("",!0),n("div",cn,[n("div",hn,[ue(n("textarea",{ref_key:"textareaRef",ref:v,"onUpdate:modelValue":T[5]||(T[5]=f=>c.value=f),onKeydown:J,onCompositionstart:W,onCompositionend:j,onInput:te,onFocus:T[6]||(T[6]=f=>pe.value=!0),placeholder:We.value?"输入或点击上方快速回复...":"Shift+Enter换行",disabled:d(a).isTyping||d(a).isGenerating,class:"w-full h-full px-2 pt-3 pb-1 border-0 outline-none resize-none disabled:opacity-50 text-base overflow-y-auto bg-transparent",rows:"1"},null,40,un),[[ve,c.value]])]),n("div",pn,[n("button",{onClick:D,class:"w-8 h-8 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors flex items-center justify-center pointer-events-auto",title:"支持拖拽上传图片、文档、音频等格式，单个文件最大25MB"},[n("div",dn,[X(d(ho),{class:"w-4 h-4"}),g.value.length>0?(w(),x("span",mn,ae(g.value.length),1)):O("",!0)])]),n("button",{onClick:y,disabled:!c.value.trim()||d(a).isTyping||d(a).isGenerating,class:"w-8 h-8 bg-blue-500 text-white rounded-full hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center pointer-events-auto"},[X(d(ro),{class:"w-4 h-4"})],8,gn)])])],512),S.value?(w(),x("div",fn,[n("div",yn,[X(d(go),{class:"w-12 h-12 mx-auto mb-4 text-blue-500"}),T[15]||(T[15]=n("div",{class:"text-lg font-medium text-blue-700 mb-2"}," 释放文件以上传 ",-1)),T[16]||(T[16]=n("div",{class:"text-sm text-blue-600"}," 支持图片、文档、音频等格式 ",-1))])])):O("",!0)],32))}}),vn={class:"bg-white rounded-lg shadow-sm flex flex-col h-full"},bn={class:"p-4 border-b border-gray-200 flex items-center justify-between"},wn={class:"flex items-center space-x-3"},kn={key:0,class:"flex items-center px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs border border-blue-200"},xn={class:"flex items-center space-x-3"},Tn={class:"flex items-center space-x-2"},An={class:"flex items-center cursor-pointer"},In={class:"text-sm text-gray-600"},Sn={key:0,class:"p-6 text-center"},Pn={key:1,class:"flex-1 flex flex-col overflow-hidden p-4"},Cn={class:"flex space-x-2 min-w-max px-1"},Mn={key:0,class:"flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm whitespace-nowrap"},En={key:0,class:"border rounded-lg overflow-hidden flex flex-col flex-1"},Rn={class:"bg-orange-50 px-3 py-2 text-sm font-medium text-orange-700 flex items-center justify-between flex-shrink-0"},_n={class:"flex items-center space-x-2"},Dn=["disabled"],On={class:"p-3 bg-white flex-1 flex flex-col overflow-hidden"},zn=["placeholder"],qn={class:"mt-4 flex justify-end flex-shrink-0"},$n={key:0},Ln=["disabled"],Nn={key:1},Fn=["disabled"],Un={key:1,class:"border rounded-lg overflow-hidden flex flex-col flex-1 min-h-0"},Wn={class:"bg-purple-50 px-3 py-2 text-sm font-medium text-purple-700 flex items-center justify-between flex-shrink-0"},Gn={class:"flex items-center space-x-2"},Bn=["disabled"],jn=["onUpdate:modelValue"],Yn=["onClick"],Hn={class:"p-3 pt-4 flex justify-between flex-shrink-0 border-t border-gray-100 bg-white"},Vn={key:0},Kn=["disabled"],Jn={key:2,class:"border rounded-lg overflow-hidden flex flex-col flex-1"},Zn={class:"bg-green-50 px-3 py-2 text-sm font-medium text-green-700 flex items-center justify-between flex-shrink-0"},Qn={class:"flex items-center space-x-2"},Xn=["disabled"],es={class:"p-3 bg-white flex-1 flex flex-col overflow-hidden"},ts={key:0,class:"mt-4 flex justify-end flex-shrink-0"},is=["disabled"],os={key:3,class:"border rounded-lg overflow-hidden flex flex-col flex-1 min-h-0"},as={class:"bg-yellow-50 px-3 py-2 text-sm font-medium text-yellow-700 flex items-center justify-between flex-shrink-0"},ns={class:"flex items-center space-x-2"},ss=["disabled"],rs=["onUpdate:modelValue"],ls=["onClick"],cs={key:0},hs=["disabled"],us={key:4,class:"border rounded-lg overflow-hidden flex flex-col flex-1"},ps={class:"bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700 flex items-center justify-between flex-shrink-0"},ds={class:"flex items-center space-x-2"},ms=["disabled"],gs={class:"p-3 bg-white flex-1 flex flex-col overflow-hidden"},fs={key:0,class:"flex space-x-2 pt-4 flex-shrink-0"},ys=["disabled"],vs=["disabled"],bs={key:2,class:"flex-1 flex items-center justify-center p-6 text-center text-gray-500"},ws=Mt({__name:"PreviewPanel",props:{isMobile:{type:Boolean},isExpanded:{type:Boolean}},emits:["toggle"],setup(s){const e=s,{isMobile:i,isExpanded:o}=e,t=si(),a=Et(),r=jt(),l=qe.getInstance(),h=Ut.getInstance(),c=M("report"),k=M(),I=M(),v=M(),A=M(),g=M(),S=M(),P=M(new Set),N=u=>({report:"生成需求报告",thinking:"提取关键指令",initial:"生成初始提示词",advice:"分析优化建议",final:"合成最终提示词"})[u]||"生成",F=u=>{P.value.delete(u)},L=u=>{const _={report:I,thinking:v,initial:A,advice:g,zh:S}[u],E=k.value;if(_!=null&&_.value&&E){const B=_.value,W=E.getBoundingClientRect(),j=B.getBoundingClientRect(),J=j.left-W.left+E.scrollLeft,me=J+j.width,Oe=W.width,je=E.scrollLeft,et=je+Oe;J<je?E.scrollTo({left:J-20,behavior:"smooth"}):me>et&&E.scrollTo({left:J-Oe+j.width+20,behavior:"smooth"})}},C=u=>{c.value=u,Ft(()=>{L(u)})},G=u=>{c.value=u,F(u),Ft(()=>{L(u)})},K=Fe({get:()=>{if(t.promptData.generatedPrompt&&typeof t.promptData.generatedPrompt=="string")return t.promptData.generatedPrompt;if(t.promptData.generatedPrompt&&typeof t.promptData.generatedPrompt=="object"){if(c.value==="zh")return t.promptData.generatedPrompt.zh||"";if(c.value==="en")return t.promptData.generatedPrompt.en||""}return""},set:u=>{typeof t.promptData.generatedPrompt=="string"?t.promptData.generatedPrompt=u:typeof t.promptData.generatedPrompt=="object"&&(c.value==="zh"?t.promptData.generatedPrompt.zh=u:c.value==="en"&&(t.promptData.generatedPrompt.en=u))}}),te=Fe(()=>!0),pe=Fe(()=>t.chatMessages&&t.chatMessages.length>0),U=()=>{t.promptData.thinkingPoints&&t.promptData.thinkingPoints.push("")},H=u=>{t.promptData.thinkingPoints&&t.promptData.thinkingPoints.length>1&&t.promptData.thinkingPoints.splice(u,1)},Z=()=>{t.promptData.advice&&t.promptData.advice.push("")},de=u=>{t.promptData.advice&&t.promptData.advice.length>1&&t.promptData.advice.splice(u,1)},ye=M(!1),Ee=M(!1),z=M(!1),fe=M("markdown"),Ie=M("zh"),ke=M({markdown_zh:"",markdown_en:"",xml_zh:"",xml_en:""}),We=()=>{const u=K.value;if(u){const m=`${fe.value}_${Ie.value}`;ke.value[m]=u}},Ve=(u,m)=>{const _=`${u}_${m}`;return ke.value[_]},Ke=()=>{K.value&&!ke.value.markdown_zh&&(ke.value.markdown_zh=K.value,fe.value="markdown",Ie.value="zh")},Je=async()=>{if(!t.promptData.requirementReport.trim()){r.warning("请先输入需求描述");return}try{z.value=!0;const u=a.getCurrentProvider(),m=a.getCurrentModel();if(!u||!m){r.error("请先配置AI模型");return}const _=Ne.getInstance(),E=t.promptData.requirementReport;t.currentExecutionStep="thinking";let B="",W=!1;const j=b=>{B+=b,!W&&b.trim()&&(W=!0,t.promptData.thinkingPoints=["正在生成..."],C("thinking"));const T=B.split(`
`).map(f=>f.replace(/^[*-]\s*/,"").trim()).filter(Boolean);T.length>0&&(t.promptData.thinkingPoints=T)},J=await _.getSystemPromptThinkingPoints(E,m.id,"zh",[],u,j);t.promptData.thinkingPoints=J,t.currentExecutionStep="initial";let me=!1;const Oe=b=>{!me&&b.trim()&&(me=!0,t.promptData.initialPrompt="正在生成...",C("initial")),me&&(t.promptData.initialPrompt==="正在生成..."?t.promptData.initialPrompt=b:t.promptData.initialPrompt+=b)},je=await _.generateSystemPrompt(E,m.id,"zh",[],J,u,Oe);t.promptData.initialPrompt=je,t.currentExecutionStep="advice";let et="",_t=!1;const Vt=b=>{et+=b,!_t&&b.trim()&&(_t=!0,t.promptData.advice=["正在生成..."],C("advice"));const T=et.split(`
`).map(f=>f.replace(/^[*-]\s*/,"").trim()).filter(Boolean);T.length>0&&(t.promptData.advice=T)},Dt=await _.getOptimizationAdvice(je,"system",m.id,"zh",[],u,Vt);t.promptData.advice=Dt,t.currentExecutionStep="final";let ct=!1;const Kt=b=>{!ct&&b.trim()&&(ct=!0,t.promptData.generatedPrompt="正在生成...",C("zh")),ct&&(t.promptData.generatedPrompt==="正在生成..."?t.promptData.generatedPrompt=b:t.promptData.generatedPrompt+=b)},Ot=await _.applyOptimizationAdvice(je,Dt,"system",m.id,"zh",[],u,Kt);t.promptData.generatedPrompt=Ot,fe.value="markdown",Ie.value="zh",ke.value={markdown_zh:Ot,markdown_en:"",xml_zh:"",xml_en:""},C("zh")}catch{r.error("自动生成提示词失败，请重试")}finally{z.value=!1,t.currentExecutionStep=null}},Ze=async()=>{if(!t.promptData.requirementReport.trim()){r.warning("请先输入需求报告");return}try{z.value=!0,t.currentExecutionStep="thinking";const u=a.getCurrentProvider(),m=a.getCurrentModel();if(!u||!m){r.error("请先配置AI模型");return}const _=Ne.getInstance();let E="",B=!1;const W=J=>{E+=J,!B&&J.trim()&&(B=!0,t.promptData.thinkingPoints=["正在生成..."],C("thinking"));const me=E.split(`
`).map(Oe=>Oe.replace(/^[*-]\s*/,"").trim()).filter(Boolean);me.length>0&&(t.promptData.thinkingPoints=me)},j=await _.getSystemPromptThinkingPoints(t.promptData.requirementReport,m.id,"zh",[],u,W);t.promptData.thinkingPoints=j}catch{r.error("生成关键指令失败，请重试")}finally{z.value=!1,t.currentExecutionStep=null}},Qe=async()=>{if(!t.promptData.thinkingPoints||t.promptData.thinkingPoints.length===0){r.warning("请先生成关键指令");return}try{z.value=!0,t.currentExecutionStep="initial";const u=a.getCurrentProvider(),m=a.getCurrentModel();if(!u||!m){r.error("请先配置AI模型");return}const _=Ne.getInstance();let E=!1;const B=j=>{!E&&j.trim()&&(E=!0,t.promptData.initialPrompt="正在生成...",C("initial")),E&&(t.promptData.initialPrompt==="正在生成..."?t.promptData.initialPrompt=j:t.promptData.initialPrompt+=j)},W=await _.generateSystemPrompt(t.promptData.requirementReport,m.id,"zh",[],t.promptData.thinkingPoints,u,B);t.promptData.initialPrompt=W}catch{r.error("生成初始提示词失败，请重试")}finally{z.value=!1,t.currentExecutionStep=null}},Xe=async()=>{if(!t.promptData.initialPrompt){r.error("请先生成初始提示词");return}try{z.value=!0,t.currentExecutionStep="advice";const u=a.getCurrentProvider(),m=a.getCurrentModel();if(!u||!m){r.error("请先配置AI模型");return}const _=Ne.getInstance();let E="",B=!1;const W=J=>{E+=J,!B&&J.trim()&&(B=!0,t.promptData.advice=["正在生成..."],C("advice"));const me=E.split(`
`).map(Oe=>Oe.replace(/^[*-]\s*/,"").trim()).filter(Boolean);me.length>0&&(t.promptData.advice=me)},j=await _.getOptimizationAdvice(t.promptData.initialPrompt,"system",m.id,"zh",[],u,W);t.promptData.advice=j}catch{r.error("生成优化建议失败，请重试")}finally{z.value=!1,t.currentExecutionStep=null}},Le=async()=>{if(!t.promptData.initialPrompt||!t.promptData.advice){r.error("请先完成前面的步骤");return}try{z.value=!0,t.currentExecutionStep="final";const u=a.getCurrentProvider(),m=a.getCurrentModel();if(!u||!m){r.error("请先配置AI模型");return}const _=Ne.getInstance();let E=!1;const B=j=>{!E&&j.trim()&&(E=!0,t.promptData.generatedPrompt="正在生成...",C("zh")),E&&(t.promptData.generatedPrompt==="正在生成..."?t.promptData.generatedPrompt=j:t.promptData.generatedPrompt+=j)},W=await _.applyOptimizationAdvice(t.promptData.initialPrompt,t.promptData.advice,"system",m.id,"zh",[],u,B);t.promptData.generatedPrompt=W,fe.value="markdown",Ie.value="zh",ke.value={markdown_zh:W,markdown_en:"",xml_zh:"",xml_en:""}}catch{r.error("生成最终提示词失败，请重试")}finally{z.value=!1,t.currentExecutionStep=null}},Ue=async()=>{if(K.value)try{ye.value=!0,We();const u=fe.value==="markdown"?"xml":"markdown",m=Ie.value,_=Ve(u,m);if(_)t.promptData.generatedPrompt=_,fe.value=u;else{const E=a.getCurrentProvider(),B=a.getCurrentModel();if(!E||!B){r.error("请先配置AI模型");return}let W="";u==="xml"?W=`将以下提示词转换为XML格式，使用语义化标签如 <role>、<task>、<constraints> 等组织结构。直接输出XML内容，不要添加说明文字：

${K.value}`:W=`将以下XML格式提示词转换为Markdown格式，使用标题、列表等语法。直接输出Markdown内容，不要添加说明文字：

${K.value}`;const j=await l.callAI([{role:"user",content:W}],E,B.id),J=Ri(j);t.promptData.generatedPrompt=J;const me=`${u}_${m}`;ke.value[me]=J,fe.value=u}}catch{r.error("格式转换失败，请重试")}finally{ye.value=!1}},Ge=async()=>{if(K.value)try{Ee.value=!0,We();const u=Ie.value==="zh"?"en":"zh",m=fe.value,_=Ve(m,u);if(_)t.promptData.generatedPrompt=_,Ie.value=u;else{const E=a.getCurrentProvider(),B=a.getCurrentModel();if(!E||!B){r.error("请先配置AI模型");return}let W="";u==="en"?W=`Translate the following Chinese AI system prompt to English. Keep all technical terms and formatting intact. Output only the translated content without any explanations:

${K.value}`:W=`将以下英文AI系统提示词翻译为中文，保持所有技术术语和格式不变。直接输出翻译内容，不要添加说明文字：

${K.value}`;const j=await l.callAI([{role:"user",content:W}],E,B.id),J=Ri(j);t.promptData.generatedPrompt=J;const me=`${m}_${u}`;ke.value[me]=J,Ie.value=u}}catch{r.error("语言转换失败，请重试")}finally{Ee.value=!1}},Pe=M({}),xe=async(u,m="default")=>{try{await navigator.clipboard.writeText(u),Pe.value[m]=!0,setTimeout(()=>{Pe.value[m]=!1},2e3)}catch{r.error("复制失败，请重试")}},y=async()=>{if(!pe.value){r.warning("需要先与AI助手对话才能重新生成需求描述");return}try{z.value=!0,t.currentExecutionStep="report";const u=a.getCurrentProvider(),m=a.getCurrentModel();if(!u||!m){r.error("请先配置AI模型");return}const E=t.getValidMessages().map(J=>({type:J.type,content:J.content}));let B="";const W=J=>{B+=J,t.promptData.requirementReport=B},j=await h.generateRequirementReportFromConversation(E,u,m.id,W);t.promptData.requirementReport=j,r.success("需求描述已重新生成")}catch{r.error("重新生成需求描述失败，请重试")}finally{z.value=!1,t.currentExecutionStep=null}},p=async()=>{if(!t.promptData.requirementReport.trim()){r.warning("请先输入需求描述");return}try{z.value=!0,t.currentExecutionStep="thinking";const u=a.getCurrentProvider(),m=a.getCurrentModel();if(!u||!m){r.error("请先配置AI模型");return}const _=Ne.getInstance();let E="",B=!1;const W=J=>{E+=J,!B&&J.trim()&&(B=!0,t.promptData.thinkingPoints=["正在生成..."],C("thinking"));const me=E.split(`
`).map(Oe=>Oe.replace(/^[*-]\s*/,"").trim()).filter(Boolean);me.length>0&&(t.promptData.thinkingPoints=me)},j=await _.getSystemPromptThinkingPoints(t.promptData.requirementReport,m.id,"zh",[],u,W);t.promptData.thinkingPoints=j,r.success("关键指令已重新生成")}catch{r.error("重新生成关键指令失败，请重试")}finally{z.value=!1,t.currentExecutionStep=null}},R=async()=>{if(!t.promptData.thinkingPoints||t.promptData.thinkingPoints.length===0){r.warning("请先生成关键指令");return}try{z.value=!0,t.currentExecutionStep="initial";const u=a.getCurrentProvider(),m=a.getCurrentModel();if(!u||!m){r.error("请先配置AI模型");return}const _=Ne.getInstance();let E=!1;const B=j=>{!E&&j.trim()&&(E=!0,t.promptData.initialPrompt="正在生成...",C("initial")),E&&(t.promptData.initialPrompt==="正在生成..."?t.promptData.initialPrompt=j:t.promptData.initialPrompt+=j)},W=await _.generateSystemPrompt(t.promptData.requirementReport,m.id,"zh",[],t.promptData.thinkingPoints,u,B);t.promptData.initialPrompt=W,r.success("初始提示词已重新生成")}catch{r.error("重新生成初始提示词失败，请重试")}finally{z.value=!1,t.currentExecutionStep=null}},D=async()=>{if(!t.promptData.initialPrompt){r.error("请先生成初始提示词");return}try{z.value=!0,t.currentExecutionStep="advice";const u=a.getCurrentProvider(),m=a.getCurrentModel();if(!u||!m){r.error("请先配置AI模型");return}const _=Ne.getInstance();let E="",B=!1;const W=J=>{E+=J,!B&&J.trim()&&(B=!0,t.promptData.advice=["正在生成..."],C("advice"));const me=E.split(`
`).map(Oe=>Oe.replace(/^[*-]\s*/,"").trim()).filter(Boolean);me.length>0&&(t.promptData.advice=me)},j=await _.getOptimizationAdvice(t.promptData.initialPrompt,"system",m.id,"zh",[],u,W);t.promptData.advice=j,r.success("优化建议已重新生成")}catch{r.error("重新生成优化建议失败，请重试")}finally{z.value=!1,t.currentExecutionStep=null}},Y=async()=>{if(!t.promptData.initialPrompt||!t.promptData.advice){r.error("请先完成前面的步骤");return}try{z.value=!0,t.currentExecutionStep="final";const u=a.getCurrentProvider(),m=a.getCurrentModel();if(!u||!m){r.error("请先配置AI模型");return}const _=Ne.getInstance();let E=!1;const B=j=>{!E&&j.trim()&&(E=!0,t.promptData.generatedPrompt="正在生成...",C("zh")),E&&(t.promptData.generatedPrompt==="正在生成..."?t.promptData.generatedPrompt=j:t.promptData.generatedPrompt+=j)},W=await _.applyOptimizationAdvice(t.promptData.initialPrompt,t.promptData.advice,"system",m.id,"zh",[],u,B);t.promptData.generatedPrompt=W,fe.value="markdown",Ie.value="zh",ke.value={markdown_zh:W,markdown_en:"",xml_zh:"",xml_en:""},r.success("最终提示词已重新生成")}catch{r.error("重新生成最终提示词失败，请重试")}finally{z.value=!1,t.currentExecutionStep=null}};return $e(()=>t.chatMessages.length,u=>{u===0&&(C("report"),P.value.clear(),fe.value="markdown",Ie.value="zh",ke.value={markdown_zh:"",markdown_en:"",xml_zh:"",xml_en:""})}),$e(()=>t.promptData.requirementReport,u=>{u&&u.trim().length>0&&(P.value.add("report"),C("report"))}),$e(()=>t.promptData.thinkingPoints,u=>{u&&u.length>0&&(P.value.add("thinking"),C("thinking"))}),$e(()=>t.promptData.initialPrompt,u=>{u&&u.trim().length>0&&(P.value.add("initial"),C("initial"))}),$e(()=>t.promptData.advice,u=>{u&&u.length>0&&(P.value.add("advice"),C("advice"))}),$e(()=>t.promptData.generatedPrompt,u=>{if(u){let m=!1;typeof u=="string"?m=u.trim().length>0:typeof u=="object"&&(m=!!(u.zh&&u.zh.trim().length>0||u.en&&u.en.trim().length>0)),m&&(Ke(),P.value.add("zh"),C("zh"))}}),(u,m)=>(w(),x("div",vn,[n("div",bn,[n("div",wn,[m[15]||(m[15]=n("h2",{class:"font-semibold text-gray-800"},"提示词预览",-1)),d(t).currentExecutionStep||d(t).isGenerating&&!d(t).currentExecutionStep?(w(),x("div",kn,[X(d(Me),{class:"w-3 h-3 animate-spin mr-1"}),n("span",null,ae(d(t).currentExecutionStep?N(d(t).currentExecutionStep)+"中":"生成需求报告中"),1)])):O("",!0)]),n("div",xn,[d(i)&&d(o)?(w(),x("button",{key:0,onClick:m[0]||(m[0]=_=>u.$emit("toggle")),class:"p-1 hover:bg-gray-100 rounded transition-colors",title:"折叠"},[X(d(zi),{class:"w-5 h-5 text-gray-500"})])):O("",!0),n("div",Tn,[n("label",An,[ue(n("input",{"onUpdate:modelValue":m[1]||(m[1]=_=>d(t).isAutoMode=_),type:"checkbox",class:"sr-only peer"},null,512),[[Xt,d(t).isAutoMode]]),n("span",In,ae(d(t).isAutoMode?"自动：":"手动："),1),m[16]||(m[16]=n("div",{class:"relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"},null,-1))])])])]),d(t).isGenerating&&!te.value?(w(),x("div",Sn,[X(d(Me),{class:"w-8 h-8 text-blue-500 animate-spin mx-auto mb-3"}),m[17]||(m[17]=n("p",{class:"text-gray-600"},"正在生成提示词...",-1))])):O("",!0),te.value?(w(),x("div",Pn,[n("div",{ref_key:"tabContainer",ref:k,class:"flex space-x-2 mb-4 flex-shrink-0 overflow-x-auto scrollbar-hide scroll-smooth"},[n("div",Cn,[d(t).isGenerating?(w(),x("div",Mn,[X(d(Me),{class:"w-3 h-3 animate-spin mr-1"}),m[18]||(m[18]=n("span",null,"生成中",-1))])):O("",!0),n("button",{ref_key:"reportTab",ref:I,onClick:m[2]||(m[2]=_=>G("report")),class:se([c.value==="report"?"bg-orange-500 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300","px-3 py-1 rounded text-sm transition-colors whitespace-nowrap flex-shrink-0"])}," 需求描述 ",2),d(t).promptData.thinkingPoints?(w(),x("button",{key:1,ref_key:"thinkingTab",ref:v,onClick:m[3]||(m[3]=_=>G("thinking")),class:se([c.value==="thinking"?"bg-purple-500 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300","px-3 py-1 rounded text-sm transition-colors whitespace-nowrap flex-shrink-0 relative"])}," 关键指令 ",2)):O("",!0),d(t).promptData.initialPrompt?(w(),x("button",{key:2,ref_key:"initialTab",ref:A,onClick:m[4]||(m[4]=_=>G("initial")),class:se([c.value==="initial"?"bg-green-500 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300","px-3 py-1 rounded text-sm transition-colors whitespace-nowrap flex-shrink-0 relative"])}," 初始提示词 ",2)):O("",!0),d(t).promptData.advice?(w(),x("button",{key:3,ref_key:"adviceTab",ref:g,onClick:m[5]||(m[5]=_=>G("advice")),class:se([c.value==="advice"?"bg-yellow-500 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300","px-3 py-1 rounded text-sm transition-colors whitespace-nowrap flex-shrink-0 relative"])}," 优化建议 ",2)):O("",!0),K.value?(w(),x("button",{key:4,ref_key:"zhTab",ref:S,onClick:m[6]||(m[6]=_=>G("zh")),class:se([c.value==="zh"?"bg-blue-500 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300","px-3 py-1 rounded text-sm transition-colors whitespace-nowrap flex-shrink-0 relative"])}," 最终提示词 ",2)):O("",!0)])],512),c.value==="report"?(w(),x("div",En,[n("div",Rn,[m[19]||(m[19]=n("span",null,"需求描述",-1)),n("div",_n,[n("button",{onClick:y,disabled:z.value||d(t).isGenerating,class:"text-orange-500 hover:text-orange-600 disabled:opacity-50 disabled:cursor-not-allowed",title:"重新生成需求描述"},[X(d(Me),{class:se(["w-4 h-4",z.value&&d(t).currentExecutionStep==="report"&&"animate-spin"])},null,8,["class"])],8,Dn),n("button",{onClick:m[7]||(m[7]=_=>xe(d(t).promptData.requirementReport,"report")),class:"text-orange-500 hover:text-orange-600",title:"复制到剪贴板"},[Pe.value.report?(w(),Ae(d(xt),{key:0,class:"w-4 h-4"})):(w(),Ae(d(lt),{key:1,class:"w-4 h-4"}))])])]),n("div",On,[ue(n("textarea",{"onUpdate:modelValue":m[8]||(m[8]=_=>d(t).promptData.requirementReport=_),placeholder:pe.value?"基于对话生成的需求描述...":"请直接描述您的需求，例如：我需要一个专业的代码审查助手，能够分析代码质量、发现潜在问题并提供改进建议...",class:"w-full flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-300 focus:ring-0 resize-none"},null,8,zn),[[ve,d(t).promptData.requirementReport]]),n("div",qn,[d(t).isAutoMode?(w(),x("div",$n,[n("button",{onClick:Je,disabled:!d(t).promptData.requirementReport.trim()||z.value||d(t).isGenerating,class:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"},[z.value||d(t).isGenerating?(w(),Ae(d(Me),{key:0,class:"w-4 h-4 animate-spin"})):O("",!0),n("span",null,ae(z.value||d(t).isGenerating?"自动生成中...":"自动生成提示词"),1)],8,Ln)])):O("",!0),d(t).isAutoMode?O("",!0):(w(),x("div",Nn,[n("button",{onClick:Ze,disabled:!d(t).promptData.requirementReport.trim()||z.value,class:"px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"},[z.value&&d(t).currentExecutionStep==="thinking"?(w(),Ae(d(Me),{key:0,class:"w-4 h-4 animate-spin"})):O("",!0),n("span",null,ae(z.value&&d(t).currentExecutionStep==="thinking"?"执行中...":"生成关键指令"),1)],8,Fn)]))])])])):O("",!0),c.value==="thinking"?(w(),x("div",Un,[n("div",Wn,[m[20]||(m[20]=n("span",null,"关键指令",-1)),n("div",Gn,[n("button",{onClick:p,disabled:z.value||d(t).isGenerating,class:"text-purple-500 hover:text-purple-600 disabled:opacity-50 disabled:cursor-not-allowed",title:"重新生成关键指令"},[X(d(Me),{class:se(["w-4 h-4",z.value&&d(t).currentExecutionStep==="thinking"&&"animate-spin"])},null,8,["class"])],8,Bn),n("button",{onClick:m[9]||(m[9]=_=>{var E;return xe(((E=d(t).promptData.thinkingPoints)==null?void 0:E.join("\\n"))||"","thinking")}),class:"text-purple-500 hover:text-purple-600",title:"复制到剪贴板"},[Pe.value.thinking?(w(),Ae(d(xt),{key:0,class:"w-4 h-4"})):(w(),Ae(d(lt),{key:1,class:"w-4 h-4"}))])])]),n("div",{class:se(["bg-white flex flex-col",d(i)?"flex-1 min-h-0":"p-3 flex-1"])},[n("div",{class:se(["space-y-2 overflow-y-auto flex-1",d(i)?"p-3":""]),style:Qt(d(i)?"":"max-height: calc(100vh - 400px);")},[(w(!0),x(Se,null,_e(d(t).promptData.thinkingPoints,(_,E)=>(w(),x("div",{key:E,class:"flex items-start"},[m[21]||(m[21]=n("span",{class:"text-purple-500 mr-2 mt-2"},"•",-1)),ue(n("input",{"onUpdate:modelValue":B=>d(t).promptData.thinkingPoints[E]=B,class:"flex-1 px-3 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500 focus:border-transparent"},null,8,jn),[[ve,d(t).promptData.thinkingPoints[E]]]),n("button",{onClick:B=>H(E),class:"ml-2 px-2 py-1 text-red-500 hover:text-red-700 text-sm",title:"删除这条指令"}," × ",8,Yn)]))),128))],6),n("div",Hn,[n("button",{onClick:U,class:"px-3 py-1 text-purple-600 hover:text-purple-800 text-sm"}," + 添加指令 "),d(t).isAutoMode?O("",!0):(w(),x("div",Vn,[n("button",{onClick:Qe,disabled:!d(t).promptData.thinkingPoints||d(t).promptData.thinkingPoints.length===0||z.value,class:"px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"},[z.value&&d(t).currentExecutionStep==="initial"?(w(),Ae(d(Me),{key:0,class:"w-4 h-4 animate-spin"})):O("",!0),n("span",null,ae(z.value&&d(t).currentExecutionStep==="initial"?"执行中...":"生成初始提示词"),1)],8,Kn)]))])],2)])):O("",!0),c.value==="initial"?(w(),x("div",Jn,[n("div",Zn,[m[22]||(m[22]=n("span",null,"初始提示词",-1)),n("div",Qn,[n("button",{onClick:R,disabled:z.value||d(t).isGenerating,class:"text-green-500 hover:text-green-600 disabled:opacity-50 disabled:cursor-not-allowed",title:"重新生成初始提示词"},[X(d(Me),{class:se(["w-4 h-4",z.value&&d(t).currentExecutionStep==="initial"&&"animate-spin"])},null,8,["class"])],8,Xn),n("button",{onClick:m[10]||(m[10]=_=>xe(d(t).promptData.initialPrompt||"","initial")),class:"text-green-500 hover:text-green-600",title:"复制到剪贴板"},[Pe.value.initial?(w(),Ae(d(xt),{key:0,class:"w-4 h-4"})):(w(),Ae(d(lt),{key:1,class:"w-4 h-4"}))])])]),n("div",es,[ue(n("textarea",{"onUpdate:modelValue":m[11]||(m[11]=_=>d(t).promptData.initialPrompt=_),class:"w-full flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"},null,512),[[ve,d(t).promptData.initialPrompt]]),d(t).isAutoMode?O("",!0):(w(),x("div",ts,[n("button",{onClick:Xe,disabled:!d(t).promptData.initialPrompt||z.value,class:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"},[z.value&&d(t).currentExecutionStep==="advice"?(w(),Ae(d(Me),{key:0,class:"w-4 h-4 animate-spin"})):O("",!0),n("span",null,ae(z.value&&d(t).currentExecutionStep==="advice"?"执行中...":"生成优化建议"),1)],8,is)]))])])):O("",!0),c.value==="advice"?(w(),x("div",os,[n("div",as,[m[23]||(m[23]=n("span",null,"优化建议",-1)),n("div",ns,[n("button",{onClick:D,disabled:z.value||d(t).isGenerating,class:"text-yellow-500 hover:text-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed",title:"重新生成优化建议"},[X(d(Me),{class:se(["w-4 h-4",z.value&&d(t).currentExecutionStep==="advice"&&"animate-spin"])},null,8,["class"])],8,ss),n("button",{onClick:m[12]||(m[12]=_=>{var E;return xe(((E=d(t).promptData.advice)==null?void 0:E.join("\\n"))||"","advice")}),class:"text-yellow-500 hover:text-yellow-600",title:"复制到剪贴板"},[Pe.value.advice?(w(),Ae(d(xt),{key:0,class:"w-4 h-4"})):(w(),Ae(d(lt),{key:1,class:"w-4 h-4"}))])])]),n("div",{class:se(["bg-white flex flex-col",d(i)?"flex-1 min-h-0":"p-3 flex-1"])},[n("div",{class:se(["space-y-2 overflow-y-auto flex-1",d(i)?"p-3":""]),style:Qt(d(i)?"":"max-height: calc(100vh - 400px);")},[(w(!0),x(Se,null,_e(d(t).promptData.advice,(_,E)=>(w(),x("div",{key:E,class:"flex items-start"},[m[24]||(m[24]=n("span",{class:"text-yellow-500 mr-2 mt-2"},"•",-1)),ue(n("input",{"onUpdate:modelValue":B=>d(t).promptData.advice[E]=B,class:"flex-1 px-3 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-500 focus:border-transparent"},null,8,rs),[[ve,d(t).promptData.advice[E]]]),n("button",{onClick:B=>de(E),class:"ml-2 px-2 py-1 text-red-500 hover:text-red-700 text-sm",title:"删除这条建议"}," × ",8,ls)]))),128))],6),n("div",{class:se(["pt-4 flex justify-between flex-shrink-0 border-t border-gray-100",d(i)?"p-3 bg-white":"mt-4"])},[n("button",{onClick:Z,class:"px-3 py-1 text-yellow-600 hover:text-yellow-800 text-sm"}," + 添加建议 "),d(t).isAutoMode?O("",!0):(w(),x("div",cs,[n("button",{onClick:Le,disabled:!d(t).promptData.advice||d(t).promptData.advice.length===0||z.value,class:"px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"},[z.value&&d(t).currentExecutionStep==="final"?(w(),Ae(d(Me),{key:0,class:"w-4 h-4 animate-spin"})):O("",!0),n("span",null,ae(z.value&&d(t).currentExecutionStep==="final"?"执行中...":"生成最终提示词"),1)],8,hs)]))],2)],2)])):O("",!0),c.value==="zh"?(w(),x("div",us,[n("div",ps,[m[25]||(m[25]=n("span",null,"最终提示词",-1)),n("div",ds,[n("button",{onClick:Y,disabled:z.value||d(t).isGenerating,class:"text-blue-500 hover:text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed",title:"重新生成最终提示词"},[X(d(Me),{class:se(["w-4 h-4",z.value&&d(t).currentExecutionStep==="final"&&"animate-spin"])},null,8,["class"])],8,ms),n("button",{onClick:m[13]||(m[13]=_=>xe(K.value,"final")),class:"text-blue-500 hover:text-blue-600",title:"复制到剪贴板"},[Pe.value.final?(w(),Ae(d(xt),{key:0,class:"w-4 h-4"})):(w(),Ae(d(lt),{key:1,class:"w-4 h-4"}))])])]),n("div",gs,[ue(n("textarea",{"onUpdate:modelValue":m[14]||(m[14]=_=>K.value=_),class:"w-full flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"},null,512),[[ve,K.value]]),K.value?(w(),x("div",fs,[n("button",{onClick:Ue,disabled:!K.value||ye.value||Ee.value,class:"flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"},[ye.value?(w(),Ae(d(Me),{key:0,class:"w-4 h-4 animate-spin"})):O("",!0),n("span",null,ae(ye.value?"转换中...":fe.value==="markdown"?"转为XML格式":"转为Markdown格式"),1)],8,ys),n("button",{onClick:Ge,disabled:!K.value||ye.value||Ee.value,class:"flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"},[Ee.value?(w(),Ae(d(Me),{key:0,class:"w-4 h-4 animate-spin"})):O("",!0),n("span",null,ae(Ee.value?"转换中...":Ie.value==="zh"?"转为英文版":"转为中文版"),1)],8,vs)])):O("",!0)])])):O("",!0)])):O("",!0),!te.value&&!d(t).isGenerating?(w(),x("div",bs,[n("div",null,[X(d(co),{class:"w-12 h-12 text-gray-300 mx-auto mb-3"}),m[26]||(m[26]=n("p",null,'请在上方"需求描述"中输入您的需求，或与AI助手对话后生成提示词',-1))])])):O("",!0)]))}}),Di=Qi(ws,[["__scopeId","data-v-8b36a1fc"]]),ks={key:0,class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"},xs={class:"bg-white rounded-lg max-w-4xl w-full max-h-[85vh] overflow-hidden flex flex-col"},Ts={class:"flex items-center justify-between p-6 border-b flex-shrink-0"},As={class:"flex items-center space-x-4"},Is={class:"flex space-x-1"},Ss={class:"p-6 overflow-y-auto flex-1"},Ps={key:0},Cs={class:"mb-6"},Ms={class:"flex items-center justify-between mb-4"},Es={key:0,class:"text-center py-8 text-gray-500"},Rs={key:1,class:"space-y-4"},_s={class:"flex items-center justify-between mb-3"},Ds={class:"flex items-center space-x-3"},Os=["onUpdate:modelValue"],zs={class:"font-medium"},qs={class:"text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded"},$s={class:"flex items-center space-x-2"},Ls=["onClick"],Ns=["onClick","disabled","title"],Fs=["onClick"],Us={class:"grid grid-cols-1 md:grid-cols-2 gap-3 mb-3"},Ws=["onUpdate:modelValue"],Gs={key:0},Bs={class:"block text-sm font-medium text-gray-700 mb-1"},js={key:0,class:"text-xs text-gray-500"},Ys=["onUpdate:modelValue","placeholder"],Hs={class:"flex items-center justify-between mb-2"},Vs=["onClick"],Ks={class:"space-y-2 max-h-32 overflow-y-auto"},Js={class:"flex items-center space-x-2 flex-shrink-0"},Zs=["onUpdate:modelValue"],Qs={class:"text-sm font-medium whitespace-nowrap"},Xs={class:"flex items-center space-x-1 flex-shrink-0"},er=["title"],tr={key:1,class:"inline-flex items-center text-xs bg-green-100 text-green-800 rounded-full w-4 h-4 justify-center"},ir={key:2,class:"inline-flex items-center text-xs bg-red-100 text-red-800 rounded-full w-4 h-4 justify-center"},or={class:"flex items-center space-x-1 flex-shrink-0"},ar=["onClick","disabled","title"],nr=["onClick"],sr=["onClick"],rr={key:0,class:"absolute left-0 right-0 top-full mt-1 z-10"},lr=["title"],cr={key:1},hr={class:"space-y-6"},ur={class:"space-y-4"},pr={class:"flex justify-end space-x-3 p-6 border-t bg-gray-50 flex-shrink-0"},dr={key:1,class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60] p-4"},mr={class:"bg-white rounded-lg max-w-md w-full p-6"},gr={class:"space-y-3"},fr=["onClick"],yr={class:"flex items-center space-x-3"},vr={class:"font-medium"},br={class:"text-sm text-gray-500"},wr={class:"flex justify-end space-x-3 mt-6"},kr={key:2,class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60] p-4"},xr={class:"bg-white rounded-lg max-w-md w-full p-6"},Tr={class:"text-lg font-semibold mb-4"},Ar={class:"space-y-4"},Ir=["placeholder"],Sr={key:0},Pr={class:"block text-sm font-medium text-gray-700 mb-1"},Cr={key:0,class:"text-xs text-gray-500"},Mr=["placeholder"],Er={class:"flex justify-end space-x-3 mt-6"},Rr=["disabled"],_r={key:3,class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60] p-4"},Dr={class:"bg-white rounded-lg max-w-md w-full p-6"},Or={class:"text-lg font-semibold mb-4"},zr={class:"space-y-4"},qr={class:"flex items-center justify-between mb-1"},$r=["disabled"],Lr={key:0,class:"mt-2"},Nr={class:"max-h-32 overflow-y-auto border border-gray-200 rounded"},Fr=["onClick"],Ur={key:1,class:"mt-2"},Wr={class:"text-xs text-red-600"},Gr={key:0},Br={class:"flex justify-end space-x-3 mt-6"},jr=["disabled"],Yr=Mt({__name:"SettingsModal",setup(s){const e=Et(),i=jt(),o=qe.getInstance(),t=M("providers");$e(t,y=>{y==="prompts"&&e.openPromptEditor("system")});const a=M(!1),r=M(!1),l=M(!1),h=M(null),c=M(""),k=M(null),I=M(null),v=M("custom"),A=M({name:"",baseUrl:"",apiKey:""}),g=M({name:"",id:"",apiType:""}),S=M(!1),P=M({}),N=M(""),F=Fe(()=>P.value[c.value]||[]),L=Fe(()=>[{type:"openai",name:"OpenAI",description:"官方OpenAI API或兼容服务",color:"bg-green-500"},{type:"anthropic",name:"Anthropic",description:"官方Claude API或兼容服务",color:"bg-purple-500"},{type:"google",name:"Gemini",description:"官方Gemini API或兼容服务",color:"bg-blue-500"},{type:"custom",name:"自定义服务",description:"第三方API服务或中转代理",color:"bg-gray-500"}]);ni(()=>{e.loadSettings()});const C=y=>e.providers.find(p=>p.id===y),G=y=>e.getProviderTemplate(y),K=y=>{switch(y){case"openai":return"https://api.openai.com/v1/chat/completions";case"anthropic":return"https://api.anthropic.com/v1/messages";case"google":return"https://generativelanguage.googleapis.com/v1beta";case"custom":return"https://api.example.com/v1";default:return""}},te=y=>{switch(y){case"openai":return"bg-green-500";case"anthropic":return"bg-purple-500";case"google":return"bg-blue-500";default:return"bg-gray-500"}},pe=y=>{switch(y){case"openai":return"OpenAI";case"anthropic":return"Claude";case"google":return"Gemini";default:return y}},U=y=>{if(a.value=!1,v.value=y,!I.value)if(y==="custom")A.value={name:"",baseUrl:"",apiKey:""};else{const p=e.getProviderTemplate(y);A.value={name:p.name,baseUrl:p.baseUrl||"",apiKey:""}}r.value=!0},H=(y,p)=>{k.value=p,c.value=y,g.value={name:p.name,id:p.id,apiType:p.apiType||""},l.value=!0},Z=()=>{r.value=!1,I.value=null,A.value={name:"",baseUrl:"",apiKey:""}},de=y=>{I.value=y,v.value=y.type,A.value={name:y.name,baseUrl:y.baseUrl||"",apiKey:y.apiKey||""},r.value=!0},ye=y=>{confirm("确定要删除这个提供商吗？这将同时删除其所有模型配置。")&&(e.deleteProvider(y),e.saveSettings(),i.success("提供商已删除"))},Ee=(y,p)=>{confirm("确定要删除这个模型吗？")&&(e.deleteModel(y,p),e.saveSettings(),i.success("模型已删除"))},z=async y=>{if(!y.apiKey){i.warning("请先配置API密钥");return}const p=y.models.find(R=>R.enabled);if(!p){i.warning("请先启用至少一个模型");return}h.value=y.id;try{await o.testConnection(y,p.id)?i.success("连接测试成功！"):i.error("连接测试失败，请检查配置")}catch(R){i.error(`连接测试失败: ${R}`)}finally{h.value=null}},fe=async(y,p)=>{const R=e.providers.find(Y=>Y.id===y);if(!R){i.error("未找到提供商配置");return}if(!R.apiKey){i.warning("请先配置API密钥");return}const D=R.models.find(Y=>Y.id===p);D&&(D.testStatus="untested",D.capabilities=void 0,D.lastTested=void 0),e.updateModelTestStatus(y,p,"testing");try{const{CapabilityDetector:Y}=await Nt(async()=>{const{CapabilityDetector:m}=await import("./capabilityDetector-DAbS9qrd.js");return{CapabilityDetector:m}},__vite__mapDeps([0,1,2]));await Y.getInstance().detectCapabilitiesWithCallback(R,p,(m,_,E)=>{m?(e.updateModelConnectionStatus(y,p,!0),i.success(`模型 ${p} 连接成功！(${_}ms) 正在后台检测思考能力...`)):(e.updateModelConnectionStatus(y,p,!1,E),i.error(`模型 ${p} 连接失败：${E||"未知错误"}`)),e.saveSettings()},m=>{if(e.updateModelCapabilities(y,p,m),m.reasoning){const _=e.getReasoningTypeDescription(m.reasoningType);i.success(`🧠 模型 ${p} 思考能力检测完成：支持${_}`)}e.saveSettings()},!0)}catch(Y){e.updateModelTestStatus(y,p,"failed"),i.error(`模型 ${p} 测试出错：${Y.message}`),e.saveSettings()}},Ie=y=>{switch(y.testStatus){case"testing":return"测试中...";case"success":return"重新测试";case"failed":return"重新测试";default:return"测试模型连接和能力"}},ke=()=>{try{if(I.value){const y=e.providers.find(p=>p.id===I.value.id);y&&(y.name=A.value.name,y.apiKey=A.value.apiKey,(y.allowCustomUrl||y.type==="custom")&&(y.baseUrl=A.value.baseUrl)),I.value=null}else e.addProvider(v.value,{name:A.value.name,baseUrl:A.value.baseUrl,apiKey:A.value.apiKey});A.value={name:"",baseUrl:"",apiKey:""},r.value=!1,e.saveSettings(),i.success(I.value?"提供商已更新":"提供商已添加")}catch(y){i.error(`保存失败: ${y}`)}},We=()=>{const y=e.providers.find(R=>R.id===c.value);if(!y)return;let p=g.value.apiType;if(y.type!=="custom"&&(p=y.type),k.value){if(y){const R=y.models.findIndex(D=>D.id===k.value.id);R>-1&&(y.models[R]={...y.models[R],name:g.value.name,id:g.value.id,apiType:p})}k.value=null}else e.addModel(c.value,{id:g.value.id,name:g.value.name,enabled:!0,apiType:p});g.value={name:"",id:"",apiType:""},l.value=!1,c.value="",e.saveSettings()},Ve=y=>{k.value=null,c.value=y,S.value=!1,N.value="";const p=C(y);let R="";(p==null?void 0:p.type)==="custom"?R="openai":p!=null&&p.type&&p.type in["openai","anthropic","google"]&&(R=p.type),g.value={name:"",id:"",apiType:R},l.value=!0},Ke=async()=>{try{S.value=!0,N.value="";const y=c.value,p=C(y);if(!p)throw new Error("未找到提供商信息");if(!p.apiKey||!p.baseUrl)throw new Error("请先配置提供商的API密钥和基础URL");const R=g.value.apiType,D=await o.getAvailableModels(p,R);P.value[y]=D,D.length===0&&(N.value="未找到可用模型")}catch(y){N.value=y.message||"获取模型列表失败，请手动输入模型ID"}finally{S.value=!1}},Je=y=>{g.value.id=y,g.value.name||(g.value.name=y)},Ze=()=>{confirm("确定要重置系统提示词规则为默认值吗？")&&e.resetSystemPromptRules()},Qe=()=>{confirm("确定要重置用户引导规则为默认值吗？")&&e.resetUserPromptRules()},Xe=()=>{confirm("确定要重置需求报告规则为默认值吗？")&&e.resetRequirementReportRules()},Le=()=>{confirm("确定要重置关键指令提取规则为默认值吗？")&&e.resetThinkingPointsExtractionPrompt()},Ue=()=>{confirm("确定要重置系统提示词生成规则为默认值吗？")&&e.resetSystemPromptGenerationPrompt()},Ge=()=>{confirm("确定要重置优化建议生成规则为默认值吗？")&&e.resetOptimizationAdvicePrompt()},Pe=()=>{confirm("确定要重置优化应用规则为默认值吗？")&&e.resetOptimizationApplicationPrompt()},xe=()=>{(e.editingSystemRules||e.editingUserRules||e.editingRequirementReportRules||e.editingFinalPromptRules)&&e.savePromptRules(),e.saveSettings(),e.showSettings=!1};return(y,p)=>{var R,D,Y;return w(),x(Se,null,[n("button",{onClick:p[0]||(p[0]=u=>d(e).showSettings=!0),class:"fixed top-4 right-4 z-50 p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow",title:"设置"},[X(d(qt),{class:"w-5 h-5 text-gray-600"})]),d(e).showSettings?(w(),x("div",ks,[n("div",xs,[n("div",Ts,[n("div",As,[p[26]||(p[26]=n("h2",{class:"text-xl font-semibold"},"设置",-1)),n("div",Is,[n("button",{onClick:p[1]||(p[1]=u=>t.value="providers"),class:se(["px-3 py-1 rounded text-sm font-medium transition-colors",t.value==="providers"?"bg-blue-100 text-blue-700":"text-gray-600 hover:text-gray-800"])}," AI模型 ",2),n("button",{onClick:p[2]||(p[2]=u=>t.value="prompts"),class:se(["px-3 py-1 rounded text-sm font-medium transition-colors",t.value==="prompts"?"bg-blue-100 text-blue-700":"text-gray-600 hover:text-gray-800"])}," 提示词规则 ",2),p[25]||(p[25]=n("a",{href:"https://github.com/fish2018",target:"_blank",rel:"noopener noreferrer",class:"p-1 hover:bg-gray-100 rounded transition-colors",title:"GitHub"},[n("svg",{class:"w-5 h-5 text-gray-600 hover:text-gray-800",fill:"currentColor",viewBox:"0 0 24 24"},[n("path",{d:"M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"})])],-1))])]),n("button",{onClick:p[3]||(p[3]=u=>d(e).showSettings=!1),class:"p-1 hover:bg-gray-100 rounded"},[X(d(Ct),{class:"w-5 h-5"})])]),n("div",Ss,[t.value==="providers"?(w(),x("div",Ps,[n("div",Cs,[n("div",Ms,[p[28]||(p[28]=n("h3",{class:"text-lg font-medium"},"AI服务提供商",-1)),n("button",{onClick:p[4]||(p[4]=u=>a.value=!0),class:"flex items-center space-x-1 px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"},[X(d(po),{class:"w-4 h-4"}),p[27]||(p[27]=n("span",null,"添加提供商",-1))])]),p[34]||(p[34]=Oi('<div class="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg"><h4 class="text-sm font-medium text-blue-800 mb-2">API配置说明</h4><div class="text-sm text-blue-700 space-y-2"><div><strong>OpenAI及兼容服务：</strong>API URL填写完整路径，如 <code class="bg-blue-100 px-1 rounded break-all text-xs">https://api.openai.com/v1/chat/completions</code></div><div><strong>Anthropic Claude：</strong>API URL填写 <code class="bg-blue-100 px-1 rounded break-all text-xs">https://api.anthropic.com/v1/messages</code></div><div><strong>Google Gemini：</strong>API URL填写 <code class="bg-blue-100 px-1 rounded break-all text-xs">https://generativelanguage.googleapis.com/v1beta</code>（系统会自动根据模型拼接路径）</div><div><strong>自定义提供商：</strong>大多数第三方服务使用OpenAI兼容格式，URL结构为 <code class="bg-blue-100 px-1 rounded break-all text-xs">https://你的域名/v1/chat/completions</code></div><div class="text-xs text-blue-600 mt-2">支持代理地址、中转API等各种自定义URL</div></div></div>',1)),d(e).providers.length===0?(w(),x("div",Es,[X(d(qt),{class:"w-12 h-12 text-gray-300 mx-auto mb-3"}),p[29]||(p[29]=n("p",null,"还没有配置任何AI提供商",-1)),p[30]||(p[30]=n("p",{class:"text-sm"},"点击上方按钮添加您的第一个AI服务",-1))])):(w(),x("div",Rs,[(w(!0),x(Se,null,_e(d(e).providers,u=>(w(),x("div",{key:u.id,class:"border rounded-lg p-4"},[n("div",_s,[n("div",Ds,[ue(n("input",{"onUpdate:modelValue":m=>u.enabled=m,type:"checkbox",class:"rounded",onChange:p[5]||(p[5]=(...m)=>d(e).saveSettings&&d(e).saveSettings(...m))},null,40,Os),[[Xt,u.enabled]]),n("h4",zs,ae(u.name),1),n("span",qs,ae(u.type),1),u.enabled&&u.apiKey?(w(),Ae(d(qi),{key:0,class:"w-4 h-4 text-green-600",title:"已配置"})):O("",!0)]),n("div",$s,[n("button",{onClick:m=>de(u),class:"text-blue-500 hover:text-blue-700",title:"编辑提供商"},[X(d(qt),{class:"w-4 h-4"})],8,Ls),n("button",{onClick:m=>z(u),disabled:h.value===u.id||!u.apiKey,class:"text-green-500 hover:text-green-700 disabled:opacity-50 transition-colors",title:h.value===u.id?"测试中...":"测试连接"},[X(d(Ii),{class:se(["w-4 h-4",{"animate-pulse":h.value===u.id}])},null,8,["class"])],8,Ns),n("button",{onClick:m=>ye(u.id),class:"text-red-500 hover:text-red-700",title:"删除提供商"},[X(d($i),{class:"w-4 h-4"})],8,Fs)])]),n("div",Us,[n("div",null,[p[31]||(p[31]=n("label",{class:"block text-sm font-medium text-gray-700 mb-1"},"API密钥",-1)),ue(n("input",{"onUpdate:modelValue":m=>u.apiKey=m,type:"password",placeholder:"输入API密钥",class:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",onInput:p[6]||(p[6]=(...m)=>d(e).saveSettings&&d(e).saveSettings(...m))},null,40,Ws),[[ve,u.apiKey]])]),u.allowCustomUrl||u.type==="custom"?(w(),x("div",Gs,[n("label",Bs,[p[32]||(p[32]=yi(" API URL ",-1)),u.type!=="custom"?(w(),x("span",js,"(可选，留空使用官方完整地址)")):O("",!0)]),ue(n("input",{"onUpdate:modelValue":m=>u.baseUrl=m,type:"url",placeholder:K(u.type),class:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",onInput:p[7]||(p[7]=(...m)=>d(e).saveSettings&&d(e).saveSettings(...m))},null,40,Ys),[[ve,u.baseUrl]])])):O("",!0)]),n("div",null,[n("div",Hs,[p[33]||(p[33]=n("label",{class:"text-sm font-medium text-gray-700"},"可用模型",-1)),n("button",{onClick:m=>Ve(u.id),class:"text-sm text-blue-500 hover:text-blue-700"}," 添加模型 ",8,Vs)]),n("div",Ks,[(w(!0),x(Se,null,_e(u.models,m=>{var _,E,B,W,j;return w(),x("div",{key:m.id,class:"relative flex items-center justify-between p-2 bg-gray-50 rounded min-w-0 overflow-x-auto"},[n("div",Js,[ue(n("input",{"onUpdate:modelValue":J=>m.enabled=J,type:"checkbox",class:"rounded flex-shrink-0",onChange:p[8]||(p[8]=(...J)=>d(e).saveSettings&&d(e).saveSettings(...J))},null,40,Zs),[[Xt,m.enabled]]),n("span",Qs,ae(m.name),1),n("div",Xs,[(_=m.capabilities)!=null&&_.reasoning?(w(),x("span",{key:0,class:"inline-flex items-center text-xs bg-purple-100 text-purple-800 rounded-full w-4 h-4 justify-center",title:d(e).getReasoningTypeDescription(m.capabilities.reasoningType)}," 🧠 ",8,er)):O("",!0),(B=(E=m.capabilities)==null?void 0:E.testResult)!=null&&B.connected?(w(),x("span",tr," ✅ ")):O("",!0),m.testStatus==="failed"?(w(),x("span",ir," ❌ ")):O("",!0)]),m.apiType?(w(),x("span",{key:0,class:se(["text-xs px-1.5 py-0.5 rounded text-white flex-shrink-0",te(m.apiType)])},ae(pe(m.apiType)),3)):O("",!0)]),n("div",or,[n("button",{onClick:J=>fe(u.id,m.id),disabled:m.testStatus==="testing"||!u.apiKey,class:se(["transition-colors text-sm",m.testStatus==="testing"?"text-blue-600":m.testStatus==="success"?"text-green-500 hover:text-green-700":m.testStatus==="failed"?"text-red-500 hover:text-red-700":"text-gray-400 hover:text-blue-500"]),title:Ie(m)},[X(d(Ii),{class:se(["w-3 h-3",{"animate-pulse":m.testStatus==="testing"}])},null,8,["class"])],10,ar),n("button",{onClick:J=>H(u.id,m),class:"text-blue-500 hover:text-blue-700",title:"编辑模型"},[X(d(qt),{class:"w-3 h-3"})],8,nr),n("button",{onClick:J=>Ee(u.id,m.id),class:"text-red-500 hover:text-red-700",title:"删除模型"},[X(d(Ct),{class:"w-3 h-3"})],8,sr)]),(j=(W=m.capabilities)==null?void 0:W.testResult)!=null&&j.error?(w(),x("div",rr,[n("div",{class:"text-xs text-red-500 bg-red-50 border border-red-200 rounded px-2 py-1 truncate",title:m.capabilities.testResult.error},ae(m.capabilities.testResult.error),9,lr)])):O("",!0)])}),128))])])]))),128))]))])])):O("",!0),t.value==="prompts"?(w(),x("div",cr,[n("div",hr,[n("div",null,[n("div",{class:"flex items-center justify-between mb-3"},[p[35]||(p[35]=n("h3",{class:"text-lg font-medium"},"系统提示词规则",-1)),n("button",{onClick:Ze,class:"text-sm text-gray-500 hover:text-gray-700 px-2 py-1 border border-gray-300 rounded"}," 重置为默认 ")]),ue(n("textarea",{"onUpdate:modelValue":p[9]||(p[9]=u=>d(e).editingSystemRules=u),placeholder:"输入系统提示词规则...",class:"w-full h-48 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-xs"},null,512),[[ve,d(e).editingSystemRules]]),p[36]||(p[36]=n("p",{class:"text-xs text-gray-500 mt-1"},"系统提示词包含AI提示词工程的完整指南，用于生成高质量的提示词。",-1))]),n("div",null,[n("div",{class:"flex items-center justify-between mb-3"},[p[37]||(p[37]=n("h3",{class:"text-lg font-medium"},"用户引导规则",-1)),n("button",{onClick:Qe,class:"text-sm text-gray-500 hover:text-gray-700 px-2 py-1 border border-gray-300 rounded"}," 重置为默认 ")]),ue(n("textarea",{"onUpdate:modelValue":p[10]||(p[10]=u=>d(e).editingUserRules=u),placeholder:"输入用户引导规则...",class:"w-full h-48 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-xs"},null,512),[[ve,d(e).editingUserRules]]),p[38]||(p[38]=n("p",{class:"text-xs text-gray-500 mt-1"},"用户引导规则定义AI助手在对话中的行为方式，包括智能判断和对话终止机制。",-1))]),n("div",null,[n("div",{class:"flex items-center justify-between mb-3"},[p[39]||(p[39]=n("h3",{class:"text-lg font-medium"},"需求报告规则",-1)),n("button",{onClick:Xe,class:"text-sm text-gray-500 hover:text-gray-700 px-2 py-1 border border-gray-300 rounded"}," 重置为默认 ")]),ue(n("textarea",{"onUpdate:modelValue":p[11]||(p[11]=u=>d(e).editingRequirementReportRules=u),placeholder:"输入需求报告生成规则...",class:"w-full h-48 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-xs"},null,512),[[ve,d(e).editingRequirementReportRules]]),p[40]||(p[40]=n("p",{class:"text-xs text-gray-500 mt-1"},"需求报告规则用于基于用户对话历史生成完整的需求总结报告。",-1))]),n("div",null,[p[45]||(p[45]=n("div",{class:"mb-3"},[n("h3",{class:"text-lg font-medium"},"最终提示词生成规则")],-1)),n("div",ur,[n("div",null,[n("div",{class:"flex items-center justify-between mb-2"},[p[41]||(p[41]=n("h4",{class:"text-sm font-medium text-gray-700"},"关键指令提取",-1)),n("button",{onClick:Le,class:"text-xs text-gray-400 hover:text-gray-600 px-1 py-0.5 border border-gray-200 rounded"}," 重置为默认 ")]),ue(n("textarea",{"onUpdate:modelValue":p[12]||(p[12]=u=>d(e).editingFinalPromptRules.THINKING_POINTS_EXTRACTION=u),placeholder:"输入关键指令提取规则...",class:"w-full h-32 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-xs"},null,512),[[ve,d(e).editingFinalPromptRules.THINKING_POINTS_EXTRACTION]])]),n("div",null,[n("div",{class:"flex items-center justify-between mb-2"},[p[42]||(p[42]=n("h4",{class:"text-sm font-medium text-gray-700"},"系统提示词生成",-1)),n("button",{onClick:Ue,class:"text-xs text-gray-400 hover:text-gray-600 px-1 py-0.5 border border-gray-200 rounded"}," 重置为默认 ")]),ue(n("textarea",{"onUpdate:modelValue":p[13]||(p[13]=u=>d(e).editingFinalPromptRules.SYSTEM_PROMPT_GENERATION=u),placeholder:"输入系统提示词生成规则...",class:"w-full h-32 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-xs"},null,512),[[ve,d(e).editingFinalPromptRules.SYSTEM_PROMPT_GENERATION]])]),n("div",null,[n("div",{class:"flex items-center justify-between mb-2"},[p[43]||(p[43]=n("h4",{class:"text-sm font-medium text-gray-700"},"优化建议生成",-1)),n("button",{onClick:Ge,class:"text-xs text-gray-400 hover:text-gray-600 px-1 py-0.5 border border-gray-200 rounded"}," 重置为默认 ")]),ue(n("textarea",{"onUpdate:modelValue":p[14]||(p[14]=u=>d(e).editingFinalPromptRules.OPTIMIZATION_ADVICE_GENERATION=u),placeholder:"输入优化建议生成规则...",class:"w-full h-32 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-xs"},null,512),[[ve,d(e).editingFinalPromptRules.OPTIMIZATION_ADVICE_GENERATION]])]),n("div",null,[n("div",{class:"flex items-center justify-between mb-2"},[p[44]||(p[44]=n("h4",{class:"text-sm font-medium text-gray-700"},"优化应用",-1)),n("button",{onClick:Pe,class:"text-xs text-gray-400 hover:text-gray-600 px-1 py-0.5 border border-gray-200 rounded"}," 重置为默认 ")]),ue(n("textarea",{"onUpdate:modelValue":p[15]||(p[15]=u=>d(e).editingFinalPromptRules.OPTIMIZATION_APPLICATION=u),placeholder:"输入优化应用规则...",class:"w-full h-32 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-xs"},null,512),[[ve,d(e).editingFinalPromptRules.OPTIMIZATION_APPLICATION]])])]),p[46]||(p[46]=n("p",{class:"text-xs text-gray-500 mt-1"},"最终提示词生成规则用于控制提示词生成器的各个步骤的系统提示词。",-1))])])])):O("",!0)]),n("div",pr,[n("button",{onClick:p[16]||(p[16]=u=>d(e).showSettings=!1),class:"px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"}," 取消 "),n("button",{onClick:xe,class:"px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"}," 保存设置 ")])])])):O("",!0),a.value?(w(),x("div",dr,[n("div",mr,[p[47]||(p[47]=n("h3",{class:"text-lg font-semibold mb-4"},"选择提供商类型",-1)),n("div",gr,[(w(!0),x(Se,null,_e(L.value,u=>(w(),x("button",{key:u.type,onClick:m=>U(u.type),class:"w-full p-4 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 text-left transition-colors"},[n("div",yr,[n("div",{class:se([u.color,"w-3 h-3 rounded-full"])},null,2),n("div",null,[n("h4",vr,ae(u.name),1),n("p",br,ae(u.description),1)])])],8,fr))),128))]),n("div",wr,[n("button",{onClick:p[17]||(p[17]=u=>a.value=!1),class:"px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"}," 取消 ")])])])):O("",!0),r.value?(w(),x("div",kr,[n("div",xr,[n("h3",Tr,ae(I.value?"编辑提供商":`添加${v.value==="custom"?"自定义":""}提供商`),1),n("div",Ar,[n("div",null,[p[48]||(p[48]=n("label",{class:"block text-sm font-medium text-gray-700 mb-1"},"提供商名称",-1)),ue(n("input",{"onUpdate:modelValue":p[18]||(p[18]=u=>A.value.name=u),type:"text",placeholder:v.value==="custom"?"例如：DeepSeek":"可自定义名称",class:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"},null,8,Ir),[[ve,A.value.name]])]),v.value==="custom"||v.value&&["openai","anthropic","google"].includes(v.value)&&G(v.value).allowCustomUrl?(w(),x("div",Sr,[n("label",Pr,[p[49]||(p[49]=yi(" API URL ",-1)),v.value!=="custom"?(w(),x("span",Cr,"(可选，留空使用官方完整地址)")):O("",!0)]),ue(n("input",{"onUpdate:modelValue":p[19]||(p[19]=u=>A.value.baseUrl=u),type:"url",placeholder:K(v.value),class:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"},null,8,Mr),[[ve,A.value.baseUrl]])])):O("",!0),n("div",null,[p[50]||(p[50]=n("label",{class:"block text-sm font-medium text-gray-700 mb-1"},"API密钥",-1)),ue(n("input",{"onUpdate:modelValue":p[20]||(p[20]=u=>A.value.apiKey=u),type:"password",placeholder:"输入API密钥",class:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"},null,512),[[ve,A.value.apiKey]])])]),n("div",Er,[n("button",{onClick:Z,class:"px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"}," 取消 "),n("button",{onClick:ke,disabled:!A.value.name||v.value==="custom"&&!A.value.baseUrl,class:"px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50"},ae(I.value?"保存":"添加"),9,Rr)])])])):O("",!0),l.value?(w(),x("div",_r,[n("div",Dr,[n("h3",Or,ae(k.value?"编辑模型":"添加模型"),1),n("div",zr,[n("div",null,[p[51]||(p[51]=n("label",{class:"block text-sm font-medium text-gray-700 mb-1"},"模型名称",-1)),ue(n("input",{"onUpdate:modelValue":p[21]||(p[21]=u=>g.value.name=u),type:"text",placeholder:"例如：DeepSeek Chat",class:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"},null,512),[[ve,g.value.name]])]),n("div",null,[n("div",qr,[p[52]||(p[52]=n("label",{class:"block text-sm font-medium text-gray-700"},"模型ID",-1)),((R=C(c.value))==null?void 0:R.type)!=="anthropic"?(w(),x("button",{key:0,onClick:Ke,disabled:S.value,class:"text-xs text-blue-500 hover:text-blue-700 disabled:opacity-50"},ae(S.value?"获取中...":"🔄 获取模型列表"),9,$r)):O("",!0)]),ue(n("input",{"onUpdate:modelValue":p[22]||(p[22]=u=>g.value.id=u),type:"text",placeholder:"例如：deepseek-chat",class:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"},null,512),[[ve,g.value.id]]),F.value.length>0?(w(),x("div",Lr,[p[53]||(p[53]=n("p",{class:"text-xs text-gray-600 mb-2"},"点击选择模型：",-1)),n("div",Nr,[(w(!0),x(Se,null,_e(F.value,u=>(w(),x("div",{key:u,onClick:m=>Je(u),class:"px-3 py-2 text-sm cursor-pointer hover:bg-blue-50 border-b border-gray-100 last:border-b-0"},ae(u),9,Fr))),128))])])):O("",!0),N.value?(w(),x("div",Ur,[n("p",Wr,ae(N.value),1)])):O("",!0)]),((D=C(c.value))==null?void 0:D.type)==="custom"?(w(),x("div",Gr,[p[55]||(p[55]=n("label",{class:"block text-sm font-medium text-gray-700 mb-1"},"API类型",-1)),ue(n("select",{"onUpdate:modelValue":p[23]||(p[23]=u=>g.value.apiType=u),class:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"},[...p[54]||(p[54]=[n("option",{value:""},"选择API类型",-1),n("option",{value:"openai"},"OpenAI 兼容",-1),n("option",{value:"anthropic"},"Anthropic 兼容",-1),n("option",{value:"google"},"Gemini 兼容",-1)])],512),[[Pt,g.value.apiType]]),p[56]||(p[56]=n("p",{class:"text-xs text-gray-500 mt-1"}," 选择此模型使用的API协议类型。大多数第三方代理服务使用OpenAI兼容格式。 ",-1))])):O("",!0)]),n("div",Br,[n("button",{onClick:p[24]||(p[24]=u=>l.value=!1),class:"px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"}," 取消 "),n("button",{onClick:We,disabled:!g.value.name||!g.value.id||((Y=C(c.value))==null?void 0:Y.type)==="custom"&&!g.value.apiType,class:"px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50"},ae(k.value?"保存":"添加"),9,jr)])])])):O("",!0)],64)}}}),Hr={class:"fixed top-4 right-4 z-50 space-y-2"},Vr={class:"p-4"},Kr={class:"flex items-start"},Jr={class:"flex-shrink-0"},Zr={class:"ml-3 flex-1 min-w-0"},Qr={class:"text-sm font-medium break-words"},Xr={class:"ml-4 flex-shrink-0"},el=["onClick"],tl=Mt({__name:"NotificationContainer",setup(s){const e=jt(),i=t=>{switch(t){case"success":return"bg-green-50 border border-green-200 text-green-800";case"error":return"bg-red-50 border border-red-200 text-red-800";case"warning":return"bg-yellow-50 border border-yellow-200 text-yellow-800";case"info":return"bg-blue-50 border border-blue-200 text-blue-800";default:return"bg-gray-50 border border-gray-200 text-gray-800"}},o=t=>{switch(t){case"success":return qi;case"error":return lo;case"warning":return mo;case"info":return Ti;default:return Ti}};return(t,a)=>(w(),x("div",Hr,[(w(!0),x(Se,null,_e(d(e).notifications,r=>(w(),x("div",{key:r.id,class:se([["max-w-md w-full shadow-lg rounded-lg pointer-events-auto overflow-hidden",i(r.type)],"transform transition-all duration-300 ease-in-out"])},[n("div",Vr,[n("div",Kr,[n("div",Jr,[(w(),Ae(Xi(o(r.type)),{class:"h-5 w-5"}))]),n("div",Zr,[n("p",Qr,ae(r.message),1)]),n("div",Xr,[n("button",{onClick:l=>d(e).removeNotification(r.id),class:"inline-flex text-gray-400 hover:text-gray-600 focus:outline-none transition-colors"},[X(d(Ct),{class:"h-4 w-4"})],8,el)])])])],2))),128))]))}}),il={class:"h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 flex flex-col overflow-hidden"},ol={class:"w-full flex flex-col flex-1 overflow-hidden"},al={class:"bg-white rounded-lg shadow-sm p-4 mb-4 flex-shrink-0"},nl={class:"flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4"},sl={class:"flex items-center gap-2 flex-shrink-0 flex-wrap sm:flex-nowrap"},rl=["value"],ll=["disabled"],cl=["value"],hl={key:0,class:"grid grid-cols-2 gap-4 flex-1 min-h-0 overflow-hidden"},ul={class:"flex flex-col"},pl={class:"flex flex-col"},dl={key:1,class:"flex flex-col flex-1 min-h-0 overflow-hidden"},ml={key:1,class:"flex flex-col flex-1 min-h-0 mb-2"},gl={key:2,class:"flex flex-col flex-1 min-h-0 mb-2"},fl=Mt({__name:"HomeView",setup(s){const e=Et(),i=si(),o=M(!1),t=M(!0),a=M(!1),r=M("disconnected"),l=Fe(()=>e.getAvailableProviders()),h=Fe(()=>e.selectedProvider?e.getAvailableModels(e.selectedProvider):[]),c=()=>{e.selectedModel="";const g=h.value;g.length>0&&(e.selectedModel=g[0].id),e.saveSettings(),k()},k=()=>{const g=e.getCurrentProvider(),S=e.getCurrentModel();if(!g||!S||!g.apiKey){r.value="disconnected";return}r.value="connected"};$e(()=>[e.selectedProvider,e.selectedModel],k);const I=()=>{o.value=window.innerWidth<1024},v=()=>{o.value&&(t.value?(t.value=!1,a.value=!0):(t.value=!0,a.value=!1))},A=()=>{o.value&&(a.value?(a.value=!1,t.value=!0):(a.value=!0,t.value=!1))};return $e(()=>i.isGenerating,g=>{o.value&&g&&(t.value=!1,a.value=!0)}),$e(()=>i.promptData.requirementReport,g=>{o.value&&g&&g.trim().length>0&&(t.value=!1,a.value=!0)}),ni(()=>{e.loadSettings(),l.value.length>0?k():setTimeout(()=>{e.showSettings=!0},1e3),I(),window.addEventListener("resize",I)}),(g,S)=>(w(),x("div",il,[X(Yr),n("div",ol,[n("div",al,[n("div",nl,[S[6]||(S[6]=n("div",{class:"min-w-0"},[n("h1",{class:"text-xl lg:text-2xl font-bold text-gray-800 mb-1"},"智能提示词创建"),n("p",{class:"text-sm lg:text-base text-gray-600"},"AI引导式对话，帮您构建专业的提示词")],-1)),n("div",sl,[S[5]||(S[5]=n("label",{class:"text-sm font-medium text-gray-700 whitespace-nowrap"},"AI模型:",-1)),ue(n("select",{"onUpdate:modelValue":S[0]||(S[0]=P=>d(e).selectedProvider=P),onChange:c,class:"px-3 py-1 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 min-w-0 flex-1 sm:flex-none"},[S[3]||(S[3]=n("option",{value:""},"选择提供商",-1)),(w(!0),x(Se,null,_e(l.value,P=>(w(),x("option",{key:P.id,value:P.id},ae(P.name),9,rl))),128))],544),[[Pt,d(e).selectedProvider]]),ue(n("select",{"onUpdate:modelValue":S[1]||(S[1]=P=>d(e).selectedModel=P),onChange:S[2]||(S[2]=(...P)=>d(e).saveSettings&&d(e).saveSettings(...P)),disabled:!d(e).selectedProvider,class:"px-3 py-1 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 disabled:opacity-50 min-w-0 flex-1 sm:flex-none"},[S[4]||(S[4]=n("option",{value:""},"选择模型",-1)),(w(!0),x(Se,null,_e(h.value,P=>(w(),x("option",{key:P.id,value:P.id},ae(P.name),9,cl))),128))],40,ll),[[Pt,d(e).selectedModel]])])])]),o.value?(w(),x("div",dl,[t.value?O("",!0):(w(),x("div",{key:0,onClick:v,class:"bg-white rounded-lg shadow-sm p-3 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors flex-shrink-0 mb-2"},[S[7]||(S[7]=n("h3",{class:"font-semibold text-gray-800"},"AI助手对话",-1)),X(d(xi),{class:"w-5 h-5 text-gray-500"})])),t.value?(w(),x("div",ml,[X(_i,{"is-mobile":o.value,"is-expanded":t.value,onToggle:v},null,8,["is-mobile","is-expanded"])])):O("",!0),a.value?(w(),x("div",gl,[X(Di,{"is-mobile":o.value,"is-expanded":a.value,onToggle:A},null,8,["is-mobile","is-expanded"])])):O("",!0),a.value?O("",!0):(w(),x("div",{key:3,onClick:A,class:"bg-white rounded-lg shadow-sm p-3 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors flex-shrink-0"},[S[8]||(S[8]=n("h3",{class:"font-semibold text-gray-800"},"提示词预览",-1)),X(d(xi),{class:"w-5 h-5 text-gray-500"})]))])):(w(),x("div",hl,[n("div",ul,[X(_i)]),n("div",pl,[X(Di)])]))]),X(tl)]))}}),bl=Object.freeze(Object.defineProperty({__proto__:null,default:fl},Symbol.toStringTag,{value:"Module"}));export{qe as A,bl as H};
