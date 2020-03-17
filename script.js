/* Define this to create a computer.
A computer is any network capable device that has some open ports. We will use this in our network. Since a network is nothing without computers



fun fact - this is the parent of almost every other thing we have made               here. It is the gandparent of the honeyhub and router.



constructor() - The devprops argument is an object that contains the following keys: mac address of the computer, operating system and the open ports in the computer.
  The net_props argument is an object with the network properties of the computer. The ssid key means the network name. The pksd key means the password for the network. The ipv4 key is the local ip of the computer.The ipv6 is the public ip. The location is the location of the device as per the ip
  the system props argument only azal knows

terminalLogIn()-This contains the conditions to login to any one of the     ports in the computer.

terminal()-This contains the code or what will be the output if a command is entered for the terminal in the computer

usage example:
  var computer = new computer(
    { hostName:'hostName',
      operatingSystem: 'os',//'win10'
      open_ports:[open_ports]//[24,8080]
    },
    { ssid:"ssid",//"MyNet"
      pksd:"pksd",//"letmein123"
      ipv4:[ipv4],//[192,168,0,5]
      location:"location"//"US"
    },
    {
      file_count:n
      file_size:n
      system_type:n
      //I used n in this case to represent any integer. I don't know how to write that here though, so I need help
    }
  )
*/



var ip_count = 0;
//This upper value allows it so that the pot knows how many computers are on the network vie the "ip count", this doesn't actually scan for ip's however, in reality this count is maintained by the router





class computer {
  ip_count = ip_count + 1
  constructor(dev_props, net_props, system_props) {
    if (dev_props) {
      this.device_props = {
        hostName: dev_props.hostName,
        operatingSystem: dev_props.operatingSystem,
        open_ports: dev_props.open_ports
      }
    }
    if (net_props) {
      this.network_props = {
        ssid: net_props.ssid,
        pksd: net_props.pksd,
        ipv4: net_props.ipv4,
        location: net_props.location
      }
    }
    if (system_props) {
      this.system_props = {
        file_count: system_props.file_count,
        file_size: system_props.file_size,
        system_type: system_props.system_type
        //The system_type will be numbered 1-n, with anything greater than n being assumed as a raspi-pi. Identifying the system type is used for the honeypot to cross refrence what the keys should look like. In the real world this information would be gathered automatically from the internet 
      }
    }
    this.deviceOn=true;
    this.terminalLoggedIn = false;
  }

  terminal(port) {

  }
  // make sure to add an argument on top to define network when releasing this as a library
  toggleSwitch(){
    this.deviceOn = !this.deviceOn;
    if(this.deviceOn === false){
      honeyNetwork.dynamicIP();
    }
  }

  terminalLogIn(port, user, pass) {
    if (user && pass === "admin") {
      if (this.device_props.open_ports.indexOf(port) >= 0) {
        this.terminalLoggedIn = true;
        return true;
      }
    }
  }

}





var fridge = new computer(
  {
    hostName:"fridge",
    operatingSystem: 'linux',
  	open_ports: ['24']
  },
  {
    ssid: "ssid",
  	pksd: "pksd",
  	ipv4: [192, 168, 1, 1],
 		location: "US"
  },
  {
    file_count: 7,
  	file_size: 33.6,
  	system_type: 1
  }
)





var toaster = new computer(
  {
    hostName:"toaster",
    operatingSystem: 'linux',
  	open_ports:['24']
  },
  {
    ssid: "ssid",
  	pksd: "pksd",
  	ipv4: [192, 168, 1, 2],
  	location: "US"
  },
  {
    file_count: 13,
  	file_size: 44,
  	system_type: 2
  }

)





var voiceAssistant = new computer(
  {
    hostName:"voiceAssistant",
    operatingSystem: 'linux',
  	open_ports: ['24']
  },
  {
    ssid: "ssid",
  	pksd: "pksd",
  	ipv4: [192, 168, 1, 3],
  	location: "US"
  },
  {
    file_count: 2,
  	file_size: 10,
  	system_type: 3
  }
)





