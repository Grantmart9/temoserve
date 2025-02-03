import Login from "./login";
export const metadata = {
    title: "Temoserv|Login",
    description:
        "Our calculator will help you work out the cost of your child's pre-primary, primary, secondary and tertiary education. You will also get a comprehensive report.",
    alternates: {
        canonical: `https://oldmutualeducationtools.co.za/login/`,
    },
};

const LoginPage = () => {
    return <Login />;
};

export default LoginPage;
