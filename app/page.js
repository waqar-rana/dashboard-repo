import Image from "next/image";
import Header from "./components/header";
import FTTlogo from "../app/images/logo.png"
import WivesHubLogo from "../app/images/wiveshub.png"
import DJlogo from "../app/images/dailyjugarr.png"
import moazzam from "../app/images/moazzam.png"
import naveed from "../app/images/naveed.png"
import nabeel from "../app/images/nabeel.png"
import aftab from "../app/images/aftab.jpg"
import comingSoon from "../app/images/coming-soon.png"
import Link from "next/link";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <span className="fixed bottom-2 right-4 z-50 font-bold text-xs text-transparent hover:text-gray-500">
        Developed By: <Link className="underline hover:text-blue-600" href={"https://nawab-dev.vercel.app"} target="blank">Nawab Moazzam</Link>
      </span>
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center top-[-100px]"
        style={{
          minHeight: "75vh"
        }}>
        <div className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1556565681-306458ef93cd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
          }}>
          <span className="w-full h-full absolute opacity-70 bg-black"></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="px-5">
                <h1 className="text-white font-semibold text-5xl">
                  Better Solution For Your Social Media Traffic
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                  A technology-first publisher specializing in entertainment, looking to partner with affiliates to drive traffic to our websites
                </p>
              </div>
            </div>

          </div>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style={{ height: "70px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-violet-900 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
      <section className="pb-20 bg-violet-900 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-violet-800 w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  {/* <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400"> */}
                  <Image className="p-3 inline-flex items-center justify-center mb-5" src={comingSoon} width={180} alt="Daily Jugarr Logo" />
                  {/* </div> */}
                  <h6 className="text-white text-xl font-semibold">Good things come to those who wait</h6>
                  <p className="mt-2 mb-4 text-gray-300">
                    Exciting things are on the horizon. So Stay tuned for something amazing!
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-violet-800 w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  {/* <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400"> */}
                  <Link href={"https://fashiontipstricks.com"} target="blank">
                    <Image className="p-3 inline-flex items-center justify-center mb-5" src={FTTlogo} width={200} alt="Fasion Tips Tricks Logo" />
                  </Link>
                  {/* </div> */}
                  <h6 className="text-white text-xl font-semibold hover:underline">
                    <Link href={"https://fashiontipstricks.com"} target="blank">Fashion Tips & Tricks</Link>
                  </h6>
                  <p className="mt-2 mb-4 text-gray-300">
                    Fashiontipstricks is a website that shares easy fashion tips and tricks to help you look your best. It covers everything from basic wardrobe advice to the latest trends. Ideal for anyone wanting to improve their style with simple, practical advice.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-violet-800 w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  {/* <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400"> */}
                  <Image className="p-3 inline-flex items-center justify-center mb-5" src={comingSoon} width={180} alt="Wives Hub Logo" />
                  {/* </div> */}
                  <h6 className="text-white text-xl font-semibold">
                    Good things come to those who wait
                  </h6>
                  <p className="mt-2 mb-4 text-gray-300">
                    Exciting things are on the horizon. So Stay tuned for something amazing!
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div className="flex flex-wrap items-center mt-32">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div className="text-gray-300 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-violet-100">
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000"><path d="M451-193h55v-52q61-7 95-37.5t34-81.5q0-51-29-83t-98-61q-58-24-84-43t-26-51q0-31 22.5-49t61.5-18q30 0 52 14t37 42l48-23q-17-35-45-55t-66-24v-51h-55v51q-51 7-80.5 37.5T343-602q0 49 30 78t90 54q67 28 92 50.5t25 55.5q0 32-26.5 51.5T487-293q-39 0-69.5-22T375-375l-51 17q21 46 51.5 72.5T451-247v54Zm29 113q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z" /></svg>
              </div>
              <h3 className="text-white text-3xl mb-2 font-semibold leading-normal">
                GET PAID FOR SHARING STORIES YOUR FOLLOWERS WILL ADORE.
              </h3>
              <p className="text-base font-light leading-relaxed mt-4 mb-4 text-gray-300">
                1. You have the freedom to select stories based on your fanbase, and the choice to decide if you want to pursue them. Your storytelling, your decision.
              </p>
              <p className="text-base font-light leading-relaxed mt-0 mb-4 text-gray-300">
                2. Plus, if your fans share the story, you will earn from every click their friends give as well! More shares, more earnings for you.
              </p>
              <p className="text-base font-light leading-relaxed mt-0 mb-4 text-gray-300">
                3. With our excellent tracking system, you can always see in real time where your clicks are coming from and how much money you are earning. Stay informed and in control of your earnings effortlessly.
              </p>
              <p className="text-base font-light leading-relaxed mt-0 mb-4 text-gray-300">
                4. Every click from your fans on the story means compensation and rewards for you, whether it is on Facebook, Instagram, Twitter, or any other platform! Your fans engagement pays off across all channels
              </p>
              <a
                href="mailto:socialseo090@gmail.com"
                className="font-bold text-blue-600 mt-8"
                target="blank"
              >
                Need More Information?
              </a>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-blue-600">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block"
                    style={{
                      height: "95px",
                      top: "-94px"
                    }}
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-blue-600 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Working with us is a pleasure
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    Make money by sharing stories your followers love. Turn your unique voice into income. Every captivating tale you share opens up a new way to earn, building a community that can not wait for your next story.
                  </p>
                </blockquote>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="relative py-20">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-violet-900 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto px-4">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-lg"
                src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
              />
            </div>
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div className="md:pr-12">
                <div className="text-blue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-300">
                  <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000"><path d="M480-40q-112 0-216-66T100-257v137H40v-240h240v60H143q51 77 145.5 138.5T480-100q78 0 147.5-30t121-81.5Q800-263 830-332.5T860-480h60q0 91-34.5 171T791-169q-60 60-140 94.5T480-40Zm-29-153v-54q-45-12-75.5-38.5T324-358l51-17q12 38 42.5 60t69.5 22q40 0 66.5-19.5T580-364q0-33-25-55.5T463-470q-60-25-90-54t-30-78q0-44 30-75t80-38v-51h55v51q38 4 66 24t45 55l-48 23q-15-28-37-42t-52-14q-39 0-61.5 18T398-602q0 32 26 51t84 43q69 29 98 61t29 83q0 25-9 46t-25.5 36Q584-267 560-257.5T506-245v52h-55ZM40-480q0-91 34.5-171T169-791q60-60 140-94.5T480-920q112 0 216 66t164 151v-137h60v240H680v-60h137q-51-77-145-138.5T480-860q-78 0-147.5 30t-121 81.5Q160-697 130-627.5T100-480H40Z" /></svg>
                </div>
                <h3 className="text-white text-3xl font-semibold">
                  A growing company
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-300">
                  We generate the industrys highest conversion rates and drive over 1.5B readers yearly. <strong>Daily Earn Online</strong> affiliate team is looking for partners that want to launch a new and scalable revenue stream.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#2563eb"><path d="M294-242 70-466l43-43 181 181 43 43-43 43Zm170 0L240-466l43-43 181 181 384-384 43 43-427 427Zm0-170-43-43 257-257 43 43-257 257Z" /></svg>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-300">
                          Industry-Leading Conversion Rates
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#2563eb"><path d="M294-242 70-466l43-43 181 181 43 43-43 43Zm170 0L240-466l43-43 181 181 384-384 43 43-427 427Zm0-170-43-43 257-257 43 43-257 257Z" /></svg>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-300">Massive Reader Engagement</h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#2563eb"><path d="M294-242 70-466l43-43 181 181 43 43-43 43Zm170 0L240-466l43-43 181 181 384-384 43 43-427 427Zm0-170-43-43 257-257 43 43-257 257Z" /></svg>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-300">Scalable Revenue Opportunities</h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="pt-20 pb-48">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-white text-4xl font-semibold">
                Here are our heroes
              </h2>
              <p className="text-xl leading-relaxed m-4 text-gray-300">
                <span className="font-bold text-2xl text-gray-500">T</span>ogether <span className="font-bold text-2xl text-gray-500">E</span>veryone <span className="font-bold text-2xl text-gray-500">A</span>chieves <span className="font-bold text-2xl text-gray-500">M</span>ore!
              </p>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <Image className="shadow-lg rounded-full max-w-full mx-auto" src={moazzam} width={180} alt="Nawab Moazzam" />
                <div className="pt-6 text-center">
                  <h5 className="text-white text-xl font-bold">
                    Nawab Moazzam
                  </h5>
                  <p className="mt-1 text-sm text-gray-400 uppercase font-semibold">
                    Web Developer
                  </p>
                  <div className="mt-3 flex items-center justify-center gap-4">
                    <Link href={"https://www.facebook.com/nawab.webdev/"} target="blank" className="w-8 h-8 m-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="text-white hover:text-blue-600 transition-all duration-500" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                      </svg>
                    </Link>
                    <Link href={"https://www.instagram.com/nawab_webdev/"} target="blank" className="w-8 h-8 m-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="text-white hover:text-pink-600 transition-all duration-500" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <Image className="shadow-lg rounded-full max-w-full mx-auto" src={nabeel} width={180} alt="Nabeel Ameen" />
                <div className="pt-6 text-center">
                  <h5 className="text-white text-xl font-bold">
                    Nabeel Ameen
                  </h5>
                  <p className="mt-1 text-sm text-gray-400 uppercase font-semibold">
                    Marketing Specialist
                  </p>
                  <div className="mt-3 flex items-center justify-center gap-4">
                    <Link href={"#"} target="blank" className="w-8 h-8 m-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="text-white hover:text-blue-600 transition-all duration-500" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                      </svg>
                    </Link>
                    <Link href={"https://www.instagram.com/nabeel.ahmad001/"} target="blank" className="w-8 h-8 m-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="text-white hover:text-pink-600 transition-all duration-500" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <Image className="shadow-lg rounded-full max-w-full mx-auto" src={aftab} width={180} alt="Aftab Ahmad" />
                <div className="pt-6 text-center">
                  <h5 className="text-white text-xl font-bold">
                    Aftab Ahmad
                  </h5>
                  <p className="mt-1 text-sm text-gray-400 uppercase font-semibold">
                    Co-Founder
                  </p>
                  <div className="mt-3 flex items-center justify-center gap-4">
                    <Link href={"https://www.facebook.com/brogrammer77/"} target="blank" className="w-8 h-8 m-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="text-white hover:text-blue-600 transition-all duration-500" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                      </svg>
                    </Link>
                    <Link href={"https://www.instagram.com/iffi.8/"} target="blank" className="w-8 h-8 m-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="text-white hover:text-pink-600 transition-all duration-500" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <Image className="shadow-lg rounded-full max-w-full mx-auto" src={naveed} width={180} alt="Naveed Ameen" />
                <div className="pt-6 text-center">
                  <h5 className="text-white text-xl font-bold">
                    Naveed Ameen
                  </h5>
                  <p className="mt-1 text-sm text-gray-400 uppercase font-semibold">
                    Founder and CEO
                  </p>
                  <div className="mt-3 flex items-center justify-center gap-4">
                    <Link href={"https://www.facebook.com/profile.php?id=100052271644732"} target="blank" className="w-8 h-8 m-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="text-white hover:text-blue-600 transition-all duration-500" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                      </svg>
                    </Link>
                    <Link href={"https://www.instagram.com/naveednaveedali4483/"} target="blank" className="w-8 h-8 m-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="text-white hover:text-pink-600 transition-all duration-500" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="pb-20 relative block bg-violet-900">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-violet-900 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold text-white">
                Frequently Asked Questions
              </h2>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-400">
                We provide a platform for you to share your stories with your followers. When your fans click on and engage with your stories, you earn compensation for each click. Find answers to commonly asked questions about our platform and how it works. Whether you are curious about payment methods, story selection, or tracking your earnings, we have got you covered with these FAQs.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap mt-12 justify-center">
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-violet-800 inline-flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#ffffff"><path d="M431-330q1-72 16.5-105t58.5-72q42-38 64.5-70.5T593-647q0-45-30-75t-84-30q-52 0-80 29.5T358-661l-84-37q22-59 74.5-100.5T479-840q100 0 154 55.5T687-651q0 48-20.5 87T601-482q-49 47-59 72t-11 80H431Zm48 250q-29 0-49.5-20.5T409-150q0-29 20.5-49.5T479-220q29 0 49.5 20.5T549-150q0 29-20.5 49.5T479-80Z" /></svg>
              </div>
              <h6 className="text-xl mt-5 font-semibold text-white">
                Track Your Earnings
              </h6>
              <p className="mt-2 mb-4 text-gray-400 text-justify">
                To track your earnings, simply log into your account and access our user-friendly dashboard. Here, you will find detailed insights into where your clicks are coming from and the corresponding earnings. Our system provides real-time updates, ensuring you are always in the know about your earnings.
              </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-violet-800 inline-flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#ffffff"><path d="M431-330q1-72 16.5-105t58.5-72q42-38 64.5-70.5T593-647q0-45-30-75t-84-30q-52 0-80 29.5T358-661l-84-37q22-59 74.5-100.5T479-840q100 0 154 55.5T687-651q0 48-20.5 87T601-482q-49 47-59 72t-11 80H431Zm48 250q-29 0-49.5-20.5T409-150q0-29 20.5-49.5T479-220q29 0 49.5 20.5T549-150q0 29-20.5 49.5T479-80Z" /></svg>
              </div>
              <h5 className="text-xl mt-5 font-semibold text-white">
                Payments
              </h5>
              <p className="mt-2 mb-4 text-gray-400 text-justify">
                We offer various payment methods to ensure convenience for our users. You can choose from options such as Bank Transfers, PayPal, Payoneer, or other electronic payment methods. When you reach the minimum threshold for payout, simply select your preferred payment method in your account settings, and we will process your earnings accordingly.
              </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-violet-800 inline-flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#ffffff"><path d="M431-330q1-72 16.5-105t58.5-72q42-38 64.5-70.5T593-647q0-45-30-75t-84-30q-52 0-80 29.5T358-661l-84-37q22-59 74.5-100.5T479-840q100 0 154 55.5T687-651q0 48-20.5 87T601-482q-49 47-59 72t-11 80H431Zm48 250q-29 0-49.5-20.5T409-150q0-29 20.5-49.5T479-220q29 0 49.5 20.5T549-150q0 29-20.5 49.5T479-80Z" /></svg>
              </div>
              <h5 className="text-xl mt-5 font-semibold text-white">
                Average RPM
              </h5>
              <p className="mt-2 mb-4 text-gray-400 text-justify">
                The RPM (Revenue per Mille) for visitors on our platform ranges from a minimum of $2 to as high as $18. This range is based on the traffic arrangement and engagement levels. We aim to provide a minimum RPM of $2 to ensure a consistent earning potential, while higher RPMs up to $18 can be achieved with optimized traffic and engagement strategies.
              </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-violet-800 inline-flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#ffffff"><path d="M431-330q1-72 16.5-105t58.5-72q42-38 64.5-70.5T593-647q0-45-30-75t-84-30q-52 0-80 29.5T358-661l-84-37q22-59 74.5-100.5T479-840q100 0 154 55.5T687-651q0 48-20.5 87T601-482q-49 47-59 72t-11 80H431Zm48 250q-29 0-49.5-20.5T409-150q0-29 20.5-49.5T479-220q29 0 49.5 20.5T549-150q0 29-20.5 49.5T479-80Z" /></svg>
              </div>
              <h5 className="text-xl mt-5 font-semibold text-white">
                Story Selection
              </h5>
              <p className="mt-2 mb-4 text-gray-400 text-justify">
                For story selection, you have the freedom to choose narratives that resonate best with your fanbase. Consider what your followers enjoy most and share stories that align with their interests. Whether it is personal anecdotes, informative pieces, or creative tales, the choice is yours. Selecting stories that engage your audience increases the likelihood of earning from their clicks.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
