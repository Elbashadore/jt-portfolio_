import React, {useState} from "react";
import NavTabs from "./NavTabs";
import Footer from "./Footer";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";
import Resume from "./Pages/Resume";

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');
  
    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
      if (currentPage === 'Resume'){
          return <Resume />;
      }
      return <Contact />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div class="background">
        <h1 class="">Josh Tibbetts</h1>
        {/* We are passing the currentPage from state and the function to update it */}
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange}/>
        {/* Here we are calling the renderPage method which will return a component  */}
        {renderPage()}
        <Footer></Footer>
      </div>
    );
  }