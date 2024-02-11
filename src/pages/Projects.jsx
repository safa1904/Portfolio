import { CTA } from "../components";

const Projects = () => {
  return (
    <section className='max-container flex flex-col h-screen'>
    <h1 className='head-text'>
      My{" "}
      <span className='blue-gradient_text drop-shadow font-semibold'>
        Projects
      </span>
    </h1>
    

      <div className='coming-soon-container'>
        <p className='head-text mt-2 leading-relaxed font-bold text-center'>
          Coming soon...
        </p>
      </div>

      <div className='cta-container'>
        <CTA />
      </div>
    </section>
  );
};

export default Projects;
