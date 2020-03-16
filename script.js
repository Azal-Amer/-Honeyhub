/* Define this to create a computer.
A computer is any network capable device that has some open ports. We will use this in our network. Since a network is nothing without computers

constructor() - The devprops argument is an object that contains the        following keys: mac address of the computer, operating system and the     open ports in the computer.
  The net_props argument is an object with the network properties of the computer. The ssid key means the network name. The pksd key means the password for the network. The ipv4 key is the local ip of the computer.The ipv6 is the public ip. The location is the location of the device as per the ip

terminalLogIn()-This contains the conditions to login to any one of the     ports in the computer.

terminal()-This contains the code or what will be the output if a command is entered for the terminal in the computer

usage example:
  var computer = new computer(
    { mac:mac address,
      operatingSystem: os,//'win10'
      open_ports:[open_ports]//[24,8080]
    },
    { ssid:"ssid",//"MyNet"
      pksd:"pksd",//"letmein123"
      ipv4:[ipv4],//[192,168,0,5]
      1pv6:[ipv6],//ipv6 of computer.
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
var ip_count = 0
//This upper value allows it so that the pot knows how many computers are on the network vie the "ip count", this doesn't actually scan for ip's however, in reality this count is maintained by the router
class computer {
  ip_count = ip_count + 1
  constructor(dev_props, net_props, system_props) {
    if (dev_props) {
      this.device_props = {
        mac: dev_props.macAddress,
        operatingSystem: dev_props.os,
        open_ports: dev_props.open_ports
      }
    }
    if (net_props) {
      this.network_props = {
        ssid: net_props.ssid,
        pksd: net_props.pksd,
        ipv4: net_props.ipv4,
        ipv6: net_props.ipv6,
        location: net_props.location
      }
    }
    if (system_props) {
      this.system_props = {
        file_count: system_props.file_count,
        file_size: system_props.file_size
        system_type: system_prop.system_type
        //The system_type will be numbered 1-n, with anything greater than n being assumed as a raspi-pi. Identifying the system type is used for the honeypot to cross refrence what the keys should look like. In the real world this information would be gathered automatically from the internet 
      }
    }
    this.terminalLoggedIn = false;
  }
  terminal() {

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
    mac: adress,
    operatingSystem: 'linux'
  open_ports: [0, 0]
  },
  {
    ssid: "ssid"
  pksd: "pksd"
  ipv4: [192, 168, 1, 1]
  ipv6: [ipv6]
  location: "US"
  },
  {
    file_count: 7
  file_size: 33.6
  system_type: 1
  }
)
var toaster = new computer(
  {
    mac: adress,
    operatingSystem: 'linux'
  open_ports: [0, 0]
  },
  {
    ssid: "ssid"
  pksd: "pksd"
  ipv4: [192, 168, 1, 2]
  ipv6: [ipv6]
  location: "US"
  },
  {
    file_count: 13
  file_size: 44
  system_type: 2
  }

)
var voiceAssistant = new computer(
  {
    mac: adress,
    operatingSystem: 'linux'
  open_ports: [0, 0]
  },
  {
    ssid: "ssid"
  pksd: "pksd"
  ipv4: [192, 168, 1, 3]
  ipv6: [ipv6]
  location: "US"
  },
  {
    file_count: 2
  file_size: 10
  system_type: 3
  }
)
var printer = new computer(
  {
    mac: adress,
    operatingSystem: 'linux'
    open_ports: [0, 0]
  },
  {
    ssid: "ssid"
    pksd: "pksd"
    ipv4: [192, 168, 1, 4]
    ipv6: [ipv6]
    location: "US"
  },
  {
    file_count: 1
    file_size: 64
    system_type: 4
  }
)
/*This defines a honeyhub.

*/
class honeyhub {
  constructor(computers) {
    keyGen( var comp = new computer, encryption_key) {
      var HONEYkey = (comp.system_props.file_size) * (comp.system_props.file_count)
    }
}
}
console.log(printer.system_prop.file_size);