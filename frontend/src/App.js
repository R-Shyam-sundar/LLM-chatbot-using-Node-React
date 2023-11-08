import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';

class CustomChatbot extends Component {
  state = {
    messages: [],
  };

  handleUserMessage = (message) => {
    // When the user sends a message, add it to the chatbot's messages.
    this.setState((prevState) => ({
      messages: [...prevState.messages, { role: 'user', content: message }],
    }));
    
    // Here, you can add logic to generate a chatbot response based on the user's input.
    // For simplicity, let's just echo the user's input back.
    setTimeout(() => {
      this.setState((prevState) => ({
        messages: [...prevState.messages, { role: 'system', content: 'Typing...' }],
      }));

      setTimeout(() => {
        this.setState((prevState) => ({
          messages: [
            ...prevState.messages.slice(0, -1), // Remove "Typing..." message
            ...prevState.messages, // Duplicate user message
            { role: 'system', content: '...' }, // Add an ellipsis for chatbot "thinking"
          ],
        }));

        // Simulate a chatbot response (in this case, echoing the user's input).
        setTimeout(() => {
          this.setState((prevState) => ({
            messages: [
              ...prevState.messages.slice(0, -1), // Remove ellipsis
              ...prevState.messages, // Duplicate user message
              { role: 'chatbot', content: message }, // Echo the user's input as chatbot response
            ],
          }));
        }, 1500); // Simulated response time
      }, 1000); // Simulated "thinking" time
    }, 500); // Simulated delay before response
  };

  render() {
    return (
      <div className="custom-chatbot">
        <ChatBot
          handleUserMessage={this.handleUserMessage}
          messages={this.state.messages}
        />
      </div>
    );
  }
}

export default CustomChatbot;
