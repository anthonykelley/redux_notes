import React from 'react';
import NoteForm from './components/NoteForm'; 
import NoteList from './components/NoteList';
import Footer from './components/Footer';
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';

const App = () => (
  <div>Add a Note:
    <NoteForm />
    <Button>Click Here</Button>    
    <NoteList />
    <Footer />
  </div>
)

export default App;
