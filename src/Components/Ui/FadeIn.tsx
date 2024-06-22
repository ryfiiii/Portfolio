import { useInView } from "react-intersection-observer";

interface FadeInProps {
    children: React.ReactNode;
}

const FadeIn = ({ children }: FadeInProps) => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0,
    });

    return (
        <div ref={ref} className={`${inView ? 'animate__animated animate__fadeIn' : ''}`}>
            {children}
        </div>
    );
};

export default FadeIn;
