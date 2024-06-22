import { useInView } from "react-intersection-observer";

interface SlideInLeftProps {
    children: React.ReactNode;
}

const SlideInLeft = ({ children }: SlideInLeftProps) => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.15,
    });

    return (
        <div ref={ref} className={`${inView ? 'animate__animated animate__fadeInLeft' : ''}`}>
            {children}
        </div>
    );
};

export default SlideInLeft;
