import React, { useState } from 'react';
import Modal from 'react-modal';

import './Certification.css'; // Importing the CSS file for styling
import Header from '../Header'; // Importing the Header component
import Footer from './Footer'; // Importing the Footer component
import { FaTimes } from "react-icons/fa";
// Array of video objects containing the source URL and title
const videos = [
  {
    src: "https://res.cloudinary.com/dmgxkz0vc/video/upload/v1716664376/vid4.mp4",
    title: 'Interview on Ethiopia National television regarding woman empowerment',
  },
  {
    src: "https://res.cloudinary.com/dmgxkz0vc/video/upload/v1716664490/vid2.mp4",
    title: 'Our college giving training and support to Hawassa police officers',
  },
  {
    src: "https://res.cloudinary.com/dmgxkz0vc/video/upload/v1716664484/vid3.mp4",
    title: 'Promotional video about our college',
  },
  {
    src: "https://res.cloudinary.com/dmgxkz0vc/video/upload/v1716664490/vid1.mp4",
    title: 'Our graduation ceremony in Hawassa campus',
  },
];

// Main Certification component
export default function Certification() {
  const [modalIsOpen, setModalIsOpen] = useState(false); // State to control the modal open/close status
  const [selectedVideo, setSelectedVideo] = useState(null); // State to store the currently selected video
  const [mutedVideos, setMutedVideos] = useState(Array(videos.length).fill(true)); // State to manage the mute status of videos

  // Function to open the modal and set the selected video
  const openModal = (video, index) => {
    setSelectedVideo(video); // Set the selected video
    setModalIsOpen(true); // Open the modal
    const updatedMutedVideos = Array(videos.length).fill(true); // Mute all videos
    updatedMutedVideos[index] = false; // Unmute the selected video
    setMutedVideos(updatedMutedVideos); // Update the state
  };

  // Function to close the modal and reset states
  const closeModal = () => {
    setSelectedVideo(null); // Clear the selected video
    setModalIsOpen(false); // Close the modal
    setMutedVideos(Array(videos.length).fill(true)); // Mute all videos
  };

  // Function to handle video click and unmute the clicked video
  const handleVideoClick = (index) => {
    const updatedMutedVideos = Array(videos.length).fill(true); // Mute all videos
    updatedMutedVideos[index] = false; // Unmute the clicked video
    setMutedVideos(updatedMutedVideos); // Update the state
  };

  const handleVideoClickandOpenModal = (video, index)=>{
    openModal(index, video)
    handleVideoClick(index)
  }

  // The component's return statement
  return (
    <>
      <Header /> {/* Render the Header component */}
    
      <div className="video-grid-container"> {/* Container for the video grid */}
        {videos.map((video, index) => ( // Map over the videos array
          <div key={index} className="video-grid-item" onClick={() => openModal(video, index)}> {/* Video grid item */}
            <video controls muted={true} onClick={() => handleVideoClick(index)}> {/* Video element */}
              <source onClick={()=>openModal(video,index)} src={video.src} type="video/mp4" /> {/* Video source */}
              Your browser does not support the video tag. {/* Fallback text */}
            </video>
            <h3>{video.title}</h3> {/* Video title */}
          </div>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen} // Modal open status
        onRequestClose={closeModal} // Function to close the modal
        contentLabel="Video Modal" // Accessibility label
        className="modal" // CSS class for modal styling
        overlayClassName="overlay" // CSS class for overlay styling
      >
        <button className="close-button" onClick={closeModal}><FaTimes /></button> {/* Close button */}
        {selectedVideo && (
          <video src={selectedVideo.src} controls autoPlay className="modal-video" muted={false} /> /* Selected video in modal */
        )}
      </Modal>
      <Footer /> {/* Render the Footer component */}
    </>
  );
}
