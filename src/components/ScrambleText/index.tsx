import { useScramble } from "use-scramble";

type Props = {
    text: string;
};

const ScrambleText = (props: Props) => {
    const { ref, replay } = useScramble({
        text: props.text,
        range: [33, 125],
        speed: 0.60,
        tick: 2,
        step: 2,
        scramble: 6,
        chance: 0.80,
    });
    return (
        <span ref={ref} onMouseEnter={replay} onFocus={replay}>
            ScrambleText
        </span>
    );
};

export default ScrambleText;
