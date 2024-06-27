let userMessage = `2020–present: ChatGPT, DALL-E and world leading AI
In 2020, OpenAI announced GPT-3, a language model trained on large internet datasets. GPT-3 is aimed at natural language answering of questions, but it can also translate between languages and coherently generate improvised text. It also announced that an associated API, named simply "the API", would form the heart of its first commercial product.[33]

In 2021, OpenAI introduced DALL-E, a deep learning model that can generate digital images from natural language descriptions.[34]

In December 2022, OpenAI received widespread media coverage after launching a free preview of ChatGPT, its new AI chatbot based on GPT-3.5. According to OpenAI, the preview received over a million signups within the first five days.[35] According to anonymous sources cited by Reuters in December 2022, OpenAI was projecting $200 million revenue in 2023 and $1 billion revenue in 2024.[36]

As of January 2023, OpenAI was in talks for funding that would value the company at $29 billion, double the value of the company in 2021.[37] On January 23, 2023, Microsoft announced a new multi-year, multi-billion dollar (reported to be $10 billion) investment in OpenAI.[38][39]

The investment is believed to be a part of Microsoft's efforts to integrate OpenAI's ChatGPT into the Bing search engine. Google announced a similar AI application (Bard), after ChatGPT was launched, fearing that ChatGPT could threaten Google's place as a go-to source for information.[40][41]

On February 7, 2023, Microsoft announced that it is building AI technology based on the same foundation as ChatGPT into Microsoft Bing, Edge, Microsoft 365 and other products.[42]`;


userMessage = userMessage.replace(/"/g, '\\"');
userMessage = userMessage.replace(/\n/g, '\\n');
userMessage = userMessage.replace(/\t/g, '\\t');


pm.variables.set('userMessage', userMessage);
