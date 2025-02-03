import Loyalty from "./loyalty";
export const metadata = {
    title: "Temoserv|Loyalty",
    description:
        "Our calculator will help you work out the cost of your child's pre-primary, primary, secondary and tertiary education. You will also get a comprehensive report.",
    alternates: {
        canonical: `https://oldmutualeducationtools.co.za/newcalculator/`,
    },
};

const LoyaltyPage = () => {
    return <Loyalty />;
};

export default LoyaltyPage;
