const notepad = document.getElementById("notepad");

// Load saved note
window.onload = function () {
    const savedNote = localStorage.getItem("note");
    if (savedNote) {
        notepad.value = savedNote;
    }
};

// Save note
function saveNote() {
    localStorage.setItem("note", notepad.value);
    alert("Note Saved!");
}

// Clear note
function clearNote() {
    if (confirm("Clear all notes?")) {
        notepad.value = "";
        localStorage.removeItem("note");
    }
}
