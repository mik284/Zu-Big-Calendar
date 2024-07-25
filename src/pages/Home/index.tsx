import { Image, Typography } from 'antd';

const HomePage: React.FC = () => {
  return (
    <>
      <div className="p-8 flex flex-col md:flex-row items-center">
        <div className="flex-1 md:mr-8 mb-6 md:mb-0 ml-8">
          <Typography.Title level={1} className="text-4xl font-bold mb-4">
            Welcome to Program Line Up
          </Typography.Title>
          <Typography.Paragraph className="mb-6 text-2xl w-3/4 leading-loose">
            Program Line Up is your ultimate tool for organizing and managing
            your daily schedule. Our app allows you to seamlessly plan your day
            with an intuitive calendar and event management system.
          </Typography.Paragraph>
        </div>
        <div className="flex">
          <Image
            preview={false}
            src={'/assets/images/plannner.png'}
            alt="Program Line Up Illustration"
            className="size-70 object-scale-down items-center animate-in slide-in-from-right delay-5000"
          />
        </div>
      </div>
      <div className="p-8 flex flex-col md:flex-row items-center">
        <div className="flex-1">
          <Image
            preview={false}
            src={'/assets/images/planlineup.png'}
            alt="Program Line Up Illustration"
            className="size-70 object-scale-down items-center a animate-in slide-in-from-left delay-5000 duration-100"
          />
        </div>
        <div className="flex flex-col md:mr-8 mb-6 md:mb-0 ml-8">
          <Typography.Title level={1} className="mb-6 text-lg">
            With Program Line Up, you can:
          </Typography.Title>
          <ul className="list-disc list-inside mb-6 text-2xl">
            <li>Create and manage events with ease</li>
            <li>Drag and drop events to reschedule</li>
            <li>View your schedule in various calendar views</li>
            <li>Receive reminders for upcoming events</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mb-4">
        <Typography.Title level={2}>Summary</Typography.Title>
        <Typography.Paragraph className="mb-6 text-2xl w-3/4 leading-snug text-center">
          Program Line Up is designed to streamline your daily scheduling needs.
          Whether you are managing personal tasks or professional meetings, our
          app offers a comprehensive solution to keep you organized and
          efficient.
        </Typography.Paragraph>
      </div>
    </>
  );
};

export default HomePage;
