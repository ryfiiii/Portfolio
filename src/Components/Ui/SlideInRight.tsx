import { useInView } from "react-intersection-observer";

interface SlideInRightProps {
    children: React.ReactNode;
}

const SlideInRight = ({ children }: SlideInRightProps) => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0,
    });

    return (
        <div ref={ref} className={`${inView ? 'animate__animated animate__fadeInRight' : ''}`}>
            {children}
        </div>
    );
};

export default SlideInRight;
