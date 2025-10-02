import { featuredBooks } from "../app/data/aboutData";

export default function Home() {
  return (
    <>
      <div className="h-screen bg-red-200">
        <div className="h-5 bg-gray-900"> </div>

        <div className="flex justify-between items-center py-2 pl-5">
          <div className="flex space-x-8 px-4">
            <p>Home</p>
            <p>About</p>
            <p>Feature</p>
          </div>

          <div className="text-3xl font-bold pl-5">
            <h1>Verasia</h1>
          </div>

          <div className="flex gap-4 pr-5">
            <div><a href="register">Register</a></div>
            <div ><a href="login" className="rounded-xl bg-black text-white px-4 py-2">Login</a></div>
          </div>
        </div>

        <div className="h-screen flex items-center justify-start pl-10 -mt-20">
          {/* <img src="/pic1.jpg" className="h-screen w-screen absolute inset-0 object-cover" /> */}
          <div className="px-21">

            <div className="text-5xl text-black relative z-5">
              <h1>Experience Our</h1>
              <h1>New Exclusive </h1>
              <h1>Books </h1>
            </div>

            <div className="px-2 py-2">
              <p className="">"Feed your mind, spark your imagination. </p>
              <p>Every book you buy is a new adventure waiting to unfold."</p>
            </div>

            <button>
              <p className="text-black bg-white rounded-2xl px-2 py-2">Shop Now</p>
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 px-4 items-start">
            <div className="h-80 w-80 bg-white rounded-t-[3000px] overflow-hidden relative flex justify-center items-center -translate-y-6">
              <img src="/17179.jpg" alt="" className="w-2/3 h-auto object-cover" />
            </div>
            <div className="h-80 w-80 bg-white rounded-b-[3000px] overflow-hidden relative flex justify-center items-center translate-y-6">
              <img src="/8804870.jpg" alt="" className="w-2/3 h-auto object-cover" />
            </div>
          </div>
        </div>


        {/* 
        <div className="flex justify-around ">
      
          <div className="w-full px-10 py-10  my-8 bg-pink-50 rounded-3xl shadow-2xl">
          <div className="text-black">
            <p className="text-3xl font-bold py-2">{aboutData.title}</p>
            <p>{aboutData.description}</p>
            
          </div>
         </div>

         <div className="w-5/12 px-10 py-10 rounded-3xl">
          <img src="/pic2.jpg" alt="" />
         </div>
        </div> */}

        <div >
          <h1 className="text-black text-center text-3xl font-bold pt-10">Featured Books</h1>
          <p className="text-gray text-center pb-10">Our top picks for this season - must-read books across all genres</p>

          <div className="px-10">

            <div className="w-full h-full grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6 rounded-10">{featuredBooks.map((book, index) => (<div key={index}>
              <img
                src={book.image}
                alt={book.name}
                />
                <h1 className="text-center font-bold text-red-500">{book.name}</h1>
                <p className="text-center ">{book.description}</p>
                <h2 className="text-center font-bold">{book.writer}</h2>
            </div>
            ))}</div>
          </div>


        </div>


      </div>
    </>
  );
}

