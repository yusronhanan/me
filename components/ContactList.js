import { Heading } from '@chakra-ui/react';
import { Experience } from './Experience';

export const ContactList = () => {
    return (
    <>
        <Heading as="h2" size="md" mt={14} mb={10}>
        Find out more by contacting me:
        </Heading>
        <Experience
        side="Email"
        title="yusronzain@gmail.com"
        href="mailto:yusronzain@gmail.com"
        mb={4}
        />
        <Experience
        side="Github"
        title="@yusronhanan"
        href="https://github.com/yusronhanan"
        mb={4}
        />
        <Experience
        side="Medium"
        title="@yusronzain"
        href="https://medium.com/@yusronzain"
        mb={4}
        />
        <Experience
        side="Linkedin"
        title="@yusronhanan"
        href="https://www.linkedin.com/in/yusronhanan/"
        mb={4}
        />
    </>
    );
};