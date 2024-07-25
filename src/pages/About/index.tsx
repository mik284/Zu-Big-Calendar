import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div>
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-4">About Program Line Up</h1>
        <p className="mb-6 text-lg">
          Program Line Up is designed to streamline your daily scheduling needs.
          Whether you are managing personal tasks or professional meetings, our
          app offers a comprehensive solution to keep you organized and
          efficient.
        </p>
        <h2 className="text-3xl font-bold mb-3">Our Mission</h2>
        <p className="mb-6 text-lg">
          Our mission is to provide a user-friendly platform that enhances
          productivity through effective schedule management. We aim to help
          individuals and teams plan their day, week, and month effortlessly.
        </p>
        <h2 className="text-3xl font-bold mb-3">Key Features</h2>
        <ul className="list-disc list-inside mb-6 text-lg">
          <li>Intuitive calendar interface with drag-and-drop functionality</li>
          <li>Customizable event notifications and reminders</li>
          <li>Multiple calendar views (daily, weekly, monthly)</li>
          <li>Easy event creation and editing</li>
          <li>Integration with other productivity tools</li>
        </ul>
        <h2 className="text-3xl font-bold mb-3">Our Team</h2>
        <p className="mb-6 text-lg">
          Program Line Up is developed by a dedicated team of professionals
          committed to enhancing your scheduling experience. Our team combines
          expertise in software development, user experience design, and
          customer support to bring you a top-notch product.
        </p>
        <h2 className="text-3xl font-bold mb-3">Contact Us</h2>
        <p className="mb-6 text-lg">
          We value your feedback and are here to assist you with any questions
          or concerns. Feel free to reach out to us at{' '}
          <a href="mailto:support@programlineup.com" className="text-blue-500">
            support@programlineup.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
