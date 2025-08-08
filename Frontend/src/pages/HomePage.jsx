import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import RateLimitedUI from "../components/RateLimitedUI.jsx";
import api from "../lib/axios.js";
import toast from "react-hot-toast";
import NoteCard from "../components/NoteCard.jsx"; // make sure this is imported!
import NotesNotFound from "../components/NotesNoteFound.jsx";

const HomePage = () => {
  const [isRateLimiter, setIsRateLimiter] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get("/notes");
        console.log(res.data);
        setNotes(res.data);
        setIsRateLimiter(false);
      } catch (error) {
        console.log("Error fetching notes");
        console.log(error);

        if (error.response?.status === 429) {
          setIsRateLimiter(true);
        } else {
          toast.error("Failed to Load Notes.");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen ">
      <Navbar />
      {isRateLimiter && <RateLimitedUI />}
      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading && (
          <div className="text-center text-green-400 py-10">
            Loading Notes...
          </div>
        )}

        {notes.length === 0 && !isRateLimiter && <NotesNotFound />}

        {notes.length > 0 && !isRateLimiter && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
