import { Info } from "../cards/Info";
import { Container } from "../shared/Container"
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";

export const AboutUs = () => {
    return (
        <section id="about-us">
            {" "}
            <Container className="flex flex-col md:flex-row gap-10 lg:gap-12 items-center">
                <div className="w-full md:w-5/12 lg:w-1/2">
                    <div className="w-full h-80 sm:h-128 relative">
                        <img src="https://img.freepik.com/premium-photo/person-using-vr-ar-googles_941097-220853.jpg?ga=GA1.1.374913840.1719116163&w=740"
                        className="w-full h-full object-cover rounded-3xl shadow-lg relative z-10"
                        alt="About our misson">
                        </img>
                    </div>
                </div>

                <div className="w- full md:w-7/12 lg:w-1/2 flex flex-col">
                    <Title> About Our AI Solution </Title>
                    <Paragraph>
                        BornAI is a leading provider of AI solutions, dedicated to transforming businesses through innovative technology. Our mission is to empower organizations with intelligent automation, real-time analytics, and predictive insights. We leverage the power of machine learning and natural language processing to deliver tailored solutions that drive efficiency and enhance decision-making.
                    </Paragraph>

                    <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
                        <Info title="Misson" description="To empower businesses with cutting-edge AI solutions that drive efficiency, innovation, and growth.">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4 sm:w-5 sm:h-5">
                                
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z">
                                    
                                </path>
                            </svg>
                        </Info>
                        <Info title="Vision" description="To be the global leader in AI solutions, recognized for our innovation, expertise, and commitment to customer success.">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4 sm:w-5 sm:h-5">
                                
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z">
                                    
                                </path>
                            </svg>
                        </Info>
                    </div>
                </div>
            </Container>
        </section>
    );    
};