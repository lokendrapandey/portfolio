import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_xzh6qzh', 'template_yfu7ujb', formData, 'QCeLO7gG4VLJflCj3')
      .then((result) => {
        console.log('Email sent:', result.text);
        alert('Message sent successfully!');

        // Clear the form after submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, (error) => {
        console.error('Error sending email:', error.text);
        alert('Failed to send the message.');
      });
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen flex items-center justify-center p-8">
      <div className="container mx-auto bg-gradient-to-r from-blue-500 to-purple-500 shadow-2xl rounded-lg p-8 md:p-16 max-w-lg" >
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600 mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          <div className="flex flex-col">
            <label className="text-gray-800 text-sm font-semibold mb-2" htmlFor="name">Name</label>
            <input 
              className="bg-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 border border-gray-300"
              type="text" 
              id="name" 
              placeholder="Your Name" 
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-800 text-sm font-semibold mb-2" htmlFor="email">Email</label>
            <input 
              className="bg-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 border border-gray-300"
              type="email" 
              id="email" 
              placeholder="Your Email" 
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-800 text-sm font-semibold mb-2" htmlFor="subject">Subject</label>
            <input 
              className="bg-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 border border-gray-300"
              type="text" 
              id="subject" 
              placeholder="Subject" 
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-800 text-sm font-semibold mb-2" htmlFor="message">Message</label>
            <textarea 
              className="bg-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 border border-gray-300 h-32 resize-none"
              id="message" 
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div className="text-center">
            <button 
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;

// import React, { useState } from 'react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.id]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form Data:', formData);

//     // Clear the form after submission
//     setFormData({
//       name: '',
//       email: '',
//       subject: '',
//       message: ''
//     });
//   };

//   return (
//     <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen flex items-center justify-center p-8">
//       <div className="container mx-auto bg-gradient-to-r from-blue-500 to-purple-500 shadow-2xl rounded-lg p-8 md:p-16 max-w-lg">
//         <div className="text-center">
//           <h1 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h1>
//           <p className="text-lg text-gray-600 mb-8">
//             I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
//           </p>
//         </div>
//         <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
//           <div className="flex flex-col">
//             <label className="text-gray-800 text-sm font-semibold mb-2" htmlFor="name">Name</label>
//             <input 
//               className="bg-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 border border-gray-300"
//               type="text" 
//               id="name" 
//               placeholder="Your Name" 
//               value={formData.name}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="text-gray-800 text-sm font-semibold mb-2" htmlFor="email">Email</label>
//             <input 
//               className="bg-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 border border-gray-300"
//               type="email" 
//               id="email" 
//               placeholder="Your Email" 
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="text-gray-800 text-sm font-semibold mb-2" htmlFor="subject">Subject</label>
//             <input 
//               className="bg-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 border border-gray-300"
//               type="text" 
//               id="subject" 
//               placeholder="Subject" 
//               value={formData.subject}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="text-gray-800 text-sm font-semibold mb-2" htmlFor="message">Message</label>
//             <textarea 
//               className="bg-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 border border-gray-300 h-32 resize-none"
//               id="message" 
//               placeholder="Your Message"
//               value={formData.message}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="text-center">
//             <button 
//               type="submit"
//               className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">
//               Send Message
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Contact;
