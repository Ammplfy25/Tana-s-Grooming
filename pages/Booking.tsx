import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Calendar, Clock, Scissors, User, Dog } from 'lucide-react';

export const Booking: React.FC = () => {
  const [formData, setFormData] = useState({
    ownerName: '',
    petName: '',
    service: 'full-spa',
    date: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you ${formData.ownerName}! Your appointment request for ${formData.petName} has been received. We will contact you shortly to confirm.`);
  };

  return (
    <div className="pt-32 pb-20 bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <span className="text-orange font-bold tracking-wider uppercase text-sm">Online Booking</span>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-gray-900 mt-2">
            Schedule a Spa Day
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Treat your furry friend to the pampering they deserve. Fill out the form below to request an appointment.
          </p>
        </div>

        <div className="bg-white rounded-[2rem] shadow-xl p-8 sm:p-12 relative overflow-hidden animate-fade-in-up animation-delay-2000">
           {/* Decor */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-orange/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
           
           <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <User size={16} className="text-orange" /> Owner Name
                  </label>
                  <input 
                    required
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all bg-gray-50 focus:bg-white"
                    placeholder="Jane Doe"
                    value={formData.ownerName}
                    onChange={(e) => setFormData({...formData, ownerName: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                     <Dog size={16} className="text-orange" /> Pet Name & Breed
                  </label>
                  <input 
                    required
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all bg-gray-50 focus:bg-white"
                    placeholder="e.g. Barnaby (Golden Doodle)"
                    value={formData.petName}
                    onChange={(e) => setFormData({...formData, petName: e.target.value})}
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <Scissors size={16} className="text-orange" /> Service Package
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { id: 'full-spa', label: 'The Full Spa' },
                    { id: 'bath-brush', label: 'Bath & Brush' },
                    { id: 'alacarte', label: 'A La Carte' }
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setFormData({...formData, service: opt.id})}
                      className={`py-3 px-4 rounded-xl border-2 font-medium text-sm transition-all ${
                        formData.service === opt.id 
                          ? 'border-orange bg-orange/5 text-orange-dark' 
                          : 'border-gray-100 bg-white text-gray-600 hover:border-orange/30'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <Calendar size={16} className="text-orange" /> Preferred Date
                    </label>
                    <input 
                      required
                      type="date"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all bg-gray-50 focus:bg-white"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                 </div>
                 <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <Clock size={16} className="text-orange" /> Time of Day
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all bg-gray-50 focus:bg-white">
                      <option>Morning (8am - 12pm)</option>
                      <option>Afternoon (12pm - 4pm)</option>
                    </select>
                 </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Special Notes / Allergies</label>
                <textarea 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all bg-gray-50 focus:bg-white h-32 resize-none"
                  placeholder="Does your pet have any sensitive spots or allergies?"
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                ></textarea>
              </div>

              <Button type="submit" fullWidth size="lg" className="mt-4 shadow-lg shadow-orange/20">
                Request Appointment
              </Button>
           </form>
        </div>
      </div>
    </div>
  );
};