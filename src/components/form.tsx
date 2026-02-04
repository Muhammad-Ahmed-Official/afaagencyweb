
export default function Form() {
  return (
    <section className="iframe-contact py-25 bg-linear-to-r from-[#0d1630] via-[#06080f]">
      <div className="container mx-auto max-w-350 px-6">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          {/* Map Column */}
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl font-semibold leading-[1.4] text-white mb-6.25">
             𝗪𝗵𝗲𝗿𝗲 𝘄𝗲 𝗮𝗿𝗲
            </h3>
            <div className="rounded-[5px] overflow-hidden border border-chart-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4681.733871427174!2d-106.95751588692308!3d44.79795157095024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5335fabe8182314f%3A0x16eb18eacf1e0aff!2s30%20N%20Gould%20St%20ste%20r%2C%20Sheridan%2C%20WY%2082801%2C%20USA!5e1!3m2!1sen!2s!4v1764024355435!5m2!1sen!2s"
                width="100%"
                height="450"
                style={{ border: 0, filter: "grayscale(100%) invert(90%) contrast(100%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
              ></iframe>
            </div>
          </div>

          {/* Form Column */}
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl font-semibold leading-[1.4] text-white mb-6.25">
              𝚂𝚎𝚗𝚍 𝚞𝚜 𝚖𝚎𝚜𝚜𝚊𝚐𝚎
            </h3>
            <form className="space-y-4 border border-[#ffffff57] rounded-2xl p-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    className="w-full h-13.75 bg-[#1c1c1f] border border-chart-4 rounded-[5px] px-5 text-white placeholder-[#9a9a9a] text-[15px] focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="w-full h-13.75 bg-[#1c1c1f] border border-chart-4 rounded-[5px] px-5 text-white placeholder-[#9a9a9a] text-[15px] focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="form-group">
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Phone"
                    className="w-full h-13.75 bg-[#1c1c1f] border border-chart-4 rounded-[5px] px-5 text-white placeholder-[#9a9a9a] text-[15px] focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="budget"
                    placeholder="Budget"
                    className="w-full h-13.75 bg-[#1c1c1f] border border-chart-4 rounded-[5px] px-5 text-white placeholder-[#9a9a9a] text-[15px] focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              <div className="form-group">
                <textarea
                  id="exampleFormControlTextarea1"
                  rows={6}
                  placeholder="Message"
                  className="w-full bg-[#1c1c1f] border border-chart-4 rounded-[5px] p-5 text-white placeholder-[#9a9a9a] text-[15px] focus:outline-none focus:border-white transition-colors resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button type="submit"
                  className="relative inline-flex cursor-pointer items-center justify-center border border-gray-700 rounded-xl px-12 py-3.5 bg-gray-900 text-white font-medium text-[15px] transition-all duration-300 hover:bg-gray-800 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 active:scale-[0.98] group">
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-500/20 transition-all duration-500" />
                  
                  <span className="relative z-10 mr-3">Submit</span>
                  <svg
                    width="11.4"
                    height="9.2"
                    viewBox="0 0 11.4 9.2"
                    className="fill-current transform transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110 relative z-10">
                    <path
                      d="M6.6,0.2c-0.3,0.3-0.3,0.7,0,1.1l2.4,2.4H0.7C0.3,3.7,0,4,0,4.5s0.3,0.7,0.7,0.7h8.3L6.6,7.9c-0.3,0.3-0.3,0.7,0,1.1 c0.3,0.3,0.7,0.3,1.1,0l3.6-3.6c0.3-0.3,0.3-0.7,0-1.1L7.7,0.2C7.3-0.1,6.9-0.1,6.6,0.2z"
                    ></path>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}