import { Heading } from '@chakra-ui/react';
import { Experience } from './Experience';

export const SideHustleSection = () => {
    return (
    <>
        <Heading as="h2" size="md" mt={14} mb={10}>
            Hey, I am also doing side hustle...
        </Heading>
        <Experience
            image="./freelancer-profile.png"
            side=""
            title="I'm open for freelance work"
            desc="I'm passionate about building a product that can help people to solve their problems."
            stack="React.js • Next.js • Go • Express.js"
        />
    </>
    );
};