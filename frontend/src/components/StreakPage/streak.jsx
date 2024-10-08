import React, { useState, useEffect,navigate } from 'react';
import axios from 'axios';
import './streak.css';
import { useNavigate } from 'react-router-dom';
const Streak = ({ userName }) => {
  const [journalCount, setJournalCount] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    // Fetch the number of journals written by the user
    const fetchJournalCount = async () => {
      try {
        const response = await axios.get(`/streak/${userName}`);
        setJournalCount(response.data.count);
      } catch (error) {
        console.error("Error fetching journal count", error);
      }
    };

    fetchJournalCount();
  }, [userName]);

  return (
    <div className="streak-page">
      <h1>{userName}'s Writing Streak</h1>
      <p>You have written {journalCount} journal{journalCount === 1 ? '' : 's'} so far!</p>
      
      {journalCount > 0 && journalCount < 5 && (
        <p>Great start! Keep writing more to reach your goals.</p>
      )}
      
      {journalCount >= 5 && journalCount < 10 && (
        <p>You're on fire! Keep the streak going and aim for 10 journals!</p>
      )}
      
      {journalCount >= 10 && (
        <p>You're unstoppable! You've reached a major milestone. Aim for 20!</p>
      )}
      
      {journalCount === 0 && (
        <p>It's time to get started! Write your first journal and build your streak.</p>
      )}
      
      <button 
        onClick={() =>  navigate("/addjournals")}
        className="btn btn-primary"
      >
        Write a New Journal
      </button>
    </div>
  );
};

export default Streak;
