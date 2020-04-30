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

function loadScript(url)
{    
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    head.appendChild(script);
}


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

  keyGener() {
    var sizeString = this.system_props.file_size.toString();
    var countString = this.system_props.file_size.toString();
    var hash = sha256(sizeString)+sha256(countString)
    return hash
  }
}




//actual devices



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
    file_size
    : 44,
  	//file_size:,
    //44
  	system_type: 2
  }
)
// toaster.system_props[file_size] : 44
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
var fridge = new computer(
  {
    hostName:"fridge",
    operatingSystem: 'linux',
  	open_ports: ['22']
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
//Digital copies for update refrences
var toasterMaster = new computer(
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
var voiceAssistantMaster = new computer(
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
var printerMaster = new computer(
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
var fridgeMaster = new computer(
  {
    hostName:"fridge",
    operatingSystem: 'linux',
  	open_ports: ['22']
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
  }
  )

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
	"<br>System Type: " + deviceName.system_props.system_type +
  "<br>Honey Key: " + deviceName.keyGener()
}

// I shoved all the game stuff onto a separate file

// Link to other scripts
var assistantHashMaster = voiceAssistantMaster.keyGener()
var toasterHashMaster = toasterMaster.keyGener()
var fridgeHashMaster =  fridgeMaster.keyGener()
var printerHashMaster = printerMaster.keyGener()
function returnHash(device){
  switch(device){
    case ("assistant"):
      return voiceAssistant.keyGener()
    case ("toaster"):
      return toaster.keyGener()
    case ("refrigerator"):
      return fridge.keyGener()
    case ("printer"):
      return printer.keyGener()
  }
}

loadScript('game.js');











