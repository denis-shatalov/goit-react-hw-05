import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import { useEffect, useState } from "react";
import axios from "axios";
import { Toaster } from 'react-hot-toast';
import Loader from "./Loader";
import ErrorMessage from "./ErorrMessage";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./ImageModal/ImageModal"


export default function App() {
    const clientKey = "u4pLimyEtmO5GUhd3tfFC4RwJvNMlYr6Lr9BS8SOCPM";

    const [search, setSearch] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  
  const [isOpen, setIsOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null);

      const openModal = (image) => {
        setSelectedImage(image);
        setIsOpen(true);
  };
  
  const closeModal = () => {
        setIsOpen(false);
        setSelectedImage(null);
    };
    
     const handleSearch = (topic) => {
         setPage(1); 
         setSearchTerm(topic)
         setSearch ([])
    
    };
    
    useEffect(() => {
        if (searchTerm === "") {
            return
        }
        async function getData() {
            try {
            setError(false)
            setIsLoading(true);
              
      const response = await axios.get("https://api.unsplash.com/search/photos", {
        params: {
          client_id: clientKey,
          query: searchTerm,
          orientation: "landscape",
              per_page: 12,
              page: page,
        },
      });
                
      setSearch(prevSearch => [...prevSearch, ...response.data.results]);
      
    } catch (error) {
      setError(true)
      
      }
    finally {
        setIsLoading(false);
      }  
        }
        getData()
    },
        [page, searchTerm])

    
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
          {search.length > 0 && !error ? <ImageGallery openModal={openModal} items={search} /> : null}
          {error && <ErrorMessage />}
          <Loader loading={isLoading} color="#000000" size={50} speedMultiplier={1} />
      {search.length > 0 && <LoadMoreBtn onClick={() => setPage(page + 1)} />}
      <ImageModal isOpen={isOpen} onClose={closeModal} image={selectedImage} />
      <Toaster />
    </div>
  );
}