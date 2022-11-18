import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <div
            style={{
                marginRight: "4em",
            }}
        >
            <Link to="home">
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                >
                    <g fill="none" fillRule="evenodd">
                        <motion.circle
                            cx="24"
                            cy="24"
                            fill="#FFF"
                            initial={{
                                r: 0,
                            }}
                            animate={{
                                r: 23,
                            }}
                        />
                        <motion.path
                            fill="#0B0D17"
                            d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
                            initial={{
                                rotate: 0,
                            }}
                            animate={{
                                rotate: 360,
                            }}
                        />
                    </g>
                </motion.svg>
            </Link>
        </div>
    );
}
