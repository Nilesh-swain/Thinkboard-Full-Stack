import { ArrowLeftIcon } from "lucide-react";
import { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import api from '../lib/axios.js';
import toast from "react-hot-toast"


const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);


  const Navigate = useNavigate()

  const handleSubmit = async (e) => { 
  e.preventDefault();

  if (!title.trim() || !content.trim()) {
    toast.error("all fields are required")
    return;
  }
  setLoading(true)
  try{
    await api.post("/notes",{
      title,
      content
    })
    toast.success("Note Created Succes fully.")
    Navigate("/")
  }catch(error){
    console.log("error creatednote",error)
    toast.error("Failed to Create Note")

  } finally{
    setLoading(false)
  }
    
  };
  
  return (
    <div className="min-h-screen relative overflow-hidden">
     <div className="absolute inset-0 -z-10 h-full w-full [background:'radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)']"></div>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link to={"/"} className="btn btn-ghost mb-6">
            <ArrowLeftIcon className="size-5" />
            Back to Notes
          </Link>

          <div className="card bg-base-100 mt-4">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">Create New Note</h2>
              <form onSubmit={handleSubmit}>

                <div className="from-control mb-4">
                  <label className="label block mb-1">
                    <span className="label-text text-sm font-medium">Title:</span>
                  </label>
                  <input type="text" placeholder="Note Title" className="input input-border min-w-full"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div className="from-control mb-4">
                  <label className="label block mb-2">
                    <span className="label-text text-sm font-medium">content:</span>
                  </label>
                  <textarea placeholder="Write Your Note Here....." className="textarea textarea-border h-35 min-w-full"
                    value={content}
                    onChange={(e) => setContent(e.target.value)} />
                </div>

                <div className="card-actions justify-end">
                  <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? "creating..." : "create Note"}
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
export default CreatePage