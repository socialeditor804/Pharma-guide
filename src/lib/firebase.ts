import { initializeApp } from "firebase/app";
import { 
  getFirestore, 
  collection, 
  doc, 
  setDoc, 
  getDocs, 
  onSnapshot, 
  updateDoc, 
  deleteDoc,
  query,
  orderBy
} from "firebase/firestore";
import { PharmaCategory } from "../pharmaData";

const firebaseConfig = {
  apiKey: "AIzaSyALi_sTbtt-1Bh7rffPH8dQPqydfnZcBd4",
  authDomain: "awesome-datum-6cf5x.firebaseapp.com",
  projectId: "awesome-datum-6cf5x",
  storageBucket: "awesome-datum-6cf5x.firebasestorage.app",
  messagingSenderId: "11833196063",
  appId: "1:11833196063:web:bcbb4b146257e17fc41f2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore with specific database ID
export const db = getFirestore(app, "ai-studio-pharmaguidehub-48fc31fd-9998-4cd2-8c1c-389550ef1f54");

// Collection references
export const categoriesCollection = collection(db, "categories");
export const inquiriesCollection = collection(db, "inquiries");

/**
 * Seed Firestore with the initial pharma categories if empty
 */
export async function seedCategoriesIfEmpty(defaultCategories: PharmaCategory[]) {
  try {
    const snapshot = await getDocs(categoriesCollection);
    if (snapshot.empty) {
      console.log("Firestore categories collection is empty. Seeding default categories...");
      for (let i = 0; i < defaultCategories.length; i++) {
        const cat = defaultCategories[i];
        const docRef = doc(db, "categories", cat.id);
        await setDoc(docRef, {
          ...cat,
          order: i // keep correct order
        });
      }
      console.log("Firestore seeded successfully!");
    }
  } catch (error) {
    console.error("Error seeding categories:", error);
  }
}
