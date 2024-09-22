import parts from '../../assets/images/about_us/parts.jpg'
import person from '../../assets/images/about_us/person.jpg'

const About = () => {
  return (
    <div className="hero bg-base-100 min-h-screen">
      <div className="hero-content flex-col gap-10 lg:flex-row">
        <div className="w-full lg:w-1/2 relative">
          <img
            src={person}
            className="rounded-lg w-3/4 shadow-2xl"
          />
          <img
            src={parts}
            className="rounded-lg w-1/2 border-8 border-white right-5 top-1/2 absolute shadow-2xl"
          />
        </div>
        <div className="w-full lg:w-1/2 space-y-5">
        <h3 className='text-xl font-bold text-[#FF3811] '>About Us</h3>
          <h1 className="text-5xl text-[#151515] font-bold">We are qualified & of experience in this field</h1>
          <p className='text-[#737373]'>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
          </p>
          <p className='text-[#737373]'>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
          <button className="font-semibold text-lg rounded border text-white bg-[#FF3811] px-3 py-2 hover:bg-[#ce2b0a]">
          Get More Info
        </button>
        </div>
      </div>
    </div>
  );
};

About.propTypes = {};

export default About;
