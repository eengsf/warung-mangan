//

// const Coba = ({ slide }) => {
//   return (

//   );
// };

// export default Coba;

const [scroll, setScroll] = useState();
useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 90) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
