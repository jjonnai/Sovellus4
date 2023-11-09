import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, ScrollView } from 'react-native';
import { NOTE, addDoc, deleteDoc, doc, collection, firestore , serverTimestamp} from '../Components/FirebaseConfig'
import { useEffect, useState } from 'react';
import { querySnapshot, onSnapshot, query, orderBy } from 'firebase/firestore';
import { convertFirebaseTimeStampToJS } from '../Components/TimeStamp';
import { Foundation } from '@expo/vector-icons'; 



export default function MyNotes() {

  const [notes, setNotes] = useState([])
  const [newNote, setnewNote] = useState('')
 


  useEffect(() => {
    const q= query(collection(firestore, NOTE),orderBy('saved','desc'))

    const unsubscribe = onSnapshot(q,(querySnapshot) => {
      const tempNotes = []

      querySnapshot.forEach((doc) => {
        const noteObject = {
          id: doc.id,
          text: doc.data().text,
          saved: convertFirebaseTimeStampToJS(doc.data().created)
        }
        tempNotes.push(noteObject)
        console.log(noteObject)
      })
      setNotes(tempNotes)
      
    })
  return() => {
    unsubscribe()
    
  }
    
  }, [])
  
  

  const save = async() => {
    const docRef = await addDoc(collection(firestore, NOTE), {
      text: newNote,
      created: serverTimestamp()
    }).catch(error => console.log(error))

    setnewNote('')
    console.log('Note saved.')
  }

  const deleteNote = async (noteId) => {
    try {
      const noteDocRef = doc(firestore, NOTE, noteId);

      await deleteDoc(noteDocRef);
    } catch (error) {
      console.log('Error deleting note', error);
    }
  };




  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {notes.map((note) => (
          <View style={styles.note} key={note.id}>
            <View style={styles.textContainer}>
              <Text style={styles.noteInfo}>{note.saved}</Text>
              <Text style={styles.noteText}>{note.text}</Text>
            </View>
            <View style={styles.deleteButtonContainer}>
              <Foundation
                style={styles.deleteButton}
                name="trash"
                size={29}
                color="black"
                title="Delete"
                onPress={() => deleteNote(note.id)}
              />
            </View>
          </View>
        ))}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter new note"
            value={newNote}
            onChangeText={(text) => setnewNote(text)}
          />
          <Button
            title="Save"
            type='button'
            onPress={save}
            color="#669999"
            style={styles.saveButton}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )}
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#DCE1D6'
    },
    note: {
      backgroundColor: '#fff',
      borderRadius: 8,
      padding: 16,
      marginBottom: 16,
      shadowColor: 'rgba(0, 0, 0, 0.1)',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      flexDirection: 'row',
      alignItems: 'center',
    },
    textContainer: {
      flex: 1,
    },
    noteInfo: {
      color: '#999',
      fontSize: 12,
    },
    noteText: {
      fontSize: 16,
      marginVertical: 8,
    },
    deleteButtonContainer: {
      flex: 0,
      alignItems: 'flex-end',
    },
    deleteButton: {
      marginRight: 16,
    },
    inputContainer: {
      marginTop: 16,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 8,
      paddingLeft: 8,
      marginBottom: 8,
    },
    saveButton: {
      backgroundColor: '#669999',
    },
  });
  