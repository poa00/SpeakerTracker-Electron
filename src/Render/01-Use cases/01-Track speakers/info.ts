const infoText = `
<html>
<head>
<title>Speaker Tracker Info</title>
</head>
<link href="css/info.css" rel="stylesheet">
<body>
  <div class="help-large-title">Help</div>

  <div class="help-title">First time using the app</div>

  <div class="help-text">
    <p>Go to setup and create an entity.  Then create members and meeting groups for that entity.</p>

    <p><strong>Example</strong><br>
    Entity:  My council<br>
    Members:  Cr Member One, Cr Member Two, Cr Member Three<br>
    Meeting groups:  Full council, Committee One, Committee Two</p>

    <p>Optional: Create events if you wish to keep a record of speaking times for each meeting event</p>
    
    <p id='i-para'>You can display this help again by pressing<span id='i-symbol'>d</span>on the Speaker Tracker main window.</p>
  </div>

  <div class="help-title">Main screen</div>

  <div class="help-title2">The lists</div>

  <div class="help-text">
    <p><strong>Remaining list</strong></p>
    <p>All members start here, in alphabetical order of last name.</p>
    <p><strong>Waiting list</strong></p>
    <p>Members who have signalled their wish to speak are listed here.
    The meeting chair can see who is next to speak. 
    Members can be re-ordered by dragging and dropping rows.</p>

    <p><strong>Speaking list</strong></p>

    <p>Shows the members who have previously spoken in the debate and the member currently speaking.<p>

    <p><strong>Moving a member from one list to another</strong></p>

    <p>Press the arrow to the side of the speaker's name. A member in the Speaking List 
    cannot be moved between lists once the timer for the member is started.</p>

  </div>

  <div class="help-title2">Debates</div>

  <div class="help-text">

    <p><strong>Speaking rules</strong></p>

    <p>This app is based on the rule that speakers in a debate to a motion only speak once.  
    A speaker may propose an amendment to a motion being debated.  All members, whether 
    they have already spoken to the main (original) motion or not, may speak to the amendment.  
    Once the amendment is dispensed with, only those speakers who have not already spoken 
    to the main motion may continue to speak to it. 
    If your meeting rules allow speakers to speak more than once, and you wish to time a 
    speaker who has already spoken once, click on the speaker and select the menu option to speak again.</p>

    <p><strong>Amendments</strong></p>

    <p>If the member who is speaking moves an amendment, click on the member when finished speaking to commence \
    a debate on the amendment. All other members may speak to the amendment and are returned to the Remaining list. \
    Click on the final speaker to the amendment to close the amendment debate.  The main debate resumes. \
    Those members who have not already spoken in the main debate may speak.</p>

  </div>


  <div class="help-title2">Timing speeches</div>

  <div class="help-text">

    <p><strong>Timer</strong></p>

    <p>There is a clock at the top of the screen.  Pressing the full screen button shows a larger clock.  
    Both clocks are synced.  They display the same timing action. </p>
    <p>To time individual speakers and retain each speaker's time, press the play button next to the speaker's name.  
    Pressing the play button also removes the left arrow - a speaker cannot be moved to the center table once they
    have started speaking. Pressing the stop button for the speaker removes all timer controls for that speaker.  If the speaker 
    speaks again later, click on the speaker and select 'Speak again' from the menu.</p>

  </div>

  <div class="help-title">Setup</div>

  <div class="help-text">

    <p><strong>Entities</strong></p>
    <p>Add an entity and give it a name.  You can also edit the name of an existing entity.</p>

    <p><strong>Members</strong></p>
    <p>Select an entity and add members, or edit existing members.</p>

    <p><strong>Meeting groups</strong></p>
    <p>Select an entity and add meeting groups.  For each meeting group assign members from the entity's members. 
    You can also edit existing meeting groups.</p>

  </div>

  <div class="help-title">App info </div>   

  <div class="help-text">
    <p>Source code: <a href="https://github.com/wrmack/SpeakerTracker">https://github.com/wrmack/SpeakerTracker</a> <br>
    Developer: <a href="mailto:warwick.mcnaughton@gmail.com"> Warwick McNaughton</a>  </p>

    <p><strong>Privacy statement</strong></p>
    <p>The app does not use personal information for any purpose other than the purpose of tracking speakers 
    at meetings and keeping a record of this. 
    The personal information used for tracking speakers comprises members' names and speaking times.</p>
    <p>&nbsp;</p>
  </div>

</body>
</html>
`
export {infoText}
