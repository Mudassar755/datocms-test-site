import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import Layout from "../components/layout"
import '../styles/theme.bundle.css'

const Home = ({ data: { about } }) => {
  console.log("about", about)
  return (
    <Layout>
      <section id="sectionone" class="pt-12 pt-md-14 pb-12 pb-md-15 overlay overlay-black overlay-60 bg-cover jarallax" data-jarallax data-speed=".8" style={{ backgroundImage: `url(./static/img/covers/cover-19.jpg)` }}>
        <div class="container">

          <div class="row justify-content-center">
            <div class="col-12 col-md-10 col-lg-7 text-center">


              <h1 class="display-2 font-weight-bold text-white">
                Our Work.
            </h1>


              <p class="lead text-white-75 mb-4">
                We design & build products, tools, apps, and sites for companies trying to do great things for our planet.
            </p>


              <nav class="nav justify-content-center">
                <a class="badge rounded-pill bg-white-soft active mr-1 mb-1" href="#" data-toggle="pill" data-filter="*" data-target="#portfolio">
                  <span class="h6 text-uppercase">Left Button</span>
                </a>
                <a class="badge rounded-pill bg-white-soft mr-1 mb-1" href="#" data-toggle="pill" data-filter=".product" data-target="#portfolio">
                  <span class="h6 text-uppercase">Right Button</span>
                </a>
               
              </nav>

            </div>
          </div>
        </div>
      </section>

      <section id="sectiontwo">
        <div class="container-fluid d-flex flex-row pl-0">
          <div class="row min-vh-100 py-8 py-md-11">
            <div class="col-12">
              <div class="row justify-content-between mb-8 mb-md-11">
                <div class="col-12 col-md-6">
                  <div class="ml-13 mb-8">
                    <h2>
                     {about.sectiontitle}
                    </h2>

                    <p class="lead mb-6 mb-md-0">
                     {about.para1}
                    </p>
                  </div>
                  <img src="./static/img/photos/photo-32.jpg" width="100%" />
                </div>
                <div class="col-12 col-md-6 col-xl-5 mr-11">
                  <div>

                    <p class="small mb-6 mb-md-0">
               {about.para2}
                </p>
                  </div>
                  <div class="bg-gray-200 d-flex justify-content-center align-items-center" style={{height:'300px'}}>
                    <h1 class="text-center font-weight-bold"><span style={{fontSize:'5em'}}>14</span> <br />
                    Heading Section
                    </h1>
                  </div>
                  <div>
                    <p class="small mb-6 mb-md-0">
                     {about.para3}
                </p><br />
                    <p class="small mb-6 mb-md-0">
                      We embed ourselves in your team and aim to work as a natural extension of your full-time team.
                      We embed ourselves in your team and aim to work as a natural extension of your full-time team.
                      We embed ourselves in your team and aim to work as a natural extension of your full-time team.
                </p><br />
                    <p class="small mb-6 mb-md-0">
                      We embed ourselves in your team and aim to work as a natural extension of your full-time team.
                      We embed ourselves in your team and aim to work as a natural extension of your full-time team.
                      We embed ourselves in your team and aim to work as a natural extension of your full-time team.
                </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <div className="container">
          <div class="row">
            <div class="col-12 col-md-6 col-lg-4">

              <div class="card card-border border-primary shadow-lg mb-6 mb-md-8 lift lift-lg">
                <div class="card-body text-center">

                  <div class="icon-circle bg-primary text-white mb-5">
                    <i class="fe fe-users"></i>
                  </div>

                  <h4 class="font-weight-bold">
                    Account
                        </h4>

                  <p class="text-gray-700 mb-5">
                    Issues related to logging in, out, or about multiple devices.
                        </p>

                  <span class="badge rounded-pill bg-dark-soft">
                    <span class="h6 text-uppercase">
                      21 entries
                          </span>
                  </span>

                </div>
              </div>

            </div>
            <div class="col-12 col-md-6 col-lg-4">

              <div class="card card-border border-success shadow-lg mb-6 mb-md-8 lift lift-lg">
                <div class="card-body text-center">

                  <div class="icon-circle bg-success text-white mb-5">
                    <i class="fe fe-clock"></i>
                  </div>

                  <h4 class="font-weight-bold">
                    Integrations
                        </h4>

                  <p class="text-gray-700 mb-5">
                    Connecting with 3rd party apps to exchange data.
                        </p>

                  <span class="badge rounded-pill bg-dark-soft">
                    <span class="h6 text-uppercase">
                      9 entries
                          </span>
                  </span>

                </div>
              </div>

            </div>
            <div class="col-12 col-md-6 col-lg-4">

              <div class="card card-border border-warning shadow-lg mb-6 mb-md-8 lift lift-lg">
                <div class="card-body text-center">

                  <div class="icon-circle bg-warning text-white mb-5">
                    <i class="fe fe-users"></i>
                  </div>

                  <h4 class="font-weight-bold">
                    Billing
                        </h4>

                  <p class="text-gray-700 mb-5">
                    Issues with payments or invoicing.
                        </p>

                  <span class="badge rounded-pill bg-dark-soft">
                    <span class="h6 text-uppercase">
                      14 entries
                        </span>
                  </span>

                </div>
              </div>

            </div>
            <div class="col-12 col-md-6 col-lg-4">

              <div class="card card-border border-dark shadow-lg mb-6 mb-md-8 mb-lg-0 lift lift-lg">
                <div class="card-body text-center">

                  <div class="icon-circle bg-dark text-white mb-5">
                    <i class="fe fe-users"></i>
                  </div>

                  <h4 class="font-weight-bold">
                    Organizations
                        </h4>

                  <p class="text-gray-700 mb-5">
                    Setting up and managing collections of users.
                        </p>

                  <span class="badge rounded-pill bg-dark-soft">
                    <span class="h6 text-uppercase">
                      17 entries
                          </span>
                  </span>

                </div>
              </div>

            </div>
            <div class="col-12 col-md-6 col-lg-4">

              <div class="card card-border border-primary-desat shadow-lg mb-6 mb-md-0 lift lift-lg">
                <div class="card-body text-center">

                  <div class="icon-circle bg-primary-desat text-white mb-5">
                    <i class="fe fe-users"></i>
                  </div>

                  <h4 class="font-weight-bold">
                    Performance
                        </h4>

                  <p class="text-gray-700 mb-5">
                    Improving your system's speed and reliability.
                        </p>

                  <span class="badge rounded-pill bg-dark-soft">
                    <span class="h6 text-uppercase">
                      7 entries
                          </span>
                  </span>

                </div>
              </div>

            </div>
            <div class="col-12 col-md-6 col-lg-4">

              <div class="card card-border border-danger shadow-lg lift lift-lg">
                <div class="card-body text-center">

                  <div class="icon-circle bg-danger text-white mb-5">
                    <i class="fe fe-users"></i>
                  </div>

                  <h4 class="font-weight-bold">
                    Customizing
                        </h4>

                  <p class="text-gray-700 mb-5">
                    Building custom modules on top of our platform.
                        </p>

                  <span class="badge rounded-pill bg-dark-soft">
                    <span class="h6 text-uppercase">
                      14 entries
                          </span>
                  </span>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section class="pt-12 pt-md-8 pb-5 pb-md-8 overlay overlay-black overlay-60 bg-cover jarallax" data-jarallax data-speed=".8" style={{ backgroundImage: `url(./static/img/covers/cover-3.jpg)` }}>
        <div class="container">

          <div class="row justify-content-start">
            <div class="col-12 col-md-10 col-lg-7 text-left">


              <h1 class="display-2 font-weight-bold text-white">
                Our Work.
              </h1>


              <p class="lead text-white-75 mb-4">
                We design & build products, tools, apps, and sites for companies trying to do great things for our planet.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="sectionthree" class="pt-12 pt-md-8 pb-5 pb-md-8">
        <div class="container">

          <div class="row justify-content-start">
            <div class="col-12 col-md-10 col-lg-7 text-left">


              <h1 class="display-2 font-weight-bold">
                Our Work.
              </h1>


              <p class="lead mb-4">
                We design & build products, tools, apps, and sites for companies trying to do great things for our planet.
              </p>
            </div>
            <div class="col-12 col-md-12 col-lg-12">
              <img src='./static/img/photos/photo-31.jpg' className="w-100" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container-fluid d-flex flex-row pl-0">
          <div class="row min-vh-100 py-3 py-md-5">
            <div class="col-12">
              <div class="row justify-content-between mb-8 mb-md-11">
                <div class="col-12 col-md-6">
                  <img src="./static/img/map.png" width="100%" />
                </div>
                <div class="col-12 col-md-4 col-xl-4 mr-14">
                  <div>
                    <h1 className="font-weight-bold">
                      Lokalizacja
                    </h1>
                    <h3>
                      We embed ourselves in your team and aim to work as a natural extension of your full-time team.
                    </h3>

                    <p class="lead text-muted mb-6 mb-md-0">
                      We embed ourselves in your team and aim to work as a natural extension of your full-time team.
                    </p>
                  </div>
                  <button className="btn btn-dark btn-rounded-circle px-6 mt-5">Button Text</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sectionfour">
        <div class="container d-flex flex-row pl-0">
          <div class="row min-vh-100 p-2 py-md-3">
            <div class="col-12">
              <div class="row justify-content-between mb-8 mb-md-11">
                <div class="col-12 col-md-6">
                  <div>
                    <h2 className="font-weight-bold">
                      Lokalizacja
                    </h2>

                    <p class="lead mb-6 mb-md-0">
                      We embed ourselves in your team and aim to work as a natural extension of your full-time team.
                      We embed ourselves in your team and aim to work as a natural extension of your full-time team.
                    </p>
                  </div>
                  <button className="btn btn-dark mt-5 px-8 btn-rounded-circle">Button Text</button>

                </div>
                <div class="col-12 col-md-6 col-xl-6 pl-10">
                  <div>
                    <p class="mt-8 mb-6 mb-md-0">
                      We embed ourselves in your team and aim to work as a natural extension of your full-time team.
                      We embed ourselves in your team and aim to work as a natural extension of your full-time team.
                    </p>
                    <p class="mt-4 mb-6 mb-md-0">
                      We embed ourselves in your team and aim to work as a natural extension of your full-time team.
                      We embed ourselves in your team and aim to work as a natural extension of your full-time team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section >
        <div class="container">

          <div class="row">
            <div class="col-12 col-md-6 col-lg-3 text-center" >

              <div class="icon icon-lg mb-4">
                <img src="./static/img/brands/logomark/slack.svg" width="50" />
              </div>

              <h3 class="font-weight-bold">
                Slack
            </h3>

              <p class="small mb-8">
                Sync your team's work and activity to share automatically in a channel with a simple plugin.
            </p>

            </div>
            <div class="col-12 col-md-6 col-lg-3 text-center" >

              <div class="icon icon-lg mb-4">
                <img src="./static/img/brands/logomark/mailchimp.svg" width="50" />
                {/* {{> logomark/mailchimp}} */}
              </div>

              <h3 class="font-weight-bold">
                Mailchimp
            </h3>

              <p class="small mb-8 mb-lg-0">
                Communicate important messages to your users through Landkit using Mailchimp as the delivery service.
            </p>

            </div>
            <div class="col-12 col-md-6 col-lg-3 text-center" >

              <div class="icon icon-lg mb-4">
                <img src="./static/img/brands/logomark/dropbox.svg" width="50" />
                {/* {{> logomark/dropbox}} */}
              </div>

              <h3 class="font-weight-bold">
                Dropbox
            </h3>

              <p class="small mb-8 mb-md-0">
                Sync any file store to Dropbox for automated sharing with people outside the company.
            </p>

            </div>
            <div class="col-12 col-md-6 col-lg-3 text-center" >

              <div class="icon icon-lg mb-4">
                <img src="./static/img/brands/logomark/google-drive.svg" width="50" />
                {/* {{> logomark/google-drive}} */}
              </div>

              <h3 class="font-weight-bold">
                Google Drive
            </h3>

              <p class="small mb-8">
                Sync any file store to Google Drive for automated sharing with people outside the company.
            </p>

            </div>
            <div class="col-12 col-md-6 col-lg-3 text-center" >

              <div class="icon icon-lg mb-4">
                <img src="./static/img/brands/logomark/google-ad-manager.svg" width="50" />
                {/* {{> logomark/google-ad-manager}} */}
              </div>

              <h3 class="font-weight-bold">
                Google Ad Manager
            </h3>

              <p class="small mb-8">
                Easily manage and edit any Adwords campaign inline to improve ROI with constant review.
            </p>

            </div>
            <div class="col-12 col-md-6 col-lg-3 text-center" >

              <div class="icon icon-lg mb-4">
                <img src="./static/img/brands/logomark/atlassian.svg" width="50" />
                {/* {{> logomark/atlassian}} */}
              </div>

              <h3 class="font-weight-bold">
                Atlassian
            </h3>

              <p class="small mb-0">
                Keep your entire team in sync with development and easily manage tasks, goals, and deadlines.
            </p>

            </div>
            <div class="col-12 col-md-6 col-lg-3 text-center" >

              <div class="icon icon-lg mb-4">
                <img src="./static/img/brands/logomark/atlassian.svg" width="50" />
                {/* {{> logomark/atlassian}} */}
              </div>

              <h3 class="font-weight-bold">
                Atlassian
            </h3>

              <p class="small mb-0">
                Keep your entire team in sync with development and easily manage tasks, goals, and deadlines.
            </p>

            </div>
            <div class="col-12 col-md-6 col-lg-3 text-center" >

              <div class="icon icon-lg mb-4">
                <img src="./static/img/brands/logomark/atlassian.svg" width="50" />
                {/* {{> logomark/atlassian}} */}
              </div>

              <h3 class="font-weight-bold">
                Atlassian
            </h3>

              <p class="small mb-0">
                Keep your entire team in sync with development and easily manage tasks, goals, and deadlines.
            </p>

            </div>
          </div>
        </div>
      </section>
      <section className="mt-6">
        <div className="container">
          <div class="row">
            <div class="col-12">
              <h1 className="font-weight-bold">
                Section Heading
              </h1>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-12">

              <div class="card shadow-light-lg overflow-hidden text-center text-lg-left bg-gray-200" >
                <div class="row">
                  <div class="col-md-4 position-relative">

                    <img src="./static/img/illustrations/illustration-2.png" class="h-75 position-absolute right-0 mt-6" alt="..." />

                  </div>
                  <div class="col-md-5">

                    <div class="card-body py-7 py-md-9">

                      <h4 class="font-weight-bold">
                        Building a community.
                    </h4>

                      <p class="text-muted mb-0">
                        Landkit is focused on helping foster a community. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>

                    </div>

                  </div>
                  <div class="col-md-3 d-flex align-items-center">
                    <button className="btn btn-dark btn-rounded-circle px-4">Button Text</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div class="row mt-6">
            <div class="col-12">

              <div class="card shadow-light-lg overflow-hidden text-center text-lg-left bg-gray-200" >
                <div class="row">
                  <div class="col-md-4 position-relative">

                    <img src="./static/img/illustrations/illustration-2.png" class="h-75 position-absolute right-0 mt-6" alt="..." />

                  </div>
                  <div class="col-md-5">

                    <div class="card-body py-7 py-md-9">

                      <h4 class="font-weight-bold">
                        Building a community.
                    </h4>

                      <p class="text-muted mb-0">
                        Landkit is focused on helping foster a community. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>

                    </div>

                  </div>
                  <div class="col-md-3 d-flex align-items-center">
                    <button className="btn btn-dark btn-rounded-circle px-4">Button Text</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div class="row mt-6">
            <div class="col-12">

              <div class="card shadow-light-lg overflow-hidden text-center text-lg-left bg-gray-200" >
                <div class="row">
                  <div class="col-md-4 position-relative">

                    <img src="./static/img/illustrations/illustration-2.png" class="h-75 position-absolute right-0 mt-6" alt="..." />

                  </div>
                  <div class="col-md-5">

                    <div class="card-body py-7 py-md-9">

                      <h4 class="font-weight-bold">
                        Building a community.
                    </h4>

                      <p class="text-muted mb-0">
                        Landkit is focused on helping foster a community. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>

                    </div>

                  </div>
                  <div class="col-md-3 d-flex align-items-center">
                    <button className="btn btn-dark btn-rounded-circle px-4">Button Text</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div class="row mt-6">
            <div class="col-12">

              <div class="card shadow-light-lg overflow-hidden text-center text-lg-left bg-gray-200" >
                <div class="row">
                  <div class="col-md-4 position-relative">

                    <img src="./static/img/illustrations/illustration-2.png" class="h-75 position-absolute right-0 mt-6" alt="..." />

                  </div>
                  <div class="col-md-5">

                    <div class="card-body py-7 py-md-9">

                      <h4 class="font-weight-bold">
                        Building a community.
                    </h4>

                      <p class="text-muted mb-0">
                        Landkit is focused on helping foster a community. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>

                    </div>

                  </div>
                  <div class="col-md-3 d-flex align-items-center">
                    <button className="btn btn-dark btn-rounded-circle px-4">Button Text</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div class="row mt-6">
            <div class="col-12">

              <div class="card shadow-light-lg overflow-hidden text-center text-lg-left bg-gray-200" >
                <div class="row">
                  <div class="col-md-4 position-relative">

                    <img src="./static/img/illustrations/illustration-2.png" class="h-75 position-absolute right-0 mt-6" alt="..." />

                  </div>
                  <div class="col-md-5">

                    <div class="card-body py-7 py-md-9">

                      <h4 class="font-weight-bold">
                        Building a community.
                    </h4>

                      <p class="text-muted mb-0">
                        Landkit is focused on helping foster a community. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>

                    </div>

                  </div>
                  <div class="col-md-3 d-flex align-items-center">
                    <button className="btn btn-dark btn-rounded-circle px-4">Button Text</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div class="row mt-6">
            <div class="col-12">

              <div class="card shadow-light-lg overflow-hidden text-center text-lg-left bg-gray-200" >
                <div class="row">
                  <div class="col-md-4 position-relative">

                    <img src="./static/img/illustrations/illustration-2.png" class="h-75 position-absolute right-0 mt-6" alt="..." />

                  </div>
                  <div class="col-md-5">

                    <div class="card-body py-7 py-md-9">

                      <h4 class="font-weight-bold">
                        Building a community.
                    </h4>

                      <p class="text-muted mb-0">
                        Landkit is focused on helping foster a community. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>

                    </div>

                  </div>
                  <div class="col-md-3 d-flex align-items-center">
                    <button className="btn btn-dark btn-rounded-circle px-4">Button Text</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* <section class="min-vh-100" data-jarallax="" data-speed=".8"
        style={{ backgroundImage: 'none', position: 'relative', zIndex: '0' }}
        data-jarallax-original-styles={{ backgroundImage: `url(/static/img/covers/cover-2.jpg)` }}>
        <div id="jarallax-container-4"
          style={{ position: 'absolute', top: '0px', left: '0px', width: '100%', height: '100%', overflow: 'hidden', zIndex: '-100' }}>
          <div style={{
            backgroundPosition: '50% 50%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
            backgroundImage: `url(/static/img/covers/cover-2.jpg)`, position: 'absolute', top: '0px', left: '0px',
            width: '1519.2px', height: '457.68px', overflow: 'hidden', pointerEvents: 'none', transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden', willChange: 'transform, opacity', marginTop: '0.159998px',
            transform: 'translate3d(0px, 27.48px, 0px)'
          }}>
          </div>
        </div>
      </section> */}

      <article className="sheet">
        <h1 id="top">Top Page</h1>
        {/* <HelmetDatoCms seo={about.seoMetaTags} />
        <div className="sheet__inner">
          <h1 className="sheet__title">{about.title}</h1>
          <p className="sheet__lead">{about.subtitle}</p>
          <div className="sheet__gallery">
            <Img fluid={about.photo.fluid} />
          </div>
          <div
            className="sheet__body"
            dangerouslySetInnerHTML={{
              __html: about.bioNode.childMarkdownRemark.html,
            }}
          />
        </div> */}
        <a href="#top">page top</a>
      </article>
       </Layout>
  )
}

export default Home

export const query = graphql`
  query HomeQuery {
    about: datoCmsHomepage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      sectiontitle
      para1
    para2
    para3
    
    }
  }
`
