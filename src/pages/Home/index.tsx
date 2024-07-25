const HomePage: React.FC = () => {
  return (
    <>
      <div className="p-8 flex flex-col md:flex-row items-start align-baseline w-full">
        <div className="flex-1 md:mr-8 mb-6 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Program Line Up
          </h1>
          <p className="mb-6 text-lg">
            Program Line Up is your ultimate tool for organizing and managing
            your daily schedule. Our app allows you to seamlessly plan your day
            with an intuitive calendar and event management system.
          </p>
          <p className="mb-6 text-lg">With Program Line Up, you can:</p>
          <ul className="list-disc list-inside mb-6 text-lg">
            <li>Create and manage events with ease</li>
            <li>Drag and drop events to reschedule</li>
            <li>View your schedule in various calendar views</li>
            <li>Receive reminders for upcoming events</li>
          </ul>
        </div>
        <div className="flex-1">
          <img
            src={'/assets/images/plannner.png'}
            alt="Program Line Up Illustration"
            className="size-50"
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
