import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '../components/Button';

export const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-orange font-bold tracking-wider uppercase text-sm">Get In Touch</span>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-gray-900 mt-2">
            We'd Love to Hear From You
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Info Side */}
          <div className="space-y-10 animate-fade-in-up">
             <div>
               <h3 className="text-2xl font-bold font-heading mb-6">Contact Information</h3>
               <div className="space-y-6">
                 <div className="flex items-start gap-4">
                   <div className="bg-orange/10 p-3 rounded-full text-orange">
                     <MapPin size={24} />
                   </div>
                   <div>
                     <p className="font-bold text-gray-900">Visit Our Studio</p>
                     <p className="text-gray-600">17405 Woodruff Ave,<br/>Bellflower, CA 90706</p>
                   </div>
                 </div>
                 
                 <div className="flex items-start gap-4">
                   <div className="bg-orange/10 p-3 rounded-full text-orange">
                     <Phone size={24} />
                   </div>
                   <div>
                     <p className="font-bold text-gray-900">Call Us</p>
                     <p className="text-gray-600">(562) 925-2883</p>
                   </div>
                 </div>

                 <div className="flex items-start gap-4">
                   <div className="bg-orange/10 p-3 rounded-full text-orange">
                     <Mail size={24} />
                   </div>
                   <div>
                     <p className="font-bold text-gray-900">Email Us</p>
                     <p className="text-gray-600">tanasgrooming@gmail.com</p>
                   </div>
                 </div>
               </div>
             </div>

             <div className="bg-cream p-8 rounded-3xl border border-orange/10">
               <h3 className="text-xl font-bold font-heading mb-4 flex items-center gap-2">
                 <Clock size={20} className="text-orange" /> Opening Hours
               </h3>
               <ul className="space-y-3">
                 <li className="flex justify-between text-gray-600 border-b border-gray-200 pb-2">
                   <span>Tuesday - Friday</span>
                   <span className="font-medium text-gray-900">8:00 AM - 3:00 PM</span>
                 </li>
                 <li className="flex justify-between text-gray-600 border-b border-gray-200 pb-2">
                   <span>Saturday</span>
                   <span className="font-medium text-gray-900">8:00 AM - 3:00 PM</span>
                 </li>
                 <li className="flex justify-between text-gray-600">
                   <span>Sun - Mon</span>
                   <span className="font-medium text-orange">Closed</span>
                 </li>
               </ul>
             </div>
          </div>

          {/* Form Side */}
          <div className="bg-white rounded-[2rem] shadow-xl p-8 border border-gray-100 animate-fade-in-up animation-delay-2000">
             <h3 className="text-2xl font-bold font-heading mb-6">Send a Message</h3>
             <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none bg-gray-50 focus:bg-white transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none bg-gray-50 focus:bg-white transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Subject</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none bg-gray-50 focus:bg-white transition-all">
                    <option>General Inquiry</option>
                    <option>Appointment Question</option>
                    <option>Feedback</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Message</label>
                  <textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none bg-gray-50 focus:bg-white transition-all h-32 resize-none"></textarea>
                </div>
                <Button fullWidth size="lg" className="flex items-center justify-center gap-2">
                  <Send size={18} /> Send Message
                </Button>
             </form>
          </div>
        </div>

      </div>
    </div>
  );
};