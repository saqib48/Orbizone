import PropTypes from "prop-types";

const Heading = ({ level, children, className }) => {
  const HeadingTag = `h${level}`;

  const getHeadingStyles = (level) => {
    switch (level) {
      case 1:
        return `xl:text-[30px] md:text-[20px] sm:text-[15px]  xl:font-[600] lg:font-[600] md:font-[600] sm:font-[600] font-[600] xl:leading-[70px] lg:leading-[60px] md:leading-normal sm:leading-normal leading-normal ${className}`;
      case 2:
        return `xl:text-[42px] lg:text-[34px] md:text-[36px] sm:text-[26px] xl:leading-[70px] lg:leading-[50px] md:leading-[60px] sm:leading-[40px] leading-[30px] text-[23px] text-[#091736] tracking-[-2px] leading-[1.1em] xl:font-[800] lg:font-[800] md:font-[700] sm:font-[600] font-[600] ${className}`;
      case 3:
        return `text-xl font-bold text-white ${className}`;
      case 4:
        return `text-[#091736] xl:text-[24px] lg:text-[24px] md:text-[20px] sm:text-[19px] text-[14px] font-[700] leading-[1.3em] ${className}`;
      case 5:
        return `text-[40px] text-[#091736] font-normal ${className}`;
      case 6:
        return `text-[14px] font-[400] leading-[1.5em] tracking-[2px] ${className}`;
      default:
        return "text-lg";
    }
  };

  const headingStyle = getHeadingStyles(parseInt(level));

  return <HeadingTag className={headingStyle}>{children}</HeadingTag>;
};

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Heading;
