// /* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/

import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";

// import "../styles/index.sass";

const TemplateWrapper = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">

  
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
  
      <div class="collapse navbar-collapse" id="navbarCollapse">
  
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fe fe-x"></i>
        </button>
  
        <ul class="navbar-nav ml-auto">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="navbarLandings" data-toggle="dropdown" href="#sectionone" aria-haspopup="true" aria-expanded="false">
              Section One
            </a>
           
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="navbarPages" data-toggle="dropdown" href="#sectiontwo" aria-haspopup="true" aria-expanded="false">
              Section Two
            </a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="navbarAccount" data-toggle="dropdown" href="#sectionthree" aria-haspopup="true" aria-expanded="false">
              Section Three
            </a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="navbarDocumentation" data-toggle="dropdown" href="#sectionfour" aria-haspopup="true" aria-expanded="false">
              Section Four
            </a>
          </li>
        </ul>
  
       
        <a class=" lift ml-auto" href="/">
        
        </a>
  
      </div>
  
    </div>
  </nav>
  {children}
  <div></div>
  </>
//     <StaticQuery
//       query={graphql`
//         query LayoutQuery {
//           datoCmsSite {
//             globalSeo {
//               siteName
//             }
//             faviconMetaTags {
//               ...GatsbyDatoCmsFaviconMetaTags
//             }
//           }
//           datoCmsHome {
//             seoMetaTags {
//               ...GatsbyDatoCmsSeoMetaTags
//             }
//             introTextNode {
//               childMarkdownRemark {
//                 html
//               }
//             }
//             copyright
//           }
//           allDatoCmsSocialProfile(sort: { fields: [position], order: ASC }) {
//             edges {
//               node {
//                 profileType
//                 url
//               }
//             }
//           }
//         }
//       `}
//       render={data => (
//         <div className={`container ${showMenu ? "is-open" : ""}`}>
//           <HelmetDatoCms
//             favicon={data.datoCmsSite.faviconMetaTags}
//             seo={data.datoCmsHome.seoMetaTags}
//           />
//           <div className="container__sidebar">
//             <div className="sidebar">
//               <h6 className="sidebar__title">
//                 <Link to="/">{data.datoCmsSite.globalSeo.siteName}</Link>
//               </h6>
//               <div
//                 className="sidebar__intro"
//                 dangerouslySetInnerHTML={{
//                   __html:
//                     data.datoCmsHome.introTextNode.childMarkdownRemark.html
//                 }}
//               />
//               <ul className="sidebar__menu">
//                 <li>
//                   <Link to="/">Home</Link>
//                 </li>
//                 <li>
//                   <Link to="/about">About</Link>
//                 </li>
//               </ul>
//               <p className="sidebar__social">
//                 {data.allDatoCmsSocialProfile.edges.map(({ node: profile }) => (
//                   <a
//                     key={profile.profileType}
//                     href={profile.url}
//                     target="blank"
//                     className={`social social--${profile.profileType.toLowerCase()}`}
//                   >
//                     {" "}
//                   </a>
//                 ))}
//               </p>
//               <div className="sidebar__copyright">
//                 {data.datoCmsHome.copyright}
//               </div>
//             </div>
//           </div>
//           <div className="container__body">
//             <div className="container__mobile-header">
//               <div className="mobile-header">
//                 <div className="mobile-header__menu">
//                   <button
//                     onClick={e => {
//                       e.preventDefault();
//                       setShowMenu(!showMenu);
//                     }}
//                   />
//                 </div>
//                 <div className="mobile-header__logo">
//                   <Link to="/">{data.datoCmsSite.globalSeo.siteName}</Link>
//                 </div>
//               </div>
//             </div>
//             {children}
//           </div>
//         </div>
//       )}
//     />
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.object
};

export default TemplateWrapper;
/* eslint-enable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/
