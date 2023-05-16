import { FaGithub, FaLinkedin} from 'react-icons/fa';

const Footer = () => {
    return(
    <>
        <div className="flex justify-end items-center p-4">
            <a href="https://github.com/miazarre"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-container group"
            >
                <FaGithub size={40} className=" icon mr-4"/>
            </a>
            <a href="https://www.linkedin.com/in/mia-g-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-container group"
            >

                <FaLinkedin size={40} className="icon mr-4"/>
            </a>
        </div>
    </>
    )
}

export default Footer ;