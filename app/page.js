"use client";

import { useEffect , useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';  // ← import doc และ getDoc
import { db } from './lib/firebase';

export default function HomePage() {
  const [docData, setDocData] = useState(null);

  useEffect(() => {
    fetchMemberById();
  }, []);

  async function fetchMemberById() {
    try {
      const docRef = doc(db, 'member', 'PqGRom5AqBetIUJQnx3b');
      const snapshot = await getDoc(docRef);

      if (snapshot.exists()) {
        // 2. เมื่ออ่านได้แล้ว ให้ set ค่าเข้ามาใน State
        setDocData(snapshot.data());
      } else {
        console.log('No such documentttt!');
      }
    } catch (error) {
      console.error('Error getting document:', error);
    }
  }

  return (
    <div>
      <h1>Home Page</h1>
      {/* 3. ใช้งาน docData ที่เก็บใน State */}
      {docData ? (
        <p>Name: {docData.name} -  Age: {docData.age}</p>
      ) : (
        <p>Loading or No Data</p>
      )}
    </div>
  );
}