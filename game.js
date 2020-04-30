
// Displaying level-dependent information
function hashTester(){
  if((toasterMaster.keyGener() != toaster.keyGener()) ||(fridgeMaster.keyGener() != fridge.keyGener()) || (voiceAssistantMaster.keyGener() != voiceAssistant.keyGener())|| (printerMaster.keyGener() != printer.keyGener())){
    level+1
  }
}
setInterval(hashTester(), 1000)
loadScript("SHA256.js")
var level = 1;
var displayGameLevel = document.querySelector('#gameLevel')
var displayGameOptions = document.querySelector('#gameOptions')
var displayHackerScreen = document.querySelector('#hackerScreenText')
var displayHoneyhubScreen = document.querySelector('#honeyhubScreen')
var displayGameOptions1 = document.querySelector('#gameoptionstest')
var displayGameMove = document.querySelector('#nextLevel')

// Making the dropdown menue selectable for the second level
var fridge = document.querySelector("#fridge")
var fridgeBtn = document.createElement("BUTTON")
fridgeBtn.innerHTML = "FRIDGE: 192.168.1.1"
fridge.appendChild(fridgeBtn)
var assistant = document.querySelector("#assistant")
var assistBtn = document.createElement("BUTTON")
assistBtn.innerHTML = "ASSISTANT: 192.168.1.3"
assistant.appendChild(assistBtn)
var toaster = document.querySelector("#toaster")
var toastBtn = document.createElement("BUTTON")
toastBtn.innerHTML = "TOASTER: 192.168.1.2"
toaster.appendChild(toastBtn)
var printer = document.querySelector("#printer")
var printBtn = document.createElement("BUTTON")
printBtn.innerHTML = "PRINTER: 192.168.1.4"
printer.appendChild(printBtn)

// Access to hacker screen text, IP Scanner, interactive options, run code button, terminal input
var hackerScreenText = document.getElementById('hackerScreenText')
var ipScanner = document.getElementById('ipScanner')
var btn1 = document.createElement("BUTTON")
var consoleBtn = document.getElementById('consoleBtn')
var terminalInput = document.getElementById('terminalInput')

displayGameLevel.innerText = "You come across a very vulnerable device in the network. It looks like it has a login page. What would you like to do?"

// Constantly check for levels
setInterval(game, 1000)

