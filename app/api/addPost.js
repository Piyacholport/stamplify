// pages/api/addPost.js
import { db } from '../../lib/firebase'
import { collection, addDoc, Timestamp } from 'firebase/firestore'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { title, content } = JSON.parse(req.body)

      // เพิ่มข้อมูลลง Firestore
      const docRef = await addDoc(collection(db, 'posts'), {
        title,
        content,
        createdAt: Timestamp.now()
      })

      return res.status(200).json({ success: true, id: docRef.id })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: 'Something went wrong' })
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' })
  }
}