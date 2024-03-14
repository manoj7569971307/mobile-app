
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './homepage.css'
 
const Homepage = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetchJokes();
  }, []);

  const fetchJokes = async () => {
    try {
      const response = await axios.get('https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10');
      console.log(response.data.jokes)
      setJokes( response.data.jokes);
    } catch (error) {
      console.error('Error fetching jokes:', error);
    }
  };

  return (
    <div className="container">
      <h2 style={{color:"yellow",textAlign:"center",fontSize:"50px"}}>Jokes</h2>
      <table className="table">
        <thead>
          <tr>
            <th className='border-2' >category</th>
            <th className='border-2 pl-50%'>Joke</th>
          </tr>
        </thead>
        <tbody>
        
        {jokes.map((joke, index) => (
          <tr key={index} className='boredr-2'>
            <td className='border-2 border-dark' style={{fontWeight:"bold"}} >{joke.category}:</td>
            <td className='border-1 border-dark'>{joke.joke}</td>
          </tr>
        ))}
      
        </tbody>
      </table>
    </div>
  );
};

export default Homepage;