var printer = new computer(
  {
    hostName:"printer",
    operatingSystem: 'linux',
    open_ports: ['24']
  },
  {
    ssid: "ssid",
    pksd: "pksd",
    ipv4: [192, 168, 1, 4],
    location: "US"
  },
  {
    file_count: 2,
    file_size: 64,
    system_type: 4
  }
)
/*This defines a honeyhub.

*/

// honeyhub.(printer.system_props.file_size,printer.system_props.file_count)
// console.log(printer.system_props.file_size*printer.system_props.file_count)





// returns a number b/w 0 and 255
function randIpAddressPartial () {
  return Math.floor(Math.random() * 255);
}





// gives a random non-local ip-address
function generateIpAddress () {
  var ipAddress = [
    randIpAddressPartial(),
    randIpAddressPartial(),
    randIpAddressPartial(),
    randIpAddressPartial()
  ]
  
  // this prevents the random ip generator from
  // giving local ip addresses to the network
  if (ipAddress[0] === 192 && ipAddress[1] === 168) {
    // this forces regeneration of ip
    return generateIpAddress();
  }
  else if (ipAddress[0] === 10 && ipAddress[1] === 10) {
    return generateIpAddress();
  }

  return ipAddress;
}




/*this defines a network */




class network extends computer{
  constructor(computers,dev_props, net_props, system_props){
    super(dev_props, net_props, system_props);
    this.computers = computers;
    this.IP = []// ip address mapped to each computer
    for (let i in this.computers){
      this.IP.push([computers[i].network_props.ipv4,this.computers[i].device_props.hostName]);
    }
  }
  portBroking(hostName,port,user,pass){
    for (let i in this.computers){
      if(this.computers[i].device_props.hostName === hostName){
        this.loggedIn = [this.computers[i].terminalLogIn(port,user,pass),port,this.computer[i]]
      }
    }
  }
  portTerminal(){
    if(this.loggedIn[0]===true){
    this.loggedIn[2].terminal(this.loggedIn[1])
    }
  }
}





class honeyhub extends network {
  constructor(computers,dev_props, net_props, system_props) {
    super(computers,dev_props,net_props,system_props);
    this.honeyKey = this.system_props.file_size * this.system_props.file_count
  }
  keyGener(){
    return this.honeyKey;
  }
}





var honeyHub = new honeyhub([fridge,toaster,voiceAssistant,printer],
  {
    hostName:"honeyhub",
    operatingSystem: 'linux',
    open_ports: ['24','8080']
  },
  {
    ssid: "ssid",
    pksd: "pksd",
    ipv4: [192, 168, 1, 5],
    location: "US"
  },
  {
    file_count: 2,
    file_size: 64,
    system_type: 5
  })




class router extends network{
  constructor(computers,dev_props, net_props, system_props){
    super(computers,dev_props, net_props, system_props);
  }
  dynamicIP(){
    if(fridge.deviceOn === true){
      fridge.network_props.ipv4 = generateIpAddress();
    }
    if(voiceAssistant.deviceOn === true){
      voiceAssistant.network_props.ipv4 = generateIpAddress();
    }
    if(toaster.deviceOn === true){
      toaster.network_props.ipv4 = generateIpAddress();
    }
    if(printer.deviceOn === true){
      printer.network_props.ipv4 = generateIpAddress();
    }
  }
}








var computers = [fridge,toaster,voiceAssistant,printer,honeyHub]
var honeyNetwork = new router(computers,{
    hostName:"honeyhub",
    operatingSystem: 'cisco',
    open_ports: ['24','8080']
  },
  {
    ssid: "ssid",
    pksd: "pksd",
    ipv4: [192, 168, 1, 5],
    location: "US"
  },
  {
    file_count: 2,
    file_size: 64,
    system_type: 5
  })

/* FRONT END STUFF */

// Update device details

document.querySelector('#fridgeDetails').innerHTML = updateDetails(fridge)
document.querySelector('#toasterDetails').innerHTML = updateDetails(toaster)
document.querySelector('#assistantDetails').innerHTML = updateDetails(voiceAssistant)
document.querySelector('#printerDetails').innerHTML = updateDetails(printer)

