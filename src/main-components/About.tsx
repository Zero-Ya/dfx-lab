import aboutImg from "../assets/images/about.jpg"

const About = () => {
  return (
    <div className="flex text-[8px] flex-col gap-4 border border-gray-100 shadow-xl rounded-xl p-3 pb-10 px-6 min-[600px]:px-12">
      <div className="font-montserrat-semibold text-[14px] min-[600px]:text-[22px] min-[800px]:text-[30px] min-[1024px]:text-[34px]">About DFX Lab</div>

      <div className="flex flex-col min-[1024px]:flex-row items-center gap-4 min-[600px]:gap-6 min-[1024px]:gap-12">
        <div className="flex min-[600px]:text-[8px] min-[800px]:text-[10px] min-[1024px]:text-[14px] min-[1440px]:text-[18px] flex-col flex-3 gap-4">
          <div>At DFX Lab, we turn ideas into tangible realities. We are a design-focused 3D printing and digital fabrication studio dedicated to innovation, precision, and creative problem-solving.</div>

          <div>Founded with a passion for advanced manufacturing and product development, our lab combines cutting-edge technology with hands-on expertise to help creators, engineers, students, and businesses bring their concepts to life.</div>

          <div>Whether you’re prototyping a new product, refining a design, or producing small-batch custom parts, DFX Lab is built to support every stage of your creative journey — from concept to completion.</div>
        </div>

        <img className="w-full h-auto min-[1024px]:w-auto min-[1024px]:h-72 rounded-xl" src={aboutImg} />
      </div>
    </div>
  )
}

export default About
