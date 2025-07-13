import IconCloud from "./ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript", 
  "nextJs",
  "redis", 
  "c",
  "cplusplus",
  "mongodb",
  "react", 
  "html5",
  "css3", 
  "express",
  "nextdotjs", 
  "postgresql",
  "firebase", 
  "vercel",  
  "cypress",
  "docker",
  "git", 
  "github",
  "gitlab",
  "visualstudiocode",  
  "figma",
];

function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;
