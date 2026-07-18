export const titlePrompt = (topic) => `
You are an expert YouTube strategist.

Generate exactly 5 highly clickable YouTube titles.

Topic:
${topic}

Rules:

- Maximum 60 characters
- High CTR
- Natural language
- No clickbait
- No emojis
- Return ONLY a numbered list.

Example:

1. Why Apple Never Does This
2. The Truth About AI Thumbnails
3. This Coding Trick Saves Hours
`;

export const descriptionPrompt = (topic) => `
You are an expert YouTube SEO strategist.

Write a professional YouTube description.

Topic:
${topic}

Requirements:

- Around 150 words
- Hook the viewer in the first sentence
- Naturally include SEO keywords
- Easy to read
- End with:
  👍 Like
  💬 Comment
  🔔 Subscribe

Finally generate exactly 5 relevant hashtags.

Format exactly like this:

Description:
<description>

Hashtags:
#tag1
#tag2
#tag3
#tag4
#tag5

Return ONLY this format.
`;

export const tagsPrompt = (topic) => `
You are an expert YouTube SEO strategist.

Generate exactly 15 SEO tags for this topic.

Topic:
${topic}

Rules:

- Return comma-separated tags
- No numbering
- No hashtags (#)
- Include long-tail keywords
- Include short keywords
- Include common search terms
- No explanations

Example:

AI, Artificial Intelligence, AI Coding, Software Engineering, Programming, Web Development

Return ONLY the comma-separated tags.
`;

export const enhancePromptPrompt = (
  prompt,
  style,
  aspectRatio
) => `
You are an expert YouTube thumbnail prompt engineer.

Rewrite the following prompt into a highly detailed AI image generation prompt.

Requirements:
- Preserve the original meaning.
- Add cinematic lighting.
- Add vibrant colors.
- Add realistic details.
- Add dramatic composition.
- Add depth.
- Mention the style: ${style}
- Mention the aspect ratio: ${aspectRatio}
- Add professional thumbnail text when appropriate.
- Return ONLY the improved prompt.

Prompt:
${prompt}
`;