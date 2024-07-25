import { Typography } from "antd";

const Footer: React.FC = () => {
  return (
    <footer className="bg-orange-900 rounded-t-md text-white py-4 text-center">
      <div className="container mx-auto">
        <Typography className="text-sm text-white">
          &copy; {new Date().getFullYear()} Program Line Up. All rights
          reserved.
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;