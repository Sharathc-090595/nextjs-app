import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
      <div className='border-4 border-yellow-400'>
          <Header />
          <div className="bg-black h-screen pl-6 ">
            <div className="text-yellow-500 text-5xl pt-10 flex justify-between">
              <h1>Contact Us</h1>
              </div>
              <div className="mt-16 ml-10 flex justify-start">
                <div>
              <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke-width="1.5" 
              stroke="currentColor" 
              class="w-6 h-6">

                <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
          </svg></div>
          <div><p>+91 9846655561</p></div>
              </div>

              <div className="text-yellow-500 text-3xl">
              <div></div>
              
              <div className="flex-col space-y-6 pr-20">
                <div className="flex justify-end "><p>Drop in your details, we will get in touch with you</p></div>
              
                <div className="flex justify-end space-x-6 pt-10">
                
                <label for="name">Name</label>
                  <input className="text-lg w-3/12 border rounded-md" type="text" placeholder="Enter your Name"/>
                </div>
                <div className="flex justify-end space-x-6">
                <label for="email" >Email ID</label>
                  <input className="text-lg w-3/12 border rounded-md" type="email" placeholder="Enter your Email ID"/>
                </div>
                <div className="flex justify-end space-x-6">
                <label for="message" >Message</label>
                  <input className="text-lg w-3/12 h-32 border rounded-md" type="text" placeholder="Enter your message"/>
                </div>
                <div className="flex justify-end text-black text-lg pr-28">
              <button className="bg-yellow-500 w-28 h-10 border rounded ">Submit</button>
            </div>
              </div>
            </div>
          </div>
          <Footer />
      </div>
  );
}