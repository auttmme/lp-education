import './App.css';
import { UilBookOpen, UilPlay, UilArrowRight, UilBars } from '@iconscout/react-unicons'
import { bottomSheet } from "react-simple-bottom-sheet";

const cardItem = [
  {
    image: "/study-1.jpg",
    title: "Designing digital product for enterprice company",
    desc: "Technical lesson to design a better enterprise digital product"
  },
  {
    image: "/study-2.jpg",
    title: "Maintaining your design system efficiently",
    desc: "A huge design system need a little special treatment"
  }
]

function App() {
  return (
    <>
        <Navbar />
        <Hero />
        <section className="">
        <div className="laptop:container px-6 my-14">
          <div className="flex justify-between items-center mb-6">
            <h1 className="font-bold laptop:text-2xl tracking-wide mobile:text-xl">POPULAR COURSE</h1>
            <div className="flex items-center laptop:gap-4 mobile:gap-1 text-blue-500">
              <span className="font-medium tracking-wide">See All</span>
              <UilArrowRight size={30}/>
            </div>
          </div>
          <div className="flex laptop:flex-row gap-6 mobile:flex-col">
            {cardItem.map((item, index) => (
              <div key={index} className="flex gap-6 p-6 bg-indigo-700 laptop:w-1/2 rounded-2xl mobile:w-full">
                <div className="w-40 h-40 mobile:hidden laptop:block">
                  <img src={item.image} className="w-full h-full rounded-2xl" alt=""/>
                </div>
                <div className="flex flex-col laptop:justify-between mobile:gap-4">
                  <div className="flex flex-col gap-3">
                    <h1 className="text-white font-bold text-xl">{item.title}</h1>
                    <p className="text-gray-100 opacity-80">{item.desc}</p>
                  </div>
                <button className="py-4 px-10 bg-white text-indigo-600 rounded-2xl laptop:w-56 mobile:w-full text-center">Enroll course</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        </section>
      </>
  );
}

export default App;

const Navbar = () => {
  const handleOpen = () => bottomSheet.create({
    content: (        
    <div className="laptop:hidden font-medium text-gray-800 mobile:flex flex-col mobile:gap-4 pb-6 px-6">
      <a href="#">How It Works</a>
      <a href="#">Library</a>
      <a href="#">Activity</a>
      <a href="#">Pricing</a>
    </div>),
  });

  return (
    <nav className="laptop:container flex px-6 items-center justify-between py-8">
      <div className="flex gap-24">
        <div className="flex items-center justify-center"><UilBookOpen size={26} /></div>
        <div className="laptop:flex gap-14 font-medium text-gray-800 mobile:hidden">
          <a href="#">How It Works</a>
          <a href="#">Library</a>
          <a href="#">Activity</a>
          <a href="#">Pricing</a>
        </div>
      </div>
      <div className="laptop:flex gap-6 text-blue-500 font-medium mobile:hidden">
        <a href="#">Sign In</a>
        <span className="text-blue-300">|</span>
        <a href="#">Sign Up</a>
      </div>
      <button onClick={handleOpen} className="laptop:hidden mobile:block">
        <UilBars size={26} className="text-blue-500"/>
      </button>
  </nav>
  )
}

const Hero = () => {
  return (
    <section className="laptop:container flex justify-between laptop:mt-16 px-6 mobile:flex-col laptop:flex-row mobile:mt-0">
      <div className="w-1/3 laptop:mt-16 mobile:w-full mobile:mt-4">
        <div className="laptop:mb-10 mobile:mb-6">
          <h1 className="font-bold laptop:text-6xl leading-tight mb-8 tracking-wide mobile:text-3xl mobile:mb-4">A New Way of Digital Literacy</h1>
          <p className="font-medium text-gray-500 tracking-wide">Let's shape our future generation with a more efficient way of learning helped by existing technology</p>
        </div>
        <button className="py-4 px-10 bg-blue-500 text-white rounded-2xl text-lg mobile:w-full laptop:w-1/2">
          Get Started
        </button>
        <div className="flex items-center gap-4 text-blue-500 laptop:mt-12 mobile:mt-8">
          <div className="py-4 bg-blue-100 rounded-full w-12 h-12 flex justify-center items-center">
            <UilPlay size={26}/>
          </div>
          <span className="font-medium">
            Learn How
          </span>
        </div>
      </div>
      <div className="laptop:mt-0 w-2/5 mobile:w-full mobile:mt-4">
        <img src="/Saly-10.png" alt="" className=""/>
      </div>
  </section>
  )
}
