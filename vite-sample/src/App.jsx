import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';
import './App.css'

function App() {
  const [cats, setCats] = useState([]);
  
  useEffect(() => {
    const fetchCats = async () => {
      /*console.log("Fetching cats...");*/
      const catsRef = collection(db, "cat");
      try {
        const querySnapshot = await getDocs(catsRef);
        /*console.log("Query result:", querySnapshot);*/
        const catsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        /*console.log("catsdata:", catsData);*/
        setCats(catsData);
      } catch (error) {
        console.error("Error fetching cats: ", error.message);
      }
    };

    fetchCats();
  }, []);

  return (
    <div>
      <h1>Cats List</h1>
      {cats.map((cat) => (
        <div key={cat.id}>
          <h2>{cat.name}</h2>
          <p>性別: {cat.gender}</p>
          <p>誕生日: {cat.birthday?.toDate().toLocaleDateString('ja-JP')}</p>
          <p>メモ: {cat.memo}</p>
        </div>
      ))}
    </div>
  );
}

export default App
