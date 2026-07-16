const templates = [
  {
    title: "Business",
    prompt:
      "Professional businessman pointing at increasing revenue chart with dramatic lighting, expressive face, vibrant colors, ultra realistic YouTube thumbnail",
  },

  {
    title: "Coding",
    prompt:
      "Programmer with dual monitor setup, VS Code screen, glowing RGB lights, cinematic lighting, modern coding workspace",
  },

  {
    title: "Gaming",
    prompt:
      "Excited gamer with RGB setup, intense facial expression, dramatic gaming atmosphere, vibrant colors",
  },

  {
    title: "Finance",
    prompt:
      "Money, stock market chart, shocked investor, green arrows, premium finance thumbnail",
  },

  {
    title: "Podcast",
    prompt:
      "Professional podcast studio with microphones, cinematic lighting, expressive speakers",
  },

  {
    title: "Documentary",
    prompt:
      "Dark cinematic documentary scene with dramatic lighting, emotional atmosphere, ultra realistic",
  },

  {
    title: "Education",
    prompt:
      "Teacher explaining concepts with colorful educational visuals, clean composition",
  },

  {
    title: "Luxury",
    prompt:
      "Luxury lifestyle with premium cars, watches, elegant lighting, rich cinematic composition",
  },
];

const TemplatesBar = ({
  onSelect,
}) => {
  return (
    <div>

      <p className="mb-3 text-sm font-semibold text-slate-300">
        ✨ Quick Templates
      </p>

      <div className="flex flex-wrap gap-2">

        {templates.map((template) => (

          <button
            key={template.title}
            onClick={() => onSelect(template.prompt)}
            className="rounded-full bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:bg-violet-600 hover:text-white"
          >
            {template.title}
          </button>

        ))}

      </div>

    </div>
  );
};

export default TemplatesBar;