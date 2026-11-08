import HeroImg from "@/assets/images/hero.png";
// import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Aspiring Software Engineer & Developer
          </h2>
          <div className="flex md:flex-row flex-col justify-center items-center gap-8 md:gap-[10rem]">
            <div className=" h-[19rem] w-[18rem]  md:w-[95rem]">
          <img
  src={HeroImg}
  alt="payments illustration"
  width={1507}
  height={1229}
  className="block md:ml-16 "
  style={{ filter: 'brightness(0.9) drop-shadow(0 4px 10px rgba(255, 255, 255, 0.3))' }}
/>


            </div>

            <div className="relative h-fit space-y-4">
              <p className="text-white text-xl font-semibold">
                Hi, I’m Rohith.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I am a Software Developer experienced in building AI-powered and full-stack applications using React, Node.js, and REST APIs. I have developed LLM-integrated solutions with Retrieval-Augmented Generation (RAG), semantic retrieval, and intelligent document processing while architecting scalable backend systems with Redis, Docker, and Socket.io.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With a strong foundation in problem-solving and software engineering, I enjoy building high-impact platforms—from real-time collaborative applications to performant, client-facing enterprise tools.
              </p>
              <p className="text-cyan-400 font-medium">
                Thank you for visiting my portfolio and taking the time to explore my work!
              </p>

            </div>
          </div>
           
        </div>
      </section >
    </>
  );
}
