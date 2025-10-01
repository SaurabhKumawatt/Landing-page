import React, { useState, useEffect } from 'react';
import { Header, Footer } from "./Layout";
import CountdownTimer from "./CountdownTimer";
import {
  Play,
  Star,
  Users,
  TrendingUp,
  MessageCircle,
  Instagram,
  Youtube,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  DollarSign,
  Award,
  Target,
  Phone,
  Mail,
  ArrowRight,
  X,
  UserPlus,
  BookOpen,
  User,
  Check,
  ChevronDown
} from 'lucide-react';

function App() {
  const [showWhatsAppPopup, setShowWhatsAppPopup] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentFeedback, setCurrentFeedback] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWhatsAppPopup(true);
    }, 30000); // Show popup after 30 seconds

    return () => clearTimeout(timer);
  }, []);



  return (
    <>

      <div
        className="min-h-screen bg-[#F8F8F8]"
        style={{
          '--color-primary': '#C7A055',
          '--color-primary1': '#EFD9B0',
          '--color-secondary': '#182432',
          '--color-accent': '#421B20',
          '--color-bg': '#F8F8F8',
          '--color-bg1': '#012B85',
          '--color-text': '#182432',
          '--color-body-text': '#000000'
        } as React.CSSProperties & Record<string, string>}
      >

        {/* Hero Section */}
        <Header />
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-[#F8F8F8] to-[#EFD9B0]/10 text-[#182432]">
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Side - Content */}
                <div className="space-y-8">
                  {/* Headline */}
                  <div className="space-y-6">
                    <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                      Hi, I'm <span className="text-[#C7A055]">Sakila Mandar</span>
                    </h1>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                      Student from Haryana. StraviX ke saath maine apni padhai ke saath-saath digital duniya me apna career banaya—total industry earning <span className="font-bold text-[#C7A055]">₹32 Lakh+</span>. Main bhi ek simple student ki tarah zero knowledge se start kiya tha; aaj main naye students ko step-by-step guide karti hoon kaise online apna stable income create kar sakte hain.
                    </p>
                  </div>

                  {/* FOMO Line */}
                  <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 p-4 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <p className="text-red-700 font-bold text-base md:text-lg">
                        Only <span className="text-red-600">6/10 mentorship seats</span> left this month. First come, first guided.
                      </p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="space-y-3">
                    <button
                      onClick={() => setShowWhatsAppPopup(true)}
                      className="w-full md:w-auto bg-[#25D366] hover:bg-[#20C157] text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-xl flex items-center justify-center space-x-3"
                    >
                      <MessageCircle className="w-6 h-6" />
                      <span>Message Me on WhatsApp Now</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Right Side - Profile Picture */}
                <div className="flex justify-center lg:justify-end">
                  <div className="relative">
                    {/* Profile Picture */}
                    <div className="relative w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#C7A055] shadow-2xl">
                      <img
                        src="/assets/images/Sakila-mandar.webp"
                        alt="Sakila Mandar, StraviX Affiliate Mentor"
                        className="w-full h-full object-cover"
                      />

                      {/* Badge - Bottom Right */}
                    </div>
                      <div className="absolute -bottom-2 right-7 md:bottom-3 md:right-2 bg-[#182432] text-white text-sm md:text-base font-semibold px-4 py-2 rounded-xl shadow-lg flex items-center space-x-1">
                        <img src="/assets/images/stravix.png" alt="" className='w-20' />
                        <p className='font-serif'>Affiliate</p>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-4 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#C7A055]">Real Results</h2>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-[#182432]">
                  My Earnings & Milestones
                </h3>
                <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                  Jo main achieve kiya, wahi main aapko bhi sikhaungi — simple, practical aur duplicable.
                </p>
              </div>

              {/* Image Slider */}
              <div className="relative mb-12">
                <div className="overflow-x-auto scrollbar-hide">
                  <div className="flex space-x-4 pb-4" style={{ width: 'max-content' }}>
                    {/* Slide 1 */}
                    <div className="flex flex-col w-64 md:w-80 flex-shrink-0">
                      <img
                        src="/assets/images/sakila-earnings-proof.webp"
                        alt="From Zero to 1 Lakh earnings proof"
                        className="w-full h-64 md:h-80 object-contain bg-gray-100 rounded-lg shadow-lg"
                      />
                      <div className="h-fit bg-black/70 text-white p-4 rounded-b-lg">
                        <p className="font-semibold text-sm md:text-base">
                          From Zero to 1 Lakh in Just 2 Month – ghar baithe.
                        </p>
                      </div>
                    </div>

                    {/* Slide 2 */}
                    <div className="flex flex-col w-64 md:w-80 flex-shrink-0">
                      <img
                        src="/assets/images/sakila-30k-monthly-proof.webp"
                        alt="30k monthly earnings achievement"
                        className="w-full h-64 md:h-80 object-contain bg-gray-100 rounded-lg shadow-lg"
                      />
                      <div className="h-fit   bg-black/70 text-white p-4 rounded-b-lg">
                        <p className="font-semibold text-sm md:text-base">
                          Zero se start karke ₹30,000/month achieve kiya.
                        </p>
                      </div>
                    </div>

                    {/* Slide 3 */}
                    <div className="flex flex-col relative w-72 md:w-96 flex-shrink-0">
                      <img
                        src="/assets/images/sakila-32lakh-industry-earning-proof.webp"
                        alt="32 Lakh total industry earning with StraviX"
                        className="w-full h-64 md:h-80 object-contain bg-gray-100 rounded-lg shadow-lg"
                      />
                      <div className="  bg-black/70 text-white p-4 rounded-b-lg">
                        <p className="font-semibold text-sm md:text-base">
                          Total ₹32 Lakh+ industry earning with StraviX.
                        </p>
                      </div>
                    </div>

                    {/* Slide 4 */}
                    <div className="flex flex-col relative w-64 md:w-64 flex-shrink-0">
                      <img
                        src="/assets/screenshots/anjali-2.webp"
                        alt="100+ women impacted success story"
                        className="w-full h-64 md:h-80 object-contain bg-gray-100 rounded-lg shadow-lg"
                      />
                      <div className="  bg-black/70 text-white p-4 rounded-b-lg">
                        <p className="font-semibold text-sm md:text-base">
                          Impacting 100+ lives — ab baari aapki hai.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Scroll indicator */}
                <div className="flex justify-center mt-4 md:hidden">
                  <p className="text-sm text-gray-500">← Swipe to see more →</p>
                </div>
              </div>

              {/* Mini CTA Block */}
              <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 p-6 rounded-lg mb-8">
                <div className="text-center">
                  <p className="text-red-700 font-bold text-lg mb-4">
                    ⚡ Seats filling fast — only 6/10 mentorship seats left this month.
                  </p>
                  <button
                    onClick={() => setShowWhatsAppPopup(true)}
                    className="w-full bg-[#25D366] hover:bg-[#20C157] text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Message Me on WhatsApp Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Presentation Video Section */}
        <section className="bg-gradient-to-br from-white via-[#F8F8F8] to-[#EFD9B0]/10 pb-4">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#C7A055]"> Real People. Real Growth.</h2>
                <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                  Explore the inspiring journeys and genuine feedback from our StraviX community.
                </p>
              </div>

              {/* Part 1: Image Testimonials Slider */}
              <div className="mb-16">
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#182432] text-center">
                  Voices of Our Community
                </h3>
                <div className="relative mb-8">
                  <div className="overflow-x-auto scrollbar-hide">
                    <div className="flex space-x-4 pb-4" style={{ width: 'max-content' }}>
                      {/* Testimonial 1 */}
                      <div className="relative w-64 md:w-64 flex-shrink-0">
                        <img
                          src="/assets/screenshots/aarish.webp"
                          alt="Community testimonial 1"
                          className="w-full h-102 md:h-96 object-contain bg-gray-100 rounded-lg shadow-lg"
                        />
                      </div>

                      {/* Testimonial 2 */}
                      <div className="relative w-64 md:w-64 flex-shrink-0">
                        <img
                          src="/assets/screenshots/anjali.webp"
                          alt="Community testimonial 2"
                          className="w-full h-102 md:h-96 object-contain bg-gray-100 rounded-lg shadow-lg"
                        />
                      </div>

                      {/* Testimonial 3 */}
                      <div className="relative w-64 md:w-64 flex-shrink-0">
                        <img
                          src="/assets/screenshots/anju.webp"
                          alt="Community testimonial 3"
                          className="w-full h-102 md:h-96 object-contain bg-gray-100 rounded-lg shadow-lg"
                        />
                      </div>

                      {/* Testimonial 4 */}
                      <div className="relative w-64 md:w-64 flex-shrink-0">
                        <img
                          src="/assets/screenshots/kanak.webp"
                          alt="Community testimonial 4"
                          className="w-full h-102 md:h-96 object-contain bg-gray-100 rounded-lg shadow-lg"
                        />
                      </div>

                      {/* Testimonial 5 */}
                      <div className="relative w-64 md:w-64 flex-shrink-0">
                        <img
                          src="/assets/screenshots/karishma.webp"
                          alt="Community testimonial 5"
                          className="w-full h-102 md:h-96 object-contain bg-gray-100 rounded-lg shadow-lg"
                        />
                      </div>
                      {/* Testimonial 6 */}
                      <div className="relative w-64 md:w-64 flex-shrink-0">
                        <img
                          src="/assets/screenshots/komal.webp"
                          alt="Community testimonial 5"
                          className="w-full h-102 md:h-96 object-contain bg-gray-100 rounded-lg shadow-lg"
                        />
                      </div>
                      {/* Testimonial 7 */}
                      <div className="relative w-64 md:w-64 flex-shrink-0">
                        <img
                          src="/assets/screenshots/krishan.webp"
                          alt="Community testimonial 5"
                          className="w-full h-102 md:h-96 object-contain bg-gray-100 rounded-lg shadow-lg"
                        />
                      </div>
                      {/* Testimonial 8 */}
                      <div className="relative w-64 md:w-64 flex-shrink-0">
                        <img
                          src="/assets/screenshots/pinki.webp"
                          alt="Community testimonial 5"
                          className="w-full h-102 md:h-96 object-contain bg-gray-100 rounded-lg shadow-lg"
                        />
                      </div>
                      {/* Testimonial 9 */}
                      <div className="relative w-64 md:w-64 flex-shrink-0">
                        <img
                          src="/assets/screenshots/prgehlod.webp"
                          alt="Community testimonial 5"
                          className="w-full h-102 md:h-96 object-contain bg-gray-100 rounded-lg shadow-lg"
                        />
                      </div>
                      {/* Testimonial 10 */}
                      <div className="relative w-64 md:w-64 flex-shrink-0">
                        <img
                          src="/assets/screenshots/priyanka.webp"
                          alt="Community testimonial 5"
                          className="w-full h-102 md:h-96 object-contain bg-gray-100 rounded-lg shadow-lg"
                        />
                      </div>
                      {/* Testimonial 11 */}
                      <div className="relative w-64 md:w-64 flex-shrink-0">
                        <img
                          src="/assets/screenshots/priyanka-8lakh.webp"
                          alt="Community testimonial 5"
                          className="w-full h-102 md:h-96 object-contain bg-gray-100 rounded-lg shadow-lg"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Scroll indicator */}
                  <div className="flex justify-center mt-4 md:hidden">
                    <p className="text-sm text-gray-500">← Swipe to see more →</p>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#182432] text-center">
                  Team Earnings & Feedback
                </h3>
                <div className="relative mb-8">
                  <div className="overflow-x-auto scrollbar-hide">
                    <div className="flex space-x-4 pb-4" style={{ width: 'max-content' }}>
                      {/* Testimonial 1 */}
                      <div className="relative w-64 md:w-64 flex-shrink-0">
                        <img
                          src="/assets/screenshots/anjali-2.webp"
                          alt="Community testimonial 1"
                          className="w-full h-102 md:h-96 object-contain bg-gray-100 rounded-lg shadow-lg"
                        />
                      </div>

                      {/* Testimonial 2 */}
                      <div className="relative w-64 md:w-64 flex-shrink-0">
                        <img
                          src="/assets/screenshots/poonam.webp"
                          alt="Community testimonial 2"
                          className="w-full h-102 md:h-96 object-contain bg-gray-100 rounded-lg shadow-lg"
                        />
                      </div>

                      {/* Testimonial 3 */}
                      <div className="relative w-64 md:w-64 flex-shrink-0">
                        <img
                          src="/assets/screenshots/ponnam-dash.webp"
                          alt="Community testimonial 3"
                          className="w-full h-102 md:h-96 object-contain bg-gray-100 rounded-lg shadow-lg"
                        />
                      </div>

                      {/* Testimonial 4 */}
                      <div className="relative w-64 md:w-64 flex-shrink-0">
                        <img
                          src="/assets/screenshots/richa again.webp"
                          alt="Community testimonial 4"
                          className="w-full h-102 md:h-96 object-contain bg-gray-100 rounded-lg shadow-lg"
                        />
                      </div>

                      {/* Testimonial 5 */}
                      <div className="relative w-64 md:w-64 flex-shrink-0">
                        <img
                          src="/assets/screenshots/ritu-soni.webp"
                          alt="Community testimonial 5"
                          className="w-full h-102 md:h-96 object-contain bg-gray-100 rounded-lg shadow-lg"
                        />
                      </div>
                      {/* Testimonial 6 */}
                      <div className="relative w-64 md:w-64 flex-shrink-0">
                        <img
                          src="/assets/screenshots/rupa.webp"
                          alt="Community testimonial 5"
                          className="w-full h-102 md:h-96 object-contain bg-gray-100 rounded-lg shadow-lg"
                        />
                      </div>
                      {/* Testimonial 7 */}
                      <div className="relative w-64 md:w-64 flex-shrink-0">
                        <img
                          src="/assets/screenshots/sagar.webp"
                          alt="Community testimonial 5"
                          className="w-full h-102 md:h-96 object-contain bg-gray-100 rounded-lg shadow-lg"
                        />
                      </div>
                      {/* Testimonial 8 */}
                      <div className="relative w-64 md:w-64 flex-shrink-0">
                        <img
                          src="/assets/screenshots/sakina.webp"
                          alt="Community testimonial 5"
                          className="w-full h-102 md:h-96 object-contain bg-gray-100 rounded-lg shadow-lg"
                        />
                      </div>
                      {/* Testimonial 9 */}
                      <div className="relative w-64 md:w-64 flex-shrink-0">
                        <img
                          src="/assets/screenshots/sanjana.webp"
                          alt="Community testimonial 5"
                          className="w-full h-102 md:h-96 object-contain bg-gray-100 rounded-lg shadow-lg"
                        />
                      </div>
                      {/* Testimonial 10 */}
                      <div className="relative w-64 md:w-64 flex-shrink-0">
                        <img
                          src="/assets/screenshots/shagun.webp"
                          alt="Community testimonial 5"
                          className="w-full h-102 md:h-96 object-contain bg-gray-100 rounded-lg shadow-lg"
                        />
                      </div>
                      {/* Testimonial 11 */}
                      <div className="relative w-64 md:w-64 flex-shrink-0">
                        <img
                          src="/assets/screenshots/richa.webp"
                          alt="Community testimonial 5"
                          className="w-full h-102 md:h-96 object-contain bg-gray-100 rounded-lg shadow-lg"
                        />
                      </div>
                    </div>
                  </div>


                  {/* Scroll indicator */}
                  <div className="flex justify-center mt-4 md:hidden">
                    <p className="text-sm text-gray-500">← Swipe to see more →</p>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-gray-600 italic">Genuine feedback from our community.</p>
                </div>
              </div>

              {/* Part 2: Video Testimonials */}
              <div className="mb-12">
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#182432] text-center">
                  Real Journeys, Real Videos
                </h3>
                <div className="relative mb-8">
                  <div className="overflow-x-auto scrollbar-hide">
                    <div className="flex space-x-4 pb-4" style={{ width: 'max-content' }}>
                      {/* Video 1 */}
                      <div className="relative w-54 md:w-64 flex-shrink-0">
                        <div className="relative aspect-[9/16] bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                          <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/Z3zOOfIegus"
                            title="Success Story 1"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="rounded-lg"
                          ></iframe>
                        </div>
                      </div>

                      {/* Video 2 */}
                      <div className="relative w-54 md:w-64 flex-shrink-0">
                        <div className="relative aspect-[9/16] bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                          <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/nUIUXvXtlKU"
                            title="Success Story 2"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="rounded-lg"
                          ></iframe>
                        </div>
                      </div>

                      {/* Video 3 */}
                      <div className="relative w-54 md:w-64 flex-shrink-0">
                        <div className="relative aspect-[9/16] bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                          <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/oHcxSlUB-Ms"
                            title="Success Story 3"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="rounded-lg"
                          ></iframe>
                        </div>
                      </div>



                      {/* Video 5 */}
                      <div className="relative w-54 md:w-64 flex-shrink-0">
                        <div className="relative aspect-[9/16] bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                          <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/Q2OE4NEpwpI"
                            title="Success Story 5"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="rounded-lg"
                          ></iframe>
                        </div>
                      </div>

                      {/* Video 6 */}
                      <div className="relative w-54 md:w-64 flex-shrink-0">
                        <div className="relative aspect-[9/16] bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                          <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/Zo0ni6Yp_0g"
                            title="Success Story 6"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="rounded-lg"
                          ></iframe>
                        </div>
                      </div>

                      {/* Video 7 */}
                      <div className="relative w-54 md:w-64 flex-shrink-0">
                        <div className="relative aspect-[9/16] bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                          <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/a0v1Gxmp760"
                            title="Success Story 7"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="rounded-lg"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Scroll indicator */}
                  <div className="flex justify-center mt-4 md:hidden">
                    <p className="text-sm text-gray-500">← Swipe to see more →</p>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-gray-600 italic">Watch how StraviX changed their lives.</p>
                </div>
              </div>

              {/* End CTA Block */}
              <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 p-6 rounded-lg">
                <div className="text-center">
                  <p className="text-red-700 font-bold text-lg mb-4">
                    ⚡ Next story could be yours! Only 6/10 mentorship seats left.
                  </p>
                  <button
                    onClick={() => setShowWhatsAppPopup(true)}
                    className="w-full bg-[#25D366] hover:bg-[#20C157] text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Message Me on WhatsApp Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Presentation Video Section */}
        <section className="py-10 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-[#c7a055] text-3xl md:text-5xl font-bold mb-8">
                100% Registered & Legal
              </h2>
              <p className="text-xl text-black mb-12">
                100% Registered & Legal Platform – StraviX
              </p>

              {/* Documents Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {/* MSME Certificate */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src="https://res.cloudinary.com/dqqfy0u4u/image/upload/v1757486593/StraviX_Official_Docs_2__pages-to-jpg-0001_kzkph1.jpg"
                      alt="MSME Certificate"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-[#182432] text-center">MSME Certificate</h3>
                  </div>
                </div>

                {/* PAN Card */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="overflow-hidden">
                    <img
                      src="https://res.cloudinary.com/dqqfy0u4u/image/upload/v1757486593/StraviX_Official_Docs_2__pages-to-jpg-0002_dtnmph.jpg"
                      alt="PAN Card"
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-[#182432] text-center">PAN Card</h3>
                  </div>
                </div>

                {/* ISO Certificate */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src="https://res.cloudinary.com/dqqfy0u4u/image/upload/v1757486594/StraviX_Official_Docs_2__pages-to-jpg-0003_ahwvng.jpg"
                      alt="ISO Certificate"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-[#182432] text-center">ISO Certificate</h3>
                  </div>
                </div>
              </div>


              {/* CTA Section */}
              <div className="text-center">
                <button
                  onClick={() => setShowWhatsAppPopup(true)}
                  className="bg-[#25D366] hover:bg-[#20C157] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <MessageCircle className="w-6 h-6 inline mr-2" />
                  Secure Your Seat Now on WhatsApp
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* Growth & Impact Section */}
        <section className="py-10 bg-gradient-to-br from-white via-[#F8F8F8] to-[#EFD9B0]/10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#182432]">
                  Be Part of a <span className="text-[#C7A055]">Proven Movement</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                  1000+ learners & hustlers from all over India are creating real digital income with StraviX.
                </p>
              </div>

              {/* Icon Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

                {/* Card 1 - Network */}
                <div className="bg-gradient-to-br from-[#F8F8F8] to-[#EFD9B0]/20 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-[#C7A055] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#182432] mb-2">Powerful Network</h3>
                  <p className="text-gray-600">Students & professionals collaborating & growing together</p>
                </div>

                {/* Card 2 - Trust */}
                <div className="bg-gradient-to-br from-[#F8F8F8] to-[#EFD9B0]/20 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-[#C7A055] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#182432] mb-2">Trusted & Verified</h3>
                  <p className="text-gray-600">A registered and transparent platform backed by results</p>
                </div>

                {/* Card 3 - Events */}
                <div className="bg-gradient-to-br from-[#F8F8F8] to-[#EFD9B0]/20 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-[#C7A055] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#182432] mb-2">Inspiring Events</h3>
                  <p className="text-gray-600">Offline meets & online sessions to celebrate growth</p>
                </div>

                {/* Card 4 - Spotlight */}
                <div className="bg-gradient-to-br from-[#F8F8F8] to-[#EFD9B0]/20 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-[#C7A055] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#182432] mb-2">Spotlight</h3>
                  <p className="text-gray-600">Top achievers get featured & rewarded every month</p>
                </div>
              </div>

              {/* Mini CTA Block */}
              <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-600 p-6 rounded-lg mt-12">
                <div className="text-center">
                  <p className="text-green-800 font-bold text-lg mb-4">
                    🚀 Limited mentorship slots open each month — secure yours today!
                  </p>
                  <button
                    onClick={() => setShowWhatsAppPopup(true)}
                    className="w-full bg-[#25D366] hover:bg-[#20C157] text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Connect on WhatsApp Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* How It Works Section */}
        <section className="py-16 bg-gradient-to-br from-white via-[#F8F8F8] to-[#EFD9B0]/10">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">

              {/* Header */}
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#182432] mb-4">
                  How It Works
                </h2>
                <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                  Sirf 3 simple steps follow karke apna pehla earning unlock karo.
                </p>
              </div>

              {/* Steps Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

                {/* Step 1 */}
                <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center border-t-4 border-[#C7A055]">
                  <div className="w-20 h-20 bg-[#C7A055] rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                    <UserPlus className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-[#182432] rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-[#182432] mb-3">Join StraviX</h3>
                  <p className="text-lg text-gray-600">
                    Mere mentorship ke saath apni journey start karo.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center border-t-4 border-[#C7A055]">
                  <div className="w-20 h-20 bg-[#C7A055] rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                    <BookOpen className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-[#182432] rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-[#182432] mb-3">Get Training & Support</h3>
                  <p className="text-lg text-gray-600">
                    Daily guidance aur community ke saath grow karo.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center border-t-4 border-[#C7A055]">
                  <div className="w-20 h-20 bg-[#C7A055] rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                    <DollarSign className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-[#182432] rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <h3 className="text-2xl font-bold text-[#182432] mb-3">Earn Your First Income</h3>
                  <p className="text-lg text-gray-600">
                    Sirf few weeks me apna pehla payout unlock karo.
                  </p>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-[#FFF9F0] to-[#FFF3E0] rounded-2xl p-10 text-center border border-[#C7A055]/50 shadow-md">
                <p className="text-lg md:text-xl font-semibold text-[#182432] mb-6">
                  🚀 Abhi shuru karo — sirf <span className="text-[#C7A055] font-bold">6/10 seats</span> bachi hain.
                </p>
                <a
                  href="https://wa.me/917988633326?text=Hi%20Sakila%2C%20I%20want%20to%20start%20my%20earning%20journey%20with%20StraviX!"
                  className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-4 px-10 rounded-full text-xl transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
                  Message Me on WhatsApp Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Get Section */}
        <section className="py-16 bg-gradient-to-br from-white via-[#F8F8F8] to-[#EFD9B0]/20">
          <div className="max-w-6xl mx-auto px-6">

            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#182432] mb-4">
                What You'll Get
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Join karke aapko milega mentorship, training aur ek supportive community.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">

              {/* Card 1 */}
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 flex space-x-5 border-t-4 border-[#C7A055]">
                <div className="bg-[#C7A055] rounded-full p-4 w-fit h-fit flex-shrink-0 shadow">
                  <User className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#182432] mb-2">Step-by-step mentorship from me</h3>
                  <p className="text-gray-600">Personal guidance har step me, taaki aap confident feel karo.</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 flex space-x-5 border-t-4 border-[#C7A055]">
                <div className="bg-[#C7A055] rounded-full p-4 w-fit h-fit flex-shrink-0 shadow">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#182432] mb-2">Digital products & sales training</h3>
                  <p className="text-gray-600">Proven products aur sales techniques jo actually work karte hain.</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 flex space-x-5 border-t-4 border-[#C7A055]">
                <div className="bg-[#C7A055] rounded-full p-4 w-fit h-fit flex-shrink-0 shadow">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#182432] mb-2">Supportive women-only community</h3>
                  <p className="text-gray-600">Like-minded women ke saath connect karo aur grow karo together.</p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 flex space-x-5 border-t-4 border-[#C7A055]">
                <div className="bg-[#C7A055] rounded-full p-4 w-fit h-fit flex-shrink-0 shadow">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#182432] mb-2">Proven system with real results</h3>
                  <p className="text-gray-600">Tested strategies jo 1000+ women use kar chuki hain successfully.</p>
                </div>
              </div>

              {/* Card 5 */}
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 flex space-x-5 border-t-4 border-[#C7A055] md:col-span-2">
                <div className="bg-[#C7A055] rounded-full p-4 w-fit h-fit flex-shrink-0 shadow">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#182432] mb-2">Weekly & monthly achiever awards</h3>
                  <p className="text-gray-600">Recognition aur rewards jo aapko motivated rakhenge.</p>
                </div>
              </div>
            </div>

            {/* Comparison */}
            <div className="bg-gradient-to-r from-red-50 via-white to-green-50 rounded-2xl shadow-md p-10 mb-16">
              <div className="grid md:grid-cols-2 gap-10 text-center">

                {/* Without StraviX */}
                <div className="p-6 rounded-xl hover:bg-red-50 transition">
                  <div className="bg-red-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                    <X className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-red-700 mb-2">Without StraviX</h3>
                  <p className="text-red-600">Confusion, trial & error, no support</p>
                </div>

                {/* With StraviX */}
                <div className="p-6 rounded-xl hover:bg-green-50 transition">
                  <div className="bg-green-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-green-700 mb-2">With StraviX</h3>
                  <p className="text-green-600">Clear path, guidance, real income</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-[#FFF9F0] to-[#FFF3E0] rounded-2xl shadow-md p-10">
                <p className="text-lg md:text-xl font-semibold text-[#182432] mb-6">
                  💡 Ye sab sirf <span className="text-[#C7A055] font-bold">limited seats</span> ke liye hi available hai.
                </p>
                <a
                  href="https://wa.me/917988633326?text=Hi%20Sakila,%20I%20want%20to%20join%20StraviX%20and%20start%20earning!"
                  className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-4 px-10 rounded-full text-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
                  Message Me on WhatsApp Now
                </a>
              </div>
            </div>
          </div>
        </section>


        {/* Team Earnings Section */}
        <section className="py-16 bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50">
          <div className="max-w-6xl mx-auto px-6">

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-[#182432]">
              From <span className="text-[#C7A055]">Zero</span> to <span className="text-[#C7A055]">₹50,000+ Monthly</span>
            </h2>

            {/* Timeline */}
            <div className="flex flex-col md:flex-row items-center justify-center mb-16 space-y-8 md:space-y-0 md:space-x-12">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto shadow-inner">
                  <span className="text-3xl">😔</span>
                </div>
                <h3 className="font-bold text-lg text-[#182432]">Zero</h3>
                <p className="text-gray-600 text-sm">Ghar baithe, koi income nahi</p>
              </div>

              {/* Line */}
              <div className="hidden md:block w-20 h-1 bg-gradient-to-r from-red-200 to-yellow-200 rounded"></div>
              <div className="md:hidden w-1 h-10 bg-gradient-to-b from-red-200 to-yellow-200 rounded"></div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mb-4 mx-auto shadow-inner">
                  <span className="text-3xl">😊</span>
                </div>
                <h3 className="font-bold text-lg text-[#182432]">First ₹2,000</h3>
                <p className="text-gray-600 text-sm">Pehli earning ka excitement</p>
              </div>

              {/* Line */}
              <div className="hidden md:block w-20 h-1 bg-gradient-to-r from-yellow-200 to-green-200 rounded"></div>
              <div className="md:hidden w-1 h-10 bg-gradient-to-b from-yellow-200 to-green-200 rounded"></div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto shadow-inner">
                  <span className="text-3xl">🎉</span>
                </div>
                <h3 className="font-bold text-lg text-[#182432]">₹50,000+ Monthly</h3>
                <p className="text-gray-600 text-sm">Consistent income & stability</p>
              </div>
            </div>

            {/* Lifestyle Image */}
            <div className="mb-12">
              <img
                src="/assets/images/preview.webp"
                alt="Family moments and gifts"
                className="w-full max-w-md mx-auto rounded-3xl shadow-xl hover:shadow-2xl transition-all"
              />
            </div>

            {/* Emotional Copy */}
            <div className="text-center mb-16">
              <p className="text-lg md:text-2xl text-[#182432] font-medium leading-relaxed max-w-3xl mx-auto italic">
                "Apni pehli earning se maine apne career ke liye investment ki… woh confidence main chaahti hoon aap bhi paao."
              </p>
            </div>

            {/* YouTube Videos */}
            <div className="grid md:grid-cols-2 gap-10 mb-16">
              {/* Video 1 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-[#182432] mb-4 text-center">My Journey</h3>
                <div className="relative aspect-[9/16]">
                  <iframe
                    src="https://www.youtube.com/embed/yI1Zf8gZTcs"
                    title="My Journey"
                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* Video 2 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-[#182432] mb-4 text-center">Meri Mehnat ka Pehla Tohfa</h3>
                <div className="relative aspect-[9/16]">
                  <iframe
                    src="https://www.youtube.com/embed/39OZSnT-XcM"
                    title="Meri Mehnat ka Pehla Tohfa"
                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <button
                onClick={() => setShowWhatsAppPopup(true)}
                className="w-full md:w-auto bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Message Me on WhatsApp Now
              </button>
            </div>

          </div>
        </section>


        {/* Final Call-to-Action Section */}
        <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-pink-400/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-yellow-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-green-400/5 rounded-full blur-2xl"></div>
          </div>

          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-snug">
              Ready to Begin <span className="text-[#C7A055]">Your Digital Journey?</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Students aur girls ke liye ek safe aur powerful platform — jaha se aap apni pehli <span className="text-[#C7A055] font-semibold">online earning</span> start kar sakti ho.
              Zero se start karke step-by-step guidance ke saath grow karo. 🚀
            </p>

            {/* Urgency/FOMO Lines */}
            <div className="mb-10 space-y-3">
              <div className="flex items-center justify-center gap-3 text-yellow-400 font-semibold text-lg">
                <span className="text-2xl">⚡</span>
                <span>Sirf 6/10 mentorship seats open is month</span>
              </div>
              <CountdownTimer />
            </div>

            <button
              onClick={() => setShowWhatsAppPopup(true)}
              className="w-full md:w-auto bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-5 px-10 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-500/25 flex items-center justify-center mx-auto gap-3 min-w-[280px]">
              Message Me on WhatsApp Now
            </button>
          </div>

          {/* Sticky WhatsApp Button for Mobile */}
          <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
            <button
              onClick={() => setShowWhatsAppPopup(true)}
              className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-4 px-6 rounded-full text-lg shadow-2xl flex items-center justify-center gap-3 animate-bounce">
              Message Me on WhatsApp Now
            </button>
          </div>
        </section>




        {/* FAQ Section */}
        <section className="py-16 bg-gradient-to-br from-white via-[#FDFBF7] to-[#F8F5EF]">
          <div className="max-w-5xl mx-auto px-6">

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-[#C7A055]">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Sabse zyada students & girls ke mind me jo doubts aate hain, unke simple answers yahan hain.
            </p>

            {/* FAQ Items */}
            <div className="space-y-5 mb-14">
              {[
                {
                  question: "Kya mujhe pehle se koi skill ya experience chahiye?",
                  answer: "Bilkul nahi 👩‍🎓. Main bhi ek student ki tarah zero knowledge se start kiya tha. Step-by-step training milegi."
                },
                {
                  question: "Daily kitna time dena hoga?",
                  answer: "Sirf 2–3 ghante ka focused effort kaafi hai. Studies ya ghar ke saath easily balance ho jata hai."
                },
                {
                  question: "Ye genuine hai ya fake?",
                  answer: "StraviX ek registered & legal platform hai ✅. Har cheez transparent hai, proof aapne upar dekha."
                },
                {
                  question: "Investment kitni lagegi?",
                  answer: "Affordable packages available hain – students ke liye bhi easy options."
                },
                {
                  question: "Kya mujhe proper support milega?",
                  answer: "Haan 💯. Aapko 24/7 community support + personal mentorship dono milega."
                }
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all"
                >
                  <button
                    className="w-full px-6 py-5 text-left flex justify-between items-center"
                    onClick={() => {
                      const content = document.getElementById(`faq-${index}`);
                      const icon = document.getElementById(`icon-${index}`);
                      if (content && icon) {
                        if (content.style.display === "none" || !content.style.display) {
                          content.style.display = "block";
                          icon.style.transform = "rotate(180deg)";
                        } else {
                          content.style.display = "none";
                          icon.style.transform = "rotate(0deg)";
                        }
                      }
                    }}
                  >
                    <span className="font-semibold text-[#182432] text-lg">{faq.question}</span>
                    <ChevronDown
                      id={`icon-${index}`}
                      className="w-5 h-5 text-[#C7A055] transition-transform duration-200"
                    />
                  </button>
                  <div id={`faq-${index}`} className="px-6 pb-5 hidden">
                    <p className="text-gray-600 text-base leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-[#C7A055] to-[#D4AF37] rounded-2xl p-10 text-center shadow-lg">
              <p className="text-xl font-semibold mb-6 text-white">
                ⚡ Doubts clear ho gaye? Ab apni journey delay mat karo!
              </p>
              <button
                onClick={() => setShowWhatsAppPopup(true)}
                className="w-full md:w-auto bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-4 px-10 rounded-full text-lg transition-all shadow-md hover:shadow-xl flex items-center justify-center gap-3 mx-auto"
              >
                <MessageCircle className="w-5 h-5" />
                Message Me on WhatsApp Now
              </button>
            </div>
          </div>
        </section>

        {/* Floating WhatsApp Button */}
        <div className="fixed bottom-6 right-6 z-50 md:block hidden">
          <button
            onClick={() => setShowWhatsAppPopup(true)}
            className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 animate-pulse"
          >
            <MessageCircle className="w-6 h-6" />
          </button>
        </div>

        {/* WhatsApp Popup */}
        {showWhatsAppPopup && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 relative">
              <button
                onClick={() => setShowWhatsAppPopup(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#182432] mb-4">
                  Ready to Start Your Journey?
                </h3>
                <p className="text-gray-600 mb-6">
                  Message me on WhatsApp to discuss your goals and get started with StraviX.
                </p>
                <a
                  href="https://wa.me/917988633326?text=Hi%20Sakila%2C%20I%20want%20to%20start%20my%20earning%20journey%20with%20StraviX!"
                  className="w-full bg-[#25D366] hover:bg-[#20C157] text-white font-bold py-3 px-6 rounded-full transition-colors inline-block"
                >
                  Message Me Now
                </a>
              </div>
            </div>
          </div>
        )}

        <Footer />
      </div>
    </>
  );
}

export default App;