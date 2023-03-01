import Header from "../components/Header";
const Layout = ({ children, className }) => {
  return (
    <div className={className}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
