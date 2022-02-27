import { useState, useEffect } from "react";
import { onValue } from "firebase/database";

const useFetchData = (dbRef) => {
  const [fetchData, setFetchData] = useState(null);
 
  useEffect(() => {
    onValue(dbRef, (snapshot) => {
      const fetchData = [];
      snapshot.forEach((data) => {
        const dataVal = data.val();

        fetchData.push({
          id: data.key,
          completed: dataVal.completed,
          date_created: dataVal.date_created,
          task_name: dataVal.task_name,
        });
      });

    
      setFetchData(fetchData);
    });
  }, []);
 
  return { fetchData };
};

export default useFetchData;