// Game functionality
function game() {

	if (level === 1) {

		// Update prompts
		btn1.innerHTML = "LEVEL 1: Attempt to hack into the vulnerable login page."
		displayGameOptions.appendChild(btn1)

		// Hack into login page
		btn1.onclick = function () {
			displayHackerScreen.innerHTML = "Hacking login page..."
			setTimeout(() => { displayHackerScreen.innerHTML = "Account: <input value='admin'> <br><br>Password: <input value='admin'> <br><br> Successful Login!" }, 2000)

			setTimeout(() => { displayHoneyhubScreen.innerHTML = "Detected non-local entry. Locking down..." }, 4000)
			setTimeout(() => { displayHackerScreen.innerHTML = "Request rejected by client" }, 6000)

			setTimeout(() => { level += 1 }, 7000)
		}

	}

	if (level === 2) {

		// Changing prompts
		displayGameLevel.innerText = "Oh no. That didn't go so well... perhaps you'd like to try something else?"
		btn1.innerHTML = "LEVEL 2: Attempt to hack into the terminal."
		displayGameOptions.appendChild(btn1)

		// Scan for vulnerable ports
		btn1.onclick = function () {
			displayHackerScreen.innerHTML = "Scanning for vulnerable ports...."
			displayHoneyhubScreen.innerHTML = ""
			// Change hacker screen
			setTimeout(() => { displayHackerScreen.innerHTML = "Which IP would you like to access? <br> Select from the menu."; ipScanner.style.display = "flex" }, 2000)
		}

		// Function to cycle through "Attempting hack..." loading
		function loadingScreen(time) {
			time += 1000
			for (var i = 0; i <= 2; i++) {
				var speed = 5
				setTimeout(() => { displayHackerScreen.innerHTML = "Attempting hack.." }, time)
				time += speed
				setTimeout(() => { displayHackerScreen.innerHTML = "Attempting hack...." }, time)
				time += speed
				setTimeout(() => { displayHackerScreen.innerHTML = "Attempting hack......" }, time)
				time += speed
			}
			return time
		}

		// Choose to scan IP of fridge
		fridgeBtn.onclick = function () {
			displayHackerScreen.innerHTML = "Port 22<br> Accessed the ssh port!<br> Initiating device terimnal<br>"
			var time = loadingScreen(1000)
			setTimeout(() => { displayHackerScreen.innerHTML = "Assistant Failed to Hack (Error Code: NO COMMAND LINE)" }, time)
			time += 3000
			setTimeout(() => { displayHackerScreen.innerHTML = "Port 22 Failed. Attempting to access port 20" }, time)
			time += 1000
			time = loadingScreen(time)
			setTimeout(() => { displayHackerScreen.innerHTML = "Error (NO FTP ON DEVICE)"; displayHoneyhubScreen.innerHTML = "WARNING- MAIN SYSTEM SUBVERTED" }, time)
		}

		// Choose to scan IP of toaster
		toastBtn.onclick = function () {
			displayHackerScreen.innerHTML = "Port 22<br> Accessed the ssh port!<br> Initiating device terimnal<br>"
			var time = loadingScreen(1000)
			setTimeout(() => { displayHackerScreen.innerHTML = "Assistant Failed to Hack (Error Code: NO COMMAND LINE)" }, time)
			time += 3000
			setTimeout(() => { displayHackerScreen.innerHTML = "Port 22 Failed. Attempting to access port 20" }, time)
			time += 1000
			time = loadingScreen(time)
			setTimeout(() => { displayHackerScreen.innerHTML = "Error (NO FTP ON DEVICE)"; displayHoneyhubScreen.innerHTML = "WARNING- MAIN SYSTEM SUBVERTED" }, time)
		}

		// Choose to scan IP of voice assistant
		assistBtn.onclick = function () {

			displayHackerScreen.innerHTML = "Port 22<br> Accessed the ssh port!<br> Initiating device terminal<br>"
			var time = loadingScreen(1000)
			setTimeout(() => { displayHackerScreen.innerHTML = "Assistant Failed to Hack (Error Code: NO COMMAND LINE)" }, time)
			time += 3000
			setTimeout(() => { displayHackerScreen.innerHTML = "Port 22 Failed. Attempting to access port 20" }, time)
			time += 1000
			time = loadingScreen(time)
			setTimeout(() => {
				displayHackerScreen.innerHTML = "Success! FTP has been initiated.";
				ipScanner.style.display = "none"
				displayHoneyhubScreen.innerHTML = "WARNING- MAIN SYSTEM SUBVERTED"
			}, time)
			time += 750
			// Display input text box and run code button
			setTimeout(() => { displayHackerScreen.innerHTML = "<br>Please enter a command.<br>"; terminalInput.style.display = "flex"; consoleBtn.style.display = "flex"; consoleBtn.style.pointerEvents = "auto" }, time)

		}
    printBtn.onclick = function () {
        displayHackerScreen.innerHTML = "Port 22<br> Accessed the ssh port!<br> Initiating device terimnal<br>"
        var time = loadingScreen(1000)
        setTimeout(() => { displayHackerScreen.innerHTML = "Assistant Failed to Hack (Error Code: NO COMMAND LINE)" }, time)
        time += 3000
        setTimeout(() => { displayHackerScreen.innerHTML = "Port 22 Failed. Attempting to access port 20" }, time)
        time += 1000
        time = loadingScreen(time)
        setTimeout(() => { displayHackerScreen.innerHTML = "Assistant Failed to Hack (Error Code: NO FTP installed)"; displayHoneyhubScreen.innerHTML = "WARNING- MAIN SYSTEM SUBVERTED" }, time)
    }
		// When run code button is clicked
		consoleBtn.onclick = function () {

			var time = 1000

			// Get and output command
			var typedCommand = terminalInput.value
			displayHackerScreen.innerHTML = "<br>Hackerman's hackbook:~ assistant$ " + typedCommand + "<br>"

			// Output depends on text input
			switch (typedCommand) {
				case ("help"):
					displayHackerScreen.innerHTML += "<br>Type \"nano newfile.exe\" to add your own code files to control the device.<br>Type \"ls\" to list files in device.<br>Type \"pwd\" to print working directory.<br>"
				break

				case ("nano newfile.exe"):
					setTimeout(() => { displayHackerScreen.innerHTML += "Adding new file....<br>" }, time)
					time += 2000
          voiceAssistant.system_props.file_count += 1
          voiceAssistant.system_props.file_size += 1
          document.querySelector('#assistantDetails').innerHTML = updateDetails(voiceAssistant)
          
					setTimeout(() => { displayHackerScreen.innerHTML += "What would you like to input to the file? (HINT- sudo apt-get install hackermanTools)<br>" }, time)
				break

				case ("sudo apt-get install hackermanTools"):
          voiceAssistant.system_props.file_count += 3
          voiceAssistant.system_props.file_size += 15
          document.querySelector('#assistantDetails').innerHTML = updateDetails(voiceAssistant)
					displayHackerScreen.innerHTML += "SUCCESS. Device code modified to install code.<br>"
					displayHoneyhubScreen.innerHTML += "<br> WARNING: UNWARRANTED ALTER OF ROOT DIRECTORY FILE SIZE"
          setTimeout(level += 1, time)
					time += 3000

					// setTimeout(() => {level += 1}, time)
				break

				case ("ls"):
					displayHackerScreen.innerHTML += "Files in directory: file1 file2<br>"
					time += 2000
				break

				case ("pwd"):
					displayHackerScreen.innerHTML += "Working directory: root<br>"
					time += 2000
				break
			}


		}

	}

	

	// Honeypot locks out hacker and fixes compromised device
	if (level === 3) {

		var time = 1000

		setTimeout(() => {displayHackerScreen.innerHTML = ""; displayHoneyhubScreen.innerHTML = ""; terminalInput.style.display = "none";
		consoleBtn.style.display = "none"; 
		consoleBtn.style.pointerEvents = "none"}, time)

		btn1.remove()
		displayGameLevel.innerText = "LEVEL 3: You hacked into the IoT network. But the HoneyHub fights back!"

		for (var i = 0; i <= 2; i++) {
			var speed = 2000
			setTimeout(() => { displayHoneyhubScreen.innerHTML = "Checking file sizes, file directory and time stamp of file changes..." }, time)
			time += speed
      var hash = returnHash("assistant")
			setTimeout(() => { displayHoneyhubScreen.innerHTML = "Calculating Honey Keys... <br>" + hash  }, time)
			time += speed
			setTimeout(() => { displayHoneyhubScreen.innerHTML = "Checking Honey Keys......" }, time)
			time += speed
		}

		setTimeout(() => { displayHackerScreen.innerHTML = "ERROR"; displayHoneyhubScreen.innerText = "Detected intruder! Expected Honey Key from voice assistant: XXX. Found Honey Key from voice assistant: XXY." }, time)

		time += 2000

		var deviceScreen = document.querySelector("#devices")

		var lockedOutAlert = document.createElement("div")

		lockedOutAlert.innerHTML = "The voice assistant has been locked out of the network. You are isolated and powerless to stop the Honeyhub resetting the device and removing you!"

		lockedOutAlert.className = "lockedOutAlert"

		setTimeout(() => { deviceScreen.innerHTML = ""; deviceScreen.appendChild(lockedOutAlert) }, time)

		time += 3000

		setTimeout(() => { displayHoneyhubScreen.innerText = "Isolating compromised device from internet access..."; displayHackerScreen.innerText = "No access to internet." }, time)

		time += 4000

		setTimeout(() => { displayHoneyhubScreen.innerText = "Manually resetting device..." }, time)

		time += 4000

		setTimeout(() => { displayHoneyhubScreen.innerText = "System is secure."; displayHackerScreen.innerHTML = "" }, time)
  

		// Display alert asking for feedback
		time += 4000
		function endOfGameAlert() {
			document.getElementById("overlay").style.display = "block";
			document.getElementById("popUpAlert").style.display = "block";
		}

		setTimeout(() => endOfGameAlert(), time)

		level += 1

	}

}
var request = new XMLHttpRequest();
request.open('GET', 'https://api.ipify.org/?format=json', true);

request.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    // Success!
    console.log("If you are seeing this, know that your")
    console.log(JSON.parse(this.responseText))
    console.log(" would have been blocked by the honeyhub, and be unable to access the network again")
    var jsonArray = [];
    jsonArray.push($("#ip").val())
    var myJsonString = JSON.stringify(jsonArray);
  } 
  else {
    // Reached, outputted an error
  }
};
request.onerror = function() {
  // There was a connection error of some sort
};
request.send();
console.log()
