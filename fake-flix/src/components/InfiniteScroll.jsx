import { useEffect } from "react";

function InfiniteScroll({ setPage }) {
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + Math.ceil(window.pageYOffset) >=
        document.body.offsetHeight
      ) {
        setPage((prev) => prev + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, [setPage]);

  return <></>;
}
export default InfiniteScroll;
