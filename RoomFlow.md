Let's break down the UI flow for the entire "Rooms" experience, focusing on the key animations and transitions for creating and joining rooms in different scenarios.
Scenario 1: The First-Time User Experience (Creating the First Room)
This is the most critical flow. It needs to be welcoming and teach the user the app's core layout through animation.
State 1: The Empty Hub
Visual: The user taps the "Rooms" tab and sees a clean, centered layout. There's no complex UI yet.
A friendly illustration (e.g., a group of friends represented by map pins).
A large, inviting button: [ + Create a Room ].
A secondary button or text link below it: [ → Join a Room ].
Goal: Make the next step obvious and non-intimidating.
State 2: Initiating Creation
Action: User taps [ + Create a Room ].
Transition (The "Morph"):
The illustration and the "Join a Room" button fade out smoothly.
The [ + Create a Room ] button itself expands. Its corners round out, and it grows vertically and horizontally, transforming into a modal card that settles in the center of the screen.
Visual: The screen now shows the Create Room Form card. The background is dimmed to bring focus to the form.
Goal: Create a seamless connection between the button and the form. The user feels like they are manipulating the UI directly.
State 3: The Creation Form
Visual: The modal card contains two simple input fields:
Room Name: A text field with a placeholder like "e.g., Downtown Dinner 🍕".
Destination: A field that, when tapped, opens a full-screen map search interface.
A prominent, but initially disabled, [ Create & Go ] button at the bottom of the card. It becomes active only when both fields are filled.
Goal: Keep the task focused and simple.
State 4: The "Magic Moment" Transition
Action: User fills the form and taps [ Create & Go ].
Transition (The "Reveal"): This is a multi-part, synchronized animation.
Card to Bottom Sheet: The entire "Create Room Form" card animates downwards, shrinking as it moves, finally settling at the bottom of the screen as the Collapsed Bottom Sheet.
Map Unveiling: As the card moves down, the dimmed background fades away to reveal the Full-Screen Map, centered on the destination the user chose.
UI Elements Fade-In: Simultaneously, the Hamburger Icon (☰) fades into view in the top-left corner.
Visual: The user is now in the main "In-Room" UI. They see the map, the bottom sheet with their new room's name, and the hamburger menu.
Goal: Teach the user the entire layout in one fluid motion. They learn where room details live (bottom sheet) and where the main menu is (hamburger icon) without reading a single word of instruction.
Scenario 2: User is Already in a Room (Creating or Joining Another)
The user has already created their first room. The complex "morphing" animation is no longer needed. The flow becomes quicker and more direct, using the established UI elements.
State 1: In an Active Room
Visual: The user is viewing the map for "Downtown Dinner 🍕". The bottom sheet is visible, and the hamburger icon (☰) is in the corner.
Goal: Provide a clear path to create or join another room without leaving the current context entirely.
State 2: Opening the Room Switcher
Action: User taps the Hamburger Icon (☰).
Transition: A Side Drawer smoothly slides in from the left, overlaying the left 70-80% of the map. The map underneath may dim slightly.
Visual: The Side Drawer displays a list:
"Downtown Dinner 🍕" (highlighted as active).
A [ + Create a New Room ] button.
A [ → Join a Room ] section with an input field for the code.
Goal: Give the user a central hub for all room-related meta-actions.
State 3A: Creating a Subsequent Room
Action: User taps [ + Create a New Room ] inside the drawer.
Transition: A Modal Form appears, centered over the entire screen (dimming both the drawer and the map behind it). This is the same "Create Room Form" as before, but it appears with a standard pop-up animation.
Action: User fills the form for "Beach Trip 🏖️" and taps [ Create & Go ].
Transition:
The modal form fades or slides away.
The Side Drawer is still open, but now it has a new entry: "Beach Trip 🏖️".
The main map view and bottom sheet in the background instantly swap their content to display the information for the new "Beach Trip 🏖️" room.
The "Beach Trip 🏖️" entry in the drawer is now highlighted as active. The user can close the drawer by tapping on the map.
Goal: The creation process is quick and happens "on top" of the existing UI. The context switch is immediate upon success.
State 3B: Joining a Room
Action: User types a code into the "Join a Room" field in the Side Drawer and hits "Join".
Transition:
A brief loading indicator appears next to the "Join" button.
Upon success, the process is identical to creating a room: the new room appears in the drawer list, and the main map/bottom sheet content switches to it. The drawer remains open for the user to see the result of their action.
Goal: Joining a room feels like a lightweight action that immediately brings the user into the new context.
This structured flow ensures that the app feels simple when it needs to be (for new users) and efficient when the user is more experienced.