document.querySelector('#honeyhubDetails').innerHTML = updateDetails(honeyHub)

function updateDetails(deviceName) {
	return "Host name: " + deviceName.device_props.hostName + 
	"<br>Operating system: " + deviceName.device_props.operatingSystem + 
	"<br>Open ports: " + deviceName.device_props.open_ports +
	"<br>Name of wifi: " + deviceName.network_props.ssid +
	"<br>wifi password: *******" +
	"<br>IPv4: " + deviceName.network_props.ipv4.join(".") +
	"<br>Location: " + deviceName.network_props.location +
	"<br>File Count: " + deviceName.system_props.file_count +
	"<br>File Size: " + deviceName.system_props.file_size +
	"<br>System Type: " + deviceName.system_props.system_type
}

// Turning on and off

var fridgeStatus = true

var toggleFridge = document.querySelector('#toggleFridge')
toggleFridge.onclick = function() {
	fridge.toggleSwitch();
}

// Hacker options

var level = 1;

var displayGameLevel = document.querySelector('#gameLevel')
var displayGameOptions = document.querySelector('#gameOptions')
var displayHackerScreen = document.querySelector('#hackerScreen')
var displayHoneyhubScreen = document.querySelector('#honeyhubScreen')
var displayGameMove = document.querySelector('#nextLevel')
//below is me making the dropdown menue selectable for the second level
var fridge = document.querySelector("#fridge")
var fridgeBtn = document.createElement("button")
fridgeBtn.innerHTML = "Fridge"
fridge.appendChild(fridgeBtn)
var assistant = document.querySelector("#assistant")
var assistBtn = document.createElement("button")
assistBtn.innerHTML = "Assistant"
assistant.appendChild(assistBtn)
var toaster = document.querySelector("#toaster")
var toastBtn = document.createElement("button")
toastBtn.innerHTML = "Toaster"
toaster.appendChild(toastBtn)
var printer = document.querySelector("#printer")
var printBtn = document.createElement("button")
printBtn.innerHTML = "Printer"
printer.appendChild(printBtn)
//make into a game function
// Level 0
if (level === 0) {
	displayGameLevel.innerText = "You come across a very vulnerable device in the network. It looks like it has a login page. What would you like to do?"
  
	var btn1 = document.createElement("BUTTON");
	btn1.innerHTML = "Attempt to hack into the vulnerable login page."

	displayGameOptions.appendChild(btn1)

	btn1.onclick = function() {
    level+=1
		displayHackerScreen.innerHTML = "Hacking login page..."
		setTimeout(() => { displayHackerScreen.innerHTML = "Account: <input  value='admin'><br> Password: <input value='admin'> <br> Successful Login!<br> Request Rejected By Client" }, 2000);
    


	}

	// haha idk what options to add alrighty
  //maybe hack into terminalthat could be level 1 since it is tougher
  
}

else if (level === 1){

  var btn2 = document.createElement("BUTTON");
	btn2.innerHTML = "Attempt to hack into the terminal."
	displayGameOptions.appendChild(btn2)
  // var btn3 = document.createElement("button")
  // btn3.innerHTML = "Fridge"
  btn2.onclick = function(){
    level+=1
    displayHackerScreen.innerHTML = "Scanning for vulrable ports...."
    setTimeout(()=> {displayHackerScreen.innerHTML = "Port 22<br> Accessed the ssh port!<br> Initiating device terimnal<br> "}, 2000)
    setTimeout(()=> {displayHackerScreen.innerHTML = "Which device would you like to access"}, 6000)
    fridgeBtn.onclick = function(){
      displayHackerScreen.innerHTML = "Fridge"
    }
    toastBtn.onclick = function(){
      displayHackerScreen.innerHTML = "Toaster"
    }
    assistBtn.onclick = function(){
      displayHackerScreen.innerHTML = "Assistant"
    }
    printBtn.onclick = function(){
      displayHackerScreen.innerHTML = "Printer"
    }
    displayHoneyhubScreen.innerHTML= "WARNING- MAIN SYSTEM SUBVERTED"

  }
}
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 
