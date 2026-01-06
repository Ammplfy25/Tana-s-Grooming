import React from 'react';
import { Services } from '../components/Services';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  return (
    <div className="pt-20">
      <Services />
      
      {/* Additional Detail Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-orange/5 rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12">
             <div className="lg:w-1/2 space-y-6">
               <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900">Add-On Treatments</h2>
               <p className="text-gray-600 text-lg">Customize your pet's spa day with our premium extras.</p>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {['Teeth Brushing', 'Blueberry Facial', 'Paw Balm Treatment', 'De-Shedding Treatment', 'Nail Dremel', 'Flea Bath'].map(item => (
                   <div key={item} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                     <div className="bg-green-100 p-1 rounded-full text-green-600">
                        <Check size={16} strokeWidth={3} />
                     </div>
                     <span className="font-medium text-gray-800">{item}</span>
                   </div>
                 ))}
               </div>
             </div>
             
             <div className="lg:w-1/2 text-center lg:text-right">
                <div className="inline-block bg-white p-6 rounded-2xl shadow-xl max-w-sm text-left">
                  <h3 className="font-bold text-xl mb-2">Not sure what to book?</h3>
                  <p className="text-gray-600 mb-4">Give us a call and we can recommend the perfect package for your breed.</p>
                  <Link to="/contact">
                    <Button variant="secondary" fullWidth>Contact Us</Button>
                  </Link>
                </div>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};