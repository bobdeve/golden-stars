// in ActionProvider.jsx
import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage("🌟 Welcome to Golden Stars College! 🌟 We're thrilled to have you here! How can we brighten your day today?");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handlePro = () => {
    const botMessage = createChatBotMessage("🎓 Step into the world of Golden Stars College! Explore our galaxy of courses tailored just for you. Get ready to embark on an epic educational journey! 🚀");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };


  const handleOther = () => {
    const botMessage = createChatBotMessage("🤖 Welcome to the Golden Stars College family! As your trusty chatbot companion, I'm here to guide you through the wonders of education. Let's explore the universe of possibilities together!");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleRegi = () => {
    const botMessage = createChatBotMessage("📝 Ready to embark on your Golden Stars journey? For registration inquiries, simply dial +251909787477 or send a carrier pigeon to our email address!");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleLocation = () => {
    const botMessage = createChatBotMessage("📍 Find us at the brightest stars across the galaxy! Golden Stars College shines in Addis Ababa, Hawassa, Hossana, and beyond. Navigate your way to knowledge with Google Maps!");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleScholar = () => {
    const botMessage = createChatBotMessage("💰 Seeking treasure on your educational voyage? Our treasure map leads to scholarships and financial aid! Contact us at goldenstarscollege@example.com or send a message in a bottle to +232324242.");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleCourses = () => {
    const botMessage = createChatBotMessage("📚 Dive into a sea of knowledge with our courses! From IT to finance, we've got it all! Prepare to surf the waves of wisdom at Golden Stars College!");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleFaculty = () => {
    const botMessage = createChatBotMessage("👨‍🏫 Meet our constellation of brilliant instructors and faculty leaders! They're the guiding stars of your educational journey. Contact us at +25246666 for more cosmic wisdom!");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleSchedule = () => {
    const botMessage = createChatBotMessage("📅 Mark your calendars for a cosmic adventure! Our schedules are as flexible as a rubber band in space! Email us at golden@yaroo.com for event details and more!");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleRequirements = () => {
    const botMessage = createChatBotMessage("🔍 Unlock the secrets to enrollment! Discover what it takes to join our star-studded community. Contact us for the keys to the Golden Stars kingdom!");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleSingleScho = () => {
    const botMessage = createChatBotMessage("💰 Seeking treasure on your educational voyage? Our treasure map leads to scholarships and financial aid! Contact us at goldenstarscollege@example.com or send a message in a bottle to +232324242.");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handlePro,
            handleOther,
            handleRegi,
            handleLocation,
            handleScholar,
            handleCourses,
            handleFaculty,
            handleSchedule,
            handleRequirements,
            handleSingleScho
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
