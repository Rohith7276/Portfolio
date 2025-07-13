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

            <div className="relative h-fit ">
              <p className="text-white">
                Hi, I’m Rohith.
              </p>
              <p>
                I am an aspiring Software Engineer & Developer with a deep passion for coding and problem-solving. I enjoy building something new every day—whether it's an innovative project, a handy tool, or a creative solution to a challenge. Beyond writing code, I bring curiosity, adaptability, and a strong work ethic, allowing me to contribute effectively to teams and projects. I'm always eager to take on new challenges, refine my skills, and explore fresh ideas.
              </p>
              <p>
                Thank you for visiting my portfolio and taking the time to explore my work!{" "}
              </p>

            </div>
          </div>
           
        </div>
      </section >
    </>
  );
}
