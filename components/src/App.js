import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import notes from "./notes";
import "./App.css";
function createCard(note) {
  return <Card key={note.id} name={note.title} content={note.content} />;
}
function App() {
  return (
    <div>
      <Header />
      {notes.map(createCard)}
      {/* <Card /> */}
      <Footer />
    </div>
  );
}

export default App;
