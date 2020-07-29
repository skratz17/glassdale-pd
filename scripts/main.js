import { ConvictionSelect } from './convictions/ConvictionSelect.js';
import { OfficerSelect } from './officers/OfficerSelect.js';
import { CriminalList } from './criminals/CriminalList.js';
import { ToggleNotesDisplayButton } from './notes/ToggleNotesDisplayButton.js';
import './notes/NoteForm.js';
import './notes/NoteList.js';
import './layoutChangeHandler.js';

ConvictionSelect();
OfficerSelect();
CriminalList();
ToggleNotesDisplayButton();