import { motion, MotionProps } from "framer-motion";

import { wordVariants } from "./animate";
import { wrapperAnim } from "../../Page/Destinations/animate";
import { ComponentType, ComponentProps } from "react";

interface CompProps {
    textType:
        | ComponentType<MotionProps & ComponentProps<any>>
        | keyof JSX.IntrinsicElements;
    words: string;
    splitText?: string;
}

const MotionText: React.FunctionComponent<
    CompProps & React.HTMLAttributes<HTMLOrSVGElement>
> = ({ textType, words, splitText = "" }) => {
    const Tag = textType;
    return (
        <Tag variants={wrapperAnim} exit="exit" initial="hidden" animate="show">
            {words.split(splitText).map((word, i) => {
                // if word is space
                if (word === " ") {
                    word = "\u00A0";
                }
                return (
                    <motion.span
                        key={`${word + "-" + i}`}
                        style={{
                            display: "inline-block",
                        }}
                    >
                        <motion.span
                            custom={i}
                            variants={wordVariants}
                            style={{
                                display: "inline-block",
                            }}
                        >
                            {word}
                        </motion.span>
                        {splitText === " " ? "\u00A0" : null}
                    </motion.span>
                );
            })}
        </Tag>
    );
};

export default MotionText;
