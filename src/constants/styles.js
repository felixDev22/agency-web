const styles = {
  nav: 'navbar w-full flex py-6 justify-between items-center ',
  deskUl: 'list-none sm:flex flex-1 hidden justify-end items-center',
  deskli:
    'font-poppins text-[18px] text-white ml-10 cursor-pointer letterSpacing-wide ',
  mobileUl: 'list-none flex-col justify-end items-center',
  mobileLi:
    'font-poppins text-[18px] text-white mb-10 cursor-pointer letterSpacing-wide ',
  menuToggle: 'sm:hidden flex flex-1 justify-end items-center',
  menuIcon: 'w-[28px] h-[28px] object-contain',
  mobileMenu:
    'min-w-[140px] absolute top-20 mx-4 my-2 p-6 rounded sidebar bg-black-gradient',
  containerWidth: 'xl:max-w-[1280px] w-full',

  heroWrapper: 'flex md:flex-row flex-col items-center',
  heroInner: 'flex-1 flex-col xl:px-0 sm:px-15 px=5',
  titleWrapper: 'flex flex-col w-full h-auto px-6',
  heroImage: 'flex flex-row justify-between items-center',

  h1: 'flex-1 font-poppins font-semibold ss:text-[60px] text-[50px] text-white',
  h1Gradient: 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-2',
  heading1:
    'font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full',
  paragraph: 'font-poppins font-normal text-white text-[18px] leading-[30.8px]',
  pWidth: 'w-[450px] md:w-[600px] ',

  flexCenter: 'flex justify-center items-center',
  flexStart: 'flex justify-center items-start',

  paddingX: 'sm:px-16 px-6',
  paddingY: 'sm:py-16 py-6',
  padding: 'sm:px-16 px-6 sm:py-12 py-4',

  marginX: 'sm:mx-16 mx-6',
  marginY: 'sm:my-16 my-6',
};

export default styles;
