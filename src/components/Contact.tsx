import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-16 bg-white" id="contact">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Contact Info</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center space-x-4">
            <Mail className="w-6 h-6 text-blue-600" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p>contact@noaheric.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="w-6 h-6 text-blue-600" />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p>+254 XXX XXX XXX</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="w-6 h-6 text-blue-600" />
            <div>
              <h3 className="font-semibold">Location</h3>
              <p>Nairobi, Kenya</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;