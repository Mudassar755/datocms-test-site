import React,{useEffect} from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import Flickity from 'react-flickity-component'
import Layout from "../components/layout"
import cover_top from '../assets/img/covers/cover-19.jpg'
import cover3 from '../assets/img/covers/cover-3.jpg'
import Slider from '../components/slider'
import AOS from 'aos';
import "aos/dist/aos.css";
import '../styles/theme.bundle.css'
import 'flickity/dist/flickity.min.css';

const flickityOptions = {
  initialIndex: 2,
  groupCells:true,
  groupCells: 3
}
const Home = ({ data: { about } }) => {
  useEffect(() => {
    AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
    });
    AOS.refresh();
}, [])
  console.log("about", about)
  return (
    <Layout>
      <section id="sectionone" class="pt-12 pt-md-14 pb-12 pb-md-15 overlay bg-cover jarallax" data-jarallax data-speed=".8" style={{ backgroundImage: `url(${cover_top})` }}>
        <div class="container">

          <div class="row justify-content-start" >
            <div class="col-12 col-md-10 col-lg-7">


              <h1 class="display-2 font-weight-bold text-white" data-aos="fade-right">
                Our Work.
            </h1>


              <p class="lead text-white-75 mb-4" data-aos="fade-right" data-aos-delay="100">
                We design & build products, tools, apps, and sites for companies trying to do great things for our planet.
            </p>


              <nav class="nav justify-content-start" data-aos="fade-right" data-aos-delay="100">
                <a class="btn bg-cyan text-white rounded-pill active mr-1 mb-1" href="#" data-toggle="pill" data-filter="*" data-target="#portfolio">
                  <span class="h6 text-uppercase">Left Button</span>
                </a>
                <a class="btn bg-white rounded-pill mr-1 mb-1" href="#" data-toggle="pill" data-filter=".product" data-target="#portfolio">
                  <span class="h6 text-uppercase">Right Button</span>
                </a>
               
              </nav>

            </div>
          </div>
        </div>
      </section>

      <section id="sectiontwo">
        <div class="container-fluid d-flex flex-row pl-0">
          <div class="row min-vh-100 py-3 py-md-5">
            <div class="col-12">
              <div class="row justify-content-between mb-3 mb-md-5">
                <div class="col-12 col-md-6">
                  <div class="ml-13 mb-8" data-aos="fade-right">
                    <h2>
                     {about.sectiontitle}
                    </h2>

                    <p class="lead mb-6 mb-md-0">
                     {about.para1}
                    </p>
                  </div>
                  <img src={require('../assets/img/photos/photo-32.jpg')} width="100%" data-aos="fade-right" data-aos-delay="100" />
                </div>
                <div class="col-12 col-md-6 col-xl-5 mr-11">
                  <div data-aos="fade-left">

                    <p class="small mb-6 mb-md-0">
               {about.para2}
                </p>
                  </div>
                  <div class="bg-gray-200 d-flex justify-content-center align-items-center" style={{height:'300px'}} data-aos="fade-left" data-aos-delay="100">
                    <h1 class="text-center font-weight-bold"><span style={{fontSize:'5em'}}>14</span> <br />
                    Heading Section
                    </h1>
                  </div>
                  <div data-aos="fade-left" data-aos-delay="200">
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

      <section class="py-4 py-md-5 mb-5">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-4 text-center" data-aos="fade-up">

            <div class="icon text-primary mb-3">
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"/><path d="M7 3h10a4 4 0 110 8H7a4 4 0 110-8zm0 6a2 2 0 100-4 2 2 0 000 4z" fill="#335EEA"/><path d="M7 13h10a4 4 0 110 8H7a4 4 0 110-8zm10 6a2 2 0 100-4 2 2 0 000 4z" fill="#335EEA" opacity=".3"/></g></svg>            </div>
          
            <h3>
              Built for developers
            </h3>
         
            <p class="text-muted mb-6 mb-md-0">
              Landkit is built to make your life easier. Variables, build tooling, documentation, and reusable components.
            </p>

          </div>
          <div class="col-12 col-md-4 text-center" data-aos="fade-up" data-aos-delay="50">

            
            <div class="icon text-primary mb-3">
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"/><path d="M5.5 4h4A1.5 1.5 0 0111 5.5v1A1.5 1.5 0 019.5 8h-4A1.5 1.5 0 014 6.5v-1A1.5 1.5 0 015.5 4zm9 12h4a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-1.5 1.5h-4a1.5 1.5 0 01-1.5-1.5v-1a1.5 1.5 0 011.5-1.5z" fill="#335EEA"/><path d="M5.5 10h4a1.5 1.5 0 011.5 1.5v7A1.5 1.5 0 019.5 20h-4A1.5 1.5 0 014 18.5v-7A1.5 1.5 0 015.5 10zm9-6h4A1.5 1.5 0 0120 5.5v7a1.5 1.5 0 01-1.5 1.5h-4a1.5 1.5 0 01-1.5-1.5v-7A1.5 1.5 0 0114.5 4z" fill="#335EEA" opacity=".3"/></g></svg>            </div>

            
            <h3>
              Designed to be modern
            </h3>

            
            <p class="text-muted mb-6 mb-md-0">
              Designed with the latest design trends in mind. Landkit feels modern, minimal, and beautiful.
            </p>

          </div>
          <div class="col-12 col-md-4 text-center" data-aos="fade-up" data-aos-delay="100">

          
            <div class="icon text-primary mb-3">
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"/><path d="M17.272 8.685a1 1 0 111.456-1.37l4 4.25a1 1 0 010 1.37l-4 4.25a1 1 0 01-1.456-1.37l3.355-3.565-3.355-3.565zm-10.544 0L3.373 12.25l3.355 3.565a1 1 0 01-1.456 1.37l-4-4.25a1 1 0 010-1.37l4-4.25a1 1 0 011.456 1.37z" fill="#335EEA"/><rect fill="#335EEA" opacity=".3" transform="rotate(15 12 12)" x="11" y="4" width="2" height="16" rx="1"/></g></svg>            </div>

            <h3>
              Documentation for everything
            </h3>

            <p class="text-muted mb-0">
              We've written extensive documentation for components and tools, so you never have to reverse engineer anything.
            </p>

          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-4 text-center" data-aos="fade-up">

            <div class="icon text-primary mb-3">
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"/><path d="M7 3h10a4 4 0 110 8H7a4 4 0 110-8zm0 6a2 2 0 100-4 2 2 0 000 4z" fill="#335EEA"/><path d="M7 13h10a4 4 0 110 8H7a4 4 0 110-8zm10 6a2 2 0 100-4 2 2 0 000 4z" fill="#335EEA" opacity=".3"/></g></svg>            </div>
          
            <h3>
              Built for developers
            </h3>
         
            <p class="text-muted mb-6 mb-md-0">
              Landkit is built to make your life easier. Variables, build tooling, documentation, and reusable components.
            </p>

          </div>
          <div class="col-12 col-md-4 text-center" data-aos="fade-up" data-aos-delay="50">

            
            <div class="icon text-primary mb-3">
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"/><path d="M5.5 4h4A1.5 1.5 0 0111 5.5v1A1.5 1.5 0 019.5 8h-4A1.5 1.5 0 014 6.5v-1A1.5 1.5 0 015.5 4zm9 12h4a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-1.5 1.5h-4a1.5 1.5 0 01-1.5-1.5v-1a1.5 1.5 0 011.5-1.5z" fill="#335EEA"/><path d="M5.5 10h4a1.5 1.5 0 011.5 1.5v7A1.5 1.5 0 019.5 20h-4A1.5 1.5 0 014 18.5v-7A1.5 1.5 0 015.5 10zm9-6h4A1.5 1.5 0 0120 5.5v7a1.5 1.5 0 01-1.5 1.5h-4a1.5 1.5 0 01-1.5-1.5v-7A1.5 1.5 0 0114.5 4z" fill="#335EEA" opacity=".3"/></g></svg>            </div>

            
            <h3>
              Designed to be modern
            </h3>

            
            <p class="text-muted mb-6 mb-md-0">
              Designed with the latest design trends in mind. Landkit feels modern, minimal, and beautiful.
            </p>

          </div>
          <div class="col-12 col-md-4 text-center" data-aos="fade-up" data-aos-delay="100">

          
            <div class="icon text-primary mb-3">
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"/><path d="M17.272 8.685a1 1 0 111.456-1.37l4 4.25a1 1 0 010 1.37l-4 4.25a1 1 0 01-1.456-1.37l3.355-3.565-3.355-3.565zm-10.544 0L3.373 12.25l3.355 3.565a1 1 0 01-1.456 1.37l-4-4.25a1 1 0 010-1.37l4-4.25a1 1 0 011.456 1.37z" fill="#335EEA"/><rect fill="#335EEA" opacity=".3" transform="rotate(15 12 12)" x="11" y="4" width="2" height="16" rx="1"/></g></svg>            </div>

            <h3>
              Documentation for everything
            </h3>

            <p class="text-muted mb-0">
              We've written extensive documentation for components and tools, so you never have to reverse engineer anything.
            </p>

          </div>
        </div>
      </div>
    </section>

      <section class="pt-12 pt-md-8 pb-5 pb-md-8 overlay overlay-black overlay-60 bg-cover jarallax" data-jarallax data-speed=".8" style={{ backgroundImage: `url(${cover3})` }}>
        <div class="container">

          <div class="row justify-content-start">
            <div class="col-12 col-md-10 col-lg-7 text-left">


              <h1 class="display-2 font-weight-bold text-white" data-aos="fade-right">
                Our Work.
              </h1>


              <p class="lead text-white-75 mb-4" data-aos="fade-right" data-aos-delay="100">
                We design & build products, tools, apps, and sites for companies trying to do great things for our planet.
              </p>
            </div>
          </div>
          {/* <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
      >
      <img src={require('../assets/img/photos/photo-1.jpg')}/>
      <img src={require('../assets/img/photos/photo-2.jpg')}/>
      <img src={require('../assets/img/photos/photo-3.jpg')}/>
    </Flickity> */}
        </div>
    <Slider />
      </section>
    {/* <div></div> */}
      <section id="sectionthree" class="pt-12 mt-13 pt-md-8 pb-5 pb-md-8">
        <div class="container">

          <div class="row justify-content-start">
            <div class="col-12 col-md-10 col-lg-7 text-left" data-aos="fade-up">


              <h1 class="display-2 font-weight-bold">
                Our Work.
              </h1>


              <p class="lead mb-4">
                We design & build products, tools, apps, and sites for companies trying to do great things for our planet.
              </p>
            </div>
            <div class="col-12 col-md-12 col-lg-12" data-aos="fade-up" data-aos-delay="100">
              <img src={require('../assets/img/photos/photo-31.jpg')} className="w-100" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container-fluid d-flex flex-row pl-0">
          <div class="row min-vh-100 py-3 py-md-5">
            <div class="col-12">
              <div class="row justify-content-between mb-3 mb-md-5">
                <div class="col-12 col-md-6" data-aos="fade-right">
                  <img src={require('../assets/img/map.png')} width="100%" />
                </div>
                <div class="col-12 col-md-4 col-xl-4 mr-14" data-aos="fade-left" data-aos-delay="100">
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
              <div class="row justify-content-between mb-3 mb-md-5">
                <div class="col-12 col-md-6">
                  <div>
                    <h2 className="font-weight-bold" data-aos="fade-right" >
                      Lokalizacja
                    </h2>

                    <p class="lead mb-6 mb-md-0" data-aos="fade-right" data-aos-delay="100">
                      We embed ourselves in your team and aim to work as a natural extension of your full-time team.
                      We embed ourselves in your team and aim to work as a natural extension of your full-time team.
                    </p>
                  </div>
                  <button className="btn btn-dark mt-5 px-8 btn-rounded-circle">Button Text</button>

                </div>
                <div class="col-12 col-md-6 col-xl-6 pl-10">
                  <div data-aos="fade-left" data-aos-delay="100">
                    <p class="mt-4 mb-4 mb-md-0">
                      We embed ourselves in your team and aim to work as a natural extension of your full-time team.
                      We embed ourselves in your team and aim to work as a natural extension of your full-time team.
                    </p>
                    <p class="mt-4 mb-4 mb-md-0">
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
            <div class="col-12 col-md-6 col-lg-3 text-center" data-aos="fade-up" data-aos-delay="100">

              <div class="icon icon-lg mb-4">
                <img src={require('../assets/img/brands/logomark/slack.svg')} width="50" />
              </div>

              <h3 class="font-weight-bold">
                Slack
            </h3>

              <p class="small">
                Sync your team's work and activity to share automatically in a channel with a simple plugin.
            </p>

            </div>
            <div class="col-12 col-md-6 col-lg-3 text-center" data-aos="fade-up" data-aos-delay="100">

              <div class="icon icon-lg mb-4">
                <img src={require('../assets/img/brands/logomark/mailchimp.svg')} width="50" />
                {/* {{> logomark/mailchimp}} */}
              </div>

              <h3 class="font-weight-bold">
                Mailchimp
            </h3>

              <p class="small mb-8 mb-lg-0">
                Communicate important messages to your users through Landkit using Mailchimp as the delivery service.
            </p>

            </div>
            <div class="col-12 col-md-6 col-lg-3 text-center" data-aos="fade-up" data-aos-delay="100">

              <div class="icon icon-lg mb-4">
                <img src={require('../assets/img/brands/logomark/dropbox.svg')} width="50" />
                {/* {{> logomark/dropbox}} */}
              </div>

              <h3 class="font-weight-bold">
                Dropbox
            </h3>

              <p class="small mb-8 mb-md-0">
                Sync any file store to Dropbox for automated sharing with people outside the company.
            </p>

            </div>
            <div class="col-12 col-md-6 col-lg-3 text-center" data-aos="fade-up" data-aos-delay="100">

              <div class="icon icon-lg mb-4">
                <img src={require('../assets/img/brands/logomark/google-drive.svg')} width="50" />
                {/* {{> logomark/google-drive}} */}
              </div>

              <h3 class="font-weight-bold">
                Google Drive
            </h3>

              <p class="small mb-8">
                Sync any file store to Google Drive for automated sharing with people outside the company.
            </p>

            </div>
            <div class="col-12 col-md-6 col-lg-3 text-center" data-aos="fade-up" data-aos-delay="100">

              <div class="icon icon-lg mb-4">
                <img src={require('../assets/img/brands/logomark/google-ad-manager.svg')} width="50" />
                {/* {{> logomark/google-ad-manager}} */}
              </div>

              <h3 class="font-weight-bold">
                Google Ad Manager
            </h3>

              <p class="small mb-8">
                Easily manage and edit any Adwords campaign inline to improve ROI with constant review.
            </p>

            </div>
            <div class="col-12 col-md-6 col-lg-3 text-center" data-aos="fade-up" data-aos-delay="100">

              <div class="icon icon-lg mb-4">
                <img src={require('../assets/img/brands/logomark/atlassian.svg')} width="50" />
                {/* {{> logomark/atlassian}} */}
              </div>

              <h3 class="font-weight-bold">
                Atlassian
            </h3>

              <p class="small mb-0">
                Keep your entire team in sync with development and easily manage tasks, goals, and deadlines.
            </p>

            </div>
            <div class="col-12 col-md-6 col-lg-3 text-center" data-aos="fade-up" data-aos-delay="100">

              <div class="icon icon-lg mb-4">
                <img src={require('../assets/img/brands/logomark/atlassian.svg')} width="50" />
                {/* {{> logomark/atlassian}} */}
              </div>

              <h3 class="font-weight-bold">
                Atlassian
            </h3>

              <p class="small mb-0">
                Keep your entire team in sync with development and easily manage tasks, goals, and deadlines.
            </p>

            </div>
            <div class="col-12 col-md-6 col-lg-3 text-center" data-aos="fade-up" data-aos-delay="100">

              <div class="icon icon-lg mb-4">
                <img src={require('../assets/img/brands/logomark/atlassian.svg')} width="50" />
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

              <div class="card shadow-light-lg overflow-hidden text-center text-lg-left bg-gray-200" data-aos="fade-right" data-aos-delay="100">
                <div class="row">
                  <div class="col-md-4 position-relative">

                    <img src={require('../assets/img/illustrations/illustration-2.png')} class="h-75 position-absolute right-0 mt-6" alt="..." />

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

              <div class="card shadow-light-lg overflow-hidden text-center text-lg-left bg-gray-200" data-aos="fade-right" data-aos-delay="100">
                <div class="row">
                  <div class="col-md-4 position-relative">

                    <img src={require('../assets/img/illustrations/illustration-2.png')} class="h-75 position-absolute right-0 mt-6" alt="..." />

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

              <div class="card shadow-light-lg overflow-hidden text-center text-lg-left bg-gray-200" data-aos="fade-right" data-aos-delay="100">
                <div class="row">
                  <div class="col-md-4 position-relative">

                    <img src={require('../assets/img/illustrations/illustration-2.png')} class="h-75 position-absolute right-0 mt-6" alt="..." />

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

              <div class="card shadow-light-lg overflow-hidden text-center text-lg-left bg-gray-200" data-aos="fade-right" data-aos-delay="100">
                <div class="row">
                  <div class="col-md-4 position-relative">

                    <img src={require('../assets/img/illustrations/illustration-2.png')} class="h-75 position-absolute right-0 mt-6" alt="..." />

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

              <div class="card shadow-light-lg overflow-hidden text-center text-lg-left bg-gray-200" data-aos="fade-right" data-aos-delay="100">
                <div class="row">
                  <div class="col-md-4 position-relative">

                    <img src={require('../assets/img/illustrations/illustration-2.png')} class="h-75 position-absolute right-0 mt-6" alt="..." />

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

              <div class="card shadow-light-lg overflow-hidden text-center text-lg-left bg-gray-200" data-aos="fade-right" data-aos-delay="100">
                <div class="row">
                  <div class="col-md-4 position-relative">

                    <img src={require('../assets/img/illustrations/illustration-2.png')} class="h-75 position-absolute right-0 mt-6" alt="..." />

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

      {/* <article className="sheet">
        <h1 id="top">Top Page</h1>
        <a href="#top">page top</a>
      </article> */}
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
