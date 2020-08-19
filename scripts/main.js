import { ConvictionSelect } from './convictions/ConvictionSelect.js';
import { OfficerSelect } from './officers/OfficerSelect.js';
import { CriminalList } from './criminals/CriminalList.js';
import { ToggleNotesDisplayButton } from './layout/ToggleNotesDisplayButton.js';
import { ToggleActiveListButton } from './layout/ToggleActiveListButton.js';
import './notes/NoteForm.js';
import './notes/NoteList.js';
import './criminals/AssociateList.js';
import './layout/layoutChangeHandler.js';

ConvictionSelect();
OfficerSelect();
CriminalList();
ToggleNotesDisplayButton();
ToggleActiveListButton();