import Service from "./service";
export const metadata = {
  title: "Temoserv|My services",
  description:
    "Our calculator will help you work out the cost of your child's pre-primary, primary, secondary and tertiary education. You will also get a comprehensive report.",
  alternates: {
    canonical: `https://oldmutualeducationtools.co.za/my-services/`,
  },
};

const Services = () => {
  return <Service />;
};

export default Services;
