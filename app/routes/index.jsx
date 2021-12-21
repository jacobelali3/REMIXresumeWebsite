function Home() {
  return (
    <div>
    <div className="w-screen my-8 container bg-gradient-to-r from-black to-blue-300 mx-auto px-6 bg-opacity-50 flex items-center  rounded-lg overflow-hidden bg-cover bg-center  " >
      <div className="px-10 max-w-xl">

        <div className="text-6xl">
        <h2 className=" text-white font-semibold text-center pt-2">Jacob Elali</h2>
        </div>
      
        <div className="mt-6 py-2">
        <a href='/resume.pdf' className="inline-block text-xl px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-300 hover:bg-white " download='JacobElaliResume.pdf'>Resume</a>
      </div>

      </div>
      <div className="lg:ml-32 relative py-4 px-4 ">
        <div className="blur opacity-50 absolute -inset-0 bg-blue-200 rounded-full"></div>
      <img className=" border-transparent hover:border-2 rounded-full  relative w-60 " src={"/myprofilepic.jpg"} /> 
      </div>
      
    </div>

    <div className="ml-8">

      <h2 className="text-2xl text-left">About Me</h2>
      <p className="block  text-2xl w-1/2 h-fit text-black py-6 text-left ">
       
       I am a junior software engineer based in Sydney, Australia. My passion
       lies within web development and I love to explore the latest cutting
       edge technology! My most recent experience has been as a Junior Web
       Developer as a SWE Intern. I am looking for opportunities where I can
       learn, grow and thrive with development. I also love building real,
       genuine relationships with people.
     </p>
     </div>
    </div>
  );
}

export default Home;
