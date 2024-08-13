import React from 'react'
import proimg from "@/assets/public/images/proimg-1.png"
import proimg2 from "@/assets/public/images/proimg-2.png"
import proimg3 from "@/assets/public/images/proimg-3.png"
import pro4 from "@/assets/public/images/pro-4.png"
import pro6 from "@/assets/public/images/pro-6.png"
import pro5 from "@/assets/public/images/pro-5.png"
import pro7 from "@/assets/public/images/pro-7.png"
import Image from 'next/image'


function ProgramsComponents() {
  return (
    <>
    <div className="pages-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="bannertext">
              <h1>Programs</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="abthome-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
            <div className="homeser-text">
              <h2>Our Learning Programs</h2>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
            <div className="prog-colbg1">
              <div className="progimgcol text-center mb-3">
          <Image src={proimg} alt="proimg" />

              
              </div>
              <div className="pro-coltext">
                <h3 style={{ color: "#EC3C26" }}>ABC Adventures</h3>
                <p>
                  This program introduces children to the alphabet through fun
                  stories, songs, and interactive activities. Each letter is
                  brought to life with colorful animations and engaging content
                  that helps children remember and recognize letters.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
            <div className="prog-colbg2 h-100">
              <div className="progimgcol text-center mb-3">
          <Image src={proimg2} alt="proimg2" />

                {/* <img src="assets/images/proimg-2.png" alt="" /> */}
              </div>
              <div className="pro-coltext">
                <h3 style={{ color: "#EC3C26" }}>123 Numbers</h3>
                <p>
                  Focused on basic math skills, this program helps children
                  understand numbers, counting, and simple arithmetic through
                  engaging games and exercises. The activities are designed to
                  build a strong numerical foundation and confidence in math.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
            <div className="prog-colbg3">
              <div className="progimgcol text-center mb-3">
          <Image src={proimg3} alt="proimg3" />
                {/* <img src="assets/images/proimg-3.png" alt="" /> */}
              </div>
              <div className="pro-coltext">
                <h3 style={{ color: "#EC3C26" }}>Reading Rockets</h3>
                <p>
                  Designed to develop early reading skills, this program includes
                  phonics, sight words, and beginner reading activities. Through a
                  series of interactive stories and exercises, children learn to
                  read at their own pace, building a love for reading.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
            <div className="prog-colbg4">
              <div className="progimgcol text-center mb-3">
          <Image src={pro4} alt="pro4" />

                
              </div>
              <div className="pro-coltext">
                <h3 style={{ color: "#EC3C26" }}>Creative Arts and Crafts</h3>
                <p>
                  Encouraging creativity, this program includes art projects,
                  crafts, and activities that help children learn while expressing
                  themselves. From drawing and painting to making simple crafts,
                  children explore their artistic side.
                </p>
              </div>
            </div>
          </div> */}
          {/* <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
            <div className="prog-colbg5">
              <div className="progimgcol text-center mb-3">
          <Image src={pro5} alt="pro5" />

              </div>
              <div className="pro-coltext">
                <h3 style={{ color: "#EC3C26" }}>Science Explorers</h3>
                <p>
                  Introducing basic science concepts, this program sparks
                  curiosity and a love for discovery through hands-on experiments
                  and activities. Children learn about the world around them, from
                  plants and animals to simple physics and chemistry concepts.
                </p>
              </div>
            </div>
          </div> */}
          {/* <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
            <div className="prog-co lbg6">
              <div className="progimgcol text-center mb-3">
          <Image src={pro6} alt="pro6" />

              </div>
              <div className="pro-coltext">
                <h3 style={{ color: "#EC3C26" }}>Music and Movement</h3>
                <p>
                  This program combines music, dance, and physical activities to
                  develop coordination, rhythm, and physical fitness. Children
                  enjoy singing, dancing, and moving to the beat while learning
                  important motor skills.
                </p>
              </div>
            </div>
          </div> */}
          <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
            <div className="prog-colbg7">
              <div className="progimgcol text-center mb-3">
          <Image src={pro7} alt="pro7" />

                {/* <img src="assets/images/pro-7.png" alt="" /> */}
              </div>
              <div className="pro-coltext">
                <h3 style={{ color: "#EC3C26" }}>Language Learning</h3>
                <p>
                  Offering introductory lessons in multiple languages, this
                  program helps children develop basic language skills in a fun
                  and interactive way. Songs, games, and simple conversations make
                  language learning enjoyable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  
  )
}

export default ProgramsComponents
